(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Au="177",ns={ROTATE:0,DOLLY:1,PAN:2},Qr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Zm=0,Uh=1,Jm=2,zd=1,Qm=2,Mi=3,Pi=0,dn=1,bn=2,Zi=0,is=1,Ih=2,Nh=3,Fh=4,$m=5,gr=100,e_=101,t_=102,n_=103,i_=104,r_=200,s_=201,a_=202,o_=203,dc=204,pc=205,l_=206,c_=207,u_=208,h_=209,f_=210,d_=211,p_=212,m_=213,__=214,mc=0,_c=1,gc=2,hs=3,vc=4,xc=5,yc=6,Sc=7,Gd=0,g_=1,v_=2,Ji=0,x_=1,y_=2,S_=3,M_=4,T_=5,E_=6,b_=7,Oh="attached",w_="detached",Vd=300,fs=301,ds=302,Mc=303,Tc=304,qo=306,ps=1e3,Xi=1001,Io=1002,sn=1003,Hd=1004,$s=1005,rn=1006,xo=1007,wi=1008,hi=1009,Wd=1010,Xd=1011,fa=1012,Ru=1013,br=1014,Zn=1015,wa=1016,Cu=1017,Pu=1018,da=1020,Yd=35902,jd=1021,qd=1022,kn=1023,pa=1026,ma=1027,Du=1028,Lu=1029,Kd=1030,Uu=1031,Iu=1033,yo=33776,So=33777,Mo=33778,To=33779,Ec=35840,bc=35841,wc=35842,Ac=35843,Rc=36196,Cc=37492,Pc=37496,Dc=37808,Lc=37809,Uc=37810,Ic=37811,Nc=37812,Fc=37813,Oc=37814,kc=37815,Bc=37816,zc=37817,Gc=37818,Vc=37819,Hc=37820,Wc=37821,Eo=36492,Xc=36494,Yc=36495,Zd=36283,jc=36284,qc=36285,Kc=36286,_a=2300,ga=2301,ml=2302,kh=2400,Bh=2401,zh=2402,A_=2500,R_=0,Jd=1,Zc=2,C_=3200,Qd=3201,$d=0,P_=1,Wi="",Gt="srgb",on="srgb-linear",No="linear",lt="srgb",Nr=7680,Gh=519,D_=512,L_=513,U_=514,ep=515,I_=516,N_=517,F_=518,O_=519,Jc=35044,Vh="300 es",Ai=2e3,Fo=2001;class Cr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const n=i[e];if(n!==void 0){const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Hh=1234567;const rs=Math.PI/180,ms=180/Math.PI;function $n(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[s&255]+Yt[s>>8&255]+Yt[s>>16&255]+Yt[s>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function Je(s,e,t){return Math.max(e,Math.min(t,s))}function Nu(s,e){return(s%e+e)%e}function k_(s,e,t,i,n){return i+(s-e)*(n-i)/(t-e)}function B_(s,e,t){return s!==e?(t-s)/(e-s):0}function ra(s,e,t){return(1-t)*s+t*e}function z_(s,e,t,i){return ra(s,e,1-Math.exp(-t*i))}function G_(s,e=1){return e-Math.abs(Nu(s,e*2)-e)}function V_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function H_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function W_(s,e){return s+Math.floor(Math.random()*(e-s+1))}function X_(s,e){return s+Math.random()*(e-s)}function Y_(s){return s*(.5-Math.random())}function j_(s){s!==void 0&&(Hh=s);let e=Hh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function q_(s){return s*rs}function K_(s){return s*ms}function Z_(s){return(s&s-1)===0&&s!==0}function J_(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Q_(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function $_(s,e,t,i,n){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),u=a((e+i)/2),h=r((e-i)/2),f=a((e-i)/2),d=r((i-e)/2),g=a((i-e)/2);switch(n){case"XYX":s.set(o*u,l*h,l*f,o*c);break;case"YZY":s.set(l*f,o*u,l*h,o*c);break;case"ZXZ":s.set(l*h,l*f,o*u,o*c);break;case"XZX":s.set(o*u,l*g,l*d,o*c);break;case"YXY":s.set(l*d,o*u,l*g,o*c);break;case"ZYZ":s.set(l*g,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Kn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function at(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const sa={DEG2RAD:rs,RAD2DEG:ms,generateUUID:$n,clamp:Je,euclideanModulo:Nu,mapLinear:k_,inverseLerp:B_,lerp:ra,damp:z_,pingpong:G_,smoothstep:V_,smootherstep:H_,randInt:W_,randFloat:X_,randFloatSpread:Y_,seededRandom:j_,degToRad:q_,radToDeg:K_,isPowerOfTwo:Z_,ceilPowerOfTwo:J_,floorPowerOfTwo:Q_,setQuaternionFromProperEuler:$_,normalize:at,denormalize:Kn};class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*n+e.x,this.y=r*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fi{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,a,o){let l=i[n+0],c=i[n+1],u=i[n+2],h=i[n+3];const f=r[a+0],d=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let p=1-o;const m=l*f+c*d+u*g+h*_,y=m>=0?1:-1,S=1-m*m;if(S>Number.EPSILON){const b=Math.sqrt(S),w=Math.atan2(b,m*y);p=Math.sin(p*w)/b,o=Math.sin(o*w)/b}const v=o*y;if(l=l*p+f*v,c=c*p+d*v,u=u*p+g*v,h=h*p+_*v,p===1-o){const b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,n,r,a){const o=i[n],l=i[n+1],c=i[n+2],u=i[n+3],h=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-o*d,e[t+2]=c*g+u*d+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(n/2),h=o(r/2),f=l(i/2),d=l(n/2),g=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-n)*d}else if(i>o&&i>h){const d=2*Math.sqrt(1+i-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(n+a)/d,this._z=(r+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-i-h);this._w=(r-c)/d,this._x=(n+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-o);this._w=(a-n)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+n*c-r*l,this._y=n*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-n*o,this._w=a*u-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+n*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=n,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*i+t*this._x,this._y=d*n+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=i*h+this._x*f,this._y=n*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*n-o*i),u=2*(o*t-r*n),h=2*(r*i-a*t);return this.x=t+l*c+a*h-o*u,this.y=i+l*u+o*c-r*h,this.z=n+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _l.copy(this).projectOnVector(e),this.sub(_l)}reflect(e){return this.sub(_l.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _l=new G,Wh=new fi;class Ke{constructor(e,t,i,n,r,a,o,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,c)}set(e,t,i,n,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=n,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],_=n[0],p=n[3],m=n[6],y=n[1],S=n[4],v=n[7],b=n[2],w=n[5],T=n[8];return r[0]=a*_+o*y+l*b,r[3]=a*p+o*S+l*w,r[6]=a*m+o*v+l*T,r[1]=c*_+u*y+h*b,r[4]=c*p+u*S+h*w,r[7]=c*m+u*v+h*T,r[2]=f*_+d*y+g*b,r[5]=f*p+d*S+g*w,r[8]=f*m+d*v+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+n*r*c-n*a*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*r,d=c*r-a*l,g=t*h+i*f+n*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(n*c-u*i)*_,e[2]=(o*i-n*a)*_,e[3]=f*_,e[4]=(u*t-n*l)*_,e[5]=(n*r-o*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(gl.makeScale(e,t)),this}rotate(e){return this.premultiply(gl.makeRotation(-e)),this}translate(e,t){return this.premultiply(gl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gl=new Ke;function tp(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function va(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function eg(){const s=va("canvas");return s.style.display="block",s}const Xh={};function ss(s){s in Xh||(Xh[s]=!0,console.warn(s))}function tg(s,e,t){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function ng(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ig(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Yh=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jh=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rg(){const s={enabled:!0,workingColorSpace:on,spaces:{},convert:function(n,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===lt&&(n.r=Ci(n.r),n.g=Ci(n.g),n.b=Ci(n.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===lt&&(n.r=as(n.r),n.g=as(n.g),n.b=as(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Wi?No:this.spaces[n].transfer},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,a){return n.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,r){return ss("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(n,r)},toWorkingColorSpace:function(n,r){return ss("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(n,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[on]:{primaries:e,whitePoint:i,transfer:No,toXYZ:Yh,fromXYZ:jh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:Yh,fromXYZ:jh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),s}const rt=rg();function Ci(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function as(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Fr;class sg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Fr===void 0&&(Fr=va("canvas")),Fr.width=e.width,Fr.height=e.height;const n=Fr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=Fr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=va("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=Ci(r[a]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ci(t[i]/255)*255):t[i]=Ci(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ag=0;class Fu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ag++}),this.uuid=$n(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(vl(n[a].image)):r.push(vl(n[a]))}else r=vl(n);i.url=r}return t||(e.images[this.uuid]=i),i}}function vl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?sg.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let og=0;const xl=new G;class Pt extends Cr{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,i=Xi,n=Xi,r=rn,a=wi,o=kn,l=hi,c=Pt.DEFAULT_ANISOTROPY,u=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:og++}),this.uuid=$n(),this.name="",this.source=new Fu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(xl).x}get height(){return this.source.getSize(xl).y}get depth(){return this.source.getSize(xl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ps:e.x=e.x-Math.floor(e.x);break;case Xi:e.x=e.x<0?0:1;break;case Io:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ps:e.y=e.y-Math.floor(e.y);break;case Xi:e.y=e.y<0?0:1;break;case Io:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=Vd;Pt.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,i=0,n=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,v=(d+1)/2,b=(m+1)/2,w=(u+f)/4,T=(h+_)/4,A=(g+p)/4;return S>v&&S>b?S<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(S),n=w/i,r=T/i):v>b?v<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(v),i=w/n,r=A/n):b<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(b),i=T/r,n=A/r),this.set(i,n,r,t),this}let y=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(h-_)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lg extends Cr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const n={width:e,height:t,depth:i.depth},r=new Pt(n);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isArrayTexture=this.textures[n].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const n=Object.assign({},e.textures[t].image);this.textures[t].source=new Fu(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wr extends lg{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class np extends Pt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=sn,this.minFilter=sn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cg extends Pt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=sn,this.minFilter=sn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gn{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Yn):Yn.fromBufferAttribute(r,a),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ka.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ka.copy(i.boundingBox)),ka.applyMatrix4(e.matrixWorld),this.union(ka)}const n=e.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vs),Ba.subVectors(this.max,Vs),Or.subVectors(e.a,Vs),kr.subVectors(e.b,Vs),Br.subVectors(e.c,Vs),Fi.subVectors(kr,Or),Oi.subVectors(Br,kr),sr.subVectors(Or,Br);let t=[0,-Fi.z,Fi.y,0,-Oi.z,Oi.y,0,-sr.z,sr.y,Fi.z,0,-Fi.x,Oi.z,0,-Oi.x,sr.z,0,-sr.x,-Fi.y,Fi.x,0,-Oi.y,Oi.x,0,-sr.y,sr.x,0];return!yl(t,Or,kr,Br,Ba)||(t=[1,0,0,0,1,0,0,0,1],!yl(t,Or,kr,Br,Ba))?!1:(za.crossVectors(Fi,Oi),t=[za.x,za.y,za.z],yl(t,Or,kr,Br,Ba))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const _i=[new G,new G,new G,new G,new G,new G,new G,new G],Yn=new G,ka=new Gn,Or=new G,kr=new G,Br=new G,Fi=new G,Oi=new G,sr=new G,Vs=new G,Ba=new G,za=new G,ar=new G;function yl(s,e,t,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){ar.fromArray(s,r);const o=n.x*Math.abs(ar.x)+n.y*Math.abs(ar.y)+n.z*Math.abs(ar.z),l=e.dot(ar),c=t.dot(ar),u=i.dot(ar);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const ug=new Gn,Hs=new G,Sl=new G;class ei{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ug.setFromPoints(e).getCenter(i);let n=0;for(let r=0,a=e.length;r<a;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hs.subVectors(e,this.center);const t=Hs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(Hs,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hs.copy(e.center).add(Sl)),this.expandByPoint(Hs.copy(e.center).sub(Sl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const gi=new G,Ml=new G,Ga=new G,ki=new G,Tl=new G,Va=new G,El=new G;class As{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,t),gi.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Ml.copy(e).add(t).multiplyScalar(.5),Ga.copy(t).sub(e).normalize(),ki.copy(this.origin).sub(Ml);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ga),o=ki.dot(this.direction),l=-ki.dot(Ga),c=ki.lengthSq(),u=Math.abs(1-a*a);let h,f,d,g;if(u>0)if(h=a*l-o,f=a*o-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(Ml).addScaledVector(Ga,f),d}intersectSphere(e,t){gi.subVectors(e.center,this.origin);const i=gi.dot(this.direction),n=gi.dot(gi)-i*i,r=e.radius*e.radius;if(n>r)return null;const a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,n=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,n=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,t,i,n,r){Tl.subVectors(t,e),Va.subVectors(i,e),El.crossVectors(Tl,Va);let a=this.direction.dot(El),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ki.subVectors(this.origin,e);const l=o*this.direction.dot(Va.crossVectors(ki,Va));if(l<0)return null;const c=o*this.direction.dot(Tl.cross(ki));if(c<0||l+c>a)return null;const u=-o*ki.dot(El);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qe{constructor(e,t,i,n,r,a,o,l,c,u,h,f,d,g,_,p){qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,c,u,h,f,d,g,_,p)}set(e,t,i,n,r,a,o,l,c,u,h,f,d,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=n,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/zr.setFromMatrixColumn(e,0).length(),r=1/zr.setFromMatrixColumn(e,1).length(),a=1/zr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*u,d=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*o,t[4]=-a*h,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,d=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=a*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=o*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hg,e,fg)}lookAt(e,t,i){const n=this.elements;return Mn.subVectors(e,t),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Bi.crossVectors(i,Mn),Bi.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Bi.crossVectors(i,Mn)),Bi.normalize(),Ha.crossVectors(Mn,Bi),n[0]=Bi.x,n[4]=Ha.x,n[8]=Mn.x,n[1]=Bi.y,n[5]=Ha.y,n[9]=Mn.y,n[2]=Bi.z,n[6]=Ha.z,n[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],_=i[6],p=i[10],m=i[14],y=i[3],S=i[7],v=i[11],b=i[15],w=n[0],T=n[4],A=n[8],x=n[12],M=n[1],D=n[5],P=n[9],L=n[13],U=n[2],V=n[6],O=n[10],K=n[14],W=n[3],J=n[7],j=n[11],N=n[15];return r[0]=a*w+o*M+l*U+c*W,r[4]=a*T+o*D+l*V+c*J,r[8]=a*A+o*P+l*O+c*j,r[12]=a*x+o*L+l*K+c*N,r[1]=u*w+h*M+f*U+d*W,r[5]=u*T+h*D+f*V+d*J,r[9]=u*A+h*P+f*O+d*j,r[13]=u*x+h*L+f*K+d*N,r[2]=g*w+_*M+p*U+m*W,r[6]=g*T+_*D+p*V+m*J,r[10]=g*A+_*P+p*O+m*j,r[14]=g*x+_*L+p*K+m*N,r[3]=y*w+S*M+v*U+b*W,r[7]=y*T+S*D+v*V+b*J,r[11]=y*A+S*P+v*O+b*j,r[15]=y*x+S*L+v*K+b*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+r*l*h-n*c*h-r*o*f+i*c*f+n*o*d-i*l*d)+_*(+t*l*d-t*c*f+r*a*f-n*a*d+n*c*u-r*l*u)+p*(+t*c*h-t*o*d-r*a*h+i*a*d+r*o*u-i*c*u)+m*(-n*o*u-t*l*h+t*o*f+n*a*h-i*a*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],p=e[14],m=e[15],y=h*p*c-_*f*c+_*l*d-o*p*d-h*l*m+o*f*m,S=g*f*c-u*p*c-g*l*d+a*p*d+u*l*m-a*f*m,v=u*_*c-g*h*c+g*o*d-a*_*d-u*o*m+a*h*m,b=g*h*l-u*_*l-g*o*f+a*_*f+u*o*p-a*h*p,w=t*y+i*S+n*v+r*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=y*T,e[1]=(_*f*r-h*p*r-_*n*d+i*p*d+h*n*m-i*f*m)*T,e[2]=(o*p*r-_*l*r+_*n*c-i*p*c-o*n*m+i*l*m)*T,e[3]=(h*l*r-o*f*r-h*n*c+i*f*c+o*n*d-i*l*d)*T,e[4]=S*T,e[5]=(u*p*r-g*f*r+g*n*d-t*p*d-u*n*m+t*f*m)*T,e[6]=(g*l*r-a*p*r-g*n*c+t*p*c+a*n*m-t*l*m)*T,e[7]=(a*f*r-u*l*r+u*n*c-t*f*c-a*n*d+t*l*d)*T,e[8]=v*T,e[9]=(g*h*r-u*_*r-g*i*d+t*_*d+u*i*m-t*h*m)*T,e[10]=(a*_*r-g*o*r+g*i*c-t*_*c-a*i*m+t*o*m)*T,e[11]=(u*o*r-a*h*r-u*i*c+t*h*c+a*i*d-t*o*d)*T,e[12]=b*T,e[13]=(u*_*n-g*h*n+g*i*f-t*_*f-u*i*p+t*h*p)*T,e[14]=(g*o*n-a*_*n-g*i*l+t*_*l+a*i*p-t*o*p)*T,e[15]=(a*h*n-u*o*n+u*i*l-t*h*l-a*i*f+t*o*f)*T,this}scale(e){const t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,u*o+i,u*l-n*a,0,c*l-n*o,u*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,a){return this.set(1,i,r,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,f=r*c,d=r*u,g=r*h,_=a*u,p=a*h,m=o*h,y=l*c,S=l*u,v=l*h,b=i.x,w=i.y,T=i.z;return n[0]=(1-(_+m))*b,n[1]=(d+v)*b,n[2]=(g-S)*b,n[3]=0,n[4]=(d-v)*w,n[5]=(1-(f+m))*w,n[6]=(p+y)*w,n[7]=0,n[8]=(g+S)*T,n[9]=(p-y)*T,n[10]=(1-(f+_))*T,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let r=zr.set(n[0],n[1],n[2]).length();const a=zr.set(n[4],n[5],n[6]).length(),o=zr.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),e.x=n[12],e.y=n[13],e.z=n[14],jn.copy(this);const c=1/r,u=1/a,h=1/o;return jn.elements[0]*=c,jn.elements[1]*=c,jn.elements[2]*=c,jn.elements[4]*=u,jn.elements[5]*=u,jn.elements[6]*=u,jn.elements[8]*=h,jn.elements[9]*=h,jn.elements[10]*=h,t.setFromRotationMatrix(jn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,n,r,a,o=Ai){const l=this.elements,c=2*r/(t-e),u=2*r/(i-n),h=(t+e)/(t-e),f=(i+n)/(i-n);let d,g;if(o===Ai)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Fo)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,r,a,o=Ai){const l=this.elements,c=1/(t-e),u=1/(i-n),h=1/(a-r),f=(t+e)*c,d=(i+n)*u;let g,_;if(o===Ai)g=(a+r)*h,_=-2*h;else if(o===Fo)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const zr=new G,jn=new qe,hg=new G(0,0,0),fg=new G(1,1,1),Bi=new G,Ha=new G,Mn=new G,qh=new qe,Kh=new fi;class Vt{constructor(e=0,t=0,i=0,n=Vt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],u=n[9],h=n[2],f=n[6],d=n[10];switch(t){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return qh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kh.setFromEuler(this),this.setFromQuaternion(Kh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vt.DEFAULT_ORDER="XYZ";class Ou{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dg=0;const Zh=new G,Gr=new fi,vi=new qe,Wa=new G,Ws=new G,pg=new G,mg=new fi,Jh=new G(1,0,0),Qh=new G(0,1,0),$h=new G(0,0,1),ef={type:"added"},_g={type:"removed"},Vr={type:"childadded",child:null},bl={type:"childremoved",child:null};class xt extends Cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dg++}),this.uuid=$n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new G,t=new Vt,i=new fi,n=new G(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new qe},normalMatrix:{value:new Ke}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ou,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gr.setFromAxisAngle(e,t),this.quaternion.multiply(Gr),this}rotateOnWorldAxis(e,t){return Gr.setFromAxisAngle(e,t),this.quaternion.premultiply(Gr),this}rotateX(e){return this.rotateOnAxis(Jh,e)}rotateY(e){return this.rotateOnAxis(Qh,e)}rotateZ(e){return this.rotateOnAxis($h,e)}translateOnAxis(e,t){return Zh.copy(e).applyQuaternion(this.quaternion),this.position.add(Zh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jh,e)}translateY(e){return this.translateOnAxis(Qh,e)}translateZ(e){return this.translateOnAxis($h,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Wa.copy(e):Wa.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Ws,Wa,this.up):vi.lookAt(Wa,Ws,this.up),this.quaternion.setFromRotationMatrix(vi),n&&(vi.extractRotation(n.matrixWorld),Gr.setFromRotationMatrix(vi),this.quaternion.premultiply(Gr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ef),Vr.child=e,this.dispatchEvent(Vr),Vr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_g),bl.child=e,this.dispatchEvent(bl),bl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ef),Vr.child=e,this.dispatchEvent(Vr),Vr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,e,pg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,mg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));n.material=o}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}xt.DEFAULT_UP=new G(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qn=new G,xi=new G,wl=new G,yi=new G,Hr=new G,Wr=new G,tf=new G,Al=new G,Rl=new G,Cl=new G,Pl=new st,Dl=new st,Ll=new st;class On{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),qn.subVectors(e,t),n.cross(qn);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){qn.subVectors(n,t),xi.subVectors(i,t),wl.subVectors(e,t);const a=qn.dot(qn),o=qn.dot(xi),l=qn.dot(wl),c=xi.dot(xi),u=xi.dot(wl),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-o*u)*f,g=(a*u-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(e,t,i,n,r,a,o,l){return this.getBarycoord(e,t,i,n,yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,yi.x),l.addScaledVector(a,yi.y),l.addScaledVector(o,yi.z),l)}static getInterpolatedAttribute(e,t,i,n,r,a){return Pl.setScalar(0),Dl.setScalar(0),Ll.setScalar(0),Pl.fromBufferAttribute(e,t),Dl.fromBufferAttribute(e,i),Ll.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(Pl,r.x),a.addScaledVector(Dl,r.y),a.addScaledVector(Ll,r.z),a}static isFrontFacing(e,t,i,n){return qn.subVectors(i,t),xi.subVectors(e,t),qn.cross(xi).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),qn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return On.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,r){return On.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,r=this.c;let a,o;Hr.subVectors(n,i),Wr.subVectors(r,i),Al.subVectors(e,i);const l=Hr.dot(Al),c=Wr.dot(Al);if(l<=0&&c<=0)return t.copy(i);Rl.subVectors(e,n);const u=Hr.dot(Rl),h=Wr.dot(Rl);if(u>=0&&h<=u)return t.copy(n);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Hr,a);Cl.subVectors(e,r);const d=Hr.dot(Cl),g=Wr.dot(Cl);if(g>=0&&d<=g)return t.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Wr,o);const p=u*g-d*h;if(p<=0&&h-u>=0&&d-g>=0)return tf.subVectors(r,n),o=(h-u)/(h-u+(d-g)),t.copy(n).addScaledVector(tf,o);const m=1/(p+_+f);return a=_*m,o=f*m,t.copy(i).addScaledVector(Hr,a).addScaledVector(Wr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ip={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},Xa={h:0,s:0,l:0};function Ul(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=rt.workingColorSpace){if(e=Nu(e,1),t=Je(t,0,1),i=Je(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Ul(a,r,e+1/3),this.g=Ul(a,r,e),this.b=Ul(a,r,e-1/3)}return rt.colorSpaceToWorking(this,n),this}setStyle(e,t=Gt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){const i=ip[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}copyLinearToSRGB(e){return this.r=as(e.r),this.g=as(e.g),this.b=as(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return rt.workingToColorSpace(jt.copy(this),e),Math.round(Je(jt.r*255,0,255))*65536+Math.round(Je(jt.g*255,0,255))*256+Math.round(Je(jt.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(jt.copy(this),t);const i=jt.r,n=jt.g,r=jt.b,a=Math.max(i,n,r),o=Math.min(i,n,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(n-r)/h+(n<r?6:0);break;case n:l=(r-i)/h+2;break;case r:l=(i-n)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Gt){rt.workingToColorSpace(jt.copy(this),e);const t=jt.r,i=jt.g,n=jt.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(Xa);const i=ra(zi.h,Xa.h,t),n=ra(zi.s,Xa.s,t),r=ra(zi.l,Xa.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new je;je.NAMES=ip;let gg=0;class ci extends Cr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gg++}),this.uuid=$n(),this.name="",this.type="Material",this.blending=is,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dc,this.blendDst=pc,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nr,this.stencilZFail=Nr,this.stencilZPass=Nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==is&&(i.blending=this.blending),this.side!==Pi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==dc&&(i.blendSrc=this.blendSrc),this.blendDst!==pc&&(i.blendDst=this.blendDst),this.blendEquation!==gr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==hs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Nr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Nr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Nr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=n(e.textures),a=n(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Jn extends ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vt,this.combine=Gd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new G,Ya=new We;let vg=0;class an{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Jc,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ya.fromBufferAttribute(this,t),Ya.applyMatrix3(e),this.setXY(t,Ya.x,Ya.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Kn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=at(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Kn(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Kn(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Kn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Kn(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),i=at(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),i=at(i,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),i=at(i,this.array),n=at(n,this.array),r=at(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jc&&(e.usage=this.usage),e}}class rp extends an{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class sp extends an{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Zt extends an{constructor(e,t,i){super(new Float32Array(e),t,i)}}let xg=0;const In=new qe,Il=new xt,Xr=new G,Tn=new Gn,Xs=new Gn,Ft=new G;class xn extends Cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xg++}),this.uuid=$n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tp(e)?sp:rp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ke().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,t,i){return In.makeTranslation(e,t,i),this.applyMatrix4(In),this}scale(e,t,i){return In.makeScale(e,t,i),this.applyMatrix4(In),this}lookAt(e){return Il.lookAt(e),Il.updateMatrix(),this.applyMatrix4(Il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xr).negate(),this.translate(Xr.x,Xr.y,Xr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let n=0,r=e.length;n<r;n++){const a=e[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Zt(i,3))}else{const i=Math.min(e.length,t.count);for(let n=0;n<i;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const r=t[i];Tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Xs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(Tn.min,Xs.min),Tn.expandByPoint(Ft),Ft.addVectors(Tn.max,Xs.max),Tn.expandByPoint(Ft)):(Tn.expandByPoint(Xs.min),Tn.expandByPoint(Xs.max))}Tn.getCenter(i);let n=0;for(let r=0,a=e.count;r<a;r++)Ft.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(Ft));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ft.fromBufferAttribute(o,c),l&&(Xr.fromBufferAttribute(e,c),Ft.add(Xr)),n=Math.max(n,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,n=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let A=0;A<i.count;A++)o[A]=new G,l[A]=new G;const c=new G,u=new G,h=new G,f=new We,d=new We,g=new We,_=new G,p=new G;function m(A,x,M){c.fromBufferAttribute(i,A),u.fromBufferAttribute(i,x),h.fromBufferAttribute(i,M),f.fromBufferAttribute(r,A),d.fromBufferAttribute(r,x),g.fromBufferAttribute(r,M),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(D),p.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(D),o[A].add(_),o[x].add(_),o[M].add(_),l[A].add(p),l[x].add(p),l[M].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let A=0,x=y.length;A<x;++A){const M=y[A],D=M.start,P=M.count;for(let L=D,U=D+P;L<U;L+=3)m(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const S=new G,v=new G,b=new G,w=new G;function T(A){b.fromBufferAttribute(n,A),w.copy(b);const x=o[A];S.copy(x),S.sub(b.multiplyScalar(b.dot(x))).normalize(),v.crossVectors(w,x);const D=v.dot(l[A])<0?-1:1;a.setXYZW(A,S.x,S.y,S.z,D)}for(let A=0,x=y.length;A<x;++A){const M=y[A],D=M.start,P=M.count;for(let L=D,U=D+P;L<U;L+=3)T(e.getX(L+0)),T(e.getX(L+1)),T(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const n=new G,r=new G,a=new G,o=new G,l=new G,c=new G,u=new G,h=new G;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);n.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),u.subVectors(a,r),h.subVectors(n,r),u.cross(h),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)n.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(n,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let m=0;m<u;m++)f[g++]=c[d++]}return new an(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xn,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(n[l]=u,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const n=e.attributes;for(const c in n){const u=n[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nf=new qe,or=new As,ja=new ei,rf=new G,qa=new G,Ka=new G,Za=new G,Nl=new G,Ja=new G,sf=new G,Qa=new G;class Ct extends xt{constructor(e=new xn,t=new Jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(r&&o){Ja.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(Nl.fromBufferAttribute(h,e),a?Ja.addScaledVector(Nl,u):Ja.addScaledVector(Nl.sub(t),u))}t.add(Ja)}return t}raycast(e,t){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ja.copy(i.boundingSphere),ja.applyMatrix4(r),or.copy(e.ray).recast(e.near),!(ja.containsPoint(or.origin)===!1&&(or.intersectSphere(ja,rf)===null||or.origin.distanceToSquared(rf)>(e.far-e.near)**2))&&(nf.copy(r).invert(),or.copy(e.ray).applyMatrix4(nf),!(i.boundingBox!==null&&or.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,or)))}_computeIntersections(e,t,i){let n;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=a[p.materialIndex],y=Math.max(p.start,d.start),S=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let v=y,b=S;v<b;v+=3){const w=o.getX(v),T=o.getX(v+1),A=o.getX(v+2);n=$a(this,m,e,i,c,u,h,w,T,A),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const y=o.getX(p),S=o.getX(p+1),v=o.getX(p+2);n=$a(this,a,e,i,c,u,h,y,S,v),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=a[p.materialIndex],y=Math.max(p.start,d.start),S=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let v=y,b=S;v<b;v+=3){const w=v,T=v+1,A=v+2;n=$a(this,m,e,i,c,u,h,w,T,A),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const y=p,S=p+1,v=p+2;n=$a(this,a,e,i,c,u,h,y,S,v),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}}}function yg(s,e,t,i,n,r,a,o){let l;if(e.side===dn?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,e.side===Pi,o),l===null)return null;Qa.copy(o),Qa.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Qa);return c<t.near||c>t.far?null:{distance:c,point:Qa.clone(),object:s}}function $a(s,e,t,i,n,r,a,o,l,c){s.getVertexPosition(o,qa),s.getVertexPosition(l,Ka),s.getVertexPosition(c,Za);const u=yg(s,e,t,i,qa,Ka,Za,sf);if(u){const h=new G;On.getBarycoord(sf,qa,Ka,Za,h),n&&(u.uv=On.getInterpolatedAttribute(n,o,l,c,h,new We)),r&&(u.uv1=On.getInterpolatedAttribute(r,o,l,c,h,new We)),a&&(u.normal=On.getInterpolatedAttribute(a,o,l,c,h,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new G,materialIndex:0};On.getNormal(qa,Ka,Za,f.normal),u.face=f,u.barycoord=h}return u}class Aa extends xn{constructor(e=1,t=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};const o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,n,a,2),g("x","z","y",1,-1,e,i,-t,n,a,3),g("x","y","z",1,-1,e,t,i,n,r,4),g("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(u,3)),this.setAttribute("uv",new Zt(h,2));function g(_,p,m,y,S,v,b,w,T,A,x){const M=v/T,D=b/A,P=v/2,L=b/2,U=w/2,V=T+1,O=A+1;let K=0,W=0;const J=new G;for(let j=0;j<O;j++){const N=j*D-L;for(let X=0;X<V;X++){const ee=X*M-P;J[_]=ee*y,J[p]=N*S,J[m]=U,c.push(J.x,J.y,J.z),J[_]=0,J[p]=0,J[m]=w>0?1:-1,u.push(J.x,J.y,J.z),h.push(X/T),h.push(1-j/A),K+=1}}for(let j=0;j<A;j++)for(let N=0;N<T;N++){const X=f+N+V*j,ee=f+N+V*(j+1),F=f+(N+1)+V*(j+1),B=f+(N+1)+V*j;l.push(X,ee,B),l.push(ee,F,B),W+=6}o.addGroup(d,W,x),d+=W,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Aa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _s(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const n=s[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function en(s){const e={};for(let t=0;t<s.length;t++){const i=_s(s[t]);for(const n in i)e[n]=i[n]}return e}function Sg(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ap(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const op={clone:_s,merge:en};var Mg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class er extends ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mg,this.fragmentShader=Tg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_s(e.uniforms),this.uniformsGroups=Sg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class lp extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=Ai}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gi=new G,af=new We,of=new We;class tn extends lp{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ms*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ms*2*Math.atan(Math.tan(rs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z)}getViewSize(e,t){return this.getViewBounds(e,af,of),t.subVectors(of,af)}setViewOffset(e,t,i,n,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(rs*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Yr=-90,jr=1;class Eg extends xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new tn(Yr,jr,e,t);n.layers=this.layers,this.add(n);const r=new tn(Yr,jr,e,t);r.layers=this.layers,this.add(r);const a=new tn(Yr,jr,e,t);a.layers=this.layers,this.add(a);const o=new tn(Yr,jr,e,t);o.layers=this.layers,this.add(o);const l=new tn(Yr,jr,e,t);l.layers=this.layers,this.add(l);const c=new tn(Yr,jr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Ai)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fo)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,r),e.setRenderTarget(i,1,n),e.render(t,a),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,n),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class cp extends Pt{constructor(e=[],t=fs,i,n,r,a,o,l,c,u){super(e,t,i,n,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bg extends wr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new cp(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Aa(5,5,5),r=new er({name:"CubemapFromEquirect",uniforms:_s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:Zi});r.uniforms.tEquirect.value=t;const a=new Ct(n,r),o=t.minFilter;return t.minFilter===wi&&(t.minFilter=rn),new Eg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(r)}}class oi extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wg={type:"move"};class Fl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wg)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new oi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class ku{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new je(e),this.near=t,this.far=i}clone(){return new ku(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ag extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vt,this.environmentIntensity=1,this.environmentRotation=new Vt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Rg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Jc,this.updateRanges=[],this.version=0,this.uuid=$n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,r=this.stride;n<r;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $t=new G;class Bu{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Kn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=at(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Kn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Kn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Kn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Kn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),i=at(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),i=at(i,this.array),n=at(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),i=at(i,this.array),n=at(n,this.array),r=at(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return new an(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Bu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const lf=new G,cf=new st,uf=new st,Cg=new G,hf=new qe,eo=new G,Ol=new ei,ff=new qe,kl=new As;class Pg extends Ct{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Oh,this.bindMatrix=new qe,this.bindMatrixInverse=new qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Gn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,eo),this.boundingBox.expandByPoint(eo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ei),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,eo),this.boundingSphere.expandByPoint(eo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ol.copy(this.boundingSphere),Ol.applyMatrix4(n),e.ray.intersectsSphere(Ol)!==!1&&(ff.copy(n).invert(),kl.copy(e.ray).applyMatrix4(ff),!(this.boundingBox!==null&&kl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,kl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new st,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Oh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===w_?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,n=this.geometry;cf.fromBufferAttribute(n.attributes.skinIndex,e),uf.fromBufferAttribute(n.attributes.skinWeight,e),lf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=uf.getComponent(r);if(a!==0){const o=cf.getComponent(r);hf.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(Cg.copy(lf).applyMatrix4(hf),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class up extends xt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class hp extends Pt{constructor(e=null,t=1,i=1,n,r,a,o,l,c=sn,u=sn,h,f){super(null,a,o,l,c,u,n,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const df=new qe,Dg=new qe;class zu{constructor(e=[],t=[]){this.uuid=$n(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new qe;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Dg;df.multiplyMatrices(o,t[r]),df.toArray(i,r*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new zu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new hp(t,e,e,kn,Zn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){const r=e.bones[i];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new up),this.bones.push(a),this.boneInverses.push(new qe().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let n=0,r=t.length;n<r;n++){const a=t[n];e.bones.push(a.uuid);const o=i[n];e.boneInverses.push(o.toArray())}return e}}class Oo extends an{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const qr=new qe,pf=new qe,to=[],mf=new Gn,Lg=new qe,Ys=new Ct,js=new ei;class Ug extends Ct{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Oo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Lg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Gn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,qr),mf.copy(e.boundingBox).applyMatrix4(qr),this.boundingBox.union(mf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ei),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,qr),js.copy(e.boundingSphere).applyMatrix4(qr),this.boundingSphere.union(js)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(e,t){const i=this.matrixWorld,n=this.count;if(Ys.geometry=this.geometry,Ys.material=this.material,Ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),js.copy(this.boundingSphere),js.applyMatrix4(i),e.ray.intersectsSphere(js)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,qr),pf.multiplyMatrices(i,qr),Ys.matrixWorld=pf,Ys.raycast(e,to);for(let a=0,o=to.length;a<o;a++){const l=to[a];l.instanceId=r,l.object=this,t.push(l)}to.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Oo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new hp(new Float32Array(n*this.count),n,this.count,Du,Zn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=n*e;r[l]=o,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Bl=new G,Ig=new G,Ng=new Ke;class Hi{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=Bl.subVectors(i,t).cross(Ig.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Bl),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ng.getNormalMatrix(e),n=this.coplanarPoint(Bl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lr=new ei,no=new G;class Gu{constructor(e=new Hi,t=new Hi,i=new Hi,n=new Hi,r=new Hi,a=new Hi){this.planes=[e,t,i,n,r,a]}set(e,t,i,n,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ai){const i=this.planes,n=e.elements,r=n[0],a=n[1],o=n[2],l=n[3],c=n[4],u=n[5],h=n[6],f=n[7],d=n[8],g=n[9],_=n[10],p=n[11],m=n[12],y=n[13],S=n[14],v=n[15];if(i[0].setComponents(l-r,f-c,p-d,v-m).normalize(),i[1].setComponents(l+r,f+c,p+d,v+m).normalize(),i[2].setComponents(l+a,f+u,p+g,v+y).normalize(),i[3].setComponents(l-a,f-u,p-g,v-y).normalize(),i[4].setComponents(l-o,f-h,p-_,v-S).normalize(),t===Ai)i[5].setComponents(l+o,f+h,p+_,v+S).normalize();else if(t===Fo)i[5].setComponents(o,h,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),lr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(e){return lr.center.set(0,0,0),lr.radius=.7071067811865476,lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(no.x=n.normal.x>0?e.max.x:e.min.x,no.y=n.normal.y>0?e.max.y:e.min.y,no.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(no)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ko extends ci{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ko=new G,Bo=new G,_f=new qe,qs=new As,io=new ei,zl=new G,gf=new G;class Vu extends xt{constructor(e=new xn,t=new Ko){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,r=t.count;n<r;n++)ko.fromBufferAttribute(t,n-1),Bo.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=ko.distanceTo(Bo);e.setAttribute("lineDistance",new Zt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),io.copy(i.boundingSphere),io.applyMatrix4(n),io.radius+=r,e.ray.intersectsSphere(io)===!1)return;_f.copy(n).invert(),qs.copy(e.ray).applyMatrix4(_f);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=d,p=g-1;_<p;_+=c){const m=u.getX(_),y=u.getX(_+1),S=ro(this,e,qs,l,m,y,_);S&&t.push(S)}if(this.isLineLoop){const _=u.getX(g-1),p=u.getX(d),m=ro(this,e,qs,l,_,p,g-1);m&&t.push(m)}}else{const d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=d,p=g-1;_<p;_+=c){const m=ro(this,e,qs,l,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){const _=ro(this,e,qs,l,g-1,d,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ro(s,e,t,i,n,r,a){const o=s.geometry.attributes.position;if(ko.fromBufferAttribute(o,n),Bo.fromBufferAttribute(o,r),t.distanceSqToSegment(ko,Bo,zl,gf)>i)return;zl.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(zl);if(!(c<e.near||c>e.far))return{distance:c,point:gf.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const vf=new G,xf=new G;class Hu extends Vu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,r=t.count;n<r;n+=2)vf.fromBufferAttribute(t,n),xf.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+vf.distanceTo(xf);e.setAttribute("lineDistance",new Zt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Fg extends Vu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class fp extends ci{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const yf=new qe,Qc=new As,so=new ei,ao=new G;class Og extends xt{constructor(e=new xn,t=new fp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),so.copy(i.boundingSphere),so.applyMatrix4(n),so.radius+=r,e.ray.intersectsSphere(so)===!1)return;yf.copy(n).invert(),Qc.copy(e.ray).applyMatrix4(yf);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,_=d;g<_;g++){const p=c.getX(g);ao.fromBufferAttribute(h,p),Sf(ao,p,l,n,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let g=f,_=d;g<_;g++)ao.fromBufferAttribute(h,g),Sf(ao,g,l,n,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Sf(s,e,t,i,n,r,a){const o=Qc.distanceSqToPoint(s);if(o<t){const l=new G;Qc.closestPointToPoint(s,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class dp extends Pt{constructor(e,t,i=br,n,r,a,o=sn,l=sn,c,u=pa,h=1){if(u!==pa&&u!==ma)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,n,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Wu extends xn{constructor(e=1,t=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new G,u=new We;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const d=i+h/t*n;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[f]/e+1)/2,u.y=(a[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Zt(a,3)),this.setAttribute("normal",new Zt(o,3)),this.setAttribute("uv",new Zt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wu(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Zo extends xn{constructor(e=1,t=1,i=1,n=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;n=Math.floor(n),r=Math.floor(r);const u=[],h=[],f=[],d=[];let g=0;const _=[],p=i/2;let m=0;y(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new Zt(h,3)),this.setAttribute("normal",new Zt(f,3)),this.setAttribute("uv",new Zt(d,2));function y(){const v=new G,b=new G;let w=0;const T=(t-e)/i;for(let A=0;A<=r;A++){const x=[],M=A/r,D=M*(t-e)+e;for(let P=0;P<=n;P++){const L=P/n,U=L*l+o,V=Math.sin(U),O=Math.cos(U);b.x=D*V,b.y=-M*i+p,b.z=D*O,h.push(b.x,b.y,b.z),v.set(V,T,O).normalize(),f.push(v.x,v.y,v.z),d.push(L,1-M),x.push(g++)}_.push(x)}for(let A=0;A<n;A++)for(let x=0;x<r;x++){const M=_[x][A],D=_[x+1][A],P=_[x+1][A+1],L=_[x][A+1];(e>0||x!==0)&&(u.push(M,D,L),w+=3),(t>0||x!==r-1)&&(u.push(D,P,L),w+=3)}c.addGroup(m,w,0),m+=w}function S(v){const b=g,w=new We,T=new G;let A=0;const x=v===!0?e:t,M=v===!0?1:-1;for(let P=1;P<=n;P++)h.push(0,p*M,0),f.push(0,M,0),d.push(.5,.5),g++;const D=g;for(let P=0;P<=n;P++){const U=P/n*l+o,V=Math.cos(U),O=Math.sin(U);T.x=x*O,T.y=p*M,T.z=x*V,h.push(T.x,T.y,T.z),f.push(0,M,0),w.x=V*.5+.5,w.y=O*.5*M+.5,d.push(w.x,w.y),g++}for(let P=0;P<n;P++){const L=b+P,U=D+P;v===!0?u.push(U,U+1,L):u.push(U+1,U,L),A+=3}c.addGroup(m,A,v===!0?1:2),m+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Jo extends Zo{constructor(e=1,t=1,i=32,n=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Jo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const oo=new G,lo=new G,Gl=new G,co=new On;class pp extends xn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const n=Math.pow(10,4),r=Math.cos(rs*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:p,c:m}=co;if(_.fromBufferAttribute(o,c[0]),p.fromBufferAttribute(o,c[1]),m.fromBufferAttribute(o,c[2]),co.getNormal(Gl),h[0]=`${Math.round(_.x*n)},${Math.round(_.y*n)},${Math.round(_.z*n)}`,h[1]=`${Math.round(p.x*n)},${Math.round(p.y*n)},${Math.round(p.z*n)}`,h[2]=`${Math.round(m.x*n)},${Math.round(m.y*n)},${Math.round(m.z*n)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let y=0;y<3;y++){const S=(y+1)%3,v=h[y],b=h[S],w=co[u[y]],T=co[u[S]],A=`${v}_${b}`,x=`${b}_${v}`;x in f&&f[x]?(Gl.dot(f[x].normal)<=r&&(d.push(w.x,w.y,w.z),d.push(T.x,T.y,T.z)),f[x]=null):A in f||(f[A]={index0:c[y],index1:c[S],normal:Gl.clone()})}}for(const g in f)if(f[g]){const{index0:_,index1:p}=f[g];oo.fromBufferAttribute(o,_),lo.fromBufferAttribute(o,p),d.push(oo.x,oo.y,oo.z),d.push(lo.x,lo.y,lo.z)}this.setAttribute("position",new Zt(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class ir extends xn{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,u=l+1,h=e/o,f=t/l,d=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const y=m*f-a;for(let S=0;S<c;S++){const v=S*h-r;g.push(v,-y,0),_.push(0,0,1),p.push(S/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){const S=y+c*m,v=y+c*(m+1),b=y+1+c*(m+1),w=y+1+c*m;d.push(S,v,w),d.push(v,b,w)}this.setIndex(d),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(_,3)),this.setAttribute("uv",new Zt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ir(e.width,e.height,e.widthSegments,e.heightSegments)}}class Xu extends ci{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$d,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class pi extends Xu{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new We(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class mp extends ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=C_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _p extends ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function uo(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function kg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Bg(s){function e(n,r){return s[n]-s[r]}const t=s.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function Mf(s,e,t){const i=s.length,n=new s.constructor(i);for(let r=0,a=0;a!==i;++r){const o=t[r]*e;for(let l=0;l!==e;++l)n[a++]=s[o+l]}return n}function gp(s,e,t,i){let n=1,r=s[0];for(;r!==void 0&&r[i]===void 0;)r=s[n++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[n++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[n++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=s[n++];while(r!==void 0)}class Ra{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],r=t[i-1];e:{t:{let a;n:{i:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=t[++i],e<n)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=t[--i-1],e>=r)break t}a=i,i=0;break n}break e}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let a=0;a!==n;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class zg extends Ra{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kh,endingEnd:kh}}intervalChanged_(e,t,i){const n=this.parameterPositions;let r=e-2,a=e+1,o=n[r],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Bh:r=e,o=2*t-i;break;case zh:r=n.length-2,o=t+n[r]-n[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Bh:a=e,l=2*i-t;break;case zh:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,i,n){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-t)/(n-t),_=g*g,p=_*g,m=-f*p+2*f*_-f*g,y=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*g+1,S=(-1-d)*p+(1.5+d)*_+.5*g,v=d*p-d*_;for(let b=0;b!==o;++b)r[b]=m*a[u+b]+y*a[c+b]+S*a[l+b]+v*a[h+b];return r}}class Gg extends Ra{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(n-t),h=1-u;for(let f=0;f!==o;++f)r[f]=a[c+f]*h+a[l+f]*u;return r}}class Vg extends Ra{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class ti{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=uo(t,this.TimeBufferType),this.values=uo(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:uo(e.times,Array),values:uo(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Vg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Gg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new zg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case _a:t=this.InterpolantFactoryMethodDiscrete;break;case ga:t=this.InterpolantFactoryMethodLinear;break;case ml:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _a;case this.InterpolantFactoryMethodLinear:return ga;case this.InterpolantFactoryMethodSmooth:return ml}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){const i=this.times,n=i.length;let r=0,a=n-1;for(;r!==n&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==n){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&kg(n))for(let o=0,l=n.length;o!==l;++o){const c=n[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===ml,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(n)l=!0;else{const h=o*i,f=h-i,d=h+i;for(let g=0;g!==i;++g){const _=t[h+g];if(_!==t[f+g]||_!==t[d+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*i,f=a*i;for(let d=0;d!==i;++d)t[f+d]=t[h+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}}ti.prototype.ValueTypeName="";ti.prototype.TimeBufferType=Float32Array;ti.prototype.ValueBufferType=Float32Array;ti.prototype.DefaultInterpolation=ga;class Rs extends ti{constructor(e,t,i){super(e,t,i)}}Rs.prototype.ValueTypeName="bool";Rs.prototype.ValueBufferType=Array;Rs.prototype.DefaultInterpolation=_a;Rs.prototype.InterpolantFactoryMethodLinear=void 0;Rs.prototype.InterpolantFactoryMethodSmooth=void 0;class vp extends ti{constructor(e,t,i,n){super(e,t,i,n)}}vp.prototype.ValueTypeName="color";class gs extends ti{constructor(e,t,i,n){super(e,t,i,n)}}gs.prototype.ValueTypeName="number";class Hg extends Ra{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t);let c=e*o;for(let u=c+o;c!==u;c+=4)fi.slerpFlat(r,0,a,c-o,a,c,l);return r}}class vs extends ti{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new Hg(this.times,this.values,this.getValueSize(),e)}}vs.prototype.ValueTypeName="quaternion";vs.prototype.InterpolantFactoryMethodSmooth=void 0;class Cs extends ti{constructor(e,t,i){super(e,t,i)}}Cs.prototype.ValueTypeName="string";Cs.prototype.ValueBufferType=Array;Cs.prototype.DefaultInterpolation=_a;Cs.prototype.InterpolantFactoryMethodLinear=void 0;Cs.prototype.InterpolantFactoryMethodSmooth=void 0;class xs extends ti{constructor(e,t,i,n){super(e,t,i,n)}}xs.prototype.ValueTypeName="vector";class Wg{constructor(e="",t=-1,i=[],n=A_){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=$n(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,n=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(Yg(i[a]).scale(n));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=i.length;r!==a;++r)t.push(ti.toJSON(i[r]));return n}static CreateFromMorphTargetSequence(e,t,i,n){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=Bg(l);l=Mf(l,1,u),c=Mf(c,1,u),!n&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new gs(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const n={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=n[h];f||(n[h]=f=[]),f.push(c)}}const a=[];for(const o in n)a.push(this.CreateFromMorphTargetSequence(o,n[o],t,i));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,f,d,g,_){if(d.length!==0){const p=[],m=[];gp(d,p,m,g),p.length!==0&&_.push(new h(f,p,m))}},n=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const p=[],m=[];for(let y=0;y!==f[g].morphTargets.length;++y){const S=f[g];p.push(S.time),m.push(S.morphTarget===_?1:0)}n.push(new gs(".morphTargetInfluence["+_+"]",p,m))}l=d.length*a}else{const d=".bones["+t[h].name+"]";i(xs,d+".position",f,"pos",n),i(vs,d+".quaternion",f,"rot",n),i(xs,d+".scale",f,"scl",n)}}return n.length===0?null:new this(r,l,n,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,n=e.length;i!==n;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Xg(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return gs;case"vector":case"vector2":case"vector3":case"vector4":return xs;case"color":return vp;case"quaternion":return vs;case"bool":case"boolean":return Rs;case"string":return Cs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Yg(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Xg(s.type);if(s.times===void 0){const t=[],i=[];gp(s.keys,t,i,"value"),s.times=t,s.values=i}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Yi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class xp{constructor(e,t,i){const n=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,r===!1&&n.onStart!==void 0&&n.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,n.onProgress!==void 0&&n.onProgress(u,a,o),a===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(u){n.onError!==void 0&&n.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const jg=new xp;class Ps{constructor(e){this.manager=e!==void 0?e:jg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ps.DEFAULT_MATERIAL_NAME="__DEFAULT";const Si={};class qg extends Error{constructor(e,t){super(e),this.response=t}}class yp extends Ps{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Yi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Si[e]!==void 0){Si[e].push({onLoad:t,onProgress:i,onError:n});return}Si[e]=[],Si[e].push({onLoad:t,onProgress:i,onError:n});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Si[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let _=0;const p=new ReadableStream({start(m){y();function y(){h.read().then(({done:S,value:v})=>{if(S)m.close();else{_+=v.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let w=0,T=u.length;w<T;w++){const A=u[w];A.onProgress&&A.onProgress(b)}m.enqueue(v),y()}},S=>{m.error(S)})}}});return new Response(p)}else throw new qg(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Yi.add(e,c);const u=Si[e];delete Si[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Si[e];if(u===void 0)throw this.manager.itemError(e),c;delete Si[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Kg extends Ps{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Yi.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=va("img");function l(){u(),Yi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),n&&n(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class Zg extends Ps{constructor(e){super(e)}load(e,t,i,n){const r=new Pt,a=new Kg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,n),r}}class Qo extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Vl=new qe,Tf=new G,Ef=new G;class Yu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.mapType=hi,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gu,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Tf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Tf),Ef.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ef),t.updateMatrixWorld(),Vl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Vl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Jg extends Yu{constructor(){super(new tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=ms*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||n!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=n,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Qg extends Qo{constructor(e,t,i=0,n=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.distance=i,this.angle=n,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Jg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const bf=new qe,Ks=new G,Hl=new G;class $g extends Yu{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new We(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new G(1,0,0),new G(-1,0,0),new G(0,0,1),new G(0,0,-1),new G(0,1,0),new G(0,-1,0)],this._cubeUps=[new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,0,1),new G(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,n=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ks.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ks),Hl.copy(i.position),Hl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Hl),i.updateMatrixWorld(),n.makeTranslation(-Ks.x,-Ks.y,-Ks.z),bf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bf)}}class e0 extends Qo{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new $g}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ju extends lp{constructor(e=-1,t=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class t0 extends Yu{constructor(){super(new ju(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sp extends Qo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new t0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class n0 extends Qo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class aa{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class i0 extends xn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const Wl=new WeakMap;class r0 extends Ps{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Yi.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{if(Wl.has(a)===!0)n&&n(Wl.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Yi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){n&&n(c),Wl.set(l,c),Yi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Yi.add(e,l),r.manager.itemStart(e)}}class s0 extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const qu="\\[\\]\\.:\\/",a0=new RegExp("["+qu+"]","g"),Ku="[^"+qu+"]",o0="[^"+qu.replace("\\.","")+"]",l0=/((?:WC+[\/:])*)/.source.replace("WC",Ku),c0=/(WCOD+)?/.source.replace("WCOD",o0),u0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ku),h0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ku),f0=new RegExp("^"+l0+c0+u0+h0+"$"),d0=["material","materials","bones","map"];class p0{constructor(e,t,i){const n=i||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class ot{constructor(e,t,i){this.path=t,this.parsedPath=i||ot.parseTrackName(t),this.node=ot.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new ot.Composite(e,t,i):new ot(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(a0,"")}static parseTrackName(e){const t=f0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const r=i.nodeName.substring(n+1);d0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,n=t.propertyName;let r=t.propertyIndex;if(e||(e=ot.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[n];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ot.Composite=p0;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const wf=new qe;class m0{constructor(e,t,i=0,n=1/0){this.ray=new As(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new Ou,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return wf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wf),this}intersectObject(e,t=!0,i=[]){return $c(e,this,i,t),i.sort(Af),i}intersectObjects(e,t=!0,i=[]){for(let n=0,r=e.length;n<r;n++)$c(e[n],this,i,t);return i.sort(Af),i}}function Af(s,e){return s.distance-e.distance}function $c(s,e,t,i){let n=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)$c(r[a],e,t,!0)}}class Rf{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Je(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Je(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class _0 extends Cr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Cf(s,e,t,i){const n=g0(i);switch(t){case jd:return s*e;case Du:return s*e/n.components*n.byteLength;case Lu:return s*e/n.components*n.byteLength;case Kd:return s*e*2/n.components*n.byteLength;case Uu:return s*e*2/n.components*n.byteLength;case qd:return s*e*3/n.components*n.byteLength;case kn:return s*e*4/n.components*n.byteLength;case Iu:return s*e*4/n.components*n.byteLength;case yo:case So:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Mo:case To:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case bc:case Ac:return Math.max(s,16)*Math.max(e,8)/4;case Ec:case wc:return Math.max(s,8)*Math.max(e,8)/2;case Rc:case Cc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Pc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Dc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Lc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Uc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ic:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Fc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Oc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case kc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Bc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case zc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Gc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Vc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Hc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Wc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Eo:case Xc:case Yc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Zd:case jc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case qc:case Kc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function g0(s){switch(s){case hi:case Wd:return{byteLength:1,components:1};case fa:case Xd:case wa:return{byteLength:2,components:1};case Cu:case Pu:return{byteLength:2,components:4};case br:case Ru:case Zn:return{byteLength:4,components:1};case Yd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Au}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Au);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Mp(){let s=null,e=!1,t=null,i=null;function n(r,a){t(r,a),i=s.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(n),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function v0(s){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(s.bindBuffer(c,o),h.length===0)s.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];s.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:a}}var x0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,y0=`#ifdef USE_ALPHAHASH
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
#endif`,S0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,M0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,E0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,b0=`#ifdef USE_AOMAP
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
#endif`,w0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,A0=`#ifdef USE_BATCHING
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
#endif`,R0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,C0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,P0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,D0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,L0=`#ifdef USE_IRIDESCENCE
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
#endif`,U0=`#ifdef USE_BUMPMAP
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
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,k0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,B0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,z0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,G0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,V0=`#define PI 3.141592653589793
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
} // validated`,H0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,W0=`vec3 transformedNormal = objectNormal;
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
#endif`,X0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Y0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,j0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,q0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,K0="gl_FragColor = linearToOutputTexel( gl_FragColor );",Z0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,J0=`#ifdef USE_ENVMAP
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
#endif`,Q0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$0=`#ifdef USE_ENVMAP
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
#endif`,ev=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tv=`#ifdef USE_ENVMAP
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
#endif`,nv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,av=`#ifdef USE_GRADIENTMAP
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
}`,ov=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uv=`uniform bool receiveShadow;
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
#endif`,hv=`#ifdef USE_ENVMAP
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
#endif`,fv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_v=`PhysicalMaterial material;
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
#endif`,gv=`struct PhysicalMaterial {
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
}`,vv=`
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
#endif`,xv=`#if defined( RE_IndirectDiffuse )
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
#endif`,yv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ev=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Av=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Rv=`#if defined( USE_POINTS_UV )
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
#endif`,Cv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Uv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Iv=`#ifdef USE_MORPHTARGETS
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
#endif`,Nv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ov=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gv=`#ifdef USE_NORMALMAP
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
#endif`,Vv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$v=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ex=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
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
#endif`,tx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ix=`float getShadowMask() {
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
}`,rx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sx=`#ifdef USE_SKINNING
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
#endif`,ax=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ox=`#ifdef USE_SKINNING
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
#endif`,lx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ux=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fx=`#ifdef USE_TRANSMISSION
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
#endif`,dx=`#ifdef USE_TRANSMISSION
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
#endif`,px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xx=`uniform sampler2D t2D;
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
}`,yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ex=`#include <common>
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
}`,bx=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wx=`#define DISTANCE
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
}`,Ax=`#define DISTANCE
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
}`,Rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Px=`uniform float scale;
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
}`,Dx=`uniform vec3 diffuse;
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
}`,Lx=`#include <common>
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
}`,Ux=`uniform vec3 diffuse;
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
}`,Ix=`#define LAMBERT
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
}`,Nx=`#define LAMBERT
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
}`,Fx=`#define MATCAP
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
}`,Ox=`#define MATCAP
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
}`,kx=`#define NORMAL
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
}`,Bx=`#define NORMAL
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
}`,zx=`#define PHONG
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
}`,Gx=`#define PHONG
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
}`,Vx=`#define STANDARD
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
}`,Hx=`#define STANDARD
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
}`,Wx=`#define TOON
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
}`,Xx=`#define TOON
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
}`,Yx=`uniform float size;
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
}`,jx=`uniform vec3 diffuse;
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
}`,qx=`#include <common>
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
}`,Kx=`uniform vec3 color;
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
}`,Zx=`uniform float rotation;
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
}`,Jx=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:x0,alphahash_pars_fragment:y0,alphamap_fragment:S0,alphamap_pars_fragment:M0,alphatest_fragment:T0,alphatest_pars_fragment:E0,aomap_fragment:b0,aomap_pars_fragment:w0,batching_pars_vertex:A0,batching_vertex:R0,begin_vertex:C0,beginnormal_vertex:P0,bsdfs:D0,iridescence_fragment:L0,bumpmap_pars_fragment:U0,clipping_planes_fragment:I0,clipping_planes_pars_fragment:N0,clipping_planes_pars_vertex:F0,clipping_planes_vertex:O0,color_fragment:k0,color_pars_fragment:B0,color_pars_vertex:z0,color_vertex:G0,common:V0,cube_uv_reflection_fragment:H0,defaultnormal_vertex:W0,displacementmap_pars_vertex:X0,displacementmap_vertex:Y0,emissivemap_fragment:j0,emissivemap_pars_fragment:q0,colorspace_fragment:K0,colorspace_pars_fragment:Z0,envmap_fragment:J0,envmap_common_pars_fragment:Q0,envmap_pars_fragment:$0,envmap_pars_vertex:ev,envmap_physical_pars_fragment:hv,envmap_vertex:tv,fog_vertex:nv,fog_pars_vertex:iv,fog_fragment:rv,fog_pars_fragment:sv,gradientmap_pars_fragment:av,lightmap_pars_fragment:ov,lights_lambert_fragment:lv,lights_lambert_pars_fragment:cv,lights_pars_begin:uv,lights_toon_fragment:fv,lights_toon_pars_fragment:dv,lights_phong_fragment:pv,lights_phong_pars_fragment:mv,lights_physical_fragment:_v,lights_physical_pars_fragment:gv,lights_fragment_begin:vv,lights_fragment_maps:xv,lights_fragment_end:yv,logdepthbuf_fragment:Sv,logdepthbuf_pars_fragment:Mv,logdepthbuf_pars_vertex:Tv,logdepthbuf_vertex:Ev,map_fragment:bv,map_pars_fragment:wv,map_particle_fragment:Av,map_particle_pars_fragment:Rv,metalnessmap_fragment:Cv,metalnessmap_pars_fragment:Pv,morphinstance_vertex:Dv,morphcolor_vertex:Lv,morphnormal_vertex:Uv,morphtarget_pars_vertex:Iv,morphtarget_vertex:Nv,normal_fragment_begin:Fv,normal_fragment_maps:Ov,normal_pars_fragment:kv,normal_pars_vertex:Bv,normal_vertex:zv,normalmap_pars_fragment:Gv,clearcoat_normal_fragment_begin:Vv,clearcoat_normal_fragment_maps:Hv,clearcoat_pars_fragment:Wv,iridescence_pars_fragment:Xv,opaque_fragment:Yv,packing:jv,premultiplied_alpha_fragment:qv,project_vertex:Kv,dithering_fragment:Zv,dithering_pars_fragment:Jv,roughnessmap_fragment:Qv,roughnessmap_pars_fragment:$v,shadowmap_pars_fragment:ex,shadowmap_pars_vertex:tx,shadowmap_vertex:nx,shadowmask_pars_fragment:ix,skinbase_vertex:rx,skinning_pars_vertex:sx,skinning_vertex:ax,skinnormal_vertex:ox,specularmap_fragment:lx,specularmap_pars_fragment:cx,tonemapping_fragment:ux,tonemapping_pars_fragment:hx,transmission_fragment:fx,transmission_pars_fragment:dx,uv_pars_fragment:px,uv_pars_vertex:mx,uv_vertex:_x,worldpos_vertex:gx,background_vert:vx,background_frag:xx,backgroundCube_vert:yx,backgroundCube_frag:Sx,cube_vert:Mx,cube_frag:Tx,depth_vert:Ex,depth_frag:bx,distanceRGBA_vert:wx,distanceRGBA_frag:Ax,equirect_vert:Rx,equirect_frag:Cx,linedashed_vert:Px,linedashed_frag:Dx,meshbasic_vert:Lx,meshbasic_frag:Ux,meshlambert_vert:Ix,meshlambert_frag:Nx,meshmatcap_vert:Fx,meshmatcap_frag:Ox,meshnormal_vert:kx,meshnormal_frag:Bx,meshphong_vert:zx,meshphong_frag:Gx,meshphysical_vert:Vx,meshphysical_frag:Hx,meshtoon_vert:Wx,meshtoon_frag:Xx,points_vert:Yx,points_frag:jx,shadow_vert:qx,shadow_frag:Kx,sprite_vert:Zx,sprite_frag:Jx},Pe={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},si={basic:{uniforms:en([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:en([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new je(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:en([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:en([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:en([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new je(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:en([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:en([Pe.points,Pe.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:en([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:en([Pe.common,Pe.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:en([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:en([Pe.sprite,Pe.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:en([Pe.common,Pe.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:en([Pe.lights,Pe.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};si.physical={uniforms:en([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const ho={r:0,b:0,g:0},cr=new Vt,Qx=new qe;function $x(s,e,t,i,n,r,a){const o=new je(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?t:e).get(v)),v}function _(S){let v=!1;const b=g(S);b===null?m(o,l):b&&b.isColor&&(m(b,1),v=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(S,v){const b=g(v);b&&(b.isCubeTexture||b.mapping===qo)?(u===void 0&&(u=new Ct(new Aa(1,1,1),new er({name:"BackgroundCubeMaterial",uniforms:_s(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),cr.copy(v.backgroundRotation),cr.x*=-1,cr.y*=-1,cr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Qx.makeRotationFromEuler(cr)),u.material.toneMapped=rt.getTransfer(b.colorSpace)!==lt,(h!==b||f!==b.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=b,f=b.version,d=s.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Ct(new ir(2,2),new er({name:"BackgroundMaterial",uniforms:_s(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=rt.getTransfer(b.colorSpace)!==lt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=b,f=b.version,d=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,v){S.getRGB(ho,ap(s)),i.buffers.color.setClear(ho.r,ho.g,ho.b,v,a)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,v=1){o.set(S),l=v,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,m(o,l)},render:_,addToRenderList:p,dispose:y}}function ey(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=f(null);let r=n,a=!1;function o(M,D,P,L,U){let V=!1;const O=h(L,P,D);r!==O&&(r=O,c(r.object)),V=d(M,L,P,U),V&&g(M,L,P,U),U!==null&&e.update(U,s.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,v(M,D,P,L),U!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function u(M){return s.deleteVertexArray(M)}function h(M,D,P){const L=P.wireframe===!0;let U=i[M.id];U===void 0&&(U={},i[M.id]=U);let V=U[D.id];V===void 0&&(V={},U[D.id]=V);let O=V[L];return O===void 0&&(O=f(l()),V[L]=O),O}function f(M){const D=[],P=[],L=[];for(let U=0;U<t;U++)D[U]=0,P[U]=0,L[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:P,attributeDivisors:L,object:M,attributes:{},index:null}}function d(M,D,P,L){const U=r.attributes,V=D.attributes;let O=0;const K=P.getAttributes();for(const W in K)if(K[W].location>=0){const j=U[W];let N=V[W];if(N===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(N=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(N=M.instanceColor)),j===void 0||j.attribute!==N||N&&j.data!==N.data)return!0;O++}return r.attributesNum!==O||r.index!==L}function g(M,D,P,L){const U={},V=D.attributes;let O=0;const K=P.getAttributes();for(const W in K)if(K[W].location>=0){let j=V[W];j===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(j=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(j=M.instanceColor));const N={};N.attribute=j,j&&j.data&&(N.data=j.data),U[W]=N,O++}r.attributes=U,r.attributesNum=O,r.index=L}function _(){const M=r.newAttributes;for(let D=0,P=M.length;D<P;D++)M[D]=0}function p(M){m(M,0)}function m(M,D){const P=r.newAttributes,L=r.enabledAttributes,U=r.attributeDivisors;P[M]=1,L[M]===0&&(s.enableVertexAttribArray(M),L[M]=1),U[M]!==D&&(s.vertexAttribDivisor(M,D),U[M]=D)}function y(){const M=r.newAttributes,D=r.enabledAttributes;for(let P=0,L=D.length;P<L;P++)D[P]!==M[P]&&(s.disableVertexAttribArray(P),D[P]=0)}function S(M,D,P,L,U,V,O){O===!0?s.vertexAttribIPointer(M,D,P,U,V):s.vertexAttribPointer(M,D,P,L,U,V)}function v(M,D,P,L){_();const U=L.attributes,V=P.getAttributes(),O=D.defaultAttributeValues;for(const K in V){const W=V[K];if(W.location>=0){let J=U[K];if(J===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(J=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(J=M.instanceColor)),J!==void 0){const j=J.normalized,N=J.itemSize,X=e.get(J);if(X===void 0)continue;const ee=X.buffer,F=X.type,B=X.bytesPerElement,ie=F===s.INT||F===s.UNSIGNED_INT||J.gpuType===Ru;if(J.isInterleavedBufferAttribute){const Y=J.data,ne=Y.stride,Se=J.offset;if(Y.isInstancedInterleavedBuffer){for(let ge=0;ge<W.locationSize;ge++)m(W.location+ge,Y.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ge=0;ge<W.locationSize;ge++)p(W.location+ge);s.bindBuffer(s.ARRAY_BUFFER,ee);for(let ge=0;ge<W.locationSize;ge++)S(W.location+ge,N/W.locationSize,F,j,ne*B,(Se+N/W.locationSize*ge)*B,ie)}else{if(J.isInstancedBufferAttribute){for(let Y=0;Y<W.locationSize;Y++)m(W.location+Y,J.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Y=0;Y<W.locationSize;Y++)p(W.location+Y);s.bindBuffer(s.ARRAY_BUFFER,ee);for(let Y=0;Y<W.locationSize;Y++)S(W.location+Y,N/W.locationSize,F,j,N*B,N/W.locationSize*Y*B,ie)}}else if(O!==void 0){const j=O[K];if(j!==void 0)switch(j.length){case 2:s.vertexAttrib2fv(W.location,j);break;case 3:s.vertexAttrib3fv(W.location,j);break;case 4:s.vertexAttrib4fv(W.location,j);break;default:s.vertexAttrib1fv(W.location,j)}}}}y()}function b(){A();for(const M in i){const D=i[M];for(const P in D){const L=D[P];for(const U in L)u(L[U].object),delete L[U];delete D[P]}delete i[M]}}function w(M){if(i[M.id]===void 0)return;const D=i[M.id];for(const P in D){const L=D[P];for(const U in L)u(L[U].object),delete L[U];delete D[P]}delete i[M.id]}function T(M){for(const D in i){const P=i[D];if(P[M.id]===void 0)continue;const L=P[M.id];for(const U in L)u(L[U].object),delete L[U];delete P[M.id]}}function A(){x(),a=!0,r!==n&&(r=n,c(r.object))}function x(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:A,resetDefaultState:x,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:p,disableUnusedAttributes:y}}function ty(s,e,t){let i;function n(c){i=c}function r(c,u){s.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,h){h!==0&&(s.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,i,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];t.update(g,i,1)}}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ny(s,e,t,i){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(T){return!(T!==kn&&i.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const A=T===wa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==hi&&i.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Zn&&!A)}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:b,maxSamples:w}}function iy(s){const e=this;let t=null,i=0,n=!1,r=!1;const a=new Hi,o=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||n;return n=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,m=s.get(h);if(!n||g===null||g.length===0||r&&!p)r?u(null):c();else{const y=r?0:i,S=y*4;let v=m.clippingState||null;l.value=v,v=u(g,f,S,d);for(let b=0;b!==S;++b)v[b]=t[b];m.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=d+_*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let S=0,v=d;S!==_;++S,v+=4)a.copy(h[S]).applyMatrix4(y,o),a.normal.toArray(p,v),p[v+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function ry(s){let e=new WeakMap;function t(a,o){return o===Mc?a.mapping=fs:o===Tc&&(a.mapping=ds),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Mc||o===Tc)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new bg(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",n),t(c.texture,a.mapping)}else return null}}return a}function n(a){const o=a.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const $r=4,Pf=[.125,.215,.35,.446,.526,.582],vr=20,Xl=new ju,Df=new je;let Yl=null,jl=0,ql=0,Kl=!1;const mr=(1+Math.sqrt(5))/2,Kr=1/mr,Lf=[new G(-mr,Kr,0),new G(mr,Kr,0),new G(-Kr,0,mr),new G(Kr,0,mr),new G(0,mr,-Kr),new G(0,mr,Kr),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)],sy=new G;class Uf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100,r={}){const{size:a=256,position:o=sy}=r;Yl=this._renderer.getRenderTarget(),jl=this._renderer.getActiveCubeFace(),ql=this._renderer.getActiveMipmapLevel(),Kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,n,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ff(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yl,jl,ql),this._renderer.xr.enabled=Kl,e.scissorTest=!1,fo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fs||e.mapping===ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yl=this._renderer.getRenderTarget(),jl=this._renderer.getActiveCubeFace(),ql=this._renderer.getActiveMipmapLevel(),Kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:wa,format:kn,colorSpace:on,depthBuffer:!1},n=If(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=If(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ay(r)),this._blurMaterial=oy(r,e,t)}return n}_compileMaterial(e){const t=new Ct(this._lodPlanes[0],e);this._renderer.compile(t,Xl)}_sceneToCubeUV(e,t,i,n,r){const l=new tn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Df),h.toneMapping=Ji,h.autoClear=!1;const g=new Jn({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),_=new Ct(new Aa,g);let p=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,p=!0):(g.color.copy(Df),p=!0);for(let y=0;y<6;y++){const S=y%3;S===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[y],r.y,r.z)):S===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[y]));const v=this._cubeSize;fo(n,S*v,y>2?v:0,v,v),h.setRenderTarget(n),p&&h.render(_,l),h.render(e,l)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===fs||e.mapping===ds;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ff()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nf());const r=n?this._cubemapMaterial:this._equirectMaterial,a=new Ct(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;fo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Xl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodPlanes.length;for(let r=1;r<n;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Lf[(n-r-1)%Lf.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,n,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",r),this._halfBlur(a,e,i,i,n,"longitudinal",r)}_halfBlur(e,t,i,n,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ct(this._lodPlanes[n],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*vr-1),_=r/g,p=isFinite(r)?1+Math.floor(u*_):vr;p>vr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${vr}`);const m=[];let y=0;for(let T=0;T<vr;++T){const A=T/_,x=Math.exp(-A*A/2);m.push(x),T===0?y+=x:T<p&&(y+=2*x)}for(let T=0;T<m.length;T++)m[T]=m[T]/y;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-i;const v=this._sizeLods[n],b=3*v*(n>S-$r?n-S+$r:0),w=4*(this._cubeSize-v);fo(t,b,w,3*v,2*v),l.setRenderTarget(t),l.render(h,Xl)}}function ay(s){const e=[],t=[],i=[];let n=s;const r=s-$r+1+Pf.length;for(let a=0;a<r;a++){const o=Math.pow(2,n);t.push(o);let l=1/o;a>s-$r?l=Pf[a-s+$r-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,p=2,m=1,y=new Float32Array(_*g*d),S=new Float32Array(p*g*d),v=new Float32Array(m*g*d);for(let w=0;w<d;w++){const T=w%3*2/3-1,A=w>2?0:-1,x=[T,A,0,T+2/3,A,0,T+2/3,A+1,0,T,A,0,T+2/3,A+1,0,T,A+1,0];y.set(x,_*g*w),S.set(f,p*g*w);const M=[w,w,w,w,w,w];v.set(M,m*g*w)}const b=new xn;b.setAttribute("position",new an(y,_)),b.setAttribute("uv",new an(S,p)),b.setAttribute("faceIndex",new an(v,m)),e.push(b),n>$r&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function If(s,e,t){const i=new wr(s,e,t);return i.texture.mapping=qo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fo(s,e,t,i,n){s.viewport.set(e,t,i,n),s.scissor.set(e,t,i,n)}function oy(s,e,t){const i=new Float32Array(vr),n=new G(0,1,0);return new er({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Zu(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Nf(){return new er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zu(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Ff(){return new er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Zu(){return`

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
	`}function ly(s){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Mc||l===Tc,u=l===fs||l===ds;if(c||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Uf(s)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&n(d)?(t===null&&(t=new Uf(s)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function n(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function cy(s){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const n=t(i);return n===null&&ss("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function uy(s,e,t,i){const n={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete n[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return n[f.id]===!0||(f.addEventListener("dispose",a),n[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],s.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let S=0,v=y.length;S<v;S+=3){const b=y[S+0],w=y[S+1],T=y[S+2];f.push(b,w,w,T,T,b)}}else if(g!==void 0){const y=g.array;_=g.version;for(let S=0,v=y.length/3-1;S<v;S+=3){const b=S+0,w=S+1,T=S+2;f.push(b,w,w,T,T,b)}}else return;const p=new(tp(f)?sp:rp)(f,1);p.version=_;const m=r.get(h);m&&e.remove(m),r.set(h,p)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function hy(s,e,t){let i;function n(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){s.drawElements(i,d,r,f*a),t.update(d,i,1)}function c(f,d,g){g!==0&&(s.drawElementsInstanced(i,d,r,f*a,g),t.update(d,i,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];t.update(p,i,1)}function h(f,d,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/a,d[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,_,0,g);let m=0;for(let y=0;y<g;y++)m+=d[y]*_[y];t.update(m,i,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function fy(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function dy(s,e,t){const i=new WeakMap,n=new st;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let M=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var d=M;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),p===!0&&(v=3);let b=o.attributes.position.count*v,w=1;b>e.maxTextureSize&&(w=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const T=new Float32Array(b*w*4*h),A=new np(T,b,w,h);A.type=Zn,A.needsUpdate=!0;const x=v*4;for(let D=0;D<h;D++){const P=m[D],L=y[D],U=S[D],V=b*w*4*D;for(let O=0;O<P.count;O++){const K=O*x;g===!0&&(n.fromBufferAttribute(P,O),T[V+K+0]=n.x,T[V+K+1]=n.y,T[V+K+2]=n.z,T[V+K+3]=0),_===!0&&(n.fromBufferAttribute(L,O),T[V+K+4]=n.x,T[V+K+5]=n.y,T[V+K+6]=n.z,T[V+K+7]=0),p===!0&&(n.fromBufferAttribute(U,O),T[V+K+8]=n.x,T[V+K+9]=n.y,T[V+K+10]=n.z,T[V+K+11]=U.itemSize===4?n.w:1)}}f={count:h,texture:A,size:new We(b,w)},i.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function py(s,e,t,i){let n=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(n.get(h)!==c&&(e.update(h),n.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;n.get(f)!==c&&(f.update(),n.set(f,c))}return h}function a(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const Tp=new Pt,Of=new dp(1,1),Ep=new np,bp=new cg,wp=new cp,kf=[],Bf=[],zf=new Float32Array(16),Gf=new Float32Array(9),Vf=new Float32Array(4);function Ds(s,e,t){const i=s[0];if(i<=0||i>0)return s;const n=e*t;let r=kf[n];if(r===void 0&&(r=new Float32Array(n),kf[n]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Dt(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function Lt(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function $o(s,e){let t=Bf[e];t===void 0&&(t=new Int32Array(e),Bf[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function my(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function _y(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2fv(this.addr,e),Lt(t,e)}}function gy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;s.uniform3fv(this.addr,e),Lt(t,e)}}function vy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4fv(this.addr,e),Lt(t,e)}}function xy(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,i))return;Vf.set(i),s.uniformMatrix2fv(this.addr,!1,Vf),Lt(t,i)}}function yy(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,i))return;Gf.set(i),s.uniformMatrix3fv(this.addr,!1,Gf),Lt(t,i)}}function Sy(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,i))return;zf.set(i),s.uniformMatrix4fv(this.addr,!1,zf),Lt(t,i)}}function My(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Ty(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2iv(this.addr,e),Lt(t,e)}}function Ey(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;s.uniform3iv(this.addr,e),Lt(t,e)}}function by(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4iv(this.addr,e),Lt(t,e)}}function wy(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Ay(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2uiv(this.addr,e),Lt(t,e)}}function Ry(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;s.uniform3uiv(this.addr,e),Lt(t,e)}}function Cy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4uiv(this.addr,e),Lt(t,e)}}function Py(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(Of.compareFunction=ep,r=Of):r=Tp,t.setTexture2D(e||r,n)}function Dy(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||bp,n)}function Ly(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||wp,n)}function Uy(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Ep,n)}function Iy(s){switch(s){case 5126:return my;case 35664:return _y;case 35665:return gy;case 35666:return vy;case 35674:return xy;case 35675:return yy;case 35676:return Sy;case 5124:case 35670:return My;case 35667:case 35671:return Ty;case 35668:case 35672:return Ey;case 35669:case 35673:return by;case 5125:return wy;case 36294:return Ay;case 36295:return Ry;case 36296:return Cy;case 35678:case 36198:case 36298:case 36306:case 35682:return Py;case 35679:case 36299:case 36307:return Dy;case 35680:case 36300:case 36308:case 36293:return Ly;case 36289:case 36303:case 36311:case 36292:return Uy}}function Ny(s,e){s.uniform1fv(this.addr,e)}function Fy(s,e){const t=Ds(e,this.size,2);s.uniform2fv(this.addr,t)}function Oy(s,e){const t=Ds(e,this.size,3);s.uniform3fv(this.addr,t)}function ky(s,e){const t=Ds(e,this.size,4);s.uniform4fv(this.addr,t)}function By(s,e){const t=Ds(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function zy(s,e){const t=Ds(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Gy(s,e){const t=Ds(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Vy(s,e){s.uniform1iv(this.addr,e)}function Hy(s,e){s.uniform2iv(this.addr,e)}function Wy(s,e){s.uniform3iv(this.addr,e)}function Xy(s,e){s.uniform4iv(this.addr,e)}function Yy(s,e){s.uniform1uiv(this.addr,e)}function jy(s,e){s.uniform2uiv(this.addr,e)}function qy(s,e){s.uniform3uiv(this.addr,e)}function Ky(s,e){s.uniform4uiv(this.addr,e)}function Zy(s,e,t){const i=this.cache,n=e.length,r=$o(t,n);Dt(i,r)||(s.uniform1iv(this.addr,r),Lt(i,r));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||Tp,r[a])}function Jy(s,e,t){const i=this.cache,n=e.length,r=$o(t,n);Dt(i,r)||(s.uniform1iv(this.addr,r),Lt(i,r));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||bp,r[a])}function Qy(s,e,t){const i=this.cache,n=e.length,r=$o(t,n);Dt(i,r)||(s.uniform1iv(this.addr,r),Lt(i,r));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||wp,r[a])}function $y(s,e,t){const i=this.cache,n=e.length,r=$o(t,n);Dt(i,r)||(s.uniform1iv(this.addr,r),Lt(i,r));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||Ep,r[a])}function eS(s){switch(s){case 5126:return Ny;case 35664:return Fy;case 35665:return Oy;case 35666:return ky;case 35674:return By;case 35675:return zy;case 35676:return Gy;case 5124:case 35670:return Vy;case 35667:case 35671:return Hy;case 35668:case 35672:return Wy;case 35669:case 35673:return Xy;case 5125:return Yy;case 36294:return jy;case 36295:return qy;case 36296:return Ky;case 35678:case 36198:case 36298:case 36306:case 35682:return Zy;case 35679:case 36299:case 36307:return Jy;case 35680:case 36300:case 36308:case 36293:return Qy;case 36289:case 36303:case 36311:case 36292:return $y}}class tS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Iy(t.type)}}class nS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=eS(t.type)}}class iS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let r=0,a=n.length;r!==a;++r){const o=n[r];o.setValue(e,t[o.id],i)}}}const Zl=/(\w+)(\])?(\[|\.)?/g;function Hf(s,e){s.seq.push(e),s.map[e.id]=e}function rS(s,e,t){const i=s.name,n=i.length;for(Zl.lastIndex=0;;){const r=Zl.exec(i),a=Zl.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){Hf(t,c===void 0?new tS(o,s,e):new nS(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new iS(o),Hf(t,h)),t=h}}}class bo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const r=e.getActiveUniform(t,n),a=e.getUniformLocation(t,r.name);rS(r,a,this)}}setValue(e,t,i,n){const r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,r=e.length;n!==r;++n){const a=e[n];a.id in t&&i.push(a)}return i}}function Wf(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const sS=37297;let aS=0;function oS(s,e){const t=s.split(`
`),i=[],n=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=n;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Xf=new Ke;function lS(s){rt._getMatrix(Xf,rt.workingColorSpace,s);const e=`mat3( ${Xf.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(s)){case No:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Yf(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),n=s.getShaderInfoLog(e).trim();if(i&&n==="")return"";const r=/ERROR: 0:(\d+)/.exec(n);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+n+`

`+oS(s.getShaderSource(e),a)}else return n}function cS(s,e){const t=lS(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function uS(s,e){let t;switch(e){case x_:t="Linear";break;case y_:t="Reinhard";break;case S_:t="Cineon";break;case M_:t="ACESFilmic";break;case E_:t="AgX";break;case b_:t="Neutral";break;case T_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const po=new G;function hS(){rt.getLuminanceCoefficients(po);const s=po.x.toFixed(4),e=po.y.toFixed(4),t=po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fS(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ea).join(`
`)}function dS(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function pS(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=s.getActiveAttrib(e,n),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function ea(s){return s!==""}function jf(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mS=/^[ \t]*#include +<([\w\d./]+)>/gm;function eu(s){return s.replace(mS,gS)}const _S=new Map;function gS(s,e){let t=Ze[e];if(t===void 0){const i=_S.get(e);if(i!==void 0)t=Ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return eu(t)}const vS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kf(s){return s.replace(vS,xS)}function xS(s,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Zf(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function yS(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===zd?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Qm?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Mi&&(e="SHADOWMAP_TYPE_VSM"),e}function SS(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case fs:case ds:e="ENVMAP_TYPE_CUBE";break;case qo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function MS(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ds:e="ENVMAP_MODE_REFRACTION";break}return e}function TS(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Gd:e="ENVMAP_BLENDING_MULTIPLY";break;case g_:e="ENVMAP_BLENDING_MIX";break;case v_:e="ENVMAP_BLENDING_ADD";break}return e}function ES(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function bS(s,e,t,i){const n=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=yS(t),c=SS(t),u=MS(t),h=TS(t),f=ES(t),d=fS(t),g=dS(r),_=n.createProgram();let p,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ea).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ea).join(`
`),m.length>0&&(m+=`
`)):(p=[Zf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ea).join(`
`),m=[Zf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ji?"#define TONE_MAPPING":"",t.toneMapping!==Ji?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Ji?uS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,cS("linearToOutputTexel",t.outputColorSpace),hS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ea).join(`
`)),a=eu(a),a=jf(a,t),a=qf(a,t),o=eu(o),o=jf(o,t),o=qf(o,t),a=Kf(a),o=Kf(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=y+p+a,v=y+m+o,b=Wf(n,n.VERTEX_SHADER,S),w=Wf(n,n.FRAGMENT_SHADER,v);n.attachShader(_,b),n.attachShader(_,w),t.index0AttributeName!==void 0?n.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_);function T(D){if(s.debug.checkShaderErrors){const P=n.getProgramInfoLog(_).trim(),L=n.getShaderInfoLog(b).trim(),U=n.getShaderInfoLog(w).trim();let V=!0,O=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,_,b,w);else{const K=Yf(n,b,"vertex"),W=Yf(n,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+P+`
`+K+`
`+W)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(L===""||U==="")&&(O=!1);O&&(D.diagnostics={runnable:V,programLog:P,vertexShader:{log:L,prefix:p},fragmentShader:{log:U,prefix:m}})}n.deleteShader(b),n.deleteShader(w),A=new bo(n,_),x=pS(n,_)}let A;this.getUniforms=function(){return A===void 0&&T(this),A};let x;this.getAttributes=function(){return x===void 0&&T(this),x};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=n.getProgramParameter(_,sS)),M},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=aS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=w,this}let wS=0;class AS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new RS(e),t.set(e,i)),i}}class RS{constructor(e){this.id=wS++,this.code=e,this.usedTimes=0}}function CS(s,e,t,i,n,r,a){const o=new Ou,l=new AS,c=new Set,u=[],h=n.logarithmicDepthBuffer,f=n.vertexTextures;let d=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,M,D,P,L){const U=P.fog,V=L.geometry,O=x.isMeshStandardMaterial?P.environment:null,K=(x.isMeshStandardMaterial?t:e).get(x.envMap||O),W=K&&K.mapping===qo?K.image.height:null,J=g[x.type];x.precision!==null&&(d=n.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const j=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,N=j!==void 0?j.length:0;let X=0;V.morphAttributes.position!==void 0&&(X=1),V.morphAttributes.normal!==void 0&&(X=2),V.morphAttributes.color!==void 0&&(X=3);let ee,F,B,ie;if(J){const He=si[J];ee=He.vertexShader,F=He.fragmentShader}else ee=x.vertexShader,F=x.fragmentShader,l.update(x),B=l.getVertexShaderID(x),ie=l.getFragmentShaderID(x);const Y=s.getRenderTarget(),ne=s.state.buffers.depth.getReversed(),Se=L.isInstancedMesh===!0,ge=L.isBatchedMesh===!0,ve=!!x.map,fe=!!x.matcap,Ue=!!K,I=!!x.aoMap,Be=!!x.lightMap,Re=!!x.bumpMap,Ie=!!x.normalMap,le=!!x.displacementMap,Ee=!!x.emissiveMap,de=!!x.metalnessMap,te=!!x.roughnessMap,De=x.anisotropy>0,C=x.clearcoat>0,E=x.dispersion>0,z=x.iridescence>0,ae=x.sheen>0,$=x.transmission>0,Q=De&&!!x.anisotropyMap,xe=C&&!!x.clearcoatMap,me=C&&!!x.clearcoatNormalMap,Me=C&&!!x.clearcoatRoughnessMap,be=z&&!!x.iridescenceMap,oe=z&&!!x.iridescenceThicknessMap,pe=ae&&!!x.sheenColorMap,_e=ae&&!!x.sheenRoughnessMap,we=!!x.specularMap,ye=!!x.specularColorMap,ze=!!x.specularIntensityMap,k=$&&!!x.transmissionMap,he=$&&!!x.thicknessMap,ce=!!x.gradientMap,Le=!!x.alphaMap,ue=x.alphaTest>0,se=!!x.alphaHash,Ae=!!x.extensions;let Ne=Ji;x.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Ne=s.toneMapping);const Oe={shaderID:J,shaderType:x.type,shaderName:x.name,vertexShader:ee,fragmentShader:F,defines:x.defines,customVertexShaderID:B,customFragmentShaderID:ie,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:ge,batchingColor:ge&&L._colorsTexture!==null,instancing:Se,instancingColor:Se&&L.instanceColor!==null,instancingMorph:Se&&L.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Y===null?s.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:on,alphaToCoverage:!!x.alphaToCoverage,map:ve,matcap:fe,envMap:Ue,envMapMode:Ue&&K.mapping,envMapCubeUVHeight:W,aoMap:I,lightMap:Be,bumpMap:Re,normalMap:Ie,displacementMap:f&&le,emissiveMap:Ee,normalMapObjectSpace:Ie&&x.normalMapType===P_,normalMapTangentSpace:Ie&&x.normalMapType===$d,metalnessMap:de,roughnessMap:te,anisotropy:De,anisotropyMap:Q,clearcoat:C,clearcoatMap:xe,clearcoatNormalMap:me,clearcoatRoughnessMap:Me,dispersion:E,iridescence:z,iridescenceMap:be,iridescenceThicknessMap:oe,sheen:ae,sheenColorMap:pe,sheenRoughnessMap:_e,specularMap:we,specularColorMap:ye,specularIntensityMap:ze,transmission:$,transmissionMap:k,thicknessMap:he,gradientMap:ce,opaque:x.transparent===!1&&x.blending===is&&x.alphaToCoverage===!1,alphaMap:Le,alphaTest:ue,alphaHash:se,combine:x.combine,mapUv:ve&&_(x.map.channel),aoMapUv:I&&_(x.aoMap.channel),lightMapUv:Be&&_(x.lightMap.channel),bumpMapUv:Re&&_(x.bumpMap.channel),normalMapUv:Ie&&_(x.normalMap.channel),displacementMapUv:le&&_(x.displacementMap.channel),emissiveMapUv:Ee&&_(x.emissiveMap.channel),metalnessMapUv:de&&_(x.metalnessMap.channel),roughnessMapUv:te&&_(x.roughnessMap.channel),anisotropyMapUv:Q&&_(x.anisotropyMap.channel),clearcoatMapUv:xe&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:me&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:_e&&_(x.sheenRoughnessMap.channel),specularMapUv:we&&_(x.specularMap.channel),specularColorMapUv:ye&&_(x.specularColorMap.channel),specularIntensityMapUv:ze&&_(x.specularIntensityMap.channel),transmissionMapUv:k&&_(x.transmissionMap.channel),thicknessMapUv:he&&_(x.thicknessMap.channel),alphaMapUv:Le&&_(x.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Ie||De),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!V.attributes.uv&&(ve||Le),fog:!!U,useFog:x.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:ne,skinning:L.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:X,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ne,decodeVideoTexture:ve&&x.map.isVideoTexture===!0&&rt.getTransfer(x.map.colorSpace)===lt,decodeVideoTextureEmissive:Ee&&x.emissiveMap.isVideoTexture===!0&&rt.getTransfer(x.emissiveMap.colorSpace)===lt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===bn,flipSided:x.side===dn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ae&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&x.extensions.multiDraw===!0||ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Oe.vertexUv1s=c.has(1),Oe.vertexUv2s=c.has(2),Oe.vertexUv3s=c.has(3),c.clear(),Oe}function m(x){const M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(const D in x.defines)M.push(D),M.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(y(M,x),S(M,x),M.push(s.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function y(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function S(x,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),x.push(o.mask)}function v(x){const M=g[x.type];let D;if(M){const P=si[M];D=op.clone(P.uniforms)}else D=x.uniforms;return D}function b(x,M){let D;for(let P=0,L=u.length;P<L;P++){const U=u[P];if(U.cacheKey===M){D=U,++D.usedTimes;break}}return D===void 0&&(D=new bS(s,M,x,r),u.push(D)),D}function w(x){if(--x.usedTimes===0){const M=u.indexOf(x);u[M]=u[u.length-1],u.pop(),x.destroy()}}function T(x){l.remove(x)}function A(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:v,acquireProgram:b,releaseProgram:w,releaseShaderCache:T,programs:u,dispose:A}}function PS(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:r}}function DS(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Jf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Qf(){const s=[];let e=0;const t=[],i=[],n=[];function r(){e=0,t.length=0,i.length=0,n.length=0}function a(h,f,d,g,_,p){let m=s[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},s[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=_,m.group=p),e++,m}function o(h,f,d,g,_,p){const m=a(h,f,d,g,_,p);d.transmission>0?i.push(m):d.transparent===!0?n.push(m):t.push(m)}function l(h,f,d,g,_,p){const m=a(h,f,d,g,_,p);d.transmission>0?i.unshift(m):d.transparent===!0?n.unshift(m):t.unshift(m)}function c(h,f){t.length>1&&t.sort(h||DS),i.length>1&&i.sort(f||Jf),n.length>1&&n.sort(f||Jf)}function u(){for(let h=e,f=s.length;h<f;h++){const d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:n,init:r,push:o,unshift:l,finish:u,sort:c}}function LS(){let s=new WeakMap;function e(i,n){const r=s.get(i);let a;return r===void 0?(a=new Qf,s.set(i,[a])):n>=r.length?(a=new Qf,r.push(a)):a=r[n],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function US(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new je};break;case"SpotLight":t={position:new G,direction:new G,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new G,halfWidth:new G,halfHeight:new G};break}return s[e.id]=t,t}}}function IS(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let NS=0;function FS(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function OS(s){const e=new US,t=IS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);const n=new G,r=new qe,a=new qe;function o(c){let u=0,h=0,f=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let d=0,g=0,_=0,p=0,m=0,y=0,S=0,v=0,b=0,w=0,T=0;c.sort(FS);for(let x=0,M=c.length;x<M;x++){const D=c[x],P=D.color,L=D.intensity,U=D.distance,V=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=P.r*L,h+=P.g*L,f+=P.b*L;else if(D.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(D.sh.coefficients[O],L);T++}else if(D.isDirectionalLight){const O=e.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const K=D.shadow,W=t.get(D);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,i.directionalShadow[d]=W,i.directionalShadowMap[d]=V,i.directionalShadowMatrix[d]=D.shadow.matrix,y++}i.directional[d]=O,d++}else if(D.isSpotLight){const O=e.get(D);O.position.setFromMatrixPosition(D.matrixWorld),O.color.copy(P).multiplyScalar(L),O.distance=U,O.coneCos=Math.cos(D.angle),O.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),O.decay=D.decay,i.spot[_]=O;const K=D.shadow;if(D.map&&(i.spotLightMap[b]=D.map,b++,K.updateMatrices(D),D.castShadow&&w++),i.spotLightMatrix[_]=K.matrix,D.castShadow){const W=t.get(D);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,i.spotShadow[_]=W,i.spotShadowMap[_]=V,v++}_++}else if(D.isRectAreaLight){const O=e.get(D);O.color.copy(P).multiplyScalar(L),O.halfWidth.set(D.width*.5,0,0),O.halfHeight.set(0,D.height*.5,0),i.rectArea[p]=O,p++}else if(D.isPointLight){const O=e.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),O.distance=D.distance,O.decay=D.decay,D.castShadow){const K=D.shadow,W=t.get(D);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,W.shadowCameraNear=K.camera.near,W.shadowCameraFar=K.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=V,i.pointShadowMatrix[g]=D.shadow.matrix,S++}i.point[g]=O,g++}else if(D.isHemisphereLight){const O=e.get(D);O.skyColor.copy(D.color).multiplyScalar(L),O.groundColor.copy(D.groundColor).multiplyScalar(L),i.hemi[m]=O,m++}}p>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pe.LTC_FLOAT_1,i.rectAreaLTC2=Pe.LTC_FLOAT_2):(i.rectAreaLTC1=Pe.LTC_HALF_1,i.rectAreaLTC2=Pe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const A=i.hash;(A.directionalLength!==d||A.pointLength!==g||A.spotLength!==_||A.rectAreaLength!==p||A.hemiLength!==m||A.numDirectionalShadows!==y||A.numPointShadows!==S||A.numSpotShadows!==v||A.numSpotMaps!==b||A.numLightProbes!==T)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=v+b-w,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=T,A.directionalLength=d,A.pointLength=g,A.spotLength=_,A.rectAreaLength=p,A.hemiLength=m,A.numDirectionalShadows=y,A.numPointShadows=S,A.numSpotShadows=v,A.numSpotMaps=b,A.numLightProbes=T,i.version=NS++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const p=u.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const S=c[m];if(S.isDirectionalLight){const v=i.directional[h];v.direction.setFromMatrixPosition(S.matrixWorld),n.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(p),h++}else if(S.isSpotLight){const v=i.spot[d];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(S.matrixWorld),n.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(p),d++}else if(S.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(p),a.identity(),r.copy(S.matrixWorld),r.premultiply(p),a.extractRotation(r),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const v=i.point[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:i}}function $f(s){const e=new OS(s),t=[],i=[];function n(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function kS(s){let e=new WeakMap;function t(n,r=0){const a=e.get(n);let o;return a===void 0?(o=new $f(s),e.set(n,[o])):r>=a.length?(o=new $f(s),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const BS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zS=`uniform sampler2D shadow_pass;
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
}`;function GS(s,e,t){let i=new Gu;const n=new We,r=new We,a=new st,o=new mp({depthPacking:Qd}),l=new _p,c={},u=t.maxTextureSize,h={[Pi]:dn,[dn]:Pi,[bn]:bn},f=new er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:BS,fragmentShader:zS}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new xn;g.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ct(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zd;let m=this.type;this.render=function(w,T,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const x=s.getRenderTarget(),M=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),P=s.state;P.setBlending(Zi),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const L=m!==Mi&&this.type===Mi,U=m===Mi&&this.type!==Mi;for(let V=0,O=w.length;V<O;V++){const K=w[V],W=K.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;n.copy(W.mapSize);const J=W.getFrameExtents();if(n.multiply(J),r.copy(W.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(r.x=Math.floor(u/J.x),n.x=r.x*J.x,W.mapSize.x=r.x),n.y>u&&(r.y=Math.floor(u/J.y),n.y=r.y*J.y,W.mapSize.y=r.y)),W.map===null||L===!0||U===!0){const N=this.type!==Mi?{minFilter:sn,magFilter:sn}:{};W.map!==null&&W.map.dispose(),W.map=new wr(n.x,n.y,N),W.map.texture.name=K.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const j=W.getViewportCount();for(let N=0;N<j;N++){const X=W.getViewport(N);a.set(r.x*X.x,r.y*X.y,r.x*X.z,r.y*X.w),P.viewport(a),W.updateMatrices(K,N),i=W.getFrustum(),v(T,A,W.camera,K,this.type)}W.isPointLightShadow!==!0&&this.type===Mi&&y(W,A),W.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(x,M,D)};function y(w,T){const A=e.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new wr(n.x,n.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(T,null,A,f,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(T,null,A,d,_,null)}function S(w,T,A,x){let M=null;const D=A.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)M=D;else if(M=A.isPointLight===!0?l:o,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const P=M.uuid,L=T.uuid;let U=c[P];U===void 0&&(U={},c[P]=U);let V=U[L];V===void 0&&(V=M.clone(),U[L]=V,T.addEventListener("dispose",b)),M=V}if(M.visible=T.visible,M.wireframe=T.wireframe,x===Mi?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:h[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,A.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const P=s.properties.get(M);P.light=A}return M}function v(w,T,A,x,M){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Mi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,w.matrixWorld);const L=e.update(w),U=w.material;if(Array.isArray(U)){const V=L.groups;for(let O=0,K=V.length;O<K;O++){const W=V[O],J=U[W.materialIndex];if(J&&J.visible){const j=S(w,J,x,M);w.onBeforeShadow(s,w,T,A,L,j,W),s.renderBufferDirect(A,null,L,j,w,W),w.onAfterShadow(s,w,T,A,L,j,W)}}}else if(U.visible){const V=S(w,U,x,M);w.onBeforeShadow(s,w,T,A,L,V,null),s.renderBufferDirect(A,null,L,V,w,null),w.onAfterShadow(s,w,T,A,L,V,null)}}const P=w.children;for(let L=0,U=P.length;L<U;L++)v(P[L],T,A,x,M)}function b(w){w.target.removeEventListener("dispose",b);for(const A in c){const x=c[A],M=w.target.uuid;M in x&&(x[M].dispose(),delete x[M])}}}const VS={[mc]:_c,[gc]:yc,[vc]:Sc,[hs]:xc,[_c]:mc,[yc]:gc,[Sc]:vc,[xc]:hs};function HS(s,e){function t(){let k=!1;const he=new st;let ce=null;const Le=new st(0,0,0,0);return{setMask:function(ue){ce!==ue&&!k&&(s.colorMask(ue,ue,ue,ue),ce=ue)},setLocked:function(ue){k=ue},setClear:function(ue,se,Ae,Ne,Oe){Oe===!0&&(ue*=Ne,se*=Ne,Ae*=Ne),he.set(ue,se,Ae,Ne),Le.equals(he)===!1&&(s.clearColor(ue,se,Ae,Ne),Le.copy(he))},reset:function(){k=!1,ce=null,Le.set(-1,0,0,0)}}}function i(){let k=!1,he=!1,ce=null,Le=null,ue=null;return{setReversed:function(se){if(he!==se){const Ae=e.get("EXT_clip_control");se?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),he=se;const Ne=ue;ue=null,this.setClear(Ne)}},getReversed:function(){return he},setTest:function(se){se?Y(s.DEPTH_TEST):ne(s.DEPTH_TEST)},setMask:function(se){ce!==se&&!k&&(s.depthMask(se),ce=se)},setFunc:function(se){if(he&&(se=VS[se]),Le!==se){switch(se){case mc:s.depthFunc(s.NEVER);break;case _c:s.depthFunc(s.ALWAYS);break;case gc:s.depthFunc(s.LESS);break;case hs:s.depthFunc(s.LEQUAL);break;case vc:s.depthFunc(s.EQUAL);break;case xc:s.depthFunc(s.GEQUAL);break;case yc:s.depthFunc(s.GREATER);break;case Sc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Le=se}},setLocked:function(se){k=se},setClear:function(se){ue!==se&&(he&&(se=1-se),s.clearDepth(se),ue=se)},reset:function(){k=!1,ce=null,Le=null,ue=null,he=!1}}}function n(){let k=!1,he=null,ce=null,Le=null,ue=null,se=null,Ae=null,Ne=null,Oe=null;return{setTest:function(He){k||(He?Y(s.STENCIL_TEST):ne(s.STENCIL_TEST))},setMask:function(He){he!==He&&!k&&(s.stencilMask(He),he=He)},setFunc:function(He,ut,ft){(ce!==He||Le!==ut||ue!==ft)&&(s.stencilFunc(He,ut,ft),ce=He,Le=ut,ue=ft)},setOp:function(He,ut,ft){(se!==He||Ae!==ut||Ne!==ft)&&(s.stencilOp(He,ut,ft),se=He,Ae=ut,Ne=ft)},setLocked:function(He){k=He},setClear:function(He){Oe!==He&&(s.clearStencil(He),Oe=He)},reset:function(){k=!1,he=null,ce=null,Le=null,ue=null,se=null,Ae=null,Ne=null,Oe=null}}}const r=new t,a=new i,o=new n,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,p=null,m=null,y=null,S=null,v=null,b=null,w=null,T=new je(0,0,0),A=0,x=!1,M=null,D=null,P=null,L=null,U=null;const V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,K=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(W)[1]),O=K>=1):W.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),O=K>=2);let J=null,j={};const N=s.getParameter(s.SCISSOR_BOX),X=s.getParameter(s.VIEWPORT),ee=new st().fromArray(N),F=new st().fromArray(X);function B(k,he,ce,Le){const ue=new Uint8Array(4),se=s.createTexture();s.bindTexture(k,se),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ae=0;Ae<ce;Ae++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(he,0,s.RGBA,1,1,Le,0,s.RGBA,s.UNSIGNED_BYTE,ue):s.texImage2D(he+Ae,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ue);return se}const ie={};ie[s.TEXTURE_2D]=B(s.TEXTURE_2D,s.TEXTURE_2D,1),ie[s.TEXTURE_CUBE_MAP]=B(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[s.TEXTURE_2D_ARRAY]=B(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ie[s.TEXTURE_3D]=B(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Y(s.DEPTH_TEST),a.setFunc(hs),Re(!1),Ie(Uh),Y(s.CULL_FACE),I(Zi);function Y(k){u[k]!==!0&&(s.enable(k),u[k]=!0)}function ne(k){u[k]!==!1&&(s.disable(k),u[k]=!1)}function Se(k,he){return h[k]!==he?(s.bindFramebuffer(k,he),h[k]=he,k===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=he),k===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=he),!0):!1}function ge(k,he){let ce=d,Le=!1;if(k){ce=f.get(he),ce===void 0&&(ce=[],f.set(he,ce));const ue=k.textures;if(ce.length!==ue.length||ce[0]!==s.COLOR_ATTACHMENT0){for(let se=0,Ae=ue.length;se<Ae;se++)ce[se]=s.COLOR_ATTACHMENT0+se;ce.length=ue.length,Le=!0}}else ce[0]!==s.BACK&&(ce[0]=s.BACK,Le=!0);Le&&s.drawBuffers(ce)}function ve(k){return g!==k?(s.useProgram(k),g=k,!0):!1}const fe={[gr]:s.FUNC_ADD,[e_]:s.FUNC_SUBTRACT,[t_]:s.FUNC_REVERSE_SUBTRACT};fe[n_]=s.MIN,fe[i_]=s.MAX;const Ue={[r_]:s.ZERO,[s_]:s.ONE,[a_]:s.SRC_COLOR,[dc]:s.SRC_ALPHA,[f_]:s.SRC_ALPHA_SATURATE,[u_]:s.DST_COLOR,[l_]:s.DST_ALPHA,[o_]:s.ONE_MINUS_SRC_COLOR,[pc]:s.ONE_MINUS_SRC_ALPHA,[h_]:s.ONE_MINUS_DST_COLOR,[c_]:s.ONE_MINUS_DST_ALPHA,[d_]:s.CONSTANT_COLOR,[p_]:s.ONE_MINUS_CONSTANT_COLOR,[m_]:s.CONSTANT_ALPHA,[__]:s.ONE_MINUS_CONSTANT_ALPHA};function I(k,he,ce,Le,ue,se,Ae,Ne,Oe,He){if(k===Zi){_===!0&&(ne(s.BLEND),_=!1);return}if(_===!1&&(Y(s.BLEND),_=!0),k!==$m){if(k!==p||He!==x){if((m!==gr||v!==gr)&&(s.blendEquation(s.FUNC_ADD),m=gr,v=gr),He)switch(k){case is:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ih:s.blendFunc(s.ONE,s.ONE);break;case Nh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case is:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ih:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Nh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}y=null,S=null,b=null,w=null,T.set(0,0,0),A=0,p=k,x=He}return}ue=ue||he,se=se||ce,Ae=Ae||Le,(he!==m||ue!==v)&&(s.blendEquationSeparate(fe[he],fe[ue]),m=he,v=ue),(ce!==y||Le!==S||se!==b||Ae!==w)&&(s.blendFuncSeparate(Ue[ce],Ue[Le],Ue[se],Ue[Ae]),y=ce,S=Le,b=se,w=Ae),(Ne.equals(T)===!1||Oe!==A)&&(s.blendColor(Ne.r,Ne.g,Ne.b,Oe),T.copy(Ne),A=Oe),p=k,x=!1}function Be(k,he){k.side===bn?ne(s.CULL_FACE):Y(s.CULL_FACE);let ce=k.side===dn;he&&(ce=!ce),Re(ce),k.blending===is&&k.transparent===!1?I(Zi):I(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);const Le=k.stencilWrite;o.setTest(Le),Le&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ee(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Y(s.SAMPLE_ALPHA_TO_COVERAGE):ne(s.SAMPLE_ALPHA_TO_COVERAGE)}function Re(k){M!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),M=k)}function Ie(k){k!==Zm?(Y(s.CULL_FACE),k!==D&&(k===Uh?s.cullFace(s.BACK):k===Jm?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ne(s.CULL_FACE),D=k}function le(k){k!==P&&(O&&s.lineWidth(k),P=k)}function Ee(k,he,ce){k?(Y(s.POLYGON_OFFSET_FILL),(L!==he||U!==ce)&&(s.polygonOffset(he,ce),L=he,U=ce)):ne(s.POLYGON_OFFSET_FILL)}function de(k){k?Y(s.SCISSOR_TEST):ne(s.SCISSOR_TEST)}function te(k){k===void 0&&(k=s.TEXTURE0+V-1),J!==k&&(s.activeTexture(k),J=k)}function De(k,he,ce){ce===void 0&&(J===null?ce=s.TEXTURE0+V-1:ce=J);let Le=j[ce];Le===void 0&&(Le={type:void 0,texture:void 0},j[ce]=Le),(Le.type!==k||Le.texture!==he)&&(J!==ce&&(s.activeTexture(ce),J=ce),s.bindTexture(k,he||ie[k]),Le.type=k,Le.texture=he)}function C(){const k=j[J];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function z(){try{s.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ae(){try{s.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $(){try{s.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Q(){try{s.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xe(){try{s.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function me(){try{s.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Me(){try{s.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function be(){try{s.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function oe(){try{s.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pe(k){ee.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),ee.copy(k))}function _e(k){F.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),F.copy(k))}function we(k,he){let ce=c.get(he);ce===void 0&&(ce=new WeakMap,c.set(he,ce));let Le=ce.get(k);Le===void 0&&(Le=s.getUniformBlockIndex(he,k.name),ce.set(k,Le))}function ye(k,he){const Le=c.get(he).get(k);l.get(he)!==Le&&(s.uniformBlockBinding(he,Le,k.__bindingPointIndex),l.set(he,Le))}function ze(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},J=null,j={},h={},f=new WeakMap,d=[],g=null,_=!1,p=null,m=null,y=null,S=null,v=null,b=null,w=null,T=new je(0,0,0),A=0,x=!1,M=null,D=null,P=null,L=null,U=null,ee.set(0,0,s.canvas.width,s.canvas.height),F.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Y,disable:ne,bindFramebuffer:Se,drawBuffers:ge,useProgram:ve,setBlending:I,setMaterial:Be,setFlipSided:Re,setCullFace:Ie,setLineWidth:le,setPolygonOffset:Ee,setScissorTest:de,activeTexture:te,bindTexture:De,unbindTexture:C,compressedTexImage2D:E,compressedTexImage3D:z,texImage2D:be,texImage3D:oe,updateUBOMapping:we,uniformBlockBinding:ye,texStorage2D:me,texStorage3D:Me,texSubImage2D:ae,texSubImage3D:$,compressedTexSubImage2D:Q,compressedTexSubImage3D:xe,scissor:pe,viewport:_e,reset:ze}}function WS(s,e,t,i,n,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new We,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,E){return d?new OffscreenCanvas(C,E):va("canvas")}function _(C,E,z){let ae=1;const $=De(C);if(($.width>z||$.height>z)&&(ae=z/Math.max($.width,$.height)),ae<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Q=Math.floor(ae*$.width),xe=Math.floor(ae*$.height);h===void 0&&(h=g(Q,xe));const me=E?g(Q,xe):h;return me.width=Q,me.height=xe,me.getContext("2d").drawImage(C,0,0,Q,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+Q+"x"+xe+")."),me}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),C;return C}function p(C){return C.generateMipmaps}function m(C){s.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(C,E,z,ae,$=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Q=E;if(E===s.RED&&(z===s.FLOAT&&(Q=s.R32F),z===s.HALF_FLOAT&&(Q=s.R16F),z===s.UNSIGNED_BYTE&&(Q=s.R8)),E===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(Q=s.R8UI),z===s.UNSIGNED_SHORT&&(Q=s.R16UI),z===s.UNSIGNED_INT&&(Q=s.R32UI),z===s.BYTE&&(Q=s.R8I),z===s.SHORT&&(Q=s.R16I),z===s.INT&&(Q=s.R32I)),E===s.RG&&(z===s.FLOAT&&(Q=s.RG32F),z===s.HALF_FLOAT&&(Q=s.RG16F),z===s.UNSIGNED_BYTE&&(Q=s.RG8)),E===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(Q=s.RG8UI),z===s.UNSIGNED_SHORT&&(Q=s.RG16UI),z===s.UNSIGNED_INT&&(Q=s.RG32UI),z===s.BYTE&&(Q=s.RG8I),z===s.SHORT&&(Q=s.RG16I),z===s.INT&&(Q=s.RG32I)),E===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&(Q=s.RGB8UI),z===s.UNSIGNED_SHORT&&(Q=s.RGB16UI),z===s.UNSIGNED_INT&&(Q=s.RGB32UI),z===s.BYTE&&(Q=s.RGB8I),z===s.SHORT&&(Q=s.RGB16I),z===s.INT&&(Q=s.RGB32I)),E===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&(Q=s.RGBA8UI),z===s.UNSIGNED_SHORT&&(Q=s.RGBA16UI),z===s.UNSIGNED_INT&&(Q=s.RGBA32UI),z===s.BYTE&&(Q=s.RGBA8I),z===s.SHORT&&(Q=s.RGBA16I),z===s.INT&&(Q=s.RGBA32I)),E===s.RGB&&z===s.UNSIGNED_INT_5_9_9_9_REV&&(Q=s.RGB9_E5),E===s.RGBA){const xe=$?No:rt.getTransfer(ae);z===s.FLOAT&&(Q=s.RGBA32F),z===s.HALF_FLOAT&&(Q=s.RGBA16F),z===s.UNSIGNED_BYTE&&(Q=xe===lt?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function v(C,E){let z;return C?E===null||E===br||E===da?z=s.DEPTH24_STENCIL8:E===Zn?z=s.DEPTH32F_STENCIL8:E===fa&&(z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===br||E===da?z=s.DEPTH_COMPONENT24:E===Zn?z=s.DEPTH_COMPONENT32F:E===fa&&(z=s.DEPTH_COMPONENT16),z}function b(C,E){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==sn&&C.minFilter!==rn?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function w(C){const E=C.target;E.removeEventListener("dispose",w),A(E),E.isVideoTexture&&u.delete(E)}function T(C){const E=C.target;E.removeEventListener("dispose",T),M(E)}function A(C){const E=i.get(C);if(E.__webglInit===void 0)return;const z=C.source,ae=f.get(z);if(ae){const $=ae[E.__cacheKey];$.usedTimes--,$.usedTimes===0&&x(C),Object.keys(ae).length===0&&f.delete(z)}i.remove(C)}function x(C){const E=i.get(C);s.deleteTexture(E.__webglTexture);const z=C.source,ae=f.get(z);delete ae[E.__cacheKey],a.memory.textures--}function M(C){const E=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(E.__webglFramebuffer[ae]))for(let $=0;$<E.__webglFramebuffer[ae].length;$++)s.deleteFramebuffer(E.__webglFramebuffer[ae][$]);else s.deleteFramebuffer(E.__webglFramebuffer[ae]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[ae])}else{if(Array.isArray(E.__webglFramebuffer))for(let ae=0;ae<E.__webglFramebuffer.length;ae++)s.deleteFramebuffer(E.__webglFramebuffer[ae]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ae=0;ae<E.__webglColorRenderbuffer.length;ae++)E.__webglColorRenderbuffer[ae]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[ae]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const z=C.textures;for(let ae=0,$=z.length;ae<$;ae++){const Q=i.get(z[ae]);Q.__webglTexture&&(s.deleteTexture(Q.__webglTexture),a.memory.textures--),i.remove(z[ae])}i.remove(C)}let D=0;function P(){D=0}function L(){const C=D;return C>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+n.maxTextures),D+=1,C}function U(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function V(C,E){const z=i.get(C);if(C.isVideoTexture&&de(C),C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){const ae=C.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(z,C,E);return}}t.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+E)}function O(C,E){const z=i.get(C);if(C.version>0&&z.__version!==C.version){ie(z,C,E);return}t.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+E)}function K(C,E){const z=i.get(C);if(C.version>0&&z.__version!==C.version){ie(z,C,E);return}t.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+E)}function W(C,E){const z=i.get(C);if(C.version>0&&z.__version!==C.version){Y(z,C,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+E)}const J={[ps]:s.REPEAT,[Xi]:s.CLAMP_TO_EDGE,[Io]:s.MIRRORED_REPEAT},j={[sn]:s.NEAREST,[Hd]:s.NEAREST_MIPMAP_NEAREST,[$s]:s.NEAREST_MIPMAP_LINEAR,[rn]:s.LINEAR,[xo]:s.LINEAR_MIPMAP_NEAREST,[wi]:s.LINEAR_MIPMAP_LINEAR},N={[D_]:s.NEVER,[O_]:s.ALWAYS,[L_]:s.LESS,[ep]:s.LEQUAL,[U_]:s.EQUAL,[F_]:s.GEQUAL,[I_]:s.GREATER,[N_]:s.NOTEQUAL};function X(C,E){if(E.type===Zn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===rn||E.magFilter===xo||E.magFilter===$s||E.magFilter===wi||E.minFilter===rn||E.minFilter===xo||E.minFilter===$s||E.minFilter===wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,J[E.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,J[E.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,J[E.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,j[E.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,j[E.minFilter]),E.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,N[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===sn||E.minFilter!==$s&&E.minFilter!==wi||E.type===Zn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,n.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function ee(C,E){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",w));const ae=E.source;let $=f.get(ae);$===void 0&&($={},f.set(ae,$));const Q=U(E);if(Q!==C.__cacheKey){$[Q]===void 0&&($[Q]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,z=!0),$[Q].usedTimes++;const xe=$[C.__cacheKey];xe!==void 0&&($[C.__cacheKey].usedTimes--,xe.usedTimes===0&&x(E)),C.__cacheKey=Q,C.__webglTexture=$[Q].texture}return z}function F(C,E,z){return Math.floor(Math.floor(C/z)/E)}function B(C,E,z,ae){const Q=C.updateRanges;if(Q.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,z,ae,E.data);else{Q.sort((oe,pe)=>oe.start-pe.start);let xe=0;for(let oe=1;oe<Q.length;oe++){const pe=Q[xe],_e=Q[oe],we=pe.start+pe.count,ye=F(_e.start,E.width,4),ze=F(pe.start,E.width,4);_e.start<=we+1&&ye===ze&&F(_e.start+_e.count-1,E.width,4)===ye?pe.count=Math.max(pe.count,_e.start+_e.count-pe.start):(++xe,Q[xe]=_e)}Q.length=xe+1;const me=s.getParameter(s.UNPACK_ROW_LENGTH),Me=s.getParameter(s.UNPACK_SKIP_PIXELS),be=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let oe=0,pe=Q.length;oe<pe;oe++){const _e=Q[oe],we=Math.floor(_e.start/4),ye=Math.ceil(_e.count/4),ze=we%E.width,k=Math.floor(we/E.width),he=ye,ce=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ze),s.pixelStorei(s.UNPACK_SKIP_ROWS,k),t.texSubImage2D(s.TEXTURE_2D,0,ze,k,he,ce,z,ae,E.data)}C.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,me),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Me),s.pixelStorei(s.UNPACK_SKIP_ROWS,be)}}function ie(C,E,z){let ae=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ae=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ae=s.TEXTURE_3D);const $=ee(C,E),Q=E.source;t.bindTexture(ae,C.__webglTexture,s.TEXTURE0+z);const xe=i.get(Q);if(Q.version!==xe.__version||$===!0){t.activeTexture(s.TEXTURE0+z);const me=rt.getPrimaries(rt.workingColorSpace),Me=E.colorSpace===Wi?null:rt.getPrimaries(E.colorSpace),be=E.colorSpace===Wi||me===Me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let oe=_(E.image,!1,n.maxTextureSize);oe=te(E,oe);const pe=r.convert(E.format,E.colorSpace),_e=r.convert(E.type);let we=S(E.internalFormat,pe,_e,E.colorSpace,E.isVideoTexture);X(ae,E);let ye;const ze=E.mipmaps,k=E.isVideoTexture!==!0,he=xe.__version===void 0||$===!0,ce=Q.dataReady,Le=b(E,oe);if(E.isDepthTexture)we=v(E.format===ma,E.type),he&&(k?t.texStorage2D(s.TEXTURE_2D,1,we,oe.width,oe.height):t.texImage2D(s.TEXTURE_2D,0,we,oe.width,oe.height,0,pe,_e,null));else if(E.isDataTexture)if(ze.length>0){k&&he&&t.texStorage2D(s.TEXTURE_2D,Le,we,ze[0].width,ze[0].height);for(let ue=0,se=ze.length;ue<se;ue++)ye=ze[ue],k?ce&&t.texSubImage2D(s.TEXTURE_2D,ue,0,0,ye.width,ye.height,pe,_e,ye.data):t.texImage2D(s.TEXTURE_2D,ue,we,ye.width,ye.height,0,pe,_e,ye.data);E.generateMipmaps=!1}else k?(he&&t.texStorage2D(s.TEXTURE_2D,Le,we,oe.width,oe.height),ce&&B(E,oe,pe,_e)):t.texImage2D(s.TEXTURE_2D,0,we,oe.width,oe.height,0,pe,_e,oe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){k&&he&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Le,we,ze[0].width,ze[0].height,oe.depth);for(let ue=0,se=ze.length;ue<se;ue++)if(ye=ze[ue],E.format!==kn)if(pe!==null)if(k){if(ce)if(E.layerUpdates.size>0){const Ae=Cf(ye.width,ye.height,E.format,E.type);for(const Ne of E.layerUpdates){const Oe=ye.data.subarray(Ne*Ae/ye.data.BYTES_PER_ELEMENT,(Ne+1)*Ae/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,Ne,ye.width,ye.height,1,pe,Oe)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,0,ye.width,ye.height,oe.depth,pe,ye.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ue,we,ye.width,ye.height,oe.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?ce&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,0,ye.width,ye.height,oe.depth,pe,_e,ye.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ue,we,ye.width,ye.height,oe.depth,0,pe,_e,ye.data)}else{k&&he&&t.texStorage2D(s.TEXTURE_2D,Le,we,ze[0].width,ze[0].height);for(let ue=0,se=ze.length;ue<se;ue++)ye=ze[ue],E.format!==kn?pe!==null?k?ce&&t.compressedTexSubImage2D(s.TEXTURE_2D,ue,0,0,ye.width,ye.height,pe,ye.data):t.compressedTexImage2D(s.TEXTURE_2D,ue,we,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?ce&&t.texSubImage2D(s.TEXTURE_2D,ue,0,0,ye.width,ye.height,pe,_e,ye.data):t.texImage2D(s.TEXTURE_2D,ue,we,ye.width,ye.height,0,pe,_e,ye.data)}else if(E.isDataArrayTexture)if(k){if(he&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Le,we,oe.width,oe.height,oe.depth),ce)if(E.layerUpdates.size>0){const ue=Cf(oe.width,oe.height,E.format,E.type);for(const se of E.layerUpdates){const Ae=oe.data.subarray(se*ue/oe.data.BYTES_PER_ELEMENT,(se+1)*ue/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,se,oe.width,oe.height,1,pe,_e,Ae)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,pe,_e,oe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,we,oe.width,oe.height,oe.depth,0,pe,_e,oe.data);else if(E.isData3DTexture)k?(he&&t.texStorage3D(s.TEXTURE_3D,Le,we,oe.width,oe.height,oe.depth),ce&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,pe,_e,oe.data)):t.texImage3D(s.TEXTURE_3D,0,we,oe.width,oe.height,oe.depth,0,pe,_e,oe.data);else if(E.isFramebufferTexture){if(he)if(k)t.texStorage2D(s.TEXTURE_2D,Le,we,oe.width,oe.height);else{let ue=oe.width,se=oe.height;for(let Ae=0;Ae<Le;Ae++)t.texImage2D(s.TEXTURE_2D,Ae,we,ue,se,0,pe,_e,null),ue>>=1,se>>=1}}else if(ze.length>0){if(k&&he){const ue=De(ze[0]);t.texStorage2D(s.TEXTURE_2D,Le,we,ue.width,ue.height)}for(let ue=0,se=ze.length;ue<se;ue++)ye=ze[ue],k?ce&&t.texSubImage2D(s.TEXTURE_2D,ue,0,0,pe,_e,ye):t.texImage2D(s.TEXTURE_2D,ue,we,pe,_e,ye);E.generateMipmaps=!1}else if(k){if(he){const ue=De(oe);t.texStorage2D(s.TEXTURE_2D,Le,we,ue.width,ue.height)}ce&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,pe,_e,oe)}else t.texImage2D(s.TEXTURE_2D,0,we,pe,_e,oe);p(E)&&m(ae),xe.__version=Q.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Y(C,E,z){if(E.image.length!==6)return;const ae=ee(C,E),$=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+z);const Q=i.get($);if($.version!==Q.__version||ae===!0){t.activeTexture(s.TEXTURE0+z);const xe=rt.getPrimaries(rt.workingColorSpace),me=E.colorSpace===Wi?null:rt.getPrimaries(E.colorSpace),Me=E.colorSpace===Wi||xe===me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const be=E.isCompressedTexture||E.image[0].isCompressedTexture,oe=E.image[0]&&E.image[0].isDataTexture,pe=[];for(let se=0;se<6;se++)!be&&!oe?pe[se]=_(E.image[se],!0,n.maxCubemapSize):pe[se]=oe?E.image[se].image:E.image[se],pe[se]=te(E,pe[se]);const _e=pe[0],we=r.convert(E.format,E.colorSpace),ye=r.convert(E.type),ze=S(E.internalFormat,we,ye,E.colorSpace),k=E.isVideoTexture!==!0,he=Q.__version===void 0||ae===!0,ce=$.dataReady;let Le=b(E,_e);X(s.TEXTURE_CUBE_MAP,E);let ue;if(be){k&&he&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Le,ze,_e.width,_e.height);for(let se=0;se<6;se++){ue=pe[se].mipmaps;for(let Ae=0;Ae<ue.length;Ae++){const Ne=ue[Ae];E.format!==kn?we!==null?k?ce&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ae,0,0,Ne.width,Ne.height,we,Ne.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ae,ze,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ae,0,0,Ne.width,Ne.height,we,ye,Ne.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ae,ze,Ne.width,Ne.height,0,we,ye,Ne.data)}}}else{if(ue=E.mipmaps,k&&he){ue.length>0&&Le++;const se=De(pe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Le,ze,se.width,se.height)}for(let se=0;se<6;se++)if(oe){k?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,pe[se].width,pe[se].height,we,ye,pe[se].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ze,pe[se].width,pe[se].height,0,we,ye,pe[se].data);for(let Ae=0;Ae<ue.length;Ae++){const Oe=ue[Ae].image[se].image;k?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ae+1,0,0,Oe.width,Oe.height,we,ye,Oe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ae+1,ze,Oe.width,Oe.height,0,we,ye,Oe.data)}}else{k?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,we,ye,pe[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ze,we,ye,pe[se]);for(let Ae=0;Ae<ue.length;Ae++){const Ne=ue[Ae];k?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ae+1,0,0,we,ye,Ne.image[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ae+1,ze,we,ye,Ne.image[se])}}}p(E)&&m(s.TEXTURE_CUBE_MAP),Q.__version=$.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function ne(C,E,z,ae,$,Q){const xe=r.convert(z.format,z.colorSpace),me=r.convert(z.type),Me=S(z.internalFormat,xe,me,z.colorSpace),be=i.get(E),oe=i.get(z);if(oe.__renderTarget=E,!be.__hasExternalTextures){const pe=Math.max(1,E.width>>Q),_e=Math.max(1,E.height>>Q);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?t.texImage3D($,Q,Me,pe,_e,E.depth,0,xe,me,null):t.texImage2D($,Q,Me,pe,_e,0,xe,me,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),Ee(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ae,$,oe.__webglTexture,0,le(E)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ae,$,oe.__webglTexture,Q),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Se(C,E,z){if(s.bindRenderbuffer(s.RENDERBUFFER,C),E.depthBuffer){const ae=E.depthTexture,$=ae&&ae.isDepthTexture?ae.type:null,Q=v(E.stencilBuffer,$),xe=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=le(E);Ee(E)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,me,Q,E.width,E.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,me,Q,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Q,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,C)}else{const ae=E.textures;for(let $=0;$<ae.length;$++){const Q=ae[$],xe=r.convert(Q.format,Q.colorSpace),me=r.convert(Q.type),Me=S(Q.internalFormat,xe,me,Q.colorSpace),be=le(E);z&&Ee(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,be,Me,E.width,E.height):Ee(E)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,be,Me,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Me,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ge(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ae=i.get(E.depthTexture);ae.__renderTarget=E,(!ae.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),V(E.depthTexture,0);const $=ae.__webglTexture,Q=le(E);if(E.depthTexture.format===pa)Ee(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0);else if(E.depthTexture.format===ma)Ee(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function ve(C){const E=i.get(C),z=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){const ae=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ae){const $=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ae.removeEventListener("dispose",$)};ae.addEventListener("dispose",$),E.__depthDisposeCallback=$}E.__boundDepthTexture=ae}if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const ae=C.texture.mipmaps;ae&&ae.length>0?ge(E.__webglFramebuffer[0],C):ge(E.__webglFramebuffer,C)}else if(z){E.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[ae]),E.__webglDepthbuffer[ae]===void 0)E.__webglDepthbuffer[ae]=s.createRenderbuffer(),Se(E.__webglDepthbuffer[ae],C,!1);else{const $=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=E.__webglDepthbuffer[ae];s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,Q)}}else{const ae=C.texture.mipmaps;if(ae&&ae.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Se(E.__webglDepthbuffer,C,!1);else{const $=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,Q)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function fe(C,E,z){const ae=i.get(C);E!==void 0&&ne(ae.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&ve(C)}function Ue(C){const E=C.texture,z=i.get(C),ae=i.get(E);C.addEventListener("dispose",T);const $=C.textures,Q=C.isWebGLCubeRenderTarget===!0,xe=$.length>1;if(xe||(ae.__webglTexture===void 0&&(ae.__webglTexture=s.createTexture()),ae.__version=E.version,a.memory.textures++),Q){z.__webglFramebuffer=[];for(let me=0;me<6;me++)if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer[me]=[];for(let Me=0;Me<E.mipmaps.length;Me++)z.__webglFramebuffer[me][Me]=s.createFramebuffer()}else z.__webglFramebuffer[me]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer=[];for(let me=0;me<E.mipmaps.length;me++)z.__webglFramebuffer[me]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(xe)for(let me=0,Me=$.length;me<Me;me++){const be=i.get($[me]);be.__webglTexture===void 0&&(be.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&Ee(C)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let me=0;me<$.length;me++){const Me=$[me];z.__webglColorRenderbuffer[me]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[me]);const be=r.convert(Me.format,Me.colorSpace),oe=r.convert(Me.type),pe=S(Me.internalFormat,be,oe,Me.colorSpace,C.isXRRenderTarget===!0),_e=le(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,_e,pe,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,z.__webglColorRenderbuffer[me])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),Se(z.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Q){t.bindTexture(s.TEXTURE_CUBE_MAP,ae.__webglTexture),X(s.TEXTURE_CUBE_MAP,E);for(let me=0;me<6;me++)if(E.mipmaps&&E.mipmaps.length>0)for(let Me=0;Me<E.mipmaps.length;Me++)ne(z.__webglFramebuffer[me][Me],C,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Me);else ne(z.__webglFramebuffer[me],C,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);p(E)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let me=0,Me=$.length;me<Me;me++){const be=$[me],oe=i.get(be);t.bindTexture(s.TEXTURE_2D,oe.__webglTexture),X(s.TEXTURE_2D,be),ne(z.__webglFramebuffer,C,be,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,0),p(be)&&m(s.TEXTURE_2D)}t.unbindTexture()}else{let me=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(me=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(me,ae.__webglTexture),X(me,E),E.mipmaps&&E.mipmaps.length>0)for(let Me=0;Me<E.mipmaps.length;Me++)ne(z.__webglFramebuffer[Me],C,E,s.COLOR_ATTACHMENT0,me,Me);else ne(z.__webglFramebuffer,C,E,s.COLOR_ATTACHMENT0,me,0);p(E)&&m(me),t.unbindTexture()}C.depthBuffer&&ve(C)}function I(C){const E=C.textures;for(let z=0,ae=E.length;z<ae;z++){const $=E[z];if(p($)){const Q=y(C),xe=i.get($).__webglTexture;t.bindTexture(Q,xe),m(Q),t.unbindTexture()}}}const Be=[],Re=[];function Ie(C){if(C.samples>0){if(Ee(C)===!1){const E=C.textures,z=C.width,ae=C.height;let $=s.COLOR_BUFFER_BIT;const Q=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=i.get(C),me=E.length>1;if(me)for(let be=0;be<E.length;be++)t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const Me=C.texture.mipmaps;Me&&Me.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let be=0;be<E.length;be++){if(C.resolveDepthBuffer&&(C.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),me){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,xe.__webglColorRenderbuffer[be]);const oe=i.get(E[be]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,oe,0)}s.blitFramebuffer(0,0,z,ae,0,0,z,ae,$,s.NEAREST),l===!0&&(Be.length=0,Re.length=0,Be.push(s.COLOR_ATTACHMENT0+be),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Be.push(Q),Re.push(Q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Re)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Be))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),me)for(let be=0;be<E.length;be++){t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,xe.__webglColorRenderbuffer[be]);const oe=i.get(E[be]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,oe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const E=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function le(C){return Math.min(n.maxSamples,C.samples)}function Ee(C){const E=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function de(C){const E=a.render.frame;u.get(C)!==E&&(u.set(C,E),C.update())}function te(C,E){const z=C.colorSpace,ae=C.format,$=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==on&&z!==Wi&&(rt.getTransfer(z)===lt?(ae!==kn||$!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),E}function De(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=P,this.setTexture2D=V,this.setTexture2DArray=O,this.setTexture3D=K,this.setTextureCube=W,this.rebindTextures=fe,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=Ee}function XS(s,e){function t(i,n=Wi){let r;const a=rt.getTransfer(n);if(i===hi)return s.UNSIGNED_BYTE;if(i===Cu)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Pu)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Yd)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Wd)return s.BYTE;if(i===Xd)return s.SHORT;if(i===fa)return s.UNSIGNED_SHORT;if(i===Ru)return s.INT;if(i===br)return s.UNSIGNED_INT;if(i===Zn)return s.FLOAT;if(i===wa)return s.HALF_FLOAT;if(i===jd)return s.ALPHA;if(i===qd)return s.RGB;if(i===kn)return s.RGBA;if(i===pa)return s.DEPTH_COMPONENT;if(i===ma)return s.DEPTH_STENCIL;if(i===Du)return s.RED;if(i===Lu)return s.RED_INTEGER;if(i===Kd)return s.RG;if(i===Uu)return s.RG_INTEGER;if(i===Iu)return s.RGBA_INTEGER;if(i===yo||i===So||i===Mo||i===To)if(a===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===yo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===yo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===So)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Mo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===To)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ec||i===bc||i===wc||i===Ac)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ec)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===bc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===wc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ac)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Rc||i===Cc||i===Pc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Rc||i===Cc)return a===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Pc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Dc||i===Lc||i===Uc||i===Ic||i===Nc||i===Fc||i===Oc||i===kc||i===Bc||i===zc||i===Gc||i===Vc||i===Hc||i===Wc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Dc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Lc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Uc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ic)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Nc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Fc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Oc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===kc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Bc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===zc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Gc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Vc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Hc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Eo||i===Xc||i===Yc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Eo)return a===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Yc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Zd||i===jc||i===qc||i===Kc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Eo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===jc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===qc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Kc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===da?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}const YS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jS=`
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

}`;class qS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const n=new Pt,r=e.properties.get(n);r.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new er({vertexShader:YS,fragmentShader:jS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ct(new ir(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class KS extends Cr{constructor(e,t){super();const i=this;let n=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=new qS,p=t.getContextAttributes();let m=null,y=null;const S=[],v=[],b=new We;let w=null;const T=new tn;T.viewport=new st;const A=new tn;A.viewport=new st;const x=[T,A],M=new s0;let D=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let B=S[F];return B===void 0&&(B=new Fl,S[F]=B),B.getTargetRaySpace()},this.getControllerGrip=function(F){let B=S[F];return B===void 0&&(B=new Fl,S[F]=B),B.getGripSpace()},this.getHand=function(F){let B=S[F];return B===void 0&&(B=new Fl,S[F]=B),B.getHandSpace()};function L(F){const B=v.indexOf(F.inputSource);if(B===-1)return;const ie=S[B];ie!==void 0&&(ie.update(F.inputSource,F.frame,c||a),ie.dispatchEvent({type:F.type,data:F.inputSource}))}function U(){n.removeEventListener("select",L),n.removeEventListener("selectstart",L),n.removeEventListener("selectend",L),n.removeEventListener("squeeze",L),n.removeEventListener("squeezestart",L),n.removeEventListener("squeezeend",L),n.removeEventListener("end",U),n.removeEventListener("inputsourceschange",V);for(let F=0;F<S.length;F++){const B=v[F];B!==null&&(v[F]=null,S[F].disconnect(B))}D=null,P=null,_.reset(),e.setRenderTarget(m),d=null,f=null,h=null,n=null,y=null,ee.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(F){if(n=F,n!==null){if(m=e.getRenderTarget(),n.addEventListener("select",L),n.addEventListener("selectstart",L),n.addEventListener("selectend",L),n.addEventListener("squeeze",L),n.addEventListener("squeezestart",L),n.addEventListener("squeezeend",L),n.addEventListener("end",U),n.addEventListener("inputsourceschange",V),p.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(b),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,Y=null,ne=null;p.depth&&(ne=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=p.stencil?ma:pa,Y=p.stencil?da:br);const Se={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:r};h=new XRWebGLBinding(n,t),f=h.createProjectionLayer(Se),n.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new wr(f.textureWidth,f.textureHeight,{format:kn,type:hi,depthTexture:new dp(f.textureWidth,f.textureHeight,Y,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ie={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(n,t,ie),n.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new wr(d.framebufferWidth,d.framebufferHeight,{format:kn,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),ee.setContext(n),ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function V(F){for(let B=0;B<F.removed.length;B++){const ie=F.removed[B],Y=v.indexOf(ie);Y>=0&&(v[Y]=null,S[Y].disconnect(ie))}for(let B=0;B<F.added.length;B++){const ie=F.added[B];let Y=v.indexOf(ie);if(Y===-1){for(let Se=0;Se<S.length;Se++)if(Se>=v.length){v.push(ie),Y=Se;break}else if(v[Se]===null){v[Se]=ie,Y=Se;break}if(Y===-1)break}const ne=S[Y];ne&&ne.connect(ie)}}const O=new G,K=new G;function W(F,B,ie){O.setFromMatrixPosition(B.matrixWorld),K.setFromMatrixPosition(ie.matrixWorld);const Y=O.distanceTo(K),ne=B.projectionMatrix.elements,Se=ie.projectionMatrix.elements,ge=ne[14]/(ne[10]-1),ve=ne[14]/(ne[10]+1),fe=(ne[9]+1)/ne[5],Ue=(ne[9]-1)/ne[5],I=(ne[8]-1)/ne[0],Be=(Se[8]+1)/Se[0],Re=ge*I,Ie=ge*Be,le=Y/(-I+Be),Ee=le*-I;if(B.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Ee),F.translateZ(le),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),ne[10]===-1)F.projectionMatrix.copy(B.projectionMatrix),F.projectionMatrixInverse.copy(B.projectionMatrixInverse);else{const de=ge+le,te=ve+le,De=Re-Ee,C=Ie+(Y-Ee),E=fe*ve/te*de,z=Ue*ve/te*de;F.projectionMatrix.makePerspective(De,C,E,z,de,te),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function J(F,B){B===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(B.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(n===null)return;let B=F.near,ie=F.far;_.texture!==null&&(_.depthNear>0&&(B=_.depthNear),_.depthFar>0&&(ie=_.depthFar)),M.near=A.near=T.near=B,M.far=A.far=T.far=ie,(D!==M.near||P!==M.far)&&(n.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,P=M.far),T.layers.mask=F.layers.mask|2,A.layers.mask=F.layers.mask|4,M.layers.mask=T.layers.mask|A.layers.mask;const Y=F.parent,ne=M.cameras;J(M,Y);for(let Se=0;Se<ne.length;Se++)J(ne[Se],Y);ne.length===2?W(M,T,A):M.projectionMatrix.copy(T.projectionMatrix),j(F,M,Y)};function j(F,B,ie){ie===null?F.matrix.copy(B.matrixWorld):(F.matrix.copy(ie.matrixWorld),F.matrix.invert(),F.matrix.multiply(B.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(B.projectionMatrix),F.projectionMatrixInverse.copy(B.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=ms*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(F){l=F,f!==null&&(f.fixedFoveation=F),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=F)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let N=null;function X(F,B){if(u=B.getViewerPose(c||a),g=B,u!==null){const ie=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let Y=!1;ie.length!==M.cameras.length&&(M.cameras.length=0,Y=!0);for(let ge=0;ge<ie.length;ge++){const ve=ie[ge];let fe=null;if(d!==null)fe=d.getViewport(ve);else{const I=h.getViewSubImage(f,ve);fe=I.viewport,ge===0&&(e.setRenderTargetTextures(y,I.colorTexture,I.depthStencilTexture),e.setRenderTarget(y))}let Ue=x[ge];Ue===void 0&&(Ue=new tn,Ue.layers.enable(ge),Ue.viewport=new st,x[ge]=Ue),Ue.matrix.fromArray(ve.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(ve.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(fe.x,fe.y,fe.width,fe.height),ge===0&&(M.matrix.copy(Ue.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Y===!0&&M.cameras.push(Ue)}const ne=n.enabledFeatures;if(ne&&ne.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&h){const ge=h.getDepthInformation(ie[0]);ge&&ge.isValid&&ge.texture&&_.init(e,ge,n.renderState)}}for(let ie=0;ie<S.length;ie++){const Y=v[ie],ne=S[ie];Y!==null&&ne!==void 0&&ne.update(Y,B,c||a)}N&&N(F,B),B.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:B}),g=null}const ee=new Mp;ee.setAnimationLoop(X),this.setAnimationLoop=function(F){N=F},this.dispose=function(){}}}const ur=new Vt,ZS=new qe;function JS(s,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,ap(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,y,S,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),h(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,v)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,y,S):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===dn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===dn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=e.get(m),S=y.envMap,v=y.envMapRotation;S&&(p.envMap.value=S,ur.copy(v),ur.x*=-1,ur.y*=-1,ur.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),p.envMapRotation.value.setFromMatrix4(ZS.makeRotationFromEuler(ur)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,S){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=S*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===dn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const y=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function QS(s,e,t,i){let n={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){const v=S.program;i.uniformBlockBinding(y,v)}function c(y,S){let v=n[y.id];v===void 0&&(g(y),v=u(y),n[y.id]=v,y.addEventListener("dispose",p));const b=S.program;i.updateUBOMapping(y,b);const w=e.render.frame;r[y.id]!==w&&(f(y),r[y.id]=w)}function u(y){const S=h();y.__bindingPointIndex=S;const v=s.createBuffer(),b=y.__size,w=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,b,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,v),v}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const S=n[y.id],v=y.uniforms,b=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let w=0,T=v.length;w<T;w++){const A=Array.isArray(v[w])?v[w]:[v[w]];for(let x=0,M=A.length;x<M;x++){const D=A[x];if(d(D,w,x,b)===!0){const P=D.__offset,L=Array.isArray(D.value)?D.value:[D.value];let U=0;for(let V=0;V<L.length;V++){const O=L[V],K=_(O);typeof O=="number"||typeof O=="boolean"?(D.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,P+U,D.__data)):O.isMatrix3?(D.__data[0]=O.elements[0],D.__data[1]=O.elements[1],D.__data[2]=O.elements[2],D.__data[3]=0,D.__data[4]=O.elements[3],D.__data[5]=O.elements[4],D.__data[6]=O.elements[5],D.__data[7]=0,D.__data[8]=O.elements[6],D.__data[9]=O.elements[7],D.__data[10]=O.elements[8],D.__data[11]=0):(O.toArray(D.__data,U),U+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,P,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(y,S,v,b){const w=y.value,T=S+"_"+v;if(b[T]===void 0)return typeof w=="number"||typeof w=="boolean"?b[T]=w:b[T]=w.clone(),!0;{const A=b[T];if(typeof w=="number"||typeof w=="boolean"){if(A!==w)return b[T]=w,!0}else if(A.equals(w)===!1)return A.copy(w),!0}return!1}function g(y){const S=y.uniforms;let v=0;const b=16;for(let T=0,A=S.length;T<A;T++){const x=Array.isArray(S[T])?S[T]:[S[T]];for(let M=0,D=x.length;M<D;M++){const P=x[M],L=Array.isArray(P.value)?P.value:[P.value];for(let U=0,V=L.length;U<V;U++){const O=L[U],K=_(O),W=v%b,J=W%K.boundary,j=W+J;v+=J,j!==0&&b-j<K.storage&&(v+=b-j),P.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=v,v+=K.storage}}}const w=v%b;return w>0&&(v+=b-w),y.__size=v,y.__cache={},this}function _(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function p(y){const S=y.target;S.removeEventListener("dispose",p);const v=a.indexOf(S.__bindingPointIndex);a.splice(v,1),s.deleteBuffer(n[S.id]),delete n[S.id],delete r[S.id]}function m(){for(const y in n)s.deleteBuffer(n[y]);a=[],n={},r={}}return{bind:l,update:c,dispose:m}}class $S{constructor(e={}){const{canvas:t=eg(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),_=new Int32Array(4);let p=null,m=null;const y=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let b=!1;this._outputColorSpace=Gt;let w=0,T=0,A=null,x=-1,M=null;const D=new st,P=new st;let L=null;const U=new je(0);let V=0,O=t.width,K=t.height,W=1,J=null,j=null;const N=new st(0,0,O,K),X=new st(0,0,O,K);let ee=!1;const F=new Gu;let B=!1,ie=!1;const Y=new qe,ne=new qe,Se=new G,ge=new st,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let fe=!1;function Ue(){return A===null?W:1}let I=i;function Be(R,q){return t.getContext(R,q)}try{const R={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Au}`),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",se,!1),I===null){const q="webgl2";if(I=Be(q,R),I===null)throw Be(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Re,Ie,le,Ee,de,te,De,C,E,z,ae,$,Q,xe,me,Me,be,oe,pe,_e,we,ye,ze,k;function he(){Re=new cy(I),Re.init(),ye=new XS(I,Re),Ie=new ny(I,Re,e,ye),le=new HS(I,Re),Ie.reverseDepthBuffer&&f&&le.buffers.depth.setReversed(!0),Ee=new fy(I),de=new PS,te=new WS(I,Re,le,de,Ie,ye,Ee),De=new ry(v),C=new ly(v),E=new v0(I),ze=new ey(I,E),z=new uy(I,E,Ee,ze),ae=new py(I,z,E,Ee),pe=new dy(I,Ie,te),Me=new iy(de),$=new CS(v,De,C,Re,Ie,ze,Me),Q=new JS(v,de),xe=new LS,me=new kS(Re),oe=new $x(v,De,C,le,ae,d,l),be=new GS(v,ae,Ie),k=new QS(I,Ee,Ie,le),_e=new ty(I,Re,Ee),we=new hy(I,Re,Ee),Ee.programs=$.programs,v.capabilities=Ie,v.extensions=Re,v.properties=de,v.renderLists=xe,v.shadowMap=be,v.state=le,v.info=Ee}he();const ce=new KS(v,I);this.xr=ce,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const R=Re.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Re.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(R){R!==void 0&&(W=R,this.setSize(O,K,!1))},this.getSize=function(R){return R.set(O,K)},this.setSize=function(R,q,re=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=R,K=q,t.width=Math.floor(R*W),t.height=Math.floor(q*W),re===!0&&(t.style.width=R+"px",t.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(O*W,K*W).floor()},this.setDrawingBufferSize=function(R,q,re){O=R,K=q,W=re,t.width=Math.floor(R*re),t.height=Math.floor(q*re),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(D)},this.getViewport=function(R){return R.copy(N)},this.setViewport=function(R,q,re,H){R.isVector4?N.set(R.x,R.y,R.z,R.w):N.set(R,q,re,H),le.viewport(D.copy(N).multiplyScalar(W).round())},this.getScissor=function(R){return R.copy(X)},this.setScissor=function(R,q,re,H){R.isVector4?X.set(R.x,R.y,R.z,R.w):X.set(R,q,re,H),le.scissor(P.copy(X).multiplyScalar(W).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(R){le.setScissorTest(ee=R)},this.setOpaqueSort=function(R){J=R},this.setTransparentSort=function(R){j=R},this.getClearColor=function(R){return R.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor(...arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,re=!0){let H=0;if(R){let Z=!1;if(A!==null){const Te=A.texture.format;Z=Te===Iu||Te===Uu||Te===Lu}if(Z){const Te=A.texture.type,Ce=Te===hi||Te===br||Te===fa||Te===da||Te===Cu||Te===Pu,ke=oe.getClearColor(),Fe=oe.getClearAlpha(),Xe=ke.r,Ye=ke.g,Ge=ke.b;Ce?(g[0]=Xe,g[1]=Ye,g[2]=Ge,g[3]=Fe,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=Xe,_[1]=Ye,_[2]=Ge,_[3]=Fe,I.clearBufferiv(I.COLOR,0,_))}else H|=I.COLOR_BUFFER_BIT}q&&(H|=I.DEPTH_BUFFER_BIT),re&&(H|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",se,!1),oe.dispose(),xe.dispose(),me.dispose(),de.dispose(),De.dispose(),C.dispose(),ae.dispose(),ze.dispose(),k.dispose(),$.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",yt),ce.removeEventListener("sessionend",ln),Wt.stop()};function Le(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const R=Ee.autoReset,q=be.enabled,re=be.autoUpdate,H=be.needsUpdate,Z=be.type;he(),Ee.autoReset=R,be.enabled=q,be.autoUpdate=re,be.needsUpdate=H,be.type=Z}function se(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ae(R){const q=R.target;q.removeEventListener("dispose",Ae),Ne(q)}function Ne(R){Oe(R),de.remove(R)}function Oe(R){const q=de.get(R).programs;q!==void 0&&(q.forEach(function(re){$.releaseProgram(re)}),R.isShaderMaterial&&$.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,re,H,Z,Te){q===null&&(q=ve);const Ce=Z.isMesh&&Z.matrixWorld.determinant()<0,ke=rl(R,q,re,H,Z);le.setMaterial(H,Ce);let Fe=re.index,Xe=1;if(H.wireframe===!0){if(Fe=z.getWireframeAttribute(re),Fe===void 0)return;Xe=2}const Ye=re.drawRange,Ge=re.attributes.position;let Qe=Ye.start*Xe,it=(Ye.start+Ye.count)*Xe;Te!==null&&(Qe=Math.max(Qe,Te.start*Xe),it=Math.min(it,(Te.start+Te.count)*Xe)),Fe!==null?(Qe=Math.max(Qe,0),it=Math.min(it,Fe.count)):Ge!=null&&(Qe=Math.max(Qe,0),it=Math.min(it,Ge.count));const dt=it-Qe;if(dt<0||dt===1/0)return;ze.setup(Z,H,ke,re,Fe);let pt,tt=_e;if(Fe!==null&&(pt=E.get(Fe),tt=we,tt.setIndex(pt)),Z.isMesh)H.wireframe===!0?(le.setLineWidth(H.wireframeLinewidth*Ue()),tt.setMode(I.LINES)):tt.setMode(I.TRIANGLES);else if(Z.isLine){let Ve=H.linewidth;Ve===void 0&&(Ve=1),le.setLineWidth(Ve*Ue()),Z.isLineSegments?tt.setMode(I.LINES):Z.isLineLoop?tt.setMode(I.LINE_LOOP):tt.setMode(I.LINE_STRIP)}else Z.isPoints?tt.setMode(I.POINTS):Z.isSprite&&tt.setMode(I.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)ss("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),tt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(Re.get("WEBGL_multi_draw"))tt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Ve=Z._multiDrawStarts,Mt=Z._multiDrawCounts,$e=Z._multiDrawCount,Qt=Fe?E.get(Fe).bytesPerElement:1,ii=de.get(H).currentProgram.getUniforms();for(let kt=0;kt<$e;kt++)ii.setValue(I,"_gl_DrawID",kt),tt.render(Ve[kt]/Qt,Mt[kt])}else if(Z.isInstancedMesh)tt.renderInstances(Qe,dt,Z.count);else if(re.isInstancedBufferGeometry){const Ve=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Mt=Math.min(re.instanceCount,Ve);tt.renderInstances(Qe,dt,Mt)}else tt.render(Qe,dt)};function He(R,q,re){R.transparent===!0&&R.side===bn&&R.forceSinglePass===!1?(R.side=dn,R.needsUpdate=!0,Un(R,q,re),R.side=Pi,R.needsUpdate=!0,Un(R,q,re),R.side=bn):Un(R,q,re)}this.compile=function(R,q,re=null){re===null&&(re=R),m=me.get(re),m.init(q),S.push(m),re.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),R!==re&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),m.setupLights();const H=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Te=Z.material;if(Te)if(Array.isArray(Te))for(let Ce=0;Ce<Te.length;Ce++){const ke=Te[Ce];He(ke,re,Z),H.add(ke)}else He(Te,re,Z),H.add(Te)}),m=S.pop(),H},this.compileAsync=function(R,q,re=null){const H=this.compile(R,q,re);return new Promise(Z=>{function Te(){if(H.forEach(function(Ce){de.get(Ce).currentProgram.isReady()&&H.delete(Ce)}),H.size===0){Z(R);return}setTimeout(Te,10)}Re.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let ut=null;function ft(R){ut&&ut(R)}function yt(){Wt.stop()}function ln(){Wt.start()}const Wt=new Mp;Wt.setAnimationLoop(ft),typeof self<"u"&&Wt.setContext(self),this.setAnimationLoop=function(R){ut=R,ce.setAnimationLoop(R),R===null?Wt.stop():Wt.start()},ce.addEventListener("sessionstart",yt),ce.addEventListener("sessionend",ln),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(q),q=ce.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,q,A),m=me.get(R,S.length),m.init(q),S.push(m),ne.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),F.setFromProjectionMatrix(ne),ie=this.localClippingEnabled,B=Me.init(this.clippingPlanes,ie),p=xe.get(R,y.length),p.init(),y.push(p),ce.enabled===!0&&ce.isPresenting===!0){const Te=v.xr.getDepthSensingMesh();Te!==null&&yn(Te,q,-1/0,v.sortObjects)}yn(R,q,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(J,j),fe=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,fe&&oe.addToRenderList(p,R),this.info.render.frame++,B===!0&&Me.beginShadows();const re=m.state.shadowsArray;be.render(re,R,q),B===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=p.opaque,Z=p.transmissive;if(m.setupLights(),q.isArrayCamera){const Te=q.cameras;if(Z.length>0)for(let Ce=0,ke=Te.length;Ce<ke;Ce++){const Fe=Te[Ce];ni(H,Z,R,Fe)}fe&&oe.render(R);for(let Ce=0,ke=Te.length;Ce<ke;Ce++){const Fe=Te[Ce];Vn(p,R,Fe,Fe.viewport)}}else Z.length>0&&ni(H,Z,R,q),fe&&oe.render(R),Vn(p,R,q);A!==null&&T===0&&(te.updateMultisampleRenderTarget(A),te.updateRenderTargetMipmap(A)),R.isScene===!0&&R.onAfterRender(v,R,q),ze.resetDefaultState(),x=-1,M=null,S.pop(),S.length>0?(m=S[S.length-1],B===!0&&Me.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,y.pop(),y.length>0?p=y[y.length-1]:p=null};function yn(R,q,re,H){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)re=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||F.intersectsSprite(R)){H&&ge.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ne);const Ce=ae.update(R),ke=R.material;ke.visible&&p.push(R,Ce,ke,re,ge.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||F.intersectsObject(R))){const Ce=ae.update(R),ke=R.material;if(H&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ge.copy(R.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),ge.copy(Ce.boundingSphere.center)),ge.applyMatrix4(R.matrixWorld).applyMatrix4(ne)),Array.isArray(ke)){const Fe=Ce.groups;for(let Xe=0,Ye=Fe.length;Xe<Ye;Xe++){const Ge=Fe[Xe],Qe=ke[Ge.materialIndex];Qe&&Qe.visible&&p.push(R,Ce,Qe,re,ge.z,Ge)}}else ke.visible&&p.push(R,Ce,ke,re,ge.z,null)}}const Te=R.children;for(let Ce=0,ke=Te.length;Ce<ke;Ce++)yn(Te[Ce],q,re,H)}function Vn(R,q,re,H){const Z=R.opaque,Te=R.transmissive,Ce=R.transparent;m.setupLightsView(re),B===!0&&Me.setGlobalState(v.clippingPlanes,re),H&&le.viewport(D.copy(H)),Z.length>0&&cn(Z,q,re),Te.length>0&&cn(Te,q,re),Ce.length>0&&cn(Ce,q,re),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function ni(R,q,re,H){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[H.id]===void 0&&(m.state.transmissionRenderTarget[H.id]=new wr(1,1,{generateMipmaps:!0,type:Re.has("EXT_color_buffer_half_float")||Re.has("EXT_color_buffer_float")?wa:hi,minFilter:wi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const Te=m.state.transmissionRenderTarget[H.id],Ce=H.viewport||D;Te.setSize(Ce.z*v.transmissionResolutionScale,Ce.w*v.transmissionResolutionScale);const ke=v.getRenderTarget();v.setRenderTarget(Te),v.getClearColor(U),V=v.getClearAlpha(),V<1&&v.setClearColor(16777215,.5),v.clear(),fe&&oe.render(re);const Fe=v.toneMapping;v.toneMapping=Ji;const Xe=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),m.setupLightsView(H),B===!0&&Me.setGlobalState(v.clippingPlanes,H),cn(R,re,H),te.updateMultisampleRenderTarget(Te),te.updateRenderTargetMipmap(Te),Re.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Ge=0,Qe=q.length;Ge<Qe;Ge++){const it=q[Ge],dt=it.object,pt=it.geometry,tt=it.material,Ve=it.group;if(tt.side===bn&&dt.layers.test(H.layers)){const Mt=tt.side;tt.side=dn,tt.needsUpdate=!0,Ut(dt,re,H,pt,tt,Ve),tt.side=Mt,tt.needsUpdate=!0,Ye=!0}}Ye===!0&&(te.updateMultisampleRenderTarget(Te),te.updateRenderTargetMipmap(Te))}v.setRenderTarget(ke),v.setClearColor(U,V),Xe!==void 0&&(H.viewport=Xe),v.toneMapping=Fe}function cn(R,q,re){const H=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,Te=R.length;Z<Te;Z++){const Ce=R[Z],ke=Ce.object,Fe=Ce.geometry,Xe=Ce.group;let Ye=Ce.material;Ye.allowOverride===!0&&H!==null&&(Ye=H),ke.layers.test(re.layers)&&Ut(ke,q,re,Fe,Ye,Xe)}}function Ut(R,q,re,H,Z,Te){R.onBeforeRender(v,q,re,H,Z,Te),R.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(v,q,re,H,R,Te),Z.transparent===!0&&Z.side===bn&&Z.forceSinglePass===!1?(Z.side=dn,Z.needsUpdate=!0,v.renderBufferDirect(re,q,H,Z,R,Te),Z.side=Pi,Z.needsUpdate=!0,v.renderBufferDirect(re,q,H,Z,R,Te),Z.side=bn):v.renderBufferDirect(re,q,H,Z,R,Te),R.onAfterRender(v,q,re,H,Z,Te)}function Un(R,q,re){q.isScene!==!0&&(q=ve);const H=de.get(R),Z=m.state.lights,Te=m.state.shadowsArray,Ce=Z.state.version,ke=$.getParameters(R,Z.state,Te,q,re),Fe=$.getProgramCacheKey(ke);let Xe=H.programs;H.environment=R.isMeshStandardMaterial?q.environment:null,H.fog=q.fog,H.envMap=(R.isMeshStandardMaterial?C:De).get(R.envMap||H.environment),H.envMapRotation=H.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,Xe===void 0&&(R.addEventListener("dispose",Ae),Xe=new Map,H.programs=Xe);let Ye=Xe.get(Fe);if(Ye!==void 0){if(H.currentProgram===Ye&&H.lightsStateVersion===Ce)return Dr(R,ke),Ye}else ke.uniforms=$.getUniforms(R),R.onBeforeCompile(ke,v),Ye=$.acquireProgram(ke,Fe),Xe.set(Fe,Ye),H.uniforms=ke.uniforms;const Ge=H.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ge.clippingPlanes=Me.uniform),Dr(R,ke),H.needsLights=Lr(R),H.lightsStateVersion=Ce,H.needsLights&&(Ge.ambientLightColor.value=Z.state.ambient,Ge.lightProbe.value=Z.state.probe,Ge.directionalLights.value=Z.state.directional,Ge.directionalLightShadows.value=Z.state.directionalShadow,Ge.spotLights.value=Z.state.spot,Ge.spotLightShadows.value=Z.state.spotShadow,Ge.rectAreaLights.value=Z.state.rectArea,Ge.ltc_1.value=Z.state.rectAreaLTC1,Ge.ltc_2.value=Z.state.rectAreaLTC2,Ge.pointLights.value=Z.state.point,Ge.pointLightShadows.value=Z.state.pointShadow,Ge.hemisphereLights.value=Z.state.hemi,Ge.directionalShadowMap.value=Z.state.directionalShadowMap,Ge.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ge.spotShadowMap.value=Z.state.spotShadowMap,Ge.spotLightMatrix.value=Z.state.spotLightMatrix,Ge.spotLightMap.value=Z.state.spotLightMap,Ge.pointShadowMap.value=Z.state.pointShadowMap,Ge.pointShadowMatrix.value=Z.state.pointShadowMatrix),H.currentProgram=Ye,H.uniformsList=null,Ye}function Us(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=bo.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function Dr(R,q){const re=de.get(R);re.outputColorSpace=q.outputColorSpace,re.batching=q.batching,re.batchingColor=q.batchingColor,re.instancing=q.instancing,re.instancingColor=q.instancingColor,re.instancingMorph=q.instancingMorph,re.skinning=q.skinning,re.morphTargets=q.morphTargets,re.morphNormals=q.morphNormals,re.morphColors=q.morphColors,re.morphTargetsCount=q.morphTargetsCount,re.numClippingPlanes=q.numClippingPlanes,re.numIntersection=q.numClipIntersection,re.vertexAlphas=q.vertexAlphas,re.vertexTangents=q.vertexTangents,re.toneMapping=q.toneMapping}function rl(R,q,re,H,Z){q.isScene!==!0&&(q=ve),te.resetTextureUnits();const Te=q.fog,Ce=H.isMeshStandardMaterial?q.environment:null,ke=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:on,Fe=(H.isMeshStandardMaterial?C:De).get(H.envMap||Ce),Xe=H.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,Ye=!!re.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ge=!!re.morphAttributes.position,Qe=!!re.morphAttributes.normal,it=!!re.morphAttributes.color;let dt=Ji;H.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(dt=v.toneMapping);const pt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,tt=pt!==void 0?pt.length:0,Ve=de.get(H),Mt=m.state.lights;if(B===!0&&(ie===!0||R!==M)){const Nt=R===M&&H.id===x;Me.setState(H,R,Nt)}let $e=!1;H.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Mt.state.version||Ve.outputColorSpace!==ke||Z.isBatchedMesh&&Ve.batching===!1||!Z.isBatchedMesh&&Ve.batching===!0||Z.isBatchedMesh&&Ve.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Ve.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Ve.instancing===!1||!Z.isInstancedMesh&&Ve.instancing===!0||Z.isSkinnedMesh&&Ve.skinning===!1||!Z.isSkinnedMesh&&Ve.skinning===!0||Z.isInstancedMesh&&Ve.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ve.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ve.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ve.instancingMorph===!1&&Z.morphTexture!==null||Ve.envMap!==Fe||H.fog===!0&&Ve.fog!==Te||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Me.numPlanes||Ve.numIntersection!==Me.numIntersection)||Ve.vertexAlphas!==Xe||Ve.vertexTangents!==Ye||Ve.morphTargets!==Ge||Ve.morphNormals!==Qe||Ve.morphColors!==it||Ve.toneMapping!==dt||Ve.morphTargetsCount!==tt)&&($e=!0):($e=!0,Ve.__version=H.version);let Qt=Ve.currentProgram;$e===!0&&(Qt=Un(H,q,Z));let ii=!1,kt=!1,Xt=!1;const mt=Qt.getUniforms(),Bt=Ve.uniforms;if(le.useProgram(Qt.program)&&(ii=!0,kt=!0,Xt=!0),H.id!==x&&(x=H.id,kt=!0),ii||M!==R){le.buffers.depth.getReversed()?(Y.copy(R.projectionMatrix),ng(Y),ig(Y),mt.setValue(I,"projectionMatrix",Y)):mt.setValue(I,"projectionMatrix",R.projectionMatrix),mt.setValue(I,"viewMatrix",R.matrixWorldInverse);const At=mt.map.cameraPosition;At!==void 0&&At.setValue(I,Se.setFromMatrixPosition(R.matrixWorld)),Ie.logarithmicDepthBuffer&&mt.setValue(I,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&mt.setValue(I,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,kt=!0,Xt=!0)}if(Z.isSkinnedMesh){mt.setOptional(I,Z,"bindMatrix"),mt.setOptional(I,Z,"bindMatrixInverse");const Nt=Z.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),mt.setValue(I,"boneTexture",Nt.boneTexture,te))}Z.isBatchedMesh&&(mt.setOptional(I,Z,"batchingTexture"),mt.setValue(I,"batchingTexture",Z._matricesTexture,te),mt.setOptional(I,Z,"batchingIdTexture"),mt.setValue(I,"batchingIdTexture",Z._indirectTexture,te),mt.setOptional(I,Z,"batchingColorTexture"),Z._colorsTexture!==null&&mt.setValue(I,"batchingColorTexture",Z._colorsTexture,te));const It=re.morphAttributes;if((It.position!==void 0||It.normal!==void 0||It.color!==void 0)&&pe.update(Z,re,Qt),(kt||Ve.receiveShadow!==Z.receiveShadow)&&(Ve.receiveShadow=Z.receiveShadow,mt.setValue(I,"receiveShadow",Z.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Bt.envMap.value=Fe,Bt.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&q.environment!==null&&(Bt.envMapIntensity.value=q.environmentIntensity),kt&&(mt.setValue(I,"toneMappingExposure",v.toneMappingExposure),Ve.needsLights&&La(Bt,Xt),Te&&H.fog===!0&&Q.refreshFogUniforms(Bt,Te),Q.refreshMaterialUniforms(Bt,H,W,K,m.state.transmissionRenderTarget[R.id]),bo.upload(I,Us(Ve),Bt,te)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(bo.upload(I,Us(Ve),Bt,te),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&mt.setValue(I,"center",Z.center),mt.setValue(I,"modelViewMatrix",Z.modelViewMatrix),mt.setValue(I,"normalMatrix",Z.normalMatrix),mt.setValue(I,"modelMatrix",Z.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Nt=H.uniformsGroups;for(let At=0,Ui=Nt.length;At<Ui;At++){const Hn=Nt[At];k.update(Hn,Qt),k.bind(Hn,Qt)}}return Qt}function La(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function Lr(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(R,q,re){const H=de.get(R);H.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),de.get(R.texture).__webglTexture=q,de.get(R.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:re,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const re=de.get(R);re.__webglFramebuffer=q,re.__useDefaultFramebuffer=q===void 0};const Is=I.createFramebuffer();this.setRenderTarget=function(R,q=0,re=0){A=R,w=q,T=re;let H=!0,Z=null,Te=!1,Ce=!1;if(R){const Fe=de.get(R);if(Fe.__useDefaultFramebuffer!==void 0)le.bindFramebuffer(I.FRAMEBUFFER,null),H=!1;else if(Fe.__webglFramebuffer===void 0)te.setupRenderTarget(R);else if(Fe.__hasExternalTextures)te.rebindTextures(R,de.get(R.texture).__webglTexture,de.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ge=R.depthTexture;if(Fe.__boundDepthTexture!==Ge){if(Ge!==null&&de.has(Ge)&&(R.width!==Ge.image.width||R.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(R)}}const Xe=R.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ce=!0);const Ye=de.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ye[q])?Z=Ye[q][re]:Z=Ye[q],Te=!0):R.samples>0&&te.useMultisampledRTT(R)===!1?Z=de.get(R).__webglMultisampledFramebuffer:Array.isArray(Ye)?Z=Ye[re]:Z=Ye,D.copy(R.viewport),P.copy(R.scissor),L=R.scissorTest}else D.copy(N).multiplyScalar(W).floor(),P.copy(X).multiplyScalar(W).floor(),L=ee;if(re!==0&&(Z=Is),le.bindFramebuffer(I.FRAMEBUFFER,Z)&&H&&le.drawBuffers(R,Z),le.viewport(D),le.scissor(P),le.setScissorTest(L),Te){const Fe=de.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+q,Fe.__webglTexture,re)}else if(Ce){const Fe=de.get(R.texture),Xe=q;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Fe.__webglTexture,re,Xe)}else if(R!==null&&re!==0){const Fe=de.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Fe.__webglTexture,re)}x=-1},this.readRenderTargetPixels=function(R,q,re,H,Z,Te,Ce,ke=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=de.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ce!==void 0&&(Fe=Fe[Ce]),Fe){le.bindFramebuffer(I.FRAMEBUFFER,Fe);try{const Xe=R.textures[ke],Ye=Xe.format,Ge=Xe.type;if(!Ie.textureFormatReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ie.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-H&&re>=0&&re<=R.height-Z&&(R.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ke),I.readPixels(q,re,H,Z,ye.convert(Ye),ye.convert(Ge),Te))}finally{const Xe=A!==null?de.get(A).__webglFramebuffer:null;le.bindFramebuffer(I.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(R,q,re,H,Z,Te,Ce,ke=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=de.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ce!==void 0&&(Fe=Fe[Ce]),Fe)if(q>=0&&q<=R.width-H&&re>=0&&re<=R.height-Z){le.bindFramebuffer(I.FRAMEBUFFER,Fe);const Xe=R.textures[ke],Ye=Xe.format,Ge=Xe.type;if(!Ie.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ie.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Qe),I.bufferData(I.PIXEL_PACK_BUFFER,Te.byteLength,I.STREAM_READ),R.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ke),I.readPixels(q,re,H,Z,ye.convert(Ye),ye.convert(Ge),0);const it=A!==null?de.get(A).__webglFramebuffer:null;le.bindFramebuffer(I.FRAMEBUFFER,it);const dt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await tg(I,dt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Qe),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Te),I.deleteBuffer(Qe),I.deleteSync(dt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,re=0){const H=Math.pow(2,-re),Z=Math.floor(R.image.width*H),Te=Math.floor(R.image.height*H),Ce=q!==null?q.x:0,ke=q!==null?q.y:0;te.setTexture2D(R,0),I.copyTexSubImage2D(I.TEXTURE_2D,re,0,0,Ce,ke,Z,Te),le.unbindTexture()};const sl=I.createFramebuffer(),Ua=I.createFramebuffer();this.copyTextureToTexture=function(R,q,re=null,H=null,Z=0,Te=null){Te===null&&(Z!==0?(ss("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=Z,Z=0):Te=0);let Ce,ke,Fe,Xe,Ye,Ge,Qe,it,dt;const pt=R.isCompressedTexture?R.mipmaps[Te]:R.image;if(re!==null)Ce=re.max.x-re.min.x,ke=re.max.y-re.min.y,Fe=re.isBox3?re.max.z-re.min.z:1,Xe=re.min.x,Ye=re.min.y,Ge=re.isBox3?re.min.z:0;else{const It=Math.pow(2,-Z);Ce=Math.floor(pt.width*It),ke=Math.floor(pt.height*It),R.isDataArrayTexture?Fe=pt.depth:R.isData3DTexture?Fe=Math.floor(pt.depth*It):Fe=1,Xe=0,Ye=0,Ge=0}H!==null?(Qe=H.x,it=H.y,dt=H.z):(Qe=0,it=0,dt=0);const tt=ye.convert(q.format),Ve=ye.convert(q.type);let Mt;q.isData3DTexture?(te.setTexture3D(q,0),Mt=I.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(te.setTexture2DArray(q,0),Mt=I.TEXTURE_2D_ARRAY):(te.setTexture2D(q,0),Mt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,q.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,q.unpackAlignment);const $e=I.getParameter(I.UNPACK_ROW_LENGTH),Qt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ii=I.getParameter(I.UNPACK_SKIP_PIXELS),kt=I.getParameter(I.UNPACK_SKIP_ROWS),Xt=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,pt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,pt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Xe),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ye),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ge);const mt=R.isDataArrayTexture||R.isData3DTexture,Bt=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const It=de.get(R),Nt=de.get(q),At=de.get(It.__renderTarget),Ui=de.get(Nt.__renderTarget);le.bindFramebuffer(I.READ_FRAMEBUFFER,At.__webglFramebuffer),le.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ui.__webglFramebuffer);for(let Hn=0;Hn<Fe;Hn++)mt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,de.get(R).__webglTexture,Z,Ge+Hn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,de.get(q).__webglTexture,Te,dt+Hn)),I.blitFramebuffer(Xe,Ye,Ce,ke,Qe,it,Ce,ke,I.DEPTH_BUFFER_BIT,I.NEAREST);le.bindFramebuffer(I.READ_FRAMEBUFFER,null),le.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||de.has(R)){const It=de.get(R),Nt=de.get(q);le.bindFramebuffer(I.READ_FRAMEBUFFER,sl),le.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ua);for(let At=0;At<Fe;At++)mt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,It.__webglTexture,Z,Ge+At):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,It.__webglTexture,Z),Bt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Nt.__webglTexture,Te,dt+At):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Nt.__webglTexture,Te),Z!==0?I.blitFramebuffer(Xe,Ye,Ce,ke,Qe,it,Ce,ke,I.COLOR_BUFFER_BIT,I.NEAREST):Bt?I.copyTexSubImage3D(Mt,Te,Qe,it,dt+At,Xe,Ye,Ce,ke):I.copyTexSubImage2D(Mt,Te,Qe,it,Xe,Ye,Ce,ke);le.bindFramebuffer(I.READ_FRAMEBUFFER,null),le.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Bt?R.isDataTexture||R.isData3DTexture?I.texSubImage3D(Mt,Te,Qe,it,dt,Ce,ke,Fe,tt,Ve,pt.data):q.isCompressedArrayTexture?I.compressedTexSubImage3D(Mt,Te,Qe,it,dt,Ce,ke,Fe,tt,pt.data):I.texSubImage3D(Mt,Te,Qe,it,dt,Ce,ke,Fe,tt,Ve,pt):R.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Te,Qe,it,Ce,ke,tt,Ve,pt.data):R.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Te,Qe,it,pt.width,pt.height,tt,pt.data):I.texSubImage2D(I.TEXTURE_2D,Te,Qe,it,Ce,ke,tt,Ve,pt);I.pixelStorei(I.UNPACK_ROW_LENGTH,$e),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Qt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ii),I.pixelStorei(I.UNPACK_SKIP_ROWS,kt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Xt),Te===0&&q.generateMipmaps&&I.generateMipmap(Mt),le.unbindTexture()},this.copyTextureToTexture3D=function(R,q,re=null,H=null,Z=0){return ss('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,q,re,H,Z)},this.initRenderTarget=function(R){de.get(R).__webglFramebuffer===void 0&&te.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?te.setTextureCube(R,0):R.isData3DTexture?te.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?te.setTexture2DArray(R,0):te.setTexture2D(R,0),le.unbindTexture()},this.resetState=function(){w=0,T=0,A=null,le.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}const ed={type:"change"},Ju={type:"start"},Ap={type:"end"},mo=new As,td=new Hi,eM=Math.cos(70*sa.DEG2RAD),Rt=new G,fn=2*Math.PI,ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Jl=1e-6;class tM extends _0{constructor(e,t=null){super(e,t),this.state=ct.NONE,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ns.ROTATE,MIDDLE:ns.DOLLY,RIGHT:ns.PAN},this.touches={ONE:Qr.ROTATE,TWO:Qr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new G,this._lastQuaternion=new fi,this._lastTargetPosition=new G,this._quat=new fi().setFromUnitVectors(e.up,new G(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Rf,this._sphericalDelta=new Rf,this._scale=1,this._panOffset=new G,this._rotateStart=new We,this._rotateEnd=new We,this._rotateDelta=new We,this._panStart=new We,this._panEnd=new We,this._panDelta=new We,this._dollyStart=new We,this._dollyEnd=new We,this._dollyDelta=new We,this._dollyDirection=new G,this._mouse=new We,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=iM.bind(this),this._onPointerDown=nM.bind(this),this._onPointerUp=rM.bind(this),this._onContextMenu=hM.bind(this),this._onMouseWheel=oM.bind(this),this._onKeyDown=lM.bind(this),this._onTouchStart=cM.bind(this),this._onTouchMove=uM.bind(this),this._onMouseDown=sM.bind(this),this._onMouseMove=aM.bind(this),this._interceptControlDown=fM.bind(this),this._interceptControlUp=dM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ed),this.update(),this.state=ct.NONE}update(e=null){const t=this.object.position;Rt.copy(t).sub(this.target),Rt.applyQuaternion(this._quat),this._spherical.setFromVector3(Rt),this.autoRotate&&this.state===ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,n=this.maxAzimuthAngle;isFinite(i)&&isFinite(n)&&(i<-Math.PI?i+=fn:i>Math.PI&&(i-=fn),n<-Math.PI?n+=fn:n>Math.PI&&(n-=fn),i<=n?this._spherical.theta=Math.max(i,Math.min(n,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+n)/2?Math.max(i,this._spherical.theta):Math.min(n,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Rt.setFromSpherical(this._spherical),Rt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Rt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Rt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new G(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new G(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Rt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(mo.origin.copy(this.object.position),mo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(mo.direction))<eM?this.object.lookAt(this.target):(td.setFromNormalAndCoplanarPoint(this.object.up,this.target),mo.intersectPlane(td,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Jl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Jl||this._lastTargetPosition.distanceToSquared(this.target)>Jl?(this.dispatchEvent(ed),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?fn/60*this.autoRotateSpeed*e:fn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Rt.setFromMatrixColumn(t,0),Rt.multiplyScalar(-e),this._panOffset.add(Rt)}_panUp(e,t){this.screenSpacePanning===!0?Rt.setFromMatrixColumn(t,1):(Rt.setFromMatrixColumn(t,0),Rt.crossVectors(this.object.up,Rt)),Rt.multiplyScalar(e),this._panOffset.add(Rt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const n=this.object.position;Rt.copy(n).sub(this.target);let r=Rt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),n=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=n/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(fn*this._rotateDelta.x/t.clientHeight),this._rotateUp(fn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._rotateStart.set(i,n)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panStart.set(i,n)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y,r=Math.sqrt(i*i+n*n);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),n=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(fn*this._rotateDelta.x/t.clientHeight),this._rotateUp(fn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panEnd.set(i,n)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y,r=Math.sqrt(i*i+n*n);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new We,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function nM(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function iM(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function rM(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ap),this.state=ct.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function sM(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ns.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=ct.DOLLY;break;case ns.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ct.ROTATE}break;case ns.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ct.PAN}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(Ju)}function aM(s){switch(this.state){case ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function oM(s){this.enabled===!1||this.enableZoom===!1||this.state!==ct.NONE||(s.preventDefault(),this.dispatchEvent(Ju),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Ap))}function lM(s){this.enabled!==!1&&this._handleKeyDown(s)}function cM(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Qr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=ct.TOUCH_ROTATE;break;case Qr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=ct.TOUCH_PAN;break;default:this.state=ct.NONE}break;case 2:switch(this.touches.TWO){case Qr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=ct.TOUCH_DOLLY_PAN;break;case Qr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=ct.TOUCH_DOLLY_ROTATE;break;default:this.state=ct.NONE}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(Ju)}function uM(s){switch(this._trackPointer(s),this.state){case ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=ct.NONE}}function hM(s){this.enabled!==!1&&s.preventDefault()}function fM(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function dM(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function nd(s,e){if(e===R_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Zc||e===Jd){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const i=t.count-2,n=[];if(e===Zc)for(let a=1;a<=i;a++)n.push(t.getX(0)),n.push(t.getX(a)),n.push(t.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(n.push(t.getX(a)),n.push(t.getX(a+1)),n.push(t.getX(a+2))):(n.push(t.getX(a+2)),n.push(t.getX(a+1)),n.push(t.getX(a)));n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(n),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class pM extends Ps{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new xM(t)}),this.register(function(t){return new yM(t)}),this.register(function(t){return new CM(t)}),this.register(function(t){return new PM(t)}),this.register(function(t){return new DM(t)}),this.register(function(t){return new MM(t)}),this.register(function(t){return new TM(t)}),this.register(function(t){return new EM(t)}),this.register(function(t){return new bM(t)}),this.register(function(t){return new vM(t)}),this.register(function(t){return new wM(t)}),this.register(function(t){return new SM(t)}),this.register(function(t){return new RM(t)}),this.register(function(t){return new AM(t)}),this.register(function(t){return new _M(t)}),this.register(function(t){return new LM(t)}),this.register(function(t){return new UM(t)})}load(e,t,i,n){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=aa.extractUrlBase(e);a=aa.resolveURL(c,this.path)}else a=aa.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){n?n(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new yp(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,n){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Rp){try{a[et.KHR_BINARY_GLTF]=new IM(e)}catch(h){n&&n(h);return}r=JSON.parse(a[et.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new jM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case et.KHR_MATERIALS_UNLIT:a[h]=new gM;break;case et.KHR_DRACO_MESH_COMPRESSION:a[h]=new NM(r,this.dracoLoader);break;case et.KHR_TEXTURE_TRANSFORM:a[h]=new FM;break;case et.KHR_MESH_QUANTIZATION:a[h]=new OM;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,n)}parseAsync(e,t){const i=this;return new Promise(function(n,r){i.parse(e,t,n,r)})}}function mM(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const et={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class _M{constructor(e){this.parser=e,this.name=et.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let n=t.cache.get(i);if(n)return n;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new je(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],on);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Sp(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new e0(u),c.distance=h;break;case"spot":c=new Qg(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Ti(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),n=Promise.resolve(c),t.cache.add(i,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}}class gM{constructor(){this.name=et.KHR_MATERIALS_UNLIT}getMaterialType(){return Jn}extendParams(e,t,i){const n=[];e.color=new je(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],on),e.opacity=a[3]}r.baseColorTexture!==void 0&&n.push(i.assignTexture(e,"map",r.baseColorTexture,Gt))}return Promise.all(n)}}class vM{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=n.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class xM{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],a=n.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new We(o,o)}return Promise.all(r)}}class yM{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=n.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class SM{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],a=n.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class MM{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new je(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=n.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],on)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Gt)),a.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class TM{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],a=n.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class EM{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],a=n.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new je().setRGB(o[0],o[1],o[2],on),Promise.all(r)}}class bM{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=n.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class wM{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],a=n.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new je().setRGB(o[0],o[1],o[2],on),a.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",a.specularColorTexture,Gt)),Promise.all(r)}}class AM{constructor(e){this.parser=e,this.name=et.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],a=n.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class RM{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],a=n.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class CM{constructor(e){this.parser=e,this.name=et.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;const r=n.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class PM{constructor(e){this.parser=e,this.name=et.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=n.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}}class DM{constructor(e){this.parser=e,this.name=et.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=n.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}}class LM{constructor(e){this.name=et.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const n=i.extensions[this.name],r=this.parser.getDependency("buffer",n.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=n.byteOffset||0,c=n.byteLength||0,u=n.count,h=n.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,f,n.mode,n.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(d),u,h,f,n.mode,n.filter),d})})}else return null}}class UM{constructor(e){this.name=et.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const n=t.meshes[i.mesh];for(const c of n.primitives)if(c.mode!==Fn.TRIANGLES&&c.mode!==Fn.TRIANGLE_STRIP&&c.mode!==Fn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=i.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const g of h){const _=new qe,p=new G,m=new fi,y=new G(1,1,1),S=new Ug(g.geometry,g.material,f);for(let v=0;v<f;v++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,v),l.SCALE&&y.fromBufferAttribute(l.SCALE,v),S.setMatrixAt(v,_.compose(p,m,y));for(const v in l)if(v==="_COLOR_0"){const b=l[v];S.instanceColor=new Oo(b.array,b.itemSize,b.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);xt.prototype.copy.call(S,g),this.parser.assignFinalMaterial(S),d.push(S)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const Rp="glTF",Zs=12,id={JSON:1313821514,BIN:5130562};class IM{constructor(e){this.name=et.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Zs),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Rp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-Zs,r=new DataView(e,Zs);let a=0;for(;a<n;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===id.JSON){const c=new Uint8Array(e,Zs+a,o);this.content=i.decode(c)}else if(l===id.BIN){const c=Zs+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class NM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=et.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,n=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const h=tu[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=tu[u]||u.toLowerCase();if(a[u]!==void 0){const f=i.accessors[e.attributes[u]],d=os[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){n.decodeDracoFile(u,function(d){for(const g in d.attributes){const _=d.attributes[g],p=l[g];p!==void 0&&(_.normalized=p)}h(d)},o,c,on,f)})})}}class FM{constructor(){this.name=et.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class OM{constructor(){this.name=et.KHR_MESH_QUANTIZATION}}class Cp extends Ra{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n*3+n;for(let a=0;a!==n;a++)t[a]=i[r+a];return t}interpolate_(e,t,i,n){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=n-t,h=(i-t)/u,f=h*h,d=f*h,g=e*c,_=g-c,p=-2*d+3*f,m=d-f,y=1-p,S=m-f+h;for(let v=0;v!==o;v++){const b=a[_+v+o],w=a[_+v+l]*u,T=a[g+v+o],A=a[g+v]*u;r[v]=y*b+S*w+p*T+m*A}return r}}const kM=new fi;class BM extends Cp{interpolate_(e,t,i,n){const r=super.interpolate_(e,t,i,n);return kM.fromArray(r).normalize().toArray(r),r}}const Fn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},os={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},rd={9728:sn,9729:rn,9984:Hd,9985:xo,9986:$s,9987:wi},sd={33071:Xi,33648:Io,10497:ps},Ql={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},tu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Vi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},zM={CUBICSPLINE:void 0,LINEAR:ga,STEP:_a},$l={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function GM(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Xu({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Pi})),s.DefaultMaterial}function hr(s,e,t){for(const i in t.extensions)s[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Ti(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function VM(s,e,t){let i=!1,n=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(n=!0),h.COLOR_0!==void 0&&(r=!0),i&&n&&r)break}if(!i&&!n&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(i){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;a.push(f)}if(n){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;o.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return i&&(s.morphAttributes.position=u),n&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function HM(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let i=0,n=t.length;i<n;i++)s.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function WM(s){let e;const t=s.extensions&&s.extensions[et.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ec(t.attributes):e=s.indices+":"+ec(s.attributes)+":"+s.mode,s.targets!==void 0)for(let i=0,n=s.targets.length;i<n;i++)e+=":"+ec(s.targets[i]);return e}function ec(s){let e="";const t=Object.keys(s).sort();for(let i=0,n=t.length;i<n;i++)e+=t[i]+":"+s[t[i]]+";";return e}function nu(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function XM(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const YM=new qe;class jM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new mM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);n=i&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&n<17||r&&a<98?this.textureLoader=new Zg(this.options.manager):this.textureLoader=new r0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new yp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,n=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const o={scene:a[0][n.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:n.asset,parser:i,userData:{}};return hr(r,o,n),Ti(o,n),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){const a=t[n].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let n=0,r=e.length;n<r;n++){const a=e[n];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const n=i.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())r(u,o.children[c])};return r(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const n=e(t[i]);if(n)return n}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let n=0;n<t.length;n++){const r=e(t[n]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":n=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(i,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(r,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[et.KHR_BINARY_GLTF].body);const n=this.options;return new Promise(function(r,a){i.load(aa.resolveURL(t.uri,n.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const n=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+n)})}loadAccessor(e){const t=this,i=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){const a=Ql[n.type],o=os[n.componentType],l=n.normalized===!0,c=new o(n.count*a);return Promise.resolve(new an(c,a,l))}const r=[];return n.bufferView!==void 0?r.push(this.getDependency("bufferView",n.bufferView)):r.push(null),n.sparse!==void 0&&(r.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=Ql[n.type],c=os[n.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=n.byteOffset||0,d=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,g=n.normalized===!0;let _,p;if(d&&d!==h){const m=Math.floor(f/d),y="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+m+":"+n.count;let S=t.cache.get(y);S||(_=new c(o,m*d,n.count*d/u),S=new Rg(_,d/u),t.cache.add(y,S)),p=new Bu(S,l,f%d/u,g)}else o===null?_=new c(n.count*l):_=new c(o,f,n.count*l),p=new an(_,l,g);if(n.sparse!==void 0){const m=Ql.SCALAR,y=os[n.sparse.indices.componentType],S=n.sparse.indices.byteOffset||0,v=n.sparse.values.byteOffset||0,b=new y(a[1],S,n.sparse.count*m),w=new c(a[2],v,n.sparse.count*l);o!==null&&(p=new an(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let T=0,A=b.length;T<A;T++){const x=b[T];if(p.setX(x,w[T*l]),l>=2&&p.setY(x,w[T*l+1]),l>=3&&p.setZ(x,w[T*l+2]),l>=4&&p.setW(x,w[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,i){const n=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const f=(r.samplers||{})[a.sampler]||{};return u.magFilter=rd[f.magFilter]||rn,u.minFilter=rd[f.minFilter]||wi,u.wrapS=sd[f.wrapS]||ps,u.wrapT=sd[f.wrapT]||ps,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==sn&&u.minFilter!==rn,n.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,n=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=n.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const p=new Pt(_);p.needsUpdate=!0,f(p)}),t.load(aa.resolveURL(h,r.path),g,void 0,d)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),Ti(h,a),h.userData.mimeType=a.mimeType||XM(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,n){const r=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),r.extensions[et.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[et.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[et.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return n!==void 0&&(a.colorSpace=n),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const n=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new fp,ci.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){const o="LineBasicMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new Ko,ci.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(n||r||a){let o="ClonedMaterial:"+i.uuid+":";n&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),n&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Xu}loadMaterial(e){const t=this,i=this.json,n=this.extensions,r=i.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[et.KHR_MATERIALS_UNLIT]){const h=n[et.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new je(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],on),o.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,Gt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=bn);const u=r.alphaMode||$l.OPAQUE;if(u===$l.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===$l.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Jn&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new We(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==Jn&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Jn){const h=r.emissiveFactor;o.emissive=new je().setRGB(h[0],h[1],h[2],on)}return r.emissiveTexture!==void 0&&a!==Jn&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Gt)),Promise.all(c).then(function(){const h=new a(o);return r.name&&(h.name=r.name),Ti(h,r),t.associations.set(h,{materials:e}),r.extensions&&hr(n,h,r),h})}createUniqueName(e){const t=ot.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,n=this.primitiveCache;function r(o){return i[et.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return ad(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=WM(c),h=n[u];if(h)a.push(h.promise);else{let f;c.extensions&&c.extensions[et.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=ad(new xn,c,t),n[u]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){const t=this,i=this.json,n=this.extensions,r=i.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?GM(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const _=u[d],p=a[d];let m;const y=c[d];if(p.mode===Fn.TRIANGLES||p.mode===Fn.TRIANGLE_STRIP||p.mode===Fn.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new Pg(_,y):new Ct(_,y),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===Fn.TRIANGLE_STRIP?m.geometry=nd(m.geometry,Jd):p.mode===Fn.TRIANGLE_FAN&&(m.geometry=nd(m.geometry,Zc));else if(p.mode===Fn.LINES)m=new Hu(_,y);else if(p.mode===Fn.LINE_STRIP)m=new Vu(_,y);else if(p.mode===Fn.LINE_LOOP)m=new Fg(_,y);else if(p.mode===Fn.POINTS)m=new Og(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&HM(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Ti(m,r),p.extensions&&hr(n,m,p),t.assignFinalMaterial(m),h.push(m)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&hr(n,h[0],r),h[0];const f=new oi;r.extensions&&hr(n,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const i=this.json.cameras[e],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new tn(sa.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(t=new ju(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Ti(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let n=0,r=t.joints.length;n<r;n++)i.push(this._loadNodeShallow(t.joints[n]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){const r=n.pop(),a=n,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const h=a[c];if(h){o.push(h);const f=new qe;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new zu(o,l)})}loadAnimation(e){const t=this.json,i=this,n=t.animations[e],r=n.name?n.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,f=n.channels.length;h<f;h++){const d=n.channels[h],g=n.samplers[d.sampler],_=d.target,p=_.node,m=n.parameters!==void 0?n.parameters[g.input]:g.input,y=n.parameters!==void 0?n.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",y)),c.push(g),u.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],g=h[2],_=h[3],p=h[4],m=[];for(let y=0,S=f.length;y<S;y++){const v=f[y],b=d[y],w=g[y],T=_[y],A=p[y];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const x=i._createAnimationTracks(v,b,w,T,A);if(x)for(let M=0;M<x.length;M++)m.push(x[M])}return new Wg(r,void 0,m)})}createNodeMesh(e){const t=this.json,i=this,n=t.nodes[e];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(r){const a=i._getNodeRef(i.meshCache,n.mesh,r);return n.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=n.weights.length;l<c;l++)o.morphTargetInfluences[l]=n.weights[l]}),a})}loadNode(e){const t=this.json,i=this,n=t.nodes[e],r=i._loadNodeShallow(e),a=[],o=n.children||[];for(let c=0,u=o.length;c<u;c++)a.push(i.getDependency("node",o[c]));const l=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,YM)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?n.createUniqueName(r.name):"",o=[],l=n._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(n.getDependency("camera",r.camera).then(function(c){return n._getNodeRef(n.cameraCache,r.camera,c)})),n._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new up:c.length>1?u=new oi:c.length===1?u=c[0]:u=new xt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=a),Ti(u,r),r.extensions&&hr(i,u,r),r.matrix!==void 0){const h=new qe;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!n.associations.has(u))n.associations.set(u,{});else if(r.mesh!==void 0&&n.meshCache.refs[r.mesh]>1){const h=n.associations.get(u);n.associations.set(u,{...h})}return n.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],n=this,r=new oi;i.name&&(r.name=n.createUniqueName(i.name)),Ti(r,i),i.extensions&&hr(t,r,i);const a=i.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(n.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of n.associations)(f instanceof ci||f instanceof Pt)&&h.set(f,d);return u.traverse(f=>{const d=n.associations.get(f);d!=null&&h.set(f,d)}),h};return n.associations=c(r),r})}_createAnimationTracks(e,t,i,n,r){const a=[],o=e.name?e.name:e.uuid,l=[];Vi[r.path]===Vi.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(o);let c;switch(Vi[r.path]){case Vi.weights:c=gs;break;case Vi.rotation:c=vs;break;case Vi.translation:case Vi.scale:c=xs;break;default:switch(i.itemSize){case 1:c=gs;break;case 2:case 3:default:c=xs;break}break}const u=n.interpolation!==void 0?zM[n.interpolation]:ga,h=this._getArrayFromAccessor(i);for(let f=0,d=l.length;f<d;f++){const g=new c(l[f]+"."+Vi[r.path],t.array,h,u);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=nu(t.constructor),n=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)n[r]=t[r]*i;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const n=this instanceof vs?BM:Cp;return new n(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function qM(s,e,t){const i=e.attributes,n=new Gn;if(i.POSITION!==void 0){const o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(n.set(new G(l[0],l[1],l[2]),new G(c[0],c[1],c[2])),o.normalized){const u=nu(os[o.componentType]);n.min.multiplyScalar(u),n.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new G,l=new G;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const _=nu(os[f.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(o)}s.boundingBox=n;const a=new ei;n.getCenter(a.center),a.radius=n.min.distanceTo(n.max)/2,s.boundingSphere=a}function ad(s,e,t){const i=e.attributes,n=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in i){const o=tu[a]||a.toLowerCase();o in s.attributes||n.push(r(i[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});n.push(a)}return rt.workingColorSpace!==on&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${rt.workingColorSpace}" not supported.`),Ti(s,e),qM(s,e,t),Promise.all(n).then(function(){return e.targets!==void 0?VM(s,e.targets,t):s})}function Ei(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Pp(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Rn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ys={duration:.5,overwrite:!1,delay:0},Qu,Ht,_t,ui=1e8,Kt=1/ui,iu=Math.PI*2,KM=iu/4,ZM=0,Dp=Math.sqrt,JM=Math.cos,QM=Math.sin,Ot=function(e){return typeof e=="string"},St=function(e){return typeof e=="function"},Di=function(e){return typeof e=="number"},$u=function(e){return typeof e>"u"},di=function(e){return typeof e=="object"},pn=function(e){return e!==!1},eh=function(){return typeof window<"u"},_o=function(e){return St(e)||Ot(e)},Lp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Jt=Array.isArray,ru=/(?:-?\.?\d|\.)+/gi,Up=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,es=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,tc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ip=/[+-]=-?[.\d]+/,Np=/[^,'"\[\]\s]+/gi,$M=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,gt,ri,su,th,Pn={},zo={},Fp,Op=function(e){return(zo=Ss(e,Pn))&&vn},nh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},xa=function(e,t){return!t&&console.warn(e)},kp=function(e,t){return e&&(Pn[e]=t)&&zo&&(zo[e]=t)||Pn},ya=function(){return 0},eT={suppressEvents:!0,isStart:!0,kill:!1},wo={suppressEvents:!0,kill:!1},tT={suppressEvents:!0},ih={},Qi=[],au={},Bp,En={},nc={},od=30,Ao=[],rh="",sh=function(e){var t=e[0],i,n;if(di(t)||St(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(n=Ao.length;n--&&!Ao[n].targetTest(t););i=Ao[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new cm(e[n],i)))||e.splice(n,1);return e},yr=function(e){return e._gsap||sh(Bn(e))[0]._gsap},zp=function(e,t,i){return(i=e[t])&&St(i)?e[t]():$u(i)&&e.getAttribute&&e.getAttribute(t)||i},mn=function(e,t){return(e=e.split(",")).forEach(t)||e},Tt=function(e){return Math.round(e*1e5)/1e5||0},wt=function(e){return Math.round(e*1e7)/1e7||0},ls=function(e,t){var i=t.charAt(0),n=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+n:i==="-"?e-n:i==="*"?e*n:e/n},nT=function(e,t){for(var i=t.length,n=0;e.indexOf(t[n])<0&&++n<i;);return n<i},Go=function(){var e=Qi.length,t=Qi.slice(0),i,n;for(au={},Qi.length=0,i=0;i<e;i++)n=t[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},ah=function(e){return!!(e._initted||e._startAt||e.add)},Gp=function(e,t,i,n){Qi.length&&!Ht&&Go(),e.render(t,i,!!(Ht&&t<0&&ah(e))),Qi.length&&!Ht&&Go()},Vp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Np).length<2?t:Ot(e)?e.trim():e},Hp=function(e){return e},Dn=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},iT=function(e){return function(t,i){for(var n in i)n in t||n==="duration"&&e||n==="ease"||(t[n]=i[n])}},Ss=function(e,t){for(var i in t)e[i]=t[i];return e},ld=function s(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=di(t[i])?s(e[i]||(e[i]={}),t[i]):t[i]);return e},Vo=function(e,t){var i={},n;for(n in e)n in t||(i[n]=e[n]);return i},oa=function(e){var t=e.parent||gt,i=e.keyframes?iT(Jt(e.keyframes)):Dn;if(pn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},rT=function(e,t){for(var i=e.length,n=i===t.length;n&&i--&&e[i]===t[i];);return i<0},Wp=function(e,t,i,n,r){var a=e[n],o;if(r)for(o=t[r];a&&a[r]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[n]=t,t._prev=a,t.parent=t._dp=e,t},el=function(e,t,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var r=t._prev,a=t._next;r?r._next=a:e[i]===t&&(e[i]=a),a?a._prev=r:e[n]===t&&(e[n]=r),t._next=t._prev=t.parent=null},tr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Sr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},sT=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ou=function(e,t,i,n){return e._startAt&&(Ht?e._startAt.revert(wo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,n))},aT=function s(e){return!e||e._ts&&s(e.parent)},cd=function(e){return e._repeat?Ms(e._tTime,e=e.duration()+e._rDelay)*e:0},Ms=function(e,t){var i=Math.floor(e=wt(e/t));return e&&i===e?i-1:i},Ho=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},tl=function(e){return e._end=wt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Kt)||0))},nl=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=wt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),tl(e),i._dirty||Sr(i,e)),e},Xp=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Ho(e.rawTime(),t),(!t._dur||Ca(0,t.totalDuration(),i)-t._tTime>Kt)&&t.render(i,!0)),Sr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-1e-8}},ai=function(e,t,i,n){return t.parent&&tr(t),t._start=wt((Di(i)?i:i||e!==gt?Nn(e,i,t):e._time)+t._delay),t._end=wt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Wp(e,t,"_first","_last",e._sort?"_start":0),lu(t)||(e._recent=t),n||Xp(e,t),e._ts<0&&nl(e,e._tTime),e},Yp=function(e,t){return(Pn.ScrollTrigger||nh("scrollTrigger",t))&&Pn.ScrollTrigger.create(t,e)},jp=function(e,t,i,n,r){if(lh(e,t,r),!e._initted)return 1;if(!i&&e._pt&&!Ht&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Bp!==wn.frame)return Qi.push(e),e._lazy=[r,n],1},oT=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},lu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},lT=function(e,t,i,n){var r=e.ratio,a=t<0||!t&&(!e._start&&oT(e)&&!(!e._initted&&lu(e))||(e._ts<0||e._dp._ts<0)&&!lu(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=Ca(0,e._tDur,t),u=Ms(l,o),e._yoyo&&u&1&&(a=1-a),u!==Ms(e._tTime,o)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||Ht||n||e._zTime===Kt||!t&&e._zTime){if(!e._initted&&jp(e,t,n,i,l))return;for(h=e._zTime,e._zTime=t||(i?Kt:0),i||(i=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&ou(e,t,i,!0),e._onUpdate&&!i&&An(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&An(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&tr(e,1),!i&&!Ht&&(An(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},cT=function(e,t,i){var n;if(i>t)for(n=e._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>t)return n;n=n._next}else for(n=e._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<t)return n;n=n._prev}},Ts=function(e,t,i,n){var r=e._repeat,a=wt(t)||0,o=e._tTime/e._tDur;return o&&!n&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:wt(a*(r+1)+e._rDelay*r):a,o>0&&!n&&nl(e,e._tTime=e._tDur*o),e.parent&&tl(e),i||Sr(e.parent,e),e},ud=function(e){return e instanceof nn?Sr(e):Ts(e,e._dur)},uT={_start:0,endTime:ya,totalDuration:ya},Nn=function s(e,t,i){var n=e.labels,r=e._recent||uT,a=e.duration()>=ui?r.endTime(!1):e._dur,o,l,c;return Ot(t)&&(isNaN(t)||t in n)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:i).totalDuration()/100:1)):o<0?(t in n||(n[t]=a),n[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&i&&(l=l/100*(Jt(i)?i[0]:i).totalDuration()),o>1?s(e,t.substr(0,o-1),i)+l:a+l)):t==null?a:+t},la=function(e,t,i){var n=Di(t[1]),r=(n?2:1)+(e<2?0:1),a=t[r],o,l;if(n&&(a.duration=t[1]),a.parent=i,e){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=pn(l.vars.inherit)&&l.parent;a.immediateRender=pn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new bt(t[0],a,t[r+1])},rr=function(e,t){return e||e===0?t(e):t},Ca=function(e,t,i){return i<e?e:i>t?t:i},qt=function(e,t){return!Ot(e)||!(t=$M.exec(e))?"":t[1]},hT=function(e,t,i){return rr(i,function(n){return Ca(e,t,n)})},cu=[].slice,qp=function(e,t){return e&&di(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&di(e[0]))&&!e.nodeType&&e!==ri},fT=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(n){var r;return Ot(n)&&!t||qp(n,1)?(r=i).push.apply(r,Bn(n)):i.push(n)})||i},Bn=function(e,t,i){return _t&&!t&&_t.selector?_t.selector(e):Ot(e)&&!i&&(su||!Es())?cu.call((t||th).querySelectorAll(e),0):Jt(e)?fT(e,i):qp(e)?cu.call(e,0):e?[e]:[]},uu=function(e){return e=Bn(e)[0]||xa("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Bn(t,i.querySelectorAll?i:i===e?xa("Invalid scope")||th.createElement("div"):e)}},Kp=function(e){return e.sort(function(){return .5-Math.random()})},Zp=function(e){if(St(e))return e;var t=di(e)?e:{each:e},i=Mr(t.ease),n=t.from||0,r=parseFloat(t.base)||0,a={},o=n>0&&n<1,l=isNaN(n)||o,c=t.axis,u=n,h=n;return Ot(n)?u=h={center:.5,edges:.5,end:1}[n]||0:!o&&l&&(u=n[0],h=n[1]),function(f,d,g){var _=(g||t).length,p=a[_],m,y,S,v,b,w,T,A,x;if(!p){if(x=t.grid==="auto"?0:(t.grid||[1,ui])[1],!x){for(T=-1e8;T<(T=g[x++].getBoundingClientRect().left)&&x<_;);x<_&&x--}for(p=a[_]=[],m=l?Math.min(x,_)*u-.5:n%x,y=x===ui?0:l?_*h/x-.5:n/x|0,T=0,A=ui,w=0;w<_;w++)S=w%x-m,v=y-(w/x|0),p[w]=b=c?Math.abs(c==="y"?v:S):Dp(S*S+v*v),b>T&&(T=b),b<A&&(A=b);n==="random"&&Kp(p),p.max=T-A,p.min=A,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(x>_?_-1:c?c==="y"?_/x:x:Math.max(x,_/x))||0)*(n==="edges"?-1:1),p.b=_<0?r-_:r,p.u=qt(t.amount||t.each)||0,i=i&&_<0?am(i):i}return _=(p[f]-p.min)/p.max||0,wt(p.b+(i?i(_):_)*p.v)+p.u}},hu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var n=wt(Math.round(parseFloat(i)/e)*e*t);return(n-n%1)/t+(Di(i)?0:qt(i))}},Jp=function(e,t){var i=Jt(e),n,r;return!i&&di(e)&&(n=i=e.radius||ui,e.values?(e=Bn(e.values),(r=!Di(e[0]))&&(n*=n)):e=hu(e.increment)),rr(t,i?St(e)?function(a){return r=e(a),Math.abs(r-a)<=n?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=ui,u=0,h=e.length,f,d;h--;)r?(f=e[h].x-o,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-o),f<c&&(c=f,u=h);return u=!n||c<=n?e[u]:a,r||u===a||Di(a)?u:u+qt(a)}:hu(e))},Qp=function(e,t,i,n){return rr(Jt(e)?!t:i===!0?!!(i=0):!n,function(){return Jt(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*n)/n})},dT=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(n){return t.reduce(function(r,a){return a(r)},n)}},pT=function(e,t){return function(i){return e(parseFloat(i))+(t||qt(i))}},mT=function(e,t,i){return em(e,t,0,1,i)},$p=function(e,t,i){return rr(i,function(n){return e[~~t(n)]})},_T=function s(e,t,i){var n=t-e;return Jt(e)?$p(e,s(0,e.length),t):rr(i,function(r){return(n+(r-e)%n)%n+e})},gT=function s(e,t,i){var n=t-e,r=n*2;return Jt(e)?$p(e,s(0,e.length-1),t):rr(i,function(a){return a=(r+(a-e)%r)%r||0,e+(a>n?r-a:a)})},Sa=function(e){for(var t=0,i="",n,r,a,o;~(n=e.indexOf("random(",t));)a=e.indexOf(")",n),o=e.charAt(n+7)==="[",r=e.substr(n+7,a-n-7).match(o?Np:ru),i+=e.substr(t,n-t)+Qp(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),t=a+1;return i+e.substr(t,e.length-t)},em=function(e,t,i,n,r){var a=t-e,o=n-i;return rr(r,function(l){return i+((l-e)/a*o||0)})},vT=function s(e,t,i,n){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var a=Ot(e),o={},l,c,u,h,f;if(i===!0&&(n=1)&&(i=null),a)e={p:e},t={p:t};else if(Jt(e)&&!Jt(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(s(e[c-1],e[c]));h--,r=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},i=t}else n||(e=Ss(Jt(e)?[]:{},e));if(!u){for(l in t)oh.call(o,e,l,"get",t[l]);r=function(g){return hh(g,o)||(a?e.p:e)}}}return rr(i,r)},hd=function(e,t,i){var n=e.labels,r=ui,a,o,l;for(a in n)o=n[a]-t,o<0==!!i&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},An=function(e,t,i){var n=e.vars,r=n[t],a=_t,o=e._ctx,l,c,u;if(r)return l=n[t+"Params"],c=n.callbackScope||e,i&&Qi.length&&Go(),o&&(_t=o),u=l?r.apply(c,l):r.call(c),_t=a,u},ta=function(e){return tr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ht),e.progress()<1&&An(e,"onInterrupt"),e},ts,tm=[],nm=function(e){if(e)if(e=!e.name&&e.default||e,eh()||e.headless){var t=e.name,i=St(e),n=t&&!i&&e.init?function(){this._props=[]}:e,r={init:ya,render:hh,add:oh,kill:IT,modifier:UT,rawVars:0},a={targetTest:0,get:0,getSetter:uh,aliases:{},register:0};if(Es(),e!==n){if(En[t])return;Dn(n,Dn(Vo(e,r),a)),Ss(n.prototype,Ss(r,Vo(e,a))),En[n.prop=t]=n,e.targetTest&&(Ao.push(n),ih[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}kp(t,n),e.register&&e.register(vn,n,_n)}else tm.push(e)},ht=255,na={aqua:[0,ht,ht],lime:[0,ht,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ht],navy:[0,0,128],white:[ht,ht,ht],olive:[128,128,0],yellow:[ht,ht,0],orange:[ht,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ht,0,0],pink:[ht,192,203],cyan:[0,ht,ht],transparent:[ht,ht,ht,0]},ic=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*ht+.5|0},im=function(e,t,i){var n=e?Di(e)?[e>>16,e>>8&ht,e&ht]:0:na.black,r,a,o,l,c,u,h,f,d,g;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),na[e])n=na[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+r+r+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&ht,n&ht,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&ht,e&ht]}else if(e.substr(0,3)==="hsl"){if(n=g=e.match(ru),!t)l=+n[0]%360/360,c=+n[1]/100,u=+n[2]/100,a=u<=.5?u*(c+1):u+c-u*c,r=u*2-a,n.length>3&&(n[3]*=1),n[0]=ic(l+1/3,r,a),n[1]=ic(l,r,a),n[2]=ic(l-1/3,r,a);else if(~e.indexOf("="))return n=e.match(Up),i&&n.length<4&&(n[3]=1),n}else n=e.match(ru)||na.transparent;n=n.map(Number)}return t&&!g&&(r=n[0]/ht,a=n[1]/ht,o=n[2]/ht,h=Math.max(r,a,o),f=Math.min(r,a,o),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===r?(a-o)/d+(a<o?6:0):h===a?(o-r)/d+2:(r-a)/d+4,l*=60),n[0]=~~(l+.5),n[1]=~~(c*100+.5),n[2]=~~(u*100+.5)),i&&n.length<4&&(n[3]=1),n},rm=function(e){var t=[],i=[],n=-1;return e.split($i).forEach(function(r){var a=r.match(es)||[];t.push.apply(t,a),i.push(n+=a.length+1)}),t.c=i,t},fd=function(e,t,i){var n="",r=(e+n).match($i),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!r)return e;if(r=r.map(function(f){return(f=im(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(u=rm(e),l=i.c,l.join(n)!==u.c.join(n)))for(c=e.replace($i,"1").split(es),h=c.length-1;o<h;o++)n+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:i).shift());if(!c)for(c=e.split($i),h=c.length-1;o<h;o++)n+=c[o]+r[o];return n+c[h]},$i=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in na)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),xT=/hsl[a]?\(/,sm=function(e){var t=e.join(" "),i;if($i.lastIndex=0,$i.test(t))return i=xT.test(t),e[1]=fd(e[1],i),e[0]=fd(e[0],i,rm(e[1])),!0},Ma,wn=function(){var s=Date.now,e=500,t=33,i=s(),n=i,r=1e3/240,a=r,o=[],l,c,u,h,f,d,g=function _(p){var m=s()-n,y=p===!0,S,v,b,w;if((m>e||m<0)&&(i+=m-t),n+=m,b=n-i,S=b-a,(S>0||y)&&(w=++h.frame,f=b-h.time*1e3,h.time=b=b/1e3,a+=S+(S>=r?4:r-S),v=1),y||(l=c(_)),v)for(d=0;d<o.length;d++)o[d](b,f,w,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Fp&&(!su&&eh()&&(ri=su=window,th=ri.document||{},Pn.gsap=vn,(ri.gsapVersions||(ri.gsapVersions=[])).push(vn.version),Op(zo||ri.GreenSockGlobals||!ri.gsap&&ri||{}),tm.forEach(nm)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,a-h.time*1e3+1|0)},Ma=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Ma=0,c=ya},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){r=1e3/(p||240),a=h.time*1e3+r},add:function(p,m,y){var S=m?function(v,b,w,T){p(v,b,w,T),h.remove(S)}:p;return h.remove(p),o[y?"unshift":"push"](S),Es(),S},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&d>=m&&d--},_listeners:o},h}(),Es=function(){return!Ma&&wn.wake()},nt={},yT=/^[\d.\-M][\d.\-,\s]/,ST=/["']/g,MT=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),n=i[0],r=1,a=i.length,o,l,c;r<a;r++)l=i[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[n]=isNaN(c)?c.replace(ST,"").trim():+c,n=l.substr(o+1).trim();return t},TT=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),n=e.indexOf("(",t);return e.substring(t,~n&&n<i?e.indexOf(")",i+1):i)},ET=function(e){var t=(e+"").split("("),i=nt[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[MT(t[1])]:TT(e).split(",").map(Vp)):nt._CE&&yT.test(e)?nt._CE("",e):i},am=function(e){return function(t){return 1-e(1-t)}},om=function s(e,t){for(var i=e._first,n;i;)i instanceof nn?s(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?s(i.timeline,t):(n=i._ease,i._ease=i._yEase,i._yEase=n,i._yoyo=t)),i=i._next},Mr=function(e,t){return e&&(St(e)?e:nt[e]||ET(e))||t},Pr=function(e,t,i,n){i===void 0&&(i=function(l){return 1-t(1-l)}),n===void 0&&(n=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:i,easeInOut:n},a;return mn(e,function(o){nt[o]=Pn[o]=r,nt[a=o.toLowerCase()]=i;for(var l in r)nt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=nt[o+"."+l]=r[l]}),r},lm=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},rc=function s(e,t,i){var n=t>=1?t:1,r=(i||(e?.3:.45))/(t<1?t:1),a=r/iu*(Math.asin(1/n)||0),o=function(u){return u===1?1:n*Math.pow(2,-10*u)*QM((u-a)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:lm(o);return r=iu/r,l.config=function(c,u){return s(e,c,u)},l},sc=function s(e,t){t===void 0&&(t=1.70158);var i=function(a){return a?--a*a*((t+1)*a+t)+1:0},n=e==="out"?i:e==="in"?function(r){return 1-i(1-r)}:lm(i);return n.config=function(r){return s(e,r)},n};mn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;Pr(s+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});nt.Linear.easeNone=nt.none=nt.Linear.easeIn;Pr("Elastic",rc("in"),rc("out"),rc());(function(s,e){var t=1/e,i=2*t,n=2.5*t,r=function(o){return o<t?s*o*o:o<i?s*Math.pow(o-1.5/e,2)+.75:o<n?s*(o-=2.25/e)*o+.9375:s*Math.pow(o-2.625/e,2)+.984375};Pr("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);Pr("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Pr("Circ",function(s){return-(Dp(1-s*s)-1)});Pr("Sine",function(s){return s===1?1:-JM(s*KM)+1});Pr("Back",sc("in"),sc("out"),sc());nt.SteppedEase=nt.steps=Pn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,n=e+(t?0:1),r=t?1:0,a=1-Kt;return function(o){return((n*Ca(0,a,o)|0)+r)*i}}};ys.ease=nt["quad.out"];mn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return rh+=s+","+s+"Params,"});var cm=function(e,t){this.id=ZM++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:zp,this.set=t?t.getSetter:uh},Ta=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ts(this,+t.duration,1,1),this.data=t.data,_t&&(this._ctx=_t,_t.data.push(this)),Ma||wn.wake()}var e=s.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Ts(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,n){if(Es(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(nl(this,i),!r._dp||r.parent||Xp(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&ai(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===Kt||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Gp(this,i,n)),this},e.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+cd(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},e.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+cd(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,n){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*r,n):this._repeat?Ms(this._tTime,r)+1:1},e.timeScale=function(i,n){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?Ho(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-1e-8?0:this._rts,this.totalTime(Ca(-Math.abs(this._delay),this.totalDuration(),r),n!==!1),tl(this),sT(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Es(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Kt&&(this._tTime-=Kt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&ai(n,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(pn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ho(n.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=tT);var n=Ht;return Ht=i,ah(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Ht=n,this},e.globalTime=function(i){for(var n=this,r=arguments.length?i:n.rawTime();n;)r=n._start+r/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):r},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,ud(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,ud(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,n){return this.totalTime(Nn(this,i),pn(n))},e.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,pn(n)),this._dur||(this._zTime=-1e-8),this},e.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},e.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var i=this.parent||this._dp,n=this._start,r;return!!(!i||this._ts&&this._initted&&i.isActive()&&(r=i.rawTime(!0))>=n&&r<this.endTime(!0)-Kt)},e.eventCallback=function(i,n,r){var a=this.vars;return arguments.length>1?(n?(a[i]=n,r&&(a[i+"Params"]=r),i==="onUpdate"&&(this._onUpdate=n)):delete a[i],this):a[i]},e.then=function(i){var n=this;return new Promise(function(r){var a=St(i)?i:Hp,o=function(){var c=n.then;n.then=null,St(a)&&(a=a(n))&&(a.then||a===n)&&(n.then=c),r(a),n.then=c};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?o():n._prom=o})},e.kill=function(){ta(this)},s}();Dn(Ta.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var nn=function(s){Pp(e,s);function e(i,n){var r;return i===void 0&&(i={}),r=s.call(this,i)||this,r.labels={},r.smoothChildTiming=!!i.smoothChildTiming,r.autoRemoveChildren=!!i.autoRemoveChildren,r._sort=pn(i.sortChildren),gt&&ai(i.parent||gt,Ei(r),n),i.reversed&&r.reverse(),i.paused&&r.paused(!0),i.scrollTrigger&&Yp(Ei(r),i.scrollTrigger),r}var t=e.prototype;return t.to=function(n,r,a){return la(0,arguments,this),this},t.from=function(n,r,a){return la(1,arguments,this),this},t.fromTo=function(n,r,a,o){return la(2,arguments,this),this},t.set=function(n,r,a){return r.duration=0,r.parent=this,oa(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new bt(n,r,Nn(this,a),1),this},t.call=function(n,r,a){return ai(this,bt.delayedCall(0,n,r),a)},t.staggerTo=function(n,r,a,o,l,c,u){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new bt(n,a,Nn(this,l)),this},t.staggerFrom=function(n,r,a,o,l,c,u){return a.runBackwards=1,oa(a).immediateRender=pn(a.immediateRender),this.staggerTo(n,r,a,o,l,c,u)},t.staggerFromTo=function(n,r,a,o,l,c,u,h){return o.startAt=a,oa(o).immediateRender=pn(o.immediateRender),this.staggerTo(n,r,o,l,c,u,h)},t.render=function(n,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=n<=0?0:wt(n),h=this._zTime<0!=n<0&&(this._initted||!c),f,d,g,_,p,m,y,S,v,b,w,T;if(this!==gt&&u>l&&n>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,n+=this._time-o),f=u,v=this._start,S=this._ts,m=!S,h&&(c||(o=this._zTime),(n||!r)&&(this._zTime=n)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(p*100+n,r,a);if(f=wt(u%p),u===l?(_=this._repeat,f=c):(b=wt(u/p),_=~~b,_&&_===b&&(f=c,_--),f>c&&(f=c)),b=Ms(this._tTime,p),!o&&this._tTime&&b!==_&&this._tTime-b*p-this._dur<=0&&(b=_),w&&_&1&&(f=c-f,T=1),_!==b&&!this._lock){var A=w&&b&1,x=A===(w&&_&1);if(_<b&&(A=!A),o=A?0:u%c?c:u,this._lock=1,this.render(o||(T?0:wt(_*p)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&An(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,o=A?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;om(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=cT(this,wt(o),wt(f)),y&&(u-=f-(f=y._start))),this._tTime=u,this._time=f,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,o=0),!o&&u&&!r&&!b&&(An(this,"onStart"),this._tTime!==u))return this;if(f>=o&&n>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(n,r,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,a),f!==this._time||!this._ts&&!m){y=0,g&&(u+=this._zTime=-1e-8);break}}d=g}else{d=this._last;for(var M=n<0?n:f;d;){if(g=d._prev,(d._act||M<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(n,r,a);if(d.render(d._ts>0?(M-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(M-d._start)*d._ts,r,a||Ht&&ah(d)),f!==this._time||!this._ts&&!m){y=0,g&&(u+=this._zTime=M?-1e-8:Kt);break}}d=g}}if(y&&!r&&(this.pause(),y.render(f>=o?0:-1e-8)._zTime=f>=o?1:-1,this._ts))return this._start=v,tl(this),this.render(n,r,a);this._onUpdate&&!r&&An(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(v===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((n||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&tr(this,1),!r&&!(n<0&&!o)&&(u||o||!l)&&(An(this,u===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(n,r){var a=this;if(Di(r)||(r=Nn(this,r,n)),!(n instanceof Ta)){if(Jt(n))return n.forEach(function(o){return a.add(o,r)}),this;if(Ot(n))return this.addLabel(n,r);if(St(n))n=bt.delayedCall(0,n);else return this}return this!==n?ai(this,n,r):this},t.getChildren=function(n,r,a,o){n===void 0&&(n=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-1e8);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof bt?r&&l.push(c):(a&&l.push(c),n&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},t.getById=function(n){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===n)return r[a]},t.remove=function(n){return Ot(n)?this.removeLabel(n):St(n)?this.killTweensOf(n):(n.parent===this&&el(this,n),n===this._recent&&(this._recent=this._last),Sr(this))},t.totalTime=function(n,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=wt(wn.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),s.prototype.totalTime.call(this,n,r),this._forcing=0,this):this._tTime},t.addLabel=function(n,r){return this.labels[n]=Nn(this,r),this},t.removeLabel=function(n){return delete this.labels[n],this},t.addPause=function(n,r,a){var o=bt.delayedCall(0,r||ya,a);return o.data="isPause",this._hasPause=1,ai(this,o,Nn(this,n))},t.removePause=function(n){var r=this._first;for(n=Nn(this,n);r;)r._start===n&&r.data==="isPause"&&tr(r),r=r._next},t.killTweensOf=function(n,r,a){for(var o=this.getTweensOf(n,a),l=o.length;l--;)ji!==o[l]&&o[l].kill(n,r);return this},t.getTweensOf=function(n,r){for(var a=[],o=Bn(n),l=this._first,c=Di(r),u;l;)l instanceof bt?nT(l._targets,o)&&(c?(!ji||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(u=l.getTweensOf(o,r)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(n,r){r=r||{};var a=this,o=Nn(a,n),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,g=bt.to(a,Dn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Kt,onStart:function(){if(a.pause(),!d){var p=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==p&&Ts(g,p,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},r));return f?g.render(0):g},t.tweenFromTo=function(n,r,a){return this.tweenTo(r,Dn({startAt:{time:Nn(this,n)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(n){return n===void 0&&(n=this._time),hd(this,Nn(this,n))},t.previousLabel=function(n){return n===void 0&&(n=this._time),hd(this,Nn(this,n),1)},t.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+Kt)},t.shiftChildren=function(n,r,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=n,o._end+=n),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=n);return Sr(this)},t.invalidate=function(n){var r=this._first;for(this._lock=0;r;)r.invalidate(n),r=r._next;return s.prototype.invalidate.call(this,n)},t.clear=function(n){n===void 0&&(n=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),Sr(this)},t.totalDuration=function(n){var r=0,a=this,o=a._last,l=ui,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-n:n));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,ai(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(r-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;Ts(a,a===gt&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(n){if(gt._ts&&(Gp(gt,Ho(n,gt)),Bp=wn.frame),wn.frame>=od){od+=Rn.autoSleep||120;var r=gt._first;if((!r||!r._ts)&&Rn.autoSleep&&wn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||wn.sleep()}}},e}(Ta);Dn(nn.prototype,{_lock:0,_hasPause:0,_forcing:0});var bT=function(e,t,i,n,r,a,o){var l=new _n(this._pt,e,t,0,1,mm,null,r),c=0,u=0,h,f,d,g,_,p,m,y;for(l.b=i,l.e=n,i+="",n+="",(m=~n.indexOf("random("))&&(n=Sa(n)),a&&(y=[i,n],a(y,e,t),i=y[0],n=y[1]),f=i.match(tc)||[];h=tc.exec(n);)g=h[0],_=n.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?ls(p,g)-p:parseFloat(g)-p,m:d&&d<4?Math.round:0},c=tc.lastIndex);return l.c=c<n.length?n.substring(c,n.length):"",l.fp=o,(Ip.test(n)||m)&&(l.e=0),this._pt=l,l},oh=function(e,t,i,n,r,a,o,l,c,u){St(n)&&(n=n(r||0,e,a));var h=e[t],f=i!=="get"?i:St(h)?c?e[t.indexOf("set")||!St(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=St(h)?c?PT:dm:ch,g;if(Ot(n)&&(~n.indexOf("random(")&&(n=Sa(n)),n.charAt(1)==="="&&(g=ls(f,n)+(qt(f)||0),(g||g===0)&&(n=g))),!u||f!==n||fu)return!isNaN(f*n)&&n!==""?(g=new _n(this._pt,e,t,+f||0,n-(f||0),typeof h=="boolean"?LT:pm,0,d),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!h&&!(t in e)&&nh(t,n),bT.call(this,e,t,f,n,d,l||Rn.stringFilter,c))},wT=function(e,t,i,n,r){if(St(e)&&(e=ca(e,r,t,i,n)),!di(e)||e.style&&e.nodeType||Jt(e)||Lp(e))return Ot(e)?ca(e,r,t,i,n):e;var a={},o;for(o in e)a[o]=ca(e[o],r,t,i,n);return a},um=function(e,t,i,n,r,a){var o,l,c,u;if(En[e]&&(o=new En[e]).init(r,o.rawVars?t[e]:wT(t[e],n,r,a,i),i,n,a)!==!1&&(i._pt=l=new _n(i._pt,r,e,0,1,o.render,o,0,o.priority),i!==ts))for(c=i._ptLookup[i._targets.indexOf(r)],u=o._props.length;u--;)c[o._props[u]]=l;return o},ji,fu,lh=function s(e,t,i){var n=e.vars,r=n.ease,a=n.startAt,o=n.immediateRender,l=n.lazy,c=n.onUpdate,u=n.runBackwards,h=n.yoyoEase,f=n.keyframes,d=n.autoRevert,g=e._dur,_=e._startAt,p=e._targets,m=e.parent,y=m&&m.data==="nested"?m.vars.targets:p,S=e._overwrite==="auto"&&!Qu,v=e.timeline,b,w,T,A,x,M,D,P,L,U,V,O,K;if(v&&(!f||!r)&&(r="none"),e._ease=Mr(r,ys.ease),e._yEase=h?am(Mr(h===!0?r:h,ys.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!v&&!!n.runBackwards,!v||f&&!n.stagger){if(P=p[0]?yr(p[0]).harness:0,O=P&&n[P.prop],b=Vo(n,ih),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!d?_.render(-1,!0):_.revert(u&&g?wo:eT),_._lazy=0),a){if(tr(e._startAt=bt.set(p,Dn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&pn(l),startAt:null,delay:0,onUpdate:c&&function(){return An(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ht||!o&&!d)&&e._startAt.revert(wo),o&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(o=!1),T=Dn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&pn(l),immediateRender:o,stagger:0,parent:m},b),O&&(T[P.prop]=O),tr(e._startAt=bt.set(p,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ht?e._startAt.revert(wo):e._startAt.render(-1,!0)),e._zTime=t,!o)s(e._startAt,Kt,Kt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&pn(l)||l&&!g,w=0;w<p.length;w++){if(x=p[w],D=x._gsap||sh(p)[w]._gsap,e._ptLookup[w]=U={},au[D.id]&&Qi.length&&Go(),V=y===p?w:y.indexOf(x),P&&(L=new P).init(x,O||b,e,V,y)!==!1&&(e._pt=A=new _n(e._pt,x,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(W){U[W]=A}),L.priority&&(M=1)),!P||O)for(T in b)En[T]&&(L=um(T,b,e,V,x,y))?L.priority&&(M=1):U[T]=A=oh.call(e,x,T,"get",b[T],V,y,0,n.stringFilter);e._op&&e._op[w]&&e.kill(x,e._op[w]),S&&e._pt&&(ji=e,gt.killTweensOf(x,U,e.globalTime(t)),K=!e.parent,ji=0),e._pt&&l&&(au[D.id]=1)}M&&_m(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!K,f&&t<=0&&v.render(ui,!0,!0)},AT=function(e,t,i,n,r,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return fu=1,e.vars[t]="+=0",lh(e,o),fu=0,l?xa(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(n||n===0)&&!r?n:u.s+(n||0)+a*u.c,u.c=i-u.s,h.e&&(h.e=Tt(i)+qt(h.e)),h.b&&(h.b=u.s+qt(h.b))},RT=function(e,t){var i=e[0]?yr(e[0]).harness:0,n=i&&i.aliases,r,a,o,l;if(!n)return t;r=Ss({},t);for(a in n)if(a in r)for(l=n[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},CT=function(e,t,i,n){var r=t.ease||n||"power1.inOut",a,o;if(Jt(t))o=i[e]||(i[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(a in t)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:r})},ca=function(e,t,i,n,r){return St(e)?e.call(t,i,n,r):Ot(e)&&~e.indexOf("random(")?Sa(e):e},hm=rh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",fm={};mn(hm+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return fm[s]=1});var bt=function(s){Pp(e,s);function e(i,n,r,a){var o;typeof n=="number"&&(r.duration=n,n=r,r=null),o=s.call(this,a?n:oa(n))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,y=n.parent||gt,S=(Jt(i)||Lp(i)?Di(i[0]):"length"in n)?[i]:Bn(i),v,b,w,T,A,x,M,D;if(o._targets=S.length?sh(S):xa("GSAP target "+i+" not found. https://gsap.com",!Rn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,g||f||_o(c)||_o(u)){if(n=o.vars,v=o.timeline=new nn({data:"nested",defaults:_||{},targets:y&&y.data==="nested"?y.vars.targets:S}),v.kill(),v.parent=v._dp=Ei(o),v._start=0,f||_o(c)||_o(u)){if(T=S.length,M=f&&Zp(f),di(f))for(A in f)~hm.indexOf(A)&&(D||(D={}),D[A]=f[A]);for(b=0;b<T;b++)w=Vo(n,fm),w.stagger=0,m&&(w.yoyoEase=m),D&&Ss(w,D),x=S[b],w.duration=+ca(c,Ei(o),b,x,S),w.delay=(+ca(u,Ei(o),b,x,S)||0)-o._delay,!f&&T===1&&w.delay&&(o._delay=u=w.delay,o._start+=u,w.delay=0),v.to(x,w,M?M(b,x,S):0),v._ease=nt.none;v.duration()?c=u=0:o.timeline=0}else if(g){oa(Dn(v.vars.defaults,{ease:"none"})),v._ease=Mr(g.ease||n.ease||"none");var P=0,L,U,V;if(Jt(g))g.forEach(function(O){return v.to(S,O,">")}),v.duration();else{w={};for(A in g)A==="ease"||A==="easeEach"||CT(A,g[A],w,g.easeEach);for(A in w)for(L=w[A].sort(function(O,K){return O.t-K.t}),P=0,b=0;b<L.length;b++)U=L[b],V={ease:U.e,duration:(U.t-(b?L[b-1].t:0))/100*c},V[A]=U.v,v.to(S,V,P),P+=V.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||o.duration(c=v.duration())}else o.timeline=0;return d===!0&&!Qu&&(ji=Ei(o),gt.killTweensOf(S),ji=0),ai(y,Ei(o),r),n.reversed&&o.reverse(),n.paused&&o.paused(!0),(h||!c&&!g&&o._start===wt(y._time)&&pn(h)&&aT(Ei(o))&&y.data!=="nested")&&(o._tTime=-1e-8,o.render(Math.max(0,-u)||0)),p&&Yp(Ei(o),p),o}var t=e.prototype;return t.render=function(n,r,a){var o=this._time,l=this._tDur,c=this._dur,u=n<0,h=n>l-Kt&&!u?l:n<Kt?0:n,f,d,g,_,p,m,y,S,v;if(!c)lT(this,n,r,a);else if(h!==this._tTime||!n||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,S=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+n,r,a);if(f=wt(h%_),h===l?(g=this._repeat,f=c):(p=wt(h/_),g=~~p,g&&g===p?(f=c,g--):f>c&&(f=c)),m=this._yoyo&&g&1,m&&(v=this._yEase,f=c-f),p=Ms(this._tTime,_),f===o&&!a&&this._initted&&g===p)return this._tTime=h,this;g!==p&&(S&&this._yEase&&om(S,m),this.vars.repeatRefresh&&!m&&!this._lock&&f!==_&&this._initted&&(this._lock=a=1,this.render(wt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(jp(this,u?n:f,a,r,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(n,r,a)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(v||this._ease)(f/c),this._from&&(this.ratio=y=1-y),!o&&h&&!r&&!p&&(An(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;S&&S.render(n<0?n:S._dur*S._ease(f/this._dur),r,a)||this._startAt&&(this._zTime=n),this._onUpdate&&!r&&(u&&ou(this,n,r,a),An(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!r&&this.parent&&An(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&ou(this,n,!0,!0),(n||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&tr(this,1),!r&&!(u&&!o)&&(h||o||m)&&(An(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),s.prototype.invalidate.call(this,n)},t.resetTo=function(n,r,a,o,l){Ma||wn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||lh(this,c),u=this._ease(c/this._dur),AT(this,n,r,a,o,u,c,l)?this.resetTo(n,r,a,o,1):(nl(this,0),this.parent||Wp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(n,r){if(r===void 0&&(r="all"),!n&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?ta(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ht),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(n,r,ji&&ji.vars.overwrite!==!0)._first||ta(this),this.parent&&a!==this.timeline.totalDuration()&&Ts(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=n?Bn(n):o,c=this._ptLookup,u=this._pt,h,f,d,g,_,p,m;if((!r||r==="all")&&rT(o,l))return r==="all"&&(this._pt=0),ta(this);for(h=this._op=this._op||[],r!=="all"&&(Ot(r)&&(_={},mn(r,function(y){return _[y]=1}),r=_),r=RT(o,r)),m=o.length;m--;)if(~l.indexOf(o[m])){f=c[m],r==="all"?(h[m]=r,g=f,d={}):(d=h[m]=h[m]||{},g=r);for(_ in g)p=f&&f[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&el(this,p,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&ta(this),this},e.to=function(n,r){return new e(n,r,arguments[2])},e.from=function(n,r){return la(1,arguments)},e.delayedCall=function(n,r,a,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(n,r,a){return la(2,arguments)},e.set=function(n,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(n,r)},e.killTweensOf=function(n,r,a){return gt.killTweensOf(n,r,a)},e}(Ta);Dn(bt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});mn("staggerTo,staggerFrom,staggerFromTo",function(s){bt[s]=function(){var e=new nn,t=cu.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var ch=function(e,t,i){return e[t]=i},dm=function(e,t,i){return e[t](i)},PT=function(e,t,i,n){return e[t](n.fp,i)},DT=function(e,t,i){return e.setAttribute(t,i)},uh=function(e,t){return St(e[t])?dm:$u(e[t])&&e.setAttribute?DT:ch},pm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},LT=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},mm=function(e,t){var i=t._pt,n="";if(!e&&t.b)n=t.b;else if(e===1&&t.e)n=t.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+n,i=i._next;n+=t.c}t.set(t.t,t.p,n,t)},hh=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},UT=function(e,t,i,n){for(var r=this._pt,a;r;)a=r._next,r.p===n&&r.modifier(e,t,i),r=a},IT=function(e){for(var t=this._pt,i,n;t;)n=t._next,t.p===e&&!t.op||t.op===e?el(this,t,"_pt"):t.dep||(i=1),t=n;return!i},NT=function(e,t,i,n){n.mSet(e,t,n.m.call(n.tween,i,n.mt),n)},_m=function(e){for(var t=e._pt,i,n,r,a;t;){for(i=t._next,n=r;n&&n.pr>t.pr;)n=n._next;(t._prev=n?n._prev:a)?t._prev._next=t:r=t,(t._next=n)?n._prev=t:a=t,t=i}e._pt=r},_n=function(){function s(t,i,n,r,a,o,l,c,u){this.t=i,this.s=r,this.c=a,this.p=n,this.r=o||pm,this.d=l||this,this.set=c||ch,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(i,n,r){this.mSet=this.mSet||this.set,this.set=NT,this.m=i,this.mt=r,this.tween=n},s}();mn(rh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return ih[s]=1});Pn.TweenMax=Pn.TweenLite=bt;Pn.TimelineLite=Pn.TimelineMax=nn;gt=new nn({sortChildren:!1,defaults:ys,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Rn.stringFilter=sm;var Tr=[],Ro={},FT=[],dd=0,OT=0,ac=function(e){return(Ro[e]||FT).map(function(t){return t()})},du=function(){var e=Date.now(),t=[];e-dd>2&&(ac("matchMediaInit"),Tr.forEach(function(i){var n=i.queries,r=i.conditions,a,o,l,c;for(o in n)a=ri.matchMedia(n[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(i.revert(),l&&t.push(i))}),ac("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),dd=e,ac("matchMedia"))},gm=function(){function s(t,i){this.selector=i&&uu(i),this.data=[],this._r=[],this.isReverted=!1,this.id=OT++,t&&this.add(t)}var e=s.prototype;return e.add=function(i,n,r){St(i)&&(r=n,n=i,i=St);var a=this,o=function(){var c=_t,u=a.selector,h;return c&&c!==a&&c.data.push(a),r&&(a.selector=uu(r)),_t=a,h=n.apply(a,arguments),St(h)&&a._r.push(h),_t=c,a.selector=u,a.isReverted=!1,h};return a.last=o,i===St?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},e.ignore=function(i){var n=_t;_t=null,i(this),_t=n},e.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof s?i.push.apply(i,n.getTweens()):n instanceof bt&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,n){var r=this;if(i?function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=r.data.length;l--;)c=r.data[l],c instanceof nn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof bt)&&c.revert&&c.revert(i);r._r.forEach(function(u){return u(i,r)}),r.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),n)for(var a=Tr.length;a--;)Tr[a].id===this.id&&Tr.splice(a,1)},e.revert=function(i){this.kill(i||{})},s}(),kT=function(){function s(t){this.contexts=[],this.scope=t,_t&&_t.data.push(this)}var e=s.prototype;return e.add=function(i,n,r){di(i)||(i={matches:i});var a=new gm(0,r||this.scope),o=a.conditions={},l,c,u;_t&&!a.selector&&(a.selector=_t.selector),this.contexts.push(a),n=a.add("onMatch",n),a.queries=i;for(c in i)c==="all"?u=1:(l=ri.matchMedia(i[c]),l&&(Tr.indexOf(a)<0&&Tr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(du):l.addEventListener("change",du)));return u&&n(a,function(h){return a.add(null,h)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},s}(),Wo={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(n){return nm(n)})},timeline:function(e){return new nn(e)},getTweensOf:function(e,t){return gt.getTweensOf(e,t)},getProperty:function(e,t,i,n){Ot(e)&&(e=Bn(e)[0]);var r=yr(e||{}).get,a=i?Hp:Vp;return i==="native"&&(i=""),e&&(t?a((En[t]&&En[t].get||r)(e,t,i,n)):function(o,l,c){return a((En[o]&&En[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,i){if(e=Bn(e),e.length>1){var n=e.map(function(u){return vn.quickSetter(u,t,i)}),r=n.length;return function(u){for(var h=r;h--;)n[h](u)}}e=e[0]||{};var a=En[t],o=yr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;ts._pt=0,h.init(e,i?u+i:u,ts,0,[e]),h.render(1,h),ts._pt&&hh(1,ts)}:o.set(e,l);return a?c:function(u){return c(e,l,i?u+i:u,o,1)}},quickTo:function(e,t,i){var n,r=vn.to(e,Dn((n={},n[t]="+=0.1",n.paused=!0,n.stagger=0,n),i||{})),a=function(l,c,u){return r.resetTo(t,l,c,u)};return a.tween=r,a},isTweening:function(e){return gt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Mr(e.ease,ys.ease)),ld(ys,e||{})},config:function(e){return ld(Rn,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,n=e.plugins,r=e.defaults,a=e.extendTimeline;(n||"").split(",").forEach(function(o){return o&&!En[o]&&!Pn[o]&&xa(t+" effect requires "+o+" plugin.")}),nc[t]=function(o,l,c){return i(Bn(o),Dn(l||{},r),c)},a&&(nn.prototype[t]=function(o,l,c){return this.add(nc[t](o,di(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){nt[e]=Mr(t)},parseEase:function(e,t){return arguments.length?Mr(e,t):nt},getById:function(e){return gt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new nn(e),n,r;for(i.smoothChildTiming=pn(e.smoothChildTiming),gt.remove(i),i._dp=0,i._time=i._tTime=gt._time,n=gt._first;n;)r=n._next,(t||!(!n._dur&&n instanceof bt&&n.vars.onComplete===n._targets[0]))&&ai(i,n,n._start-n._delay),n=r;return ai(gt,i,0),i},context:function(e,t){return e?new gm(e,t):_t},matchMedia:function(e){return new kT(e)},matchMediaRefresh:function(){return Tr.forEach(function(e){var t=e.conditions,i,n;for(n in t)t[n]&&(t[n]=!1,i=1);i&&e.revert()})||du()},addEventListener:function(e,t){var i=Ro[e]||(Ro[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Ro[e],n=i&&i.indexOf(t);n>=0&&i.splice(n,1)},utils:{wrap:_T,wrapYoyo:gT,distribute:Zp,random:Qp,snap:Jp,normalize:mT,getUnit:qt,clamp:hT,splitColor:im,toArray:Bn,selector:uu,mapRange:em,pipe:dT,unitize:pT,interpolate:vT,shuffle:Kp},install:Op,effects:nc,ticker:wn,updateRoot:nn.updateRoot,plugins:En,globalTimeline:gt,core:{PropTween:_n,globals:kp,Tween:bt,Timeline:nn,Animation:Ta,getCache:yr,_removeLinkedListItem:el,reverting:function(){return Ht},context:function(e){return e&&_t&&(_t.data.push(e),e._ctx=_t),_t},suppressOverwrites:function(e){return Qu=e}}};mn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Wo[s]=bt[s]});wn.add(nn.updateRoot);ts=Wo.to({},{duration:0});var BT=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},zT=function(e,t){var i=e._targets,n,r,a;for(n in t)for(r=i.length;r--;)a=e._ptLookup[r][n],a&&(a=a.d)&&(a._pt&&(a=BT(a,n)),a&&a.modifier&&a.modifier(t[n],e,i[r],n))},oc=function(e,t){return{name:e,headless:1,rawVars:1,init:function(n,r,a){a._onInit=function(o){var l,c;if(Ot(r)&&(l={},mn(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}zT(o,r)}}}},vn=Wo.registerPlugin({name:"attr",init:function(e,t,i,n,r){var a,o,l;this.tween=i;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],n,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var i=t._pt;i;)Ht?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},oc("roundProps",hu),oc("modifiers"),oc("snap",Jp))||Wo;bt.version=nn.version=vn.version="3.13.0";Fp=1;eh()&&Es();nt.Power0;nt.Power1;nt.Power2;nt.Power3;nt.Power4;nt.Linear;nt.Quad;nt.Cubic;nt.Quart;nt.Quint;nt.Strong;nt.Elastic;nt.Back;nt.SteppedEase;nt.Bounce;nt.Sine;nt.Expo;nt.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var pd,qi,cs,fh,xr,md,dh,GT=function(){return typeof window<"u"},Li={},_r=180/Math.PI,us=Math.PI/180,Zr=Math.atan2,_d=1e8,ph=/([A-Z])/g,VT=/(left|right|width|margin|padding|x)/i,HT=/[\s,\(]\S/,li={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},pu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},WT=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},XT=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},YT=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},vm=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},xm=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},jT=function(e,t,i){return e.style[t]=i},qT=function(e,t,i){return e.style.setProperty(t,i)},KT=function(e,t,i){return e._gsap[t]=i},ZT=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},JT=function(e,t,i,n,r){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(r,a)},QT=function(e,t,i,n,r){var a=e._gsap;a[t]=i,a.renderTransform(r,a)},vt="transform",gn=vt+"Origin",$T=function s(e,t){var i=this,n=this.target,r=n.style,a=n._gsap;if(e in Li&&r){if(this.tfm=this.tfm||{},e!=="transform")e=li[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=bi(n,o)}):this.tfm[e]=a.x?a[e]:bi(n,e),e===gn&&(this.tfm.zOrigin=a.zOrigin);else return li.transform.split(",").forEach(function(o){return s.call(i,o,t)});if(this.props.indexOf(vt)>=0)return;a.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(gn,t,"")),e=vt}(r||t)&&this.props.push(e,t,r[e])},ym=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},e1=function(){var e=this.props,t=this.target,i=t.style,n=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?i[e[r]]=e[r+2]:i.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(ph,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)n[a]=this.tfm[a];n.svg&&(n.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=dh(),(!r||!r.isStart)&&!i[vt]&&(ym(i),n.zOrigin&&i[gn]&&(i[gn]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},Sm=function(e,t){var i={target:e,props:[],revert:e1,save:$T};return e._gsap||vn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(n){return i.save(n)}),i},Mm,mu=function(e,t){var i=qi.createElementNS?qi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):qi.createElement(e);return i&&i.style?i:qi.createElement(e)},zn=function s(e,t,i){var n=getComputedStyle(e);return n[t]||n.getPropertyValue(t.replace(ph,"-$1").toLowerCase())||n.getPropertyValue(t)||!i&&s(e,bs(t)||t,1)||""},gd="O,Moz,ms,Ms,Webkit".split(","),bs=function(e,t,i){var n=t||xr,r=n.style,a=5;if(e in r&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(gd[a]+e in r););return a<0?null:(a===3?"ms":a>=0?gd[a]:"")+e},_u=function(){GT()&&window.document&&(pd=window,qi=pd.document,cs=qi.documentElement,xr=mu("div")||{style:{}},mu("div"),vt=bs(vt),gn=vt+"Origin",xr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Mm=!!bs("perspective"),dh=vn.core.reverting,fh=1)},vd=function(e){var t=e.ownerSVGElement,i=mu("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=e.cloneNode(!0),r;n.style.display="block",i.appendChild(n),cs.appendChild(i);try{r=n.getBBox()}catch{}return i.removeChild(n),cs.removeChild(i),r},xd=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Tm=function(e){var t,i;try{t=e.getBBox()}catch{t=vd(e),i=1}return t&&(t.width||t.height)||i||(t=vd(e)),t&&!t.width&&!t.x&&!t.y?{x:+xd(e,["x","cx","x1"])||0,y:+xd(e,["y","cy","y1"])||0,width:0,height:0}:t},Em=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Tm(e))},Ar=function(e,t){if(t){var i=e.style,n;t in Li&&t!==gn&&(t=vt),i.removeProperty?(n=t.substr(0,2),(n==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(n==="--"?t:t.replace(ph,"-$1").toLowerCase())):i.removeAttribute(t)}},Ki=function(e,t,i,n,r,a){var o=new _n(e._pt,t,i,0,1,a?xm:vm);return e._pt=o,o.b=n,o.e=r,e._props.push(i),o},yd={deg:1,rad:1,turn:1},t1={grid:1,flex:1},nr=function s(e,t,i,n){var r=parseFloat(i)||0,a=(i+"").trim().substr((r+"").length)||"px",o=xr.style,l=VT.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=n==="px",d=n==="%",g,_,p,m;if(n===a||!r||yd[n]||yd[a])return r;if(a!=="px"&&!f&&(r=s(e,t,i,"px")),m=e.getCTM&&Em(e),(d||a==="%")&&(Li[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[u],Tt(d?r/g*h:r/100*g);if(o[l?"width":"height"]=h+(f?a:n),_=n!=="rem"&&~t.indexOf("adius")||n==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===qi||!_.appendChild)&&(_=qi.body),p=_._gsap,p&&d&&p.width&&l&&p.time===wn.time&&!p.uncache)return Tt(r/p.width*h);if(d&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=h+n,g=e[u],y?e.style[t]=y:Ar(e,t)}else(d||a==="%")&&!t1[zn(_,"display")]&&(o.position=zn(e,"position")),_===e&&(o.position="static"),_.appendChild(xr),g=xr[u],_.removeChild(xr),o.position="absolute";return l&&d&&(p=yr(_),p.time=wn.time,p.width=_[u]),Tt(f?g*r/h:g&&r?h/g*r:0)},bi=function(e,t,i,n){var r;return fh||_u(),t in li&&t!=="transform"&&(t=li[t],~t.indexOf(",")&&(t=t.split(",")[0])),Li[t]&&t!=="transform"?(r=ba(e,n),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Yo(zn(e,gn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||n||~(r+"").indexOf("calc("))&&(r=Xo[t]&&Xo[t](e,t,i)||zn(e,t)||zp(e,t)||(t==="opacity"?1:0))),i&&!~(r+"").trim().indexOf(" ")?nr(e,t,r,i)+i:r},n1=function(e,t,i,n){if(!i||i==="none"){var r=bs(t,e,1),a=r&&zn(e,r,1);a&&a!==i?(t=r,i=a):t==="borderColor"&&(i=zn(e,"borderTopColor"))}var o=new _n(this._pt,e.style,t,0,1,mm),l=0,c=0,u,h,f,d,g,_,p,m,y,S,v,b;if(o.b=i,o.e=n,i+="",n+="",n.substring(0,6)==="var(--"&&(n=zn(e,n.substring(4,n.indexOf(")")))),n==="auto"&&(_=e.style[t],e.style[t]=n,n=zn(e,t)||n,_?e.style[t]=_:Ar(e,t)),u=[i,n],sm(u),i=u[0],n=u[1],f=i.match(es)||[],b=n.match(es)||[],b.length){for(;h=es.exec(n);)p=h[0],y=n.substring(l,h.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),p!==(_=f[c++]||"")&&(d=parseFloat(_)||0,v=_.substr((d+"").length),p.charAt(1)==="="&&(p=ls(d,p)+v),m=parseFloat(p),S=p.substr((m+"").length),l=es.lastIndex-S.length,S||(S=S||Rn.units[t]||v,l===n.length&&(n+=S,o.e+=S)),v!==S&&(d=nr(e,t,_,S)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:d,c:m-d,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<n.length?n.substring(l,n.length):""}else o.r=t==="display"&&n==="none"?xm:vm;return Ip.test(n)&&(o.e=0),this._pt=o,o},Sd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},i1=function(e){var t=e.split(" "),i=t[0],n=t[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(e=i,i=n,n=e),t[0]=Sd[i]||i,t[1]=Sd[n]||n,t.join(" ")},r1=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,n=i.style,r=t.u,a=i._gsap,o,l,c;if(r==="all"||r===!0)n.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],Li[o]&&(l=1,o=o==="transformOrigin"?gn:vt),Ar(i,o);l&&(Ar(i,vt),a&&(a.svg&&i.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",ba(i,1),a.uncache=1,ym(n)))}},Xo={clearProps:function(e,t,i,n,r){if(r.data!=="isFromStart"){var a=e._pt=new _n(e._pt,t,i,0,0,r1);return a.u=n,a.pr=-10,a.tween=r,e._props.push(i),1}}},Ea=[1,0,0,1,0,0],bm={},wm=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Md=function(e){var t=zn(e,vt);return wm(t)?Ea:t.substr(7).match(Up).map(Tt)},mh=function(e,t){var i=e._gsap||yr(e),n=e.style,r=Md(e),a,o,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Ea:r):(r===Ea&&!e.offsetParent&&e!==cs&&!i.svg&&(l=n.display,n.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,cs.appendChild(e)),r=Md(e),l?n.display=l:Ar(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):cs.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},gu=function(e,t,i,n,r,a){var o=e._gsap,l=r||mh(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,d=l[0],g=l[1],_=l[2],p=l[3],m=l[4],y=l[5],S=t.split(" "),v=parseFloat(S[0])||0,b=parseFloat(S[1])||0,w,T,A,x;i?l!==Ea&&(T=d*p-g*_)&&(A=v*(p/T)+b*(-_/T)+(_*y-p*m)/T,x=v*(-g/T)+b*(d/T)-(d*y-g*m)/T,v=A,b=x):(w=Tm(e),v=w.x+(~S[0].indexOf("%")?v/100*w.width:v),b=w.y+(~(S[1]||S[0]).indexOf("%")?b/100*w.height:b)),n||n!==!1&&o.smooth?(m=v-c,y=b-u,o.xOffset=h+(m*d+y*_)-m,o.yOffset=f+(m*g+y*p)-y):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=b,o.smooth=!!n,o.origin=t,o.originIsAbsolute=!!i,e.style[gn]="0px 0px",a&&(Ki(a,o,"xOrigin",c,v),Ki(a,o,"yOrigin",u,b),Ki(a,o,"xOffset",h,o.xOffset),Ki(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",v+" "+b)},ba=function(e,t){var i=e._gsap||new cm(e);if("x"in i&&!t&&!i.uncache)return i;var n=e.style,r=i.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=zn(e,gn)||"0",u,h,f,d,g,_,p,m,y,S,v,b,w,T,A,x,M,D,P,L,U,V,O,K,W,J,j,N,X,ee,F,B;return u=h=f=_=p=m=y=S=v=0,d=g=1,i.svg=!!(e.getCTM&&Em(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[vt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[vt]!=="none"?l[vt]:"")),n.scale=n.rotate=n.translate="none"),T=mh(e,i.svg),i.svg&&(i.uncache?(W=e.getBBox(),c=i.xOrigin-W.x+"px "+(i.yOrigin-W.y)+"px",K=""):K=!t&&e.getAttribute("data-svg-origin"),gu(e,K||c,!!K||i.originIsAbsolute,i.smooth!==!1,T)),b=i.xOrigin||0,w=i.yOrigin||0,T!==Ea&&(D=T[0],P=T[1],L=T[2],U=T[3],u=V=T[4],h=O=T[5],T.length===6?(d=Math.sqrt(D*D+P*P),g=Math.sqrt(U*U+L*L),_=D||P?Zr(P,D)*_r:0,y=L||U?Zr(L,U)*_r+_:0,y&&(g*=Math.abs(Math.cos(y*us))),i.svg&&(u-=b-(b*D+w*L),h-=w-(b*P+w*U))):(B=T[6],ee=T[7],j=T[8],N=T[9],X=T[10],F=T[11],u=T[12],h=T[13],f=T[14],A=Zr(B,X),p=A*_r,A&&(x=Math.cos(-A),M=Math.sin(-A),K=V*x+j*M,W=O*x+N*M,J=B*x+X*M,j=V*-M+j*x,N=O*-M+N*x,X=B*-M+X*x,F=ee*-M+F*x,V=K,O=W,B=J),A=Zr(-L,X),m=A*_r,A&&(x=Math.cos(-A),M=Math.sin(-A),K=D*x-j*M,W=P*x-N*M,J=L*x-X*M,F=U*M+F*x,D=K,P=W,L=J),A=Zr(P,D),_=A*_r,A&&(x=Math.cos(A),M=Math.sin(A),K=D*x+P*M,W=V*x+O*M,P=P*x-D*M,O=O*x-V*M,D=K,V=W),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),d=Tt(Math.sqrt(D*D+P*P+L*L)),g=Tt(Math.sqrt(O*O+B*B)),A=Zr(V,O),y=Math.abs(A)>2e-4?A*_r:0,v=F?1/(F<0?-F:F):0),i.svg&&(K=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!wm(zn(e,vt)),K&&e.setAttribute("transform",K))),Math.abs(y)>90&&Math.abs(y)<270&&(r?(d*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=h-((i.yPercent=h&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=f+a,i.scaleX=Tt(d),i.scaleY=Tt(g),i.rotation=Tt(_)+o,i.rotationX=Tt(p)+o,i.rotationY=Tt(m)+o,i.skewX=y+o,i.skewY=S+o,i.transformPerspective=v+a,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(n[gn]=Yo(c)),i.xOffset=i.yOffset=0,i.force3D=Rn.force3D,i.renderTransform=i.svg?a1:Mm?Am:s1,i.uncache=0,i},Yo=function(e){return(e=e.split(" "))[0]+" "+e[1]},lc=function(e,t,i){var n=qt(t);return Tt(parseFloat(t)+parseFloat(nr(e,"x",i+"px",n)))+n},s1=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Am(e,t)},fr="0deg",Js="0px",dr=") ",Am=function(e,t){var i=t||this,n=i.xPercent,r=i.yPercent,a=i.x,o=i.y,l=i.z,c=i.rotation,u=i.rotationY,h=i.rotationX,f=i.skewX,d=i.skewY,g=i.scaleX,_=i.scaleY,p=i.transformPerspective,m=i.force3D,y=i.target,S=i.zOrigin,v="",b=m==="auto"&&e&&e!==1||m===!0;if(S&&(h!==fr||u!==fr)){var w=parseFloat(u)*us,T=Math.sin(w),A=Math.cos(w),x;w=parseFloat(h)*us,x=Math.cos(w),a=lc(y,a,T*x*-S),o=lc(y,o,-Math.sin(w)*-S),l=lc(y,l,A*x*-S+S)}p!==Js&&(v+="perspective("+p+dr),(n||r)&&(v+="translate("+n+"%, "+r+"%) "),(b||a!==Js||o!==Js||l!==Js)&&(v+=l!==Js||b?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+dr),c!==fr&&(v+="rotate("+c+dr),u!==fr&&(v+="rotateY("+u+dr),h!==fr&&(v+="rotateX("+h+dr),(f!==fr||d!==fr)&&(v+="skew("+f+", "+d+dr),(g!==1||_!==1)&&(v+="scale("+g+", "+_+dr),y.style[vt]=v||"translate(0, 0)"},a1=function(e,t){var i=t||this,n=i.xPercent,r=i.yPercent,a=i.x,o=i.y,l=i.rotation,c=i.skewX,u=i.skewY,h=i.scaleX,f=i.scaleY,d=i.target,g=i.xOrigin,_=i.yOrigin,p=i.xOffset,m=i.yOffset,y=i.forceCSS,S=parseFloat(a),v=parseFloat(o),b,w,T,A,x;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=us,c*=us,b=Math.cos(l)*h,w=Math.sin(l)*h,T=Math.sin(l-c)*-f,A=Math.cos(l-c)*f,c&&(u*=us,x=Math.tan(c-u),x=Math.sqrt(1+x*x),T*=x,A*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),b*=x,w*=x)),b=Tt(b),w=Tt(w),T=Tt(T),A=Tt(A)):(b=h,A=f,w=T=0),(S&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(S=nr(d,"x",a,"px"),v=nr(d,"y",o,"px")),(g||_||p||m)&&(S=Tt(S+g-(g*b+_*T)+p),v=Tt(v+_-(g*w+_*A)+m)),(n||r)&&(x=d.getBBox(),S=Tt(S+n/100*x.width),v=Tt(v+r/100*x.height)),x="matrix("+b+","+w+","+T+","+A+","+S+","+v+")",d.setAttribute("transform",x),y&&(d.style[vt]=x)},o1=function(e,t,i,n,r){var a=360,o=Ot(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?_r:1),c=l-n,u=n+c+"deg",h,f;return o&&(h=r.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-360)),h==="cw"&&c<0?c=(c+a*_d)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*_d)%a-~~(c/a)*a)),e._pt=f=new _n(e._pt,t,i,n,c,WT),f.e=u,f.u="deg",e._props.push(i),f},Td=function(e,t){for(var i in t)e[i]=t[i];return e},l1=function(e,t,i){var n=Td({},i._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,c,u,h,f,d,g;n.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),a[vt]=t,o=ba(i,1),Ar(i,vt),i.setAttribute("transform",c)):(c=getComputedStyle(i)[vt],a[vt]=t,o=ba(i,1),a[vt]=c);for(l in Li)c=n[l],u=o[l],c!==u&&r.indexOf(l)<0&&(d=qt(c),g=qt(u),h=d!==g?nr(i,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new _n(e._pt,o,l,h,f-h,pu),e._pt.u=g||0,e._props.push(l));Td(o,n)};mn("padding,margin,Width,Radius",function(s,e){var t="Top",i="Right",n="Bottom",r="Left",a=(e<3?[t,i,n,r]:[t+r,t+i,n+i,n+r]).map(function(o){return e<2?s+o:"border"+o+s});Xo[e>1?"border"+s:s]=function(o,l,c,u,h){var f,d;if(arguments.length<4)return f=a.map(function(g){return bi(o,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},a.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(l,d,h)}});var Rm={name:"css",register:_u,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,n,r){var a=this._props,o=e.style,l=i.vars.startAt,c,u,h,f,d,g,_,p,m,y,S,v,b,w,T,A;fh||_u(),this.styles=this.styles||Sm(e),A=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(En[_]&&um(_,t,i,n,e,r)))){if(d=typeof u,g=Xo[_],d==="function"&&(u=u.call(i,n,e,r),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Sa(u)),g)g(this,e,_,u,i)&&(T=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",$i.lastIndex=0,$i.test(c)||(p=qt(c),m=qt(u)),m?p!==m&&(c=nr(e,_,c,m)+m):p&&(u+=p),this.add(o,"setProperty",c,u,n,r,0,0,_),a.push(_),A.push(_,0,o[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,n,e,r):l[_],Ot(c)&&~c.indexOf("random(")&&(c=Sa(c)),qt(c+"")||c==="auto"||(c+=Rn.units[_]||qt(bi(e,_))||""),(c+"").charAt(1)==="="&&(c=bi(e,_))):c=bi(e,_),f=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),_ in li&&(_==="autoAlpha"&&(f===1&&bi(e,"visibility")==="hidden"&&h&&(f=0),A.push("visibility",0,o.visibility),Ki(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=li[_],~_.indexOf(",")&&(_=_.split(",")[0]))),S=_ in Li,S){if(this.styles.save(_),d==="string"&&u.substring(0,6)==="var(--"&&(u=zn(e,u.substring(4,u.indexOf(")"))),h=parseFloat(u)),v||(b=e._gsap,b.renderTransform&&!t.parseTransform||ba(e,t.parseTransform),w=t.smoothOrigin!==!1&&b.smooth,v=this._pt=new _n(this._pt,o,vt,0,1,b.renderTransform,b,0,-1),v.dep=1),_==="scale")this._pt=new _n(this._pt,b,"scaleY",b.scaleY,(y?ls(b.scaleY,y+h):h)-b.scaleY||0,pu),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){A.push(gn,0,o[gn]),u=i1(u),b.svg?gu(e,u,0,w,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==b.zOrigin&&Ki(this,b,"zOrigin",b.zOrigin,m),Ki(this,o,_,Yo(c),Yo(u)));continue}else if(_==="svgOrigin"){gu(e,u,1,w,0,this);continue}else if(_ in bm){o1(this,b,_,f,y?ls(f,y+u):u);continue}else if(_==="smoothOrigin"){Ki(this,b,"smooth",b.smooth,u);continue}else if(_==="force3D"){b[_]=u;continue}else if(_==="transform"){l1(this,u,e);continue}}else _ in o||(_=bs(_)||_);if(S||(h||h===0)&&(f||f===0)&&!HT.test(u)&&_ in o)p=(c+"").substr((f+"").length),h||(h=0),m=qt(u)||(_ in Rn.units?Rn.units[_]:p),p!==m&&(f=nr(e,_,c,m)),this._pt=new _n(this._pt,S?b:o,_,f,(y?ls(f,y+h):h)-f,!S&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?YT:pu),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=XT);else if(_ in o)n1.call(this,e,_,c,y?y+u:u);else if(_ in e)this.add(e,_,c||e[_],y?y+u:u,n,r);else if(_!=="parseTransform"){nh(_,u);continue}S||(_ in o?A.push(_,0,o[_]):typeof e[_]=="function"?A.push(_,2,e[_]()):A.push(_,1,c||e[_])),a.push(_)}}T&&_m(this)},render:function(e,t){if(t.tween._time||!dh())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:bi,aliases:li,getSetter:function(e,t,i){var n=li[t];return n&&n.indexOf(",")<0&&(t=n),t in Li&&t!==gn&&(e._gsap.x||bi(e,"x"))?i&&md===i?t==="scale"?ZT:KT:(md=i||{})&&(t==="scale"?JT:QT):e.style&&!$u(e.style[t])?jT:~t.indexOf("-")?qT:uh(e,t)},core:{_removeProperty:Ar,_getMatrix:mh}};vn.utils.checkPrefix=bs;vn.core.getStyleSaver=Sm;(function(s,e,t,i){var n=mn(s+","+e+","+t,function(r){Li[r]=1});mn(e,function(r){Rn.units[r]="deg",bm[r]=1}),li[n[13]]=s+","+e,mn(i,function(r){var a=r.split(":");li[a[1]]=n[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");mn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Rn.units[s]="px"});vn.registerPlugin(Rm);var jo=vn.registerPlugin(Rm)||vn;jo.core.Tween;function c1(){var s=Object.create(null);function e(n,r){var a=n.id,o=n.name,l=n.dependencies;l===void 0&&(l=[]);var c=n.init;c===void 0&&(c=function(){});var u=n.getTransferables;if(u===void 0&&(u=null),!s[a])try{l=l.map(function(f){return f&&f.isWorkerModule&&(e(f,function(d){if(d instanceof Error)throw d}),f=s[f.id].value),f}),c=i("<"+o+">.init",c),u&&(u=i("<"+o+">.getTransferables",u));var h=null;typeof c=="function"?h=c.apply(void 0,l):console.error("worker module init function failed to rehydrate"),s[a]={id:a,value:h,getTransferables:u},r(h)}catch(f){f&&f.noLog||console.error(f),r(f)}}function t(n,r){var a,o=n.id,l=n.args;(!s[o]||typeof s[o].value!="function")&&r(new Error("Worker module "+o+": not found or its 'init' did not return a function"));try{var c=(a=s[o]).value.apply(a,l);c&&typeof c.then=="function"?c.then(u,function(h){return r(h instanceof Error?h:new Error(""+h))}):u(c)}catch(h){r(h)}function u(h){try{var f=s[o].getTransferables&&s[o].getTransferables(h);(!f||!Array.isArray(f)||!f.length)&&(f=void 0),r(h,f)}catch(d){console.error(d),r(d)}}}function i(n,r){var a=void 0;self.troikaDefine=function(l){return a=l};var o=URL.createObjectURL(new Blob(["/** "+n.replace(/\*/g,"")+` **/

troikaDefine(
`+r+`
)`],{type:"application/javascript"}));try{importScripts(o)}catch(l){console.error(l)}return URL.revokeObjectURL(o),delete self.troikaDefine,a}self.addEventListener("message",function(n){var r=n.data,a=r.messageId,o=r.action,l=r.data;try{o==="registerModule"&&e(l,function(c){c instanceof Error?postMessage({messageId:a,success:!1,error:c.message}):postMessage({messageId:a,success:!0,result:{isCallable:typeof c=="function"}})}),o==="callModule"&&t(l,function(c,u){c instanceof Error?postMessage({messageId:a,success:!1,error:c.message}):postMessage({messageId:a,success:!0,result:c},u||void 0)})}catch(c){postMessage({messageId:a,success:!1,error:c.stack})}})}function u1(s){var e=function(){for(var t=[],i=arguments.length;i--;)t[i]=arguments[i];return e._getInitResult().then(function(n){if(typeof n=="function")return n.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=s.dependencies,i=s.init;t=Array.isArray(t)?t.map(function(r){return r&&(r=r.onMainThread||r,r._getInitResult&&(r=r._getInitResult())),r}):[];var n=Promise.all(t).then(function(r){return i.apply(null,r)});return e._getInitResult=function(){return n},n},e}var Cm=function(){var s=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),s=!0}catch(t){console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return Cm=function(){return s},s},h1=0,f1=0,cc=!1,ua=Object.create(null),ha=Object.create(null),vu=Object.create(null);function Ls(s){if((!s||typeof s.init!="function")&&!cc)throw new Error("requires `options.init` function");var e=s.dependencies,t=s.init,i=s.getTransferables,n=s.workerId,r=u1(s);n==null&&(n="#default");var a="workerModule"+ ++h1,o=s.name||a,l=null;e=e&&e.map(function(u){return typeof u=="function"&&!u.workerModuleData&&(cc=!0,u=Ls({workerId:n,name:"<"+o+"> function dependency: "+u.name,init:`function(){return (
`+Co(u)+`
)}`}),cc=!1),u&&u.workerModuleData&&(u=u.workerModuleData),u});function c(){for(var u=[],h=arguments.length;h--;)u[h]=arguments[h];if(!Cm())return r.apply(void 0,u);if(!l){l=Ed(n,"registerModule",c.workerModuleData);var f=function(){l=null,ha[n].delete(f)};(ha[n]||(ha[n]=new Set)).add(f)}return l.then(function(d){var g=d.isCallable;if(g)return Ed(n,"callModule",{id:a,args:u});throw new Error("Worker module function was called but `init` did not return a callable function")})}return c.workerModuleData={isWorkerModule:!0,id:a,name:o,dependencies:e,init:Co(t),getTransferables:i&&Co(i)},c.onMainThread=r,c}function d1(s){ha[s]&&ha[s].forEach(function(e){e()}),ua[s]&&(ua[s].terminate(),delete ua[s])}function Co(s){var e=s.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function p1(s){var e=ua[s];if(!e){var t=Co(c1);e=ua[s]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+s.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(i){var n=i.data,r=n.messageId,a=vu[r];if(!a)throw new Error("WorkerModule response with empty or unknown messageId");delete vu[r],a(n)}}return e}function Ed(s,e,t){return new Promise(function(i,n){var r=++f1;vu[r]=function(a){a.success?i(a.result):n(new Error("Error in worker "+e+" call: "+a.error))},p1(s).postMessage({messageId:r,action:e,data:t})})}function Pm(){var s=function(e){function t(J,j,N,X,ee,F,B,ie){var Y=1-B;ie.x=Y*Y*J+2*Y*B*N+B*B*ee,ie.y=Y*Y*j+2*Y*B*X+B*B*F}function i(J,j,N,X,ee,F,B,ie,Y,ne){var Se=1-Y;ne.x=Se*Se*Se*J+3*Se*Se*Y*N+3*Se*Y*Y*ee+Y*Y*Y*B,ne.y=Se*Se*Se*j+3*Se*Se*Y*X+3*Se*Y*Y*F+Y*Y*Y*ie}function n(J,j){for(var N=/([MLQCZ])([^MLQCZ]*)/g,X,ee,F,B,ie;X=N.exec(J);){var Y=X[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(ne){return parseFloat(ne)});switch(X[1]){case"M":B=ee=Y[0],ie=F=Y[1];break;case"L":(Y[0]!==B||Y[1]!==ie)&&j("L",B,ie,B=Y[0],ie=Y[1]);break;case"Q":{j("Q",B,ie,B=Y[2],ie=Y[3],Y[0],Y[1]);break}case"C":{j("C",B,ie,B=Y[4],ie=Y[5],Y[0],Y[1],Y[2],Y[3]);break}case"Z":(B!==ee||ie!==F)&&j("L",B,ie,ee,F);break}}}function r(J,j,N){N===void 0&&(N=16);var X={x:0,y:0};n(J,function(ee,F,B,ie,Y,ne,Se,ge,ve){switch(ee){case"L":j(F,B,ie,Y);break;case"Q":{for(var fe=F,Ue=B,I=1;I<N;I++)t(F,B,ne,Se,ie,Y,I/(N-1),X),j(fe,Ue,X.x,X.y),fe=X.x,Ue=X.y;break}case"C":{for(var Be=F,Re=B,Ie=1;Ie<N;Ie++)i(F,B,ne,Se,ge,ve,ie,Y,Ie/(N-1),X),j(Be,Re,X.x,X.y),Be=X.x,Re=X.y;break}}})}var a="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",o="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",l=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function u(J,j){var N=J.getContext?J.getContext("webgl",c):J,X=l.get(N);if(!X){let Be=function(te){var De=F[te];if(!De&&(De=F[te]=N.getExtension(te),!De))throw new Error(te+" not supported");return De},Re=function(te,De){var C=N.createShader(De);return N.shaderSource(C,te),N.compileShader(C),C},Ie=function(te,De,C,E){if(!B[te]){var z={},ae={},$=N.createProgram();N.attachShader($,Re(De,N.VERTEX_SHADER)),N.attachShader($,Re(C,N.FRAGMENT_SHADER)),N.linkProgram($),B[te]={program:$,transaction:function(xe){N.useProgram($),xe({setUniform:function(Me,be){for(var oe=[],pe=arguments.length-2;pe-- >0;)oe[pe]=arguments[pe+2];var _e=ae[be]||(ae[be]=N.getUniformLocation($,be));N["uniform"+Me].apply(N,[_e].concat(oe))},setAttribute:function(Me,be,oe,pe,_e){var we=z[Me];we||(we=z[Me]={buf:N.createBuffer(),loc:N.getAttribLocation($,Me),data:null}),N.bindBuffer(N.ARRAY_BUFFER,we.buf),N.vertexAttribPointer(we.loc,be,N.FLOAT,!1,0,0),N.enableVertexAttribArray(we.loc),ee?N.vertexAttribDivisor(we.loc,pe):Be("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(we.loc,pe),_e!==we.data&&(N.bufferData(N.ARRAY_BUFFER,_e,oe),we.data=_e)}})}}}B[te].transaction(E)},le=function(te,De){Y++;try{N.activeTexture(N.TEXTURE0+Y);var C=ie[te];C||(C=ie[te]=N.createTexture(),N.bindTexture(N.TEXTURE_2D,C),N.texParameteri(N.TEXTURE_2D,N.TEXTURE_MIN_FILTER,N.NEAREST),N.texParameteri(N.TEXTURE_2D,N.TEXTURE_MAG_FILTER,N.NEAREST)),N.bindTexture(N.TEXTURE_2D,C),De(C,Y)}finally{Y--}},Ee=function(te,De,C){var E=N.createFramebuffer();ne.push(E),N.bindFramebuffer(N.FRAMEBUFFER,E),N.activeTexture(N.TEXTURE0+De),N.bindTexture(N.TEXTURE_2D,te),N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,te,0);try{C(E)}finally{N.deleteFramebuffer(E),N.bindFramebuffer(N.FRAMEBUFFER,ne[--ne.length-1]||null)}},de=function(){F={},B={},ie={},Y=-1,ne.length=0};var Se=Be,ge=Re,ve=Ie,fe=le,Ue=Ee,I=de,ee=typeof WebGL2RenderingContext<"u"&&N instanceof WebGL2RenderingContext,F={},B={},ie={},Y=-1,ne=[];N.canvas.addEventListener("webglcontextlost",function(te){de(),te.preventDefault()},!1),l.set(N,X={gl:N,isWebGL2:ee,getExtension:Be,withProgram:Ie,withTexture:le,withTextureFramebuffer:Ee,handleContextLoss:de})}j(X)}function h(J,j,N,X,ee,F,B,ie){B===void 0&&(B=15),ie===void 0&&(ie=null),u(J,function(Y){var ne=Y.gl,Se=Y.withProgram,ge=Y.withTexture;ge("copy",function(ve,fe){ne.texImage2D(ne.TEXTURE_2D,0,ne.RGBA,ee,F,0,ne.RGBA,ne.UNSIGNED_BYTE,j),Se("copy",a,o,function(Ue){var I=Ue.setUniform,Be=Ue.setAttribute;Be("aUV",2,ne.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),I("1i","image",fe),ne.bindFramebuffer(ne.FRAMEBUFFER,ie||null),ne.disable(ne.BLEND),ne.colorMask(B&8,B&4,B&2,B&1),ne.viewport(N,X,ee,F),ne.scissor(N,X,ee,F),ne.drawArrays(ne.TRIANGLES,0,3)})})})}function f(J,j,N){var X=J.width,ee=J.height;u(J,function(F){var B=F.gl,ie=new Uint8Array(X*ee*4);B.readPixels(0,0,X,ee,B.RGBA,B.UNSIGNED_BYTE,ie),J.width=j,J.height=N,h(B,ie,0,0,X,ee)})}var d=Object.freeze({__proto__:null,withWebGLContext:u,renderImageData:h,resizeWebGLCanvasWithoutClearing:f});function g(J,j,N,X,ee,F){F===void 0&&(F=1);var B=new Uint8Array(J*j),ie=X[2]-X[0],Y=X[3]-X[1],ne=[];r(N,function(Be,Re,Ie,le){ne.push({x1:Be,y1:Re,x2:Ie,y2:le,minX:Math.min(Be,Ie),minY:Math.min(Re,le),maxX:Math.max(Be,Ie),maxY:Math.max(Re,le)})}),ne.sort(function(Be,Re){return Be.maxX-Re.maxX});for(var Se=0;Se<J;Se++)for(var ge=0;ge<j;ge++){var ve=Ue(X[0]+ie*(Se+.5)/J,X[1]+Y*(ge+.5)/j),fe=Math.pow(1-Math.abs(ve)/ee,F)/2;ve<0&&(fe=1-fe),fe=Math.max(0,Math.min(255,Math.round(fe*255))),B[ge*J+Se]=fe}return B;function Ue(Be,Re){for(var Ie=1/0,le=1/0,Ee=ne.length;Ee--;){var de=ne[Ee];if(de.maxX+le<=Be)break;if(Be+le>de.minX&&Re-le<de.maxY&&Re+le>de.minY){var te=m(Be,Re,de.x1,de.y1,de.x2,de.y2);te<Ie&&(Ie=te,le=Math.sqrt(Ie))}}return I(Be,Re)&&(le=-le),le}function I(Be,Re){for(var Ie=0,le=ne.length;le--;){var Ee=ne[le];if(Ee.maxX<=Be)break;var de=Ee.y1>Re!=Ee.y2>Re&&Be<(Ee.x2-Ee.x1)*(Re-Ee.y1)/(Ee.y2-Ee.y1)+Ee.x1;de&&(Ie+=Ee.y1<Ee.y2?1:-1)}return Ie!==0}}function _(J,j,N,X,ee,F,B,ie,Y,ne){F===void 0&&(F=1),ie===void 0&&(ie=0),Y===void 0&&(Y=0),ne===void 0&&(ne=0),p(J,j,N,X,ee,F,B,null,ie,Y,ne)}function p(J,j,N,X,ee,F,B,ie,Y,ne,Se){F===void 0&&(F=1),Y===void 0&&(Y=0),ne===void 0&&(ne=0),Se===void 0&&(Se=0);for(var ge=g(J,j,N,X,ee,F),ve=new Uint8Array(ge.length*4),fe=0;fe<ge.length;fe++)ve[fe*4+Se]=ge[fe];h(B,ve,Y,ne,J,j,1<<3-Se,ie)}function m(J,j,N,X,ee,F){var B=ee-N,ie=F-X,Y=B*B+ie*ie,ne=Y?Math.max(0,Math.min(1,((J-N)*B+(j-X)*ie)/Y)):0,Se=J-(N+ne*B),ge=j-(X+ne*ie);return Se*Se+ge*ge}var y=Object.freeze({__proto__:null,generate:g,generateIntoCanvas:_,generateIntoFramebuffer:p}),S="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",v="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",b="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",w=new Float32Array([0,0,2,0,0,2]),T=null,A=!1,x={},M=new WeakMap;function D(J){if(!A&&!V(J))throw new Error("WebGL generation not supported")}function P(J,j,N,X,ee,F,B){if(F===void 0&&(F=1),B===void 0&&(B=null),!B&&(B=T,!B)){var ie=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!ie)throw new Error("OffscreenCanvas or DOM canvas not supported");B=T=ie.getContext("webgl",{depth:!1})}D(B);var Y=new Uint8Array(J*j*4);u(B,function(ve){var fe=ve.gl,Ue=ve.withTexture,I=ve.withTextureFramebuffer;Ue("readable",function(Be,Re){fe.texImage2D(fe.TEXTURE_2D,0,fe.RGBA,J,j,0,fe.RGBA,fe.UNSIGNED_BYTE,null),I(Be,Re,function(Ie){U(J,j,N,X,ee,F,fe,Ie,0,0,0),fe.readPixels(0,0,J,j,fe.RGBA,fe.UNSIGNED_BYTE,Y)})})});for(var ne=new Uint8Array(J*j),Se=0,ge=0;Se<Y.length;Se+=4)ne[ge++]=Y[Se];return ne}function L(J,j,N,X,ee,F,B,ie,Y,ne){F===void 0&&(F=1),ie===void 0&&(ie=0),Y===void 0&&(Y=0),ne===void 0&&(ne=0),U(J,j,N,X,ee,F,B,null,ie,Y,ne)}function U(J,j,N,X,ee,F,B,ie,Y,ne,Se){F===void 0&&(F=1),Y===void 0&&(Y=0),ne===void 0&&(ne=0),Se===void 0&&(Se=0),D(B);var ge=[];r(N,function(ve,fe,Ue,I){ge.push(ve,fe,Ue,I)}),ge=new Float32Array(ge),u(B,function(ve){var fe=ve.gl,Ue=ve.isWebGL2,I=ve.getExtension,Be=ve.withProgram,Re=ve.withTexture,Ie=ve.withTextureFramebuffer,le=ve.handleContextLoss;if(Re("rawDistances",function(Ee,de){(J!==Ee._lastWidth||j!==Ee._lastHeight)&&fe.texImage2D(fe.TEXTURE_2D,0,fe.RGBA,Ee._lastWidth=J,Ee._lastHeight=j,0,fe.RGBA,fe.UNSIGNED_BYTE,null),Be("main",S,v,function(te){var De=te.setAttribute,C=te.setUniform,E=!Ue&&I("ANGLE_instanced_arrays"),z=!Ue&&I("EXT_blend_minmax");De("aUV",2,fe.STATIC_DRAW,0,w),De("aLineSegment",4,fe.DYNAMIC_DRAW,1,ge),C.apply(void 0,["4f","uGlyphBounds"].concat(X)),C("1f","uMaxDistance",ee),C("1f","uExponent",F),Ie(Ee,de,function(ae){fe.enable(fe.BLEND),fe.colorMask(!0,!0,!0,!0),fe.viewport(0,0,J,j),fe.scissor(0,0,J,j),fe.blendFunc(fe.ONE,fe.ONE),fe.blendEquationSeparate(fe.FUNC_ADD,Ue?fe.MAX:z.MAX_EXT),fe.clear(fe.COLOR_BUFFER_BIT),Ue?fe.drawArraysInstanced(fe.TRIANGLES,0,3,ge.length/4):E.drawArraysInstancedANGLE(fe.TRIANGLES,0,3,ge.length/4)})}),Be("post",a,b,function(te){te.setAttribute("aUV",2,fe.STATIC_DRAW,0,w),te.setUniform("1i","tex",de),fe.bindFramebuffer(fe.FRAMEBUFFER,ie),fe.disable(fe.BLEND),fe.colorMask(Se===0,Se===1,Se===2,Se===3),fe.viewport(Y,ne,J,j),fe.scissor(Y,ne,J,j),fe.drawArrays(fe.TRIANGLES,0,3)})}),fe.isContextLost())throw le(),new Error("webgl context lost")})}function V(J){var j=!J||J===T?x:J.canvas||J,N=M.get(j);if(N===void 0){A=!0;var X=null;try{var ee=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],F=P(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,J);N=F&&ee.length===F.length&&F.every(function(B,ie){return B===ee[ie]}),N||(X="bad trial run results",console.info(ee,F))}catch(B){N=!1,X=B.message}X&&console.warn("WebGL SDF generation not supported:",X),A=!1,M.set(j,N)}return N}var O=Object.freeze({__proto__:null,generate:P,generateIntoCanvas:L,generateIntoFramebuffer:U,isSupported:V});function K(J,j,N,X,ee,F){ee===void 0&&(ee=Math.max(X[2]-X[0],X[3]-X[1])/2),F===void 0&&(F=1);try{return P.apply(O,arguments)}catch(B){return console.info("WebGL SDF generation failed, falling back to JS",B),g.apply(y,arguments)}}function W(J,j,N,X,ee,F,B,ie,Y,ne){ee===void 0&&(ee=Math.max(X[2]-X[0],X[3]-X[1])/2),F===void 0&&(F=1),ie===void 0&&(ie=0),Y===void 0&&(Y=0),ne===void 0&&(ne=0);try{return L.apply(O,arguments)}catch(Se){return console.info("WebGL SDF generation failed, falling back to JS",Se),_.apply(y,arguments)}}return e.forEachPathCommand=n,e.generate=K,e.generateIntoCanvas=W,e.javascript=y,e.pathToLineSegments=r,e.webgl=O,e.webglUtils=d,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return s}function m1(){var s=function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},i={},n={};i.L=1,n[1]="L",Object.keys(t).forEach(function(le,Ee){i[le]=1<<Ee+1,n[i[le]]=le}),Object.freeze(i);var r=i.LRI|i.RLI|i.FSI,a=i.L|i.R|i.AL,o=i.B|i.S|i.WS|i.ON|i.FSI|i.LRI|i.RLI|i.PDI,l=i.BN|i.RLE|i.LRE|i.RLO|i.LRO|i.PDF,c=i.S|i.WS|i.B|r|i.PDI|l,u=null;function h(){if(!u){u=new Map;var le=function(de){if(t.hasOwnProperty(de)){var te=0;t[de].split(",").forEach(function(De){var C=De.split("+"),E=C[0],z=C[1];E=parseInt(E,36),z=z?parseInt(z,36):0,u.set(te+=E,i[de]);for(var ae=0;ae<z;ae++)u.set(++te,i[de])})}};for(var Ee in t)le(Ee)}}function f(le){return h(),u.get(le.codePointAt(0))||i.L}function d(le){return n[f(le)]}var g={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function _(le,Ee){var de=36,te=0,De=new Map,C=Ee&&new Map,E;return le.split(",").forEach(function z(ae){if(ae.indexOf("+")!==-1)for(var $=+ae;$--;)z(E);else{E=ae;var Q=ae.split(">"),xe=Q[0],me=Q[1];xe=String.fromCodePoint(te+=parseInt(xe,de)),me=String.fromCodePoint(te+=parseInt(me,de)),De.set(xe,me),Ee&&C.set(me,xe)}}),{map:De,reverseMap:C}}var p,m,y;function S(){if(!p){var le=_(g.pairs,!0),Ee=le.map,de=le.reverseMap;p=Ee,m=de,y=_(g.canonical,!1).map}}function v(le){return S(),p.get(le)||null}function b(le){return S(),m.get(le)||null}function w(le){return S(),y.get(le)||null}var T=i.L,A=i.R,x=i.EN,M=i.ES,D=i.ET,P=i.AN,L=i.CS,U=i.B,V=i.S,O=i.ON,K=i.BN,W=i.NSM,J=i.AL,j=i.LRO,N=i.RLO,X=i.LRE,ee=i.RLE,F=i.PDF,B=i.LRI,ie=i.RLI,Y=i.FSI,ne=i.PDI;function Se(le,Ee){for(var de=125,te=new Uint32Array(le.length),De=0;De<le.length;De++)te[De]=f(le[De]);var C=new Map;function E(un,Xn){var hn=te[un];te[un]=Xn,C.set(hn,C.get(hn)-1),hn&o&&C.set(o,C.get(o)-1),C.set(Xn,(C.get(Xn)||0)+1),Xn&o&&C.set(o,(C.get(o)||0)+1)}for(var z=new Uint8Array(le.length),ae=new Map,$=[],Q=null,xe=0;xe<le.length;xe++)Q||$.push(Q={start:xe,end:le.length-1,level:Ee==="rtl"?1:Ee==="ltr"?0:Dh(xe,!1)}),te[xe]&U&&(Q.end=xe,Q=null);for(var me=ee|X|N|j|r|ne|F|U,Me=function(un){return un+(un&1?1:2)},be=function(un){return un+(un&1?2:1)},oe=0;oe<$.length;oe++){Q=$[oe];var pe=[{_level:Q.level,_override:0,_isolate:0}],_e=void 0,we=0,ye=0,ze=0;C.clear();for(var k=Q.start;k<=Q.end;k++){var he=te[k];if(_e=pe[pe.length-1],C.set(he,(C.get(he)||0)+1),he&o&&C.set(o,(C.get(o)||0)+1),he&me)if(he&(ee|X)){z[k]=_e._level;var ce=(he===ee?be:Me)(_e._level);ce<=de&&!we&&!ye?pe.push({_level:ce,_override:0,_isolate:0}):we||ye++}else if(he&(N|j)){z[k]=_e._level;var Le=(he===N?be:Me)(_e._level);Le<=de&&!we&&!ye?pe.push({_level:Le,_override:he&N?A:T,_isolate:0}):we||ye++}else if(he&r){he&Y&&(he=Dh(k+1,!0)===1?ie:B),z[k]=_e._level,_e._override&&E(k,_e._override);var ue=(he===ie?be:Me)(_e._level);ue<=de&&we===0&&ye===0?(ze++,pe.push({_level:ue,_override:0,_isolate:1,_isolInitIndex:k})):we++}else if(he&ne){if(we>0)we--;else if(ze>0){for(ye=0;!pe[pe.length-1]._isolate;)pe.pop();var se=pe[pe.length-1]._isolInitIndex;se!=null&&(ae.set(se,k),ae.set(k,se)),pe.pop(),ze--}_e=pe[pe.length-1],z[k]=_e._level,_e._override&&E(k,_e._override)}else he&F?(we===0&&(ye>0?ye--:!_e._isolate&&pe.length>1&&(pe.pop(),_e=pe[pe.length-1])),z[k]=_e._level):he&U&&(z[k]=Q.level);else z[k]=_e._level,_e._override&&he!==K&&E(k,_e._override)}for(var Ae=[],Ne=null,Oe=Q.start;Oe<=Q.end;Oe++){var He=te[Oe];if(!(He&l)){var ut=z[Oe],ft=He&r,yt=He===ne;Ne&&ut===Ne._level?(Ne._end=Oe,Ne._endsWithIsolInit=ft):Ae.push(Ne={_start:Oe,_end:Oe,_level:ut,_startsWithPDI:yt,_endsWithIsolInit:ft})}}for(var ln=[],Wt=0;Wt<Ae.length;Wt++){var yn=Ae[Wt];if(!yn._startsWithPDI||yn._startsWithPDI&&!ae.has(yn._start)){for(var Vn=[Ne=yn],ni=void 0;Ne&&Ne._endsWithIsolInit&&(ni=ae.get(Ne._end))!=null;)for(var cn=Wt+1;cn<Ae.length;cn++)if(Ae[cn]._start===ni){Vn.push(Ne=Ae[cn]);break}for(var Ut=[],Un=0;Un<Vn.length;Un++)for(var Us=Vn[Un],Dr=Us._start;Dr<=Us._end;Dr++)Ut.push(Dr);for(var rl=z[Ut[0]],La=Q.level,Lr=Ut[0]-1;Lr>=0;Lr--)if(!(te[Lr]&l)){La=z[Lr];break}var Is=Ut[Ut.length-1],sl=z[Is],Ua=Q.level;if(!(te[Is]&r)){for(var R=Is+1;R<=Q.end;R++)if(!(te[R]&l)){Ua=z[R];break}}ln.push({_seqIndices:Ut,_sosType:Math.max(La,rl)%2?A:T,_eosType:Math.max(Ua,sl)%2?A:T})}}for(var q=0;q<ln.length;q++){var re=ln[q],H=re._seqIndices,Z=re._sosType,Te=re._eosType,Ce=z[H[0]]&1?A:T;if(C.get(W))for(var ke=0;ke<H.length;ke++){var Fe=H[ke];if(te[Fe]&W){for(var Xe=Z,Ye=ke-1;Ye>=0;Ye--)if(!(te[H[Ye]]&l)){Xe=te[H[Ye]];break}E(Fe,Xe&(r|ne)?O:Xe)}}if(C.get(x))for(var Ge=0;Ge<H.length;Ge++){var Qe=H[Ge];if(te[Qe]&x)for(var it=Ge-1;it>=-1;it--){var dt=it===-1?Z:te[H[it]];if(dt&a){dt===J&&E(Qe,P);break}}}if(C.get(J))for(var pt=0;pt<H.length;pt++){var tt=H[pt];te[tt]&J&&E(tt,A)}if(C.get(M)||C.get(L))for(var Ve=1;Ve<H.length-1;Ve++){var Mt=H[Ve];if(te[Mt]&(M|L)){for(var $e=0,Qt=0,ii=Ve-1;ii>=0&&($e=te[H[ii]],!!($e&l));ii--);for(var kt=Ve+1;kt<H.length&&(Qt=te[H[kt]],!!(Qt&l));kt++);$e===Qt&&(te[Mt]===M?$e===x:$e&(x|P))&&E(Mt,$e)}}if(C.get(x))for(var Xt=0;Xt<H.length;Xt++){var mt=H[Xt];if(te[mt]&x){for(var Bt=Xt-1;Bt>=0&&te[H[Bt]]&(D|l);Bt--)E(H[Bt],x);for(Xt++;Xt<H.length&&te[H[Xt]]&(D|l|x);Xt++)te[H[Xt]]!==x&&E(H[Xt],x)}}if(C.get(D)||C.get(M)||C.get(L))for(var It=0;It<H.length;It++){var Nt=H[It];if(te[Nt]&(D|M|L)){E(Nt,O);for(var At=It-1;At>=0&&te[H[At]]&l;At--)E(H[At],O);for(var Ui=It+1;Ui<H.length&&te[H[Ui]]&l;Ui++)E(H[Ui],O)}}if(C.get(x))for(var Hn=0,xh=Z;Hn<H.length;Hn++){var yh=H[Hn],al=te[yh];al&x?xh===T&&E(yh,T):al&a&&(xh=al)}if(C.get(o)){var Ns=A|x|P,Sh=Ns|T,Ia=[];{for(var Ur=[],Ir=0;Ir<H.length;Ir++)if(te[H[Ir]]&o){var Fs=le[H[Ir]],Mh=void 0;if(v(Fs)!==null)if(Ur.length<63)Ur.push({char:Fs,seqIndex:Ir});else break;else if((Mh=b(Fs))!==null)for(var Os=Ur.length-1;Os>=0;Os--){var ol=Ur[Os].char;if(ol===Mh||ol===b(w(Fs))||v(w(ol))===Fs){Ia.push([Ur[Os].seqIndex,Ir]),Ur.length=Os;break}}}Ia.sort(function(un,Xn){return un[0]-Xn[0]})}for(var ll=0;ll<Ia.length;ll++){for(var Th=Ia[ll],Na=Th[0],cl=Th[1],Eh=!1,Wn=0,ul=Na+1;ul<cl;ul++){var bh=H[ul];if(te[bh]&Sh){Eh=!0;var wh=te[bh]&Ns?A:T;if(wh===Ce){Wn=wh;break}}}if(Eh&&!Wn){Wn=Z;for(var hl=Na-1;hl>=0;hl--){var Ah=H[hl];if(te[Ah]&Sh){var Rh=te[Ah]&Ns?A:T;Rh!==Ce?Wn=Rh:Wn=Ce;break}}}if(Wn){if(te[H[Na]]=te[H[cl]]=Wn,Wn!==Ce){for(var ks=Na+1;ks<H.length;ks++)if(!(te[H[ks]]&l)){f(le[H[ks]])&W&&(te[H[ks]]=Wn);break}}if(Wn!==Ce){for(var Bs=cl+1;Bs<H.length;Bs++)if(!(te[H[Bs]]&l)){f(le[H[Bs]])&W&&(te[H[Bs]]=Wn);break}}}}for(var Ii=0;Ii<H.length;Ii++)if(te[H[Ii]]&o){for(var Ch=Ii,fl=Ii,dl=Z,zs=Ii-1;zs>=0;zs--)if(te[H[zs]]&l)Ch=zs;else{dl=te[H[zs]]&Ns?A:T;break}for(var Ph=Te,Gs=Ii+1;Gs<H.length;Gs++)if(te[H[Gs]]&(o|l))fl=Gs;else{Ph=te[H[Gs]]&Ns?A:T;break}for(var pl=Ch;pl<=fl;pl++)te[H[pl]]=dl===Ph?dl:Ce;Ii=fl}}}for(var Sn=Q.start;Sn<=Q.end;Sn++){var qm=z[Sn],Fa=te[Sn];if(qm&1?Fa&(T|x|P)&&z[Sn]++:Fa&A?z[Sn]++:Fa&(P|x)&&(z[Sn]+=2),Fa&l&&(z[Sn]=Sn===0?Q.level:z[Sn-1]),Sn===Q.end||f(le[Sn])&(V|U))for(var Oa=Sn;Oa>=0&&f(le[Oa])&c;Oa--)z[Oa]=Q.level}}return{levels:z,paragraphs:$};function Dh(un,Xn){for(var hn=un;hn<le.length;hn++){var Ni=te[hn];if(Ni&(A|J))return 1;if(Ni&(U|T)||Xn&&Ni===ne)return 0;if(Ni&r){var Lh=Km(hn);hn=Lh===-1?le.length:Lh}}return 0}function Km(un){for(var Xn=1,hn=un+1;hn<le.length;hn++){var Ni=te[hn];if(Ni&U)break;if(Ni&ne){if(--Xn===0)return hn}else Ni&r&&Xn++}return-1}}var ge="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",ve;function fe(){if(!ve){var le=_(ge,!0),Ee=le.map,de=le.reverseMap;de.forEach(function(te,De){Ee.set(De,te)}),ve=Ee}}function Ue(le){return fe(),ve.get(le)||null}function I(le,Ee,de,te){var De=le.length;de=Math.max(0,de==null?0:+de),te=Math.min(De-1,te==null?De-1:+te);for(var C=new Map,E=de;E<=te;E++)if(Ee[E]&1){var z=Ue(le[E]);z!==null&&C.set(E,z)}return C}function Be(le,Ee,de,te){var De=le.length;de=Math.max(0,de==null?0:+de),te=Math.min(De-1,te==null?De-1:+te);var C=[];return Ee.paragraphs.forEach(function(E){var z=Math.max(de,E.start),ae=Math.min(te,E.end);if(z<ae){for(var $=Ee.levels.slice(z,ae+1),Q=ae;Q>=z&&f(le[Q])&c;Q--)$[Q]=E.level;for(var xe=E.level,me=1/0,Me=0;Me<$.length;Me++){var be=$[Me];be>xe&&(xe=be),be<me&&(me=be|1)}for(var oe=xe;oe>=me;oe--)for(var pe=0;pe<$.length;pe++)if($[pe]>=oe){for(var _e=pe;pe+1<$.length&&$[pe+1]>=oe;)pe++;pe>_e&&C.push([_e+z,pe+z])}}}),C}function Re(le,Ee,de,te){var De=Ie(le,Ee,de,te),C=[].concat(le);return De.forEach(function(E,z){C[z]=(Ee.levels[E]&1?Ue(le[E]):null)||le[E]}),C.join("")}function Ie(le,Ee,de,te){for(var De=Be(le,Ee,de,te),C=[],E=0;E<le.length;E++)C[E]=E;return De.forEach(function(z){for(var ae=z[0],$=z[1],Q=C.slice(ae,$+1),xe=Q.length;xe--;)C[$-xe]=Q[xe]}),C}return e.closingToOpeningBracket=b,e.getBidiCharType=f,e.getBidiCharTypeName=d,e.getCanonicalBracket=w,e.getEmbeddingLevels=Se,e.getMirroredCharacter=Ue,e.getMirroredCharactersMap=I,e.getReorderSegments=Be,e.getReorderedIndices=Ie,e.getReorderedString=Re,e.openingToClosingBracket=v,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return s}const Dm=/\bvoid\s+main\s*\(\s*\)\s*{/g;function xu(s){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(i,n){let r=Ze[n];return r?xu(r):i}return s.replace(e,t)}const zt=[];for(let s=0;s<256;s++)zt[s]=(s<16?"0":"")+s.toString(16);function _1(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[s&255]+zt[s>>8&255]+zt[s>>16&255]+zt[s>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toUpperCase()}const pr=Object.assign||function(){let s=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let i=arguments[e];if(i)for(let n in i)Object.prototype.hasOwnProperty.call(i,n)&&(s[n]=i[n])}return s},g1=Date.now(),bd=new WeakMap,wd=new Map;let v1=1e10;function yu(s,e){const t=M1(e);let i=bd.get(s);if(i||bd.set(s,i=Object.create(null)),i[t])return new i[t];const n=`_onBeforeCompile${t}`,r=function(c,u){s.onBeforeCompile.call(this,c,u);const h=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let f=wd[h];if(!f){const d=x1(this,c,e,t);f=wd[h]=d}c.vertexShader=f.vertexShader,c.fragmentShader=f.fragmentShader,pr(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-g1}}),this[n]&&this[n](c)},a=function(){return o(e.chained?s:s.clone())},o=function(c){const u=Object.create(c,l);return Object.defineProperty(u,"baseMaterial",{value:s}),Object.defineProperty(u,"id",{value:v1++}),u.uuid=_1(),u.uniforms=pr({},c.uniforms,e.uniforms),u.defines=pr({},c.defines,e.defines),u.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",u.extensions=pr({},c.extensions,e.extensions),u._listeners=void 0,u},l={constructor:{value:a},isDerivedMaterial:{value:!0},type:{get:()=>s.type,set:c=>{s.type=c}},isDerivedFrom:{writable:!0,configurable:!0,value:function(c){const u=this.baseMaterial;return c===u||u.isDerivedMaterial&&u.isDerivedFrom(c)||!1}},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return s.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return r},set(c){this[n]=c}},copy:{writable:!0,configurable:!0,value:function(c){return s.copy.call(this,c),!s.isShaderMaterial&&!s.isDerivedMaterial&&(pr(this.extensions,c.extensions),pr(this.defines,c.defines),pr(this.uniforms,op.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new s.constructor;return o(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=yu(s.isDerivedMaterial?s.getDepthMaterial():new mp({depthPacking:Qd}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=yu(s.isDerivedMaterial?s.getDistanceMaterial():new _p,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:u}=this;c&&c.dispose(),u&&u.dispose(),s.dispose.call(this)}}};return i[t]=a,new a}function x1(s,{vertexShader:e,fragmentShader:t},i,n){let{vertexDefs:r,vertexMainIntro:a,vertexMainOutro:o,vertexTransform:l,fragmentDefs:c,fragmentMainIntro:u,fragmentMainOutro:h,fragmentColorTransform:f,customRewriter:d,timeUniform:g}=i;if(r=r||"",a=a||"",o=o||"",c=c||"",u=u||"",h=h||"",(l||d)&&(e=xu(e)),(f||d)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=xu(t)),d){let _=d({vertexShader:e,fragmentShader:t});e=_.vertexShader,t=_.fragmentShader}if(f){let _=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,p=>(_.push(p),"")),h=`${f}
${_.join(`
`)}
${h}`}if(g){const _=`
uniform float ${g};
`;r=_+r,c=_+c}return l&&(e=`vec3 troika_position_${n};
vec3 troika_normal_${n};
vec2 troika_uv_${n};
${e}
`,r=`${r}
void troikaVertexTransform${n}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${l}
}
`,a=`
troika_position_${n} = vec3(position);
troika_normal_${n} = vec3(normal);
troika_uv_${n} = vec2(uv);
troikaVertexTransform${n}(troika_position_${n}, troika_normal_${n}, troika_uv_${n});
${a}
`,e=e.replace(/\b(position|normal|uv)\b/g,(_,p,m,y)=>/\battribute\s+vec[23]\s+$/.test(y.substr(0,m))?p:`troika_${p}_${n}`),s.map&&s.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${n}`))),e=Ad(e,n,r,a,o),t=Ad(t,n,c,u,h),{vertexShader:e,fragmentShader:t}}function Ad(s,e,t,i,n){return(i||n||t)&&(s=s.replace(Dm,`
${t}
void troikaOrigMain${e}() {`),s+=`
void main() {
  ${i}
  troikaOrigMain${e}();
  ${n}
}`),s}function y1(s,e){return s==="uniforms"?void 0:typeof e=="function"?e.toString():e}let S1=0;const Rd=new Map;function M1(s){const e=JSON.stringify(s,y1);let t=Rd.get(e);return t==null&&Rd.set(e,t=++S1),t}/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function T1(){return typeof window>"u"&&(self.window=self),function(s){var e={parse:function(n){var r=e._bin,a=new Uint8Array(n);if(r.readASCII(a,0,4)=="ttcf"){var o=4;r.readUshort(a,o),o+=2,r.readUshort(a,o),o+=2;var l=r.readUint(a,o);o+=4;for(var c=[],u=0;u<l;u++){var h=r.readUint(a,o);o+=4,c.push(e._readFont(a,h))}return c}return[e._readFont(a,0)]},_readFont:function(n,r){var a=e._bin,o=r;a.readFixed(n,r),r+=4;var l=a.readUshort(n,r);r+=2,a.readUshort(n,r),r+=2,a.readUshort(n,r),r+=2,a.readUshort(n,r),r+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],u={_data:n,_offset:o},h={},f=0;f<l;f++){var d=a.readASCII(n,r,4);r+=4,a.readUint(n,r),r+=4;var g=a.readUint(n,r);r+=4;var _=a.readUint(n,r);r+=4,h[d]={offset:g,length:_}}for(f=0;f<c.length;f++){var p=c[f];h[p]&&(u[p.trim()]=e[p.trim()].parse(n,h[p].offset,h[p].length,u))}return u},_tabOffset:function(n,r,a){for(var o=e._bin,l=o.readUshort(n,a+4),c=a+12,u=0;u<l;u++){var h=o.readASCII(n,c,4);c+=4,o.readUint(n,c),c+=4;var f=o.readUint(n,c);if(c+=4,o.readUint(n,c),c+=4,h==r)return f}return 0}};e._bin={readFixed:function(n,r){return(n[r]<<8|n[r+1])+(n[r+2]<<8|n[r+3])/65540},readF2dot14:function(n,r){return e._bin.readShort(n,r)/16384},readInt:function(n,r){return e._bin._view(n).getInt32(r)},readInt8:function(n,r){return e._bin._view(n).getInt8(r)},readShort:function(n,r){return e._bin._view(n).getInt16(r)},readUshort:function(n,r){return e._bin._view(n).getUint16(r)},readUshorts:function(n,r,a){for(var o=[],l=0;l<a;l++)o.push(e._bin.readUshort(n,r+2*l));return o},readUint:function(n,r){return e._bin._view(n).getUint32(r)},readUint64:function(n,r){return 4294967296*e._bin.readUint(n,r)+e._bin.readUint(n,r+4)},readASCII:function(n,r,a){for(var o="",l=0;l<a;l++)o+=String.fromCharCode(n[r+l]);return o},readUnicode:function(n,r,a){for(var o="",l=0;l<a;l++){var c=n[r++]<<8|n[r++];o+=String.fromCharCode(c)}return o},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(n,r,a){var o=e._bin._tdec;return o&&r==0&&a==n.length?o.decode(n):e._bin.readASCII(n,r,a)},readBytes:function(n,r,a){for(var o=[],l=0;l<a;l++)o.push(n[r+l]);return o},readASCIIArray:function(n,r,a){for(var o=[],l=0;l<a;l++)o.push(String.fromCharCode(n[r+l]));return o},_view:function(n){return n._dataView||(n._dataView=n.buffer?new DataView(n.buffer,n.byteOffset,n.byteLength):new DataView(new Uint8Array(n).buffer))}},e._lctf={},e._lctf.parse=function(n,r,a,o,l){var c=e._bin,u={},h=r;c.readFixed(n,r),r+=4;var f=c.readUshort(n,r);r+=2;var d=c.readUshort(n,r);r+=2;var g=c.readUshort(n,r);return r+=2,u.scriptList=e._lctf.readScriptList(n,h+f),u.featureList=e._lctf.readFeatureList(n,h+d),u.lookupList=e._lctf.readLookupList(n,h+g,l),u},e._lctf.readLookupList=function(n,r,a){var o=e._bin,l=r,c=[],u=o.readUshort(n,r);r+=2;for(var h=0;h<u;h++){var f=o.readUshort(n,r);r+=2;var d=e._lctf.readLookupTable(n,l+f,a);c.push(d)}return c},e._lctf.readLookupTable=function(n,r,a){var o=e._bin,l=r,c={tabs:[]};c.ltype=o.readUshort(n,r),r+=2,c.flag=o.readUshort(n,r),r+=2;var u=o.readUshort(n,r);r+=2;for(var h=c.ltype,f=0;f<u;f++){var d=o.readUshort(n,r);r+=2;var g=a(n,h,l+d,c);c.tabs.push(g)}return c},e._lctf.numOfOnes=function(n){for(var r=0,a=0;a<32;a++)(n>>>a&1)!=0&&r++;return r},e._lctf.readClassDef=function(n,r){var a=e._bin,o=[],l=a.readUshort(n,r);if(r+=2,l==1){var c=a.readUshort(n,r);r+=2;var u=a.readUshort(n,r);r+=2;for(var h=0;h<u;h++)o.push(c+h),o.push(c+h),o.push(a.readUshort(n,r)),r+=2}if(l==2){var f=a.readUshort(n,r);for(r+=2,h=0;h<f;h++)o.push(a.readUshort(n,r)),r+=2,o.push(a.readUshort(n,r)),r+=2,o.push(a.readUshort(n,r)),r+=2}return o},e._lctf.getInterval=function(n,r){for(var a=0;a<n.length;a+=3){var o=n[a],l=n[a+1];if(n[a+2],o<=r&&r<=l)return a}return-1},e._lctf.readCoverage=function(n,r){var a=e._bin,o={};o.fmt=a.readUshort(n,r),r+=2;var l=a.readUshort(n,r);return r+=2,o.fmt==1&&(o.tab=a.readUshorts(n,r,l)),o.fmt==2&&(o.tab=a.readUshorts(n,r,3*l)),o},e._lctf.coverageIndex=function(n,r){var a=n.tab;if(n.fmt==1)return a.indexOf(r);if(n.fmt==2){var o=e._lctf.getInterval(a,r);if(o!=-1)return a[o+2]+(r-a[o])}return-1},e._lctf.readFeatureList=function(n,r){var a=e._bin,o=r,l=[],c=a.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var h=a.readASCII(n,r,4);r+=4;var f=a.readUshort(n,r);r+=2;var d=e._lctf.readFeatureTable(n,o+f);d.tag=h.trim(),l.push(d)}return l},e._lctf.readFeatureTable=function(n,r){var a=e._bin,o=r,l={},c=a.readUshort(n,r);r+=2,c>0&&(l.featureParams=o+c);var u=a.readUshort(n,r);r+=2,l.tab=[];for(var h=0;h<u;h++)l.tab.push(a.readUshort(n,r+2*h));return l},e._lctf.readScriptList=function(n,r){var a=e._bin,o=r,l={},c=a.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var h=a.readASCII(n,r,4);r+=4;var f=a.readUshort(n,r);r+=2,l[h.trim()]=e._lctf.readScriptTable(n,o+f)}return l},e._lctf.readScriptTable=function(n,r){var a=e._bin,o=r,l={},c=a.readUshort(n,r);r+=2,c>0&&(l.default=e._lctf.readLangSysTable(n,o+c));var u=a.readUshort(n,r);r+=2;for(var h=0;h<u;h++){var f=a.readASCII(n,r,4);r+=4;var d=a.readUshort(n,r);r+=2,l[f.trim()]=e._lctf.readLangSysTable(n,o+d)}return l},e._lctf.readLangSysTable=function(n,r){var a=e._bin,o={};a.readUshort(n,r),r+=2,o.reqFeature=a.readUshort(n,r),r+=2;var l=a.readUshort(n,r);return r+=2,o.features=a.readUshorts(n,r,l),o},e.CFF={},e.CFF.parse=function(n,r,a){var o=e._bin;(n=new Uint8Array(n.buffer,r,a))[r=0],n[++r],n[++r],n[++r],r++;var l=[];r=e.CFF.readIndex(n,r,l);for(var c=[],u=0;u<l.length-1;u++)c.push(o.readASCII(n,r+l[u],l[u+1]-l[u]));r+=l[l.length-1];var h=[];r=e.CFF.readIndex(n,r,h);var f=[];for(u=0;u<h.length-1;u++)f.push(e.CFF.readDict(n,r+h[u],r+h[u+1]));r+=h[h.length-1];var d=f[0],g=[];r=e.CFF.readIndex(n,r,g);var _=[];for(u=0;u<g.length-1;u++)_.push(o.readASCII(n,r+g[u],g[u+1]-g[u]));if(r+=g[g.length-1],e.CFF.readSubrs(n,r,d),d.CharStrings){r=d.CharStrings,g=[],r=e.CFF.readIndex(n,r,g);var p=[];for(u=0;u<g.length-1;u++)p.push(o.readBytes(n,r+g[u],g[u+1]-g[u]));d.CharStrings=p}if(d.ROS){r=d.FDArray;var m=[];for(r=e.CFF.readIndex(n,r,m),d.FDArray=[],u=0;u<m.length-1;u++){var y=e.CFF.readDict(n,r+m[u],r+m[u+1]);e.CFF._readFDict(n,y,_),d.FDArray.push(y)}r+=m[m.length-1],r=d.FDSelect,d.FDSelect=[];var S=n[r];if(r++,S!=3)throw S;var v=o.readUshort(n,r);for(r+=2,u=0;u<v+1;u++)d.FDSelect.push(o.readUshort(n,r),n[r+2]),r+=3}return d.Encoding&&(d.Encoding=e.CFF.readEncoding(n,d.Encoding,d.CharStrings.length)),d.charset&&(d.charset=e.CFF.readCharset(n,d.charset,d.CharStrings.length)),e.CFF._readFDict(n,d,_),d},e.CFF._readFDict=function(n,r,a){var o;for(var l in r.Private&&(o=r.Private[1],r.Private=e.CFF.readDict(n,o,o+r.Private[0]),r.Private.Subrs&&e.CFF.readSubrs(n,o+r.Private.Subrs,r.Private)),r)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(r[l]=a[r[l]-426+35])},e.CFF.readSubrs=function(n,r,a){var o=e._bin,l=[];r=e.CFF.readIndex(n,r,l);var c,u=l.length;c=u<1240?107:u<33900?1131:32768,a.Bias=c,a.Subrs=[];for(var h=0;h<l.length-1;h++)a.Subrs.push(o.readBytes(n,r+l[h],l[h+1]-l[h]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(n,r){for(var a=0;a<n.charset.length;a++)if(n.charset[a]==r)return a;return-1},e.CFF.glyphBySE=function(n,r){return r<0||r>255?-1:e.CFF.glyphByUnicode(n,e.CFF.tableSE[r])},e.CFF.readEncoding=function(n,r,a){e._bin;var o=[".notdef"],l=n[r];if(r++,l!=0)throw"error: unknown encoding format: "+l;var c=n[r];r++;for(var u=0;u<c;u++)o.push(n[r+u]);return o},e.CFF.readCharset=function(n,r,a){var o=e._bin,l=[".notdef"],c=n[r];if(r++,c==0)for(var u=0;u<a;u++){var h=o.readUshort(n,r);r+=2,l.push(h)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<a;){h=o.readUshort(n,r),r+=2;var f=0;for(c==1?(f=n[r],r++):(f=o.readUshort(n,r),r+=2),u=0;u<=f;u++)l.push(h),h++}}return l},e.CFF.readIndex=function(n,r,a){var o=e._bin,l=o.readUshort(n,r)+1,c=n[r+=2];if(r++,c==1)for(var u=0;u<l;u++)a.push(n[r+u]);else if(c==2)for(u=0;u<l;u++)a.push(o.readUshort(n,r+2*u));else if(c==3)for(u=0;u<l;u++)a.push(16777215&o.readUint(n,r+3*u-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(r+=l*c)-1},e.CFF.getCharString=function(n,r,a){var o=e._bin,l=n[r],c=n[r+1];n[r+2],n[r+3],n[r+4];var u=1,h=null,f=null;l<=20&&(h=l,u=1),l==12&&(h=100*l+c,u=2),21<=l&&l<=27&&(h=l,u=1),l==28&&(f=o.readShort(n,r+1),u=3),29<=l&&l<=31&&(h=l,u=1),32<=l&&l<=246&&(f=l-139,u=1),247<=l&&l<=250&&(f=256*(l-247)+c+108,u=2),251<=l&&l<=254&&(f=256*-(l-251)-c-108,u=2),l==255&&(f=o.readInt(n,r+1)/65535,u=5),a.val=f??"o"+h,a.size=u},e.CFF.readCharString=function(n,r,a){for(var o=r+a,l=e._bin,c=[];r<o;){var u=n[r],h=n[r+1];n[r+2],n[r+3],n[r+4];var f=1,d=null,g=null;u<=20&&(d=u,f=1),u==12&&(d=100*u+h,f=2),u!=19&&u!=20||(d=u,f=2),21<=u&&u<=27&&(d=u,f=1),u==28&&(g=l.readShort(n,r+1),f=3),29<=u&&u<=31&&(d=u,f=1),32<=u&&u<=246&&(g=u-139,f=1),247<=u&&u<=250&&(g=256*(u-247)+h+108,f=2),251<=u&&u<=254&&(g=256*-(u-251)-h-108,f=2),u==255&&(g=l.readInt(n,r+1)/65535,f=5),c.push(g??"o"+d),r+=f}return c},e.CFF.readDict=function(n,r,a){for(var o=e._bin,l={},c=[];r<a;){var u=n[r],h=n[r+1];n[r+2],n[r+3],n[r+4];var f=1,d=null,g=null;if(u==28&&(g=o.readShort(n,r+1),f=3),u==29&&(g=o.readInt(n,r+1),f=5),32<=u&&u<=246&&(g=u-139,f=1),247<=u&&u<=250&&(g=256*(u-247)+h+108,f=2),251<=u&&u<=254&&(g=256*-(u-251)-h-108,f=2),u==255)throw g=o.readInt(n,r+1)/65535,f=5,"unknown number";if(u==30){var _=[];for(f=1;;){var p=n[r+f];f++;var m=p>>4,y=15&p;if(m!=15&&_.push(m),y!=15&&_.push(y),y==15)break}for(var S="",v=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],b=0;b<_.length;b++)S+=v[_[b]];g=parseFloat(S)}u<=21&&(d=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][u],f=1,u==12&&(d=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][h],f=2)),d!=null?(l[d]=c.length==1?c[0]:c,c=[]):c.push(g),r+=f}return l},e.cmap={},e.cmap.parse=function(n,r,a){n=new Uint8Array(n.buffer,r,a),r=0;var o=e._bin,l={};o.readUshort(n,r),r+=2;var c=o.readUshort(n,r);r+=2;var u=[];l.tables=[];for(var h=0;h<c;h++){var f=o.readUshort(n,r);r+=2;var d=o.readUshort(n,r);r+=2;var g=o.readUint(n,r);r+=4;var _="p"+f+"e"+d,p=u.indexOf(g);if(p==-1){var m;p=l.tables.length,u.push(g);var y=o.readUshort(n,g);y==0?m=e.cmap.parse0(n,g):y==4?m=e.cmap.parse4(n,g):y==6?m=e.cmap.parse6(n,g):y==12?m=e.cmap.parse12(n,g):console.debug("unknown format: "+y,f,d,g),l.tables.push(m)}if(l[_]!=null)throw"multiple tables for one platform+encoding";l[_]=p}return l},e.cmap.parse0=function(n,r){var a=e._bin,o={};o.format=a.readUshort(n,r),r+=2;var l=a.readUshort(n,r);r+=2,a.readUshort(n,r),r+=2,o.map=[];for(var c=0;c<l-6;c++)o.map.push(n[r+c]);return o},e.cmap.parse4=function(n,r){var a=e._bin,o=r,l={};l.format=a.readUshort(n,r),r+=2;var c=a.readUshort(n,r);r+=2,a.readUshort(n,r),r+=2;var u=a.readUshort(n,r);r+=2;var h=u/2;l.searchRange=a.readUshort(n,r),r+=2,l.entrySelector=a.readUshort(n,r),r+=2,l.rangeShift=a.readUshort(n,r),r+=2,l.endCount=a.readUshorts(n,r,h),r+=2*h,r+=2,l.startCount=a.readUshorts(n,r,h),r+=2*h,l.idDelta=[];for(var f=0;f<h;f++)l.idDelta.push(a.readShort(n,r)),r+=2;for(l.idRangeOffset=a.readUshorts(n,r,h),r+=2*h,l.glyphIdArray=[];r<o+c;)l.glyphIdArray.push(a.readUshort(n,r)),r+=2;return l},e.cmap.parse6=function(n,r){var a=e._bin,o={};o.format=a.readUshort(n,r),r+=2,a.readUshort(n,r),r+=2,a.readUshort(n,r),r+=2,o.firstCode=a.readUshort(n,r),r+=2;var l=a.readUshort(n,r);r+=2,o.glyphIdArray=[];for(var c=0;c<l;c++)o.glyphIdArray.push(a.readUshort(n,r)),r+=2;return o},e.cmap.parse12=function(n,r){var a=e._bin,o={};o.format=a.readUshort(n,r),r+=2,r+=2,a.readUint(n,r),r+=4,a.readUint(n,r),r+=4;var l=a.readUint(n,r);r+=4,o.groups=[];for(var c=0;c<l;c++){var u=r+12*c,h=a.readUint(n,u+0),f=a.readUint(n,u+4),d=a.readUint(n,u+8);o.groups.push([h,f,d])}return o},e.glyf={},e.glyf.parse=function(n,r,a,o){for(var l=[],c=0;c<o.maxp.numGlyphs;c++)l.push(null);return l},e.glyf._parseGlyf=function(n,r){var a=e._bin,o=n._data,l=e._tabOffset(o,"glyf",n._offset)+n.loca[r];if(n.loca[r]==n.loca[r+1])return null;var c={};if(c.noc=a.readShort(o,l),l+=2,c.xMin=a.readShort(o,l),l+=2,c.yMin=a.readShort(o,l),l+=2,c.xMax=a.readShort(o,l),l+=2,c.yMax=a.readShort(o,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var u=0;u<c.noc;u++)c.endPts.push(a.readUshort(o,l)),l+=2;var h=a.readUshort(o,l);if(l+=2,o.length-l<h)return null;c.instructions=a.readBytes(o,l,h),l+=h;var f=c.endPts[c.noc-1]+1;for(c.flags=[],u=0;u<f;u++){var d=o[l];if(l++,c.flags.push(d),(8&d)!=0){var g=o[l];l++;for(var _=0;_<g;_++)c.flags.push(d),u++}}for(c.xs=[],u=0;u<f;u++){var p=(2&c.flags[u])!=0,m=(16&c.flags[u])!=0;p?(c.xs.push(m?o[l]:-o[l]),l++):m?c.xs.push(0):(c.xs.push(a.readShort(o,l)),l+=2)}for(c.ys=[],u=0;u<f;u++)p=(4&c.flags[u])!=0,m=(32&c.flags[u])!=0,p?(c.ys.push(m?o[l]:-o[l]),l++):m?c.ys.push(0):(c.ys.push(a.readShort(o,l)),l+=2);var y=0,S=0;for(u=0;u<f;u++)y+=c.xs[u],S+=c.ys[u],c.xs[u]=y,c.ys[u]=S}else{var v;c.parts=[];do{v=a.readUshort(o,l),l+=2;var b={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(b),b.glyphIndex=a.readUshort(o,l),l+=2,1&v){var w=a.readShort(o,l);l+=2;var T=a.readShort(o,l);l+=2}else w=a.readInt8(o,l),l++,T=a.readInt8(o,l),l++;2&v?(b.m.tx=w,b.m.ty=T):(b.p1=w,b.p2=T),8&v?(b.m.a=b.m.d=a.readF2dot14(o,l),l+=2):64&v?(b.m.a=a.readF2dot14(o,l),l+=2,b.m.d=a.readF2dot14(o,l),l+=2):128&v&&(b.m.a=a.readF2dot14(o,l),l+=2,b.m.b=a.readF2dot14(o,l),l+=2,b.m.c=a.readF2dot14(o,l),l+=2,b.m.d=a.readF2dot14(o,l),l+=2)}while(32&v);if(256&v){var A=a.readUshort(o,l);for(l+=2,c.instr=[],u=0;u<A;u++)c.instr.push(o[l]),l++}}return c},e.GDEF={},e.GDEF.parse=function(n,r,a,o){var l=r;r+=4;var c=e._bin.readUshort(n,r);return{glyphClassDef:c===0?null:e._lctf.readClassDef(n,l+c)}},e.GPOS={},e.GPOS.parse=function(n,r,a,o){return e._lctf.parse(n,r,a,o,e.GPOS.subt)},e.GPOS.subt=function(n,r,a,o){var l=e._bin,c=a,u={};if(u.fmt=l.readUshort(n,a),a+=2,r==1||r==2||r==3||r==7||r==8&&u.fmt<=2){var h=l.readUshort(n,a);a+=2,u.coverage=e._lctf.readCoverage(n,h+c)}if(r==1&&u.fmt==1){var f=l.readUshort(n,a);a+=2,f!=0&&(u.pos=e.GPOS.readValueRecord(n,a,f))}else if(r==2&&u.fmt>=1&&u.fmt<=2){f=l.readUshort(n,a),a+=2;var d=l.readUshort(n,a);a+=2;var g=e._lctf.numOfOnes(f),_=e._lctf.numOfOnes(d);if(u.fmt==1){u.pairsets=[];var p=l.readUshort(n,a);a+=2;for(var m=0;m<p;m++){var y=c+l.readUshort(n,a);a+=2;var S=l.readUshort(n,y);y+=2;for(var v=[],b=0;b<S;b++){var w=l.readUshort(n,y);y+=2,f!=0&&(P=e.GPOS.readValueRecord(n,y,f),y+=2*g),d!=0&&(L=e.GPOS.readValueRecord(n,y,d),y+=2*_),v.push({gid2:w,val1:P,val2:L})}u.pairsets.push(v)}}if(u.fmt==2){var T=l.readUshort(n,a);a+=2;var A=l.readUshort(n,a);a+=2;var x=l.readUshort(n,a);a+=2;var M=l.readUshort(n,a);for(a+=2,u.classDef1=e._lctf.readClassDef(n,c+T),u.classDef2=e._lctf.readClassDef(n,c+A),u.matrix=[],m=0;m<x;m++){var D=[];for(b=0;b<M;b++){var P=null,L=null;f!=0&&(P=e.GPOS.readValueRecord(n,a,f),a+=2*g),d!=0&&(L=e.GPOS.readValueRecord(n,a,d),a+=2*_),D.push({val1:P,val2:L})}u.matrix.push(D)}}}else if(r==4&&u.fmt==1)u.markCoverage=e._lctf.readCoverage(n,l.readUshort(n,a)+c),u.baseCoverage=e._lctf.readCoverage(n,l.readUshort(n,a+2)+c),u.markClassCount=l.readUshort(n,a+4),u.markArray=e.GPOS.readMarkArray(n,l.readUshort(n,a+6)+c),u.baseArray=e.GPOS.readBaseArray(n,l.readUshort(n,a+8)+c,u.markClassCount);else if(r==6&&u.fmt==1)u.mark1Coverage=e._lctf.readCoverage(n,l.readUshort(n,a)+c),u.mark2Coverage=e._lctf.readCoverage(n,l.readUshort(n,a+2)+c),u.markClassCount=l.readUshort(n,a+4),u.mark1Array=e.GPOS.readMarkArray(n,l.readUshort(n,a+6)+c),u.mark2Array=e.GPOS.readBaseArray(n,l.readUshort(n,a+8)+c,u.markClassCount);else{if(r==9&&u.fmt==1){var U=l.readUshort(n,a);a+=2;var V=l.readUint(n,a);if(a+=4,o.ltype==9)o.ltype=U;else if(o.ltype!=U)throw"invalid extension substitution";return e.GPOS.subt(n,o.ltype,c+V)}console.debug("unsupported GPOS table LookupType",r,"format",u.fmt)}return u},e.GPOS.readValueRecord=function(n,r,a){var o=e._bin,l=[];return l.push(1&a?o.readShort(n,r):0),r+=1&a?2:0,l.push(2&a?o.readShort(n,r):0),r+=2&a?2:0,l.push(4&a?o.readShort(n,r):0),r+=4&a?2:0,l.push(8&a?o.readShort(n,r):0),r+=8&a?2:0,l},e.GPOS.readBaseArray=function(n,r,a){var o=e._bin,l=[],c=r,u=o.readUshort(n,r);r+=2;for(var h=0;h<u;h++){for(var f=[],d=0;d<a;d++)f.push(e.GPOS.readAnchorRecord(n,c+o.readUshort(n,r))),r+=2;l.push(f)}return l},e.GPOS.readMarkArray=function(n,r){var a=e._bin,o=[],l=r,c=a.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var h=e.GPOS.readAnchorRecord(n,a.readUshort(n,r+2)+l);h.markClass=a.readUshort(n,r),o.push(h),r+=4}return o},e.GPOS.readAnchorRecord=function(n,r){var a=e._bin,o={};return o.fmt=a.readUshort(n,r),o.x=a.readShort(n,r+2),o.y=a.readShort(n,r+4),o},e.GSUB={},e.GSUB.parse=function(n,r,a,o){return e._lctf.parse(n,r,a,o,e.GSUB.subt)},e.GSUB.subt=function(n,r,a,o){var l=e._bin,c=a,u={};if(u.fmt=l.readUshort(n,a),a+=2,r!=1&&r!=2&&r!=4&&r!=5&&r!=6)return null;if(r==1||r==2||r==4||r==5&&u.fmt<=2||r==6&&u.fmt<=2){var h=l.readUshort(n,a);a+=2,u.coverage=e._lctf.readCoverage(n,c+h)}if(r==1&&u.fmt>=1&&u.fmt<=2){if(u.fmt==1)u.delta=l.readShort(n,a),a+=2;else if(u.fmt==2){var f=l.readUshort(n,a);a+=2,u.newg=l.readUshorts(n,a,f),a+=2*u.newg.length}}else if(r==2&&u.fmt==1){f=l.readUshort(n,a),a+=2,u.seqs=[];for(var d=0;d<f;d++){var g=l.readUshort(n,a)+c;a+=2;var _=l.readUshort(n,g);u.seqs.push(l.readUshorts(n,g+2,_))}}else if(r==4)for(u.vals=[],f=l.readUshort(n,a),a+=2,d=0;d<f;d++){var p=l.readUshort(n,a);a+=2,u.vals.push(e.GSUB.readLigatureSet(n,c+p))}else if(r==5&&u.fmt==2){if(u.fmt==2){var m=l.readUshort(n,a);a+=2,u.cDef=e._lctf.readClassDef(n,c+m),u.scset=[];var y=l.readUshort(n,a);for(a+=2,d=0;d<y;d++){var S=l.readUshort(n,a);a+=2,u.scset.push(S==0?null:e.GSUB.readSubClassSet(n,c+S))}}}else if(r==6&&u.fmt==3){if(u.fmt==3){for(d=0;d<3;d++){f=l.readUshort(n,a),a+=2;for(var v=[],b=0;b<f;b++)v.push(e._lctf.readCoverage(n,c+l.readUshort(n,a+2*b)));a+=2*f,d==0&&(u.backCvg=v),d==1&&(u.inptCvg=v),d==2&&(u.ahedCvg=v)}f=l.readUshort(n,a),a+=2,u.lookupRec=e.GSUB.readSubstLookupRecords(n,a,f)}}else{if(r==7&&u.fmt==1){var w=l.readUshort(n,a);a+=2;var T=l.readUint(n,a);if(a+=4,o.ltype==9)o.ltype=w;else if(o.ltype!=w)throw"invalid extension substitution";return e.GSUB.subt(n,o.ltype,c+T)}console.debug("unsupported GSUB table LookupType",r,"format",u.fmt)}return u},e.GSUB.readSubClassSet=function(n,r){var a=e._bin.readUshort,o=r,l=[],c=a(n,r);r+=2;for(var u=0;u<c;u++){var h=a(n,r);r+=2,l.push(e.GSUB.readSubClassRule(n,o+h))}return l},e.GSUB.readSubClassRule=function(n,r){var a=e._bin.readUshort,o={},l=a(n,r),c=a(n,r+=2);r+=2,o.input=[];for(var u=0;u<l-1;u++)o.input.push(a(n,r)),r+=2;return o.substLookupRecords=e.GSUB.readSubstLookupRecords(n,r,c),o},e.GSUB.readSubstLookupRecords=function(n,r,a){for(var o=e._bin.readUshort,l=[],c=0;c<a;c++)l.push(o(n,r),o(n,r+2)),r+=4;return l},e.GSUB.readChainSubClassSet=function(n,r){var a=e._bin,o=r,l=[],c=a.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var h=a.readUshort(n,r);r+=2,l.push(e.GSUB.readChainSubClassRule(n,o+h))}return l},e.GSUB.readChainSubClassRule=function(n,r){for(var a=e._bin,o={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var u=a.readUshort(n,r);r+=2,c==1&&u--,o[l[c]]=a.readUshorts(n,r,u),r+=2*o[l[c]].length}return u=a.readUshort(n,r),r+=2,o.subst=a.readUshorts(n,r,2*u),r+=2*o.subst.length,o},e.GSUB.readLigatureSet=function(n,r){var a=e._bin,o=r,l=[],c=a.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var h=a.readUshort(n,r);r+=2,l.push(e.GSUB.readLigature(n,o+h))}return l},e.GSUB.readLigature=function(n,r){var a=e._bin,o={chain:[]};o.nglyph=a.readUshort(n,r),r+=2;var l=a.readUshort(n,r);r+=2;for(var c=0;c<l-1;c++)o.chain.push(a.readUshort(n,r)),r+=2;return o},e.head={},e.head.parse=function(n,r,a){var o=e._bin,l={};return o.readFixed(n,r),r+=4,l.fontRevision=o.readFixed(n,r),r+=4,o.readUint(n,r),r+=4,o.readUint(n,r),r+=4,l.flags=o.readUshort(n,r),r+=2,l.unitsPerEm=o.readUshort(n,r),r+=2,l.created=o.readUint64(n,r),r+=8,l.modified=o.readUint64(n,r),r+=8,l.xMin=o.readShort(n,r),r+=2,l.yMin=o.readShort(n,r),r+=2,l.xMax=o.readShort(n,r),r+=2,l.yMax=o.readShort(n,r),r+=2,l.macStyle=o.readUshort(n,r),r+=2,l.lowestRecPPEM=o.readUshort(n,r),r+=2,l.fontDirectionHint=o.readShort(n,r),r+=2,l.indexToLocFormat=o.readShort(n,r),r+=2,l.glyphDataFormat=o.readShort(n,r),r+=2,l},e.hhea={},e.hhea.parse=function(n,r,a){var o=e._bin,l={};return o.readFixed(n,r),r+=4,l.ascender=o.readShort(n,r),r+=2,l.descender=o.readShort(n,r),r+=2,l.lineGap=o.readShort(n,r),r+=2,l.advanceWidthMax=o.readUshort(n,r),r+=2,l.minLeftSideBearing=o.readShort(n,r),r+=2,l.minRightSideBearing=o.readShort(n,r),r+=2,l.xMaxExtent=o.readShort(n,r),r+=2,l.caretSlopeRise=o.readShort(n,r),r+=2,l.caretSlopeRun=o.readShort(n,r),r+=2,l.caretOffset=o.readShort(n,r),r+=2,r+=8,l.metricDataFormat=o.readShort(n,r),r+=2,l.numberOfHMetrics=o.readUshort(n,r),r+=2,l},e.hmtx={},e.hmtx.parse=function(n,r,a,o){for(var l=e._bin,c={aWidth:[],lsBearing:[]},u=0,h=0,f=0;f<o.maxp.numGlyphs;f++)f<o.hhea.numberOfHMetrics&&(u=l.readUshort(n,r),r+=2,h=l.readShort(n,r),r+=2),c.aWidth.push(u),c.lsBearing.push(h);return c},e.kern={},e.kern.parse=function(n,r,a,o){var l=e._bin,c=l.readUshort(n,r);if(r+=2,c==1)return e.kern.parseV1(n,r-2,a,o);var u=l.readUshort(n,r);r+=2;for(var h={glyph1:[],rval:[]},f=0;f<u;f++){r+=2,a=l.readUshort(n,r),r+=2;var d=l.readUshort(n,r);r+=2;var g=d>>>8;if((g&=15)!=0)throw"unknown kern table format: "+g;r=e.kern.readFormat0(n,r,h)}return h},e.kern.parseV1=function(n,r,a,o){var l=e._bin;l.readFixed(n,r),r+=4;var c=l.readUint(n,r);r+=4;for(var u={glyph1:[],rval:[]},h=0;h<c;h++){l.readUint(n,r),r+=4;var f=l.readUshort(n,r);r+=2,l.readUshort(n,r),r+=2;var d=f>>>8;if((d&=15)!=0)throw"unknown kern table format: "+d;r=e.kern.readFormat0(n,r,u)}return u},e.kern.readFormat0=function(n,r,a){var o=e._bin,l=-1,c=o.readUshort(n,r);r+=2,o.readUshort(n,r),r+=2,o.readUshort(n,r),r+=2,o.readUshort(n,r),r+=2;for(var u=0;u<c;u++){var h=o.readUshort(n,r);r+=2;var f=o.readUshort(n,r);r+=2;var d=o.readShort(n,r);r+=2,h!=l&&(a.glyph1.push(h),a.rval.push({glyph2:[],vals:[]}));var g=a.rval[a.rval.length-1];g.glyph2.push(f),g.vals.push(d),l=h}return r},e.loca={},e.loca.parse=function(n,r,a,o){var l=e._bin,c=[],u=o.head.indexToLocFormat,h=o.maxp.numGlyphs+1;if(u==0)for(var f=0;f<h;f++)c.push(l.readUshort(n,r+(f<<1))<<1);if(u==1)for(f=0;f<h;f++)c.push(l.readUint(n,r+(f<<2)));return c},e.maxp={},e.maxp.parse=function(n,r,a){var o=e._bin,l={},c=o.readUint(n,r);return r+=4,l.numGlyphs=o.readUshort(n,r),r+=2,c==65536&&(l.maxPoints=o.readUshort(n,r),r+=2,l.maxContours=o.readUshort(n,r),r+=2,l.maxCompositePoints=o.readUshort(n,r),r+=2,l.maxCompositeContours=o.readUshort(n,r),r+=2,l.maxZones=o.readUshort(n,r),r+=2,l.maxTwilightPoints=o.readUshort(n,r),r+=2,l.maxStorage=o.readUshort(n,r),r+=2,l.maxFunctionDefs=o.readUshort(n,r),r+=2,l.maxInstructionDefs=o.readUshort(n,r),r+=2,l.maxStackElements=o.readUshort(n,r),r+=2,l.maxSizeOfInstructions=o.readUshort(n,r),r+=2,l.maxComponentElements=o.readUshort(n,r),r+=2,l.maxComponentDepth=o.readUshort(n,r),r+=2),l},e.name={},e.name.parse=function(n,r,a){var o=e._bin,l={};o.readUshort(n,r),r+=2;var c=o.readUshort(n,r);r+=2,o.readUshort(n,r);for(var u,h=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],f=r+=2,d=0;d<c;d++){var g=o.readUshort(n,r);r+=2;var _=o.readUshort(n,r);r+=2;var p=o.readUshort(n,r);r+=2;var m=o.readUshort(n,r);r+=2;var y=o.readUshort(n,r);r+=2;var S=o.readUshort(n,r);r+=2;var v,b=h[m],w=f+12*c+S;if(g==0)v=o.readUnicode(n,w,y/2);else if(g==3&&_==0)v=o.readUnicode(n,w,y/2);else if(_==0)v=o.readASCII(n,w,y);else if(_==1)v=o.readUnicode(n,w,y/2);else if(_==3)v=o.readUnicode(n,w,y/2);else{if(g!=1)throw"unknown encoding "+_+", platformID: "+g;v=o.readASCII(n,w,y),console.debug("reading unknown MAC encoding "+_+" as ASCII")}var T="p"+g+","+p.toString(16);l[T]==null&&(l[T]={}),l[T][b!==void 0?b:m]=v,l[T]._lang=p}for(var A in l)if(l[A].postScriptName!=null&&l[A]._lang==1033)return l[A];for(var A in l)if(l[A].postScriptName!=null&&l[A]._lang==0)return l[A];for(var A in l)if(l[A].postScriptName!=null&&l[A]._lang==3084)return l[A];for(var A in l)if(l[A].postScriptName!=null)return l[A];for(var A in l){u=A;break}return console.debug("returning name table with languageID "+l[u]._lang),l[u]},e["OS/2"]={},e["OS/2"].parse=function(n,r,a){var o=e._bin.readUshort(n,r);r+=2;var l={};if(o==0)e["OS/2"].version0(n,r,l);else if(o==1)e["OS/2"].version1(n,r,l);else if(o==2||o==3||o==4)e["OS/2"].version2(n,r,l);else{if(o!=5)throw"unknown OS/2 table version: "+o;e["OS/2"].version5(n,r,l)}return l},e["OS/2"].version0=function(n,r,a){var o=e._bin;return a.xAvgCharWidth=o.readShort(n,r),r+=2,a.usWeightClass=o.readUshort(n,r),r+=2,a.usWidthClass=o.readUshort(n,r),r+=2,a.fsType=o.readUshort(n,r),r+=2,a.ySubscriptXSize=o.readShort(n,r),r+=2,a.ySubscriptYSize=o.readShort(n,r),r+=2,a.ySubscriptXOffset=o.readShort(n,r),r+=2,a.ySubscriptYOffset=o.readShort(n,r),r+=2,a.ySuperscriptXSize=o.readShort(n,r),r+=2,a.ySuperscriptYSize=o.readShort(n,r),r+=2,a.ySuperscriptXOffset=o.readShort(n,r),r+=2,a.ySuperscriptYOffset=o.readShort(n,r),r+=2,a.yStrikeoutSize=o.readShort(n,r),r+=2,a.yStrikeoutPosition=o.readShort(n,r),r+=2,a.sFamilyClass=o.readShort(n,r),r+=2,a.panose=o.readBytes(n,r,10),r+=10,a.ulUnicodeRange1=o.readUint(n,r),r+=4,a.ulUnicodeRange2=o.readUint(n,r),r+=4,a.ulUnicodeRange3=o.readUint(n,r),r+=4,a.ulUnicodeRange4=o.readUint(n,r),r+=4,a.achVendID=[o.readInt8(n,r),o.readInt8(n,r+1),o.readInt8(n,r+2),o.readInt8(n,r+3)],r+=4,a.fsSelection=o.readUshort(n,r),r+=2,a.usFirstCharIndex=o.readUshort(n,r),r+=2,a.usLastCharIndex=o.readUshort(n,r),r+=2,a.sTypoAscender=o.readShort(n,r),r+=2,a.sTypoDescender=o.readShort(n,r),r+=2,a.sTypoLineGap=o.readShort(n,r),r+=2,a.usWinAscent=o.readUshort(n,r),r+=2,a.usWinDescent=o.readUshort(n,r),r+=2},e["OS/2"].version1=function(n,r,a){var o=e._bin;return r=e["OS/2"].version0(n,r,a),a.ulCodePageRange1=o.readUint(n,r),r+=4,a.ulCodePageRange2=o.readUint(n,r),r+=4},e["OS/2"].version2=function(n,r,a){var o=e._bin;return r=e["OS/2"].version1(n,r,a),a.sxHeight=o.readShort(n,r),r+=2,a.sCapHeight=o.readShort(n,r),r+=2,a.usDefault=o.readUshort(n,r),r+=2,a.usBreak=o.readUshort(n,r),r+=2,a.usMaxContext=o.readUshort(n,r),r+=2},e["OS/2"].version5=function(n,r,a){var o=e._bin;return r=e["OS/2"].version2(n,r,a),a.usLowerOpticalPointSize=o.readUshort(n,r),r+=2,a.usUpperOpticalPointSize=o.readUshort(n,r),r+=2},e.post={},e.post.parse=function(n,r,a){var o=e._bin,l={};return l.version=o.readFixed(n,r),r+=4,l.italicAngle=o.readFixed(n,r),r+=4,l.underlinePosition=o.readShort(n,r),r+=2,l.underlineThickness=o.readShort(n,r),r+=2,l},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(n,r){var a=n.cmap,o=-1;if(a.p0e4!=null?o=a.p0e4:a.p3e1!=null?o=a.p3e1:a.p1e0!=null?o=a.p1e0:a.p0e3!=null&&(o=a.p0e3),o==-1)throw"no familiar platform and encoding!";var l=a.tables[o];if(l.format==0)return r>=l.map.length?0:l.map[r];if(l.format==4){for(var c=-1,u=0;u<l.endCount.length;u++)if(r<=l.endCount[u]){c=u;break}return c==-1||l.startCount[c]>r?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[r-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:r+l.idDelta[c])}if(l.format==12){if(r>l.groups[l.groups.length-1][1])return 0;for(u=0;u<l.groups.length;u++){var h=l.groups[u];if(h[0]<=r&&r<=h[1])return h[2]+(r-h[0])}return 0}throw"unknown cmap table format "+l.format},e.U.glyphToPath=function(n,r){var a={cmds:[],crds:[]};if(n.SVG&&n.SVG.entries[r]){var o=n.SVG.entries[r];return o==null?a:(typeof o=="string"&&(o=e.SVG.toPath(o),n.SVG.entries[r]=o),o)}if(n.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:n.CFF.Private?n.CFF.Private.defaultWidthX:0,open:!1},c=n.CFF,u=n.CFF.Private;if(c.ROS){for(var h=0;c.FDSelect[h+2]<=r;)h+=2;u=c.FDArray[c.FDSelect[h+1]].Private}e.U._drawCFF(n.CFF.CharStrings[r],l,c,u,a)}else n.glyf&&e.U._drawGlyf(r,n,a);return a},e.U._drawGlyf=function(n,r,a){var o=r.glyf[n];o==null&&(o=r.glyf[n]=e.glyf._parseGlyf(r,n)),o!=null&&(o.noc>-1?e.U._simpleGlyph(o,a):e.U._compoGlyph(o,r,a))},e.U._simpleGlyph=function(n,r){for(var a=0;a<n.noc;a++){for(var o=a==0?0:n.endPts[a-1]+1,l=n.endPts[a],c=o;c<=l;c++){var u=c==o?l:c-1,h=c==l?o:c+1,f=1&n.flags[c],d=1&n.flags[u],g=1&n.flags[h],_=n.xs[c],p=n.ys[c];if(c==o)if(f){if(!d){e.U.P.moveTo(r,_,p);continue}e.U.P.moveTo(r,n.xs[u],n.ys[u])}else d?e.U.P.moveTo(r,n.xs[u],n.ys[u]):e.U.P.moveTo(r,(n.xs[u]+_)/2,(n.ys[u]+p)/2);f?d&&e.U.P.lineTo(r,_,p):g?e.U.P.qcurveTo(r,_,p,n.xs[h],n.ys[h]):e.U.P.qcurveTo(r,_,p,(_+n.xs[h])/2,(p+n.ys[h])/2)}e.U.P.closePath(r)}},e.U._compoGlyph=function(n,r,a){for(var o=0;o<n.parts.length;o++){var l={cmds:[],crds:[]},c=n.parts[o];e.U._drawGlyf(c.glyphIndex,r,l);for(var u=c.m,h=0;h<l.crds.length;h+=2){var f=l.crds[h],d=l.crds[h+1];a.crds.push(f*u.a+d*u.b+u.tx),a.crds.push(f*u.c+d*u.d+u.ty)}for(h=0;h<l.cmds.length;h++)a.cmds.push(l.cmds[h])}},e.U._getGlyphClass=function(n,r){var a=e._lctf.getInterval(r,n);return a==-1?0:r[a+2]},e.U._applySubs=function(n,r,a,o){for(var l=n.length-r-1,c=0;c<a.tabs.length;c++)if(a.tabs[c]!=null){var u,h=a.tabs[c];if(!h.coverage||(u=e._lctf.coverageIndex(h.coverage,n[r]))!=-1){if(a.ltype==1)n[r],h.fmt==1?n[r]=n[r]+h.delta:n[r]=h.newg[u];else if(a.ltype==4)for(var f=h.vals[u],d=0;d<f.length;d++){var g=f[d],_=g.chain.length;if(!(_>l)){for(var p=!0,m=0,y=0;y<_;y++){for(;n[r+m+(1+y)]==-1;)m++;g.chain[y]!=n[r+m+(1+y)]&&(p=!1)}if(p){for(n[r]=g.nglyph,y=0;y<_+m;y++)n[r+y+1]=-1;break}}}else if(a.ltype==5&&h.fmt==2)for(var S=e._lctf.getInterval(h.cDef,n[r]),v=h.cDef[S+2],b=h.scset[v],w=0;w<b.length;w++){var T=b[w],A=T.input;if(!(A.length>l)){for(p=!0,y=0;y<A.length;y++){var x=e._lctf.getInterval(h.cDef,n[r+1+y]);if(S==-1&&h.cDef[x+2]!=A[y]){p=!1;break}}if(p){var M=T.substLookupRecords;for(d=0;d<M.length;d+=2)M[d],M[d+1]}}}else if(a.ltype==6&&h.fmt==3){if(!e.U._glsCovered(n,h.backCvg,r-h.backCvg.length)||!e.U._glsCovered(n,h.inptCvg,r)||!e.U._glsCovered(n,h.ahedCvg,r+h.inptCvg.length))continue;var D=h.lookupRec;for(w=0;w<D.length;w+=2){S=D[w];var P=o[D[w+1]];e.U._applySubs(n,r+S,P,o)}}}}},e.U._glsCovered=function(n,r,a){for(var o=0;o<r.length;o++)if(e._lctf.coverageIndex(r[o],n[a+o])==-1)return!1;return!0},e.U.glyphsToPath=function(n,r,a){for(var o={cmds:[],crds:[]},l=0,c=0;c<r.length;c++){var u=r[c];if(u!=-1){for(var h=c<r.length-1&&r[c+1]!=-1?r[c+1]:0,f=e.U.glyphToPath(n,u),d=0;d<f.crds.length;d+=2)o.crds.push(f.crds[d]+l),o.crds.push(f.crds[d+1]);for(a&&o.cmds.push(a),d=0;d<f.cmds.length;d++)o.cmds.push(f.cmds[d]);a&&o.cmds.push("X"),l+=n.hmtx.aWidth[u],c<r.length-1&&(l+=e.U.getPairAdjustment(n,u,h))}}return o},e.U.P={},e.U.P.moveTo=function(n,r,a){n.cmds.push("M"),n.crds.push(r,a)},e.U.P.lineTo=function(n,r,a){n.cmds.push("L"),n.crds.push(r,a)},e.U.P.curveTo=function(n,r,a,o,l,c,u){n.cmds.push("C"),n.crds.push(r,a,o,l,c,u)},e.U.P.qcurveTo=function(n,r,a,o,l){n.cmds.push("Q"),n.crds.push(r,a,o,l)},e.U.P.closePath=function(n){n.cmds.push("Z")},e.U._drawCFF=function(n,r,a,o,l){for(var c=r.stack,u=r.nStems,h=r.haveWidth,f=r.width,d=r.open,g=0,_=r.x,p=r.y,m=0,y=0,S=0,v=0,b=0,w=0,T=0,A=0,x=0,M=0,D={val:0,size:0};g<n.length;){e.CFF.getCharString(n,g,D);var P=D.val;if(g+=D.size,P=="o1"||P=="o18")c.length%2!=0&&!h&&(f=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,h=!0;else if(P=="o3"||P=="o23")c.length%2!=0&&!h&&(f=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,h=!0;else if(P=="o4")c.length>1&&!h&&(f=c.shift()+o.nominalWidthX,h=!0),d&&e.U.P.closePath(l),p+=c.pop(),e.U.P.moveTo(l,_,p),d=!0;else if(P=="o5")for(;c.length>0;)_+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,_,p);else if(P=="o6"||P=="o7")for(var L=c.length,U=P=="o6",V=0;V<L;V++){var O=c.shift();U?_+=O:p+=O,U=!U,e.U.P.lineTo(l,_,p)}else if(P=="o8"||P=="o24"){L=c.length;for(var K=0;K+6<=L;)m=_+c.shift(),y=p+c.shift(),S=m+c.shift(),v=y+c.shift(),_=S+c.shift(),p=v+c.shift(),e.U.P.curveTo(l,m,y,S,v,_,p),K+=6;P=="o24"&&(_+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,_,p))}else{if(P=="o11")break;if(P=="o1234"||P=="o1235"||P=="o1236"||P=="o1237")P=="o1234"&&(y=p,S=(m=_+c.shift())+c.shift(),M=v=y+c.shift(),w=v,A=p,_=(T=(b=(x=S+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(l,m,y,S,v,x,M),e.U.P.curveTo(l,b,w,T,A,_,p)),P=="o1235"&&(m=_+c.shift(),y=p+c.shift(),S=m+c.shift(),v=y+c.shift(),x=S+c.shift(),M=v+c.shift(),b=x+c.shift(),w=M+c.shift(),T=b+c.shift(),A=w+c.shift(),_=T+c.shift(),p=A+c.shift(),c.shift(),e.U.P.curveTo(l,m,y,S,v,x,M),e.U.P.curveTo(l,b,w,T,A,_,p)),P=="o1236"&&(m=_+c.shift(),y=p+c.shift(),S=m+c.shift(),M=v=y+c.shift(),w=v,T=(b=(x=S+c.shift())+c.shift())+c.shift(),A=w+c.shift(),_=T+c.shift(),e.U.P.curveTo(l,m,y,S,v,x,M),e.U.P.curveTo(l,b,w,T,A,_,p)),P=="o1237"&&(m=_+c.shift(),y=p+c.shift(),S=m+c.shift(),v=y+c.shift(),x=S+c.shift(),M=v+c.shift(),b=x+c.shift(),w=M+c.shift(),T=b+c.shift(),A=w+c.shift(),Math.abs(T-_)>Math.abs(A-p)?_=T+c.shift():p=A+c.shift(),e.U.P.curveTo(l,m,y,S,v,x,M),e.U.P.curveTo(l,b,w,T,A,_,p));else if(P=="o14"){if(c.length>0&&!h&&(f=c.shift()+a.nominalWidthX,h=!0),c.length==4){var W=c.shift(),J=c.shift(),j=c.shift(),N=c.shift(),X=e.CFF.glyphBySE(a,j),ee=e.CFF.glyphBySE(a,N);e.U._drawCFF(a.CharStrings[X],r,a,o,l),r.x=W,r.y=J,e.U._drawCFF(a.CharStrings[ee],r,a,o,l)}d&&(e.U.P.closePath(l),d=!1)}else if(P=="o19"||P=="o20")c.length%2!=0&&!h&&(f=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,h=!0,g+=u+7>>3;else if(P=="o21")c.length>2&&!h&&(f=c.shift()+o.nominalWidthX,h=!0),p+=c.pop(),_+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,_,p),d=!0;else if(P=="o22")c.length>1&&!h&&(f=c.shift()+o.nominalWidthX,h=!0),_+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,_,p),d=!0;else if(P=="o25"){for(;c.length>6;)_+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,_,p);m=_+c.shift(),y=p+c.shift(),S=m+c.shift(),v=y+c.shift(),_=S+c.shift(),p=v+c.shift(),e.U.P.curveTo(l,m,y,S,v,_,p)}else if(P=="o26")for(c.length%2&&(_+=c.shift());c.length>0;)m=_,y=p+c.shift(),_=S=m+c.shift(),p=(v=y+c.shift())+c.shift(),e.U.P.curveTo(l,m,y,S,v,_,p);else if(P=="o27")for(c.length%2&&(p+=c.shift());c.length>0;)y=p,S=(m=_+c.shift())+c.shift(),v=y+c.shift(),_=S+c.shift(),p=v,e.U.P.curveTo(l,m,y,S,v,_,p);else if(P=="o10"||P=="o29"){var F=P=="o10"?o:a;if(c.length==0)console.debug("error: empty stack");else{var B=c.pop(),ie=F.Subrs[B+F.Bias];r.x=_,r.y=p,r.nStems=u,r.haveWidth=h,r.width=f,r.open=d,e.U._drawCFF(ie,r,a,o,l),_=r.x,p=r.y,u=r.nStems,h=r.haveWidth,f=r.width,d=r.open}}else if(P=="o30"||P=="o31"){var Y=c.length,ne=(K=0,P=="o31");for(K+=Y-(L=-3&Y);K<L;)ne?(y=p,S=(m=_+c.shift())+c.shift(),p=(v=y+c.shift())+c.shift(),L-K==5?(_=S+c.shift(),K++):_=S,ne=!1):(m=_,y=p+c.shift(),S=m+c.shift(),v=y+c.shift(),_=S+c.shift(),L-K==5?(p=v+c.shift(),K++):p=v,ne=!0),e.U.P.curveTo(l,m,y,S,v,_,p),K+=4}else{if((P+"").charAt(0)=="o")throw console.debug("Unknown operation: "+P,n),P;c.push(P)}}}r.x=_,r.y=p,r.nStems=u,r.haveWidth=h,r.width=f,r.open=d};var t=e,i={Typr:t};return s.Typr=t,s.default=i,Object.defineProperty(s,"__esModule",{value:!0}),s}({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function E1(){return function(s){var e=Uint8Array,t=Uint16Array,i=Uint32Array,n=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),r=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),o=function(P,L){for(var U=new t(31),V=0;V<31;++V)U[V]=L+=1<<P[V-1];var O=new i(U[30]);for(V=1;V<30;++V)for(var K=U[V];K<U[V+1];++K)O[K]=K-U[V]<<5|V;return[U,O]},l=o(n,2),c=l[0],u=l[1];c[28]=258,u[258]=28;for(var h=o(r,0)[0],f=new t(32768),d=0;d<32768;++d){var g=(43690&d)>>>1|(21845&d)<<1;g=(61680&(g=(52428&g)>>>2|(13107&g)<<2))>>>4|(3855&g)<<4,f[d]=((65280&g)>>>8|(255&g)<<8)>>>1}var _=function(P,L,U){for(var V=P.length,O=0,K=new t(L);O<V;++O)++K[P[O]-1];var W,J=new t(L);for(O=0;O<L;++O)J[O]=J[O-1]+K[O-1]<<1;{W=new t(1<<L);var j=15-L;for(O=0;O<V;++O)if(P[O])for(var N=O<<4|P[O],X=L-P[O],ee=J[P[O]-1]++<<X,F=ee|(1<<X)-1;ee<=F;++ee)W[f[ee]>>>j]=N}return W},p=new e(288);for(d=0;d<144;++d)p[d]=8;for(d=144;d<256;++d)p[d]=9;for(d=256;d<280;++d)p[d]=7;for(d=280;d<288;++d)p[d]=8;var m=new e(32);for(d=0;d<32;++d)m[d]=5;var y=_(p,9),S=_(m,5),v=function(P){for(var L=P[0],U=1;U<P.length;++U)P[U]>L&&(L=P[U]);return L},b=function(P,L,U){var V=L/8|0;return(P[V]|P[V+1]<<8)>>(7&L)&U},w=function(P,L){var U=L/8|0;return(P[U]|P[U+1]<<8|P[U+2]<<16)>>(7&L)},T=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],A=function(P,L,U){var V=new Error(L||T[P]);if(V.code=P,Error.captureStackTrace&&Error.captureStackTrace(V,A),!U)throw V;return V},x=function(P,L,U){var V=P.length;if(!V||U&&!U.l&&V<5)return L||new e(0);var O=!L||U,K=!U||U.i;U||(U={}),L||(L=new e(3*V));var W,J=function(_e){var we=L.length;if(_e>we){var ye=new e(Math.max(2*we,_e));ye.set(L),L=ye}},j=U.f||0,N=U.p||0,X=U.b||0,ee=U.l,F=U.d,B=U.m,ie=U.n,Y=8*V;do{if(!ee){U.f=j=b(P,N,1);var ne=b(P,N+1,3);if(N+=3,!ne){var Se=P[(de=((W=N)/8|0)+(7&W&&1)+4)-4]|P[de-3]<<8,ge=de+Se;if(ge>V){K&&A(0);break}O&&J(X+Se),L.set(P.subarray(de,ge),X),U.b=X+=Se,U.p=N=8*ge;continue}if(ne==1)ee=y,F=S,B=9,ie=5;else if(ne==2){var ve=b(P,N,31)+257,fe=b(P,N+10,15)+4,Ue=ve+b(P,N+5,31)+1;N+=14;for(var I=new e(Ue),Be=new e(19),Re=0;Re<fe;++Re)Be[a[Re]]=b(P,N+3*Re,7);N+=3*fe;var Ie=v(Be),le=(1<<Ie)-1,Ee=_(Be,Ie);for(Re=0;Re<Ue;){var de,te=Ee[b(P,N,le)];if(N+=15&te,(de=te>>>4)<16)I[Re++]=de;else{var De=0,C=0;for(de==16?(C=3+b(P,N,3),N+=2,De=I[Re-1]):de==17?(C=3+b(P,N,7),N+=3):de==18&&(C=11+b(P,N,127),N+=7);C--;)I[Re++]=De}}var E=I.subarray(0,ve),z=I.subarray(ve);B=v(E),ie=v(z),ee=_(E,B),F=_(z,ie)}else A(1);if(N>Y){K&&A(0);break}}O&&J(X+131072);for(var ae=(1<<B)-1,$=(1<<ie)-1,Q=N;;Q=N){var xe=(De=ee[w(P,N)&ae])>>>4;if((N+=15&De)>Y){K&&A(0);break}if(De||A(2),xe<256)L[X++]=xe;else{if(xe==256){Q=N,ee=null;break}var me=xe-254;if(xe>264){var Me=n[Re=xe-257];me=b(P,N,(1<<Me)-1)+c[Re],N+=Me}var be=F[w(P,N)&$],oe=be>>>4;if(be||A(3),N+=15&be,z=h[oe],oe>3&&(Me=r[oe],z+=w(P,N)&(1<<Me)-1,N+=Me),N>Y){K&&A(0);break}O&&J(X+131072);for(var pe=X+me;X<pe;X+=4)L[X]=L[X-z],L[X+1]=L[X+1-z],L[X+2]=L[X+2-z],L[X+3]=L[X+3-z];X=pe}}U.l=ee,U.p=Q,U.b=X,ee&&(j=1,U.m=B,U.d=F,U.n=ie)}while(!j);return X==L.length?L:function(_e,we,ye){(ye==null||ye>_e.length)&&(ye=_e.length);var ze=new(_e instanceof t?t:_e instanceof i?i:e)(ye-we);return ze.set(_e.subarray(we,ye)),ze}(L,0,X)},M=new e(0),D=typeof TextDecoder<"u"&&new TextDecoder;try{D.decode(M,{stream:!0})}catch{}return s.convert_streams=function(P){var L=new DataView(P),U=0;function V(){var ve=L.getUint16(U);return U+=2,ve}function O(){var ve=L.getUint32(U);return U+=4,ve}function K(ve){Se.setUint16(ge,ve),ge+=2}function W(ve){Se.setUint32(ge,ve),ge+=4}for(var J={signature:O(),flavor:O(),length:O(),numTables:V(),reserved:V(),totalSfntSize:O(),majorVersion:V(),minorVersion:V(),metaOffset:O(),metaLength:O(),metaOrigLength:O(),privOffset:O(),privLength:O()},j=0;Math.pow(2,j)<=J.numTables;)j++;j--;for(var N=16*Math.pow(2,j),X=16*J.numTables-N,ee=12,F=[],B=0;B<J.numTables;B++)F.push({tag:O(),offset:O(),compLength:O(),origLength:O(),origChecksum:O()}),ee+=16;var ie,Y=new Uint8Array(12+16*F.length+F.reduce(function(ve,fe){return ve+fe.origLength+4},0)),ne=Y.buffer,Se=new DataView(ne),ge=0;return W(J.flavor),K(J.numTables),K(N),K(j),K(X),F.forEach(function(ve){W(ve.tag),W(ve.origChecksum),W(ee),W(ve.origLength),ve.outOffset=ee,(ee+=ve.origLength)%4!=0&&(ee+=4-ee%4)}),F.forEach(function(ve){var fe,Ue=P.slice(ve.offset,ve.offset+ve.compLength);if(ve.compLength!=ve.origLength){var I=new Uint8Array(ve.origLength);fe=new Uint8Array(Ue,2),x(fe,I)}else I=new Uint8Array(Ue);Y.set(I,ve.outOffset);var Be=0;(ee=ve.outOffset+ve.origLength)%4!=0&&(Be=4-ee%4),Y.set(new Uint8Array(Be).buffer,ve.outOffset+ve.origLength),ie=ee+Be}),ne.slice(0,ie)},Object.defineProperty(s,"__esModule",{value:!0}),s}({}).convert_streams}function b1(s,e){const t={M:2,L:2,Q:4,C:6,Z:0},i={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},n=1,r=2,a=4,o=8,l=16,c=32;let u;function h(T){if(!u){const A={R:r,L:n,D:a,C:l,U:c,T:o};u=new Map;for(let x in i){let M=0;i[x].split(",").forEach(D=>{let[P,L]=D.split("+");P=parseInt(P,36),L=L?parseInt(L,36):0,u.set(M+=P,A[x]);for(let U=L;U--;)u.set(++M,A[x])})}}return u.get(T)||c}const f=1,d=2,g=3,_=4,p=[null,"isol","init","fina","medi"];function m(T){const A=new Uint8Array(T.length);let x=c,M=f,D=-1;for(let P=0;P<T.length;P++){const L=T.codePointAt(P);let U=h(L)|0,V=f;U&o||(x&(n|a|l)?U&(r|a|l)?(V=g,(M===f||M===g)&&A[D]++):U&(n|c)&&(M===d||M===_)&&A[D]--:x&(r|c)&&(M===d||M===_)&&A[D]--,M=A[P]=V,x=U,D=P,L>65535&&P++)}return A}function y(T,A){const x=[];for(let D=0;D<A.length;D++){const P=A.codePointAt(D);P>65535&&D++,x.push(s.U.codeToGlyph(T,P))}const M=T.GSUB;if(M){const{lookupList:D,featureList:P}=M;let L;const U=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,V=[];P.forEach(O=>{if(U.test(O.tag))for(let K=0;K<O.tab.length;K++){if(V[O.tab[K]])continue;V[O.tab[K]]=!0;const W=D[O.tab[K]],J=/^(isol|init|fina|medi)$/.test(O.tag);J&&!L&&(L=m(A));for(let j=0;j<x.length;j++)(!L||!J||p[L[j]]===O.tag)&&s.U._applySubs(x,j,W,D)}})}return x}function S(T,A){const x=new Int16Array(A.length*3);let M=0;for(;M<A.length;M++){const U=A[M];if(U===-1)continue;x[M*3+2]=T.hmtx.aWidth[U];const V=T.GPOS;if(V){const O=V.lookupList;for(let K=0;K<O.length;K++){const W=O[K];for(let J=0;J<W.tabs.length;J++){const j=W.tabs[J];if(W.ltype===1){if(s._lctf.coverageIndex(j.coverage,U)!==-1&&j.pos){L(j.pos,M);break}}else if(W.ltype===2){let N=null,X=D();if(X!==-1){const ee=s._lctf.coverageIndex(j.coverage,A[X]);if(ee!==-1){if(j.fmt===1){const F=j.pairsets[ee];for(let B=0;B<F.length;B++)F[B].gid2===U&&(N=F[B])}else if(j.fmt===2){const F=s.U._getGlyphClass(A[X],j.classDef1),B=s.U._getGlyphClass(U,j.classDef2);N=j.matrix[F][B]}if(N){N.val1&&L(N.val1,X),N.val2&&L(N.val2,M);break}}}}else if(W.ltype===4){const N=s._lctf.coverageIndex(j.markCoverage,U);if(N!==-1){const X=D(P),ee=X===-1?-1:s._lctf.coverageIndex(j.baseCoverage,A[X]);if(ee!==-1){const F=j.markArray[N],B=j.baseArray[ee][F.markClass];x[M*3]=B.x-F.x+x[X*3]-x[X*3+2],x[M*3+1]=B.y-F.y+x[X*3+1];break}}}else if(W.ltype===6){const N=s._lctf.coverageIndex(j.mark1Coverage,U);if(N!==-1){const X=D();if(X!==-1){const ee=A[X];if(v(T,ee)===3){const F=s._lctf.coverageIndex(j.mark2Coverage,ee);if(F!==-1){const B=j.mark1Array[N],ie=j.mark2Array[F][B.markClass];x[M*3]=ie.x-B.x+x[X*3]-x[X*3+2],x[M*3+1]=ie.y-B.y+x[X*3+1];break}}}}}}}}else if(T.kern&&!T.cff){const O=D();if(O!==-1){const K=T.kern.glyph1.indexOf(A[O]);if(K!==-1){const W=T.kern.rval[K].glyph2.indexOf(U);W!==-1&&(x[O*3+2]+=T.kern.rval[K].vals[W])}}}}return x;function D(U){for(let V=M-1;V>=0;V--)if(A[V]!==-1&&(!U||U(A[V])))return V;return-1}function P(U){return v(T,U)===1}function L(U,V){for(let O=0;O<3;O++)x[V*3+O]+=U[O]||0}}function v(T,A){const x=T.GDEF&&T.GDEF.glyphClassDef;return x?s.U._getGlyphClass(A,x):0}function b(...T){for(let A=0;A<T.length;A++)if(typeof T[A]=="number")return T[A]}function w(T){const A=Object.create(null),x=T["OS/2"],M=T.hhea,D=T.head.unitsPerEm,P=b(x&&x.sTypoAscender,M&&M.ascender,D),L={unitsPerEm:D,ascender:P,descender:b(x&&x.sTypoDescender,M&&M.descender,0),capHeight:b(x&&x.sCapHeight,P),xHeight:b(x&&x.sxHeight,P),lineGap:b(x&&x.sTypoLineGap,M&&M.lineGap),supportsCodePoint(U){return s.U.codeToGlyph(T,U)>0},forEachGlyph(U,V,O,K){let W=0;const J=1/L.unitsPerEm*V,j=y(T,U);let N=0;const X=S(T,j);return j.forEach((ee,F)=>{if(ee!==-1){let B=A[ee];if(!B){const{cmds:ie,crds:Y}=s.U.glyphToPath(T,ee);let ne="",Se=0;for(let I=0,Be=ie.length;I<Be;I++){const Re=t[ie[I]];ne+=ie[I];for(let Ie=1;Ie<=Re;Ie++)ne+=(Ie>1?",":"")+Y[Se++]}let ge,ve,fe,Ue;if(Y.length){ge=ve=1/0,fe=Ue=-1/0;for(let I=0,Be=Y.length;I<Be;I+=2){let Re=Y[I],Ie=Y[I+1];Re<ge&&(ge=Re),Ie<ve&&(ve=Ie),Re>fe&&(fe=Re),Ie>Ue&&(Ue=Ie)}}else ge=fe=ve=Ue=0;B=A[ee]={index:ee,advanceWidth:T.hmtx.aWidth[ee],xMin:ge,yMin:ve,xMax:fe,yMax:Ue,path:ne}}K.call(null,B,W+X[F*3]*J,X[F*3+1]*J,N),W+=X[F*3+2]*J,O&&(W+=O*V)}N+=U.codePointAt(N)>65535?2:1}),W}};return L}return function(A){const x=new Uint8Array(A,0,4),M=s._bin.readASCII(x,0,4);if(M==="wOFF")A=e(A);else if(M==="wOF2")throw new Error("woff2 fonts not supported");return w(s.parse(A)[0])}}const w1=Ls({name:"Typr Font Parser",dependencies:[T1,E1,b1],init(s,e,t){const i=s(),n=e();return t(i,n)}});/*!
Custom bundle of @unicode-font-resolver/client v1.0.2 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/function A1(){return function(s){var e=function(){this.buckets=new Map};e.prototype.add=function(S){var v=S>>5;this.buckets.set(v,(this.buckets.get(v)||0)|1<<(31&S))},e.prototype.has=function(S){var v=this.buckets.get(S>>5);return v!==void 0&&(v&1<<(31&S))!=0},e.prototype.serialize=function(){var S=[];return this.buckets.forEach(function(v,b){S.push((+b).toString(36)+":"+v.toString(36))}),S.join(",")},e.prototype.deserialize=function(S){var v=this;this.buckets.clear(),S.split(",").forEach(function(b){var w=b.split(":");v.buckets.set(parseInt(w[0],36),parseInt(w[1],36))})};var t=Math.pow(2,8),i=t-1,n=~i;function r(S){var v=function(w){return w&n}(S).toString(16),b=function(w){return(w&n)+t-1}(S).toString(16);return"codepoint-index/plane"+(S>>16)+"/"+v+"-"+b+".json"}function a(S,v){var b=S&i,w=v.codePointAt(b/6|0);return((w=(w||48)-48)&1<<b%6)!=0}function o(S,v){var b;(b=S,b.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map(function(w){return w.split("-").map(function(T){return parseInt(T.trim(),16)})})).forEach(function(w){var T=w[0],A=w[1];A===void 0&&(A=T),v(T,A)})}function l(S,v){o(S,function(b,w){for(var T=b;T<=w;T++)v(T)})}var c={},u={},h=new WeakMap,f="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function d(S){var v=h.get(S);return v||(v=new e,l(S.ranges,function(b){return v.add(b)}),h.set(S,v)),v}var g,_=new Map;function p(S,v,b){return S[v]?v:S[b]?b:function(w){for(var T in w)return T}(S)}function m(S,v){var b=v;if(!S.includes(b)){b=1/0;for(var w=0;w<S.length;w++)Math.abs(S[w]-v)<Math.abs(b-v)&&(b=S[w])}return b}function y(S){return g||(g=new Set,l("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",function(v){g.add(v)})),g.has(S)}return s.CodePointSet=e,s.clearCache=function(){c={},u={}},s.getFontsForString=function(S,v){v===void 0&&(v={});var b,w=v.lang;w===void 0&&(w=new RegExp("\\p{Script=Hangul}","u").test(b=S)?"ko":new RegExp("\\p{Script=Hiragana}|\\p{Script=Katakana}","u").test(b)?"ja":"en");var T=v.category;T===void 0&&(T="sans-serif");var A=v.style;A===void 0&&(A="normal");var x=v.weight;x===void 0&&(x=400);var M=(v.dataUrl||f).replace(/\/$/g,""),D=new Map,P=new Uint8Array(S.length),L={},U={},V=new Array(S.length),O=new Map,K=!1;function W(N){var X=_.get(N);return X||(X=fetch(M+"/"+N).then(function(ee){if(!ee.ok)throw new Error(ee.statusText);return ee.json().then(function(F){if(!Array.isArray(F)||F[0]!==1)throw new Error("Incorrect schema version; need 1, got "+F[0]);return F[1]})}).catch(function(ee){if(M!==f)return K||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+M+'", trying default CDN. '+ee.message),K=!0),M=f,_.delete(N),W(N);throw ee}),_.set(N,X)),X}for(var J=function(N){var X=S.codePointAt(N),ee=r(X);V[N]=ee,c[ee]||O.has(ee)||O.set(ee,W(ee).then(function(F){c[ee]=F})),X>65535&&(N++,j=N)},j=0;j<S.length;j++)J(j);return Promise.all(O.values()).then(function(){O.clear();for(var N=function(ee){var F=S.codePointAt(ee),B=null,ie=c[V[ee]],Y=void 0;for(var ne in ie){var Se=U[ne];if(Se===void 0&&(Se=U[ne]=new RegExp(ne).test(w||"en")),Se){for(var ge in Y=ne,ie[ne])if(a(F,ie[ne][ge])){B=ge;break}break}}if(!B){e:for(var ve in ie)if(ve!==Y){for(var fe in ie[ve])if(a(F,ie[ve][fe])){B=fe;break e}}}B||(console.debug("No font coverage for U+"+F.toString(16)),B="latin"),V[ee]=B,u[B]||O.has(B)||O.set(B,W("font-meta/"+B+".json").then(function(Ue){u[B]=Ue})),F>65535&&(ee++,X=ee)},X=0;X<S.length;X++)N(X);return Promise.all(O.values())}).then(function(){for(var N,X=null,ee=0;ee<S.length;ee++){var F=S.codePointAt(ee);if(X&&(y(F)||d(X).has(F)))P[ee]=P[ee-1];else{X=u[V[ee]];var B=L[X.id];if(!B){var ie=X.typeforms,Y=p(ie,T,"sans-serif"),ne=p(ie[Y],A,"normal"),Se=m((N=ie[Y])===null||N===void 0?void 0:N[ne],x);B=L[X.id]=M+"/font-files/"+X.id+"/"+Y+"."+ne+"."+Se+".woff"}var ge=D.get(B);ge==null&&(ge=D.size,D.set(B,ge)),P[ee]=ge}F>65535&&(ee++,P[ee]=P[ee-1])}return{fontUrls:Array.from(D.keys()),chars:P}})},Object.defineProperty(s,"__esModule",{value:!0}),s}({})}function R1(s,e){const t=Object.create(null),i=Object.create(null);function n(a,o){const l=c=>{console.error(`Failure loading font ${a}`,c)};try{const c=new XMLHttpRequest;c.open("get",a,!0),c.responseType="arraybuffer",c.onload=function(){if(c.status>=400)l(new Error(c.statusText));else if(c.status>0)try{const u=s(c.response);u.src=a,o(u)}catch(u){l(u)}},c.onerror=l,c.send()}catch(c){l(c)}}function r(a,o){let l=t[a];l?o(l):i[a]?i[a].push(o):(i[a]=[o],n(a,c=>{c.src=a,t[a]=c,i[a].forEach(u=>u(c)),delete i[a]}))}return function(a,o,{lang:l,fonts:c=[],style:u="normal",weight:h="normal",unicodeFontsURL:f}={}){const d=new Uint8Array(a.length),g=[];a.length||y();const _=new Map,p=[];if(u!=="italic"&&(u="normal"),typeof h!="number"&&(h=h==="bold"?700:400),c&&!Array.isArray(c)&&(c=[c]),c=c.slice().filter(v=>!v.lang||v.lang.test(l)).reverse(),c.length){let T=0;(function A(x=0){for(let M=x,D=a.length;M<D;M++){const P=a.codePointAt(M);if(T===1&&g[d[M-1]].supportsCodePoint(P)||M>0&&/\s/.test(a[M]))d[M]=d[M-1],T===2&&(p[p.length-1][1]=M);else for(let L=d[M],U=c.length;L<=U;L++)if(L===U){const V=T===2?p[p.length-1]:p[p.length]=[M,M];V[1]=M,T=2}else{d[M]=L;const{src:V,unicodeRange:O}=c[L];if(!O||S(P,O)){const K=t[V];if(!K){r(V,()=>{A(M)});return}if(K.supportsCodePoint(P)){let W=_.get(K);typeof W!="number"&&(W=g.length,g.push(K),_.set(K,W)),d[M]=W,T=1;break}}}P>65535&&M+1<D&&(d[M+1]=d[M],M++,T===2&&(p[p.length-1][1]=M))}m()})()}else p.push([0,a.length-1]),m();function m(){if(p.length){const v=p.map(b=>a.substring(b[0],b[1]+1)).join(`
`);e.getFontsForString(v,{lang:l||void 0,style:u,weight:h,dataUrl:f}).then(({fontUrls:b,chars:w})=>{const T=g.length;let A=0;p.forEach(M=>{for(let D=0,P=M[1]-M[0];D<=P;D++)d[M[0]+D]=w[A++]+T;A++});let x=0;b.forEach((M,D)=>{r(M,P=>{g[D+T]=P,++x===b.length&&y()})})})}else y()}function y(){o({chars:d,fonts:g})}function S(v,b){for(let w=0;w<b.length;w++){const[T,A=T]=b[w];if(T<=v&&v<=A)return!0}return!1}}}const C1=Ls({name:"FontResolver",dependencies:[R1,w1,A1],init(s,e,t){return s(e,t())}});function P1(s,e){const i=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,n="[^\\S\\u00A0]",r=new RegExp(`${n}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function a({text:g,lang:_,fonts:p,style:m,weight:y,preResolvedFonts:S,unicodeFontsURL:v},b){const w=({chars:T,fonts:A})=>{let x,M;const D=[];for(let P=0;P<T.length;P++)T[P]!==M?(M=T[P],D.push(x={start:P,end:P,fontObj:A[T[P]]})):x.end=P;b(D)};S?w(S):s(g,w,{lang:_,fonts:p,style:m,weight:y,unicodeFontsURL:v})}function o({text:g="",font:_,lang:p,sdfGlyphSize:m=64,fontSize:y=400,fontWeight:S=1,fontStyle:v="normal",letterSpacing:b=0,lineHeight:w="normal",maxWidth:T=1/0,direction:A,textAlign:x="left",textIndent:M=0,whiteSpace:D="normal",overflowWrap:P="normal",anchorX:L=0,anchorY:U=0,metricsOnly:V=!1,unicodeFontsURL:O,preResolvedFonts:K=null,includeCaretPositions:W=!1,chunkedBoundsSize:J=8192,colorRanges:j=null},N){const X=h(),ee={fontLoad:0,typesetting:0};g.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),g=g.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),y=+y,b=+b,T=+T,w=w||"normal",M=+M,a({text:g,lang:p,style:v,weight:S,fonts:typeof _=="string"?[{src:_}]:_,unicodeFontsURL:O,preResolvedFonts:K},F=>{ee.fontLoad=h()-X;const B=isFinite(T);let ie=null,Y=null,ne=null,Se=null,ge=null,ve=null,fe=null,Ue=null,I=0,Be=0,Re=D!=="nowrap";const Ie=new Map,le=h();let Ee=M,de=0,te=new f;const De=[te];F.forEach($=>{const{fontObj:Q}=$,{ascender:xe,descender:me,unitsPerEm:Me,lineGap:be,capHeight:oe,xHeight:pe}=Q;let _e=Ie.get(Q);if(!_e){const he=y/Me,ce=w==="normal"?(xe-me+be)*he:w*y,Le=(ce-(xe-me)*he)/2,ue=Math.min(ce,(xe-me)*he),se=(xe+me)/2*he+ue/2;_e={index:Ie.size,src:Q.src,fontObj:Q,fontSizeMult:he,unitsPerEm:Me,ascender:xe*he,descender:me*he,capHeight:oe*he,xHeight:pe*he,lineHeight:ce,baseline:-Le-xe*he,caretTop:se,caretBottom:se-ue},Ie.set(Q,_e)}const{fontSizeMult:we}=_e,ye=g.slice($.start,$.end+1);let ze,k;Q.forEachGlyph(ye,y,b,(he,ce,Le,ue)=>{ce+=de,ue+=$.start,ze=ce,k=he;const se=g.charAt(ue),Ae=he.advanceWidth*we,Ne=te.count;let Oe;if("isEmpty"in he||(he.isWhitespace=!!se&&new RegExp(n).test(se),he.canBreakAfter=!!se&&r.test(se),he.isEmpty=he.xMin===he.xMax||he.yMin===he.yMax||i.test(se)),!he.isWhitespace&&!he.isEmpty&&Be++,Re&&B&&!he.isWhitespace&&ce+Ae+Ee>T&&Ne){if(te.glyphAt(Ne-1).glyphObj.canBreakAfter)Oe=new f,Ee=-ce;else for(let ut=Ne;ut--;)if(ut===0&&P==="break-word"){Oe=new f,Ee=-ce;break}else if(te.glyphAt(ut).glyphObj.canBreakAfter){Oe=te.splitAt(ut+1);const ft=Oe.glyphAt(0).x;Ee-=ft;for(let yt=Oe.count;yt--;)Oe.glyphAt(yt).x-=ft;break}Oe&&(te.isSoftWrapped=!0,te=Oe,De.push(te),I=T)}let He=te.glyphAt(te.count);He.glyphObj=he,He.x=ce+Ee,He.y=Le,He.width=Ae,He.charIndex=ue,He.fontData=_e,se===`
`&&(te=new f,De.push(te),Ee=-(ce+Ae+b*y)+M)}),de=ze+k.advanceWidth*we+b*y});let C=0;De.forEach($=>{let Q=!0;for(let xe=$.count;xe--;){const me=$.glyphAt(xe);Q&&!me.glyphObj.isWhitespace&&($.width=me.x+me.width,$.width>I&&(I=$.width),Q=!1);let{lineHeight:Me,capHeight:be,xHeight:oe,baseline:pe}=me.fontData;Me>$.lineHeight&&($.lineHeight=Me);const _e=pe-$.baseline;_e<0&&($.baseline+=_e,$.cap+=_e,$.ex+=_e),$.cap=Math.max($.cap,$.baseline+be),$.ex=Math.max($.ex,$.baseline+oe)}$.baseline-=C,$.cap-=C,$.ex-=C,C+=$.lineHeight});let E=0,z=0;if(L&&(typeof L=="number"?E=-L:typeof L=="string"&&(E=-I*(L==="left"?0:L==="center"?.5:L==="right"?1:c(L)))),U&&(typeof U=="number"?z=-U:typeof U=="string"&&(z=U==="top"?0:U==="top-baseline"?-De[0].baseline:U==="top-cap"?-De[0].cap:U==="top-ex"?-De[0].ex:U==="middle"?C/2:U==="bottom"?C:U==="bottom-baseline"?-De[De.length-1].baseline:c(U)*C)),!V){const $=e.getEmbeddingLevels(g,A);ie=new Uint16Array(Be),Y=new Uint8Array(Be),ne=new Float32Array(Be*2),Se={},fe=[1/0,1/0,-1/0,-1/0],Ue=[],W&&(ve=new Float32Array(g.length*4)),j&&(ge=new Uint8Array(Be*3));let Q=0,xe=-1,me=-1,Me,be;if(De.forEach((oe,pe)=>{let{count:_e,width:we}=oe;if(_e>0){let ye=0;for(let ue=_e;ue--&&oe.glyphAt(ue).glyphObj.isWhitespace;)ye++;let ze=0,k=0;if(x==="center")ze=(I-we)/2;else if(x==="right")ze=I-we;else if(x==="justify"&&oe.isSoftWrapped){let ue=0;for(let se=_e-ye;se--;)oe.glyphAt(se).glyphObj.isWhitespace&&ue++;k=(I-we)/ue}if(k||ze){let ue=0;for(let se=0;se<_e;se++){let Ae=oe.glyphAt(se);const Ne=Ae.glyphObj;Ae.x+=ze+ue,k!==0&&Ne.isWhitespace&&se<_e-ye&&(ue+=k,Ae.width+=k)}}const he=e.getReorderSegments(g,$,oe.glyphAt(0).charIndex,oe.glyphAt(oe.count-1).charIndex);for(let ue=0;ue<he.length;ue++){const[se,Ae]=he[ue];let Ne=1/0,Oe=-1/0;for(let He=0;He<_e;He++)if(oe.glyphAt(He).charIndex>=se){let ut=He,ft=He;for(;ft<_e;ft++){let yt=oe.glyphAt(ft);if(yt.charIndex>Ae)break;ft<_e-ye&&(Ne=Math.min(Ne,yt.x),Oe=Math.max(Oe,yt.x+yt.width))}for(let yt=ut;yt<ft;yt++){const ln=oe.glyphAt(yt);ln.x=Oe-(ln.x+ln.width-Ne)}break}}let ce;const Le=ue=>ce=ue;for(let ue=0;ue<_e;ue++){const se=oe.glyphAt(ue);ce=se.glyphObj;const Ae=ce.index,Ne=$.levels[se.charIndex]&1;if(Ne){const Oe=e.getMirroredCharacter(g[se.charIndex]);Oe&&se.fontData.fontObj.forEachGlyph(Oe,0,0,Le)}if(W){const{charIndex:Oe,fontData:He}=se,ut=se.x+E,ft=se.x+se.width+E;ve[Oe*4]=Ne?ft:ut,ve[Oe*4+1]=Ne?ut:ft,ve[Oe*4+2]=oe.baseline+He.caretBottom+z,ve[Oe*4+3]=oe.baseline+He.caretTop+z;const yt=Oe-xe;yt>1&&u(ve,xe,yt),xe=Oe}if(j){const{charIndex:Oe}=se;for(;Oe>me;)me++,j.hasOwnProperty(me)&&(be=j[me])}if(!ce.isWhitespace&&!ce.isEmpty){const Oe=Q++,{fontSizeMult:He,src:ut,index:ft}=se.fontData,yt=Se[ut]||(Se[ut]={});yt[Ae]||(yt[Ae]={path:ce.path,pathBounds:[ce.xMin,ce.yMin,ce.xMax,ce.yMax]});const ln=se.x+E,Wt=se.y+oe.baseline+z;ne[Oe*2]=ln,ne[Oe*2+1]=Wt;const yn=ln+ce.xMin*He,Vn=Wt+ce.yMin*He,ni=ln+ce.xMax*He,cn=Wt+ce.yMax*He;yn<fe[0]&&(fe[0]=yn),Vn<fe[1]&&(fe[1]=Vn),ni>fe[2]&&(fe[2]=ni),cn>fe[3]&&(fe[3]=cn),Oe%J===0&&(Me={start:Oe,end:Oe,rect:[1/0,1/0,-1/0,-1/0]},Ue.push(Me)),Me.end++;const Ut=Me.rect;if(yn<Ut[0]&&(Ut[0]=yn),Vn<Ut[1]&&(Ut[1]=Vn),ni>Ut[2]&&(Ut[2]=ni),cn>Ut[3]&&(Ut[3]=cn),ie[Oe]=Ae,Y[Oe]=ft,j){const Un=Oe*3;ge[Un]=be>>16&255,ge[Un+1]=be>>8&255,ge[Un+2]=be&255}}}}}),ve){const oe=g.length-xe;oe>1&&u(ve,xe,oe)}}const ae=[];Ie.forEach(({index:$,src:Q,unitsPerEm:xe,ascender:me,descender:Me,lineHeight:be,capHeight:oe,xHeight:pe})=>{ae[$]={src:Q,unitsPerEm:xe,ascender:me,descender:Me,lineHeight:be,capHeight:oe,xHeight:pe}}),ee.typesetting=h()-le,N({glyphIds:ie,glyphFontIndices:Y,glyphPositions:ne,glyphData:Se,fontData:ae,caretPositions:ve,glyphColors:ge,chunkedBounds:Ue,fontSize:y,topBaseline:z+De[0].baseline,blockBounds:[E,z-C,E+I,z],visibleBounds:fe,timings:ee})})}function l(g,_){o({...g,metricsOnly:!0},p=>{const[m,y,S,v]=p.blockBounds;_({width:S-m,height:v-y})})}function c(g){let _=g.match(/^([\d.]+)%$/),p=_?parseFloat(_[1]):NaN;return isNaN(p)?0:p/100}function u(g,_,p){const m=g[_*4],y=g[_*4+1],S=g[_*4+2],v=g[_*4+3],b=(y-m)/p;for(let w=0;w<p;w++){const T=(_+w)*4;g[T]=m+b*w,g[T+1]=m+b*(w+1),g[T+2]=S,g[T+3]=v}}function h(){return(self.performance||Date).now()}function f(){this.data=[]}const d=["glyphObj","x","y","width","charIndex","fontData"];return f.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/d.length)},glyphAt(g){let _=f.flyweight;return _.data=this.data,_.index=g,_},splitAt(g){let _=new f;return _.data=this.data.splice(g*d.length),_}},f.flyweight=d.reduce((g,_,p,m)=>(Object.defineProperty(g,_,{get(){return this.data[this.index*d.length+p]},set(y){this.data[this.index*d.length+p]=y}}),g),{data:null,index:0}),{typeset:o,measure:l}}const Er=()=>(self.performance||Date).now(),il=Pm();let Cd;function D1(s,e,t,i,n,r,a,o,l,c,u=!0){return u?U1(s,e,t,i,n,r,a,o,l,c).then(null,h=>(Cd||(console.warn("WebGL SDF generation failed, falling back to JS",h),Cd=!0),Dd(s,e,t,i,n,r,a,o,l,c))):Dd(s,e,t,i,n,r,a,o,l,c)}const Po=[],L1=5;let Su=0;function Lm(){const s=Er();for(;Po.length&&Er()-s<L1;)Po.shift()();Su=Po.length?setTimeout(Lm,0):0}const U1=(...s)=>new Promise((e,t)=>{Po.push(()=>{const i=Er();try{il.webgl.generateIntoCanvas(...s),e({timing:Er()-i})}catch(n){t(n)}}),Su||(Su=setTimeout(Lm,0))}),I1=4,N1=2e3,Pd={};let F1=0;function Dd(s,e,t,i,n,r,a,o,l,c){const u="TroikaTextSDFGenerator_JS_"+F1++%I1;let h=Pd[u];return h||(h=Pd[u]={workerModule:Ls({name:u,workerId:u,dependencies:[Pm,Er],init(f,d){const g=f().javascript.generate;return function(..._){const p=d();return{textureData:g(..._),timing:d()-p}}},getTransferables(f){return[f.textureData.buffer]}}),requests:0,idleTimer:null}),h.requests++,clearTimeout(h.idleTimer),h.workerModule(s,e,t,i,n,r).then(({textureData:f,timing:d})=>{const g=Er(),_=new Uint8Array(f.length*4);for(let p=0;p<f.length;p++)_[p*4+c]=f[p];return il.webglUtils.renderImageData(a,_,o,l,s,e,1<<3-c),d+=Er()-g,--h.requests===0&&(h.idleTimer=setTimeout(()=>{d1(u)},N1)),{timing:d}})}function O1(s){s._warm||(il.webgl.isSupported(s),s._warm=!0)}const k1=il.webglUtils.resizeWebGLCanvasWithoutClearing,ia={unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},B1=new je;function Jr(){return(self.performance||Date).now()}const Ld=Object.create(null);function z1(s,e){s=V1({},s);const t=Jr(),i=[];if(s.font&&i.push({label:"user",src:H1(s.font)}),s.font=i,s.text=""+s.text,s.sdfGlyphSize=s.sdfGlyphSize||ia.sdfGlyphSize,s.unicodeFontsURL=s.unicodeFontsURL||ia.unicodeFontsURL,s.colorRanges!=null){let f={};for(let d in s.colorRanges)if(s.colorRanges.hasOwnProperty(d)){let g=s.colorRanges[d];typeof g!="number"&&(g=B1.set(g).getHex()),f[d]=g}s.colorRanges=f}Object.freeze(s);const{textureWidth:n,sdfExponent:r}=ia,{sdfGlyphSize:a}=s,o=n/a*4;let l=Ld[a];if(!l){const f=document.createElement("canvas");f.width=n,f.height=a*256/o,l=Ld[a]={glyphCount:0,sdfGlyphSize:a,sdfCanvas:f,sdfTexture:new Pt(f,void 0,void 0,void 0,rn,rn),contextLost:!1,glyphsByFont:new Map},l.sdfTexture.generateMipmaps=!1,G1(l)}const{sdfTexture:c,sdfCanvas:u}=l;Nm(s).then(f=>{const{glyphIds:d,glyphFontIndices:g,fontData:_,glyphPositions:p,fontSize:m,timings:y}=f,S=[],v=new Float32Array(d.length*4);let b=0,w=0;const T=Jr(),A=_.map(L=>{let U=l.glyphsByFont.get(L.src);return U||l.glyphsByFont.set(L.src,U=new Map),U});d.forEach((L,U)=>{const V=g[U],{src:O,unitsPerEm:K}=_[V];let W=A[V].get(L);if(!W){const{path:ee,pathBounds:F}=f.glyphData[O][L],B=Math.max(F[2]-F[0],F[3]-F[1])/a*(ia.sdfMargin*a+.5),ie=l.glyphCount++,Y=[F[0]-B,F[1]-B,F[2]+B,F[3]+B];A[V].set(L,W={path:ee,atlasIndex:ie,sdfViewBox:Y}),S.push(W)}const{sdfViewBox:J}=W,j=p[w++],N=p[w++],X=m/K;v[b++]=j+J[0]*X,v[b++]=N+J[1]*X,v[b++]=j+J[2]*X,v[b++]=N+J[3]*X,d[U]=W.atlasIndex}),y.quads=(y.quads||0)+(Jr()-T);const x=Jr();y.sdf={};const M=u.height,D=Math.ceil(l.glyphCount/o),P=Math.pow(2,Math.ceil(Math.log2(D*a)));P>M&&(console.info(`Increasing SDF texture size ${M}->${P}`),k1(u,n,P),c.dispose()),Promise.all(S.map(L=>Um(L,l,s.gpuAccelerateSDF).then(({timing:U})=>{y.sdf[L.atlasIndex]=U}))).then(()=>{S.length&&!l.contextLost&&(Im(l),c.needsUpdate=!0),y.sdfTotal=Jr()-x,y.total=Jr()-t,e(Object.freeze({parameters:s,sdfTexture:c,sdfGlyphSize:a,sdfExponent:r,glyphBounds:v,glyphAtlasIndices:d,glyphColors:f.glyphColors,caretPositions:f.caretPositions,chunkedBounds:f.chunkedBounds,ascender:f.ascender,descender:f.descender,lineHeight:f.lineHeight,capHeight:f.capHeight,xHeight:f.xHeight,topBaseline:f.topBaseline,blockBounds:f.blockBounds,visibleBounds:f.visibleBounds,timings:f.timings}))})}),Promise.resolve().then(()=>{l.contextLost||O1(u)})}function Um({path:s,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:i,sdfCanvas:n,contextLost:r},a){if(r)return Promise.resolve({timing:-1});const{textureWidth:o,sdfExponent:l}=ia,c=Math.max(t[2]-t[0],t[3]-t[1]),u=Math.floor(e/4),h=u%(o/i)*i,f=Math.floor(u/(o/i))*i,d=e%4;return D1(i,i,s,t,c,l,n,h,f,d,a)}function G1(s){const e=s.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),s.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),s.contextLost=!1;const i=[];s.glyphsByFont.forEach(n=>{n.forEach(r=>{i.push(Um(r,s,!0))})}),Promise.all(i).then(()=>{Im(s),s.sdfTexture.needsUpdate=!0})})}function V1(s,e){for(let t in e)e.hasOwnProperty(t)&&(s[t]=e[t]);return s}let go;function H1(s){return go||(go=typeof document>"u"?{}:document.createElement("a")),go.href=s,go.href}function Im(s){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=s,{width:i,height:n}=e,r=s.sdfCanvas.getContext("webgl");let a=t.image.data;(!a||a.length!==i*n*4)&&(a=new Uint8Array(i*n*4),t.image={width:i,height:n,data:a},t.flipY=!1,t.isDataTexture=!0),r.readPixels(0,0,i,n,r.RGBA,r.UNSIGNED_BYTE,a)}}const W1=Ls({name:"Typesetter",dependencies:[P1,C1,m1],init(s,e,t){return s(e,t())}}),Nm=Ls({name:"Typesetter",dependencies:[W1],init(s){return function(e){return new Promise(t=>{s.typeset(e,t)})}},getTransferables(s){const e=[];for(let t in s)s[t]&&s[t].buffer&&e.push(s[t].buffer);return e}});Nm.onMainThread;const Ud={};function X1(s){let e=Ud[s];return e||(e=Ud[s]=new ir(1,1,s,s).translate(.5,.5,0)),e}const Y1="aTroikaGlyphBounds",Id="aTroikaGlyphIndex",j1="aTroikaGlyphColor";class q1 extends i0{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new ei,this.boundingBox=new Gn}computeBoundingSphere(){}computeBoundingBox(){}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=X1(e);["position","normal","uv"].forEach(i=>{this.attributes[i]=t.attributes[i].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,i,n,r){this.updateAttributeData(Y1,e,4),this.updateAttributeData(Id,t,1),this.updateAttributeData(j1,r,3),this._blockBounds=i,this._chunkedBounds=n,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:i}=this;if(t){const{PI:n,floor:r,min:a,max:o,sin:l,cos:c}=Math,u=n/2,h=n*2,f=Math.abs(t),d=e[0]/f,g=e[2]/f,_=r((d+u)/h)!==r((g+u)/h)?-f:a(l(d)*f,l(g)*f),p=r((d-u)/h)!==r((g-u)/h)?f:o(l(d)*f,l(g)*f),m=r((d+n)/h)!==r((g+n)/h)?f*2:o(f-c(d)*f,f-c(g)*f);i.min.set(_,e[1],t<0?-m:0),i.max.set(p,e[3],t<0?0:m)}else i.min.set(e[0],e[1],0),i.max.set(e[2],e[3],0);i.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(Id).count,i=this._chunkedBounds;if(i)for(let n=i.length;n--;){t=i[n].end;let r=i[n].rect;if(r[1]<e.w&&r[3]>e.y&&r[0]<e.z&&r[2]>e.x)break}this.instanceCount=t}updateAttributeData(e,t,i){const n=this.getAttribute(e);t?n&&n.array.length===t.length?(n.array.set(t),n.needsUpdate=!0):(this.setAttribute(e,new Oo(t,i)),delete this._maxInstanceCount,this.dispose()):n&&this.deleteAttribute(e)}}const K1=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaEdgeOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,Z1=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaEdgeOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaEdgeOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,J1=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaEdgeOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,Q1=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaEdgeOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function $1(s){const e=yu(s,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new We},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new st(0,0,0,0)},uTroikaClipRect:{value:new st(0,0,0,0)},uTroikaEdgeOffset:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new We},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new je},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new Ke},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:K1,vertexTransform:Z1,fragmentDefs:J1,fragmentColorTransform:Q1,customRewriter({vertexShader:t,fragmentShader:i}){let n=/\buniform\s+vec3\s+diffuse\b/;return n.test(i)&&(i=i.replace(n,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),n.test(t)||(t=t.replace(Dm,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:i}}});return e.transparent=!0,e.forceSinglePass=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const _h=new Jn({color:16777215,side:bn,transparent:!0}),Nd=8421504,Fd=new qe,vo=new G,uc=new G,Qs=[],eE=new G,hc="+x+y";function Od(s){return Array.isArray(s)?s[0]:s}let Fm=()=>{const s=new Ct(new ir(1,1),_h);return Fm=()=>s,s},Om=()=>{const s=new Ct(new ir(1,1,32,1),_h);return Om=()=>s,s};const tE={type:"syncstart"},nE={type:"synccomplete"},km=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],iE=km.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class Bm extends Ct{constructor(){const e=new q1;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=Nd,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=hc,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(tE),z1({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const i=this._queuedSyncs;i&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{i.forEach(n=>n&&n())})),this.dispatchEvent(nE),e&&e()})))}onBeforeRender(e,t,i,n,r,a){this.sync(),r.isTroikaTextMaterial&&this._prepareForRender(r)}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}createDerivedMaterial(e){return $1(e)}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=_h.clone());if((!e||!e.isDerivedFrom(t))&&(e=this._derivedMaterial=this.createDerivedMaterial(t),t.addEventListener("dispose",function i(){t.removeEventListener("dispose",i),e.dispose()})),this.hasOutline()){let i=e._outlineMtl;return i||(i=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),i.isTextOutlineMaterial=!0,i.depthWrite=!1,i.map=null,e.addEventListener("dispose",function n(){e.removeEventListener("dispose",n),i.dispose()})),[i,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}hasOutline(){return!!(this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY)}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return Od(this.material).getDepthMaterial()}set customDepthMaterial(e){}get customDistanceMaterial(){return Od(this.material).getDistanceMaterial()}set customDistanceMaterial(e){}_prepareForRender(e){const t=e.isTextOutlineMaterial,i=e.uniforms,n=this.textRenderInfo;if(n){const{sdfTexture:o,blockBounds:l}=n;i.uTroikaSDFTexture.value=o,i.uTroikaSDFTextureSize.value.set(o.image.width,o.image.height),i.uTroikaSDFGlyphSize.value=n.sdfGlyphSize,i.uTroikaSDFExponent.value=n.sdfExponent,i.uTroikaTotalBounds.value.fromArray(l),i.uTroikaUseGlyphColors.value=!t&&!!n.glyphColors;let c=0,u=0,h=0,f,d,g,_=0,p=0;if(t){let{outlineWidth:y,outlineOffsetX:S,outlineOffsetY:v,outlineBlur:b,outlineOpacity:w}=this;c=this._parsePercent(y)||0,u=Math.max(0,this._parsePercent(b)||0),f=w,_=this._parsePercent(S)||0,p=this._parsePercent(v)||0}else h=Math.max(0,this._parsePercent(this.strokeWidth)||0),h&&(g=this.strokeColor,i.uTroikaStrokeColor.value.set(g??Nd),d=this.strokeOpacity,d==null&&(d=1)),f=this.fillOpacity;i.uTroikaEdgeOffset.value=c,i.uTroikaPositionOffset.value.set(_,p),i.uTroikaBlurRadius.value=u,i.uTroikaStrokeWidth.value=h,i.uTroikaStrokeOpacity.value=d,i.uTroikaFillOpacity.value=f??1,i.uTroikaCurveRadius.value=this.curveRadius||0;let m=this.clipRect;if(m&&Array.isArray(m)&&m.length===4)i.uTroikaClipRect.value.fromArray(m);else{const y=(this.fontSize||.1)*100;i.uTroikaClipRect.value.set(l[0]-y,l[1]-y,l[2]+y,l[3]+y)}this.geometry.applyClipRect(i.uTroikaClipRect.value)}i.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const r=t?this.outlineColor||0:this.color;if(r==null)delete e.color;else{const o=e.hasOwnProperty("color")?e.color:e.color=new je;(r!==o._input||typeof r=="object")&&o.set(o._input=r)}let a=this.orientation||hc;if(a!==e._orientation){let o=i.uTroikaOrient.value;a=a.replace(/[^-+xyz]/g,"");let l=a!==hc&&a.match(/^([-+])([xyz])([-+])([xyz])$/);if(l){let[,c,u,h,f]=l;vo.set(0,0,0)[u]=c==="-"?1:-1,uc.set(0,0,0)[f]=h==="-"?-1:1,Fd.lookAt(eE,vo.cross(uc),uc),o.setFromMatrix4(Fd)}else o.identity();e._orientation=a}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),i=t?parseFloat(t[1]):NaN;e=(isNaN(i)?0:i/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new We){t.copy(e);const i=this.curveRadius;return i&&(t.x=Math.atan2(e.x,Math.abs(i)-Math.abs(e.z))*Math.abs(i)),t}worldPositionToTextCoords(e,t=new We){return vo.copy(e),this.localPositionToTextCoords(this.worldToLocal(vo),t)}raycast(e,t){const{textRenderInfo:i,curveRadius:n}=this;if(i){const r=i.blockBounds,a=n?Om():Fm(),o=a.geometry,{position:l,uv:c}=o.attributes;for(let u=0;u<c.count;u++){let h=r[0]+c.getX(u)*(r[2]-r[0]);const f=r[1]+c.getY(u)*(r[3]-r[1]);let d=0;n&&(d=n-Math.cos(h/n)*n,h=Math.sin(h/n)*n),l.setXYZ(u,h,f,d)}o.boundingSphere=this.geometry.boundingSphere,o.boundingBox=this.geometry.boundingBox,a.matrixWorld=this.matrixWorld,a.material.side=this.material.side,Qs.length=0,a.raycast(e,Qs);for(let u=0;u<Qs.length;u++)Qs[u].object=this,t.push(Qs[u])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,iE.forEach(i=>{this[i]=e[i]}),this}clone(){return new this.constructor().copy(this)}}km.forEach(s=>{const e="_private_"+s;Object.defineProperty(Bm.prototype,s,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});new Gn;new je;const kd=document.getElementById("loading-screen"),Pa=new xp;Pa.onStart=(s,e,t)=>{console.log(`INIZIO: Sto caricando ${s}. ${e}/${t}`)};Pa.onProgress=(s,e,t)=>{console.log(`PROGRESSO: Caricato ${s}. ${e}/${t}`)};Pa.onLoad=()=>{console.log(" Tutte le risorse sono state caricate!"),kd.style.opacity="0",setTimeout(()=>{kd.style.display="none"},1e3)};Pa.onError=s=>{console.error(` Errore nel caricamento di ${s}`)};const mi=new Ag;mi.fog=new ku(0,0,100);const Cn=new tn(40,window.innerWidth/window.innerHeight,.1,1e3);Cn.position.set(0,0,0);const ws=new m0,Qn=new We,Da=new $S({antialias:!0});Da.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(Da.domElement);const Ri=document.getElementById("customCursor");let Do=window.innerWidth/2,Lo=window.innerHeight/2,zm=Do,Gm=Lo;const Bd=.15;window.addEventListener("mousemove",s=>{zm=s.clientX,Gm=s.clientY});function Vm(){Do+=(zm-Do)*Bd,Lo+=(Gm-Lo)*Bd,Ri.style.transform=`translate(${Do}px, ${Lo}px) translate(-50%, -50%)`,requestAnimationFrame(Vm)}Vm();mi.add(new n0(16777215,6));const Hm=new Sp(16777215,10);Hm.position.set(0,5,0);mi.add(Hm);const Ln=new tM(Cn,Da.domElement);Ln.enabled=!0;Ln.enablePan=!1;Ln.enableZoom=!1;Ln.minPolarAngle=Math.PI/2;Ln.maxPolarAngle=Math.PI/2;Ln.enableDamping=!0;Ln.dampingFactor=.05;Ln.rotateSpeed=-.3;Ln.target.set(-1e-4,0,0);Ln.update();const Mu=4,Wm=4,Xm=50,Tu=13,rE=new Zo(Mu,Mu,Wm,Xm,Tu,!0),sE=new pp(rE),aE=new Hu(sE,new Ko({color:16777215}));mi.add(aE);for(let s=0;s<=Tu;s++){const e=(s/Tu-.5)*Wm-.1,t=new Wu(Mu,Xm);t.rotateX(Math.PI/2);const i=new pp(t),n=new Hu(i,new Ko({color:16777215}));n.position.y=e,mi.add(n)}const oE=["https://wddc-groupieml.webflow.io/canzoni-qholla","https://wddc-groupieml.webflow.io/mosqe","https://wddc-groupieml.webflow.io/canzoni-manosx","https://wddc-groupieml.webflow.io/subway","https://wddc-groupieml.webflow.io/canzoni-la-manina","https://wddc-groupieml.webflow.io/canzoni-legno"],lE=new pM(Pa),Rr=new oi;mi.add(Rr);const cE=[{path:"/modelli3Dcds/CD_Qholla.glb",position:new G(-3,0,.05),scale:new G(.6,.6,.6),rotation:new Vt(0,0,0),name:"QHOLLA"},{path:"/modelli3Dcds/CD_Mosque.glb",position:new G(-1.5,0,-2.6),scale:new G(.6,.6,.6),rotation:new Vt(0,-Math.PI/3,0),name:"MOSQUE"},{path:"/modelli3Dcds/CD_Manosx.glb",position:new G(1.5,0,-2.6),scale:new G(.6,.6,.6),rotation:new Vt(0,-2*Math.PI/3,0),name:"MANO SX"},{path:"/modelli3Dcds/CD_Subway.glb",position:new G(3,0,0),scale:new G(.6,.6,.6),rotation:new Vt(0,Math.PI,0),name:"SUBWAY"},{path:"/modelli3Dcds/CD_Lamanina.glb",position:new G(1.5,0,2.6),scale:new G(.6,.6,.6),rotation:new Vt(0,2*Math.PI/3,0),name:"LA MANINA"},{path:"/modelli3Dcds/CD_Legno.glb",position:new G(-1.5,0,2.6),scale:new G(.6,.6,.6),rotation:new Vt(0,Math.PI/3,0),name:"LEGNO"}];cE.forEach((s,e)=>{lE.load(s.path,t=>{const i=t.scene;i.traverse(l=>{l.isMesh&&l.geometry.computeBoundingBox()});const n=new Gn().setFromObject(i),r=new G;n.getCenter(r);const a=new G;n.getSize(a);const o=new oi;i.position.y-=r.y,o.add(i),o.position.copy(s.position),o.scale.copy(s.scale),o.rotation.copy(s.rotation),o.userData.originalScale=s.scale.x,o.userData.index=e,o.userData.name=s.name||`CD ${e+1}`,o.userData.oscillation={x:Math.random()*Math.PI*2,y:Math.random()*Math.PI*2,z:Math.random()*Math.PI*2},Rr.add(o)},void 0,t=>{console.error(`Errore nel caricamento di ${s.path}:`,t)})});let Eu=null,bu=new We,gh=!1;window.addEventListener("mousedown",s=>{bu.set(s.clientX,s.clientY),gh=!1});window.addEventListener("mousemove",s=>{const e=s.clientX-bu.x,t=s.clientY-bu.y;Math.sqrt(e*e+t*t)>5&&(gh=!0)});window.addEventListener("click",s=>{if(gh){Qn.clicked=!1;return}Qn.x=s.clientX/window.innerWidth*2-1,Qn.y=-(s.clientY/window.innerHeight)*2+1,ws.setFromCamera(Qn,Cn);const e=ws.intersectObjects(Rr.children,!0);if(e.length>0){let i=e[0].object;for(;i.parent&&i.parent!==Rr;)i=i.parent;const n=i.userData.index,r=oE[n];Ln.enabled=!1;const a=new G(0,i.position.y,0);jo.to(i.position,{x:a.x,y:a.y,z:a.z,duration:1,ease:"power2.inOut"});const o=new Jo(3.8,10,64,1,!0),l=new Jn({color:0,side:bn,transparent:!0,opacity:0}),c=new Ct(o,l);c.position.copy(Cn.position),c.quaternion.copy(Cn.quaternion),mi.add(c),jo.to(l,{opacity:1,duration:.95,ease:"power1.inOut"}),setTimeout(()=>{window.location.href=r},1200)}});const fc=document.getElementById("cd-name");window.addEventListener("mousemove",s=>{Qn.x=s.clientX/window.innerWidth*2-1,Qn.y=-(s.clientY/window.innerHeight)*2+1,ws.setFromCamera(Qn,Cn);const e=ws.intersectObjects(Rr.children,!0);if(e.length>0){Ri.style.width="24px",Ri.style.height="24px";let t=e[0].object;for(;t.parent&&t.parent!==Rr;)t=t.parent;Eu=t;const i=t.userData.name;fc.textContent=i,fc.style.opacity=1}else Ri.style.width="16px",Ri.style.height="16px",Eu=null,fc.style.opacity=0});window.addEventListener("mousedown",()=>{Qn.clicked=!0});const vh=[],Uo=[],wu=3.3,Ym=[{text:"ABOUT US",angle:Math.PI*.1,y:-.97,link:"https://wddc-groupieml.webflow.io/about"},{text:"FLATFADE",angle:-Math.PI*.1,y:-.97,link:"https://wddc-groupieml.webflow.io/tunnel"},{text:"PSICHE",angle:-Math.PI*.04,y:1.06,link:"https://wddc-groupieml.webflow.io/psiche"},{text:"SPECCHIO",angle:Math.PI*.04,y:1.06,link:"https://wddc-groupieml.webflow.io/specchio"}];Ym.forEach(s=>{const e=new oi,t=new Bm;t.text=s.text,t.font="/Fonts/ClashGrotesk/ClashGrotesk-Regular.ttf",s.text==="FLATFADE"||s.text==="ABOUT US"?t.fontSize=.055:t.fontSize=.06,t.color=s.text==="PSICHE"?11184810:16777215,t.anchorX="center",t.anchorY="middle",t.outlineWidth=1e-4,t.outlineColor=16777215,t.userData.link=s.link,t.sync();const i=new ir(.3,.12),n=new Jn({color:0,opacity:1,transparent:!0}),r=new Ct(i,n);r.position.z=-.01,e.add(r),e.add(t);const a=s.angle;e.userData.originalAngle=a,e.position.x=Math.cos(a)*wu,e.position.z=Math.sin(a)*wu,e.position.y=s.y,e.userData.link=s.link,mi.add(e),e.visible=!0,vh.push(e),Uo.push(e)});function uE(){const s=window.innerWidth<768;vh.forEach((e,t)=>{const i=Ym[t];let n=i.text==="ABOUT US"?Math.PI*.14:i.text==="FLATFADE"?-Math.PI*.14:i.text==="SPECCHIO"?Math.PI*.04:i.text==="PSICHE"?-Math.PI*.04:0;const r=s&&i.y<0?n*.6:n;i.angle=r,e.userData.originalAngle=r})}function hE(){ws.setFromCamera(Qn,Cn);const s=ws.intersectObjects(Uo,!0);if(s.length>0){const e=s[0].object.parent;if(Ri.style.width="24px",Ri.style.height="24px",Uo.forEach(t=>{const i=t===e?1.1:1;t.scale.lerp(new G(i,i,i),.1)}),Qn.clicked){const t=e.userData.link;if(t){Ln.enabled=!1;const i=new Jo(3.8,10,64,1,!0),n=new Jn({color:0,side:bn,transparent:!0,opacity:0}),r=new Ct(i,n);r.position.copy(Cn.position),r.quaternion.copy(Cn.quaternion),mi.add(r),jo.to(n,{opacity:1,duration:.95,ease:"power1.inOut"}),setTimeout(()=>{window.location.href=t},1200)}}}else Ri.style.width="16px",Ri.style.height="16px",Uo.forEach(e=>{e.scale.lerp(new G(1,1,1),.1)});Qn.clicked=!1}function jm(){requestAnimationFrame(jm),Ln.update();const s=performance.now()*.001;Rr.children.forEach(n=>{const r=n.userData.oscillation;n.rotation.y+=Math.sin(s+r.y)*.001,n.rotation.z+=Math.sin(s+r.z)*.001;const a=n.userData.originalScale,o=n===Eu?a*1.1:a;n.scale.x=sa.lerp(n.scale.x,o,.1),n.scale.y=sa.lerp(n.scale.y,o,.1),n.scale.z=sa.lerp(n.scale.z,o,.1)});const e=Cn.quaternion.clone(),i=new Vt().setFromQuaternion(e,"YXZ").y;vh.forEach(n=>{const r=n.userData.originalAngle,a=wu,o=r-i+Math.PI*1.5;n.position.x=Math.cos(o)*a,n.position.z=Math.sin(o)*a,n.lookAt(0,n.position.y,0)}),uE(),hE(),Da.render(mi,Cn)}jm();window.addEventListener("resize",()=>{Cn.aspect=window.innerWidth/window.innerHeight,Cn.updateProjectionMatrix(),Da.setSize(window.innerWidth,window.innerHeight)});
