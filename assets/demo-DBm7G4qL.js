import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css              */const bh=`<button id="close-panel" style="
  position:absolute; top:12px; right:12px;
  width:32px; height:32px; border:none; border-radius:50%;
  font:16px/32px sans-serif; cursor:pointer;
">✕</button>
<h2 style="margin-top:0">Box 1</h2>
<p>This is the first cube.</p>`,Th=`<button id="close-panel" style="
  position:absolute; top:12px; right:12px;
  width:32px; height:32px; border:none; border-radius:50%;
  font:16px/32px sans-serif; cursor:pointer;
">✕</button>
<h2 style="margin-top:0">Box 2</h2>
<p>This is the second cube.</p>`,wh=`<button id="close-panel" style="
  position:absolute; top:12px; right:12px;
  width:32px; height:32px; border:none; border-radius:50%;
  font:16px/32px sans-serif; cursor:pointer;
">✕</button>
<h2 style="margin-top:0">Box 3</h2>
<p>This is the third cube.</p>`,Ah=`<button id="close-panel" style="
  position:absolute; top:12px; right:12px;
  width:32px; height:32px; border:none; border-radius:50%;
  font:16px/32px sans-serif; cursor:pointer;
">✕</button>
<h2 style="margin-top:0">Box 4</h2>
<p>This is the fourth cube.</p>`;/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const No="179",is={ROTATE:0,DOLLY:1,PAN:2},es={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Rh=0,Qo=1,Ch=2,wc=1,Ph=2,qn=3,Jn=0,sn=1,Ln=2,hi=0,ss=1,el=2,tl=3,nl=4,Lh=5,Ai=100,Dh=101,Ih=102,Nh=103,Uh=104,Fh=200,Oh=201,Bh=202,kh=203,Xa=204,qa=205,zh=206,Vh=207,Hh=208,Gh=209,Wh=210,Xh=211,qh=212,Yh=213,jh=214,Ya=0,ja=1,Ka=2,os=3,Za=4,Ja=5,$a=6,Qa=7,Xr=0,Kh=1,Zh=2,ui=0,Jh=1,$h=2,Qh=3,Ac=4,eu=5,tu=6,nu=7,il="attached",iu="detached",Rc=300,ls=301,cs=302,Ur=303,eo=304,qr=306,Ci=1e3,Tn=1001,to=1002,hn=1003,su=1004,Ks=1005,en=1006,aa=1007,jn=1008,Un=1009,Cc=1010,Pc=1011,Is=1012,Uo=1013,Pi=1014,cn=1015,Kn=1016,Fo=1017,Oo=1018,Ns=1020,Lc=35902,Dc=1021,Ic=1022,vn=1023,Us=1026,Fs=1027,Nc=1028,Bo=1029,Uc=1030,ko=1031,zo=1033,Rr=33776,Cr=33777,Pr=33778,Lr=33779,no=35840,io=35841,so=35842,ro=35843,ao=36196,oo=37492,lo=37496,co=37808,ho=37809,uo=37810,fo=37811,po=37812,mo=37813,go=37814,_o=37815,xo=37816,vo=37817,Mo=37818,yo=37819,So=37820,Eo=37821,Dr=36492,bo=36494,To=36495,Fc=36283,wo=36284,Ao=36285,Ro=36286,Fr=2300,Co=2301,oa=2302,sl=2400,rl=2401,al=2402,ru=2500,au=3200,ou=3201,Yr=0,lu=1,ci="",It="srgb",Li="srgb-linear",Or="linear",Et="srgb",Oi=7680,ol=519,cu=512,hu=513,uu=514,Oc=515,du=516,fu=517,pu=518,mu=519,ll=35044,cl="300 es",In=2e3,Br=2001;class Ni{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hl=1234567;const Rs=Math.PI/180,hs=180/Math.PI;function pi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function at(i,e,t){return Math.max(e,Math.min(t,i))}function Vo(i,e){return(i%e+e)%e}function gu(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function _u(i,e,t){return i!==e?(t-i)/(e-i):0}function Cs(i,e,t){return(1-t)*i+t*e}function xu(i,e,t,n){return Cs(i,e,1-Math.exp(-t*n))}function vu(i,e=1){return e-Math.abs(Vo(i,e*2)-e)}function Mu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function yu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Su(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Eu(i,e){return i+Math.random()*(e-i)}function bu(i){return i*(.5-Math.random())}function Tu(i){i!==void 0&&(hl=i);let e=hl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function wu(i){return i*Rs}function Au(i){return i*hs}function Ru(i){return(i&i-1)===0&&i!==0}function Cu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Pu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Lu(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),f=a((e-n)/2),p=r((n-e)/2),M=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*d,c*f,o*l);break;case"YZY":i.set(c*f,o*h,c*d,o*l);break;case"ZXZ":i.set(c*d,c*f,o*h,o*l);break;case"XZX":i.set(o*h,c*M,c*p,o*l);break;case"YXY":i.set(c*p,o*h,c*M,o*l);break;case"ZYZ":i.set(c*M,c*p,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Qi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function $t(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Dn={DEG2RAD:Rs,RAD2DEG:hs,generateUUID:pi,clamp:at,euclideanModulo:Vo,mapLinear:gu,inverseLerp:_u,lerp:Cs,damp:xu,pingpong:vu,smoothstep:Mu,smootherstep:yu,randInt:Su,randFloat:Eu,randFloatSpread:bu,seededRandom:Tu,degToRad:wu,radToDeg:Au,isPowerOfTwo:Ru,ceilPowerOfTwo:Cu,floorPowerOfTwo:Pu,setQuaternionFromProperEuler:Lu,normalize:$t,denormalize:Qi};class Je{constructor(e=0,t=0){Je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3];const f=r[a+0],p=r[a+1],M=r[a+2],v=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=M,e[t+3]=v;return}if(d!==v||c!==f||l!==p||h!==M){let m=1-o;const u=c*f+l*p+h*M+d*v,L=u>=0?1:-1,C=1-u*u;if(C>Number.EPSILON){const D=Math.sqrt(C),N=Math.atan2(D,u*L);m=Math.sin(m*N)/D,o=Math.sin(o*N)/D}const T=o*L;if(c=c*m+f*T,l=l*m+p*T,h=h*m+M*T,d=d*m+v*T,m===1-o){const D=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=D,l*=D,h*=D,d*=D}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[a],f=r[a+1],p=r[a+2],M=r[a+3];return e[t]=o*M+h*d+c*p-l*f,e[t+1]=c*M+h*f+l*d-o*p,e[t+2]=l*M+h*p+o*f-c*d,e[t+3]=h*M-o*d-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(r/2),f=c(n/2),p=c(s/2),M=c(r/2);switch(a){case"XYZ":this._x=f*h*d+l*p*M,this._y=l*p*d-f*h*M,this._z=l*h*M+f*p*d,this._w=l*h*d-f*p*M;break;case"YXZ":this._x=f*h*d+l*p*M,this._y=l*p*d-f*h*M,this._z=l*h*M-f*p*d,this._w=l*h*d+f*p*M;break;case"ZXY":this._x=f*h*d-l*p*M,this._y=l*p*d+f*h*M,this._z=l*h*M+f*p*d,this._w=l*h*d-f*p*M;break;case"ZYX":this._x=f*h*d-l*p*M,this._y=l*p*d+f*h*M,this._z=l*h*M-f*p*d,this._w=l*h*d+f*p*M;break;case"YZX":this._x=f*h*d+l*p*M,this._y=l*p*d+f*h*M,this._z=l*h*M-f*p*d,this._w=l*h*d-f*p*M;break;case"XZY":this._x=f*h*d-l*p*M,this._y=l*p*d-f*h*M,this._z=l*h*M+f*p*d,this._w=l*h*d+f*p*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],f=n+o+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ul.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ul.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return la.copy(this).projectOnVector(e),this.sub(la)}reflect(e){return this.sub(la.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const la=new O,ul=new dn;class st{constructor(e,t,n,s,r,a,o,c,l){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],f=n[2],p=n[5],M=n[8],v=s[0],m=s[3],u=s[6],L=s[1],C=s[4],T=s[7],D=s[2],N=s[5],U=s[8];return r[0]=a*v+o*L+c*D,r[3]=a*m+o*C+c*N,r[6]=a*u+o*T+c*U,r[1]=l*v+h*L+d*D,r[4]=l*m+h*C+d*N,r[7]=l*u+h*T+d*U,r[2]=f*v+p*L+M*D,r[5]=f*m+p*C+M*N,r[8]=f*u+p*T+M*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,f=o*c-h*r,p=l*r-a*c,M=t*d+n*f+s*p;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/M;return e[0]=d*v,e[1]=(s*l-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=f*v,e[4]=(h*t-s*c)*v,e[5]=(s*r-o*t)*v,e[6]=p*v,e[7]=(n*c-l*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ca.makeScale(e,t)),this}rotate(e){return this.premultiply(ca.makeRotation(-e)),this}translate(e,t){return this.premultiply(ca.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ca=new st;function Bc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Os(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Du(){const i=Os("canvas");return i.style.display="block",i}const dl={};function rs(i){i in dl||(dl[i]=!0,console.warn(i))}function Iu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const fl=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pl=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nu(){const i={enabled:!0,workingColorSpace:Li,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Et&&(s.r=Zn(s.r),s.g=Zn(s.g),s.b=Zn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Et&&(s.r=as(s.r),s.g=as(s.g),s.b=as(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ci?Or:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return rs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return rs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Li]:{primaries:e,whitePoint:n,transfer:Or,toXYZ:fl,fromXYZ:pl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:It},outputColorSpaceConfig:{drawingBufferColorSpace:It}},[It]:{primaries:e,whitePoint:n,transfer:Et,toXYZ:fl,fromXYZ:pl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:It}}}),i}const lt=Nu();function Zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function as(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Bi;class Uu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Bi===void 0&&(Bi=Os("canvas")),Bi.width=e.width,Bi.height=e.height;const s=Bi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Bi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Os("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Zn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zn(t[n]/255)*255):t[n]=Zn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Fu=0;class Ho{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=pi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ha(s[a].image)):r.push(ha(s[a]))}else r=ha(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function ha(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Uu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ou=0;const ua=new O;class jt extends Ni{constructor(e=jt.DEFAULT_IMAGE,t=jt.DEFAULT_MAPPING,n=Tn,s=Tn,r=en,a=jn,o=vn,c=Un,l=jt.DEFAULT_ANISOTROPY,h=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=pi(),this.name="",this.source=new Ho(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ua).x}get height(){return this.source.getSize(ua).y}get depth(){return this.source.getSize(ua).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ci:e.x=e.x-Math.floor(e.x);break;case Tn:e.x=e.x<0?0:1;break;case to:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ci:e.y=e.y-Math.floor(e.y);break;case Tn:e.y=e.y<0?0:1;break;case to:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=Rc;jt.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,n=0,s=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],d=c[8],f=c[1],p=c[5],M=c[9],v=c[2],m=c[6],u=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-v)<.01&&Math.abs(M-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+v)<.1&&Math.abs(M+m)<.1&&Math.abs(l+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(l+1)/2,T=(p+1)/2,D=(u+1)/2,N=(h+f)/4,U=(d+v)/4,R=(M+m)/4;return C>T&&C>D?C<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(C),s=N/n,r=U/n):T>D?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=N/s,r=R/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=U/r,s=R/r),this.set(n,s,r,t),this}let L=Math.sqrt((m-M)*(m-M)+(d-v)*(d-v)+(f-h)*(f-h));return Math.abs(L)<.001&&(L=1),this.x=(m-M)/L,this.y=(d-v)/L,this.z=(f-h)/L,this.w=Math.acos((l+p+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bu extends Ni{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new jt(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ho(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Di extends Bu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class kc extends jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ku extends jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fs{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,yn):yn.fromBufferAttribute(r,a),yn.applyMatrix4(e.matrixWorld),this.expandByPoint(yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zs.copy(n.boundingBox)),Zs.applyMatrix4(e.matrixWorld),this.union(Zs)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vs),Js.subVectors(this.max,vs),ki.subVectors(e.a,vs),zi.subVectors(e.b,vs),Vi.subVectors(e.c,vs),ei.subVectors(zi,ki),ti.subVectors(Vi,zi),xi.subVectors(ki,Vi);let t=[0,-ei.z,ei.y,0,-ti.z,ti.y,0,-xi.z,xi.y,ei.z,0,-ei.x,ti.z,0,-ti.x,xi.z,0,-xi.x,-ei.y,ei.x,0,-ti.y,ti.x,0,-xi.y,xi.x,0];return!da(t,ki,zi,Vi,Js)||(t=[1,0,0,0,1,0,0,0,1],!da(t,ki,zi,Vi,Js))?!1:($s.crossVectors(ei,ti),t=[$s.x,$s.y,$s.z],da(t,ki,zi,Vi,Js))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const zn=[new O,new O,new O,new O,new O,new O,new O,new O],yn=new O,Zs=new fs,ki=new O,zi=new O,Vi=new O,ei=new O,ti=new O,xi=new O,vs=new O,Js=new O,$s=new O,vi=new O;function da(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){vi.fromArray(i,r);const o=s.x*Math.abs(vi.x)+s.y*Math.abs(vi.y)+s.z*Math.abs(vi.z),c=e.dot(vi),l=t.dot(vi),h=n.dot(vi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const zu=new fs,Ms=new O,fa=new O;class ps{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):zu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ms.subVectors(e,this.center);const t=Ms.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ms,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ms.copy(e.center).add(fa)),this.expandByPoint(Ms.copy(e.center).sub(fa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Vn=new O,pa=new O,Qs=new O,ni=new O,ma=new O,er=new O,ga=new O;class ks{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vn.copy(this.origin).addScaledVector(this.direction,t),Vn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){pa.copy(e).add(t).multiplyScalar(.5),Qs.copy(t).sub(e).normalize(),ni.copy(this.origin).sub(pa);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Qs),o=ni.dot(this.direction),c=-ni.dot(Qs),l=ni.lengthSq(),h=Math.abs(1-a*a);let d,f,p,M;if(h>0)if(d=a*c-o,f=a*o-c,M=r*h,d>=0)if(f>=-M)if(f<=M){const v=1/h;d*=v,f*=v,p=d*(d+a*f+2*o)+f*(a*d+f+2*c)+l}else f=r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*c)+l;else f<=-M?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+f*(f+2*c)+l):f<=M?(d=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+f*(f+2*c)+l);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(pa).addScaledVector(Qs,f),p}intersectSphere(e,t){Vn.subVectors(e.center,this.origin);const n=Vn.dot(this.direction),s=Vn.dot(Vn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Vn)!==null}intersectTriangle(e,t,n,s,r){ma.subVectors(t,e),er.subVectors(n,e),ga.crossVectors(ma,er);let a=this.direction.dot(ga),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ni.subVectors(this.origin,e);const c=o*this.direction.dot(er.crossVectors(ni,er));if(c<0)return null;const l=o*this.direction.dot(ma.cross(ni));if(l<0||c+l>a)return null;const h=-o*ni.dot(ga);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class et{constructor(e,t,n,s,r,a,o,c,l,h,d,f,p,M,v,m){et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,d,f,p,M,v,m)}set(e,t,n,s,r,a,o,c,l,h,d,f,p,M,v,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=M,u[11]=v,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new et().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Hi.setFromMatrixColumn(e,0).length(),r=1/Hi.setFromMatrixColumn(e,1).length(),a=1/Hi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=a*h,p=a*d,M=o*h,v=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=p+M*l,t[5]=f-v*l,t[9]=-o*c,t[2]=v-f*l,t[6]=M+p*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*h,p=c*d,M=l*h,v=l*d;t[0]=f+v*o,t[4]=M*o-p,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-M,t[6]=v+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*h,p=c*d,M=l*h,v=l*d;t[0]=f-v*o,t[4]=-a*d,t[8]=M+p*o,t[1]=p+M*o,t[5]=a*h,t[9]=v-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*h,p=a*d,M=o*h,v=o*d;t[0]=c*h,t[4]=M*l-p,t[8]=f*l+v,t[1]=c*d,t[5]=v*l+f,t[9]=p*l-M,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,p=a*l,M=o*c,v=o*l;t[0]=c*h,t[4]=v-f*d,t[8]=M*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*d+M,t[10]=f-v*d}else if(e.order==="XZY"){const f=a*c,p=a*l,M=o*c,v=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=f*d+v,t[5]=a*h,t[9]=p*d-M,t[2]=M*d-p,t[6]=o*h,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vu,e,Hu)}lookAt(e,t,n){const s=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),ii.crossVectors(n,an),ii.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),ii.crossVectors(n,an)),ii.normalize(),tr.crossVectors(an,ii),s[0]=ii.x,s[4]=tr.x,s[8]=an.x,s[1]=ii.y,s[5]=tr.y,s[9]=an.y,s[2]=ii.z,s[6]=tr.z,s[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],f=n[9],p=n[13],M=n[2],v=n[6],m=n[10],u=n[14],L=n[3],C=n[7],T=n[11],D=n[15],N=s[0],U=s[4],R=s[8],x=s[12],y=s[1],P=s[5],k=s[9],V=s[13],H=s[2],Z=s[6],F=s[10],ie=s[14],q=s[3],re=s[7],ae=s[11],fe=s[15];return r[0]=a*N+o*y+c*H+l*q,r[4]=a*U+o*P+c*Z+l*re,r[8]=a*R+o*k+c*F+l*ae,r[12]=a*x+o*V+c*ie+l*fe,r[1]=h*N+d*y+f*H+p*q,r[5]=h*U+d*P+f*Z+p*re,r[9]=h*R+d*k+f*F+p*ae,r[13]=h*x+d*V+f*ie+p*fe,r[2]=M*N+v*y+m*H+u*q,r[6]=M*U+v*P+m*Z+u*re,r[10]=M*R+v*k+m*F+u*ae,r[14]=M*x+v*V+m*ie+u*fe,r[3]=L*N+C*y+T*H+D*q,r[7]=L*U+C*P+T*Z+D*re,r[11]=L*R+C*k+T*F+D*ae,r[15]=L*x+C*V+T*ie+D*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],f=e[10],p=e[14],M=e[3],v=e[7],m=e[11],u=e[15];return M*(+r*c*d-s*l*d-r*o*f+n*l*f+s*o*p-n*c*p)+v*(+t*c*p-t*l*f+r*a*f-s*a*p+s*l*h-r*c*h)+m*(+t*l*d-t*o*p-r*a*d+n*a*p+r*o*h-n*l*h)+u*(-s*o*h-t*c*d+t*o*f+s*a*d-n*a*f+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],f=e[10],p=e[11],M=e[12],v=e[13],m=e[14],u=e[15],L=d*m*l-v*f*l+v*c*p-o*m*p-d*c*u+o*f*u,C=M*f*l-h*m*l-M*c*p+a*m*p+h*c*u-a*f*u,T=h*v*l-M*d*l+M*o*p-a*v*p-h*o*u+a*d*u,D=M*d*c-h*v*c-M*o*f+a*v*f+h*o*m-a*d*m,N=t*L+n*C+s*T+r*D;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/N;return e[0]=L*U,e[1]=(v*f*r-d*m*r-v*s*p+n*m*p+d*s*u-n*f*u)*U,e[2]=(o*m*r-v*c*r+v*s*l-n*m*l-o*s*u+n*c*u)*U,e[3]=(d*c*r-o*f*r-d*s*l+n*f*l+o*s*p-n*c*p)*U,e[4]=C*U,e[5]=(h*m*r-M*f*r+M*s*p-t*m*p-h*s*u+t*f*u)*U,e[6]=(M*c*r-a*m*r-M*s*l+t*m*l+a*s*u-t*c*u)*U,e[7]=(a*f*r-h*c*r+h*s*l-t*f*l-a*s*p+t*c*p)*U,e[8]=T*U,e[9]=(M*d*r-h*v*r-M*n*p+t*v*p+h*n*u-t*d*u)*U,e[10]=(a*v*r-M*o*r+M*n*l-t*v*l-a*n*u+t*o*u)*U,e[11]=(h*o*r-a*d*r-h*n*l+t*d*l+a*n*p-t*o*p)*U,e[12]=D*U,e[13]=(h*v*s-M*d*s+M*n*f-t*v*f-h*n*m+t*d*m)*U,e[14]=(M*o*s-a*v*s-M*n*c+t*v*c+a*n*m-t*o*m)*U,e[15]=(a*d*s-h*o*s+h*n*c-t*d*c-a*n*f+t*o*f)*U,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,d=o+o,f=r*l,p=r*h,M=r*d,v=a*h,m=a*d,u=o*d,L=c*l,C=c*h,T=c*d,D=n.x,N=n.y,U=n.z;return s[0]=(1-(v+u))*D,s[1]=(p+T)*D,s[2]=(M-C)*D,s[3]=0,s[4]=(p-T)*N,s[5]=(1-(f+u))*N,s[6]=(m+L)*N,s[7]=0,s[8]=(M+C)*U,s[9]=(m-L)*U,s[10]=(1-(f+v))*U,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Hi.set(s[0],s[1],s[2]).length();const a=Hi.set(s[4],s[5],s[6]).length(),o=Hi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Sn.copy(this);const l=1/r,h=1/a,d=1/o;return Sn.elements[0]*=l,Sn.elements[1]*=l,Sn.elements[2]*=l,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=d,Sn.elements[9]*=d,Sn.elements[10]*=d,t.setFromRotationMatrix(Sn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=In,c=!1){const l=this.elements,h=2*r/(t-e),d=2*r/(n-s),f=(t+e)/(t-e),p=(n+s)/(n-s);let M,v;if(c)M=r/(a-r),v=a*r/(a-r);else if(o===In)M=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Br)M=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=M,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=In,c=!1){const l=this.elements,h=2/(t-e),d=2/(n-s),f=-(t+e)/(t-e),p=-(n+s)/(n-s);let M,v;if(c)M=1/(a-r),v=a/(a-r);else if(o===In)M=-2/(a-r),v=-(a+r)/(a-r);else if(o===Br)M=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=M,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Hi=new O,Sn=new et,Vu=new O(0,0,0),Hu=new O(1,1,1),ii=new O,tr=new O,an=new O,ml=new et,gl=new dn;class rn{constructor(e=0,t=0,n=0,s=rn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-at(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(at(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-at(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(at(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ml.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ml,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gl.setFromEuler(this),this.setFromQuaternion(gl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rn.DEFAULT_ORDER="XYZ";class Go{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Gu=0;const _l=new O,Gi=new dn,Hn=new et,nr=new O,ys=new O,Wu=new O,Xu=new dn,xl=new O(1,0,0),vl=new O(0,1,0),Ml=new O(0,0,1),yl={type:"added"},qu={type:"removed"},Wi={type:"childadded",child:null},_a={type:"childremoved",child:null};class Nt extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gu++}),this.uuid=pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new O,t=new rn,n=new dn,s=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new et},normalMatrix:{value:new st}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Go,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gi.setFromAxisAngle(e,t),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(e,t){return Gi.setFromAxisAngle(e,t),this.quaternion.premultiply(Gi),this}rotateX(e){return this.rotateOnAxis(xl,e)}rotateY(e){return this.rotateOnAxis(vl,e)}rotateZ(e){return this.rotateOnAxis(Ml,e)}translateOnAxis(e,t){return _l.copy(e).applyQuaternion(this.quaternion),this.position.add(_l.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xl,e)}translateY(e){return this.translateOnAxis(vl,e)}translateZ(e){return this.translateOnAxis(Ml,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?nr.copy(e):nr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(ys,nr,this.up):Hn.lookAt(nr,ys,this.up),this.quaternion.setFromRotationMatrix(Hn),s&&(Hn.extractRotation(s.matrixWorld),Gi.setFromRotationMatrix(Hn),this.quaternion.premultiply(Gi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yl),Wi.child=e,this.dispatchEvent(Wi),Wi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qu),_a.child=e,this.dispatchEvent(_a),_a.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yl),Wi.child=e,this.dispatchEvent(Wi),Wi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,e,Wu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,Xu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),f=a(e.skeletons),p=a(e.animations),M=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),M.length>0&&(n.nodes=M)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Nt.DEFAULT_UP=new O(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const En=new O,Gn=new O,xa=new O,Wn=new O,Xi=new O,qi=new O,Sl=new O,va=new O,Ma=new O,ya=new O,Sa=new _t,Ea=new _t,ba=new _t;class bn{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),En.subVectors(e,t),s.cross(En);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){En.subVectors(s,t),Gn.subVectors(n,t),xa.subVectors(e,t);const a=En.dot(En),o=En.dot(Gn),c=En.dot(xa),l=Gn.dot(Gn),h=Gn.dot(xa),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const f=1/d,p=(l*c-o*h)*f,M=(a*h-o*c)*f;return r.set(1-p-M,M,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Wn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Wn.x),c.addScaledVector(a,Wn.y),c.addScaledVector(o,Wn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Sa.setScalar(0),Ea.setScalar(0),ba.setScalar(0),Sa.fromBufferAttribute(e,t),Ea.fromBufferAttribute(e,n),ba.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Sa,r.x),a.addScaledVector(Ea,r.y),a.addScaledVector(ba,r.z),a}static isFrontFacing(e,t,n,s){return En.subVectors(n,t),Gn.subVectors(e,t),En.cross(Gn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),En.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return bn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return bn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Xi.subVectors(s,n),qi.subVectors(r,n),va.subVectors(e,n);const c=Xi.dot(va),l=qi.dot(va);if(c<=0&&l<=0)return t.copy(n);Ma.subVectors(e,s);const h=Xi.dot(Ma),d=qi.dot(Ma);if(h>=0&&d<=h)return t.copy(s);const f=c*d-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Xi,a);ya.subVectors(e,r);const p=Xi.dot(ya),M=qi.dot(ya);if(M>=0&&p<=M)return t.copy(r);const v=p*l-c*M;if(v<=0&&l>=0&&M<=0)return o=l/(l-M),t.copy(n).addScaledVector(qi,o);const m=h*M-p*d;if(m<=0&&d-h>=0&&p-M>=0)return Sl.subVectors(r,s),o=(d-h)/(d-h+(p-M)),t.copy(s).addScaledVector(Sl,o);const u=1/(m+v+f);return a=v*u,o=f*u,t.copy(n).addScaledVector(Xi,a).addScaledVector(qi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},ir={h:0,s:0,l:0};function Ta(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class tt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=lt.workingColorSpace){if(e=Vo(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ta(a,r,e+1/3),this.g=Ta(a,r,e),this.b=Ta(a,r,e-1/3)}return lt.colorSpaceToWorking(this,s),this}setStyle(e,t=It){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){const n=zc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}copyLinearToSRGB(e){return this.r=as(e.r),this.g=as(e.g),this.b=as(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return lt.workingToColorSpace(Xt.copy(this),e),Math.round(at(Xt.r*255,0,255))*65536+Math.round(at(Xt.g*255,0,255))*256+Math.round(at(Xt.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(Xt.copy(this),t);const n=Xt.r,s=Xt.g,r=Xt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=It){lt.workingToColorSpace(Xt.copy(this),e);const t=Xt.r,n=Xt.g,s=Xt.b;return e!==It?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(si),this.setHSL(si.h+e,si.s+t,si.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(si),e.getHSL(ir);const n=Cs(si.h,ir.h,t),s=Cs(si.s,ir.s,t),r=Cs(si.l,ir.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new tt;tt.NAMES=zc;let Yu=0;class mi extends Ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=pi(),this.name="",this.type="Material",this.blending=ss,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xa,this.blendDst=qa,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ol,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ss&&(n.blending=this.blending),this.side!==Jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xa&&(n.blendSrc=this.blendSrc),this.blendDst!==qa&&(n.blendDst=this.blendDst),this.blendEquation!==Ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==os&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ol&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Bs extends mi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=Xr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yn=ju();function ju(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,s[c]=24,s[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,s[c]=-l-1,s[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,s[c]=13,s[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,s[c]=24,s[c|256]=24):(n[c]=31744,n[c|256]=64512,s[c]=13,s[c|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;(l&8388608)===0;)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function Ku(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=at(i,-65504,65504),Yn.floatView[0]=i;const e=Yn.uint32View[0],t=e>>23&511;return Yn.baseTable[t]+((e&8388607)>>Yn.shiftTable[t])}function Zu(i){const e=i>>10;return Yn.uint32View[0]=Yn.mantissaTable[Yn.offsetTable[e]+(i&1023)]+Yn.exponentTable[e],Yn.floatView[0]}class sr{static toHalfFloat(e){return Ku(e)}static fromHalfFloat(e){return Zu(e)}}const Ft=new O,rr=new Je;let Ju=0;class un{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ju++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ll,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)rr.fromBufferAttribute(this,t),rr.applyMatrix3(e),this.setXY(t,rr.x,rr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Qi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qi(t,this.array)),t}setX(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qi(t,this.array)),t}setY(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qi(t,this.array)),t}setW(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),s=$t(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),s=$t(s,this.array),r=$t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ll&&(e.usage=this.usage),e}}class Vc extends un{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Hc extends un{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Pt extends un{constructor(e,t,n){super(new Float32Array(e),t,n)}}let $u=0;const gn=new et,wa=new Nt,Yi=new O,on=new fs,Ss=new fs,Gt=new O;class fn extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bc(e)?Hc:Vc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new st().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,n){return gn.makeTranslation(e,t,n),this.applyMatrix4(gn),this}scale(e,t,n){return gn.makeScale(e,t,n),this.applyMatrix4(gn),this}lookAt(e){return wa.lookAt(e),wa.updateMatrix(),this.applyMatrix4(wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Pt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ps);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ss.setFromBufferAttribute(o),this.morphTargetsRelative?(Gt.addVectors(on.min,Ss.min),on.expandByPoint(Gt),Gt.addVectors(on.max,Ss.max),on.expandByPoint(Gt)):(on.expandByPoint(Ss.min),on.expandByPoint(Ss.max))}on.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Gt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Gt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Gt.fromBufferAttribute(o,l),c&&(Yi.fromBufferAttribute(e,l),Gt.add(Yi)),s=Math.max(s,n.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let R=0;R<n.count;R++)o[R]=new O,c[R]=new O;const l=new O,h=new O,d=new O,f=new Je,p=new Je,M=new Je,v=new O,m=new O;function u(R,x,y){l.fromBufferAttribute(n,R),h.fromBufferAttribute(n,x),d.fromBufferAttribute(n,y),f.fromBufferAttribute(r,R),p.fromBufferAttribute(r,x),M.fromBufferAttribute(r,y),h.sub(l),d.sub(l),p.sub(f),M.sub(f);const P=1/(p.x*M.y-M.x*p.y);isFinite(P)&&(v.copy(h).multiplyScalar(M.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-M.x).multiplyScalar(P),o[R].add(v),o[x].add(v),o[y].add(v),c[R].add(m),c[x].add(m),c[y].add(m))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let R=0,x=L.length;R<x;++R){const y=L[R],P=y.start,k=y.count;for(let V=P,H=P+k;V<H;V+=3)u(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const C=new O,T=new O,D=new O,N=new O;function U(R){D.fromBufferAttribute(s,R),N.copy(D);const x=o[R];C.copy(x),C.sub(D.multiplyScalar(D.dot(x))).normalize(),T.crossVectors(N,x);const P=T.dot(c[R])<0?-1:1;a.setXYZW(R,C.x,C.y,C.z,P)}for(let R=0,x=L.length;R<x;++R){const y=L[R],P=y.start,k=y.count;for(let V=P,H=P+k;V<H;V+=3)U(e.getX(V+0)),U(e.getX(V+1)),U(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new un(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new O,r=new O,a=new O,o=new O,c=new O,l=new O,h=new O,d=new O;if(e)for(let f=0,p=e.count;f<p;f+=3){const M=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,M),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,M),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(M,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,d=o.normalized,f=new l.constructor(c.length*h);let p=0,M=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?p=c[v]*o.data.stride+o.offset:p=c[v]*h;for(let u=0;u<h;u++)f[M++]=l[p++]}return new un(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fn,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){const f=l[h],p=e(f,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){const p=l[d];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],d=r[l];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const El=new et,Mi=new ks,ar=new ps,bl=new O,or=new O,lr=new O,cr=new O,Aa=new O,hr=new O,Tl=new O,ur=new O;class Ot extends Nt{constructor(e=new fn,t=new Bs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){hr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],d=r[c];h!==0&&(Aa.fromBufferAttribute(d,e),a?hr.addScaledVector(Aa,h):hr.addScaledVector(Aa.sub(t),h))}t.add(hr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere),ar.applyMatrix4(r),Mi.copy(e.ray).recast(e.near),!(ar.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(ar,bl)===null||Mi.origin.distanceToSquared(bl)>(e.far-e.near)**2))&&(El.copy(r).invert(),Mi.copy(e.ray).applyMatrix4(El),!(n.boundingBox!==null&&Mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Mi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let M=0,v=f.length;M<v;M++){const m=f[M],u=a[m.materialIndex],L=Math.max(m.start,p.start),C=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let T=L,D=C;T<D;T+=3){const N=o.getX(T),U=o.getX(T+1),R=o.getX(T+2);s=dr(this,u,e,n,l,h,d,N,U,R),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const M=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=M,u=v;m<u;m+=3){const L=o.getX(m),C=o.getX(m+1),T=o.getX(m+2);s=dr(this,a,e,n,l,h,d,L,C,T),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let M=0,v=f.length;M<v;M++){const m=f[M],u=a[m.materialIndex],L=Math.max(m.start,p.start),C=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let T=L,D=C;T<D;T+=3){const N=T,U=T+1,R=T+2;s=dr(this,u,e,n,l,h,d,N,U,R),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const M=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=M,u=v;m<u;m+=3){const L=m,C=m+1,T=m+2;s=dr(this,a,e,n,l,h,d,L,C,T),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Qu(i,e,t,n,s,r,a,o){let c;if(e.side===sn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Jn,o),c===null)return null;ur.copy(o),ur.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ur);return l<t.near||l>t.far?null:{distance:l,point:ur.clone(),object:i}}function dr(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,or),i.getVertexPosition(c,lr),i.getVertexPosition(l,cr);const h=Qu(i,e,t,n,or,lr,cr,Tl);if(h){const d=new O;bn.getBarycoord(Tl,or,lr,cr,d),s&&(h.uv=bn.getInterpolatedAttribute(s,o,c,l,d,new Je)),r&&(h.uv1=bn.getInterpolatedAttribute(r,o,c,l,d,new Je)),a&&(h.normal=bn.getInterpolatedAttribute(a,o,c,l,d,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new O,materialIndex:0};bn.getNormal(or,lr,cr,f.normal),h.face=f,h.barycoord=d}return h}class Ui extends fn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],d=[];let f=0,p=0;M("z","y","x",-1,-1,n,t,e,a,r,0),M("z","y","x",1,-1,n,t,-e,a,r,1),M("x","z","y",1,1,e,n,t,s,a,2),M("x","z","y",1,-1,e,n,-t,s,a,3),M("x","y","z",1,-1,e,t,n,s,r,4),M("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Pt(l,3)),this.setAttribute("normal",new Pt(h,3)),this.setAttribute("uv",new Pt(d,2));function M(v,m,u,L,C,T,D,N,U,R,x){const y=T/U,P=D/R,k=T/2,V=D/2,H=N/2,Z=U+1,F=R+1;let ie=0,q=0;const re=new O;for(let ae=0;ae<F;ae++){const fe=ae*P-V;for(let _e=0;_e<Z;_e++){const ve=_e*y-k;re[v]=ve*L,re[m]=fe*C,re[u]=H,l.push(re.x,re.y,re.z),re[v]=0,re[m]=0,re[u]=N>0?1:-1,h.push(re.x,re.y,re.z),d.push(_e/U),d.push(1-ae/R),ie+=1}}for(let ae=0;ae<R;ae++)for(let fe=0;fe<U;fe++){const _e=f+fe+Z*ae,ve=f+fe+Z*(ae+1),xe=f+(fe+1)+Z*(ae+1),X=f+(fe+1)+Z*ae;c.push(_e,ve,X),c.push(ve,xe,X),q+=6}o.addGroup(p,q,x),p+=q,f+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ui(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function us(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Qt(i){const e={};for(let t=0;t<i.length;t++){const n=us(i[t]);for(const s in n)e[s]=n[s]}return e}function ed(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Gc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const td={clone:us,merge:Qt};var nd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,id=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends mi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nd,this.fragmentShader=id,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=us(e.uniforms),this.uniformsGroups=ed(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Wc extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ri=new O,wl=new Je,Al=new Je;class qt extends Wc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=hs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hs*2*Math.atan(Math.tan(Rs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ri.x,ri.y).multiplyScalar(-e/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-e/ri.z)}getViewSize(e,t){return this.getViewBounds(e,wl,Al),t.subVectors(Al,wl)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Rs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ji=-90,Ki=1;class sd extends Nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new qt(ji,Ki,e,t);s.layers=this.layers,this.add(s);const r=new qt(ji,Ki,e,t);r.layers=this.layers,this.add(r);const a=new qt(ji,Ki,e,t);a.layers=this.layers,this.add(a);const o=new qt(ji,Ki,e,t);o.layers=this.layers,this.add(o);const c=new qt(ji,Ki,e,t);c.layers=this.layers,this.add(c);const l=new qt(ji,Ki,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===In)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Br)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(d,f,p),e.xr.enabled=M,n.texture.needsPMREMUpdate=!0}}class Xc extends jt{constructor(e=[],t=ls,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rd extends Di{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Xc(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ui(5,5,5),r=new di({name:"CubemapFromEquirect",uniforms:us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:hi});r.uniforms.tEquirect.value=t;const a=new Ot(s,r),o=t.minFilter;return t.minFilter===jn&&(t.minFilter=en),new sd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class ts extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ad={type:"move"};class Ra{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ts,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ts,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ts,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),u=this._getHandJoint(l,v);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,M=.005;l.inputState.pinching&&f>p+M?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-M&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ad)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ts;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class qc extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentIntensity=1,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Rl=new O,Cl=new _t,Pl=new _t,od=new O,Ll=new et,fr=new O,Ca=new ps,Dl=new et,Pa=new ks;class ld extends Ot{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=il,this.bindMatrix=new et,this.bindMatrixInverse=new et,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new fs),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,fr),this.boundingBox.expandByPoint(fr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ps),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,fr),this.boundingSphere.expandByPoint(fr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ca.copy(this.boundingSphere),Ca.applyMatrix4(s),e.ray.intersectsSphere(Ca)!==!1&&(Dl.copy(s).invert(),Pa.copy(e.ray).applyMatrix4(Dl),!(this.boundingBox!==null&&Pa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Pa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new _t,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===il?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===iu?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Cl.fromBufferAttribute(s.attributes.skinIndex,e),Pl.fromBufferAttribute(s.attributes.skinWeight,e),Rl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Pl.getComponent(r);if(a!==0){const o=Cl.getComponent(r);Ll.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(od.copy(Rl).applyMatrix4(Ll),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Yc extends Nt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class jc extends jt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=hn,h=hn,d,f){super(null,a,o,c,l,h,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Il=new et,cd=new et;class Wo{constructor(e=[],t=[]){this.uuid=pi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new et)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new et;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:cd;Il.multiplyMatrices(o,t[r]),Il.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Wo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new jc(t,e,e,vn,cn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Yc),this.bones.push(a),this.boneInverses.push(new et().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}const La=new O,hd=new O,ud=new st;class li{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=La.subVectors(n,t).cross(hd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(La),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ud.getNormalMatrix(e),s=this.coplanarPoint(La).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yi=new ps,dd=new Je(.5,.5),pr=new O;class Xo{constructor(e=new li,t=new li,n=new li,s=new li,r=new li,a=new li){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=In,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],f=r[6],p=r[7],M=r[8],v=r[9],m=r[10],u=r[11],L=r[12],C=r[13],T=r[14],D=r[15];if(s[0].setComponents(l-a,p-h,u-M,D-L).normalize(),s[1].setComponents(l+a,p+h,u+M,D+L).normalize(),s[2].setComponents(l+o,p+d,u+v,D+C).normalize(),s[3].setComponents(l-o,p-d,u-v,D-C).normalize(),n)s[4].setComponents(c,f,m,T).normalize(),s[5].setComponents(l-c,p-f,u-m,D-T).normalize();else if(s[4].setComponents(l-c,p-f,u-m,D-T).normalize(),t===In)s[5].setComponents(l+c,p+f,u+m,D+T).normalize();else if(t===Br)s[5].setComponents(c,f,m,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(e){yi.center.set(0,0,0);const t=dd.distanceTo(e.center);return yi.radius=.7071067811865476+t,yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(pr.x=s.normal.x>0?e.max.x:e.min.x,pr.y=s.normal.y>0?e.max.y:e.min.y,pr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(pr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Po extends mi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const kr=new O,zr=new O,Nl=new et,Es=new ks,mr=new ps,Da=new O,Ul=new O;class Kc extends Nt{constructor(e=new fn,t=new Po){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)kr.fromBufferAttribute(t,s-1),zr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=kr.distanceTo(zr);e.setAttribute("lineDistance",new Pt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere),mr.applyMatrix4(s),mr.radius+=r,e.ray.intersectsSphere(mr)===!1)return;Nl.copy(s).invert(),Es.copy(e.ray).applyMatrix4(Nl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const p=Math.max(0,a.start),M=Math.min(h.count,a.start+a.count);for(let v=p,m=M-1;v<m;v+=l){const u=h.getX(v),L=h.getX(v+1),C=gr(this,e,Es,c,u,L,v);C&&t.push(C)}if(this.isLineLoop){const v=h.getX(M-1),m=h.getX(p),u=gr(this,e,Es,c,v,m,M-1);u&&t.push(u)}}else{const p=Math.max(0,a.start),M=Math.min(f.count,a.start+a.count);for(let v=p,m=M-1;v<m;v+=l){const u=gr(this,e,Es,c,v,v+1,v);u&&t.push(u)}if(this.isLineLoop){const v=gr(this,e,Es,c,M-1,p,M-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function gr(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(kr.fromBufferAttribute(o,s),zr.fromBufferAttribute(o,r),t.distanceSqToSegment(kr,zr,Da,Ul)>n)return;Da.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Da);if(!(l<e.near||l>e.far))return{distance:l,point:Ul.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Fl=new O,Ol=new O;class fd extends Kc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Fl.fromBufferAttribute(t,s),Ol.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Fl.distanceTo(Ol);e.setAttribute("lineDistance",new Pt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Zc extends jt{constructor(e,t,n=Pi,s,r,a,o=hn,c=hn,l,h=Us,d=1){if(h!==Us&&h!==Fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ho(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class zs extends fn{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],f=[],p=[];let M=0;const v=[],m=n/2;let u=0;L(),a===!1&&(e>0&&C(!0),t>0&&C(!1)),this.setIndex(h),this.setAttribute("position",new Pt(d,3)),this.setAttribute("normal",new Pt(f,3)),this.setAttribute("uv",new Pt(p,2));function L(){const T=new O,D=new O;let N=0;const U=(t-e)/n;for(let R=0;R<=r;R++){const x=[],y=R/r,P=y*(t-e)+e;for(let k=0;k<=s;k++){const V=k/s,H=V*c+o,Z=Math.sin(H),F=Math.cos(H);D.x=P*Z,D.y=-y*n+m,D.z=P*F,d.push(D.x,D.y,D.z),T.set(Z,U,F).normalize(),f.push(T.x,T.y,T.z),p.push(V,1-y),x.push(M++)}v.push(x)}for(let R=0;R<s;R++)for(let x=0;x<r;x++){const y=v[x][R],P=v[x+1][R],k=v[x+1][R+1],V=v[x][R+1];(e>0||x!==0)&&(h.push(y,P,V),N+=3),(t>0||x!==r-1)&&(h.push(P,k,V),N+=3)}l.addGroup(u,N,0),u+=N}function C(T){const D=M,N=new Je,U=new O;let R=0;const x=T===!0?e:t,y=T===!0?1:-1;for(let k=1;k<=s;k++)d.push(0,m*y,0),f.push(0,y,0),p.push(.5,.5),M++;const P=M;for(let k=0;k<=s;k++){const H=k/s*c+o,Z=Math.cos(H),F=Math.sin(H);U.x=x*F,U.y=m*y,U.z=x*Z,d.push(U.x,U.y,U.z),f.push(0,y,0),N.x=Z*.5+.5,N.y=F*.5*y+.5,p.push(N.x,N.y),M++}for(let k=0;k<s;k++){const V=D+k,H=P+k;T===!0?h.push(H,H+1,V):h.push(H+1,H,V),R+=3}l.addGroup(u,R,T===!0?1:2),u+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zs(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class jr extends fn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=e/o,f=t/c,p=[],M=[],v=[],m=[];for(let u=0;u<h;u++){const L=u*f-a;for(let C=0;C<l;C++){const T=C*d-r;M.push(T,-L,0),v.push(0,0,1),m.push(C/o),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let L=0;L<o;L++){const C=L+l*u,T=L+l*(u+1),D=L+1+l*(u+1),N=L+1+l*u;p.push(C,T,N),p.push(T,D,N)}this.setIndex(p),this.setAttribute("position",new Pt(M,3)),this.setAttribute("normal",new Pt(v,3)),this.setAttribute("uv",new Pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Kr extends fn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],d=new O,f=new O,p=[],M=[],v=[],m=[];for(let u=0;u<=n;u++){const L=[],C=u/n;let T=0;u===0&&a===0?T=.5/t:u===n&&c===Math.PI&&(T=-.5/t);for(let D=0;D<=t;D++){const N=D/t;d.x=-e*Math.cos(s+N*r)*Math.sin(a+C*o),d.y=e*Math.cos(a+C*o),d.z=e*Math.sin(s+N*r)*Math.sin(a+C*o),M.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),m.push(N+T,1-C),L.push(l++)}h.push(L)}for(let u=0;u<n;u++)for(let L=0;L<t;L++){const C=h[u][L+1],T=h[u][L],D=h[u+1][L],N=h[u+1][L+1];(u!==0||a>0)&&p.push(C,T,N),(u!==n-1||c<Math.PI)&&p.push(T,D,N)}this.setIndex(p),this.setAttribute("position",new Pt(M,3)),this.setAttribute("normal",new Pt(v,3)),this.setAttribute("uv",new Pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Jc extends mi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yr,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $c extends Jc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return at(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new tt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new tt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new tt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ps extends mi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new tt(16777215),this.specular=new tt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yr,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=Xr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class pd extends mi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yr,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=Xr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class md extends mi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=au,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gd extends mi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function _r(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function _d(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function xd(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Bl(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function Qc(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}class Zr{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class vd extends Zr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sl,endingEnd:sl}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case rl:r=e,o=2*t-n;break;case al:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case rl:a=e,c=2*n-t;break;case al:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,M=(n-t)/(s-t),v=M*M,m=v*M,u=-f*m+2*f*v-f*M,L=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*M+1,C=(-1-p)*m+(1.5+p)*v+.5*M,T=p*m-p*v;for(let D=0;D!==o;++D)r[D]=u*a[h+D]+L*a[l+D]+C*a[c+D]+T*a[d+D];return r}}class Md extends Zr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),d=1-h;for(let f=0;f!==o;++f)r[f]=a[l+f]*d+a[c+f]*h;return r}}class yd extends Zr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class An{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_r(t,this.TimeBufferType),this.values=_r(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:_r(e.times,Array),values:_r(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new yd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Md(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new vd(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Fr:t=this.InterpolantFactoryMethodDiscrete;break;case Co:t=this.InterpolantFactoryMethodLinear;break;case oa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fr;case this.InterpolantFactoryMethodLinear:return Co;case this.InterpolantFactoryMethodSmooth:return oa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&_d(s))for(let o=0,c=s.length;o!==c;++o){const l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===oa,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{const d=o*n,f=d-n,p=d+n;for(let M=0;M!==n;++M){const v=t[d+M];if(v!==t[f+M]||v!==t[p+M]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const d=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[d+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}An.prototype.ValueTypeName="";An.prototype.TimeBufferType=Float32Array;An.prototype.ValueBufferType=Float32Array;An.prototype.DefaultInterpolation=Co;class ms extends An{constructor(e,t,n){super(e,t,n)}}ms.prototype.ValueTypeName="bool";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=Fr;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;class eh extends An{constructor(e,t,n,s){super(e,t,n,s)}}eh.prototype.ValueTypeName="color";class Vr extends An{constructor(e,t,n,s){super(e,t,n,s)}}Vr.prototype.ValueTypeName="number";class Sd extends Zr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t);let l=e*o;for(let h=l+o;l!==h;l+=4)dn.slerpFlat(r,0,a,l-o,a,l,c);return r}}class Vs extends An{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Sd(this.times,this.values,this.getValueSize(),e)}}Vs.prototype.ValueTypeName="quaternion";Vs.prototype.InterpolantFactoryMethodSmooth=void 0;class gs extends An{constructor(e,t,n){super(e,t,n)}}gs.prototype.ValueTypeName="string";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=Fr;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;class ds extends An{constructor(e,t,n,s){super(e,t,n,s)}}ds.prototype.ValueTypeName="vector";class kl{constructor(e="",t=-1,n=[],s=ru){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=pi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(bd(n[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(An.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const h=xd(c);c=Bl(c,1,h),l=Bl(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Vr(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],h=l.name.match(r);if(h&&h.length>1){const d=h[1];let f=s[d];f||(s[d]=f=[]),f.push(l)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,f,p,M,v){if(p.length!==0){const m=[],u=[];Qc(p,m,u,M),m.length!==0&&v.push(new d(f,m,u))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let d=0;d<l.length;d++){const f=l[d].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let M;for(M=0;M<f.length;M++)if(f[M].morphTargets)for(let v=0;v<f[M].morphTargets.length;v++)p[f[M].morphTargets[v]]=-1;for(const v in p){const m=[],u=[];for(let L=0;L!==f[M].morphTargets.length;++L){const C=f[M];m.push(C.time),u.push(C.morphTarget===v?1:0)}s.push(new Vr(".morphTargetInfluence["+v+"]",m,u))}c=p.length*a}else{const p=".bones["+t[d].name+"]";n(ds,p+".position",f,"pos",s),n(Vs,p+".quaternion",f,"rot",s),n(ds,p+".scale",f,"scl",s)}}return s.length===0?null:new this(r,c,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Ed(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Vr;case"vector":case"vector2":case"vector3":case"vector4":return ds;case"color":return eh;case"quaternion":return Vs;case"bool":case"boolean":return ms;case"string":return gs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function bd(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Ed(i.type);if(i.times===void 0){const t=[],n=[];Qc(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Ls={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Td{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){const d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=l.length;d<f;d+=2){const p=l[d],M=l[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return M}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const th=new Td;class fi{constructor(e){this.manager=e!==void 0?e:th,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}fi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Xn={};class wd extends Error{constructor(e,t){super(e),this.response=t}}class qo extends fi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ls.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Xn[e]!==void 0){Xn[e].push({onLoad:t,onProgress:n,onError:s});return}Xn[e]=[],Xn[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Xn[e],d=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=f?parseInt(f):0,M=p!==0;let v=0;const m=new ReadableStream({start(u){L();function L(){d.read().then(({done:C,value:T})=>{if(C)u.close();else{v+=T.byteLength;const D=new ProgressEvent("progress",{lengthComputable:M,loaded:v,total:p});for(let N=0,U=h.length;N<U;N++){const R=h[N];R.onProgress&&R.onProgress(D)}u.enqueue(T),L()}},C=>{u.error(C)})}}});return new Response(m)}else throw new wd(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),f=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(f);return l.arrayBuffer().then(M=>p.decode(M))}}}).then(l=>{Ls.add(`file:${e}`,l);const h=Xn[e];delete Xn[e];for(let d=0,f=h.length;d<f;d++){const p=h[d];p.onLoad&&p.onLoad(l)}}).catch(l=>{const h=Xn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Xn[e];for(let d=0,f=h.length;d<f;d++){const p=h[d];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Zi=new WeakMap;class Ad extends fi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Ls.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=Zi.get(a);d===void 0&&(d=[],Zi.set(a,d)),d.push({onLoad:t,onError:s})}return a}const o=Os("img");function c(){h(),t&&t(this);const d=Zi.get(this)||[];for(let f=0;f<d.length;f++){const p=d[f];p.onLoad&&p.onLoad(this)}Zi.delete(this),r.manager.itemEnd(e)}function l(d){h(),s&&s(d),Ls.remove(`image:${e}`);const f=Zi.get(this)||[];for(let p=0;p<f.length;p++){const M=f[p];M.onError&&M.onError(d)}Zi.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ls.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class nh extends fi{constructor(e){super(e)}load(e,t,n,s){const r=this,a=new jc,o=new qo(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(c){let l;try{l=r.parse(c)}catch(h){if(s!==void 0)s(h);else{console.error(h);return}}l.image!==void 0?a.image=l.image:l.data!==void 0&&(a.image.width=l.width,a.image.height=l.height,a.image.data=l.data),a.wrapS=l.wrapS!==void 0?l.wrapS:Tn,a.wrapT=l.wrapT!==void 0?l.wrapT:Tn,a.magFilter=l.magFilter!==void 0?l.magFilter:en,a.minFilter=l.minFilter!==void 0?l.minFilter:en,a.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(a.colorSpace=l.colorSpace),l.flipY!==void 0&&(a.flipY=l.flipY),l.format!==void 0&&(a.format=l.format),l.type!==void 0&&(a.type=l.type),l.mipmaps!==void 0&&(a.mipmaps=l.mipmaps,a.minFilter=jn),l.mipmapCount===1&&(a.minFilter=en),l.generateMipmaps!==void 0&&(a.generateMipmaps=l.generateMipmaps),a.needsUpdate=!0,t&&t(a,l)},n,s),a}}class ih extends fi{constructor(e){super(e)}load(e,t,n,s){const r=new jt,a=new Ad(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Jr extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ia=new et,zl=new O,Vl=new O;class Yo{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xo,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;zl.setFromMatrixPosition(e.matrixWorld),t.position.copy(zl),Vl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vl),t.updateMatrixWorld(),Ia.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ia,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ia)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Rd extends Yo{constructor(){super(new qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=hs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Cd extends Jr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Rd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Hl=new et,bs=new O,Na=new O;class Pd extends Yo{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Je(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),bs.setFromMatrixPosition(e.matrixWorld),n.position.copy(bs),Na.copy(n.position),Na.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Na),n.updateMatrixWorld(),s.makeTranslation(-bs.x,-bs.y,-bs.z),Hl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hl,n.coordinateSystem,n.reversedDepth)}}class Ld extends Jr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Pd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class jo extends Wc{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Dd extends Yo{constructor(){super(new jo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sh extends Jr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new Dd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class rh extends Jr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ah{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Id extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Gl=new et;class Nd{constructor(e,t,n=0,s=1/0){this.ray=new ks(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Go,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Gl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Gl),this}intersectObject(e,t=!0,n=[]){return Lo(e,this,n,t),n.sort(Wl),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Lo(e[s],this,n,t);return n.sort(Wl),n}}function Wl(i,e){return i.distance-e.distance}function Lo(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Lo(r[a],e,t,!0)}}class Xl{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=at(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(at(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Ud extends Ni{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function ql(i,e,t,n){const s=Fd(n);switch(t){case Dc:return i*e;case Nc:return i*e/s.components*s.byteLength;case Bo:return i*e/s.components*s.byteLength;case Uc:return i*e*2/s.components*s.byteLength;case ko:return i*e*2/s.components*s.byteLength;case Ic:return i*e*3/s.components*s.byteLength;case vn:return i*e*4/s.components*s.byteLength;case zo:return i*e*4/s.components*s.byteLength;case Rr:case Cr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Pr:case Lr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case io:case ro:return Math.max(i,16)*Math.max(e,8)/4;case no:case so:return Math.max(i,8)*Math.max(e,8)/2;case ao:case oo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ho:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case uo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case fo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case po:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case mo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case go:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case _o:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case xo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case vo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Mo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case yo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case So:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Eo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Dr:case bo:case To:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Fc:case wo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ao:case Ro:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Fd(i){switch(i){case Un:case Cc:return{byteLength:1,components:1};case Is:case Pc:case Kn:return{byteLength:2,components:1};case Fo:case Oo:return{byteLength:2,components:4};case Pi:case Uo:case cn:return{byteLength:4,components:1};case Lc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:No}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=No);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function oh(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Od(i){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,d=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((p,M)=>p.start-M.start);let f=0;for(let p=1;p<d.length;p++){const M=d[f],v=d[p];v.start<=M.start+M.count+1?M.count=Math.max(M.count,v.start+v.count-M.start):(++f,d[f]=v)}d.length=f+1;for(let p=0,M=d.length;p<M;p++){const v=d[p];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Bd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Yd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Jd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$d=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ef=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,af=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,of=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,lf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,hf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,uf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,df=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ff=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mf="gl_FragColor = linearToOutputTexel( gl_FragColor );",gf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_f=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,xf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Mf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Sf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ef=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Af=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Lf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Df=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,If=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ff=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Of=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Bf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$f=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ep=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,tp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,np=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ip=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ap=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,op=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,lp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,up=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,pp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_p=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,yp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Sp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ep=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,wp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ap=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Rp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ip=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Op=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Xp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Yp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$p=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Qp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,em=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,im=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,rm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,am=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,om=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,cm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,um=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_m=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rt={alphahash_fragment:Bd,alphahash_pars_fragment:kd,alphamap_fragment:zd,alphamap_pars_fragment:Vd,alphatest_fragment:Hd,alphatest_pars_fragment:Gd,aomap_fragment:Wd,aomap_pars_fragment:Xd,batching_pars_vertex:qd,batching_vertex:Yd,begin_vertex:jd,beginnormal_vertex:Kd,bsdfs:Zd,iridescence_fragment:Jd,bumpmap_pars_fragment:$d,clipping_planes_fragment:Qd,clipping_planes_pars_fragment:ef,clipping_planes_pars_vertex:tf,clipping_planes_vertex:nf,color_fragment:sf,color_pars_fragment:rf,color_pars_vertex:af,color_vertex:of,common:lf,cube_uv_reflection_fragment:cf,defaultnormal_vertex:hf,displacementmap_pars_vertex:uf,displacementmap_vertex:df,emissivemap_fragment:ff,emissivemap_pars_fragment:pf,colorspace_fragment:mf,colorspace_pars_fragment:gf,envmap_fragment:_f,envmap_common_pars_fragment:xf,envmap_pars_fragment:vf,envmap_pars_vertex:Mf,envmap_physical_pars_fragment:Lf,envmap_vertex:yf,fog_vertex:Sf,fog_pars_vertex:Ef,fog_fragment:bf,fog_pars_fragment:Tf,gradientmap_pars_fragment:wf,lightmap_pars_fragment:Af,lights_lambert_fragment:Rf,lights_lambert_pars_fragment:Cf,lights_pars_begin:Pf,lights_toon_fragment:Df,lights_toon_pars_fragment:If,lights_phong_fragment:Nf,lights_phong_pars_fragment:Uf,lights_physical_fragment:Ff,lights_physical_pars_fragment:Of,lights_fragment_begin:Bf,lights_fragment_maps:kf,lights_fragment_end:zf,logdepthbuf_fragment:Vf,logdepthbuf_pars_fragment:Hf,logdepthbuf_pars_vertex:Gf,logdepthbuf_vertex:Wf,map_fragment:Xf,map_pars_fragment:qf,map_particle_fragment:Yf,map_particle_pars_fragment:jf,metalnessmap_fragment:Kf,metalnessmap_pars_fragment:Zf,morphinstance_vertex:Jf,morphcolor_vertex:$f,morphnormal_vertex:Qf,morphtarget_pars_vertex:ep,morphtarget_vertex:tp,normal_fragment_begin:np,normal_fragment_maps:ip,normal_pars_fragment:sp,normal_pars_vertex:rp,normal_vertex:ap,normalmap_pars_fragment:op,clearcoat_normal_fragment_begin:lp,clearcoat_normal_fragment_maps:cp,clearcoat_pars_fragment:hp,iridescence_pars_fragment:up,opaque_fragment:dp,packing:fp,premultiplied_alpha_fragment:pp,project_vertex:mp,dithering_fragment:gp,dithering_pars_fragment:_p,roughnessmap_fragment:xp,roughnessmap_pars_fragment:vp,shadowmap_pars_fragment:Mp,shadowmap_pars_vertex:yp,shadowmap_vertex:Sp,shadowmask_pars_fragment:Ep,skinbase_vertex:bp,skinning_pars_vertex:Tp,skinning_vertex:wp,skinnormal_vertex:Ap,specularmap_fragment:Rp,specularmap_pars_fragment:Cp,tonemapping_fragment:Pp,tonemapping_pars_fragment:Lp,transmission_fragment:Dp,transmission_pars_fragment:Ip,uv_pars_fragment:Np,uv_pars_vertex:Up,uv_vertex:Fp,worldpos_vertex:Op,background_vert:Bp,background_frag:kp,backgroundCube_vert:zp,backgroundCube_frag:Vp,cube_vert:Hp,cube_frag:Gp,depth_vert:Wp,depth_frag:Xp,distanceRGBA_vert:qp,distanceRGBA_frag:Yp,equirect_vert:jp,equirect_frag:Kp,linedashed_vert:Zp,linedashed_frag:Jp,meshbasic_vert:$p,meshbasic_frag:Qp,meshlambert_vert:em,meshlambert_frag:tm,meshmatcap_vert:nm,meshmatcap_frag:im,meshnormal_vert:sm,meshnormal_frag:rm,meshphong_vert:am,meshphong_frag:om,meshphysical_vert:lm,meshphysical_frag:cm,meshtoon_vert:hm,meshtoon_frag:um,points_vert:dm,points_frag:fm,shadow_vert:pm,shadow_frag:mm,sprite_vert:gm,sprite_frag:_m},Se={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Pn={basic:{uniforms:Qt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:Qt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new tt(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:Qt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:Qt([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:Qt([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new tt(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:Qt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:Qt([Se.points,Se.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:Qt([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:Qt([Se.common,Se.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:Qt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:Qt([Se.sprite,Se.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:Qt([Se.common,Se.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:Qt([Se.lights,Se.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Pn.physical={uniforms:Qt([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const xr={r:0,b:0,g:0},Si=new rn,xm=new et;function vm(i,e,t,n,s,r,a){const o=new tt(0);let c=r===!0?0:1,l,h,d=null,f=0,p=null;function M(C){let T=C.isScene===!0?C.background:null;return T&&T.isTexture&&(T=(C.backgroundBlurriness>0?t:e).get(T)),T}function v(C){let T=!1;const D=M(C);D===null?u(o,c):D&&D.isColor&&(u(D,1),T=!0);const N=i.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,a):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(C,T){const D=M(T);D&&(D.isCubeTexture||D.mapping===qr)?(h===void 0&&(h=new Ot(new Ui(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:us(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,U,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Si.copy(T.backgroundRotation),Si.x*=-1,Si.y*=-1,Si.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),h.material.uniforms.envMap.value=D,h.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(xm.makeRotationFromEuler(Si)),h.material.toneMapped=lt.getTransfer(D.colorSpace)!==Et,(d!==D||f!==D.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=D,f=D.version,p=i.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null)):D&&D.isTexture&&(l===void 0&&(l=new Ot(new jr(2,2),new di({name:"BackgroundMaterial",uniforms:us(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=D,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=lt.getTransfer(D.colorSpace)!==Et,D.matrixAutoUpdate===!0&&D.updateMatrix(),l.material.uniforms.uvTransform.value.copy(D.matrix),(d!==D||f!==D.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,d=D,f=D.version,p=i.toneMapping),l.layers.enableAll(),C.unshift(l,l.geometry,l.material,0,0,null))}function u(C,T){C.getRGB(xr,Gc(i)),n.buffers.color.setClear(xr.r,xr.g,xr.b,T,a)}function L(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(C,T=1){o.set(C),c=T,u(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(C){c=C,u(o,c)},render:v,addToRenderList:m,dispose:L}}function Mm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(y,P,k,V,H){let Z=!1;const F=d(V,k,P);r!==F&&(r=F,l(r.object)),Z=p(y,V,k,H),Z&&M(y,V,k,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,T(y,P,k,V),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function d(y,P,k){const V=k.wireframe===!0;let H=n[y.id];H===void 0&&(H={},n[y.id]=H);let Z=H[P.id];Z===void 0&&(Z={},H[P.id]=Z);let F=Z[V];return F===void 0&&(F=f(c()),Z[V]=F),F}function f(y){const P=[],k=[],V=[];for(let H=0;H<t;H++)P[H]=0,k[H]=0,V[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:k,attributeDivisors:V,object:y,attributes:{},index:null}}function p(y,P,k,V){const H=r.attributes,Z=P.attributes;let F=0;const ie=k.getAttributes();for(const q in ie)if(ie[q].location>=0){const ae=H[q];let fe=Z[q];if(fe===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(fe=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(fe=y.instanceColor)),ae===void 0||ae.attribute!==fe||fe&&ae.data!==fe.data)return!0;F++}return r.attributesNum!==F||r.index!==V}function M(y,P,k,V){const H={},Z=P.attributes;let F=0;const ie=k.getAttributes();for(const q in ie)if(ie[q].location>=0){let ae=Z[q];ae===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(ae=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(ae=y.instanceColor));const fe={};fe.attribute=ae,ae&&ae.data&&(fe.data=ae.data),H[q]=fe,F++}r.attributes=H,r.attributesNum=F,r.index=V}function v(){const y=r.newAttributes;for(let P=0,k=y.length;P<k;P++)y[P]=0}function m(y){u(y,0)}function u(y,P){const k=r.newAttributes,V=r.enabledAttributes,H=r.attributeDivisors;k[y]=1,V[y]===0&&(i.enableVertexAttribArray(y),V[y]=1),H[y]!==P&&(i.vertexAttribDivisor(y,P),H[y]=P)}function L(){const y=r.newAttributes,P=r.enabledAttributes;for(let k=0,V=P.length;k<V;k++)P[k]!==y[k]&&(i.disableVertexAttribArray(k),P[k]=0)}function C(y,P,k,V,H,Z,F){F===!0?i.vertexAttribIPointer(y,P,k,H,Z):i.vertexAttribPointer(y,P,k,V,H,Z)}function T(y,P,k,V){v();const H=V.attributes,Z=k.getAttributes(),F=P.defaultAttributeValues;for(const ie in Z){const q=Z[ie];if(q.location>=0){let re=H[ie];if(re===void 0&&(ie==="instanceMatrix"&&y.instanceMatrix&&(re=y.instanceMatrix),ie==="instanceColor"&&y.instanceColor&&(re=y.instanceColor)),re!==void 0){const ae=re.normalized,fe=re.itemSize,_e=e.get(re);if(_e===void 0)continue;const ve=_e.buffer,xe=_e.type,X=_e.bytesPerElement,$=xe===i.INT||xe===i.UNSIGNED_INT||re.gpuType===Uo;if(re.isInterleavedBufferAttribute){const Q=re.data,Me=Q.stride,De=re.offset;if(Q.isInstancedInterleavedBuffer){for(let Ye=0;Ye<q.locationSize;Ye++)u(q.location+Ye,Q.meshPerAttribute);y.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Ye=0;Ye<q.locationSize;Ye++)m(q.location+Ye);i.bindBuffer(i.ARRAY_BUFFER,ve);for(let Ye=0;Ye<q.locationSize;Ye++)C(q.location+Ye,fe/q.locationSize,xe,ae,Me*X,(De+fe/q.locationSize*Ye)*X,$)}else{if(re.isInstancedBufferAttribute){for(let Q=0;Q<q.locationSize;Q++)u(q.location+Q,re.meshPerAttribute);y.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Q=0;Q<q.locationSize;Q++)m(q.location+Q);i.bindBuffer(i.ARRAY_BUFFER,ve);for(let Q=0;Q<q.locationSize;Q++)C(q.location+Q,fe/q.locationSize,xe,ae,fe*X,fe/q.locationSize*Q*X,$)}}else if(F!==void 0){const ae=F[ie];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(q.location,ae);break;case 3:i.vertexAttrib3fv(q.location,ae);break;case 4:i.vertexAttrib4fv(q.location,ae);break;default:i.vertexAttrib1fv(q.location,ae)}}}}L()}function D(){R();for(const y in n){const P=n[y];for(const k in P){const V=P[k];for(const H in V)h(V[H].object),delete V[H];delete P[k]}delete n[y]}}function N(y){if(n[y.id]===void 0)return;const P=n[y.id];for(const k in P){const V=P[k];for(const H in V)h(V[H].object),delete V[H];delete P[k]}delete n[y.id]}function U(y){for(const P in n){const k=n[P];if(k[y.id]===void 0)continue;const V=k[y.id];for(const H in V)h(V[H].object),delete V[H];delete k[y.id]}}function R(){x(),a=!0,r!==s&&(r=s,l(r.object))}function x(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:x,dispose:D,releaseStatesOfGeometry:N,releaseStatesOfProgram:U,initAttributes:v,enableAttribute:m,disableUnusedAttributes:L}}function ym(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),t.update(h,n,d))}function o(l,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let p=0;for(let M=0;M<d;M++)p+=h[M];t.update(p,n,1)}function c(l,h,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let M=0;M<l.length;M++)a(l[M],h[M],f[M]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,d);let M=0;for(let v=0;v<d;v++)M+=h[v]*f[v];t.update(M,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Sm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(U){return!(U!==vn&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(U){const R=U===Kn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Un&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==cn&&!R)}function c(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),L=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=M>0,N=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:M,maxTextureSize:v,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:L,maxVaryings:C,maxFragmentUniforms:T,vertexTextures:D,maxSamples:N}}function Em(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new li,o=new st,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||n!==0||s;return s=f,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,p){const M=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,u=i.get(d);if(!s||M===null||M.length===0||r&&!m)r?h(null):l();else{const L=r?0:n,C=L*4;let T=u.clippingState||null;c.value=T,T=h(M,f,C,p);for(let D=0;D!==C;++D)T[D]=t[D];u.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=L}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,p,M){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=c.value,M!==!0||m===null){const u=p+v*4,L=f.matrixWorldInverse;o.getNormalMatrix(L),(m===null||m.length<u)&&(m=new Float32Array(u));for(let C=0,T=p;C!==v;++C,T+=4)a.copy(d[C]).applyMatrix4(L,o),a.normal.toArray(m,T),m[T+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function bm(i){let e=new WeakMap;function t(a,o){return o===Ur?a.mapping=ls:o===eo&&(a.mapping=cs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ur||o===eo)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new rd(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const ns=4,Yl=[.125,.215,.35,.446,.526,.582],Ri=20,Ua=new jo,jl=new tt;let Fa=null,Oa=0,Ba=0,ka=!1;const Ti=(1+Math.sqrt(5))/2,Ji=1/Ti,Kl=[new O(-Ti,Ji,0),new O(Ti,Ji,0),new O(-Ji,0,Ti),new O(Ji,0,Ti),new O(0,Ti,-Ji),new O(0,Ti,Ji),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],Tm=new O;class Zl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=Tm}=r;Fa=this._renderer.getRenderTarget(),Oa=this._renderer.getActiveCubeFace(),Ba=this._renderer.getActiveMipmapLevel(),ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ql(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$l(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fa,Oa,Ba),this._renderer.xr.enabled=ka,e.scissorTest=!1,vr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ls||e.mapping===cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fa=this._renderer.getRenderTarget(),Oa=this._renderer.getActiveCubeFace(),Ba=this._renderer.getActiveMipmapLevel(),ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:Kn,format:vn,colorSpace:Li,depthBuffer:!1},s=Jl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wm(r)),this._blurMaterial=Am(r,e,t)}return s}_compileMaterial(e){const t=new Ot(this._lodPlanes[0],e);this._renderer.compile(t,Ua)}_sceneToCubeUV(e,t,n,s,r){const c=new qt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(jl),d.toneMapping=ui,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));const v=new Bs({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),m=new Ot(new Ui,v);let u=!1;const L=e.background;L?L.isColor&&(v.color.copy(L),e.background=null,u=!0):(v.color.copy(jl),u=!0);for(let C=0;C<6;C++){const T=C%3;T===0?(c.up.set(0,l[C],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[C],r.y,r.z)):T===1?(c.up.set(0,0,l[C]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[C],r.z)):(c.up.set(0,l[C],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[C]));const D=this._cubeSize;vr(s,T*D,C>2?D:0,D,D),d.setRenderTarget(s),u&&d.render(m,c),d.render(e,c)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=f,e.background=L}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ls||e.mapping===cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ql()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$l());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ot(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;vr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Ua)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Kl[(s-r-1)%Kl.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Ot(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,M=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ri-1),v=r/M,m=isFinite(r)?1+Math.floor(h*v):Ri;m>Ri&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ri}`);const u=[];let L=0;for(let U=0;U<Ri;++U){const R=U/v,x=Math.exp(-R*R/2);u.push(x),U===0?L+=x:U<m&&(L+=2*x)}for(let U=0;U<u.length;U++)u[U]=u[U]/L;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:C}=this;f.dTheta.value=M,f.mipInt.value=C-n;const T=this._sizeLods[s],D=3*T*(s>C-ns?s-C+ns:0),N=4*(this._cubeSize-T);vr(t,D,N,3*T,2*T),c.setRenderTarget(t),c.render(d,Ua)}}function wm(i){const e=[],t=[],n=[];let s=i;const r=i-ns+1+Yl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>i-ns?c=Yl[a-i+ns-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,d=1+l,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,M=6,v=3,m=2,u=1,L=new Float32Array(v*M*p),C=new Float32Array(m*M*p),T=new Float32Array(u*M*p);for(let N=0;N<p;N++){const U=N%3*2/3-1,R=N>2?0:-1,x=[U,R,0,U+2/3,R,0,U+2/3,R+1,0,U,R,0,U+2/3,R+1,0,U,R+1,0];L.set(x,v*M*N),C.set(f,m*M*N);const y=[N,N,N,N,N,N];T.set(y,u*M*N)}const D=new fn;D.setAttribute("position",new un(L,v)),D.setAttribute("uv",new un(C,m)),D.setAttribute("faceIndex",new un(T,u)),e.push(D),s>ns&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Jl(i,e,t){const n=new Di(i,e,t);return n.texture.mapping=qr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Am(i,e,t){const n=new Float32Array(Ri),s=new O(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function $l(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Ql(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Ko(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Rm(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Ur||c===eo,h=c===ls||c===cs;if(l||h){let d=e.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Zl(i)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return l&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new Zl(i)),d=l?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Cm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&rs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Pm(i,e,t,n){const s={},r=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const M in f.attributes)e.remove(f.attributes[M]);f.removeEventListener("dispose",a),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function c(d){const f=d.attributes;for(const p in f)e.update(f[p],i.ARRAY_BUFFER)}function l(d){const f=[],p=d.index,M=d.attributes.position;let v=0;if(p!==null){const L=p.array;v=p.version;for(let C=0,T=L.length;C<T;C+=3){const D=L[C+0],N=L[C+1],U=L[C+2];f.push(D,N,N,U,U,D)}}else if(M!==void 0){const L=M.array;v=M.version;for(let C=0,T=L.length/3-1;C<T;C+=3){const D=C+0,N=C+1,U=C+2;f.push(D,N,N,U,U,D)}}else return;const m=new(Bc(f)?Hc:Vc)(f,1);m.version=v;const u=r.get(d);u&&e.remove(u),r.set(d,m)}function h(d){const f=r.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function Lm(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,p){i.drawElements(n,p,r,f*a),t.update(p,n,1)}function l(f,p,M){M!==0&&(i.drawElementsInstanced(n,p,r,f*a,M),t.update(p,n,M))}function h(f,p,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,M);let m=0;for(let u=0;u<M;u++)m+=p[u];t.update(m,n,1)}function d(f,p,M,v){if(M===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)l(f[u]/a,p[u],v[u]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,v,0,M);let u=0;for(let L=0;L<M;L++)u+=p[L]*v[L];t.update(u,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Dm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Im(i,e,t){const n=new WeakMap,s=new _t;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let x=function(){U.dispose(),n.delete(o),o.removeEventListener("dispose",x)};f!==void 0&&f.texture.dispose();const p=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],L=o.morphAttributes.color||[];let C=0;p===!0&&(C=1),M===!0&&(C=2),v===!0&&(C=3);let T=o.attributes.position.count*C,D=1;T>e.maxTextureSize&&(D=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const N=new Float32Array(T*D*4*d),U=new kc(N,T,D,d);U.type=cn,U.needsUpdate=!0;const R=C*4;for(let y=0;y<d;y++){const P=m[y],k=u[y],V=L[y],H=T*D*4*y;for(let Z=0;Z<P.count;Z++){const F=Z*R;p===!0&&(s.fromBufferAttribute(P,Z),N[H+F+0]=s.x,N[H+F+1]=s.y,N[H+F+2]=s.z,N[H+F+3]=0),M===!0&&(s.fromBufferAttribute(k,Z),N[H+F+4]=s.x,N[H+F+5]=s.y,N[H+F+6]=s.z,N[H+F+7]=0),v===!0&&(s.fromBufferAttribute(V,Z),N[H+F+8]=s.x,N[H+F+9]=s.y,N[H+F+10]=s.z,N[H+F+11]=V.itemSize===4?s.w:1)}}f={count:d,texture:U,size:new Je(T,D)},n.set(o,f),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let v=0;v<l.length;v++)p+=l[v];const M=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",M),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Nm(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==l&&(e.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return d}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const lh=new jt,ec=new Zc(1,1),ch=new kc,hh=new ku,uh=new Xc,tc=[],nc=[],ic=new Float32Array(16),sc=new Float32Array(9),rc=new Float32Array(4);function _s(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=tc[s];if(r===void 0&&(r=new Float32Array(s),tc[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ht(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function $r(i,e){let t=nc[e];t===void 0&&(t=new Int32Array(e),nc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Um(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Fm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2fv(this.addr,e),Ht(t,e)}}function Om(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;i.uniform3fv(this.addr,e),Ht(t,e)}}function Bm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4fv(this.addr,e),Ht(t,e)}}function km(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(Vt(t,n))return;rc.set(n),i.uniformMatrix2fv(this.addr,!1,rc),Ht(t,n)}}function zm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(Vt(t,n))return;sc.set(n),i.uniformMatrix3fv(this.addr,!1,sc),Ht(t,n)}}function Vm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(Vt(t,n))return;ic.set(n),i.uniformMatrix4fv(this.addr,!1,ic),Ht(t,n)}}function Hm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Gm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2iv(this.addr,e),Ht(t,e)}}function Wm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3iv(this.addr,e),Ht(t,e)}}function Xm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4iv(this.addr,e),Ht(t,e)}}function qm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ym(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2uiv(this.addr,e),Ht(t,e)}}function jm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3uiv(this.addr,e),Ht(t,e)}}function Km(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4uiv(this.addr,e),Ht(t,e)}}function Zm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ec.compareFunction=Oc,r=ec):r=lh,t.setTexture2D(e||r,s)}function Jm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||hh,s)}function $m(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||uh,s)}function Qm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ch,s)}function eg(i){switch(i){case 5126:return Um;case 35664:return Fm;case 35665:return Om;case 35666:return Bm;case 35674:return km;case 35675:return zm;case 35676:return Vm;case 5124:case 35670:return Hm;case 35667:case 35671:return Gm;case 35668:case 35672:return Wm;case 35669:case 35673:return Xm;case 5125:return qm;case 36294:return Ym;case 36295:return jm;case 36296:return Km;case 35678:case 36198:case 36298:case 36306:case 35682:return Zm;case 35679:case 36299:case 36307:return Jm;case 35680:case 36300:case 36308:case 36293:return $m;case 36289:case 36303:case 36311:case 36292:return Qm}}function tg(i,e){i.uniform1fv(this.addr,e)}function ng(i,e){const t=_s(e,this.size,2);i.uniform2fv(this.addr,t)}function ig(i,e){const t=_s(e,this.size,3);i.uniform3fv(this.addr,t)}function sg(i,e){const t=_s(e,this.size,4);i.uniform4fv(this.addr,t)}function rg(i,e){const t=_s(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ag(i,e){const t=_s(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function og(i,e){const t=_s(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function lg(i,e){i.uniform1iv(this.addr,e)}function cg(i,e){i.uniform2iv(this.addr,e)}function hg(i,e){i.uniform3iv(this.addr,e)}function ug(i,e){i.uniform4iv(this.addr,e)}function dg(i,e){i.uniform1uiv(this.addr,e)}function fg(i,e){i.uniform2uiv(this.addr,e)}function pg(i,e){i.uniform3uiv(this.addr,e)}function mg(i,e){i.uniform4uiv(this.addr,e)}function gg(i,e,t){const n=this.cache,s=e.length,r=$r(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||lh,r[a])}function _g(i,e,t){const n=this.cache,s=e.length,r=$r(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||hh,r[a])}function xg(i,e,t){const n=this.cache,s=e.length,r=$r(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||uh,r[a])}function vg(i,e,t){const n=this.cache,s=e.length,r=$r(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||ch,r[a])}function Mg(i){switch(i){case 5126:return tg;case 35664:return ng;case 35665:return ig;case 35666:return sg;case 35674:return rg;case 35675:return ag;case 35676:return og;case 5124:case 35670:return lg;case 35667:case 35671:return cg;case 35668:case 35672:return hg;case 35669:case 35673:return ug;case 5125:return dg;case 36294:return fg;case 36295:return pg;case 36296:return mg;case 35678:case 36198:case 36298:case 36306:case 35682:return gg;case 35679:case 36299:case 36307:return _g;case 35680:case 36300:case 36308:case 36293:return xg;case 36289:case 36303:case 36311:case 36292:return vg}}class yg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=eg(t.type)}}class Sg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Mg(t.type)}}class Eg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const za=/(\w+)(\])?(\[|\.)?/g;function ac(i,e){i.seq.push(e),i.map[e.id]=e}function bg(i,e,t){const n=i.name,s=n.length;for(za.lastIndex=0;;){const r=za.exec(n),a=za.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){ac(t,l===void 0?new yg(o,i,e):new Sg(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Eg(o),ac(t,d)),t=d}}}class Ir{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);bg(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function oc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Tg=37297;let wg=0;function Ag(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const lc=new st;function Rg(i){lt._getMatrix(lc,lt.workingColorSpace,i);const e=`mat3( ${lc.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(i)){case Or:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function cc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Ag(i.getShaderSource(e),o)}else return r}function Cg(i,e){const t=Rg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Pg(i,e){let t;switch(e){case Jh:t="Linear";break;case $h:t="Reinhard";break;case Qh:t="Cineon";break;case Ac:t="ACESFilmic";break;case tu:t="AgX";break;case nu:t="Neutral";break;case eu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Mr=new O;function Lg(){lt.getLuminanceCoefficients(Mr);const i=Mr.x.toFixed(4),e=Mr.y.toFixed(4),t=Mr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Dg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ws).join(`
`)}function Ig(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ng(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ws(i){return i!==""}function hc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ug=/^[ \t]*#include +<([\w\d./]+)>/gm;function Do(i){return i.replace(Ug,Og)}const Fg=new Map;function Og(i,e){let t=rt[e];if(t===void 0){const n=Fg.get(e);if(n!==void 0)t=rt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Do(t)}const Bg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dc(i){return i.replace(Bg,kg)}function kg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function fc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function zg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===wc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ph?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===qn&&(e="SHADOWMAP_TYPE_VSM"),e}function Vg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ls:case cs:e="ENVMAP_TYPE_CUBE";break;case qr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Hg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case cs:e="ENVMAP_MODE_REFRACTION";break}return e}function Gg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Xr:e="ENVMAP_BLENDING_MULTIPLY";break;case Kh:e="ENVMAP_BLENDING_MIX";break;case Zh:e="ENVMAP_BLENDING_ADD";break}return e}function Wg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Xg(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=zg(t),l=Vg(t),h=Hg(t),d=Gg(t),f=Wg(t),p=Dg(t),M=Ig(r),v=s.createProgram();let m,u,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ws).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ws).join(`
`),u.length>0&&(u+=`
`)):(m=[fc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ws).join(`
`),u=[fc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ui?"#define TONE_MAPPING":"",t.toneMapping!==ui?rt.tonemapping_pars_fragment:"",t.toneMapping!==ui?Pg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,Cg("linearToOutputTexel",t.outputColorSpace),Lg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ws).join(`
`)),a=Do(a),a=hc(a,t),a=uc(a,t),o=Do(o),o=hc(o,t),o=uc(o,t),a=dc(a),o=dc(o),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===cl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const C=L+m+a,T=L+u+o,D=oc(s,s.VERTEX_SHADER,C),N=oc(s,s.FRAGMENT_SHADER,T);s.attachShader(v,D),s.attachShader(v,N),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function U(P){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(v)||"",V=s.getShaderInfoLog(D)||"",H=s.getShaderInfoLog(N)||"",Z=k.trim(),F=V.trim(),ie=H.trim();let q=!0,re=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,D,N);else{const ae=cc(s,D,"vertex"),fe=cc(s,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+Z+`
`+ae+`
`+fe)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(F===""||ie==="")&&(re=!1);re&&(P.diagnostics={runnable:q,programLog:Z,vertexShader:{log:F,prefix:m},fragmentShader:{log:ie,prefix:u}})}s.deleteShader(D),s.deleteShader(N),R=new Ir(s,v),x=Ng(s,v)}let R;this.getUniforms=function(){return R===void 0&&U(this),R};let x;this.getAttributes=function(){return x===void 0&&U(this),x};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,Tg)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wg++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=D,this.fragmentShader=N,this}let qg=0;class Yg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new jg(e),t.set(e,n)),n}}class jg{constructor(e){this.id=qg++,this.code=e,this.usedTimes=0}}function Kg(i,e,t,n,s,r,a){const o=new Go,c=new Yg,l=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,y,P,k,V){const H=k.fog,Z=V.geometry,F=x.isMeshStandardMaterial?k.environment:null,ie=(x.isMeshStandardMaterial?t:e).get(x.envMap||F),q=ie&&ie.mapping===qr?ie.image.height:null,re=M[x.type];x.precision!==null&&(p=s.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const ae=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,fe=ae!==void 0?ae.length:0;let _e=0;Z.morphAttributes.position!==void 0&&(_e=1),Z.morphAttributes.normal!==void 0&&(_e=2),Z.morphAttributes.color!==void 0&&(_e=3);let ve,xe,X,$;if(re){const it=Pn[re];ve=it.vertexShader,xe=it.fragmentShader}else ve=x.vertexShader,xe=x.fragmentShader,c.update(x),X=c.getVertexShaderID(x),$=c.getFragmentShaderID(x);const Q=i.getRenderTarget(),Me=i.state.buffers.depth.getReversed(),De=V.isInstancedMesh===!0,Ye=V.isBatchedMesh===!0,Lt=!!x.map,ct=!!x.matcap,B=!!ie,Mt=!!x.aoMap,We=!!x.lightMap,ut=!!x.bumpMap,ze=!!x.normalMap,Tt=!!x.displacementMap,Ce=!!x.emissiveMap,nt=!!x.metalnessMap,Ut=!!x.roughnessMap,Rt=x.anisotropy>0,I=x.clearcoat>0,S=x.dispersion>0,Y=x.iridescence>0,ne=x.sheen>0,oe=x.transmission>0,ee=Rt&&!!x.anisotropyMap,Be=I&&!!x.clearcoatMap,pe=I&&!!x.clearcoatNormalMap,Ne=I&&!!x.clearcoatRoughnessMap,Ue=Y&&!!x.iridescenceMap,ue=Y&&!!x.iridescenceThicknessMap,be=ne&&!!x.sheenColorMap,je=ne&&!!x.sheenRoughnessMap,Fe=!!x.specularMap,ye=!!x.specularColorMap,Qe=!!x.specularIntensityMap,z=oe&&!!x.transmissionMap,de=oe&&!!x.thicknessMap,me=!!x.gradientMap,Re=!!x.alphaMap,ce=x.alphaTest>0,se=!!x.alphaHash,Ie=!!x.extensions;let $e=ui;x.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&($e=i.toneMapping);const yt={shaderID:re,shaderType:x.type,shaderName:x.name,vertexShader:ve,fragmentShader:xe,defines:x.defines,customVertexShaderID:X,customFragmentShaderID:$,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:Ye,batchingColor:Ye&&V._colorsTexture!==null,instancing:De,instancingColor:De&&V.instanceColor!==null,instancingMorph:De&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Li,alphaToCoverage:!!x.alphaToCoverage,map:Lt,matcap:ct,envMap:B,envMapMode:B&&ie.mapping,envMapCubeUVHeight:q,aoMap:Mt,lightMap:We,bumpMap:ut,normalMap:ze,displacementMap:f&&Tt,emissiveMap:Ce,normalMapObjectSpace:ze&&x.normalMapType===lu,normalMapTangentSpace:ze&&x.normalMapType===Yr,metalnessMap:nt,roughnessMap:Ut,anisotropy:Rt,anisotropyMap:ee,clearcoat:I,clearcoatMap:Be,clearcoatNormalMap:pe,clearcoatRoughnessMap:Ne,dispersion:S,iridescence:Y,iridescenceMap:Ue,iridescenceThicknessMap:ue,sheen:ne,sheenColorMap:be,sheenRoughnessMap:je,specularMap:Fe,specularColorMap:ye,specularIntensityMap:Qe,transmission:oe,transmissionMap:z,thicknessMap:de,gradientMap:me,opaque:x.transparent===!1&&x.blending===ss&&x.alphaToCoverage===!1,alphaMap:Re,alphaTest:ce,alphaHash:se,combine:x.combine,mapUv:Lt&&v(x.map.channel),aoMapUv:Mt&&v(x.aoMap.channel),lightMapUv:We&&v(x.lightMap.channel),bumpMapUv:ut&&v(x.bumpMap.channel),normalMapUv:ze&&v(x.normalMap.channel),displacementMapUv:Tt&&v(x.displacementMap.channel),emissiveMapUv:Ce&&v(x.emissiveMap.channel),metalnessMapUv:nt&&v(x.metalnessMap.channel),roughnessMapUv:Ut&&v(x.roughnessMap.channel),anisotropyMapUv:ee&&v(x.anisotropyMap.channel),clearcoatMapUv:Be&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:pe&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:be&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:je&&v(x.sheenRoughnessMap.channel),specularMapUv:Fe&&v(x.specularMap.channel),specularColorMapUv:ye&&v(x.specularColorMap.channel),specularIntensityMapUv:Qe&&v(x.specularIntensityMap.channel),transmissionMapUv:z&&v(x.transmissionMap.channel),thicknessMapUv:de&&v(x.thicknessMap.channel),alphaMapUv:Re&&v(x.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(ze||Rt),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!Z.attributes.uv&&(Lt||Re),fog:!!H,useFog:x.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Me,skinning:V.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:_e,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:$e,decodeVideoTexture:Lt&&x.map.isVideoTexture===!0&&lt.getTransfer(x.map.colorSpace)===Et,decodeVideoTextureEmissive:Ce&&x.emissiveMap.isVideoTexture===!0&&lt.getTransfer(x.emissiveMap.colorSpace)===Et,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ln,flipSided:x.side===sn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ie&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&x.extensions.multiDraw===!0||Ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return yt.vertexUv1s=l.has(1),yt.vertexUv2s=l.has(2),yt.vertexUv3s=l.has(3),l.clear(),yt}function u(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)y.push(P),y.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(L(y,x),C(y,x),y.push(i.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function L(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function C(x,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),x.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),x.push(o.mask)}function T(x){const y=M[x.type];let P;if(y){const k=Pn[y];P=td.clone(k.uniforms)}else P=x.uniforms;return P}function D(x,y){let P;for(let k=0,V=h.length;k<V;k++){const H=h[k];if(H.cacheKey===y){P=H,++P.usedTimes;break}}return P===void 0&&(P=new Xg(i,y,x,r),h.push(P)),P}function N(x){if(--x.usedTimes===0){const y=h.indexOf(x);h[y]=h[h.length-1],h.pop(),x.destroy()}}function U(x){c.remove(x)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:T,acquireProgram:D,releaseProgram:N,releaseShaderCache:U,programs:h,dispose:R}}function Zg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Jg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function pc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function mc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d,f,p,M,v,m){let u=i[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:M,renderOrder:d.renderOrder,z:v,group:m},i[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=M,u.renderOrder=d.renderOrder,u.z=v,u.group=m),e++,u}function o(d,f,p,M,v,m){const u=a(d,f,p,M,v,m);p.transmission>0?n.push(u):p.transparent===!0?s.push(u):t.push(u)}function c(d,f,p,M,v,m){const u=a(d,f,p,M,v,m);p.transmission>0?n.unshift(u):p.transparent===!0?s.unshift(u):t.unshift(u)}function l(d,f){t.length>1&&t.sort(d||Jg),n.length>1&&n.sort(f||pc),s.length>1&&s.sort(f||pc)}function h(){for(let d=e,f=i.length;d<f;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function $g(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new mc,i.set(n,[a])):s>=r.length?(a=new mc,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Qg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new tt};break;case"SpotLight":t={position:new O,direction:new O,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function e_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let t_=0;function n_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function i_(i){const e=new Qg,t=e_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new O);const s=new O,r=new et,a=new et;function o(l){let h=0,d=0,f=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let p=0,M=0,v=0,m=0,u=0,L=0,C=0,T=0,D=0,N=0,U=0;l.sort(n_);for(let x=0,y=l.length;x<y;x++){const P=l[x],k=P.color,V=P.intensity,H=P.distance,Z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=k.r*V,d+=k.g*V,f+=k.b*V;else if(P.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(P.sh.coefficients[F],V);U++}else if(P.isDirectionalLight){const F=e.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const ie=P.shadow,q=t.get(P);q.shadowIntensity=ie.intensity,q.shadowBias=ie.bias,q.shadowNormalBias=ie.normalBias,q.shadowRadius=ie.radius,q.shadowMapSize=ie.mapSize,n.directionalShadow[p]=q,n.directionalShadowMap[p]=Z,n.directionalShadowMatrix[p]=P.shadow.matrix,L++}n.directional[p]=F,p++}else if(P.isSpotLight){const F=e.get(P);F.position.setFromMatrixPosition(P.matrixWorld),F.color.copy(k).multiplyScalar(V),F.distance=H,F.coneCos=Math.cos(P.angle),F.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),F.decay=P.decay,n.spot[v]=F;const ie=P.shadow;if(P.map&&(n.spotLightMap[D]=P.map,D++,ie.updateMatrices(P),P.castShadow&&N++),n.spotLightMatrix[v]=ie.matrix,P.castShadow){const q=t.get(P);q.shadowIntensity=ie.intensity,q.shadowBias=ie.bias,q.shadowNormalBias=ie.normalBias,q.shadowRadius=ie.radius,q.shadowMapSize=ie.mapSize,n.spotShadow[v]=q,n.spotShadowMap[v]=Z,T++}v++}else if(P.isRectAreaLight){const F=e.get(P);F.color.copy(k).multiplyScalar(V),F.halfWidth.set(P.width*.5,0,0),F.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=F,m++}else if(P.isPointLight){const F=e.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity),F.distance=P.distance,F.decay=P.decay,P.castShadow){const ie=P.shadow,q=t.get(P);q.shadowIntensity=ie.intensity,q.shadowBias=ie.bias,q.shadowNormalBias=ie.normalBias,q.shadowRadius=ie.radius,q.shadowMapSize=ie.mapSize,q.shadowCameraNear=ie.camera.near,q.shadowCameraFar=ie.camera.far,n.pointShadow[M]=q,n.pointShadowMap[M]=Z,n.pointShadowMatrix[M]=P.shadow.matrix,C++}n.point[M]=F,M++}else if(P.isHemisphereLight){const F=e.get(P);F.skyColor.copy(P.color).multiplyScalar(V),F.groundColor.copy(P.groundColor).multiplyScalar(V),n.hemi[u]=F,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==p||R.pointLength!==M||R.spotLength!==v||R.rectAreaLength!==m||R.hemiLength!==u||R.numDirectionalShadows!==L||R.numPointShadows!==C||R.numSpotShadows!==T||R.numSpotMaps!==D||R.numLightProbes!==U)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=M,n.hemi.length=u,n.directionalShadow.length=L,n.directionalShadowMap.length=L,n.pointShadow.length=C,n.pointShadowMap.length=C,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=L,n.pointShadowMatrix.length=C,n.spotLightMatrix.length=T+D-N,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=U,R.directionalLength=p,R.pointLength=M,R.spotLength=v,R.rectAreaLength=m,R.hemiLength=u,R.numDirectionalShadows=L,R.numPointShadows=C,R.numSpotShadows=T,R.numSpotMaps=D,R.numLightProbes=U,n.version=t_++)}function c(l,h){let d=0,f=0,p=0,M=0,v=0;const m=h.matrixWorldInverse;for(let u=0,L=l.length;u<L;u++){const C=l[u];if(C.isDirectionalLight){const T=n.directional[d];T.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),d++}else if(C.isSpotLight){const T=n.spot[p];T.position.setFromMatrixPosition(C.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),p++}else if(C.isRectAreaLight){const T=n.rectArea[M];T.position.setFromMatrixPosition(C.matrixWorld),T.position.applyMatrix4(m),a.identity(),r.copy(C.matrixWorld),r.premultiply(m),a.extractRotation(r),T.halfWidth.set(C.width*.5,0,0),T.halfHeight.set(0,C.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),M++}else if(C.isPointLight){const T=n.point[f];T.position.setFromMatrixPosition(C.matrixWorld),T.position.applyMatrix4(m),f++}else if(C.isHemisphereLight){const T=n.hemi[v];T.direction.setFromMatrixPosition(C.matrixWorld),T.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:n}}function gc(i){const e=new i_(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function s_(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new gc(i),e.set(s,[o])):r>=a.length?(o=new gc(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const r_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,a_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function o_(i,e,t){let n=new Xo;const s=new Je,r=new Je,a=new _t,o=new md({depthPacking:ou}),c=new gd,l={},h=t.maxTextureSize,d={[Jn]:sn,[sn]:Jn,[Ln]:Ln},f=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:r_,fragmentShader:a_}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const M=new fn;M.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ot(M,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wc;let u=this.type;this.render=function(N,U,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||N.length===0)return;const x=i.getRenderTarget(),y=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),k=i.state;k.setBlending(hi),k.buffers.depth.getReversed()?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const V=u!==qn&&this.type===qn,H=u===qn&&this.type!==qn;for(let Z=0,F=N.length;Z<F;Z++){const ie=N[Z],q=ie.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const re=q.getFrameExtents();if(s.multiply(re),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/re.x),s.x=r.x*re.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/re.y),s.y=r.y*re.y,q.mapSize.y=r.y)),q.map===null||V===!0||H===!0){const fe=this.type!==qn?{minFilter:hn,magFilter:hn}:{};q.map!==null&&q.map.dispose(),q.map=new Di(s.x,s.y,fe),q.map.texture.name=ie.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const ae=q.getViewportCount();for(let fe=0;fe<ae;fe++){const _e=q.getViewport(fe);a.set(r.x*_e.x,r.y*_e.y,r.x*_e.z,r.y*_e.w),k.viewport(a),q.updateMatrices(ie,fe),n=q.getFrustum(),T(U,R,q.camera,ie,this.type)}q.isPointLightShadow!==!0&&this.type===qn&&L(q,R),q.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(x,y,P)};function L(N,U){const R=e.update(v);f.defines.VSM_SAMPLES!==N.blurSamples&&(f.defines.VSM_SAMPLES=N.blurSamples,p.defines.VSM_SAMPLES=N.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Di(s.x,s.y)),f.uniforms.shadow_pass.value=N.map.texture,f.uniforms.resolution.value=N.mapSize,f.uniforms.radius.value=N.radius,i.setRenderTarget(N.mapPass),i.clear(),i.renderBufferDirect(U,null,R,f,v,null),p.uniforms.shadow_pass.value=N.mapPass.texture,p.uniforms.resolution.value=N.mapSize,p.uniforms.radius.value=N.radius,i.setRenderTarget(N.map),i.clear(),i.renderBufferDirect(U,null,R,p,v,null)}function C(N,U,R,x){let y=null;const P=R.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(P!==void 0)y=P;else if(y=R.isPointLight===!0?c:o,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const k=y.uuid,V=U.uuid;let H=l[k];H===void 0&&(H={},l[k]=H);let Z=H[V];Z===void 0&&(Z=y.clone(),H[V]=Z,U.addEventListener("dispose",D)),y=Z}if(y.visible=U.visible,y.wireframe=U.wireframe,x===qn?y.side=U.shadowSide!==null?U.shadowSide:U.side:y.side=U.shadowSide!==null?U.shadowSide:d[U.side],y.alphaMap=U.alphaMap,y.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,y.map=U.map,y.clipShadows=U.clipShadows,y.clippingPlanes=U.clippingPlanes,y.clipIntersection=U.clipIntersection,y.displacementMap=U.displacementMap,y.displacementScale=U.displacementScale,y.displacementBias=U.displacementBias,y.wireframeLinewidth=U.wireframeLinewidth,y.linewidth=U.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const k=i.properties.get(y);k.light=R}return y}function T(N,U,R,x,y){if(N.visible===!1)return;if(N.layers.test(U.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&y===qn)&&(!N.frustumCulled||n.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,N.matrixWorld);const V=e.update(N),H=N.material;if(Array.isArray(H)){const Z=V.groups;for(let F=0,ie=Z.length;F<ie;F++){const q=Z[F],re=H[q.materialIndex];if(re&&re.visible){const ae=C(N,re,x,y);N.onBeforeShadow(i,N,U,R,V,ae,q),i.renderBufferDirect(R,null,V,ae,N,q),N.onAfterShadow(i,N,U,R,V,ae,q)}}}else if(H.visible){const Z=C(N,H,x,y);N.onBeforeShadow(i,N,U,R,V,Z,null),i.renderBufferDirect(R,null,V,Z,N,null),N.onAfterShadow(i,N,U,R,V,Z,null)}}const k=N.children;for(let V=0,H=k.length;V<H;V++)T(k[V],U,R,x,y)}function D(N){N.target.removeEventListener("dispose",D);for(const R in l){const x=l[R],y=N.target.uuid;y in x&&(x[y].dispose(),delete x[y])}}}const l_={[Ya]:ja,[Ka]:$a,[Za]:Qa,[os]:Ja,[ja]:Ya,[$a]:Ka,[Qa]:Za,[Ja]:os};function c_(i,e){function t(){let z=!1;const de=new _t;let me=null;const Re=new _t(0,0,0,0);return{setMask:function(ce){me!==ce&&!z&&(i.colorMask(ce,ce,ce,ce),me=ce)},setLocked:function(ce){z=ce},setClear:function(ce,se,Ie,$e,yt){yt===!0&&(ce*=$e,se*=$e,Ie*=$e),de.set(ce,se,Ie,$e),Re.equals(de)===!1&&(i.clearColor(ce,se,Ie,$e),Re.copy(de))},reset:function(){z=!1,me=null,Re.set(-1,0,0,0)}}}function n(){let z=!1,de=!1,me=null,Re=null,ce=null;return{setReversed:function(se){if(de!==se){const Ie=e.get("EXT_clip_control");se?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),de=se;const $e=ce;ce=null,this.setClear($e)}},getReversed:function(){return de},setTest:function(se){se?Q(i.DEPTH_TEST):Me(i.DEPTH_TEST)},setMask:function(se){me!==se&&!z&&(i.depthMask(se),me=se)},setFunc:function(se){if(de&&(se=l_[se]),Re!==se){switch(se){case Ya:i.depthFunc(i.NEVER);break;case ja:i.depthFunc(i.ALWAYS);break;case Ka:i.depthFunc(i.LESS);break;case os:i.depthFunc(i.LEQUAL);break;case Za:i.depthFunc(i.EQUAL);break;case Ja:i.depthFunc(i.GEQUAL);break;case $a:i.depthFunc(i.GREATER);break;case Qa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Re=se}},setLocked:function(se){z=se},setClear:function(se){ce!==se&&(de&&(se=1-se),i.clearDepth(se),ce=se)},reset:function(){z=!1,me=null,Re=null,ce=null,de=!1}}}function s(){let z=!1,de=null,me=null,Re=null,ce=null,se=null,Ie=null,$e=null,yt=null;return{setTest:function(it){z||(it?Q(i.STENCIL_TEST):Me(i.STENCIL_TEST))},setMask:function(it){de!==it&&!z&&(i.stencilMask(it),de=it)},setFunc:function(it,pn,mn){(me!==it||Re!==pn||ce!==mn)&&(i.stencilFunc(it,pn,mn),me=it,Re=pn,ce=mn)},setOp:function(it,pn,mn){(se!==it||Ie!==pn||$e!==mn)&&(i.stencilOp(it,pn,mn),se=it,Ie=pn,$e=mn)},setLocked:function(it){z=it},setClear:function(it){yt!==it&&(i.clearStencil(it),yt=it)},reset:function(){z=!1,de=null,me=null,Re=null,ce=null,se=null,Ie=null,$e=null,yt=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},d={},f=new WeakMap,p=[],M=null,v=!1,m=null,u=null,L=null,C=null,T=null,D=null,N=null,U=new tt(0,0,0),R=0,x=!1,y=null,P=null,k=null,V=null,H=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,ie=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(q)[1]),F=ie>=1):q.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),F=ie>=2);let re=null,ae={};const fe=i.getParameter(i.SCISSOR_BOX),_e=i.getParameter(i.VIEWPORT),ve=new _t().fromArray(fe),xe=new _t().fromArray(_e);function X(z,de,me,Re){const ce=new Uint8Array(4),se=i.createTexture();i.bindTexture(z,se),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ie=0;Ie<me;Ie++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(de,0,i.RGBA,1,1,Re,0,i.RGBA,i.UNSIGNED_BYTE,ce):i.texImage2D(de+Ie,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ce);return se}const $={};$[i.TEXTURE_2D]=X(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=X(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=X(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=X(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),a.setFunc(os),ut(!1),ze(Qo),Q(i.CULL_FACE),Mt(hi);function Q(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function Me(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function De(z,de){return d[z]!==de?(i.bindFramebuffer(z,de),d[z]=de,z===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=de),z===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=de),!0):!1}function Ye(z,de){let me=p,Re=!1;if(z){me=f.get(de),me===void 0&&(me=[],f.set(de,me));const ce=z.textures;if(me.length!==ce.length||me[0]!==i.COLOR_ATTACHMENT0){for(let se=0,Ie=ce.length;se<Ie;se++)me[se]=i.COLOR_ATTACHMENT0+se;me.length=ce.length,Re=!0}}else me[0]!==i.BACK&&(me[0]=i.BACK,Re=!0);Re&&i.drawBuffers(me)}function Lt(z){return M!==z?(i.useProgram(z),M=z,!0):!1}const ct={[Ai]:i.FUNC_ADD,[Dh]:i.FUNC_SUBTRACT,[Ih]:i.FUNC_REVERSE_SUBTRACT};ct[Nh]=i.MIN,ct[Uh]=i.MAX;const B={[Fh]:i.ZERO,[Oh]:i.ONE,[Bh]:i.SRC_COLOR,[Xa]:i.SRC_ALPHA,[Wh]:i.SRC_ALPHA_SATURATE,[Hh]:i.DST_COLOR,[zh]:i.DST_ALPHA,[kh]:i.ONE_MINUS_SRC_COLOR,[qa]:i.ONE_MINUS_SRC_ALPHA,[Gh]:i.ONE_MINUS_DST_COLOR,[Vh]:i.ONE_MINUS_DST_ALPHA,[Xh]:i.CONSTANT_COLOR,[qh]:i.ONE_MINUS_CONSTANT_COLOR,[Yh]:i.CONSTANT_ALPHA,[jh]:i.ONE_MINUS_CONSTANT_ALPHA};function Mt(z,de,me,Re,ce,se,Ie,$e,yt,it){if(z===hi){v===!0&&(Me(i.BLEND),v=!1);return}if(v===!1&&(Q(i.BLEND),v=!0),z!==Lh){if(z!==m||it!==x){if((u!==Ai||T!==Ai)&&(i.blendEquation(i.FUNC_ADD),u=Ai,T=Ai),it)switch(z){case ss:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case el:i.blendFunc(i.ONE,i.ONE);break;case tl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case nl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case ss:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case el:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case tl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}L=null,C=null,D=null,N=null,U.set(0,0,0),R=0,m=z,x=it}return}ce=ce||de,se=se||me,Ie=Ie||Re,(de!==u||ce!==T)&&(i.blendEquationSeparate(ct[de],ct[ce]),u=de,T=ce),(me!==L||Re!==C||se!==D||Ie!==N)&&(i.blendFuncSeparate(B[me],B[Re],B[se],B[Ie]),L=me,C=Re,D=se,N=Ie),($e.equals(U)===!1||yt!==R)&&(i.blendColor($e.r,$e.g,$e.b,yt),U.copy($e),R=yt),m=z,x=!1}function We(z,de){z.side===Ln?Me(i.CULL_FACE):Q(i.CULL_FACE);let me=z.side===sn;de&&(me=!me),ut(me),z.blending===ss&&z.transparent===!1?Mt(hi):Mt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);const Re=z.stencilWrite;o.setTest(Re),Re&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Ce(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):Me(i.SAMPLE_ALPHA_TO_COVERAGE)}function ut(z){y!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),y=z)}function ze(z){z!==Rh?(Q(i.CULL_FACE),z!==P&&(z===Qo?i.cullFace(i.BACK):z===Ch?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Me(i.CULL_FACE),P=z}function Tt(z){z!==k&&(F&&i.lineWidth(z),k=z)}function Ce(z,de,me){z?(Q(i.POLYGON_OFFSET_FILL),(V!==de||H!==me)&&(i.polygonOffset(de,me),V=de,H=me)):Me(i.POLYGON_OFFSET_FILL)}function nt(z){z?Q(i.SCISSOR_TEST):Me(i.SCISSOR_TEST)}function Ut(z){z===void 0&&(z=i.TEXTURE0+Z-1),re!==z&&(i.activeTexture(z),re=z)}function Rt(z,de,me){me===void 0&&(re===null?me=i.TEXTURE0+Z-1:me=re);let Re=ae[me];Re===void 0&&(Re={type:void 0,texture:void 0},ae[me]=Re),(Re.type!==z||Re.texture!==de)&&(re!==me&&(i.activeTexture(me),re=me),i.bindTexture(z,de||$[z]),Re.type=z,Re.texture=de)}function I(){const z=ae[re];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function S(){try{i.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Y(){try{i.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ne(){try{i.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function oe(){try{i.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ee(){try{i.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Be(){try{i.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function pe(){try{i.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ne(){try{i.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ue(){try{i.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ue(){try{i.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function be(z){ve.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),ve.copy(z))}function je(z){xe.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),xe.copy(z))}function Fe(z,de){let me=l.get(de);me===void 0&&(me=new WeakMap,l.set(de,me));let Re=me.get(z);Re===void 0&&(Re=i.getUniformBlockIndex(de,z.name),me.set(z,Re))}function ye(z,de){const Re=l.get(de).get(z);c.get(de)!==Re&&(i.uniformBlockBinding(de,Re,z.__bindingPointIndex),c.set(de,Re))}function Qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},re=null,ae={},d={},f=new WeakMap,p=[],M=null,v=!1,m=null,u=null,L=null,C=null,T=null,D=null,N=null,U=new tt(0,0,0),R=0,x=!1,y=null,P=null,k=null,V=null,H=null,ve.set(0,0,i.canvas.width,i.canvas.height),xe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:Me,bindFramebuffer:De,drawBuffers:Ye,useProgram:Lt,setBlending:Mt,setMaterial:We,setFlipSided:ut,setCullFace:ze,setLineWidth:Tt,setPolygonOffset:Ce,setScissorTest:nt,activeTexture:Ut,bindTexture:Rt,unbindTexture:I,compressedTexImage2D:S,compressedTexImage3D:Y,texImage2D:Ue,texImage3D:ue,updateUBOMapping:Fe,uniformBlockBinding:ye,texStorage2D:pe,texStorage3D:Ne,texSubImage2D:ne,texSubImage3D:oe,compressedTexSubImage2D:ee,compressedTexSubImage3D:Be,scissor:be,viewport:je,reset:Qe}}function h_(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Je,h=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(I,S){return p?new OffscreenCanvas(I,S):Os("canvas")}function v(I,S,Y){let ne=1;const oe=Rt(I);if((oe.width>Y||oe.height>Y)&&(ne=Y/Math.max(oe.width,oe.height)),ne<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ee=Math.floor(ne*oe.width),Be=Math.floor(ne*oe.height);d===void 0&&(d=M(ee,Be));const pe=S?M(ee,Be):d;return pe.width=ee,pe.height=Be,pe.getContext("2d").drawImage(I,0,0,ee,Be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+ee+"x"+Be+")."),pe}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),I;return I}function m(I){return I.generateMipmaps}function u(I){i.generateMipmap(I)}function L(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function C(I,S,Y,ne,oe=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ee=S;if(S===i.RED&&(Y===i.FLOAT&&(ee=i.R32F),Y===i.HALF_FLOAT&&(ee=i.R16F),Y===i.UNSIGNED_BYTE&&(ee=i.R8)),S===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ee=i.R8UI),Y===i.UNSIGNED_SHORT&&(ee=i.R16UI),Y===i.UNSIGNED_INT&&(ee=i.R32UI),Y===i.BYTE&&(ee=i.R8I),Y===i.SHORT&&(ee=i.R16I),Y===i.INT&&(ee=i.R32I)),S===i.RG&&(Y===i.FLOAT&&(ee=i.RG32F),Y===i.HALF_FLOAT&&(ee=i.RG16F),Y===i.UNSIGNED_BYTE&&(ee=i.RG8)),S===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ee=i.RG8UI),Y===i.UNSIGNED_SHORT&&(ee=i.RG16UI),Y===i.UNSIGNED_INT&&(ee=i.RG32UI),Y===i.BYTE&&(ee=i.RG8I),Y===i.SHORT&&(ee=i.RG16I),Y===i.INT&&(ee=i.RG32I)),S===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),Y===i.UNSIGNED_INT&&(ee=i.RGB32UI),Y===i.BYTE&&(ee=i.RGB8I),Y===i.SHORT&&(ee=i.RGB16I),Y===i.INT&&(ee=i.RGB32I)),S===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),Y===i.UNSIGNED_INT&&(ee=i.RGBA32UI),Y===i.BYTE&&(ee=i.RGBA8I),Y===i.SHORT&&(ee=i.RGBA16I),Y===i.INT&&(ee=i.RGBA32I)),S===i.RGB&&Y===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),S===i.RGBA){const Be=oe?Or:lt.getTransfer(ne);Y===i.FLOAT&&(ee=i.RGBA32F),Y===i.HALF_FLOAT&&(ee=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(ee=Be===Et?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function T(I,S){let Y;return I?S===null||S===Pi||S===Ns?Y=i.DEPTH24_STENCIL8:S===cn?Y=i.DEPTH32F_STENCIL8:S===Is&&(Y=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Pi||S===Ns?Y=i.DEPTH_COMPONENT24:S===cn?Y=i.DEPTH_COMPONENT32F:S===Is&&(Y=i.DEPTH_COMPONENT16),Y}function D(I,S){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==hn&&I.minFilter!==en?Math.log2(Math.max(S.width,S.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?S.mipmaps.length:1}function N(I){const S=I.target;S.removeEventListener("dispose",N),R(S),S.isVideoTexture&&h.delete(S)}function U(I){const S=I.target;S.removeEventListener("dispose",U),y(S)}function R(I){const S=n.get(I);if(S.__webglInit===void 0)return;const Y=I.source,ne=f.get(Y);if(ne){const oe=ne[S.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&x(I),Object.keys(ne).length===0&&f.delete(Y)}n.remove(I)}function x(I){const S=n.get(I);i.deleteTexture(S.__webglTexture);const Y=I.source,ne=f.get(Y);delete ne[S.__cacheKey],a.memory.textures--}function y(I){const S=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(S.__webglFramebuffer[ne]))for(let oe=0;oe<S.__webglFramebuffer[ne].length;oe++)i.deleteFramebuffer(S.__webglFramebuffer[ne][oe]);else i.deleteFramebuffer(S.__webglFramebuffer[ne]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[ne])}else{if(Array.isArray(S.__webglFramebuffer))for(let ne=0;ne<S.__webglFramebuffer.length;ne++)i.deleteFramebuffer(S.__webglFramebuffer[ne]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ne=0;ne<S.__webglColorRenderbuffer.length;ne++)S.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[ne]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const Y=I.textures;for(let ne=0,oe=Y.length;ne<oe;ne++){const ee=n.get(Y[ne]);ee.__webglTexture&&(i.deleteTexture(ee.__webglTexture),a.memory.textures--),n.remove(Y[ne])}n.remove(I)}let P=0;function k(){P=0}function V(){const I=P;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),P+=1,I}function H(I){const S=[];return S.push(I.wrapS),S.push(I.wrapT),S.push(I.wrapR||0),S.push(I.magFilter),S.push(I.minFilter),S.push(I.anisotropy),S.push(I.internalFormat),S.push(I.format),S.push(I.type),S.push(I.generateMipmaps),S.push(I.premultiplyAlpha),S.push(I.flipY),S.push(I.unpackAlignment),S.push(I.colorSpace),S.join()}function Z(I,S){const Y=n.get(I);if(I.isVideoTexture&&nt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&Y.__version!==I.version){const ne=I.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(Y,I,S);return}}else I.isExternalTexture&&(Y.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+S)}function F(I,S){const Y=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Y.__version!==I.version){$(Y,I,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+S)}function ie(I,S){const Y=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Y.__version!==I.version){$(Y,I,S);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+S)}function q(I,S){const Y=n.get(I);if(I.version>0&&Y.__version!==I.version){Q(Y,I,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+S)}const re={[Ci]:i.REPEAT,[Tn]:i.CLAMP_TO_EDGE,[to]:i.MIRRORED_REPEAT},ae={[hn]:i.NEAREST,[su]:i.NEAREST_MIPMAP_NEAREST,[Ks]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[aa]:i.LINEAR_MIPMAP_NEAREST,[jn]:i.LINEAR_MIPMAP_LINEAR},fe={[cu]:i.NEVER,[mu]:i.ALWAYS,[hu]:i.LESS,[Oc]:i.LEQUAL,[uu]:i.EQUAL,[pu]:i.GEQUAL,[du]:i.GREATER,[fu]:i.NOTEQUAL};function _e(I,S){if(S.type===cn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===en||S.magFilter===aa||S.magFilter===Ks||S.magFilter===jn||S.minFilter===en||S.minFilter===aa||S.minFilter===Ks||S.minFilter===jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,re[S.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,re[S.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,re[S.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,ae[S.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,ae[S.minFilter]),S.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,fe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===hn||S.minFilter!==Ks&&S.minFilter!==jn||S.type===cn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ve(I,S){let Y=!1;I.__webglInit===void 0&&(I.__webglInit=!0,S.addEventListener("dispose",N));const ne=S.source;let oe=f.get(ne);oe===void 0&&(oe={},f.set(ne,oe));const ee=H(S);if(ee!==I.__cacheKey){oe[ee]===void 0&&(oe[ee]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),oe[ee].usedTimes++;const Be=oe[I.__cacheKey];Be!==void 0&&(oe[I.__cacheKey].usedTimes--,Be.usedTimes===0&&x(S)),I.__cacheKey=ee,I.__webglTexture=oe[ee].texture}return Y}function xe(I,S,Y){return Math.floor(Math.floor(I/Y)/S)}function X(I,S,Y,ne){const ee=I.updateRanges;if(ee.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,Y,ne,S.data);else{ee.sort((ue,be)=>ue.start-be.start);let Be=0;for(let ue=1;ue<ee.length;ue++){const be=ee[Be],je=ee[ue],Fe=be.start+be.count,ye=xe(je.start,S.width,4),Qe=xe(be.start,S.width,4);je.start<=Fe+1&&ye===Qe&&xe(je.start+je.count-1,S.width,4)===ye?be.count=Math.max(be.count,je.start+je.count-be.start):(++Be,ee[Be]=je)}ee.length=Be+1;const pe=i.getParameter(i.UNPACK_ROW_LENGTH),Ne=i.getParameter(i.UNPACK_SKIP_PIXELS),Ue=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let ue=0,be=ee.length;ue<be;ue++){const je=ee[ue],Fe=Math.floor(je.start/4),ye=Math.ceil(je.count/4),Qe=Fe%S.width,z=Math.floor(Fe/S.width),de=ye,me=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Qe),i.pixelStorei(i.UNPACK_SKIP_ROWS,z),t.texSubImage2D(i.TEXTURE_2D,0,Qe,z,de,me,Y,ne,S.data)}I.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,pe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ne),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ue)}}function $(I,S,Y){let ne=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ne=i.TEXTURE_3D);const oe=ve(I,S),ee=S.source;t.bindTexture(ne,I.__webglTexture,i.TEXTURE0+Y);const Be=n.get(ee);if(ee.version!==Be.__version||oe===!0){t.activeTexture(i.TEXTURE0+Y);const pe=lt.getPrimaries(lt.workingColorSpace),Ne=S.colorSpace===ci?null:lt.getPrimaries(S.colorSpace),Ue=S.colorSpace===ci||pe===Ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let ue=v(S.image,!1,s.maxTextureSize);ue=Ut(S,ue);const be=r.convert(S.format,S.colorSpace),je=r.convert(S.type);let Fe=C(S.internalFormat,be,je,S.colorSpace,S.isVideoTexture);_e(ne,S);let ye;const Qe=S.mipmaps,z=S.isVideoTexture!==!0,de=Be.__version===void 0||oe===!0,me=ee.dataReady,Re=D(S,ue);if(S.isDepthTexture)Fe=T(S.format===Fs,S.type),de&&(z?t.texStorage2D(i.TEXTURE_2D,1,Fe,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,Fe,ue.width,ue.height,0,be,je,null));else if(S.isDataTexture)if(Qe.length>0){z&&de&&t.texStorage2D(i.TEXTURE_2D,Re,Fe,Qe[0].width,Qe[0].height);for(let ce=0,se=Qe.length;ce<se;ce++)ye=Qe[ce],z?me&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,ye.width,ye.height,be,je,ye.data):t.texImage2D(i.TEXTURE_2D,ce,Fe,ye.width,ye.height,0,be,je,ye.data);S.generateMipmaps=!1}else z?(de&&t.texStorage2D(i.TEXTURE_2D,Re,Fe,ue.width,ue.height),me&&X(S,ue,be,je)):t.texImage2D(i.TEXTURE_2D,0,Fe,ue.width,ue.height,0,be,je,ue.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){z&&de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,Fe,Qe[0].width,Qe[0].height,ue.depth);for(let ce=0,se=Qe.length;ce<se;ce++)if(ye=Qe[ce],S.format!==vn)if(be!==null)if(z){if(me)if(S.layerUpdates.size>0){const Ie=ql(ye.width,ye.height,S.format,S.type);for(const $e of S.layerUpdates){const yt=ye.data.subarray($e*Ie/ye.data.BYTES_PER_ELEMENT,($e+1)*Ie/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,$e,ye.width,ye.height,1,be,yt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,ye.width,ye.height,ue.depth,be,ye.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ce,Fe,ye.width,ye.height,ue.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?me&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,ye.width,ye.height,ue.depth,be,je,ye.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ce,Fe,ye.width,ye.height,ue.depth,0,be,je,ye.data)}else{z&&de&&t.texStorage2D(i.TEXTURE_2D,Re,Fe,Qe[0].width,Qe[0].height);for(let ce=0,se=Qe.length;ce<se;ce++)ye=Qe[ce],S.format!==vn?be!==null?z?me&&t.compressedTexSubImage2D(i.TEXTURE_2D,ce,0,0,ye.width,ye.height,be,ye.data):t.compressedTexImage2D(i.TEXTURE_2D,ce,Fe,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?me&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,ye.width,ye.height,be,je,ye.data):t.texImage2D(i.TEXTURE_2D,ce,Fe,ye.width,ye.height,0,be,je,ye.data)}else if(S.isDataArrayTexture)if(z){if(de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,Fe,ue.width,ue.height,ue.depth),me)if(S.layerUpdates.size>0){const ce=ql(ue.width,ue.height,S.format,S.type);for(const se of S.layerUpdates){const Ie=ue.data.subarray(se*ce/ue.data.BYTES_PER_ELEMENT,(se+1)*ce/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,se,ue.width,ue.height,1,be,je,Ie)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,be,je,ue.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Fe,ue.width,ue.height,ue.depth,0,be,je,ue.data);else if(S.isData3DTexture)z?(de&&t.texStorage3D(i.TEXTURE_3D,Re,Fe,ue.width,ue.height,ue.depth),me&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,be,je,ue.data)):t.texImage3D(i.TEXTURE_3D,0,Fe,ue.width,ue.height,ue.depth,0,be,je,ue.data);else if(S.isFramebufferTexture){if(de)if(z)t.texStorage2D(i.TEXTURE_2D,Re,Fe,ue.width,ue.height);else{let ce=ue.width,se=ue.height;for(let Ie=0;Ie<Re;Ie++)t.texImage2D(i.TEXTURE_2D,Ie,Fe,ce,se,0,be,je,null),ce>>=1,se>>=1}}else if(Qe.length>0){if(z&&de){const ce=Rt(Qe[0]);t.texStorage2D(i.TEXTURE_2D,Re,Fe,ce.width,ce.height)}for(let ce=0,se=Qe.length;ce<se;ce++)ye=Qe[ce],z?me&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,be,je,ye):t.texImage2D(i.TEXTURE_2D,ce,Fe,be,je,ye);S.generateMipmaps=!1}else if(z){if(de){const ce=Rt(ue);t.texStorage2D(i.TEXTURE_2D,Re,Fe,ce.width,ce.height)}me&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,be,je,ue)}else t.texImage2D(i.TEXTURE_2D,0,Fe,be,je,ue);m(S)&&u(ne),Be.__version=ee.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function Q(I,S,Y){if(S.image.length!==6)return;const ne=ve(I,S),oe=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+Y);const ee=n.get(oe);if(oe.version!==ee.__version||ne===!0){t.activeTexture(i.TEXTURE0+Y);const Be=lt.getPrimaries(lt.workingColorSpace),pe=S.colorSpace===ci?null:lt.getPrimaries(S.colorSpace),Ne=S.colorSpace===ci||Be===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const Ue=S.isCompressedTexture||S.image[0].isCompressedTexture,ue=S.image[0]&&S.image[0].isDataTexture,be=[];for(let se=0;se<6;se++)!Ue&&!ue?be[se]=v(S.image[se],!0,s.maxCubemapSize):be[se]=ue?S.image[se].image:S.image[se],be[se]=Ut(S,be[se]);const je=be[0],Fe=r.convert(S.format,S.colorSpace),ye=r.convert(S.type),Qe=C(S.internalFormat,Fe,ye,S.colorSpace),z=S.isVideoTexture!==!0,de=ee.__version===void 0||ne===!0,me=oe.dataReady;let Re=D(S,je);_e(i.TEXTURE_CUBE_MAP,S);let ce;if(Ue){z&&de&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,Qe,je.width,je.height);for(let se=0;se<6;se++){ce=be[se].mipmaps;for(let Ie=0;Ie<ce.length;Ie++){const $e=ce[Ie];S.format!==vn?Fe!==null?z?me&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,0,0,$e.width,$e.height,Fe,$e.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,Qe,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,0,0,$e.width,$e.height,Fe,ye,$e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,Qe,$e.width,$e.height,0,Fe,ye,$e.data)}}}else{if(ce=S.mipmaps,z&&de){ce.length>0&&Re++;const se=Rt(be[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,Qe,se.width,se.height)}for(let se=0;se<6;se++)if(ue){z?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,be[se].width,be[se].height,Fe,ye,be[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Qe,be[se].width,be[se].height,0,Fe,ye,be[se].data);for(let Ie=0;Ie<ce.length;Ie++){const yt=ce[Ie].image[se].image;z?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,0,0,yt.width,yt.height,Fe,ye,yt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,Qe,yt.width,yt.height,0,Fe,ye,yt.data)}}else{z?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Fe,ye,be[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Qe,Fe,ye,be[se]);for(let Ie=0;Ie<ce.length;Ie++){const $e=ce[Ie];z?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,0,0,Fe,ye,$e.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,Qe,Fe,ye,$e.image[se])}}}m(S)&&u(i.TEXTURE_CUBE_MAP),ee.__version=oe.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function Me(I,S,Y,ne,oe,ee){const Be=r.convert(Y.format,Y.colorSpace),pe=r.convert(Y.type),Ne=C(Y.internalFormat,Be,pe,Y.colorSpace),Ue=n.get(S),ue=n.get(Y);if(ue.__renderTarget=S,!Ue.__hasExternalTextures){const be=Math.max(1,S.width>>ee),je=Math.max(1,S.height>>ee);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,ee,Ne,be,je,S.depth,0,Be,pe,null):t.texImage2D(oe,ee,Ne,be,je,0,Be,pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),Ce(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,oe,ue.__webglTexture,0,Tt(S)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,oe,ue.__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(I,S,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,I),S.depthBuffer){const ne=S.depthTexture,oe=ne&&ne.isDepthTexture?ne.type:null,ee=T(S.stencilBuffer,oe),Be=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=Tt(S);Ce(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe,ee,S.width,S.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,ee,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ee,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Be,i.RENDERBUFFER,I)}else{const ne=S.textures;for(let oe=0;oe<ne.length;oe++){const ee=ne[oe],Be=r.convert(ee.format,ee.colorSpace),pe=r.convert(ee.type),Ne=C(ee.internalFormat,Be,pe,ee.colorSpace),Ue=Tt(S);Y&&Ce(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue,Ne,S.width,S.height):Ce(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ue,Ne,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Ne,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ye(I,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=n.get(S.depthTexture);ne.__renderTarget=S,(!ne.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Z(S.depthTexture,0);const oe=ne.__webglTexture,ee=Tt(S);if(S.depthTexture.format===Us)Ce(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0);else if(S.depthTexture.format===Fs)Ce(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function Lt(I){const S=n.get(I),Y=I.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==I.depthTexture){const ne=I.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ne){const oe=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ne.removeEventListener("dispose",oe)};ne.addEventListener("dispose",oe),S.__depthDisposeCallback=oe}S.__boundDepthTexture=ne}if(I.depthTexture&&!S.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");const ne=I.texture.mipmaps;ne&&ne.length>0?Ye(S.__webglFramebuffer[0],I):Ye(S.__webglFramebuffer,I)}else if(Y){S.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[ne]),S.__webglDepthbuffer[ne]===void 0)S.__webglDepthbuffer[ne]=i.createRenderbuffer(),De(S.__webglDepthbuffer[ne],I,!1);else{const oe=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=S.__webglDepthbuffer[ne];i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,ee)}}else{const ne=I.texture.mipmaps;if(ne&&ne.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),De(S.__webglDepthbuffer,I,!1);else{const oe=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,ee)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(I,S,Y){const ne=n.get(I);S!==void 0&&Me(ne.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&Lt(I)}function B(I){const S=I.texture,Y=n.get(I),ne=n.get(S);I.addEventListener("dispose",U);const oe=I.textures,ee=I.isWebGLCubeRenderTarget===!0,Be=oe.length>1;if(Be||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=S.version,a.memory.textures++),ee){Y.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(S.mipmaps&&S.mipmaps.length>0){Y.__webglFramebuffer[pe]=[];for(let Ne=0;Ne<S.mipmaps.length;Ne++)Y.__webglFramebuffer[pe][Ne]=i.createFramebuffer()}else Y.__webglFramebuffer[pe]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){Y.__webglFramebuffer=[];for(let pe=0;pe<S.mipmaps.length;pe++)Y.__webglFramebuffer[pe]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(Be)for(let pe=0,Ne=oe.length;pe<Ne;pe++){const Ue=n.get(oe[pe]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&Ce(I)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let pe=0;pe<oe.length;pe++){const Ne=oe[pe];Y.__webglColorRenderbuffer[pe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[pe]);const Ue=r.convert(Ne.format,Ne.colorSpace),ue=r.convert(Ne.type),be=C(Ne.internalFormat,Ue,ue,Ne.colorSpace,I.isXRRenderTarget===!0),je=Tt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,je,be,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,Y.__webglColorRenderbuffer[pe])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),De(Y.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),_e(i.TEXTURE_CUBE_MAP,S);for(let pe=0;pe<6;pe++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ne=0;Ne<S.mipmaps.length;Ne++)Me(Y.__webglFramebuffer[pe][Ne],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne);else Me(Y.__webglFramebuffer[pe],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(S)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Be){for(let pe=0,Ne=oe.length;pe<Ne;pe++){const Ue=oe[pe],ue=n.get(Ue);let be=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(be=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(be,ue.__webglTexture),_e(be,Ue),Me(Y.__webglFramebuffer,I,Ue,i.COLOR_ATTACHMENT0+pe,be,0),m(Ue)&&u(be)}t.unbindTexture()}else{let pe=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(pe=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,ne.__webglTexture),_e(pe,S),S.mipmaps&&S.mipmaps.length>0)for(let Ne=0;Ne<S.mipmaps.length;Ne++)Me(Y.__webglFramebuffer[Ne],I,S,i.COLOR_ATTACHMENT0,pe,Ne);else Me(Y.__webglFramebuffer,I,S,i.COLOR_ATTACHMENT0,pe,0);m(S)&&u(pe),t.unbindTexture()}I.depthBuffer&&Lt(I)}function Mt(I){const S=I.textures;for(let Y=0,ne=S.length;Y<ne;Y++){const oe=S[Y];if(m(oe)){const ee=L(I),Be=n.get(oe).__webglTexture;t.bindTexture(ee,Be),u(ee),t.unbindTexture()}}}const We=[],ut=[];function ze(I){if(I.samples>0){if(Ce(I)===!1){const S=I.textures,Y=I.width,ne=I.height;let oe=i.COLOR_BUFFER_BIT;const ee=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Be=n.get(I),pe=S.length>1;if(pe)for(let Ue=0;Ue<S.length;Ue++)t.bindFramebuffer(i.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer);const Ne=I.texture.mipmaps;Ne&&Ne.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Be.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let Ue=0;Ue<S.length;Ue++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),pe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Be.__webglColorRenderbuffer[Ue]);const ue=n.get(S[Ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ue,0)}i.blitFramebuffer(0,0,Y,ne,0,0,Y,ne,oe,i.NEAREST),c===!0&&(We.length=0,ut.length=0,We.push(i.COLOR_ATTACHMENT0+Ue),I.depthBuffer&&I.resolveDepthBuffer===!1&&(We.push(ee),ut.push(ee),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ut)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,We))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pe)for(let Ue=0;Ue<S.length;Ue++){t.bindFramebuffer(i.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,Be.__webglColorRenderbuffer[Ue]);const ue=n.get(S[Ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,ue,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){const S=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Tt(I){return Math.min(s.maxSamples,I.samples)}function Ce(I){const S=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function nt(I){const S=a.render.frame;h.get(I)!==S&&(h.set(I,S),I.update())}function Ut(I,S){const Y=I.colorSpace,ne=I.format,oe=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Y!==Li&&Y!==ci&&(lt.getTransfer(Y)===Et?(ne!==vn||oe!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),S}function Rt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=k,this.setTexture2D=Z,this.setTexture2DArray=F,this.setTexture3D=ie,this.setTextureCube=q,this.rebindTextures=ct,this.setupRenderTarget=B,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Ce}function u_(i,e){function t(n,s=ci){let r;const a=lt.getTransfer(s);if(n===Un)return i.UNSIGNED_BYTE;if(n===Fo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Oo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Lc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Cc)return i.BYTE;if(n===Pc)return i.SHORT;if(n===Is)return i.UNSIGNED_SHORT;if(n===Uo)return i.INT;if(n===Pi)return i.UNSIGNED_INT;if(n===cn)return i.FLOAT;if(n===Kn)return i.HALF_FLOAT;if(n===Dc)return i.ALPHA;if(n===Ic)return i.RGB;if(n===vn)return i.RGBA;if(n===Us)return i.DEPTH_COMPONENT;if(n===Fs)return i.DEPTH_STENCIL;if(n===Nc)return i.RED;if(n===Bo)return i.RED_INTEGER;if(n===Uc)return i.RG;if(n===ko)return i.RG_INTEGER;if(n===zo)return i.RGBA_INTEGER;if(n===Rr||n===Cr||n===Pr||n===Lr)if(a===Et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Rr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Rr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Cr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Pr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Lr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===no||n===io||n===so||n===ro)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===no)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===io)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===so)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ro)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ao||n===oo||n===lo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ao||n===oo)return a===Et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===lo)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===co||n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===_o||n===xo||n===vo||n===Mo||n===yo||n===So||n===Eo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===co)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ho)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===uo)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fo)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===po)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===mo)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===go)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_o)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xo)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vo)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Mo)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yo)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===So)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Eo)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Dr||n===bo||n===To)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Dr)return a===Et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===To)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Fc||n===wo||n===Ao||n===Ro)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Dr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===wo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ao)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ro)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ns?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class dh extends jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const d_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,f_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class p_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new dh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new di({vertexShader:d_,fragmentShader:f_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ot(new jr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class m_ extends Ni{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,f=null,p=null,M=null;const v=new p_,m={},u=t.getContextAttributes();let L=null,C=null;const T=[],D=[],N=new Je;let U=null;const R=new qt;R.viewport=new _t;const x=new qt;x.viewport=new _t;const y=[R,x],P=new Id;let k=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let $=T[X];return $===void 0&&($=new Ra,T[X]=$),$.getTargetRaySpace()},this.getControllerGrip=function(X){let $=T[X];return $===void 0&&($=new Ra,T[X]=$),$.getGripSpace()},this.getHand=function(X){let $=T[X];return $===void 0&&($=new Ra,T[X]=$),$.getHandSpace()};function H(X){const $=D.indexOf(X.inputSource);if($===-1)return;const Q=T[$];Q!==void 0&&(Q.update(X.inputSource,X.frame,l||a),Q.dispatchEvent({type:X.type,data:X.inputSource}))}function Z(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",F);for(let X=0;X<T.length;X++){const $=D[X];$!==null&&(D[X]=null,T[X].disconnect($))}k=null,V=null,v.reset();for(const X in m)delete m[X];e.setRenderTarget(L),p=null,f=null,d=null,s=null,C=null,xe.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(L=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",F),u.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(N),typeof XRWebGLBinding<"u"&&(d=new XRWebGLBinding(s,t)),d!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let Q=null,Me=null,De=null;u.depth&&(De=u.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=u.stencil?Fs:Us,Me=u.stencil?Ns:Pi);const Ye={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:r};f=d.createProjectionLayer(Ye),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),C=new Di(f.textureWidth,f.textureHeight,{format:vn,type:Un,depthTexture:new Zc(f.textureWidth,f.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:u.stencil,colorSpace:e.outputColorSpace,samples:u.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Q={antialias:u.antialias,alpha:!0,depth:u.depth,stencil:u.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Q),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),C=new Di(p.framebufferWidth,p.framebufferHeight,{format:vn,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:u.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),xe.setContext(s),xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function F(X){for(let $=0;$<X.removed.length;$++){const Q=X.removed[$],Me=D.indexOf(Q);Me>=0&&(D[Me]=null,T[Me].disconnect(Q))}for(let $=0;$<X.added.length;$++){const Q=X.added[$];let Me=D.indexOf(Q);if(Me===-1){for(let Ye=0;Ye<T.length;Ye++)if(Ye>=D.length){D.push(Q),Me=Ye;break}else if(D[Ye]===null){D[Ye]=Q,Me=Ye;break}if(Me===-1)break}const De=T[Me];De&&De.connect(Q)}}const ie=new O,q=new O;function re(X,$,Q){ie.setFromMatrixPosition($.matrixWorld),q.setFromMatrixPosition(Q.matrixWorld);const Me=ie.distanceTo(q),De=$.projectionMatrix.elements,Ye=Q.projectionMatrix.elements,Lt=De[14]/(De[10]-1),ct=De[14]/(De[10]+1),B=(De[9]+1)/De[5],Mt=(De[9]-1)/De[5],We=(De[8]-1)/De[0],ut=(Ye[8]+1)/Ye[0],ze=Lt*We,Tt=Lt*ut,Ce=Me/(-We+ut),nt=Ce*-We;if($.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(nt),X.translateZ(Ce),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),De[10]===-1)X.projectionMatrix.copy($.projectionMatrix),X.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const Ut=Lt+Ce,Rt=ct+Ce,I=ze-nt,S=Tt+(Me-nt),Y=B*ct/Rt*Ut,ne=Mt*ct/Rt*Ut;X.projectionMatrix.makePerspective(I,S,Y,ne,Ut,Rt),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ae(X,$){$===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices($.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let $=X.near,Q=X.far;v.texture!==null&&(v.depthNear>0&&($=v.depthNear),v.depthFar>0&&(Q=v.depthFar)),P.near=x.near=R.near=$,P.far=x.far=R.far=Q,(k!==P.near||V!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),k=P.near,V=P.far),P.layers.mask=X.layers.mask|6,R.layers.mask=P.layers.mask&3,x.layers.mask=P.layers.mask&5;const Me=X.parent,De=P.cameras;ae(P,Me);for(let Ye=0;Ye<De.length;Ye++)ae(De[Ye],Me);De.length===2?re(P,R,x):P.projectionMatrix.copy(R.projectionMatrix),fe(X,P,Me)};function fe(X,$,Q){Q===null?X.matrix.copy($.matrixWorld):(X.matrix.copy(Q.matrixWorld),X.matrix.invert(),X.matrix.multiply($.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy($.projectionMatrix),X.projectionMatrixInverse.copy($.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=hs*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(X){c=X,f!==null&&(f.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(P)},this.getCameraTexture=function(X){return m[X]};let _e=null;function ve(X,$){if(h=$.getViewerPose(l||a),M=$,h!==null){const Q=h.views;p!==null&&(e.setRenderTargetFramebuffer(C,p.framebuffer),e.setRenderTarget(C));let Me=!1;Q.length!==P.cameras.length&&(P.cameras.length=0,Me=!0);for(let ct=0;ct<Q.length;ct++){const B=Q[ct];let Mt=null;if(p!==null)Mt=p.getViewport(B);else{const ut=d.getViewSubImage(f,B);Mt=ut.viewport,ct===0&&(e.setRenderTargetTextures(C,ut.colorTexture,ut.depthStencilTexture),e.setRenderTarget(C))}let We=y[ct];We===void 0&&(We=new qt,We.layers.enable(ct),We.viewport=new _t,y[ct]=We),We.matrix.fromArray(B.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(B.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),ct===0&&(P.matrix.copy(We.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Me===!0&&P.cameras.push(We)}const De=s.enabledFeatures;if(De&&De.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&d){const ct=d.getDepthInformation(Q[0]);ct&&ct.isValid&&ct.texture&&v.init(ct,s.renderState)}if(De&&De.includes("camera-access")&&(e.state.unbindTexture(),d))for(let ct=0;ct<Q.length;ct++){const B=Q[ct].camera;if(B){let Mt=m[B];Mt||(Mt=new dh,m[B]=Mt);const We=d.getCameraImage(B);Mt.sourceTexture=We}}}for(let Q=0;Q<T.length;Q++){const Me=D[Q],De=T[Q];Me!==null&&De!==void 0&&De.update(Me,$,l||a)}_e&&_e(X,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),M=null}const xe=new oh;xe.setAnimationLoop(ve),this.setAnimationLoop=function(X){_e=X},this.dispose=function(){}}}const Ei=new rn,g_=new et;function __(i,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Gc(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,L,C,T){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),d(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,T)):u.isMeshMatcapMaterial?(r(m,u),M(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),v(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?c(m,u,L,C):u.isSpriteMaterial?l(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===sn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===sn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const L=e.get(u),C=L.envMap,T=L.envMapRotation;C&&(m.envMap.value=C,Ei.copy(T),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),m.envMapRotation.value.setFromMatrix4(g_.makeRotationFromEuler(Ei)),m.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,L,C){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*L,m.scale.value=C*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function l(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,L){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===sn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=L.texture,m.transmissionSamplerSize.value.set(L.width,L.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function M(m,u){u.matcap&&(m.matcap.value=u.matcap)}function v(m,u){const L=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(L.matrixWorld),m.nearDistance.value=L.shadow.camera.near,m.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function x_(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(L,C){const T=C.program;n.uniformBlockBinding(L,T)}function l(L,C){let T=s[L.id];T===void 0&&(M(L),T=h(L),s[L.id]=T,L.addEventListener("dispose",m));const D=C.program;n.updateUBOMapping(L,D);const N=e.render.frame;r[L.id]!==N&&(f(L),r[L.id]=N)}function h(L){const C=d();L.__bindingPointIndex=C;const T=i.createBuffer(),D=L.__size,N=L.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,D,N),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,C,T),T}function d(){for(let L=0;L<o;L++)if(a.indexOf(L)===-1)return a.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(L){const C=s[L.id],T=L.uniforms,D=L.__cache;i.bindBuffer(i.UNIFORM_BUFFER,C);for(let N=0,U=T.length;N<U;N++){const R=Array.isArray(T[N])?T[N]:[T[N]];for(let x=0,y=R.length;x<y;x++){const P=R[x];if(p(P,N,x,D)===!0){const k=P.__offset,V=Array.isArray(P.value)?P.value:[P.value];let H=0;for(let Z=0;Z<V.length;Z++){const F=V[Z],ie=v(F);typeof F=="number"||typeof F=="boolean"?(P.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,k+H,P.__data)):F.isMatrix3?(P.__data[0]=F.elements[0],P.__data[1]=F.elements[1],P.__data[2]=F.elements[2],P.__data[3]=0,P.__data[4]=F.elements[3],P.__data[5]=F.elements[4],P.__data[6]=F.elements[5],P.__data[7]=0,P.__data[8]=F.elements[6],P.__data[9]=F.elements[7],P.__data[10]=F.elements[8],P.__data[11]=0):(F.toArray(P.__data,H),H+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(L,C,T,D){const N=L.value,U=C+"_"+T;if(D[U]===void 0)return typeof N=="number"||typeof N=="boolean"?D[U]=N:D[U]=N.clone(),!0;{const R=D[U];if(typeof N=="number"||typeof N=="boolean"){if(R!==N)return D[U]=N,!0}else if(R.equals(N)===!1)return R.copy(N),!0}return!1}function M(L){const C=L.uniforms;let T=0;const D=16;for(let U=0,R=C.length;U<R;U++){const x=Array.isArray(C[U])?C[U]:[C[U]];for(let y=0,P=x.length;y<P;y++){const k=x[y],V=Array.isArray(k.value)?k.value:[k.value];for(let H=0,Z=V.length;H<Z;H++){const F=V[H],ie=v(F),q=T%D,re=q%ie.boundary,ae=q+re;T+=re,ae!==0&&D-ae<ie.storage&&(T+=D-ae),k.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=T,T+=ie.storage}}}const N=T%D;return N>0&&(T+=D-N),L.__size=T,L.__cache={},this}function v(L){const C={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(C.boundary=4,C.storage=4):L.isVector2?(C.boundary=8,C.storage=8):L.isVector3||L.isColor?(C.boundary=16,C.storage=12):L.isVector4?(C.boundary=16,C.storage=16):L.isMatrix3?(C.boundary=48,C.storage=48):L.isMatrix4?(C.boundary=64,C.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),C}function m(L){const C=L.target;C.removeEventListener("dispose",m);const T=a.indexOf(C.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[C.id]),delete s[C.id],delete r[C.id]}function u(){for(const L in s)i.deleteBuffer(s[L]);a=[],s={},r={}}return{bind:c,update:l,dispose:u}}class v_{constructor(e={}){const{canvas:t=Du(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const M=new Uint32Array(4),v=new Int32Array(4);let m=null,u=null;const L=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let D=!1;this._outputColorSpace=It;let N=0,U=0,R=null,x=-1,y=null;const P=new _t,k=new _t;let V=null;const H=new tt(0);let Z=0,F=t.width,ie=t.height,q=1,re=null,ae=null;const fe=new _t(0,0,F,ie),_e=new _t(0,0,F,ie);let ve=!1;const xe=new Xo;let X=!1,$=!1;const Q=new et,Me=new O,De=new _t,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Lt=!1;function ct(){return R===null?q:1}let B=n;function Mt(b,G){return t.getContext(b,G)}try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${No}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",Re,!1),t.addEventListener("webglcontextcreationerror",ce,!1),B===null){const G="webgl2";if(B=Mt(G,b),B===null)throw Mt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let We,ut,ze,Tt,Ce,nt,Ut,Rt,I,S,Y,ne,oe,ee,Be,pe,Ne,Ue,ue,be,je,Fe,ye,Qe;function z(){We=new Cm(B),We.init(),Fe=new u_(B,We),ut=new Sm(B,We,e,Fe),ze=new c_(B,We),ut.reversedDepthBuffer&&f&&ze.buffers.depth.setReversed(!0),Tt=new Dm(B),Ce=new Zg,nt=new h_(B,We,ze,Ce,ut,Fe,Tt),Ut=new bm(T),Rt=new Rm(T),I=new Od(B),ye=new Mm(B,I),S=new Pm(B,I,Tt,ye),Y=new Nm(B,S,I,Tt),ue=new Im(B,ut,nt),pe=new Em(Ce),ne=new Kg(T,Ut,Rt,We,ut,ye,pe),oe=new __(T,Ce),ee=new $g,Be=new s_(We),Ue=new vm(T,Ut,Rt,ze,Y,p,c),Ne=new o_(T,Y,ut),Qe=new x_(B,Tt,ut,ze),be=new ym(B,We,Tt),je=new Lm(B,We,Tt),Tt.programs=ne.programs,T.capabilities=ut,T.extensions=We,T.properties=Ce,T.renderLists=ee,T.shadowMap=Ne,T.state=ze,T.info=Tt}z();const de=new m_(T,B);this.xr=de,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const b=We.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=We.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(b){b!==void 0&&(q=b,this.setSize(F,ie,!1))},this.getSize=function(b){return b.set(F,ie)},this.setSize=function(b,G,j=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=b,ie=G,t.width=Math.floor(b*q),t.height=Math.floor(G*q),j===!0&&(t.style.width=b+"px",t.style.height=G+"px"),this.setViewport(0,0,b,G)},this.getDrawingBufferSize=function(b){return b.set(F*q,ie*q).floor()},this.setDrawingBufferSize=function(b,G,j){F=b,ie=G,q=j,t.width=Math.floor(b*j),t.height=Math.floor(G*j),this.setViewport(0,0,b,G)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(fe)},this.setViewport=function(b,G,j,K){b.isVector4?fe.set(b.x,b.y,b.z,b.w):fe.set(b,G,j,K),ze.viewport(P.copy(fe).multiplyScalar(q).round())},this.getScissor=function(b){return b.copy(_e)},this.setScissor=function(b,G,j,K){b.isVector4?_e.set(b.x,b.y,b.z,b.w):_e.set(b,G,j,K),ze.scissor(k.copy(_e).multiplyScalar(q).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(b){ze.setScissorTest(ve=b)},this.setOpaqueSort=function(b){re=b},this.setTransparentSort=function(b){ae=b},this.getClearColor=function(b){return b.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(b=!0,G=!0,j=!0){let K=0;if(b){let W=!1;if(R!==null){const he=R.texture.format;W=he===zo||he===ko||he===Bo}if(W){const he=R.texture.type,Ee=he===Un||he===Pi||he===Is||he===Ns||he===Fo||he===Oo,Pe=Ue.getClearColor(),we=Ue.getClearAlpha(),qe=Pe.r,Ke=Pe.g,Ve=Pe.b;Ee?(M[0]=qe,M[1]=Ke,M[2]=Ve,M[3]=we,B.clearBufferuiv(B.COLOR,0,M)):(v[0]=qe,v[1]=Ke,v[2]=Ve,v[3]=we,B.clearBufferiv(B.COLOR,0,v))}else K|=B.COLOR_BUFFER_BIT}G&&(K|=B.DEPTH_BUFFER_BIT),j&&(K|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",Re,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),Ue.dispose(),ee.dispose(),Be.dispose(),Ce.dispose(),Ut.dispose(),Rt.dispose(),Y.dispose(),ye.dispose(),Qe.dispose(),ne.dispose(),de.dispose(),de.removeEventListener("sessionstart",mn),de.removeEventListener("sessionend",Hs),Fn.stop()};function me(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const b=Tt.autoReset,G=Ne.enabled,j=Ne.autoUpdate,K=Ne.needsUpdate,W=Ne.type;z(),Tt.autoReset=b,Ne.enabled=G,Ne.autoUpdate=j,Ne.needsUpdate=K,Ne.type=W}function ce(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function se(b){const G=b.target;G.removeEventListener("dispose",se),Ie(G)}function Ie(b){$e(b),Ce.remove(b)}function $e(b){const G=Ce.get(b).programs;G!==void 0&&(G.forEach(function(j){ne.releaseProgram(j)}),b.isShaderMaterial&&ne.releaseShaderCache(b))}this.renderBufferDirect=function(b,G,j,K,W,he){G===null&&(G=Ye);const Ee=W.isMesh&&W.matrixWorld.determinant()<0,Pe=ea(b,G,j,K,W);ze.setMaterial(K,Ee);let we=j.index,qe=1;if(K.wireframe===!0){if(we=S.getWireframeAttribute(j),we===void 0)return;qe=2}const Ke=j.drawRange,Ve=j.attributes.position;let ot=Ke.start*qe,ht=(Ke.start+Ke.count)*qe;he!==null&&(ot=Math.max(ot,he.start*qe),ht=Math.min(ht,(he.start+he.count)*qe)),we!==null?(ot=Math.max(ot,0),ht=Math.min(ht,we.count)):Ve!=null&&(ot=Math.max(ot,0),ht=Math.min(ht,Ve.count));const Ct=ht-ot;if(Ct<0||Ct===1/0)return;ye.setup(W,K,Pe,j,we);let St,xt=be;if(we!==null&&(St=I.get(we),xt=je,xt.setIndex(St)),W.isMesh)K.wireframe===!0?(ze.setLineWidth(K.wireframeLinewidth*ct()),xt.setMode(B.LINES)):xt.setMode(B.TRIANGLES);else if(W.isLine){let Ge=K.linewidth;Ge===void 0&&(Ge=1),ze.setLineWidth(Ge*ct()),W.isLineSegments?xt.setMode(B.LINES):W.isLineLoop?xt.setMode(B.LINE_LOOP):xt.setMode(B.LINE_STRIP)}else W.isPoints?xt.setMode(B.POINTS):W.isSprite&&xt.setMode(B.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)rs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))xt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Ge=W._multiDrawStarts,wt=W._multiDrawCounts,dt=W._multiDrawCount,Kt=we?I.get(we).bytesPerElement:1,On=Ce.get(K).currentProgram.getUniforms();for(let ft=0;ft<dt;ft++)On.setValue(B,"_gl_DrawID",ft),xt.render(Ge[ft]/Kt,wt[ft])}else if(W.isInstancedMesh)xt.renderInstances(ot,Ct,W.count);else if(j.isInstancedBufferGeometry){const Ge=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,wt=Math.min(j.instanceCount,Ge);xt.renderInstances(ot,Ct,wt)}else xt.render(ot,Ct)};function yt(b,G,j){b.transparent===!0&&b.side===Ln&&b.forceSinglePass===!1?(b.side=sn,b.needsUpdate=!0,_i(b,G,j),b.side=Jn,b.needsUpdate=!0,_i(b,G,j),b.side=Ln):_i(b,G,j)}this.compile=function(b,G,j=null){j===null&&(j=b),u=Be.get(j),u.init(G),C.push(u),j.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(u.pushLight(W),W.castShadow&&u.pushShadow(W))}),b!==j&&b.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(u.pushLight(W),W.castShadow&&u.pushShadow(W))}),u.setupLights();const K=new Set;return b.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const he=W.material;if(he)if(Array.isArray(he))for(let Ee=0;Ee<he.length;Ee++){const Pe=he[Ee];yt(Pe,j,W),K.add(Pe)}else yt(he,j,W),K.add(he)}),u=C.pop(),K},this.compileAsync=function(b,G,j=null){const K=this.compile(b,G,j);return new Promise(W=>{function he(){if(K.forEach(function(Ee){Ce.get(Ee).currentProgram.isReady()&&K.delete(Ee)}),K.size===0){W(b);return}setTimeout(he,10)}We.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let it=null;function pn(b){it&&it(b)}function mn(){Fn.stop()}function Hs(){Fn.start()}const Fn=new oh;Fn.setAnimationLoop(pn),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(b){it=b,de.setAnimationLoop(b),b===null?Fn.stop():Fn.start()},de.addEventListener("sessionstart",mn),de.addEventListener("sessionend",Hs),this.render=function(b,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(G),G=de.getCamera()),b.isScene===!0&&b.onBeforeRender(T,b,G,R),u=Be.get(b,C.length),u.init(G),C.push(u),Q.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),xe.setFromProjectionMatrix(Q,In,G.reversedDepth),$=this.localClippingEnabled,X=pe.init(this.clippingPlanes,$),m=ee.get(b,L.length),m.init(),L.push(m),de.enabled===!0&&de.isPresenting===!0){const he=T.xr.getDepthSensingMesh();he!==null&&xs(he,G,-1/0,T.sortObjects)}xs(b,G,0,T.sortObjects),m.finish(),T.sortObjects===!0&&m.sort(re,ae),Lt=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,Lt&&Ue.addToRenderList(m,b),this.info.render.frame++,X===!0&&pe.beginShadows();const j=u.state.shadowsArray;Ne.render(j,b,G),X===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=m.opaque,W=m.transmissive;if(u.setupLights(),G.isArrayCamera){const he=G.cameras;if(W.length>0)for(let Ee=0,Pe=he.length;Ee<Pe;Ee++){const we=he[Ee];Ws(K,W,b,we)}Lt&&Ue.render(b);for(let Ee=0,Pe=he.length;Ee<Pe;Ee++){const we=he[Ee];Gs(m,b,we,we.viewport)}}else W.length>0&&Ws(K,W,b,G),Lt&&Ue.render(b),Gs(m,b,G);R!==null&&U===0&&(nt.updateMultisampleRenderTarget(R),nt.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(T,b,G),ye.resetDefaultState(),x=-1,y=null,C.pop(),C.length>0?(u=C[C.length-1],X===!0&&pe.setGlobalState(T.clippingPlanes,u.state.camera)):u=null,L.pop(),L.length>0?m=L[L.length-1]:m=null};function xs(b,G,j,K){if(b.visible===!1)return;if(b.layers.test(G.layers)){if(b.isGroup)j=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(G);else if(b.isLight)u.pushLight(b),b.castShadow&&u.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||xe.intersectsSprite(b)){K&&De.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Q);const Ee=Y.update(b),Pe=b.material;Pe.visible&&m.push(b,Ee,Pe,j,De.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||xe.intersectsObject(b))){const Ee=Y.update(b),Pe=b.material;if(K&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),De.copy(b.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),De.copy(Ee.boundingSphere.center)),De.applyMatrix4(b.matrixWorld).applyMatrix4(Q)),Array.isArray(Pe)){const we=Ee.groups;for(let qe=0,Ke=we.length;qe<Ke;qe++){const Ve=we[qe],ot=Pe[Ve.materialIndex];ot&&ot.visible&&m.push(b,Ee,ot,j,De.z,Ve)}}else Pe.visible&&m.push(b,Ee,Pe,j,De.z,null)}}const he=b.children;for(let Ee=0,Pe=he.length;Ee<Pe;Ee++)xs(he[Ee],G,j,K)}function Gs(b,G,j,K){const W=b.opaque,he=b.transmissive,Ee=b.transparent;u.setupLightsView(j),X===!0&&pe.setGlobalState(T.clippingPlanes,j),K&&ze.viewport(P.copy(K)),W.length>0&&gi(W,G,j),he.length>0&&gi(he,G,j),Ee.length>0&&gi(Ee,G,j),ze.buffers.depth.setTest(!0),ze.buffers.depth.setMask(!0),ze.buffers.color.setMask(!0),ze.setPolygonOffset(!1)}function Ws(b,G,j,K){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[K.id]===void 0&&(u.state.transmissionRenderTarget[K.id]=new Di(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?Kn:Un,minFilter:jn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));const he=u.state.transmissionRenderTarget[K.id],Ee=K.viewport||P;he.setSize(Ee.z*T.transmissionResolutionScale,Ee.w*T.transmissionResolutionScale);const Pe=T.getRenderTarget(),we=T.getActiveCubeFace(),qe=T.getActiveMipmapLevel();T.setRenderTarget(he),T.getClearColor(H),Z=T.getClearAlpha(),Z<1&&T.setClearColor(16777215,.5),T.clear(),Lt&&Ue.render(j);const Ke=T.toneMapping;T.toneMapping=ui;const Ve=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),u.setupLightsView(K),X===!0&&pe.setGlobalState(T.clippingPlanes,K),gi(b,j,K),nt.updateMultisampleRenderTarget(he),nt.updateRenderTargetMipmap(he),We.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let ht=0,Ct=G.length;ht<Ct;ht++){const St=G[ht],xt=St.object,Ge=St.geometry,wt=St.material,dt=St.group;if(wt.side===Ln&&xt.layers.test(K.layers)){const Kt=wt.side;wt.side=sn,wt.needsUpdate=!0,Xs(xt,j,K,Ge,wt,dt),wt.side=Kt,wt.needsUpdate=!0,ot=!0}}ot===!0&&(nt.updateMultisampleRenderTarget(he),nt.updateRenderTargetMipmap(he))}T.setRenderTarget(Pe,we,qe),T.setClearColor(H,Z),Ve!==void 0&&(K.viewport=Ve),T.toneMapping=Ke}function gi(b,G,j){const K=G.isScene===!0?G.overrideMaterial:null;for(let W=0,he=b.length;W<he;W++){const Ee=b[W],Pe=Ee.object,we=Ee.geometry,qe=Ee.group;let Ke=Ee.material;Ke.allowOverride===!0&&K!==null&&(Ke=K),Pe.layers.test(j.layers)&&Xs(Pe,G,j,we,Ke,qe)}}function Xs(b,G,j,K,W,he){b.onBeforeRender(T,G,j,K,W,he),b.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(T,G,j,K,b,he),W.transparent===!0&&W.side===Ln&&W.forceSinglePass===!1?(W.side=sn,W.needsUpdate=!0,T.renderBufferDirect(j,G,K,W,b,he),W.side=Jn,W.needsUpdate=!0,T.renderBufferDirect(j,G,K,W,b,he),W.side=Ln):T.renderBufferDirect(j,G,K,W,b,he),b.onAfterRender(T,G,j,K,W,he)}function _i(b,G,j){G.isScene!==!0&&(G=Ye);const K=Ce.get(b),W=u.state.lights,he=u.state.shadowsArray,Ee=W.state.version,Pe=ne.getParameters(b,W.state,he,G,j),we=ne.getProgramCacheKey(Pe);let qe=K.programs;K.environment=b.isMeshStandardMaterial?G.environment:null,K.fog=G.fog,K.envMap=(b.isMeshStandardMaterial?Rt:Ut).get(b.envMap||K.environment),K.envMapRotation=K.environment!==null&&b.envMap===null?G.environmentRotation:b.envMapRotation,qe===void 0&&(b.addEventListener("dispose",se),qe=new Map,K.programs=qe);let Ke=qe.get(we);if(Ke!==void 0){if(K.currentProgram===Ke&&K.lightsStateVersion===Ee)return Ys(b,Pe),Ke}else Pe.uniforms=ne.getUniforms(b),b.onBeforeCompile(Pe,T),Ke=ne.acquireProgram(Pe,we),qe.set(we,Ke),K.uniforms=Pe.uniforms;const Ve=K.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ve.clippingPlanes=pe.uniform),Ys(b,Pe),K.needsLights=na(b),K.lightsStateVersion=Ee,K.needsLights&&(Ve.ambientLightColor.value=W.state.ambient,Ve.lightProbe.value=W.state.probe,Ve.directionalLights.value=W.state.directional,Ve.directionalLightShadows.value=W.state.directionalShadow,Ve.spotLights.value=W.state.spot,Ve.spotLightShadows.value=W.state.spotShadow,Ve.rectAreaLights.value=W.state.rectArea,Ve.ltc_1.value=W.state.rectAreaLTC1,Ve.ltc_2.value=W.state.rectAreaLTC2,Ve.pointLights.value=W.state.point,Ve.pointLightShadows.value=W.state.pointShadow,Ve.hemisphereLights.value=W.state.hemi,Ve.directionalShadowMap.value=W.state.directionalShadowMap,Ve.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ve.spotShadowMap.value=W.state.spotShadowMap,Ve.spotLightMatrix.value=W.state.spotLightMatrix,Ve.spotLightMap.value=W.state.spotLightMap,Ve.pointShadowMap.value=W.state.pointShadowMap,Ve.pointShadowMatrix.value=W.state.pointShadowMatrix),K.currentProgram=Ke,K.uniformsList=null,Ke}function qs(b){if(b.uniformsList===null){const G=b.currentProgram.getUniforms();b.uniformsList=Ir.seqWithValue(G.seq,b.uniforms)}return b.uniformsList}function Ys(b,G){const j=Ce.get(b);j.outputColorSpace=G.outputColorSpace,j.batching=G.batching,j.batchingColor=G.batchingColor,j.instancing=G.instancing,j.instancingColor=G.instancingColor,j.instancingMorph=G.instancingMorph,j.skinning=G.skinning,j.morphTargets=G.morphTargets,j.morphNormals=G.morphNormals,j.morphColors=G.morphColors,j.morphTargetsCount=G.morphTargetsCount,j.numClippingPlanes=G.numClippingPlanes,j.numIntersection=G.numClipIntersection,j.vertexAlphas=G.vertexAlphas,j.vertexTangents=G.vertexTangents,j.toneMapping=G.toneMapping}function ea(b,G,j,K,W){G.isScene!==!0&&(G=Ye),nt.resetTextureUnits();const he=G.fog,Ee=K.isMeshStandardMaterial?G.environment:null,Pe=R===null?T.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Li,we=(K.isMeshStandardMaterial?Rt:Ut).get(K.envMap||Ee),qe=K.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ke=!!j.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ve=!!j.morphAttributes.position,ot=!!j.morphAttributes.normal,ht=!!j.morphAttributes.color;let Ct=ui;K.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ct=T.toneMapping);const St=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,xt=St!==void 0?St.length:0,Ge=Ce.get(K),wt=u.state.lights;if(X===!0&&($===!0||b!==y)){const Bt=b===y&&K.id===x;pe.setState(K,b,Bt)}let dt=!1;K.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==wt.state.version||Ge.outputColorSpace!==Pe||W.isBatchedMesh&&Ge.batching===!1||!W.isBatchedMesh&&Ge.batching===!0||W.isBatchedMesh&&Ge.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ge.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ge.instancing===!1||!W.isInstancedMesh&&Ge.instancing===!0||W.isSkinnedMesh&&Ge.skinning===!1||!W.isSkinnedMesh&&Ge.skinning===!0||W.isInstancedMesh&&Ge.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ge.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ge.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ge.instancingMorph===!1&&W.morphTexture!==null||Ge.envMap!==we||K.fog===!0&&Ge.fog!==he||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==pe.numPlanes||Ge.numIntersection!==pe.numIntersection)||Ge.vertexAlphas!==qe||Ge.vertexTangents!==Ke||Ge.morphTargets!==Ve||Ge.morphNormals!==ot||Ge.morphColors!==ht||Ge.toneMapping!==Ct||Ge.morphTargetsCount!==xt)&&(dt=!0):(dt=!0,Ge.__version=K.version);let Kt=Ge.currentProgram;dt===!0&&(Kt=_i(K,G,W));let On=!1,ft=!1,Bn=!1;const At=Kt.getUniforms(),Zt=Ge.uniforms;if(ze.useProgram(Kt.program)&&(On=!0,ft=!0,Bn=!0),K.id!==x&&(x=K.id,ft=!0),On||y!==b){ze.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),At.setValue(B,"projectionMatrix",b.projectionMatrix),At.setValue(B,"viewMatrix",b.matrixWorldInverse);const kt=At.map.cameraPosition;kt!==void 0&&kt.setValue(B,Me.setFromMatrixPosition(b.matrixWorld)),ut.logarithmicDepthBuffer&&At.setValue(B,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&At.setValue(B,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,ft=!0,Bn=!0)}if(W.isSkinnedMesh){At.setOptional(B,W,"bindMatrix"),At.setOptional(B,W,"bindMatrixInverse");const Bt=W.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),At.setValue(B,"boneTexture",Bt.boneTexture,nt))}W.isBatchedMesh&&(At.setOptional(B,W,"batchingTexture"),At.setValue(B,"batchingTexture",W._matricesTexture,nt),At.setOptional(B,W,"batchingIdTexture"),At.setValue(B,"batchingIdTexture",W._indirectTexture,nt),At.setOptional(B,W,"batchingColorTexture"),W._colorsTexture!==null&&At.setValue(B,"batchingColorTexture",W._colorsTexture,nt));const Jt=j.morphAttributes;if((Jt.position!==void 0||Jt.normal!==void 0||Jt.color!==void 0)&&ue.update(W,j,Kt),(ft||Ge.receiveShadow!==W.receiveShadow)&&(Ge.receiveShadow=W.receiveShadow,At.setValue(B,"receiveShadow",W.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Zt.envMap.value=we,Zt.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&G.environment!==null&&(Zt.envMapIntensity.value=G.environmentIntensity),ft&&(At.setValue(B,"toneMappingExposure",T.toneMappingExposure),Ge.needsLights&&ta(Zt,Bn),he&&K.fog===!0&&oe.refreshFogUniforms(Zt,he),oe.refreshMaterialUniforms(Zt,K,q,ie,u.state.transmissionRenderTarget[b.id]),Ir.upload(B,qs(Ge),Zt,nt)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Ir.upload(B,qs(Ge),Zt,nt),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&At.setValue(B,"center",W.center),At.setValue(B,"modelViewMatrix",W.modelViewMatrix),At.setValue(B,"normalMatrix",W.normalMatrix),At.setValue(B,"modelMatrix",W.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Bt=K.uniformsGroups;for(let kt=0,Qn=Bt.length;kt<Qn;kt++){const Rn=Bt[kt];Qe.update(Rn,Kt),Qe.bind(Rn,Kt)}}return Kt}function ta(b,G){b.ambientLightColor.needsUpdate=G,b.lightProbe.needsUpdate=G,b.directionalLights.needsUpdate=G,b.directionalLightShadows.needsUpdate=G,b.pointLights.needsUpdate=G,b.pointLightShadows.needsUpdate=G,b.spotLights.needsUpdate=G,b.spotLightShadows.needsUpdate=G,b.rectAreaLights.needsUpdate=G,b.hemisphereLights.needsUpdate=G}function na(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,G,j){const K=Ce.get(b);K.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),Ce.get(b.texture).__webglTexture=G,Ce.get(b.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:j,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,G){const j=Ce.get(b);j.__webglFramebuffer=G,j.__useDefaultFramebuffer=G===void 0};const ia=B.createFramebuffer();this.setRenderTarget=function(b,G=0,j=0){R=b,N=G,U=j;let K=!0,W=null,he=!1,Ee=!1;if(b){const we=Ce.get(b);if(we.__useDefaultFramebuffer!==void 0)ze.bindFramebuffer(B.FRAMEBUFFER,null),K=!1;else if(we.__webglFramebuffer===void 0)nt.setupRenderTarget(b);else if(we.__hasExternalTextures)nt.rebindTextures(b,Ce.get(b.texture).__webglTexture,Ce.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ve=b.depthTexture;if(we.__boundDepthTexture!==Ve){if(Ve!==null&&Ce.has(Ve)&&(b.width!==Ve.image.width||b.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");nt.setupDepthRenderbuffer(b)}}const qe=b.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ee=!0);const Ke=Ce.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ke[G])?W=Ke[G][j]:W=Ke[G],he=!0):b.samples>0&&nt.useMultisampledRTT(b)===!1?W=Ce.get(b).__webglMultisampledFramebuffer:Array.isArray(Ke)?W=Ke[j]:W=Ke,P.copy(b.viewport),k.copy(b.scissor),V=b.scissorTest}else P.copy(fe).multiplyScalar(q).floor(),k.copy(_e).multiplyScalar(q).floor(),V=ve;if(j!==0&&(W=ia),ze.bindFramebuffer(B.FRAMEBUFFER,W)&&K&&ze.drawBuffers(b,W),ze.viewport(P),ze.scissor(k),ze.setScissorTest(V),he){const we=Ce.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+G,we.__webglTexture,j)}else if(Ee){const we=G;for(let qe=0;qe<b.textures.length;qe++){const Ke=Ce.get(b.textures[qe]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+qe,Ke.__webglTexture,j,we)}}else if(b!==null&&j!==0){const we=Ce.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,we.__webglTexture,j)}x=-1},this.readRenderTargetPixels=function(b,G,j,K,W,he,Ee,Pe=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Ce.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(we=we[Ee]),we){ze.bindFramebuffer(B.FRAMEBUFFER,we);try{const qe=b.textures[Pe],Ke=qe.format,Ve=qe.type;if(!ut.textureFormatReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=b.width-K&&j>=0&&j<=b.height-W&&(b.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Pe),B.readPixels(G,j,K,W,Fe.convert(Ke),Fe.convert(Ve),he))}finally{const qe=R!==null?Ce.get(R).__webglFramebuffer:null;ze.bindFramebuffer(B.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(b,G,j,K,W,he,Ee,Pe=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Ce.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(we=we[Ee]),we)if(G>=0&&G<=b.width-K&&j>=0&&j<=b.height-W){ze.bindFramebuffer(B.FRAMEBUFFER,we);const qe=b.textures[Pe],Ke=qe.format,Ve=qe.type;if(!ut.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ot=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ot),B.bufferData(B.PIXEL_PACK_BUFFER,he.byteLength,B.STREAM_READ),b.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Pe),B.readPixels(G,j,K,W,Fe.convert(Ke),Fe.convert(Ve),0);const ht=R!==null?Ce.get(R).__webglFramebuffer:null;ze.bindFramebuffer(B.FRAMEBUFFER,ht);const Ct=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Iu(B,Ct,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ot),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,he),B.deleteBuffer(ot),B.deleteSync(Ct),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,G=null,j=0){const K=Math.pow(2,-j),W=Math.floor(b.image.width*K),he=Math.floor(b.image.height*K),Ee=G!==null?G.x:0,Pe=G!==null?G.y:0;nt.setTexture2D(b,0),B.copyTexSubImage2D(B.TEXTURE_2D,j,0,0,Ee,Pe,W,he),ze.unbindTexture()};const sa=B.createFramebuffer(),ra=B.createFramebuffer();this.copyTextureToTexture=function(b,G,j=null,K=null,W=0,he=null){he===null&&(W!==0?(rs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),he=W,W=0):he=0);let Ee,Pe,we,qe,Ke,Ve,ot,ht,Ct;const St=b.isCompressedTexture?b.mipmaps[he]:b.image;if(j!==null)Ee=j.max.x-j.min.x,Pe=j.max.y-j.min.y,we=j.isBox3?j.max.z-j.min.z:1,qe=j.min.x,Ke=j.min.y,Ve=j.isBox3?j.min.z:0;else{const Jt=Math.pow(2,-W);Ee=Math.floor(St.width*Jt),Pe=Math.floor(St.height*Jt),b.isDataArrayTexture?we=St.depth:b.isData3DTexture?we=Math.floor(St.depth*Jt):we=1,qe=0,Ke=0,Ve=0}K!==null?(ot=K.x,ht=K.y,Ct=K.z):(ot=0,ht=0,Ct=0);const xt=Fe.convert(G.format),Ge=Fe.convert(G.type);let wt;G.isData3DTexture?(nt.setTexture3D(G,0),wt=B.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(nt.setTexture2DArray(G,0),wt=B.TEXTURE_2D_ARRAY):(nt.setTexture2D(G,0),wt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,G.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,G.unpackAlignment);const dt=B.getParameter(B.UNPACK_ROW_LENGTH),Kt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),On=B.getParameter(B.UNPACK_SKIP_PIXELS),ft=B.getParameter(B.UNPACK_SKIP_ROWS),Bn=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,St.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,St.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,qe),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ke),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ve);const At=b.isDataArrayTexture||b.isData3DTexture,Zt=G.isDataArrayTexture||G.isData3DTexture;if(b.isDepthTexture){const Jt=Ce.get(b),Bt=Ce.get(G),kt=Ce.get(Jt.__renderTarget),Qn=Ce.get(Bt.__renderTarget);ze.bindFramebuffer(B.READ_FRAMEBUFFER,kt.__webglFramebuffer),ze.bindFramebuffer(B.DRAW_FRAMEBUFFER,Qn.__webglFramebuffer);for(let Rn=0;Rn<we;Rn++)At&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ce.get(b).__webglTexture,W,Ve+Rn),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ce.get(G).__webglTexture,he,Ct+Rn)),B.blitFramebuffer(qe,Ke,Ee,Pe,ot,ht,Ee,Pe,B.DEPTH_BUFFER_BIT,B.NEAREST);ze.bindFramebuffer(B.READ_FRAMEBUFFER,null),ze.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(W!==0||b.isRenderTargetTexture||Ce.has(b)){const Jt=Ce.get(b),Bt=Ce.get(G);ze.bindFramebuffer(B.READ_FRAMEBUFFER,sa),ze.bindFramebuffer(B.DRAW_FRAMEBUFFER,ra);for(let kt=0;kt<we;kt++)At?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Jt.__webglTexture,W,Ve+kt):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Jt.__webglTexture,W),Zt?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Bt.__webglTexture,he,Ct+kt):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Bt.__webglTexture,he),W!==0?B.blitFramebuffer(qe,Ke,Ee,Pe,ot,ht,Ee,Pe,B.COLOR_BUFFER_BIT,B.NEAREST):Zt?B.copyTexSubImage3D(wt,he,ot,ht,Ct+kt,qe,Ke,Ee,Pe):B.copyTexSubImage2D(wt,he,ot,ht,qe,Ke,Ee,Pe);ze.bindFramebuffer(B.READ_FRAMEBUFFER,null),ze.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Zt?b.isDataTexture||b.isData3DTexture?B.texSubImage3D(wt,he,ot,ht,Ct,Ee,Pe,we,xt,Ge,St.data):G.isCompressedArrayTexture?B.compressedTexSubImage3D(wt,he,ot,ht,Ct,Ee,Pe,we,xt,St.data):B.texSubImage3D(wt,he,ot,ht,Ct,Ee,Pe,we,xt,Ge,St):b.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,he,ot,ht,Ee,Pe,xt,Ge,St.data):b.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,he,ot,ht,St.width,St.height,xt,St.data):B.texSubImage2D(B.TEXTURE_2D,he,ot,ht,Ee,Pe,xt,Ge,St);B.pixelStorei(B.UNPACK_ROW_LENGTH,dt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Kt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,On),B.pixelStorei(B.UNPACK_SKIP_ROWS,ft),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Bn),he===0&&G.generateMipmaps&&B.generateMipmap(wt),ze.unbindTexture()},this.copyTextureToTexture3D=function(b,G,j=null,K=null,W=0){return rs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,G,j,K,W)},this.initRenderTarget=function(b){Ce.get(b).__webglFramebuffer===void 0&&nt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?nt.setTextureCube(b,0):b.isData3DTexture?nt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?nt.setTexture2DArray(b,0):nt.setTexture2D(b,0),ze.unbindTexture()},this.resetState=function(){N=0,U=0,R=null,ze.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}}const _c={type:"change"},Zo={type:"start"},fh={type:"end"},yr=new ks,xc=new li,M_=Math.cos(70*Dn.DEG2RAD),zt=new O,nn=2*Math.PI,bt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Va=1e-6;class y_ extends Ud{constructor(e,t=null){super(e,t),this.state=bt.NONE,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:is.ROTATE,MIDDLE:is.DOLLY,RIGHT:is.PAN},this.touches={ONE:es.ROTATE,TWO:es.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new dn,this._lastTargetPosition=new O,this._quat=new dn().setFromUnitVectors(e.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Xl,this._sphericalDelta=new Xl,this._scale=1,this._panOffset=new O,this._rotateStart=new Je,this._rotateEnd=new Je,this._rotateDelta=new Je,this._panStart=new Je,this._panEnd=new Je,this._panDelta=new Je,this._dollyStart=new Je,this._dollyEnd=new Je,this._dollyDelta=new Je,this._dollyDirection=new O,this._mouse=new Je,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=E_.bind(this),this._onPointerDown=S_.bind(this),this._onPointerUp=b_.bind(this),this._onContextMenu=L_.bind(this),this._onMouseWheel=A_.bind(this),this._onKeyDown=R_.bind(this),this._onTouchStart=C_.bind(this),this._onTouchMove=P_.bind(this),this._onMouseDown=T_.bind(this),this._onMouseMove=w_.bind(this),this._interceptControlDown=D_.bind(this),this._interceptControlUp=I_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(_c),this.update(),this.state=bt.NONE}update(e=null){const t=this.object.position;zt.copy(t).sub(this.target),zt.applyQuaternion(this._quat),this._spherical.setFromVector3(zt),this.autoRotate&&this.state===bt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=nn:n>Math.PI&&(n-=nn),s<-Math.PI?s+=nn:s>Math.PI&&(s-=nn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(zt.setFromSpherical(this._spherical),zt.applyQuaternion(this._quatInverse),t.copy(this.target).add(zt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=zt.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const o=new O(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new O(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=zt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(yr.origin.copy(this.object.position),yr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(yr.direction))<M_?this.object.lookAt(this.target):(xc.setFromNormalAndCoplanarPoint(this.object.up,this.target),yr.intersectPlane(xc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Va||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Va||this._lastTargetPosition.distanceToSquared(this.target)>Va?(this.dispatchEvent(_c),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?nn/60*this.autoRotateSpeed*e:nn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){zt.setFromMatrixColumn(t,0),zt.multiplyScalar(-e),this._panOffset.add(zt)}_panUp(e,t){this.screenSpacePanning===!0?zt.setFromMatrixColumn(t,1):(zt.setFromMatrixColumn(t,0),zt.crossVectors(this.object.up,zt)),zt.multiplyScalar(e),this._panOffset.add(zt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;zt.copy(s).sub(this.target);let r=zt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/t.clientHeight),this._rotateUp(nn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/t.clientHeight),this._rotateUp(nn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Je,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function S_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function E_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function b_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(fh),this.state=bt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function T_(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case is.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=bt.DOLLY;break;case is.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=bt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=bt.ROTATE}break;case is.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=bt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=bt.PAN}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(Zo)}function w_(i){switch(this.state){case bt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case bt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case bt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function A_(i){this.enabled===!1||this.enableZoom===!1||this.state!==bt.NONE||(i.preventDefault(),this.dispatchEvent(Zo),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(fh))}function R_(i){this.enabled!==!1&&this._handleKeyDown(i)}function C_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case es.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=bt.TOUCH_ROTATE;break;case es.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=bt.TOUCH_PAN;break;default:this.state=bt.NONE}break;case 2:switch(this.touches.TWO){case es.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=bt.TOUCH_DOLLY_PAN;break;case es.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=bt.TOUCH_DOLLY_ROTATE;break;default:this.state=bt.NONE}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(Zo)}function P_(i){switch(this._trackPointer(i),this.state){case bt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case bt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case bt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case bt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=bt.NONE}}function L_(i){this.enabled!==!1&&i.preventDefault()}function D_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function I_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class N_ extends fi{constructor(e){super(e)}load(e,t,n,s){const r=this,a=new qo(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(o))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},n,s)}parse(e){function t(l){const h=new DataView(l),d=32/8*3+32/8*3*3+16/8,f=h.getUint32(80,!0);if(80+32/8+f*d===h.byteLength)return!0;const M=[115,111,108,105,100];for(let v=0;v<5;v++)if(n(M,h,v))return!1;return!0}function n(l,h,d){for(let f=0,p=l.length;f<p;f++)if(l[f]!==h.getUint8(d+f))return!1;return!0}function s(l){const h=new DataView(l),d=h.getUint32(80,!0);let f,p,M,v=!1,m,u,L,C,T;for(let P=0;P<70;P++)h.getUint32(P,!1)==1129270351&&h.getUint8(P+4)==82&&h.getUint8(P+5)==61&&(v=!0,m=new Float32Array(d*3*3),u=h.getUint8(P+6)/255,L=h.getUint8(P+7)/255,C=h.getUint8(P+8)/255,T=h.getUint8(P+9)/255);const D=84,N=50,U=new fn,R=new Float32Array(d*3*3),x=new Float32Array(d*3*3),y=new tt;for(let P=0;P<d;P++){const k=D+P*N,V=h.getFloat32(k,!0),H=h.getFloat32(k+4,!0),Z=h.getFloat32(k+8,!0);if(v){const F=h.getUint16(k+48,!0);(F&32768)===0?(f=(F&31)/31,p=(F>>5&31)/31,M=(F>>10&31)/31):(f=u,p=L,M=C)}for(let F=1;F<=3;F++){const ie=k+F*12,q=P*3*3+(F-1)*3;R[q]=h.getFloat32(ie,!0),R[q+1]=h.getFloat32(ie+4,!0),R[q+2]=h.getFloat32(ie+8,!0),x[q]=V,x[q+1]=H,x[q+2]=Z,v&&(y.setRGB(f,p,M,It),m[q]=y.r,m[q+1]=y.g,m[q+2]=y.b)}}return U.setAttribute("position",new un(R,3)),U.setAttribute("normal",new un(x,3)),v&&(U.setAttribute("color",new un(m,3)),U.hasColors=!0,U.alpha=T),U}function r(l){const h=new fn,d=/solid([\s\S]*?)endsolid/g,f=/facet([\s\S]*?)endfacet/g,p=/solid\s(.+)/;let M=0;const v=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,m=new RegExp("vertex"+v+v+v,"g"),u=new RegExp("normal"+v+v+v,"g"),L=[],C=[],T=[],D=new O;let N,U=0,R=0,x=0;for(;(N=d.exec(l))!==null;){R=x;const y=N[0],P=(N=p.exec(y))!==null?N[1]:"";for(T.push(P);(N=f.exec(y))!==null;){let H=0,Z=0;const F=N[0];for(;(N=u.exec(F))!==null;)D.x=parseFloat(N[1]),D.y=parseFloat(N[2]),D.z=parseFloat(N[3]),Z++;for(;(N=m.exec(F))!==null;)L.push(parseFloat(N[1]),parseFloat(N[2]),parseFloat(N[3])),C.push(D.x,D.y,D.z),H++,x++;Z!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+M),H!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+M),M++}const k=R,V=x-R;h.userData.groupNames=T,h.addGroup(k,V,U),U++}return h.setAttribute("position",new Pt(L,3)),h.setAttribute("normal",new Pt(C,3)),h}function a(l){return typeof l!="string"?new TextDecoder().decode(l):l}function o(l){if(typeof l=="string"){const h=new Uint8Array(l.length);for(let d=0;d<l.length;d++)h[d]=l.charCodeAt(d)&255;return h.buffer||h}else return l}const c=o(e);return t(c)?s(c):r(a(e))}}class vc extends nh{constructor(e){super(e)}parse(e){function t(F){switch(F.image_type){case f:case v:if(F.colormap_length>256||F.colormap_size!==24||F.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case p:case M:case m:case u:if(F.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case d:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+F.image_type)}if(F.width<=0||F.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(F.pixel_size!==8&&F.pixel_size!==16&&F.pixel_size!==24&&F.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+F.pixel_size)}function n(F,ie,q,re,ae){let fe,_e;const ve=q.pixel_size>>3,xe=q.width*q.height*ve;if(ie&&(_e=ae.subarray(re,re+=q.colormap_length*(q.colormap_size>>3))),F){fe=new Uint8Array(xe);let X,$,Q,Me=0;const De=new Uint8Array(ve);for(;Me<xe;)if(X=ae[re++],$=(X&127)+1,X&128){for(Q=0;Q<ve;++Q)De[Q]=ae[re++];for(Q=0;Q<$;++Q)fe.set(De,Me+Q*ve);Me+=ve*$}else{for($*=ve,Q=0;Q<$;++Q)fe[Me+Q]=ae[re++];Me+=$}}else fe=ae.subarray(re,re+=ie?q.width*q.height:xe);return{pixel_data:fe,palettes:_e}}function s(F,ie,q,re,ae,fe,_e,ve,xe){const X=xe;let $,Q=0,Me,De;const Ye=y.width;for(De=ie;De!==re;De+=q)for(Me=ae;Me!==_e;Me+=fe,Q++)$=ve[Q],F[(Me+Ye*De)*4+3]=255,F[(Me+Ye*De)*4+2]=X[$*3+0],F[(Me+Ye*De)*4+1]=X[$*3+1],F[(Me+Ye*De)*4+0]=X[$*3+2];return F}function r(F,ie,q,re,ae,fe,_e,ve){let xe,X=0,$,Q;const Me=y.width;for(Q=ie;Q!==re;Q+=q)for($=ae;$!==_e;$+=fe,X+=2)xe=ve[X+0]+(ve[X+1]<<8),F[($+Me*Q)*4+0]=(xe&31744)>>7,F[($+Me*Q)*4+1]=(xe&992)>>2,F[($+Me*Q)*4+2]=(xe&31)<<3,F[($+Me*Q)*4+3]=xe&32768?0:255;return F}function a(F,ie,q,re,ae,fe,_e,ve){let xe=0,X,$;const Q=y.width;for($=ie;$!==re;$+=q)for(X=ae;X!==_e;X+=fe,xe+=3)F[(X+Q*$)*4+3]=255,F[(X+Q*$)*4+2]=ve[xe+0],F[(X+Q*$)*4+1]=ve[xe+1],F[(X+Q*$)*4+0]=ve[xe+2];return F}function o(F,ie,q,re,ae,fe,_e,ve){let xe=0,X,$;const Q=y.width;for($=ie;$!==re;$+=q)for(X=ae;X!==_e;X+=fe,xe+=4)F[(X+Q*$)*4+2]=ve[xe+0],F[(X+Q*$)*4+1]=ve[xe+1],F[(X+Q*$)*4+0]=ve[xe+2],F[(X+Q*$)*4+3]=ve[xe+3];return F}function c(F,ie,q,re,ae,fe,_e,ve){let xe,X=0,$,Q;const Me=y.width;for(Q=ie;Q!==re;Q+=q)for($=ae;$!==_e;$+=fe,X++)xe=ve[X],F[($+Me*Q)*4+0]=xe,F[($+Me*Q)*4+1]=xe,F[($+Me*Q)*4+2]=xe,F[($+Me*Q)*4+3]=255;return F}function l(F,ie,q,re,ae,fe,_e,ve){let xe=0,X,$;const Q=y.width;for($=ie;$!==re;$+=q)for(X=ae;X!==_e;X+=fe,xe+=2)F[(X+Q*$)*4+0]=ve[xe+0],F[(X+Q*$)*4+1]=ve[xe+0],F[(X+Q*$)*4+2]=ve[xe+0],F[(X+Q*$)*4+3]=ve[xe+1];return F}function h(F,ie,q,re,ae){let fe,_e,ve,xe,X,$;switch((y.flags&L)>>C){default:case N:fe=0,ve=1,X=ie,_e=0,xe=1,$=q;break;case T:fe=0,ve=1,X=ie,_e=q-1,xe=-1,$=-1;break;case U:fe=ie-1,ve=-1,X=-1,_e=0,xe=1,$=q;break;case D:fe=ie-1,ve=-1,X=-1,_e=q-1,xe=-1,$=-1;break}if(V)switch(y.pixel_size){case 8:c(F,_e,xe,$,fe,ve,X,re);break;case 16:l(F,_e,xe,$,fe,ve,X,re);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(y.pixel_size){case 8:s(F,_e,xe,$,fe,ve,X,re,ae);break;case 16:r(F,_e,xe,$,fe,ve,X,re);break;case 24:a(F,_e,xe,$,fe,ve,X,re);break;case 32:o(F,_e,xe,$,fe,ve,X,re);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return F}const d=0,f=1,p=2,M=3,v=9,m=10,u=11,L=48,C=4,T=0,D=1,N=2,U=3;if(e.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let R=0;const x=new Uint8Array(e),y={id_length:x[R++],colormap_type:x[R++],image_type:x[R++],colormap_index:x[R++]|x[R++]<<8,colormap_length:x[R++]|x[R++]<<8,colormap_size:x[R++],origin:[x[R++]|x[R++]<<8,x[R++]|x[R++]<<8],width:x[R++]|x[R++]<<8,height:x[R++]|x[R++]<<8,pixel_size:x[R++],flags:x[R++]};if(t(y),y.id_length+R>e.length)throw new Error("THREE.TGALoader: No data.");R+=y.id_length;let P=!1,k=!1,V=!1;switch(y.image_type){case v:P=!0,k=!0;break;case f:k=!0;break;case m:P=!0;break;case p:break;case u:P=!0,V=!0;break;case M:V=!0;break}const H=new Uint8Array(y.width*y.height*4),Z=n(P,k,y,R,x);return h(H,y.width,y.height,Z.pixel_data,Z.palettes),{data:H,width:y.width,height:y.height,flipY:!0,generateMipmaps:!0,minFilter:jn}}}class ph extends fi{load(e,t,n,s){const r=this,a=r.path===""?ah.extractUrlBase(e):r.path,o=new qo(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(c){try{t(r.parse(c,a))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},n,s)}parse(e,t){function n(_,g){const w=[],E=_.childNodes;for(let A=0,J=E.length;A<J;A++){const te=E[A];te.nodeName===g&&w.push(te)}return w}function s(_){if(_.length===0)return[];const g=_.trim().split(/\s+/),w=new Array(g.length);for(let E=0,A=g.length;E<A;E++)w[E]=g[E];return w}function r(_){if(_.length===0)return[];const g=_.trim().split(/\s+/),w=new Array(g.length);for(let E=0,A=g.length;E<A;E++)w[E]=parseFloat(g[E]);return w}function a(_){if(_.length===0)return[];const g=_.trim().split(/\s+/),w=new Array(g.length);for(let E=0,A=g.length;E<A;E++)w[E]=parseInt(g[E]);return w}function o(_){return _.substring(1)}function c(){return"three_default_"+Sh++}function l(_){return Object.keys(_).length===0}function h(_){return{unit:d(n(_,"unit")[0]),upAxis:f(n(_,"up_axis")[0])}}function d(_){return _!==void 0&&_.hasAttribute("meter")===!0?parseFloat(_.getAttribute("meter")):1}function f(_){return _!==void 0?_.textContent:"Y_UP"}function p(_,g,w,E){const A=n(_,g)[0];if(A!==void 0){const J=n(A,w);for(let te=0;te<J.length;te++)E(J[te])}}function M(_,g){for(const w in _){const E=_[w];E.build=g(_[w])}}function v(_,g){return _.build!==void 0||(_.build=g(_)),_.build}function m(_){const g={sources:{},samplers:{},channels:{}};let w=!1;for(let E=0,A=_.childNodes.length;E<A;E++){const J=_.childNodes[E];if(J.nodeType!==1)continue;let te;switch(J.nodeName){case"source":te=J.getAttribute("id"),g.sources[te]=me(J);break;case"sampler":te=J.getAttribute("id"),g.samplers[te]=u(J);break;case"channel":te=J.getAttribute("target"),g.channels[te]=L(J);break;case"animation":m(J),w=!0;break;default:console.log(J)}}w===!1&&(Ze.animations[_.getAttribute("id")||Dn.generateUUID()]=g)}function u(_){const g={inputs:{}};for(let w=0,E=_.childNodes.length;w<E;w++){const A=_.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"input":const J=o(A.getAttribute("source")),te=A.getAttribute("semantic");g.inputs[te]=J;break}}return g}function L(_){const g={};let E=_.getAttribute("target").split("/");const A=E.shift();let J=E.shift();const te=J.indexOf("(")!==-1,Ae=J.indexOf(".")!==-1;if(Ae)E=J.split("."),J=E.shift(),g.member=E.shift();else if(te){const ge=J.split("(");J=ge.shift();for(let Te=0;Te<ge.length;Te++)ge[Te]=parseInt(ge[Te].replace(/\)/,""));g.indices=ge}return g.id=A,g.sid=J,g.arraySyntax=te,g.memberSyntax=Ae,g.sampler=o(_.getAttribute("source")),g}function C(_){const g=[],w=_.channels,E=_.samplers,A=_.sources;for(const J in w)if(w.hasOwnProperty(J)){const te=w[J],Ae=E[te.sampler],ge=Ae.inputs.INPUT,Te=Ae.inputs.OUTPUT,ke=A[ge],le=A[Te],Oe=D(te,ke,le);y(Oe,g)}return g}function T(_){return v(Ze.animations[_],C)}function D(_,g,w){const E=Ze.nodes[_.id],A=ht(E.id),J=E.transforms[_.sid],te=E.matrix.clone().transpose();let Ae,ge,Te,ke,le,Oe;const Le={};switch(J){case"matrix":for(Te=0,ke=g.array.length;Te<ke;Te++)if(Ae=g.array[Te],ge=Te*w.stride,Le[Ae]===void 0&&(Le[Ae]={}),_.arraySyntax===!0){const Dt=w.array[ge],vt=_.indices[0]+4*_.indices[1];Le[Ae][vt]=Dt}else for(le=0,Oe=w.stride;le<Oe;le++)Le[Ae][le]=w.array[ge+le];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',J);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',J);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',J);break}const Xe=N(Le,te);return{name:A.uuid,keyframes:Xe}}function N(_,g){const w=[];for(const A in _)w.push({time:parseFloat(A),value:_[A]});w.sort(E);for(let A=0;A<16;A++)P(w,A,g.elements[A]);return w;function E(A,J){return A.time-J.time}}const U=new O,R=new O,x=new dn;function y(_,g){const w=_.keyframes,E=_.name,A=[],J=[],te=[],Ae=[];for(let ge=0,Te=w.length;ge<Te;ge++){const ke=w[ge],le=ke.time,Oe=ke.value;j.fromArray(Oe).transpose(),j.decompose(U,x,R),A.push(le),J.push(U.x,U.y,U.z),te.push(x.x,x.y,x.z,x.w),Ae.push(R.x,R.y,R.z)}return J.length>0&&g.push(new ds(E+".position",A,J)),te.length>0&&g.push(new Vs(E+".quaternion",A,te)),Ae.length>0&&g.push(new ds(E+".scale",A,Ae)),g}function P(_,g,w){let E,A=!0,J,te;for(J=0,te=_.length;J<te;J++)E=_[J],E.value[g]===void 0?E.value[g]=null:A=!1;if(A===!0)for(J=0,te=_.length;J<te;J++)E=_[J],E.value[g]=w;else k(_,g)}function k(_,g){let w,E;for(let A=0,J=_.length;A<J;A++){const te=_[A];if(te.value[g]===null){if(w=V(_,A,g),E=H(_,A,g),w===null){te.value[g]=E.value[g];continue}if(E===null){te.value[g]=w.value[g];continue}Z(te,w,E,g)}}}function V(_,g,w){for(;g>=0;){const E=_[g];if(E.value[w]!==null)return E;g--}return null}function H(_,g,w){for(;g<_.length;){const E=_[g];if(E.value[w]!==null)return E;g++}return null}function Z(_,g,w,E){if(w.time-g.time===0){_.value[E]=g.value[E];return}_.value[E]=(_.time-g.time)*(w.value[E]-g.value[E])/(w.time-g.time)+g.value[E]}function F(_){const g={name:_.getAttribute("id")||"default",start:parseFloat(_.getAttribute("start")||0),end:parseFloat(_.getAttribute("end")||0),animations:[]};for(let w=0,E=_.childNodes.length;w<E;w++){const A=_.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"instance_animation":g.animations.push(o(A.getAttribute("url")));break}}Ze.clips[_.getAttribute("id")]=g}function ie(_){const g=[],w=_.name,E=_.end-_.start||-1,A=_.animations;for(let J=0,te=A.length;J<te;J++){const Ae=T(A[J]);for(let ge=0,Te=Ae.length;ge<Te;ge++)g.push(Ae[ge])}return new kl(w,E,g)}function q(_){return v(Ze.clips[_],ie)}function re(_){const g={};for(let w=0,E=_.childNodes.length;w<E;w++){const A=_.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"skin":g.id=o(A.getAttribute("source")),g.skin=ae(A);break;case"morph":g.id=o(A.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}Ze.controllers[_.getAttribute("id")]=g}function ae(_){const g={sources:{}};for(let w=0,E=_.childNodes.length;w<E;w++){const A=_.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"bind_shape_matrix":g.bindShapeMatrix=r(A.textContent);break;case"source":const J=A.getAttribute("id");g.sources[J]=me(A);break;case"joints":g.joints=fe(A);break;case"vertex_weights":g.vertexWeights=_e(A);break}}return g}function fe(_){const g={inputs:{}};for(let w=0,E=_.childNodes.length;w<E;w++){const A=_.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"input":const J=A.getAttribute("semantic"),te=o(A.getAttribute("source"));g.inputs[J]=te;break}}return g}function _e(_){const g={inputs:{}};for(let w=0,E=_.childNodes.length;w<E;w++){const A=_.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"input":const J=A.getAttribute("semantic"),te=o(A.getAttribute("source")),Ae=parseInt(A.getAttribute("offset"));g.inputs[J]={id:te,offset:Ae};break;case"vcount":g.vcount=a(A.textContent);break;case"v":g.v=a(A.textContent);break}}return g}function ve(_){const g={id:_.id},w=Ze.geometries[g.id];return _.skin!==void 0&&(g.skin=xe(_.skin),w.sources.skinIndices=g.skin.indices,w.sources.skinWeights=g.skin.weights),g}function xe(_){const w={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},E=_.sources,A=_.vertexWeights,J=A.vcount,te=A.v,Ae=A.inputs.JOINT.offset,ge=A.inputs.WEIGHT.offset,Te=_.sources[_.joints.inputs.JOINT],ke=_.sources[_.joints.inputs.INV_BIND_MATRIX],le=E[A.inputs.WEIGHT.id].array;let Oe=0,Le,Xe,He;for(Le=0,He=J.length;Le<He;Le++){const vt=J[Le],pt=[];for(Xe=0;Xe<vt;Xe++){const mt=te[Oe+Ae],kn=te[Oe+ge],tn=le[kn];pt.push({index:mt,weight:tn}),Oe+=2}for(pt.sort(Dt),Xe=0;Xe<4;Xe++){const mt=pt[Xe];mt!==void 0?(w.indices.array.push(mt.index),w.weights.array.push(mt.weight)):(w.indices.array.push(0),w.weights.array.push(0))}}for(_.bindShapeMatrix?w.bindMatrix=new et().fromArray(_.bindShapeMatrix).transpose():w.bindMatrix=new et().identity(),Le=0,He=Te.array.length;Le<He;Le++){const vt=Te.array[Le],pt=new et().fromArray(ke.array,Le*ke.stride).transpose();w.joints.push({name:vt,boneInverse:pt})}return w;function Dt(vt,pt){return pt.weight-vt.weight}}function X(_){return v(Ze.controllers[_],ve)}function $(_){const g={init_from:n(_,"init_from")[0].textContent};Ze.images[_.getAttribute("id")]=g}function Q(_){return _.build!==void 0?_.build:_.init_from}function Me(_){const g=Ze.images[_];return g!==void 0?v(g,Q):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",_),null)}function De(_){const g={};for(let w=0,E=_.childNodes.length;w<E;w++){const A=_.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"profile_COMMON":g.profile=Ye(A);break}}Ze.effects[_.getAttribute("id")]=g}function Ye(_){const g={surfaces:{},samplers:{}};for(let w=0,E=_.childNodes.length;w<E;w++){const A=_.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"newparam":Lt(A,g);break;case"technique":g.technique=Mt(A);break;case"extra":g.extra=nt(A);break}}return g}function Lt(_,g){const w=_.getAttribute("sid");for(let E=0,A=_.childNodes.length;E<A;E++){const J=_.childNodes[E];if(J.nodeType===1)switch(J.nodeName){case"surface":g.surfaces[w]=ct(J);break;case"sampler2D":g.samplers[w]=B(J);break}}}function ct(_){const g={};for(let w=0,E=_.childNodes.length;w<E;w++){const A=_.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"init_from":g.init_from=A.textContent;break}}return g}function B(_){const g={};for(let w=0,E=_.childNodes.length;w<E;w++){const A=_.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"source":g.source=A.textContent;break}}return g}function Mt(_){const g={};for(let w=0,E=_.childNodes.length;w<E;w++){const A=_.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"constant":case"lambert":case"blinn":case"phong":g.type=A.nodeName,g.parameters=We(A);break;case"extra":g.extra=nt(A);break}}return g}function We(_){const g={};for(let w=0,E=_.childNodes.length;w<E;w++){const A=_.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":g[A.nodeName]=ut(A);break;case"transparent":g[A.nodeName]={opaque:A.hasAttribute("opaque")?A.getAttribute("opaque"):"A_ONE",data:ut(A)};break}}return g}function ut(_){const g={};for(let w=0,E=_.childNodes.length;w<E;w++){const A=_.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"color":g[A.nodeName]=r(A.textContent);break;case"float":g[A.nodeName]=parseFloat(A.textContent);break;case"texture":g[A.nodeName]={id:A.getAttribute("texture"),extra:ze(A)};break}}return g}function ze(_){const g={technique:{}};for(let w=0,E=_.childNodes.length;w<E;w++){const A=_.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"extra":Tt(A,g);break}}return g}function Tt(_,g){for(let w=0,E=_.childNodes.length;w<E;w++){const A=_.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"technique":Ce(A,g);break}}}function Ce(_,g){for(let w=0,E=_.childNodes.length;w<E;w++){const A=_.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":g.technique[A.nodeName]=parseFloat(A.textContent);break;case"wrapU":case"wrapV":A.textContent.toUpperCase()==="TRUE"?g.technique[A.nodeName]=1:A.textContent.toUpperCase()==="FALSE"?g.technique[A.nodeName]=0:g.technique[A.nodeName]=parseInt(A.textContent);break;case"bump":g[A.nodeName]=Rt(A);break}}}function nt(_){const g={};for(let w=0,E=_.childNodes.length;w<E;w++){const A=_.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"technique":g.technique=Ut(A);break}}return g}function Ut(_){const g={};for(let w=0,E=_.childNodes.length;w<E;w++){const A=_.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"double_sided":g[A.nodeName]=parseInt(A.textContent);break;case"bump":g[A.nodeName]=Rt(A);break}}return g}function Rt(_){const g={};for(let w=0,E=_.childNodes.length;w<E;w++){const A=_.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"texture":g[A.nodeName]={id:A.getAttribute("texture"),texcoord:A.getAttribute("texcoord"),extra:ze(A)};break}}return g}function I(_){return _}function S(_){return v(Ze.effects[_],I)}function Y(_){const g={name:_.getAttribute("name")};for(let w=0,E=_.childNodes.length;w<E;w++){const A=_.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"instance_effect":g.url=o(A.getAttribute("url"));break}}Ze.materials[_.getAttribute("id")]=g}function ne(_){let g,w=_.slice((_.lastIndexOf(".")-1>>>0)+2);switch(w=w.toLowerCase(),w){case"tga":g=Bt;break;default:g=Jt}return g}function oe(_){const g=S(_.url),w=g.profile.technique;let E;switch(w.type){case"phong":case"blinn":E=new Ps;break;case"lambert":E=new pd;break;default:E=new Bs;break}E.name=_.name||"";function A(ge,Te=null){const ke=g.profile.samplers[ge.id];let le=null;if(ke!==void 0){const Oe=g.profile.surfaces[ke.source];le=Me(Oe.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),le=Me(ge.id);if(le!==null){const Oe=ne(le);if(Oe!==void 0){const Le=Oe.load(le),Xe=ge.extra;if(Xe!==void 0&&Xe.technique!==void 0&&l(Xe.technique)===!1){const He=Xe.technique;Le.wrapS=He.wrapU?Ci:Tn,Le.wrapT=He.wrapV?Ci:Tn,Le.offset.set(He.offsetU||0,He.offsetV||0),Le.repeat.set(He.repeatU||1,He.repeatV||1)}else Le.wrapS=Ci,Le.wrapT=Ci;return Te!==null&&(Le.colorSpace=Te),Le}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",le),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",ge.id),null}const J=w.parameters;for(const ge in J){const Te=J[ge];switch(ge){case"diffuse":Te.color&&E.color.fromArray(Te.color),Te.texture&&(E.map=A(Te.texture,It));break;case"specular":Te.color&&E.specular&&E.specular.fromArray(Te.color),Te.texture&&(E.specularMap=A(Te.texture));break;case"bump":Te.texture&&(E.normalMap=A(Te.texture));break;case"ambient":Te.texture&&(E.lightMap=A(Te.texture,It));break;case"shininess":Te.float&&E.shininess&&(E.shininess=Te.float);break;case"emission":Te.color&&E.emissive&&E.emissive.fromArray(Te.color),Te.texture&&(E.emissiveMap=A(Te.texture,It));break}}lt.colorSpaceToWorking(E.color,It),E.specular&&lt.colorSpaceToWorking(E.specular,It),E.emissive&&lt.colorSpaceToWorking(E.emissive,It);let te=J.transparent,Ae=J.transparency;if(Ae===void 0&&te&&(Ae={float:1}),te===void 0&&Ae&&(te={opaque:"A_ONE",data:{color:[1,1,1,1]}}),te&&Ae)if(te.data.texture)E.transparent=!0;else{const ge=te.data.color;switch(te.opaque){case"A_ONE":E.opacity=ge[3]*Ae.float;break;case"RGB_ZERO":E.opacity=1-ge[0]*Ae.float;break;case"A_ZERO":E.opacity=1-ge[3]*Ae.float;break;case"RGB_ONE":E.opacity=ge[0]*Ae.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',te.opaque)}E.opacity<1&&(E.transparent=!0)}if(w.extra!==void 0&&w.extra.technique!==void 0){const ge=w.extra.technique;for(const Te in ge){const ke=ge[Te];switch(Te){case"double_sided":E.side=ke===1?Ln:Jn;break;case"bump":E.normalMap=A(ke.texture),E.normalScale=new Je(1,1);break}}}return E}function ee(_){return v(Ze.materials[_],oe)}function Be(_){const g={name:_.getAttribute("name")};for(let w=0,E=_.childNodes.length;w<E;w++){const A=_.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"optics":g.optics=pe(A);break}}Ze.cameras[_.getAttribute("id")]=g}function pe(_){for(let g=0;g<_.childNodes.length;g++){const w=_.childNodes[g];switch(w.nodeName){case"technique_common":return Ne(w)}}return{}}function Ne(_){const g={};for(let w=0;w<_.childNodes.length;w++){const E=_.childNodes[w];switch(E.nodeName){case"perspective":case"orthographic":g.technique=E.nodeName,g.parameters=Ue(E);break}}return g}function Ue(_){const g={};for(let w=0;w<_.childNodes.length;w++){const E=_.childNodes[w];switch(E.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":g[E.nodeName]=parseFloat(E.textContent);break}}return g}function ue(_){let g;switch(_.optics.technique){case"perspective":g=new qt(_.optics.parameters.yfov,_.optics.parameters.aspect_ratio,_.optics.parameters.znear,_.optics.parameters.zfar);break;case"orthographic":let w=_.optics.parameters.ymag,E=_.optics.parameters.xmag;const A=_.optics.parameters.aspect_ratio;E=E===void 0?w*A:E,w=w===void 0?E/A:w,E*=.5,w*=.5,g=new jo(-E,E,w,-w,_.optics.parameters.znear,_.optics.parameters.zfar);break;default:g=new qt;break}return g.name=_.name||"",g}function be(_){const g=Ze.cameras[_];return g!==void 0?v(g,ue):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",_),null)}function je(_){let g={};for(let w=0,E=_.childNodes.length;w<E;w++){const A=_.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"technique_common":g=Fe(A);break}}Ze.lights[_.getAttribute("id")]=g}function Fe(_){const g={};for(let w=0,E=_.childNodes.length;w<E;w++){const A=_.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"directional":case"point":case"spot":case"ambient":g.technique=A.nodeName,g.parameters=ye(A)}}return g}function ye(_){const g={};for(let w=0,E=_.childNodes.length;w<E;w++){const A=_.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"color":const J=r(A.textContent);g.color=new tt().fromArray(J),lt.colorSpaceToWorking(g.color,It);break;case"falloff_angle":g.falloffAngle=parseFloat(A.textContent);break;case"quadratic_attenuation":const te=parseFloat(A.textContent);g.distance=te?Math.sqrt(1/te):0;break}}return g}function Qe(_){let g;switch(_.technique){case"directional":g=new sh;break;case"point":g=new Ld;break;case"spot":g=new Cd;break;case"ambient":g=new rh;break}return _.parameters.color&&g.color.copy(_.parameters.color),_.parameters.distance&&(g.distance=_.parameters.distance),g}function z(_){const g=Ze.lights[_];return g!==void 0?v(g,Qe):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",_),null)}function de(_){const g={name:_.getAttribute("name"),sources:{},vertices:{},primitives:[]},w=n(_,"mesh")[0];if(w!==void 0){for(let E=0;E<w.childNodes.length;E++){const A=w.childNodes[E];if(A.nodeType!==1)continue;const J=A.getAttribute("id");switch(A.nodeName){case"source":g.sources[J]=me(A);break;case"vertices":g.vertices=Re(A);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",A.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":g.primitives.push(ce(A));break;default:console.log(A)}}Ze.geometries[_.getAttribute("id")]=g}}function me(_){const g={array:[],stride:3};for(let w=0;w<_.childNodes.length;w++){const E=_.childNodes[w];if(E.nodeType===1)switch(E.nodeName){case"float_array":g.array=r(E.textContent);break;case"Name_array":g.array=s(E.textContent);break;case"technique_common":const A=n(E,"accessor")[0];A!==void 0&&(g.stride=parseInt(A.getAttribute("stride")));break}}return g}function Re(_){const g={};for(let w=0;w<_.childNodes.length;w++){const E=_.childNodes[w];E.nodeType===1&&(g[E.getAttribute("semantic")]=o(E.getAttribute("source")))}return g}function ce(_){const g={type:_.nodeName,material:_.getAttribute("material"),count:parseInt(_.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let w=0,E=_.childNodes.length;w<E;w++){const A=_.childNodes[w];if(A.nodeType===1)switch(A.nodeName){case"input":const J=o(A.getAttribute("source")),te=A.getAttribute("semantic"),Ae=parseInt(A.getAttribute("offset")),ge=parseInt(A.getAttribute("set")),Te=ge>0?te+ge:te;g.inputs[Te]={id:J,offset:Ae},g.stride=Math.max(g.stride,Ae+1),te==="TEXCOORD"&&(g.hasUV=!0);break;case"vcount":g.vcount=a(A.textContent);break;case"p":g.p=a(A.textContent);break}}return g}function se(_){const g={};for(let w=0;w<_.length;w++){const E=_[w];g[E.type]===void 0&&(g[E.type]=[]),g[E.type].push(E)}return g}function Ie(_){let g=0;for(let w=0,E=_.length;w<E;w++)_[w].hasUV===!0&&g++;g>0&&g<_.length&&(_.uvsNeedsFix=!0)}function $e(_){const g={},w=_.sources,E=_.vertices,A=_.primitives;if(A.length===0)return{};const J=se(A);for(const te in J){const Ae=J[te];Ie(Ae),g[te]=yt(Ae,w,E)}return g}function yt(_,g,w){const E={},A={array:[],stride:0},J={array:[],stride:0},te={array:[],stride:0},Ae={array:[],stride:0},ge={array:[],stride:0},Te={array:[],stride:4},ke={array:[],stride:4},le=new fn,Oe=[];let Le=0;for(let Xe=0;Xe<_.length;Xe++){const He=_[Xe],Dt=He.inputs;let vt=0;switch(He.type){case"lines":case"linestrips":vt=He.count*2;break;case"triangles":vt=He.count*3;break;case"polylist":for(let pt=0;pt<He.count;pt++){const mt=He.vcount[pt];switch(mt){case 3:vt+=3;break;case 4:vt+=6;break;default:vt+=(mt-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknown primitive type:",He.type)}le.addGroup(Le,vt,Xe),Le+=vt,He.material&&Oe.push(He.material);for(const pt in Dt){const mt=Dt[pt];switch(pt){case"VERTEX":for(const kn in w){const tn=w[kn];switch(kn){case"POSITION":const Fi=A.array.length;if(it(He,g[tn],mt.offset,A.array),A.stride=g[tn].stride,g.skinWeights&&g.skinIndices&&(it(He,g.skinIndices,mt.offset,Te.array),it(He,g.skinWeights,mt.offset,ke.array)),He.hasUV===!1&&_.uvsNeedsFix===!0){const Eh=(A.array.length-Fi)/A.stride;for(let $o=0;$o<Eh;$o++)te.array.push(0,0)}break;case"NORMAL":it(He,g[tn],mt.offset,J.array),J.stride=g[tn].stride;break;case"COLOR":it(He,g[tn],mt.offset,ge.array),ge.stride=g[tn].stride;break;case"TEXCOORD":it(He,g[tn],mt.offset,te.array),te.stride=g[tn].stride;break;case"TEXCOORD1":it(He,g[tn],mt.offset,Ae.array),te.stride=g[tn].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',kn)}}break;case"NORMAL":it(He,g[mt.id],mt.offset,J.array),J.stride=g[mt.id].stride;break;case"COLOR":it(He,g[mt.id],mt.offset,ge.array,!0),ge.stride=g[mt.id].stride;break;case"TEXCOORD":it(He,g[mt.id],mt.offset,te.array),te.stride=g[mt.id].stride;break;case"TEXCOORD1":it(He,g[mt.id],mt.offset,Ae.array),Ae.stride=g[mt.id].stride;break}}}return A.array.length>0&&le.setAttribute("position",new Pt(A.array,A.stride)),J.array.length>0&&le.setAttribute("normal",new Pt(J.array,J.stride)),ge.array.length>0&&le.setAttribute("color",new Pt(ge.array,ge.stride)),te.array.length>0&&le.setAttribute("uv",new Pt(te.array,te.stride)),Ae.array.length>0&&le.setAttribute("uv1",new Pt(Ae.array,Ae.stride)),Te.array.length>0&&le.setAttribute("skinIndex",new Pt(Te.array,Te.stride)),ke.array.length>0&&le.setAttribute("skinWeight",new Pt(ke.array,ke.stride)),E.data=le,E.type=_[0].type,E.materialKeys=Oe,E}function it(_,g,w,E,A=!1){const J=_.p,te=_.stride,Ae=_.vcount;function ge(le){let Oe=J[le+w]*ke;const Le=Oe+ke;for(;Oe<Le;Oe++)E.push(Te[Oe]);if(A){const Xe=E.length-ke-1;kt.setRGB(E[Xe+0],E[Xe+1],E[Xe+2],It),E[Xe+0]=kt.r,E[Xe+1]=kt.g,E[Xe+2]=kt.b}}const Te=g.array,ke=g.stride;if(_.vcount!==void 0){let le=0;for(let Oe=0,Le=Ae.length;Oe<Le;Oe++){const Xe=Ae[Oe];if(Xe===4){const He=le+te*0,Dt=le+te*1,vt=le+te*2,pt=le+te*3;ge(He),ge(Dt),ge(pt),ge(Dt),ge(vt),ge(pt)}else if(Xe===3){const He=le+te*0,Dt=le+te*1,vt=le+te*2;ge(He),ge(Dt),ge(vt)}else if(Xe>4)for(let He=1,Dt=Xe-2;He<=Dt;He++){const vt=le+te*0,pt=le+te*He,mt=le+te*(He+1);ge(vt),ge(pt),ge(mt)}le+=te*Xe}}else for(let le=0,Oe=J.length;le<Oe;le+=te)ge(le)}function pn(_){return v(Ze.geometries[_],$e)}function mn(_){const g={name:_.getAttribute("name")||"",joints:{},links:[]};for(let w=0;w<_.childNodes.length;w++){const E=_.childNodes[w];if(E.nodeType===1)switch(E.nodeName){case"technique_common":xs(E,g);break}}Ze.kinematicsModels[_.getAttribute("id")]=g}function Hs(_){return _.build!==void 0?_.build:_}function Fn(_){return v(Ze.kinematicsModels[_],Hs)}function xs(_,g){for(let w=0;w<_.childNodes.length;w++){const E=_.childNodes[w];if(E.nodeType===1)switch(E.nodeName){case"joint":g.joints[E.getAttribute("sid")]=Gs(E);break;case"link":g.links.push(gi(E));break}}}function Gs(_){let g;for(let w=0;w<_.childNodes.length;w++){const E=_.childNodes[w];if(E.nodeType===1)switch(E.nodeName){case"prismatic":case"revolute":g=Ws(E);break}}return g}function Ws(_){const g={sid:_.getAttribute("sid"),name:_.getAttribute("name")||"",axis:new O,limits:{min:0,max:0},type:_.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let w=0;w<_.childNodes.length;w++){const E=_.childNodes[w];if(E.nodeType===1)switch(E.nodeName){case"axis":const A=r(E.textContent);g.axis.fromArray(A);break;case"limits":const J=E.getElementsByTagName("max")[0],te=E.getElementsByTagName("min")[0];g.limits.max=parseFloat(J.textContent),g.limits.min=parseFloat(te.textContent);break}}return g.limits.min>=g.limits.max&&(g.static=!0),g.middlePosition=(g.limits.min+g.limits.max)/2,g}function gi(_){const g={sid:_.getAttribute("sid"),name:_.getAttribute("name")||"",attachments:[],transforms:[]};for(let w=0;w<_.childNodes.length;w++){const E=_.childNodes[w];if(E.nodeType===1)switch(E.nodeName){case"attachment_full":g.attachments.push(Xs(E));break;case"matrix":case"translate":case"rotate":g.transforms.push(_i(E));break}}return g}function Xs(_){const g={joint:_.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let w=0;w<_.childNodes.length;w++){const E=_.childNodes[w];if(E.nodeType===1)switch(E.nodeName){case"link":g.links.push(gi(E));break;case"matrix":case"translate":case"rotate":g.transforms.push(_i(E));break}}return g}function _i(_){const g={type:_.nodeName},w=r(_.textContent);switch(g.type){case"matrix":g.obj=new et,g.obj.fromArray(w).transpose();break;case"translate":g.obj=new O,g.obj.fromArray(w);break;case"rotate":g.obj=new O,g.obj.fromArray(w),g.angle=Dn.degToRad(w[3]);break}return g}function qs(_){const g={name:_.getAttribute("name")||"",rigidBodies:{}};for(let w=0;w<_.childNodes.length;w++){const E=_.childNodes[w];if(E.nodeType===1)switch(E.nodeName){case"rigid_body":g.rigidBodies[E.getAttribute("name")]={},Ys(E,g.rigidBodies[E.getAttribute("name")]);break}}Ze.physicsModels[_.getAttribute("id")]=g}function Ys(_,g){for(let w=0;w<_.childNodes.length;w++){const E=_.childNodes[w];if(E.nodeType===1)switch(E.nodeName){case"technique_common":ea(E,g);break}}}function ea(_,g){for(let w=0;w<_.childNodes.length;w++){const E=_.childNodes[w];if(E.nodeType===1)switch(E.nodeName){case"inertia":g.inertia=r(E.textContent);break;case"mass":g.mass=r(E.textContent)[0];break}}}function ta(_){const g={bindJointAxis:[]};for(let w=0;w<_.childNodes.length;w++){const E=_.childNodes[w];if(E.nodeType===1)switch(E.nodeName){case"bind_joint_axis":g.bindJointAxis.push(na(E));break}}Ze.kinematicsScenes[o(_.getAttribute("url"))]=g}function na(_){const g={target:_.getAttribute("target").split("/").pop()};for(let w=0;w<_.childNodes.length;w++){const E=_.childNodes[w];if(E.nodeType===1)switch(E.nodeName){case"axis":const A=E.getElementsByTagName("param")[0];g.axis=A.textContent;const J=g.axis.split("inst_").pop().split("axis")[0];g.jointIndex=J.substring(0,J.length-1);break}}return g}function ia(_){return _.build!==void 0?_.build:_}function sa(_){return v(Ze.kinematicsScenes[_],ia)}function ra(){const _=Object.keys(Ze.kinematicsModels)[0],g=Object.keys(Ze.kinematicsScenes)[0],w=Object.keys(Ze.visualScenes)[0];if(_===void 0||g===void 0)return;const E=Fn(_),A=sa(g),J=Ge(w),te=A.bindJointAxis,Ae={};for(let ke=0,le=te.length;ke<le;ke++){const Oe=te[ke],Le=ft.querySelector('[sid="'+Oe.target+'"]');if(Le){const Xe=Le.parentElement;ge(Oe.jointIndex,Xe)}}function ge(ke,le){const Oe=le.getAttribute("name"),Le=E.joints[ke];J.traverse(function(Xe){Xe.name===Oe&&(Ae[ke]={object:Xe,transforms:b(le),joint:Le,position:Le.zeroPosition})})}const Te=new et;Rn={joints:E&&E.joints,getJointValue:function(ke){const le=Ae[ke];if(le)return le.position;console.warn("THREE.ColladaLoader: Joint "+ke+" doesn't exist.")},setJointValue:function(ke,le){const Oe=Ae[ke];if(Oe){const Le=Oe.joint;if(le>Le.limits.max||le<Le.limits.min)console.warn("THREE.ColladaLoader: Joint "+ke+" value "+le+" outside of limits (min: "+Le.limits.min+", max: "+Le.limits.max+").");else if(Le.static)console.warn("THREE.ColladaLoader: Joint "+ke+" is static.");else{const Xe=Oe.object,He=Le.axis,Dt=Oe.transforms;j.identity();for(let vt=0;vt<Dt.length;vt++){const pt=Dt[vt];if(pt.sid&&pt.sid.indexOf(ke)!==-1)switch(Le.type){case"revolute":j.multiply(Te.makeRotationAxis(He,Dn.degToRad(le)));break;case"prismatic":j.multiply(Te.makeTranslation(He.x*le,He.y*le,He.z*le));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+Le.type);break}else switch(pt.type){case"matrix":j.multiply(pt.obj);break;case"translate":j.multiply(Te.makeTranslation(pt.obj.x,pt.obj.y,pt.obj.z));break;case"scale":j.scale(pt.obj);break;case"rotate":j.multiply(Te.makeRotationAxis(pt.obj,pt.angle));break}}Xe.matrix.copy(j),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Ae[ke].position=le}}else console.log("THREE.ColladaLoader: "+ke+" does not exist.")}}}function b(_){const g=[],w=ft.querySelector('[id="'+_.id+'"]');for(let E=0;E<w.childNodes.length;E++){const A=w.childNodes[E];if(A.nodeType!==1)continue;let J,te;switch(A.nodeName){case"matrix":J=r(A.textContent);const Ae=new et().fromArray(J).transpose();g.push({sid:A.getAttribute("sid"),type:A.nodeName,obj:Ae});break;case"translate":case"scale":J=r(A.textContent),te=new O().fromArray(J),g.push({sid:A.getAttribute("sid"),type:A.nodeName,obj:te});break;case"rotate":J=r(A.textContent),te=new O().fromArray(J);const ge=Dn.degToRad(J[3]);g.push({sid:A.getAttribute("sid"),type:A.nodeName,obj:te,angle:ge});break}}return g}function G(_){const g=_.getElementsByTagName("node");for(let w=0;w<g.length;w++){const E=g[w];E.hasAttribute("id")===!1&&E.setAttribute("id",c())}}const j=new et,K=new O;function W(_){const g={name:_.getAttribute("name")||"",type:_.getAttribute("type"),id:_.getAttribute("id"),sid:_.getAttribute("sid"),matrix:new et,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let w=0;w<_.childNodes.length;w++){const E=_.childNodes[w];if(E.nodeType!==1)continue;let A;switch(E.nodeName){case"node":g.nodes.push(E.getAttribute("id")),W(E);break;case"instance_camera":g.instanceCameras.push(o(E.getAttribute("url")));break;case"instance_controller":g.instanceControllers.push(he(E));break;case"instance_light":g.instanceLights.push(o(E.getAttribute("url")));break;case"instance_geometry":g.instanceGeometries.push(he(E));break;case"instance_node":g.instanceNodes.push(o(E.getAttribute("url")));break;case"matrix":A=r(E.textContent),g.matrix.multiply(j.fromArray(A).transpose()),g.transforms[E.getAttribute("sid")]=E.nodeName;break;case"translate":A=r(E.textContent),K.fromArray(A),g.matrix.multiply(j.makeTranslation(K.x,K.y,K.z)),g.transforms[E.getAttribute("sid")]=E.nodeName;break;case"rotate":A=r(E.textContent);const J=Dn.degToRad(A[3]);g.matrix.multiply(j.makeRotationAxis(K.fromArray(A),J)),g.transforms[E.getAttribute("sid")]=E.nodeName;break;case"scale":A=r(E.textContent),g.matrix.scale(K.fromArray(A)),g.transforms[E.getAttribute("sid")]=E.nodeName;break;case"extra":break;default:console.log(E)}}return ot(g.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",g.id):Ze.nodes[g.id]=g,g}function he(_){const g={id:o(_.getAttribute("url")),materials:{},skeletons:[]};for(let w=0;w<_.childNodes.length;w++){const E=_.childNodes[w];switch(E.nodeName){case"bind_material":const A=E.getElementsByTagName("instance_material");for(let J=0;J<A.length;J++){const te=A[J],Ae=te.getAttribute("symbol"),ge=te.getAttribute("target");g.materials[Ae]=o(ge)}break;case"skeleton":g.skeletons.push(o(E.textContent));break}}return g}function Ee(_,g){const w=[],E=[];let A,J,te;for(A=0;A<_.length;A++){const Te=_[A];let ke;if(ot(Te))ke=ht(Te),Pe(ke,g,w);else if(xt(Te)){const Oe=Ze.visualScenes[Te].children;for(let Le=0;Le<Oe.length;Le++){const Xe=Oe[Le];if(Xe.type==="JOINT"){const He=ht(Xe.id);Pe(He,g,w)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",Te)}for(A=0;A<g.length;A++)for(J=0;J<w.length;J++)if(te=w[J],te.bone.name===g[A].name){E[A]=te,te.processed=!0;break}for(A=0;A<w.length;A++)te=w[A],te.processed===!1&&(E.push(te),te.processed=!0);const Ae=[],ge=[];for(A=0;A<E.length;A++)te=E[A],Ae.push(te.bone),ge.push(te.boneInverse);return new Wo(Ae,ge)}function Pe(_,g,w){_.traverse(function(E){if(E.isBone===!0){let A;for(let J=0;J<g.length;J++){const te=g[J];if(te.name===E.name){A=te.boneInverse;break}}A===void 0&&(A=new et),w.push({bone:E,boneInverse:A,processed:!1})}})}function we(_){const g=[],w=_.matrix,E=_.nodes,A=_.type,J=_.instanceCameras,te=_.instanceControllers,Ae=_.instanceLights,ge=_.instanceGeometries,Te=_.instanceNodes;for(let le=0,Oe=E.length;le<Oe;le++)g.push(ht(E[le]));for(let le=0,Oe=J.length;le<Oe;le++){const Le=be(J[le]);Le!==null&&g.push(Le.clone())}for(let le=0,Oe=te.length;le<Oe;le++){const Le=te[le],Xe=X(Le.id),He=pn(Xe.id),Dt=Ve(He,Le.materials),vt=Le.skeletons,pt=Xe.skin.joints,mt=Ee(vt,pt);for(let kn=0,tn=Dt.length;kn<tn;kn++){const Fi=Dt[kn];Fi.isSkinnedMesh&&(Fi.bind(mt,Xe.skin.bindMatrix),Fi.normalizeSkinWeights()),g.push(Fi)}}for(let le=0,Oe=Ae.length;le<Oe;le++){const Le=z(Ae[le]);Le!==null&&g.push(Le.clone())}for(let le=0,Oe=ge.length;le<Oe;le++){const Le=ge[le],Xe=pn(Le.id),He=Ve(Xe,Le.materials);for(let Dt=0,vt=He.length;Dt<vt;Dt++)g.push(He[Dt])}for(let le=0,Oe=Te.length;le<Oe;le++)g.push(ht(Te[le]).clone());let ke;if(E.length===0&&g.length===1)ke=g[0];else{ke=A==="JOINT"?new Yc:new ts;for(let le=0;le<g.length;le++)ke.add(g[le])}return ke.name=A==="JOINT"?_.sid:_.name,ke.matrix.copy(w),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke}const qe=new Bs({name:fi.DEFAULT_MATERIAL_NAME,color:16711935});function Ke(_,g){const w=[];for(let E=0,A=_.length;E<A;E++){const J=g[_[E]];J===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",_[E]),w.push(qe)):w.push(ee(J))}return w}function Ve(_,g){const w=[];for(const E in _){const A=_[E],J=Ke(A.materialKeys,g);if(J.length===0&&(E==="lines"||E==="linestrips"?J.push(new Po):J.push(new Ps)),E==="lines"||E==="linestrips")for(let Te=0,ke=J.length;Te<ke;Te++){const le=J[Te];if(le.isMeshPhongMaterial===!0||le.isMeshLambertMaterial===!0){const Oe=new Po;Oe.color.copy(le.color),Oe.opacity=le.opacity,Oe.transparent=le.transparent,J[Te]=Oe}}const te=A.data.attributes.skinIndex!==void 0,Ae=J.length===1?J[0]:J;let ge;switch(E){case"lines":ge=new fd(A.data,Ae);break;case"linestrips":ge=new Kc(A.data,Ae);break;case"triangles":case"polylist":te?ge=new ld(A.data,Ae):ge=new Ot(A.data,Ae);break}w.push(ge)}return w}function ot(_){return Ze.nodes[_]!==void 0}function ht(_){return v(Ze.nodes[_],we)}function Ct(_){const g={name:_.getAttribute("name"),children:[]};G(_);const w=n(_,"node");for(let E=0;E<w.length;E++)g.children.push(W(w[E]));Ze.visualScenes[_.getAttribute("id")]=g}function St(_){const g=new ts;g.name=_.name;const w=_.children;for(let E=0;E<w.length;E++){const A=w[E];g.add(ht(A.id))}return g}function xt(_){return Ze.visualScenes[_]!==void 0}function Ge(_){return v(Ze.visualScenes[_],St)}function wt(_){const g=n(_,"instance_visual_scene")[0];return Ge(o(g.getAttribute("url")))}function dt(){const _=Ze.clips;if(l(_)===!0){if(l(Ze.animations)===!1){const g=[];for(const w in Ze.animations){const E=T(w);for(let A=0,J=E.length;A<J;A++)g.push(E[A])}Qn.push(new kl("default",-1,g))}}else for(const g in _)Qn.push(q(g))}function Kt(_){let g="";const w=[_];for(;w.length;){const E=w.shift();E.nodeType===Node.TEXT_NODE?g+=E.textContent:(g+=`
`,w.push(...E.childNodes))}return g.trim()}if(e.length===0)return{scene:new qc};const On=new DOMParser().parseFromString(e,"application/xml"),ft=n(On,"COLLADA")[0],Bn=On.getElementsByTagName("parsererror")[0];if(Bn!==void 0){const _=n(Bn,"div")[0];let g;return _?g=_.textContent:g=Kt(Bn),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,g),null}const At=ft.getAttribute("version");console.debug("THREE.ColladaLoader: File version",At);const Zt=h(n(ft,"asset")[0]),Jt=new ih(this.manager);Jt.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);let Bt;vc&&(Bt=new vc(this.manager),Bt.setPath(this.resourcePath||t));const kt=new tt,Qn=[];let Rn={},Sh=0;const Ze={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};p(ft,"library_animations","animation",m),p(ft,"library_animation_clips","animation_clip",F),p(ft,"library_controllers","controller",re),p(ft,"library_images","image",$),p(ft,"library_effects","effect",De),p(ft,"library_materials","material",Y),p(ft,"library_cameras","camera",Be),p(ft,"library_lights","light",je),p(ft,"library_geometries","geometry",de),p(ft,"library_nodes","node",W),p(ft,"library_visual_scenes","visual_scene",Ct),p(ft,"library_kinematics_models","kinematics_model",mn),p(ft,"library_physics_models","physics_model",qs),p(ft,"scene","instance_kinematics_scene",ta),M(Ze.animations,C),M(Ze.clips,ie),M(Ze.controllers,ve),M(Ze.images,Q),M(Ze.effects,I),M(Ze.materials,oe),M(Ze.cameras,ue),M(Ze.lights,Qe),M(Ze.geometries,$e),M(Ze.visualScenes,St),dt(),ra();const js=wt(n(ft,"scene")[0]);return js.animations=Qn,Zt.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),js.rotation.set(-Math.PI/2,0,0)),js.scale.multiplyScalar(Zt.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),Qn},kinematics:Rn,library:Ze,scene:js}}}const Mc=new O,U_=new rn,Sr=new et,ai=new et,Er=new dn,br=new O(1,1,1),Tr=new O;class Qr extends Nt{constructor(...e){super(...e),this.urdfNode=null,this.urdfName=""}copy(e,t){return super.copy(e,t),this.urdfNode=e.urdfNode,this.urdfName=e.urdfName,this}}class F_ extends Qr{constructor(...e){super(...e),this.isURDFCollider=!0,this.type="URDFCollider"}}class O_ extends Qr{constructor(...e){super(...e),this.isURDFVisual=!0,this.type="URDFVisual"}}class mh extends Qr{constructor(...e){super(...e),this.isURDFLink=!0,this.type="URDFLink"}}class gh extends Qr{get jointType(){return this._jointType}set jointType(e){if(this.jointType!==e)switch(this._jointType=e,this.matrixWorldNeedsUpdate=!0,e){case"fixed":this.jointValue=[];break;case"continuous":case"revolute":case"prismatic":this.jointValue=new Array(1).fill(0);break;case"planar":this.jointValue=new Array(3).fill(0),this.axis=new O(0,0,1);break;case"floating":this.jointValue=new Array(6).fill(0);break}}get angle(){return this.jointValue[0]}constructor(...e){super(...e),this.isURDFJoint=!0,this.type="URDFJoint",this.jointValue=null,this.jointType="fixed",this.axis=new O(1,0,0),this.limit={lower:0,upper:0},this.ignoreLimits=!1,this.origPosition=null,this.origQuaternion=null,this.mimicJoints=[]}copy(e,t){return super.copy(e,t),this.jointType=e.jointType,this.axis=e.axis.clone(),this.limit.lower=e.limit.lower,this.limit.upper=e.limit.upper,this.ignoreLimits=!1,this.jointValue=[...e.jointValue],this.origPosition=e.origPosition?e.origPosition.clone():null,this.origQuaternion=e.origQuaternion?e.origQuaternion.clone():null,this.mimicJoints=[...e.mimicJoints],this}setJointValue(...e){e=e.map(n=>n===null?null:parseFloat(n)),(!this.origPosition||!this.origQuaternion)&&(this.origPosition=this.position.clone(),this.origQuaternion=this.quaternion.clone());let t=!1;switch(this.mimicJoints.forEach(n=>{t=n.updateFromMimickedJoint(...e)||t}),this.jointType){case"fixed":return t;case"continuous":case"revolute":{let n=e[0];return n==null||n===this.jointValue[0]?t:(!this.ignoreLimits&&this.jointType==="revolute"&&(n=Math.min(this.limit.upper,n),n=Math.max(this.limit.lower,n)),this.quaternion.setFromAxisAngle(this.axis,n).premultiply(this.origQuaternion),this.jointValue[0]!==n?(this.jointValue[0]=n,this.matrixWorldNeedsUpdate=!0,!0):t)}case"prismatic":{let n=e[0];return n==null||n===this.jointValue[0]?t:(this.ignoreLimits||(n=Math.min(this.limit.upper,n),n=Math.max(this.limit.lower,n)),this.position.copy(this.origPosition),Mc.copy(this.axis).applyEuler(this.rotation),this.position.addScaledVector(Mc,n),this.jointValue[0]!==n?(this.jointValue[0]=n,this.matrixWorldNeedsUpdate=!0,!0):t)}case"floating":return this.jointValue.every((n,s)=>e[s]===n||e[s]===null)?t:(this.jointValue[0]=e[0]!==null?e[0]:this.jointValue[0],this.jointValue[1]=e[1]!==null?e[1]:this.jointValue[1],this.jointValue[2]=e[2]!==null?e[2]:this.jointValue[2],this.jointValue[3]=e[3]!==null?e[3]:this.jointValue[3],this.jointValue[4]=e[4]!==null?e[4]:this.jointValue[4],this.jointValue[5]=e[5]!==null?e[5]:this.jointValue[5],ai.compose(this.origPosition,this.origQuaternion,br),Er.setFromEuler(U_.set(this.jointValue[3],this.jointValue[4],this.jointValue[5],"XYZ")),Tr.set(this.jointValue[0],this.jointValue[1],this.jointValue[2]),Sr.compose(Tr,Er,br),ai.premultiply(Sr),this.position.setFromMatrixPosition(ai),this.rotation.setFromRotationMatrix(ai),this.matrixWorldNeedsUpdate=!0,!0);case"planar":return this.jointValue.every((n,s)=>e[s]===n||e[s]===null)?t:(this.jointValue[0]=e[0]!==null?e[0]:this.jointValue[0],this.jointValue[1]=e[1]!==null?e[1]:this.jointValue[1],this.jointValue[2]=e[2]!==null?e[2]:this.jointValue[2],ai.compose(this.origPosition,this.origQuaternion,br),Er.setFromAxisAngle(this.axis,this.jointValue[2]),Tr.set(this.jointValue[0],this.jointValue[1],0),Sr.compose(Tr,Er,br),ai.premultiply(Sr),this.position.setFromMatrixPosition(ai),this.rotation.setFromRotationMatrix(ai),this.matrixWorldNeedsUpdate=!0,!0)}return t}}class yc extends gh{constructor(...e){super(...e),this.type="URDFMimicJoint",this.mimicJoint=null,this.offset=0,this.multiplier=1}updateFromMimickedJoint(...e){const t=e.map(n=>n*this.multiplier+this.offset);return super.setJointValue(...t)}copy(e,t){return super.copy(e,t),this.mimicJoint=e.mimicJoint,this.offset=e.offset,this.multiplier=e.multiplier,this}}class B_ extends mh{constructor(...e){super(...e),this.isURDFRobot=!0,this.urdfNode=null,this.urdfRobotNode=null,this.robotName=null,this.links=null,this.joints=null,this.colliders=null,this.visual=null,this.frames=null}copy(e,t){super.copy(e,t),this.urdfRobotNode=e.urdfRobotNode,this.robotName=e.robotName,this.links={},this.joints={},this.colliders={},this.visual={},this.traverse(n=>{n.isURDFJoint&&n.urdfName in e.joints&&(this.joints[n.urdfName]=n),n.isURDFLink&&n.urdfName in e.links&&(this.links[n.urdfName]=n),n.isURDFCollider&&n.urdfName in e.colliders&&(this.colliders[n.urdfName]=n),n.isURDFVisual&&n.urdfName in e.visual&&(this.visual[n.urdfName]=n)});for(const n in this.joints)this.joints[n].mimicJoints=this.joints[n].mimicJoints.map(s=>this.joints[s.name]);return this.frames={...this.colliders,...this.visual,...this.links,...this.joints},this}getFrame(e){return this.frames[e]}setJointValue(e,...t){const n=this.joints[e];return n?n.setJointValue(...t):!1}setJointValues(e){let t=!1;for(const n in e){const s=e[n];Array.isArray(s)?t=this.setJointValue(n,...s)||t:t=this.setJointValue(n,s)||t}return t}}const Ha=new dn,Sc=new rn;function $i(i){return i?i.trim().split(/\s+/g).map(e=>parseFloat(e)):[0,0,0]}function Ec(i,e,t=!1){t||i.rotation.set(0,0,0),Sc.set(e[0],e[1],e[2],"ZYX"),Ha.setFromEuler(Sc),Ha.multiply(i.quaternion),i.quaternion.copy(Ha)}class k_{constructor(e){this.manager=e||th,this.loadMeshCb=this.defaultMeshLoader.bind(this),this.parseVisual=!0,this.parseCollision=!1,this.packages="",this.workingPath="",this.fetchOptions={}}loadAsync(e){return new Promise((t,n)=>{this.load(e,t,null,n)})}load(e,t,n,s){const r=this.manager,a=ah.extractUrlBase(e),o=this.manager.resolveURL(e);r.itemStart(o),fetch(o,this.fetchOptions).then(c=>{if(c.ok)return n&&n(null),c.text();throw new Error(`URDFLoader: Failed to load url '${o}' with error code ${c.status} : ${c.statusText}.`)}).then(c=>{const l=this.parse(c,this.workingPath||a);t(l),r.itemEnd(o)}).catch(c=>{s?s(c):console.error("URDFLoader: Error loading file.",c),r.itemError(o),r.itemEnd(o)})}parse(e,t=this.workingPath){const n=this.packages,s=this.loadMeshCb,r=this.parseVisual,a=this.parseCollision,o=this.manager,c={},l={},h={};function d(L){if(!/^package:\/\//.test(L))return t?t+L:L;const[C,T]=L.replace(/^package:\/\//,"").split(/\/(.+)/);if(typeof n=="string")return n.endsWith(C)?n+"/"+T:n+"/"+C+"/"+T;if(n instanceof Function)return n(C)+"/"+T;if(typeof n=="object")return C in n?n[C]+"/"+T:(console.error(`URDFLoader : ${C} not found in provided package list.`),null)}function f(L){let C;L instanceof Document?C=[...L.children]:L instanceof Element?C=[L]:C=[...new DOMParser().parseFromString(L,"text/xml").children];const T=C.filter(D=>D.nodeName==="robot").pop();return p(T)}function p(L){const C=[...L.children],T=C.filter(P=>P.nodeName.toLowerCase()==="link"),D=C.filter(P=>P.nodeName.toLowerCase()==="joint"),N=C.filter(P=>P.nodeName.toLowerCase()==="material"),U=new B_;U.robotName=L.getAttribute("name"),U.urdfRobotNode=L,N.forEach(P=>{const k=P.getAttribute("name");h[k]=m(P)});const R={},x={};T.forEach(P=>{const k=P.getAttribute("name"),V=L.querySelector(`child[link="${k}"]`)===null;c[k]=v(P,R,x,V?U:null)}),D.forEach(P=>{const k=P.getAttribute("name");l[k]=M(P)}),U.joints=l,U.links=c,U.colliders=x,U.visual=R;const y=Object.values(l);return y.forEach(P=>{P instanceof yc&&l[P.mimicJoint].mimicJoints.push(P)}),y.forEach(P=>{const k=new Set,V=H=>{if(k.has(H))throw new Error("URDFLoader: Detected an infinite loop of mimic joints.");k.add(H),H.mimicJoints.forEach(Z=>{V(Z)})};V(P)}),U.frames={...x,...R,...c,...l},U}function M(L){const C=[...L.children],T=L.getAttribute("type");let D;const N=C.find(k=>k.nodeName.toLowerCase()==="mimic");N?(D=new yc,D.mimicJoint=N.getAttribute("joint"),D.multiplier=parseFloat(N.getAttribute("multiplier")||1),D.offset=parseFloat(N.getAttribute("offset")||0)):D=new gh,D.urdfNode=L,D.name=L.getAttribute("name"),D.urdfName=D.name,D.jointType=T;let U=null,R=null,x=[0,0,0],y=[0,0,0];C.forEach(k=>{const V=k.nodeName.toLowerCase();V==="origin"?(x=$i(k.getAttribute("xyz")),y=$i(k.getAttribute("rpy"))):V==="child"?R=c[k.getAttribute("link")]:V==="parent"?U=c[k.getAttribute("link")]:V==="limit"&&(D.limit.lower=parseFloat(k.getAttribute("lower")||D.limit.lower),D.limit.upper=parseFloat(k.getAttribute("upper")||D.limit.upper))}),U.add(D),D.add(R),Ec(D,y),D.position.set(x[0],x[1],x[2]);const P=C.filter(k=>k.nodeName.toLowerCase()==="axis")[0];if(P){const k=P.getAttribute("xyz").split(/\s+/g).map(V=>parseFloat(V));D.axis=new O(k[0],k[1],k[2]),D.axis.normalize()}return D}function v(L,C,T,D=null){D===null&&(D=new mh);const N=[...L.children];return D.name=L.getAttribute("name"),D.urdfName=D.name,D.urdfNode=L,r&&N.filter(R=>R.nodeName.toLowerCase()==="visual").forEach(R=>{const x=u(R,h);if(D.add(x),R.hasAttribute("name")){const y=R.getAttribute("name");x.name=y,x.urdfName=y,C[y]=x}}),a&&N.filter(R=>R.nodeName.toLowerCase()==="collision").forEach(R=>{const x=u(R);if(D.add(x),R.hasAttribute("name")){const y=R.getAttribute("name");x.name=y,x.urdfName=y,T[y]=x}}),D}function m(L){const C=[...L.children],T=new Ps;return T.name=L.getAttribute("name")||"",C.forEach(D=>{const N=D.nodeName.toLowerCase();if(N==="color"){const U=D.getAttribute("rgba").split(/\s/g).map(R=>parseFloat(R));T.color.setRGB(U[0],U[1],U[2]),T.opacity=U[3],T.transparent=U[3]<1,T.depthWrite=!T.transparent}else if(N==="texture"){const U=D.getAttribute("filename");if(U){const R=new ih(o),x=d(U);T.map=R.load(x),T.map.colorSpace=It}}}),T}function u(L,C={}){const T=L.nodeName.toLowerCase()==="collision",D=[...L.children];let N=null;const U=D.filter(x=>x.nodeName.toLowerCase()==="material")[0];if(U){const x=U.getAttribute("name");x&&x in C?N=C[x]:N=m(U)}else N=new Ps;const R=T?new F_:new O_;return R.urdfNode=L,D.forEach(x=>{const y=x.nodeName.toLowerCase();if(y==="geometry"){const P=x.children[0].nodeName.toLowerCase();if(P==="mesh"){const k=x.children[0].getAttribute("filename"),V=d(k);if(V!==null){const H=x.children[0].getAttribute("scale");if(H){const Z=$i(H);R.scale.set(Z[0],Z[1],Z[2])}s(V,o,(Z,F)=>{F?console.error("URDFLoader: Error loading mesh.",F):Z&&(Z instanceof Ot&&(Z.material=N),Z.position.set(0,0,0),Z.quaternion.identity(),R.add(Z))})}}else if(P==="box"){const k=new Ot;k.geometry=new Ui(1,1,1),k.material=N;const V=$i(x.children[0].getAttribute("size"));k.scale.set(V[0],V[1],V[2]),R.add(k)}else if(P==="sphere"){const k=new Ot;k.geometry=new Kr(1,30,30),k.material=N;const V=parseFloat(x.children[0].getAttribute("radius"))||0;k.scale.set(V,V,V),R.add(k)}else if(P==="cylinder"){const k=new Ot;k.geometry=new zs(1,1,1,30),k.material=N;const V=parseFloat(x.children[0].getAttribute("radius"))||0,H=parseFloat(x.children[0].getAttribute("length"))||0;k.scale.set(V,H,V),k.rotation.set(Math.PI/2,0,0),R.add(k)}}else if(y==="origin"){const P=$i(x.getAttribute("xyz")),k=$i(x.getAttribute("rpy"));R.position.set(P[0],P[1],P[2]),R.rotation.set(0,0,0),Ec(R,k)}}),R}return f(e)}defaultMeshLoader(e,t,n){/\.stl$/i.test(e)?new N_(t).load(e,r=>{const a=new Ot(r,new Ps);n(a)}):/\.dae$/i.test(e)?new ph(t).load(e,r=>n(r.scene)):console.warn(`URDFLoader: Could not load model at ${e}.
No loader available`)}}class z_ extends nh{constructor(e){super(e),this.type=Kn}parse(e){const a=function(R,x){switch(R){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(x||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(x||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(x||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(x||""))}},d=function(R,x,y){x=x||1024;let k=R.pos,V=-1,H=0,Z="",F=String.fromCharCode.apply(null,new Uint16Array(R.subarray(k,k+128)));for(;0>(V=F.indexOf(`
`))&&H<x&&k<R.byteLength;)Z+=F,H+=F.length,k+=128,F+=String.fromCharCode.apply(null,new Uint16Array(R.subarray(k,k+128)));return-1<V?(R.pos+=H+V+1,Z+F.slice(0,V)):!1},f=function(R){const x=/^#\?(\S+)/,y=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,P=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,k=/^\s*FORMAT=(\S+)\s*$/,V=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,H={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let Z,F;for((R.pos>=R.byteLength||!(Z=d(R)))&&a(1,"no header found"),(F=Z.match(x))||a(3,"bad initial token"),H.valid|=1,H.programtype=F[1],H.string+=Z+`
`;Z=d(R),Z!==!1;){if(H.string+=Z+`
`,Z.charAt(0)==="#"){H.comments+=Z+`
`;continue}if((F=Z.match(y))&&(H.gamma=parseFloat(F[1])),(F=Z.match(P))&&(H.exposure=parseFloat(F[1])),(F=Z.match(k))&&(H.valid|=2,H.format=F[1]),(F=Z.match(V))&&(H.valid|=4,H.height=parseInt(F[1],10),H.width=parseInt(F[2],10)),H.valid&2&&H.valid&4)break}return H.valid&2||a(3,"missing format specifier"),H.valid&4||a(3,"missing image size specifier"),H},p=function(R,x,y){const P=x;if(P<8||P>32767||R[0]!==2||R[1]!==2||R[2]&128)return new Uint8Array(R);P!==(R[2]<<8|R[3])&&a(3,"wrong scanline width");const k=new Uint8Array(4*x*y);k.length||a(4,"unable to allocate buffer space");let V=0,H=0;const Z=4*P,F=new Uint8Array(4),ie=new Uint8Array(Z);let q=y;for(;q>0&&H<R.byteLength;){H+4>R.byteLength&&a(1),F[0]=R[H++],F[1]=R[H++],F[2]=R[H++],F[3]=R[H++],(F[0]!=2||F[1]!=2||(F[2]<<8|F[3])!=P)&&a(3,"bad rgbe scanline format");let re=0,ae;for(;re<Z&&H<R.byteLength;){ae=R[H++];const _e=ae>128;if(_e&&(ae-=128),(ae===0||re+ae>Z)&&a(3,"bad scanline data"),_e){const ve=R[H++];for(let xe=0;xe<ae;xe++)ie[re++]=ve}else ie.set(R.subarray(H,H+ae),re),re+=ae,H+=ae}const fe=P;for(let _e=0;_e<fe;_e++){let ve=0;k[V]=ie[_e+ve],ve+=P,k[V+1]=ie[_e+ve],ve+=P,k[V+2]=ie[_e+ve],ve+=P,k[V+3]=ie[_e+ve],V+=4}q--}return k},M=function(R,x,y,P){const k=R[x+3],V=Math.pow(2,k-128)/255;y[P+0]=R[x+0]*V,y[P+1]=R[x+1]*V,y[P+2]=R[x+2]*V,y[P+3]=1},v=function(R,x,y,P){const k=R[x+3],V=Math.pow(2,k-128)/255;y[P+0]=sr.toHalfFloat(Math.min(R[x+0]*V,65504)),y[P+1]=sr.toHalfFloat(Math.min(R[x+1]*V,65504)),y[P+2]=sr.toHalfFloat(Math.min(R[x+2]*V,65504)),y[P+3]=sr.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const u=f(m),L=u.width,C=u.height,T=p(m.subarray(m.pos),L,C);let D,N,U;switch(this.type){case cn:U=T.length/4;const R=new Float32Array(U*4);for(let y=0;y<U;y++)M(T,y*4,R,y*4);D=R,N=cn;break;case Kn:U=T.length/4;const x=new Uint16Array(U*4);for(let y=0;y<U;y++)v(T,y*4,x,y*4);D=x,N=Kn;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:L,height:C,data:D,header:u.string,gamma:u.gamma,exposure:u.exposure,type:N}}setDataType(e){return this.type=e,this}load(e,t,n,s){function r(a,o){switch(a.type){case cn:case Kn:a.colorSpace=Li,a.minFilter=en,a.magFilter=en,a.generateMipmaps=!1,a.flipY=!0;break}t&&t(a,o)}return super.load(e,r,n,s)}}const Ts=new O;function _n(i,e,t,n,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Ts.copy(e),Ts[n]=0,Ts.normalize();const l=.5*a/(a+o),h=1-Ts.angleTo(i)/c;return Math.sign(Ts[t])===1?h*l:o/(a+o)+l+l*(1-h)}class Jo extends Ui{constructor(e=1,t=1,n=1,s=2,r=.1){const a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const c=new O,l=new O,h=new O(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,f=this.attributes.normal.array,p=this.attributes.uv.array,M=d.length/6,v=new O,m=.5/a;for(let u=0,L=0;u<d.length;u+=3,L+=2)switch(c.fromArray(d,u),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),d[u+0]=h.x*Math.sign(c.x)+l.x*r,d[u+1]=h.y*Math.sign(c.y)+l.y*r,d[u+2]=h.z*Math.sign(c.z)+l.z*r,f[u+0]=l.x,f[u+1]=l.y,f[u+2]=l.z,Math.floor(u/M)){case 0:v.set(1,0,0),p[L+0]=_n(v,l,"z","y",r,n),p[L+1]=1-_n(v,l,"y","z",r,t);break;case 1:v.set(-1,0,0),p[L+0]=1-_n(v,l,"z","y",r,n),p[L+1]=1-_n(v,l,"y","z",r,t);break;case 2:v.set(0,1,0),p[L+0]=1-_n(v,l,"x","z",r,e),p[L+1]=_n(v,l,"z","x",r,n);break;case 3:v.set(0,-1,0),p[L+0]=1-_n(v,l,"x","z",r,e),p[L+1]=1-_n(v,l,"z","x",r,n);break;case 4:v.set(0,0,1),p[L+0]=1-_n(v,l,"x","y",r,e),p[L+1]=1-_n(v,l,"y","x",r,t);break;case 5:v.set(0,0,-1),p[L+0]=_n(v,l,"x","y",r,e),p[L+1]=1-_n(v,l,"y","x",r,t);break}}static fromJSON(e){return new Jo(e.width,e.height,e.depth,e.segments,e.radius)}}function wr(i,e,t,n=null){let h=.4,d=.05,f=0,p=1/0,M=e.map(v=>i.joints[v].angle);for(let v=0;v<40;++v){e.forEach((R,x)=>i.setJointValue(R,M[x])),i.updateMatrixWorld(!0);let m;if(n)m=new O().setFromMatrixPosition(n.matrixWorld);else{const R=i.joints[e.at(-1)]?.children[0];if(!R?.matrixWorld)break;m=new O().setFromMatrixPosition(R.matrixWorld)}const u=new O().subVectors(t,m),L=u.length();if(L<.03)break;if(L>p-1e-4){if(++f>=6)break;h*=.8,d*=1.5}else f=0;p=L;const C=[];for(let R=0;R<e.length;++R){const x=i.joints[e[R]];if(!x?.matrixWorld){C.push([0,0,0]);continue}const y=new O().setFromMatrixPosition(x.matrixWorld),P=new O().copy(x.axis).applyQuaternion(new dn().setFromRotationMatrix(x.matrixWorld)).normalize(),k=new O().subVectors(m,y),V=new O().crossVectors(P,k);C.push([V.x,V.y,V.z])}const T=[0,1,2].map(R=>C.map(x=>x[R])),D=Array(3).fill().map(()=>Array(3).fill(0));for(let R=0;R<3;++R)for(let x=0;x<3;++x){for(let y=0;y<e.length;++y)D[R][x]+=C[y][R]*C[y][x];R===x&&(D[R][x]+=d*d)}let N;try{N=V_(D)}catch{break}const U=C.map(()=>Array(3).fill(0));for(let R=0;R<e.length;++R)for(let x=0;x<3;++x)for(let y=0;y<3;++y)U[R][x]+=T[y][R]*N[y][x];for(let R=0;R<e.length;++R){let x=0;for(let y=0;y<3;++y)x+=U[R][y]*u.getComponent(y);M[R]+=h*x}}return M}function V_(i){const[e,t,n]=i[0],[s,r,a]=i[1],[o,c,l]=i[2],h=r*l-a*c,d=-(s*l-a*o),f=s*c-r*o,p=-(t*l-n*c),M=e*l-n*o,v=-(e*c-t*o),m=t*a-n*r,u=-(e*a-n*s),L=e*r-t*s,C=e*h+t*d+n*f;if(Math.abs(C)<1e-8)throw"singular";return[[h/C,p/C,m/C],[d/C,M/C,u/C],[f/C,v/C,L/C]]}const wn=new qc;wn.background=new tt(0);const Yt=new qt(50,window.innerWidth/window.innerHeight,.01,10);Yt.position.set(1,1,1);const H_=Object.assign({"./pages/box1.html":bh,"./pages/box2.html":Th,"./pages/box3.html":wh,"./pages/box4.html":Ah});function G_(i){const e=`./pages/${i}.html`;return H_[e]??`<h2>No page for ${i}</h2>`}const Mn=new v_({antialias:!0});Mn.setSize(window.innerWidth,window.innerHeight);Mn.shadowMap.enabled=!0;Mn.outputEncoding=void 0;Mn.physicallyCorrectLights=!0;Mn.toneMapping=Ac;Mn.toneMappingExposure=1.2;document.getElementById("app").appendChild(Mn.domElement);const Nn=new y_(Yt,Mn.domElement);Nn.target.set(0,.8,0);Nn.update();new z_().setPath("/hdr/").load("studio_small_09_4k.hdr",i=>{i.mapping=Ur,wn.environment=i,console.log("HDR loaded")});wn.add(new rh(4473924));const $n=new sh(16777215,1);$n.position.set(1,2,2);$n.castShadow=!0;$n.shadow.mapSize.set(2048,2048);$n.shadow.camera.left=-2;$n.shadow.camera.right=2;$n.shadow.camera.top=2;$n.shadow.camera.bottom=-2;$n.shadow.camera.updateProjectionMatrix();wn.add($n);const bc=new Nd,Ga=new Je,_h=[];let xn="idle";const W_=.04;let ln,bi,Wa,Tc,Ds=null,oi,gt=null,Nr=null,Hr=!1;const Ii=document.getElementById("side-panel");let As=!1,Gr=!1;Ii.addEventListener("transitionend",i=>{if(i.propertyName!=="transform"||Ii.classList.contains("open"))return;const{pos:e,tgt:t}=vh(-1,.5);Wr(e,t,.4),xh(50,.4),Hr=!0,xn="return"});Ii.addEventListener("click",i=>{i.target.id==="close-panel"&&(Ii.classList.remove("open"),As=!1,Gr=!1,Hr=!0,xn="return")});const Io=new O(0,.305,.9);let Cn=null;const X_=Yt.position.clone(),q_=Nn.target.clone(),Y_=new O(0,.8,0),j_=Io.clone(),K_=new Jc({color:1118481,metalness:.85,roughness:.15,envMapIntensity:1}),Z_=new $c({color:16777215,roughness:.2,metalness:.05,clearcoat:.4,clearcoatRoughness:.05,envMapIntensity:1.2});function J_(i,e){const t=new dn;oi.getWorldQuaternion(t);const n=e.clone().applyQuaternion(t);return i.clone().sub(n)}function Ar(i,e,t,n,s){const r=new Ot(new zs(.17,.17,.15,48),K_);r.position.set(i,e-.125-.075,t),r.castShadow=r.receiveShadow=!0,wn.add(r);const a=new Jo(.25,.25,.25,5,.02),o=new $c({color:n,roughness:.25,metalness:.1,clearcoat:.3,clearcoatRoughness:.05,envMapIntensity:1.2}),c=new Ot(a,o);c.position.set(i,e,t),c.castShadow=c.receiveShadow=!0,wn.add(c),_h.push(c),c.userData.placed=!1,c.userData.boxID=s}function $_(){Ar(-.7,.7,-.6,5205370,"box1"),Ar(-.25,.7,-.85,7115107,"box2"),Ar(.25,.7,-.85,10249796,"box3"),Ar(.7,.7,-.6,13215339,"box4");const e=new Ot(new zs(.22,.22,.18,64),Z_);e.position.set(0,.18/2,.9),e.castShadow=e.receiveShadow=!0,wn.add(e)}function Wr(i,e,t=1){Cn={fromPos:Yt.position.clone(),toPos:i,fromTgt:Nn.target.clone(),toTgt:e,t:0,dur:t}}let wi=null;function xh(i,e=.4){wi={from:Yt.fov,to:i,t:0,dur:e}}function vh(i,e){const t=new O(1,0,0).applyQuaternion(Yt.quaternion).normalize(),n=Yt.position.distanceTo(Nn.target),s=t.multiplyScalar(n*Math.tan(Dn.degToRad(Yt.fov/2))*e);return{pos:Yt.position.clone().addScaledVector(s,i),tgt:Nn.target.clone().addScaledVector(s,i)}}function Q_(i){const e=Mn.domElement.getBoundingClientRect();Ga.x=(i.clientX-e.left)/e.width*2-1,Ga.y=-((i.clientY-e.top)/e.height)*2+1,bc.setFromCamera(Ga,Yt);const t=bc.intersectObjects(_h.filter(n=>!n.userData.placed));if(t.length&&xn==="idle"){Nr=t[0].object,Ds=Nr.position.clone(),xn="tap",Ii.innerHTML=G_(Nr.userData.boxID),console.log("Phase → tap",Ds);const n=j_.clone().add(new O(0,.2,3));Wr(n,Y_,1.2),Gr=!0}}const Mh=new ph;Mh.convertUpAxis=!1;const yh=new k_;yh.loadMeshCb=(i,e,t)=>Mh.load(i,n=>t(n.scene));function e0(i){const e=new Nt;return e.position.set(0,0,0),i.add(e),e.add(new Ot(new Kr(.15),new Bs({color:16711680}))),e}yh.load("/irb5400_full.urdf",i=>{ln=i,ln.rotation.x=-Math.PI/2,ln.scale.setScalar(.4),ln.traverse(t=>{t.isMesh&&(t.castShadow=t.receiveShadow=!0)}),wn.add(ln),oi=e0(ln.links.link_4),bi=["joint1","joint2","joint3","joint4"],Wa=bi.map(()=>0),$_(),window.addEventListener("click",Q_);const e=new O(0,1,0);Tc=wr(ln,bi,e,oi),Mn.setAnimationLoop(()=>{let t=null;if(xn==="tap"&&Ds)t=wr(ln,bi,Ds,oi);else if(xn==="carry"){const s=gt.userData.plan,r=gt.userData.graspOffsetLocal;let a=null;gt.userData.step==="above"?a=s.hoverCenter:gt.userData.step==="down"?a=s.downCenter:gt.userData.step==="up"&&(a=s.hoverCenter);const o=J_(a,r);t=wr(ln,bi,o,oi),wn.userData.__carryEffTgt=o.clone()}else xn==="return"?(t=wr(ln,bi,e,oi),t&&(xn="idle",Wr(X_,q_,1),Hr&&(Hr=!1,Nn.enabled=!0))):t=Tc;t&&bi.forEach((s,r)=>{const a=Dn.lerp(Wa[r],t[r],.2);ln.setJointValue(s,a),Wa[r]=a}),ln.updateMatrixWorld(!0);const n=new O().setFromMatrixPosition(oi.matrixWorld);if(xn==="tap"&&n.distanceTo(Ds)<W_&&(console.log("Tap reached"),gt=Nr,gt.userData.originalScale=gt.scale.clone(),gt.userData.placed=!0,oi.add(gt),gt.scale.multiplyScalar(1/ln.scale.x),gt.position.set(0,0,.15),gt.userData.graspOffsetLocal=gt.position.clone(),gt.userData.plan={downCenter:Io.clone(),hoverCenter:Io.clone().add(new O(0,.12,0))},gt.userData.step="above",xn="carry",console.log("Phase → carry")),xn==="carry"&&gt?.userData?.plan){const s=gt.userData.plan,r=new O().setFromMatrixPosition(gt.matrixWorld),a=gt.userData.step==="above"?s.hoverCenter:gt.userData.step==="down"?s.downCenter:s.hoverCenter,o=r.distanceTo(a)<.025;gt.userData.step==="above"&&o?(gt.userData.step="down",console.log("Phase → down")):gt.userData.step==="down"&&o?(wn.add(gt),gt.position.copy(s.downCenter),gt.scale.copy(gt.userData.originalScale),gt.userData.step="up",console.log("Cube dropped, Phase → up")):gt.userData.step==="up"&&o&&(gt.userData.plan=null,gt=null,xn="return",console.log("Phase → return"))}if(Cn){Cn.t+=1/60/Cn.dur;const s=Dn.smoothstep(Math.min(Cn.t,1),0,1);if(Yt.position.lerpVectors(Cn.fromPos,Cn.toPos,s),Nn.target.lerpVectors(Cn.fromTgt,Cn.toTgt,s),Nn.update(),wi){wi.t+=1/60/wi.dur;const r=Math.min(wi.t,1);Yt.fov=Dn.lerp(wi.from,wi.to,r),Yt.updateProjectionMatrix()}if(s>=1&&(Cn=null),s>=1)if(Gr&&!As){Ii.classList.add("open"),As=!0,Nn.enabled=!1;const{pos:r,tgt:a}=vh(1,.5);Wr(r,a,.4),xh(30,.4)}else!Gr&&As&&(Ii.classList.remove("open"),As=!1)}Mn.render(wn,Yt)})});window.addEventListener("resize",()=>{Yt.aspect=window.innerWidth/window.innerHeight,Yt.updateProjectionMatrix(),Mn.setSize(window.innerWidth,window.innerHeight)});
