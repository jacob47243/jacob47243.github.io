/* ─── Imports ────────────────────────────────────────────────────────────── */
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import URDFLoader from 'urdf-loader';
import { ColladaLoader } from 'three/addons/loaders/ColladaLoader.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { solveIK } from './solver.js';


/* ─── Scene setup ────────────────────────────────────────────────────────── */
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);


const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.01, 10);
camera.position.set(1, 1, 1);

const PAGE_MAP = import.meta.glob('./pages/*.html', { as: 'raw', eager: true });

function getPageHTML(boxID) {
  // './pages/box1.html'
  const key = `./pages/${boxID}.html`;   // <-- correct relative path
  return PAGE_MAP[key] ?? `<h2>No page for ${boxID}</h2>`;
}

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.outputEncoding          = THREE.sRGBEncoding;
renderer.physicallyCorrectLights = true;
renderer.toneMapping             = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure     = 1.2;
document.getElementById('app').appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0.8, 0);
controls.update();

/* HDR env (lighting only) */
new RGBELoader().setPath('/hdr/').load('studio_small_09_4k.hdr', (tex) => {
  tex.mapping       = THREE.EquirectangularReflectionMapping;
  scene.environment = tex;
  console.log('HDR loaded');                                    /* DEBUG */
});

scene.add(new THREE.AmbientLight(0x444444));
const dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(1, 2, 2);
dirLight.castShadow = true;
dirLight.shadow.mapSize.set(2048, 2048);
dirLight.shadow.camera.left   = -2;
dirLight.shadow.camera.right  =  2;
dirLight.shadow.camera.top    =  2;
dirLight.shadow.camera.bottom = -2;
dirLight.shadow.camera.updateProjectionMatrix();
scene.add(dirLight);

/* ─── Interaction state ──────────────────────────────────────────────────── */
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const boxes = [];

let phase = 'idle';
let tapTimer = 0;
let reachCounter = 0;
const reachDist = 0.04;
const stableFrames = 10;

let robot, jointNames, prevAngles, waitPose;
let animationTarget = null;
let effector;
let carriedBox = null;
let selectedBox = null;
let awaitingReturn = false;   // true between panel close and cube replaced


/* panel state */
const panel     = document.getElementById('side-panel');
let panelShown  = false;    // true when panel is visible
let panelTogglePending = false;   // becomes true when camera heads to pedestal

/* -- close button logic ------------------------------------ */
/* slide-out finished → launch robot return + camera/FOV */
panel.addEventListener('transitionend', (e) => {
  if (e.propertyName !== 'transform' || panel.classList.contains('open')) return;

  // 1. start the camera glide + FOV reset
  const { pos, tgt } = panCameraSide(-1, 0.50);   // back to the left
  startCamMove(pos, tgt, 0.4);
  startFovTween(50, 0.4);

  // 2. tell the main loop the cube now needs to go home
  awaitingReturn = true;
  phase = 'return';   // forces the robot into the return branch
});

panel.addEventListener('click', (e) => {
  if (e.target.id !== 'close-panel') return;        // ignore other clicks

  /* 1 — start the slide-out */
  panel.classList.remove('open');   // triggers CSS transition
  panelShown         = false;
  panelTogglePending = false;       // prevents the “open” branch from re-firing

  /* 2 — keep controls disabled and tell main loop to return the cube */
  awaitingReturn = true;            // handled in the 'return' phase
  phase          = 'return';        // forces robot into its return logic
});



/* target on white pedestal */
const pedestalDrop = new THREE.Vector3(0, 0.305, 0.9);

/* camera animation state */
let camAnim = null;                        // {from:Vector3, to:Vector3, t:0…1}
const camHome = camera.position.clone();   // default “idle” location
const camHomeTarget = controls.target.clone();
const pedestalFocus = new THREE.Vector3(0, 0.8, 0);         // robot waist
const pedestalPos   = pedestalDrop.clone();                 // (0,0.305,0.9)


/* ─── Materials ─────────────────────────────────────────────────────────── */
const pedestalMat = new THREE.MeshStandardMaterial({ color: 0x111111, metalness: 0.85, roughness: 0.15, envMapIntensity: 1 });
const whitePedMat = new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.2, metalness: 0.05, clearcoat: 0.4, clearcoatRoughness: 0.05, envMapIntensity: 1.2 });

/* ─── Helper to compute yaw ─────────────────────────────────────────────── */
function yawToTarget(target) {
  const basePos = new THREE.Vector3().setFromMatrixPosition(robot.matrixWorld);
  const dx = target.x - basePos.x;
  const dz = target.z - basePos.z;
  const yaw = Math.atan2(dz, -dx);
  console.log('yawToTarget →', yaw.toFixed(3));                 /* DEBUG */
  return yaw;
}

// NEW — put this near your other helpers
function effTargetForBoxCenter(centerWorld, offsetLocal) {
    // Convert the box’s local offset under the effector into world space,
    // then subtract so the EE sits where the *box center* should be.
    const q = new THREE.Quaternion();
    effector.getWorldQuaternion(q);
    const offsetWorld = offsetLocal.clone().applyQuaternion(q);
    return centerWorld.clone().sub(offsetWorld);
  }
  

/* ─── Helper to lerp pose ───────────────────────────────────────────────── */
function lerpPose(pose, speed = 0.15) {
  jointNames.forEach((n) => {
    const prev = robot.joints[n].angle;
    const next = THREE.MathUtils.lerp(prev, pose[n], speed);
    robot.setJointValue(n, next);
  });
}

/* ─── Create boxes & pedestals ──────────────────────────────────────────── */
function createBox(x, y, z, color, id) {
  const ped = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.15, 48), pedestalMat);
  ped.position.set(x, y - 0.125 - 0.075, z);
  ped.castShadow = ped.receiveShadow = true;
  scene.add(ped);

  const geo = new RoundedBoxGeometry(0.25, 0.25, 0.25, 5, 0.02);
  const mat = new THREE.MeshPhysicalMaterial({ color, roughness: 0.25, metalness: 0.1, clearcoat: 0.3, clearcoatRoughness: 0.05, envMapIntensity: 1.2 });
  const box = new THREE.Mesh(geo, mat);
  box.position.set(x, y, z);
  box.castShadow = box.receiveShadow = true;
  scene.add(box);
  boxes.push(box);
  box.userData.placed = false;
  box.userData.boxID = id;
}

function initBoxes() {
  const y = 0.7;
  createBox(-0.7, y, -0.60, 0x4f6d7a, 'box1');
  createBox(-0.25, y, -0.85, 0x6c9163, 'box2');
  createBox(0.25, y, -0.85, 0x9c6644, 'box3');
  createBox(0.7, y, -0.60, 0xc9a66b, 'box4');

  const whitePed = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.18, 64), whitePedMat);
  whitePed.position.set(0, 0.18 / 2, 0.9);
  whitePed.castShadow = whitePed.receiveShadow = true;
  scene.add(whitePed);
}


function startCamMove(toPos, toTarget, seconds = 1.0) {
  camAnim = {
    fromPos: camera.position.clone(),
    toPos,
    fromTgt: controls.target.clone(),
    toTgt : toTarget,
    t     : 0,
    dur   : seconds
  };
}

let fovAnim = null;   // {from,to,t,dur}

function startFovTween(toFovDeg, seconds = 0.4) {
  fovAnim = {
    from : camera.fov,
    to   : toFovDeg,
    t    : 0,
    dur  : seconds
  };
}

/**
 * Pan camera sideways by a screen-fraction while keeping distance & elevation.
 * dir = +1 → right, -1 → left
 * frac = fraction of viewport width to cover (0 … 1)
 */
function panCameraSide(dir, frac) {
  // world-space “right” unit vector of the camera
  const right = new THREE.Vector3(1, 0, 0)
    .applyQuaternion(camera.quaternion)
    .normalize();

  // project current camera-target distance onto that axis
  const camDist = camera.position.distanceTo(controls.target);
  const offset  = right.multiplyScalar(camDist * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * frac);

  return {
    pos: camera.position.clone().addScaledVector(offset, dir),
    tgt: controls.target.clone().addScaledVector(offset, dir)
  };
}


function onMouseClick(e) {
  const r = renderer.domElement.getBoundingClientRect();
  mouse.x = ((e.clientX - r.left) / r.width) * 2 - 1;
  mouse.y = -((e.clientY - r.top) / r.height) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);

  const hit = raycaster.intersectObjects(boxes.filter(b => !b.userData.placed));
  if (hit.length && phase === 'idle') {
    selectedBox     = hit[0].object;
    animationTarget = selectedBox.position.clone();
    phase           = 'tap';
    tapTimer = reachCounter = 0;

    panel.innerHTML = getPageHTML(selectedBox.userData.boxID);
    console.log('Phase → tap', animationTarget);               /* DEBUG */
  
    /* ----- camera: dolly back and slide toward pedestal ----- */
    const camDest = pedestalPos.clone().add(new THREE.Vector3(0, .2, 3)); // CHECKPOINT
    startCamMove(camDest, pedestalFocus, 1.2);    // 1.2 s travel
    panelTogglePending = true;       // open the panel when tween finishes

  }
  
}

/* ─── Collada & URDF loaders ───────────────────────────────────────────── */
const colladaLoader = new ColladaLoader();
colladaLoader.convertUpAxis = false;
const loader = new URDFLoader();
loader.loadMeshCb = (url, m, done) => colladaLoader.load(url, dae => done(dae.scene));

function makeEffectorAtFlange(link4) {
  // ── 1) create an empty node and stick it at link_4’s origin ──
  const eff = new THREE.Object3D();
  eff.position.set(0, 0, 0);      // local coords → flange origin
  link4.add(eff);

  // ── 2) debug sphere so we can see it ──
  eff.add(
    new THREE.Mesh(
      new THREE.SphereGeometry(0.15),
      new THREE.MeshBasicMaterial({ color: 0xff0000 })
    )
  );
  return eff;
}


/* ─── Load robot ────────────────────────────────────────────────────────── */
loader.load('/irb5400_full.urdf', (rbt) => {
  robot = rbt;
  robot.rotation.x = -Math.PI / 2;
  robot.scale.setScalar(0.4);
  robot.traverse(o => { if (o.isMesh) o.castShadow = o.receiveShadow = true; });
  scene.add(robot);

  effector   = makeEffectorAtFlange(robot.links['link_4']);
  jointNames = ['joint1', 'joint2', 'joint3', 'joint4'];
  prevAngles = jointNames.map(() => 0);

  initBoxes();
  window.addEventListener('click', onMouseClick);

  const waitPos = new THREE.Vector3(0, 1.0, 0);
  waitPose = solveIK(robot, jointNames, waitPos, effector);

  /* ─── Animation loop ─────────────────────────────────────────────────── */
  renderer.setAnimationLoop(() => {
    let desired = null;

    /* Phase logic -------------------------------------------------------- */
    if (phase === 'tap' && animationTarget) {
      desired = solveIK(robot, jointNames, animationTarget, effector);

    } else if (phase === 'carry') {
        // Plan lives on the carried box
        const plan   = carriedBox.userData.plan;
        const offset = carriedBox.userData.graspOffsetLocal; // e.g., (0,0,0.15)
      
        // Choose current waypoint for the *box center*
        let targetCenter = null;
        if (carriedBox.userData.step === 'above') {
          targetCenter = plan.hoverCenter;       // hover above pedestal
        } else if (carriedBox.userData.step === 'down') {
          targetCenter = plan.downCenter;        // center on pedestal top
        } else if (carriedBox.userData.step === 'up') {
          targetCenter = plan.hoverCenter;       // retreat to hover
        }
      
        // Convert desired box center → required EE world target
        const effTgt = effTargetForBoxCenter(targetCenter, offset);
      
        // Drive with IK this frame
        desired = solveIK(robot, jointNames, effTgt, effector);
      
        // Stash for proximity checks after FK update
        scene.userData.__carryEffTgt = effTgt.clone();
      
    } else if (phase === 'return') {
      desired = solveIK(robot, jointNames, waitPos, effector);
      if (desired) {
        phase = 'idle';
        startCamMove(camHome, camHomeTarget, 1.0);

        if (awaitingReturn) {          // cube is now home
          awaitingReturn = false;
          controls.enabled = true;     // user regains orbit
  }

      }
    
    } else {
      desired = waitPose;
    }
    

    /* IK or pose interpolation ------------------------------------------ */
    if (desired) {
      jointNames.forEach((n, i) => {
        const a = THREE.MathUtils.lerp(prevAngles[i], desired[i], 0.2);
        robot.setJointValue(n, a);
        prevAngles[i] = a;
      });
    }

    /* Detect contact at first tap --------------------------------------- */
    robot.updateMatrixWorld(true);
    const effPos = new THREE.Vector3().setFromMatrixPosition(effector.matrixWorld);

    if (phase === 'tap' && effPos.distanceTo(animationTarget) < reachDist) {
    console.log('Tap reached');                               /* DEBUG */
    carriedBox = selectedBox;
    carriedBox.userData.originalScale = carriedBox.scale.clone();
    carriedBox.userData.placed = true;

    // Attach and record grasp offset (local under effector)
    effector.add(carriedBox);
    carriedBox.scale.multiplyScalar(1 / robot.scale.x);
    carriedBox.position.set(0, 0, 0.15);                      // your grasp
    carriedBox.userData.graspOffsetLocal = carriedBox.position.clone();

    // Plan the placement in world space (box center targets)
    carriedBox.userData.plan = {
        downCenter : pedestalDrop.clone(),                               // exact pedestal center (already 0.305 y)
        hoverCenter: pedestalDrop.clone().add(new THREE.Vector3(0, 0.12, 0)), // 12 cm above
    };
    carriedBox.userData.step = 'above';

    phase = 'carry';
    console.log('Phase → carry');                             /* DEBUG */
    }

        // Carry step gating by BOX-CENTER proximity (robust)
        if (phase === 'carry' && carriedBox?.userData?.plan) {
            const plan = carriedBox.userData.plan;
        
            // current box center in world (even while attached to effector)
            const boxWorld = new THREE.Vector3().setFromMatrixPosition(carriedBox.matrixWorld);
        
            // pick the active waypoint for the *box center*
            const targetCenter =
            carriedBox.userData.step === 'above' ? plan.hoverCenter :
            carriedBox.userData.step === 'down'  ? plan.downCenter  :
                                                    plan.hoverCenter; // retreat
        
            // be a bit lenient so we don’t stall at hover
            const close = boxWorld.distanceTo(targetCenter) < 0.025; // 2.5 cm
        
            // console.log('step', carriedBox.userData.step, 'd=', boxWorld.distanceTo(targetCenter).toFixed(3));
        
            if (carriedBox.userData.step === 'above' && close) {
            carriedBox.userData.step = 'down';
            console.log('Phase → down');
            }
            else if (carriedBox.userData.step === 'down' && close) {
            // Detach and snap exactly to pedestal center
            scene.add(carriedBox);  // detach from effector
            carriedBox.position.copy(plan.downCenter);
            carriedBox.scale.copy(carriedBox.userData.originalScale);
            carriedBox.userData.step = 'up';
            console.log('Cube dropped, Phase → up');
            }
            else if (carriedBox.userData.step === 'up' && close) {
            carriedBox.userData.plan = null;
            carriedBox = null;
            phase = 'return';
            console.log('Phase → return');
            }
        }
  

        /* camera tween ---------------------------------------------------------- */
    if (camAnim) {
      camAnim.t += (1 / 60) / camAnim.dur;                 // assume 60 fps
      const k = THREE.MathUtils.smoothstep(
                  Math.min(camAnim.t, 1), 0, 1);           // smoother curve

      camera.position.lerpVectors(camAnim.fromPos, camAnim.toPos, k);
      controls.target.lerpVectors(camAnim.fromTgt, camAnim.toTgt, k);
      controls.update();

      if (fovAnim) {
        fovAnim.t += (1/60) / fovAnim.dur;          // assume 60 fps
        const k = Math.min(fovAnim.t, 1);
        camera.fov = THREE.MathUtils.lerp(fovAnim.from, fovAnim.to, k);
        camera.updateProjectionMatrix();
      }
      

      if (k >= 1) camAnim = null;                          // finished

      if (k >= 1) {
        if (panelTogglePending && !panelShown) {
          panel.classList.add('open');
          panelShown = true;
          controls.enabled = false;
          const {pos, tgt} = panCameraSide(+1, 0.50);   // +1 = right
          startCamMove(pos, tgt, 0.4);                  // match CSS 0.4 s
          startFovTween(30, 0.4);       //CHECKPOINT
        } else if (!panelTogglePending && panelShown) {
          panel.classList.remove('open');
          panelShown = false;
        }
      }
    }


    renderer.render(scene, camera);
  });
});

/* ─── Resize handling ──────────────────────────────────────────────────── */
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
