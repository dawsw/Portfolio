(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gh="174",or={ROTATE:0,DOLLY:1,PAN:2},tr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},o_=0,bu=1,a_=2,Dd=1,l_=2,fi=3,Si=0,Jt=1,Fn=2,Hi=0,ar=1,Au=2,wu=3,Ru=4,c_=5,_s=100,h_=101,u_=102,f_=103,d_=104,p_=200,m_=201,__=202,g_=203,Jl=204,Ql=205,x_=206,v_=207,y_=208,M_=209,S_=210,T_=211,E_=212,b_=213,A_=214,ec=0,tc=1,nc=2,_r=3,ic=4,sc=5,rc=6,oc=7,Id=0,w_=1,R_=2,Vi=0,C_=1,P_=2,L_=3,D_=4,I_=5,N_=6,U_=7,Cu="attached",O_="detached",Nd=300,gr=301,xr=302,ac=303,lc=304,Xa=306,vr=1e3,Oi=1001,Ca=1002,qt=1003,Ud=1004,io=1005,un=1006,ga=1007,xi=1008,Ti=1009,Od=1010,Fd=1011,vo=1012,xh=1013,As=1014,kn=1015,Do=1016,vh=1017,yh=1018,yr=1020,Bd=35902,zd=1021,kd=1022,An=1023,Hd=1024,Vd=1025,lr=1026,Mr=1027,Mh=1028,Sh=1029,Gd=1030,Th=1031,Eh=1033,xa=33776,va=33777,ya=33778,Ma=33779,cc=35840,hc=35841,uc=35842,fc=35843,dc=36196,pc=37492,mc=37496,_c=37808,gc=37809,xc=37810,vc=37811,yc=37812,Mc=37813,Sc=37814,Tc=37815,Ec=37816,bc=37817,Ac=37818,wc=37819,Rc=37820,Cc=37821,Sa=36492,Pc=36494,Lc=36495,Wd=36283,Dc=36284,Ic=36285,Nc=36286,yo=2300,Mo=2301,tl=2302,Pu=2400,Lu=2401,Du=2402,F_=2500,B_=0,Xd=1,Uc=2,z_=3200,k_=3201,Yd=0,H_=1,Ui="",Ct="srgb",Kt="srgb-linear",Pa="linear",it="srgb",Bs=7680,Iu=519,V_=512,G_=513,W_=514,qd=515,X_=516,Y_=517,q_=518,j_=519,Oc=35044,Nu="300 es",vi=2e3,La=2001;class Ls{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Uu=1234567;const co=Math.PI/180,Sr=180/Math.PI;function Vn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ft[r&255]+Ft[r>>8&255]+Ft[r>>16&255]+Ft[r>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]).toLowerCase()}function Ie(r,e,t){return Math.max(e,Math.min(t,r))}function bh(r,e){return(r%e+e)%e}function K_(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Z_(r,e,t){return r!==e?(t-r)/(e-r):0}function ho(r,e,t){return(1-t)*r+t*e}function $_(r,e,t,n){return ho(r,e,1-Math.exp(-t*n))}function J_(r,e=1){return e-Math.abs(bh(r,e*2)-e)}function Q_(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function eg(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function tg(r,e){return r+Math.floor(Math.random()*(e-r+1))}function ng(r,e){return r+Math.random()*(e-r)}function ig(r){return r*(.5-Math.random())}function sg(r){r!==void 0&&(Uu=r);let e=Uu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function rg(r){return r*co}function og(r){return r*Sr}function ag(r){return(r&r-1)===0&&r!==0}function lg(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function cg(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function hg(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),h=o((e+n)/2),u=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*h,l*u,l*f,a*c);break;case"YZY":r.set(l*f,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*f,a*h,a*c);break;case"XZX":r.set(a*h,l*g,l*d,a*c);break;case"YXY":r.set(l*d,a*h,l*g,a*c);break;case"ZYZ":r.set(l*g,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Bn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function tt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const jd={DEG2RAD:co,RAD2DEG:Sr,generateUUID:Vn,clamp:Ie,euclideanModulo:bh,mapLinear:K_,inverseLerp:Z_,lerp:ho,damp:$_,pingpong:J_,smoothstep:Q_,smootherstep:eg,randInt:tg,randFloat:ng,randFloatSpread:ig,seededRandom:sg,degToRad:rg,radToDeg:og,isPowerOfTwo:ag,ceilPowerOfTwo:lg,floorPowerOfTwo:cg,setQuaternionFromProperEuler:hg,normalize:tt,denormalize:Bn};class ie{constructor(e=0,t=0){ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ie(this.x,e.x,t.x),this.y=Ie(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ie(this.x,e,t),this.y=Ie(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ie(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ie(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(e,t,n,i,s,o,a,l,c){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],v=i[1],M=i[4],x=i[7],E=i[2],A=i[5],w=i[8];return s[0]=o*_+a*v+l*E,s[3]=o*m+a*M+l*A,s[6]=o*p+a*x+l*w,s[1]=c*_+h*v+u*E,s[4]=c*m+h*M+u*A,s[7]=c*p+h*x+u*w,s[2]=f*_+d*v+g*E,s[5]=f*m+d*M+g*A,s[8]=f*p+d*x+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*s,d=c*s-o*l,g=t*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(h*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(nl.makeScale(e,t)),this}rotate(e){return this.premultiply(nl.makeRotation(-e)),this}translate(e,t){return this.premultiply(nl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const nl=new Ue;function Kd(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function So(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ug(){const r=So("canvas");return r.style.display="block",r}const Ou={};function ds(r){r in Ou||(Ou[r]=!0,console.warn(r))}function fg(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function dg(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function pg(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Fu=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bu=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mg(){const r={enabled:!0,workingColorSpace:Kt,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===it&&(i.r=Mi(i.r),i.g=Mi(i.g),i.b=Mi(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===it&&(i.r=cr(i.r),i.g=cr(i.g),i.b=cr(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ui?Pa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Kt]:{primaries:e,whitePoint:n,transfer:Pa,toXYZ:Fu,fromXYZ:Bu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ct},outputColorSpaceConfig:{drawingBufferColorSpace:Ct}},[Ct]:{primaries:e,whitePoint:n,transfer:it,toXYZ:Fu,fromXYZ:Bu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ct}}}),r}const Xe=mg();function Mi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function cr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let zs;class _g{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{zs===void 0&&(zs=So("canvas")),zs.width=e.width,zs.height=e.height;const n=zs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=zs}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=So("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Mi(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Mi(t[n]/255)*255):t[n]=Mi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gg=0;class Ah{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gg++}),this.uuid=Vn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(il(i[o].image)):s.push(il(i[o]))}else s=il(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function il(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?_g.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xg=0;class Pt extends Ls{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=Oi,i=Oi,s=un,o=xi,a=An,l=Ti,c=Pt.DEFAULT_ANISOTROPY,h=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xg++}),this.uuid=Vn(),this.name="",this.source=new Ah(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vr:e.x=e.x-Math.floor(e.x);break;case Oi:e.x=e.x<0?0:1;break;case Ca:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vr:e.y=e.y-Math.floor(e.y);break;case Oi:e.y=e.y<0?0:1;break;case Ca:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=Nd;Pt.DEFAULT_ANISOTROPY=1;class $e{constructor(e=0,t=0,n=0,i=1){$e.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,x=(d+1)/2,E=(p+1)/2,A=(h+f)/4,w=(u+_)/4,R=(g+m)/4;return M>x&&M>E?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=A/n,s=w/n):x>E?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=A/i,s=R/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=w/s,i=R/s),this.set(n,i,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-_)/v,this.z=(f-h)/v,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ie(this.x,e.x,t.x),this.y=Ie(this.y,e.y,t.y),this.z=Ie(this.z,e.z,t.z),this.w=Ie(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ie(this.x,e,t),this.y=Ie(this.y,e,t),this.z=Ie(this.z,e,t),this.w=Ie(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ie(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vg extends Ls{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $e(0,0,e,t),this.scissorTest=!1,this.viewport=new $e(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Pt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Ah(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ws extends vg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Zd extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=qt,this.minFilter=qt,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yg extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=qt,this.minFilter=qt,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==f||c!==d||h!==g){let m=1-a;const p=l*f+c*d+h*g+u*_,v=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const E=Math.sqrt(M),A=Math.atan2(E,p*v);m=Math.sin(m*A)/E,a=Math.sin(a*A)/E}const x=a*v;if(l=l*m+f*x,c=c*m+d*x,h=h*m+g*x,u=u*m+_*x,m===1-a){const E=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=E,c*=E,h*=E,u*=E}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+h*u+l*d-c*f,e[t+1]=l*g+h*f+c*u-a*d,e[t+2]=c*g+h*d+a*f-l*u,e[t+3]=h*g-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),f=l(n/2),d=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ie(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-s*i),u=2*(s*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ie(this.x,e.x,t.x),this.y=Ie(this.y,e.y,t.y),this.z=Ie(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ie(this.x,e,t),this.y=Ie(this.y,e,t),this.z=Ie(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ie(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return sl.copy(this).projectOnVector(e),this.sub(sl)}reflect(e){return this.sub(sl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ie(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sl=new L,zu=new Wn;class Ai{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(In.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(In.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=In.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,In):In.fromBufferAttribute(s,o),In.applyMatrix4(e.matrixWorld),this.expandByPoint(In);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fo.copy(n.boundingBox)),Fo.applyMatrix4(e.matrixWorld),this.union(Fo)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xr),Bo.subVectors(this.max,Xr),ks.subVectors(e.a,Xr),Hs.subVectors(e.b,Xr),Vs.subVectors(e.c,Xr),wi.subVectors(Hs,ks),Ri.subVectors(Vs,Hs),ss.subVectors(ks,Vs);let t=[0,-wi.z,wi.y,0,-Ri.z,Ri.y,0,-ss.z,ss.y,wi.z,0,-wi.x,Ri.z,0,-Ri.x,ss.z,0,-ss.x,-wi.y,wi.x,0,-Ri.y,Ri.x,0,-ss.y,ss.x,0];return!rl(t,ks,Hs,Vs,Bo)||(t=[1,0,0,0,1,0,0,0,1],!rl(t,ks,Hs,Vs,Bo))?!1:(zo.crossVectors(wi,Ri),t=[zo.x,zo.y,zo.z],rl(t,ks,Hs,Vs,Bo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const oi=[new L,new L,new L,new L,new L,new L,new L,new L],In=new L,Fo=new Ai,ks=new L,Hs=new L,Vs=new L,wi=new L,Ri=new L,ss=new L,Xr=new L,Bo=new L,zo=new L,rs=new L;function rl(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){rs.fromArray(r,s);const a=i.x*Math.abs(rs.x)+i.y*Math.abs(rs.y)+i.z*Math.abs(rs.z),l=e.dot(rs),c=t.dot(rs),h=n.dot(rs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Mg=new Ai,Yr=new L,ol=new L;class ti{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Mg.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yr.subVectors(e,this.center);const t=Yr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Yr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ol.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yr.copy(e.center).add(ol)),this.expandByPoint(Yr.copy(e.center).sub(ol))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ai=new L,al=new L,ko=new L,Ci=new L,ll=new L,Ho=new L,cl=new L;class Ur{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){al.copy(e).add(t).multiplyScalar(.5),ko.copy(t).sub(e).normalize(),Ci.copy(this.origin).sub(al);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ko),a=Ci.dot(this.direction),l=-Ci.dot(ko),c=Ci.lengthSq(),h=Math.abs(1-o*o);let u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=s*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(al).addScaledVector(ko,f),d}intersectSphere(e,t){ai.subVectors(e.center,this.origin);const n=ai.dot(this.direction),i=ai.dot(ai)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,n,i,s){ll.subVectors(t,e),Ho.subVectors(n,e),cl.crossVectors(ll,Ho);let o=this.direction.dot(cl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ci.subVectors(this.origin,e);const l=a*this.direction.dot(Ho.crossVectors(Ci,Ho));if(l<0)return null;const c=a*this.direction.dot(ll.cross(Ci));if(c<0||l+c>o)return null;const h=-a*Ci.dot(cl);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pe{constructor(e,t,n,i,s,o,a,l,c,h,u,f,d,g,_,m){Pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,h,u,f,d,g,_,m)}set(e,t,n,i,s,o,a,l,c,h,u,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Gs.setFromMatrixColumn(e,0).length(),s=1/Gs.setFromMatrixColumn(e,1).length(),o=1/Gs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const f=o*h,d=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,d=l*u,g=c*h,_=c*u;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,d=l*u,g=c*h,_=c*u;t[0]=f-_*a,t[4]=-o*u,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,d=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-f*u,t[8]=g*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+g,t[10]=f-_*u}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=o*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=a*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sg,e,Tg)}lookAt(e,t,n){const i=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),Pi.crossVectors(n,an),Pi.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),Pi.crossVectors(n,an)),Pi.normalize(),Vo.crossVectors(an,Pi),i[0]=Pi.x,i[4]=Vo.x,i[8]=an.x,i[1]=Pi.y,i[5]=Vo.y,i[9]=an.y,i[2]=Pi.z,i[6]=Vo.z,i[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],M=n[7],x=n[11],E=n[15],A=i[0],w=i[4],R=i[8],y=i[12],S=i[1],P=i[5],F=i[9],O=i[13],Y=i[2],G=i[6],V=i[10],q=i[14],k=i[3],te=i[7],se=i[11],he=i[15];return s[0]=o*A+a*S+l*Y+c*k,s[4]=o*w+a*P+l*G+c*te,s[8]=o*R+a*F+l*V+c*se,s[12]=o*y+a*O+l*q+c*he,s[1]=h*A+u*S+f*Y+d*k,s[5]=h*w+u*P+f*G+d*te,s[9]=h*R+u*F+f*V+d*se,s[13]=h*y+u*O+f*q+d*he,s[2]=g*A+_*S+m*Y+p*k,s[6]=g*w+_*P+m*G+p*te,s[10]=g*R+_*F+m*V+p*se,s[14]=g*y+_*O+m*q+p*he,s[3]=v*A+M*S+x*Y+E*k,s[7]=v*w+M*P+x*G+E*te,s[11]=v*R+M*F+x*V+E*se,s[15]=v*y+M*O+x*q+E*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*u-i*c*u-s*a*f+n*c*f+i*a*d-n*l*d)+_*(+t*l*d-t*c*f+s*o*f-i*o*d+i*c*h-s*l*h)+m*(+t*c*u-t*a*d-s*o*u+n*o*d+s*a*h-n*c*h)+p*(-i*a*h-t*l*u+t*a*f+i*o*u-n*o*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],v=u*m*c-_*f*c+_*l*d-a*m*d-u*l*p+a*f*p,M=g*f*c-h*m*c-g*l*d+o*m*d+h*l*p-o*f*p,x=h*_*c-g*u*c+g*a*d-o*_*d-h*a*p+o*u*p,E=g*u*l-h*_*l-g*a*f+o*_*f+h*a*m-o*u*m,A=t*v+n*M+i*x+s*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=v*w,e[1]=(_*f*s-u*m*s-_*i*d+n*m*d+u*i*p-n*f*p)*w,e[2]=(a*m*s-_*l*s+_*i*c-n*m*c-a*i*p+n*l*p)*w,e[3]=(u*l*s-a*f*s-u*i*c+n*f*c+a*i*d-n*l*d)*w,e[4]=M*w,e[5]=(h*m*s-g*f*s+g*i*d-t*m*d-h*i*p+t*f*p)*w,e[6]=(g*l*s-o*m*s-g*i*c+t*m*c+o*i*p-t*l*p)*w,e[7]=(o*f*s-h*l*s+h*i*c-t*f*c-o*i*d+t*l*d)*w,e[8]=x*w,e[9]=(g*u*s-h*_*s-g*n*d+t*_*d+h*n*p-t*u*p)*w,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*p+t*a*p)*w,e[11]=(h*a*s-o*u*s-h*n*c+t*u*c+o*n*d-t*a*d)*w,e[12]=E*w,e[13]=(h*_*i-g*u*i+g*n*f-t*_*f-h*n*m+t*u*m)*w,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*m-t*a*m)*w,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*f+t*a*f)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,f=s*c,d=s*h,g=s*u,_=o*h,m=o*u,p=a*u,v=l*c,M=l*h,x=l*u,E=n.x,A=n.y,w=n.z;return i[0]=(1-(_+p))*E,i[1]=(d+x)*E,i[2]=(g-M)*E,i[3]=0,i[4]=(d-x)*A,i[5]=(1-(f+p))*A,i[6]=(m+v)*A,i[7]=0,i[8]=(g+M)*w,i[9]=(m-v)*w,i[10]=(1-(f+_))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Gs.set(i[0],i[1],i[2]).length();const o=Gs.set(i[4],i[5],i[6]).length(),a=Gs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Nn.copy(this);const c=1/s,h=1/o,u=1/a;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=h,Nn.elements[5]*=h,Nn.elements[6]*=h,Nn.elements[8]*=u,Nn.elements[9]*=u,Nn.elements[10]*=u,t.setFromRotationMatrix(Nn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=vi){const l=this.elements,c=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i);let d,g;if(a===vi)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===La)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=vi){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(o-s),f=(t+e)*c,d=(n+i)*h;let g,_;if(a===vi)g=(o+s)*u,_=-2*u;else if(a===La)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Gs=new L,Nn=new Pe,Sg=new L(0,0,0),Tg=new L(1,1,1),Pi=new L,Vo=new L,an=new L,ku=new Pe,Hu=new Wn;class Qn{constructor(e=0,t=0,n=0,i=Qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ie(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ie(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ku.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ku,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hu.setFromEuler(this),this.setFromQuaternion(Hu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qn.DEFAULT_ORDER="XYZ";class wh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Eg=0;const Vu=new L,Ws=new Wn,li=new Pe,Go=new L,qr=new L,bg=new L,Ag=new Wn,Gu=new L(1,0,0),Wu=new L(0,1,0),Xu=new L(0,0,1),Yu={type:"added"},wg={type:"removed"},Xs={type:"childadded",child:null},hl={type:"childremoved",child:null};class ft extends Ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Eg++}),this.uuid=Vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new L,t=new Qn,n=new Wn,i=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Pe},normalMatrix:{value:new Ue}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.multiply(Ws),this}rotateOnWorldAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.premultiply(Ws),this}rotateX(e){return this.rotateOnAxis(Gu,e)}rotateY(e){return this.rotateOnAxis(Wu,e)}rotateZ(e){return this.rotateOnAxis(Xu,e)}translateOnAxis(e,t){return Vu.copy(e).applyQuaternion(this.quaternion),this.position.add(Vu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gu,e)}translateY(e){return this.translateOnAxis(Wu,e)}translateZ(e){return this.translateOnAxis(Xu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Go.copy(e):Go.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(qr,Go,this.up):li.lookAt(Go,qr,this.up),this.quaternion.setFromRotationMatrix(li),i&&(li.extractRotation(i.matrixWorld),Ws.setFromRotationMatrix(li),this.quaternion.premultiply(Ws.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yu),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wg),hl.child=e,this.dispatchEvent(hl),hl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yu),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,e,bg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,Ag,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ft.DEFAULT_UP=new L(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Un=new L,ci=new L,ul=new L,hi=new L,Ys=new L,qs=new L,qu=new L,fl=new L,dl=new L,pl=new L,ml=new $e,_l=new $e,gl=new $e;class zn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Un.subVectors(e,t),i.cross(Un);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Un.subVectors(i,t),ci.subVectors(n,t),ul.subVectors(e,t);const o=Un.dot(Un),a=Un.dot(ci),l=Un.dot(ul),c=ci.dot(ci),h=ci.dot(ul),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,hi.x),l.addScaledVector(o,hi.y),l.addScaledVector(a,hi.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return ml.setScalar(0),_l.setScalar(0),gl.setScalar(0),ml.fromBufferAttribute(e,t),_l.fromBufferAttribute(e,n),gl.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(ml,s.x),o.addScaledVector(_l,s.y),o.addScaledVector(gl,s.z),o}static isFrontFacing(e,t,n,i){return Un.subVectors(n,t),ci.subVectors(e,t),Un.cross(ci).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Un.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return zn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Ys.subVectors(i,n),qs.subVectors(s,n),fl.subVectors(e,n);const l=Ys.dot(fl),c=qs.dot(fl);if(l<=0&&c<=0)return t.copy(n);dl.subVectors(e,i);const h=Ys.dot(dl),u=qs.dot(dl);if(h>=0&&u<=h)return t.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Ys,o);pl.subVectors(e,s);const d=Ys.dot(pl),g=qs.dot(pl);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(qs,a);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return qu.subVectors(s,i),a=(u-h)/(u-h+(d-g)),t.copy(i).addScaledVector(qu,a);const p=1/(m+_+f);return o=_*p,a=f*p,t.copy(n).addScaledVector(Ys,o).addScaledVector(qs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $d={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},Wo={h:0,s:0,l:0};function xl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class De{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Xe.workingColorSpace){if(e=bh(e,1),t=Ie(t,0,1),n=Ie(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=xl(o,s,e+1/3),this.g=xl(o,s,e),this.b=xl(o,s,e-1/3)}return Xe.toWorkingColorSpace(this,i),this}setStyle(e,t=Ct){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){const n=$d[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mi(e.r),this.g=Mi(e.g),this.b=Mi(e.b),this}copyLinearToSRGB(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return Xe.fromWorkingColorSpace(Bt.copy(this),e),Math.round(Ie(Bt.r*255,0,255))*65536+Math.round(Ie(Bt.g*255,0,255))*256+Math.round(Ie(Bt.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.fromWorkingColorSpace(Bt.copy(this),t);const n=Bt.r,i=Bt.g,s=Bt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=Ct){Xe.fromWorkingColorSpace(Bt.copy(this),e);const t=Bt.r,n=Bt.g,i=Bt.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+t,Li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Li),e.getHSL(Wo);const n=ho(Li.h,Wo.h,t),i=ho(Li.s,Wo.s,t),s=ho(Li.l,Wo.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new De;De.NAMES=$d;let Rg=0;class Gn extends Ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rg++}),this.uuid=Vn(),this.name="",this.type="Material",this.blending=ar,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jl,this.blendDst=Ql,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=_r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Iu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bs,this.stencilZFail=Bs,this.stencilZPass=Bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ar&&(n.blending=this.blending),this.side!==Si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Jl&&(n.blendSrc=this.blendSrc),this.blendDst!==Ql&&(n.blendDst=this.blendDst),this.blendEquation!==_s&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_r&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Iu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Bs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Bs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Kn extends Gn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=Id,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new L,Xo=new ie;let Cg=0;class jt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Oc,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xo.fromBufferAttribute(this,t),Xo.applyMatrix3(e),this.setXY(t,Xo.x,Xo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bn(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bn(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bn(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array),s=tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Oc&&(e.usage=this.usage),e}}class Jd extends jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Qd extends jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Lt extends jt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Pg=0;const Sn=new Pe,vl=new ft,js=new L,ln=new Ai,jr=new Ai,Rt=new L;class xn extends Ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pg++}),this.uuid=Vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kd(e)?Qd:Jd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ue().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,n){return Sn.makeTranslation(e,t,n),this.applyMatrix4(Sn),this}scale(e,t,n){return Sn.makeScale(e,t,n),this.applyMatrix4(Sn),this}lookAt(e){return vl.lookAt(e),vl.updateMatrix(),this.applyMatrix4(vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Lt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ti);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];jr.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(ln.min,jr.min),ln.expandByPoint(Rt),Rt.addVectors(ln.max,jr.max),ln.expandByPoint(Rt)):(ln.expandByPoint(jr.min),ln.expandByPoint(jr.max))}ln.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Rt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Rt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Rt.fromBufferAttribute(a,c),l&&(js.fromBufferAttribute(e,c),Rt.add(js)),i=Math.max(i,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new L,l[R]=new L;const c=new L,h=new L,u=new L,f=new ie,d=new ie,g=new ie,_=new L,m=new L;function p(R,y,S){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,S),f.fromBufferAttribute(s,R),d.fromBufferAttribute(s,y),g.fromBufferAttribute(s,S),h.sub(c),u.sub(c),d.sub(f),g.sub(f);const P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(P),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(P),a[R].add(_),a[y].add(_),a[S].add(_),l[R].add(m),l[y].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let R=0,y=v.length;R<y;++R){const S=v[R],P=S.start,F=S.count;for(let O=P,Y=P+F;O<Y;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const M=new L,x=new L,E=new L,A=new L;function w(R){E.fromBufferAttribute(i,R),A.copy(E);const y=a[R];M.copy(y),M.sub(E.multiplyScalar(E.dot(y))).normalize(),x.crossVectors(A,y);const P=x.dot(l[R])<0?-1:1;o.setXYZW(R,M.x,M.y,M.z,P)}for(let R=0,y=v.length;R<y;++R){const S=v[R],P=S.start,F=S.count;for(let O=P,Y=P+F;O<Y;O+=3)w(e.getX(O+0)),w(e.getX(O+1)),w(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new L,s=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new jt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ju=new Pe,os=new Ur,Yo=new ti,Ku=new L,qo=new L,jo=new L,Ko=new L,yl=new L,Zo=new L,Zu=new L,$o=new L;class ut extends ft{constructor(e=new xn,t=new Kn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Zo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(yl.fromBufferAttribute(u,e),o?Zo.addScaledVector(yl,h):Zo.addScaledVector(yl.sub(t),h))}t.add(Zo)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Yo.copy(n.boundingSphere),Yo.applyMatrix4(s),os.copy(e.ray).recast(e.near),!(Yo.containsPoint(os.origin)===!1&&(os.intersectSphere(Yo,Ku)===null||os.origin.distanceToSquared(Ku)>(e.far-e.near)**2))&&(ju.copy(s).invert(),os.copy(e.ray).applyMatrix4(ju),!(n.boundingBox!==null&&os.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,os)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=v,E=M;x<E;x+=3){const A=a.getX(x),w=a.getX(x+1),R=a.getX(x+2);i=Jo(this,p,e,n,c,h,u,A,w,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const v=a.getX(m),M=a.getX(m+1),x=a.getX(m+2);i=Jo(this,o,e,n,c,h,u,v,M,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=v,E=M;x<E;x+=3){const A=x,w=x+1,R=x+2;i=Jo(this,p,e,n,c,h,u,A,w,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const v=m,M=m+1,x=m+2;i=Jo(this,o,e,n,c,h,u,v,M,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Lg(r,e,t,n,i,s,o,a){let l;if(e.side===Jt?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Si,a),l===null)return null;$o.copy(a),$o.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo($o);return c<t.near||c>t.far?null:{distance:c,point:$o.clone(),object:r}}function Jo(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,qo),r.getVertexPosition(l,jo),r.getVertexPosition(c,Ko);const h=Lg(r,e,t,n,qo,jo,Ko,Zu);if(h){const u=new L;zn.getBarycoord(Zu,qo,jo,Ko,u),i&&(h.uv=zn.getInterpolatedAttribute(i,a,l,c,u,new ie)),s&&(h.uv1=zn.getInterpolatedAttribute(s,a,l,c,u,new ie)),o&&(h.normal=zn.getInterpolatedAttribute(o,a,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new L,materialIndex:0};zn.getNormal(qo,jo,Ko,f.normal),h.face=f,h.barycoord=u}return h}class Rs extends xn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(h,3)),this.setAttribute("uv",new Lt(u,2));function g(_,m,p,v,M,x,E,A,w,R,y){const S=x/w,P=E/R,F=x/2,O=E/2,Y=A/2,G=w+1,V=R+1;let q=0,k=0;const te=new L;for(let se=0;se<V;se++){const he=se*P-O;for(let Ae=0;Ae<G;Ae++){const Oe=Ae*S-F;te[_]=Oe*v,te[m]=he*M,te[p]=Y,c.push(te.x,te.y,te.z),te[_]=0,te[m]=0,te[p]=A>0?1:-1,h.push(te.x,te.y,te.z),u.push(Ae/w),u.push(1-se/R),q+=1}}for(let se=0;se<R;se++)for(let he=0;he<w;he++){const Ae=f+he+G*se,Oe=f+he+G*(se+1),W=f+(he+1)+G*(se+1),J=f+(he+1)+G*se;l.push(Ae,Oe,J),l.push(Oe,W,J),k+=6}a.addGroup(d,k,y),d+=k,f+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Tr(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Wt(r){const e={};for(let t=0;t<r.length;t++){const n=Tr(r[t]);for(const i in n)e[i]=n[i]}return e}function Dg(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function ep(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const Ig={clone:Tr,merge:Wt};var Ng=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ug=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xi extends Gn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ng,this.fragmentShader=Ug,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Tr(e.uniforms),this.uniformsGroups=Dg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class tp extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=vi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Di=new L,$u=new ie,Ju=new ie;class Xt extends tp{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Sr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(co*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sr*2*Math.atan(Math.tan(co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Di.x,Di.y).multiplyScalar(-e/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Di.x,Di.y).multiplyScalar(-e/Di.z)}getViewSize(e,t){return this.getViewBounds(e,$u,Ju),t.subVectors(Ju,$u)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(co*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ks=-90,Zs=1;class Og extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Xt(Ks,Zs,e,t);i.layers=this.layers,this.add(i);const s=new Xt(Ks,Zs,e,t);s.layers=this.layers,this.add(s);const o=new Xt(Ks,Zs,e,t);o.layers=this.layers,this.add(o);const a=new Xt(Ks,Zs,e,t);a.layers=this.layers,this.add(a);const l=new Xt(Ks,Zs,e,t);l.layers=this.layers,this.add(l);const c=new Xt(Ks,Zs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===vi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===La)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class np extends Pt{constructor(e,t,n,i,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:gr,super(e,t,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fg extends ws{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new np(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Rs(5,5,5),s=new Xi({name:"CubemapFromEquirect",uniforms:Tr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jt,blending:Hi});s.uniforms.tEquirect.value=t;const o=new ut(i,s),a=t.minFilter;return t.minFilter===xi&&(t.minFilter=un),new Og(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class xs extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bg={type:"move"};class Ml{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Bg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new xs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class zg extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class kg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Oc,this.updateRanges=[],this.version=0,this.uuid=Vn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Gt=new L;class Rh{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Bn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Bn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Bn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Bn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array),s=tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Rh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Qu=new L,ef=new $e,tf=new $e,Hg=new L,nf=new Pe,Qo=new L,Sl=new ti,sf=new Pe,Tl=new Ur;class Vg extends ut{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Cu,this.bindMatrix=new Pe,this.bindMatrixInverse=new Pe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ai),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Qo),this.boundingBox.expandByPoint(Qo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ti),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Qo),this.boundingSphere.expandByPoint(Qo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sl.copy(this.boundingSphere),Sl.applyMatrix4(i),e.ray.intersectsSphere(Sl)!==!1&&(sf.copy(i).invert(),Tl.copy(e.ray).applyMatrix4(sf),!(this.boundingBox!==null&&Tl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Tl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new $e,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Cu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===O_?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;ef.fromBufferAttribute(i.attributes.skinIndex,e),tf.fromBufferAttribute(i.attributes.skinWeight,e),Qu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=tf.getComponent(s);if(o!==0){const a=ef.getComponent(s);nf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Hg.copy(Qu).applyMatrix4(nf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class ip extends ft{constructor(){super(),this.isBone=!0,this.type="Bone"}}class sp extends Pt{constructor(e=null,t=1,n=1,i,s,o,a,l,c=qt,h=qt,u,f){super(null,o,a,l,c,h,i,s,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const rf=new Pe,Gg=new Pe;class Ch{constructor(e=[],t=[]){this.uuid=Vn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Pe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Pe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Gg;rf.multiplyMatrices(a,t[s]),rf.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ch(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new sp(t,e,e,An,kn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new ip),this.bones.push(o),this.boneInverses.push(new Pe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Fc extends jt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const $s=new Pe,of=new Pe,ea=[],af=new Ai,Wg=new Pe,Kr=new ut,Zr=new ti;class Xg extends ut{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Fc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Wg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ai),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,$s),af.copy(e.boundingBox).applyMatrix4($s),this.boundingBox.union(af)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ti),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,$s),Zr.copy(e.boundingSphere).applyMatrix4($s),this.boundingSphere.union(Zr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Kr.geometry=this.geometry,Kr.material=this.material,Kr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zr.copy(this.boundingSphere),Zr.applyMatrix4(n),e.ray.intersectsSphere(Zr)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,$s),of.multiplyMatrices(n,$s),Kr.matrixWorld=of,Kr.raycast(e,ea);for(let o=0,a=ea.length;o<a;o++){const l=ea[o];l.instanceId=s,l.object=this,t.push(l)}ea.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Fc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new sp(new Float32Array(i*this.count),i,this.count,Mh,kn));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const El=new L,Yg=new L,qg=new Ue;class Ni{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=El.subVectors(n,t).cross(Yg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(El),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||qg.getNormalMatrix(e),i=this.coplanarPoint(El).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const as=new ti,ta=new L;class Ph{constructor(e=new Ni,t=new Ni,n=new Ni,i=new Ni,s=new Ni,o=new Ni){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=vi){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],g=i[9],_=i[10],m=i[11],p=i[12],v=i[13],M=i[14],x=i[15];if(n[0].setComponents(l-s,f-c,m-d,x-p).normalize(),n[1].setComponents(l+s,f+c,m+d,x+p).normalize(),n[2].setComponents(l+o,f+h,m+g,x+v).normalize(),n[3].setComponents(l-o,f-h,m-g,x-v).normalize(),n[4].setComponents(l-a,f-u,m-_,x-M).normalize(),t===vi)n[5].setComponents(l+a,f+u,m+_,x+M).normalize();else if(t===La)n[5].setComponents(a,u,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(e){return as.center.set(0,0,0),as.radius=.7071067811865476,as.applyMatrix4(e.matrixWorld),this.intersectsSphere(as)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ta.x=i.normal.x>0?e.max.x:e.min.x,ta.y=i.normal.y>0?e.max.y:e.min.y,ta.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ta)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class rp extends Gn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Da=new L,Ia=new L,lf=new Pe,$r=new Ur,na=new ti,bl=new L,cf=new L;class Lh extends ft{constructor(e=new xn,t=new rp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Da.fromBufferAttribute(t,i-1),Ia.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Da.distanceTo(Ia);e.setAttribute("lineDistance",new Lt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(i),na.radius+=s,e.ray.intersectsSphere(na)===!1)return;lf.copy(i).invert(),$r.copy(e.ray).applyMatrix4(lf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=h.getX(_),v=h.getX(_+1),M=ia(this,e,$r,l,p,v,_);M&&t.push(M)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(d),p=ia(this,e,$r,l,_,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=ia(this,e,$r,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=ia(this,e,$r,l,g-1,d,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ia(r,e,t,n,i,s,o){const a=r.geometry.attributes.position;if(Da.fromBufferAttribute(a,i),Ia.fromBufferAttribute(a,s),t.distanceSqToSegment(Da,Ia,bl,cf)>n)return;bl.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(bl);if(!(c<e.near||c>e.far))return{distance:c,point:cf.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const hf=new L,uf=new L;class jg extends Lh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)hf.fromBufferAttribute(t,i),uf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+hf.distanceTo(uf);e.setAttribute("lineDistance",new Lt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Kg extends Lh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class op extends Gn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ff=new Pe,Bc=new Ur,sa=new ti,ra=new L;class Zg extends ft{constructor(e=new xn,t=new op){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sa.copy(n.boundingSphere),sa.applyMatrix4(i),sa.radius+=s,e.ray.intersectsSphere(sa)===!1)return;ff.copy(i).invert(),Bc.copy(e.ray).applyMatrix4(ff);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const m=c.getX(g);ra.fromBufferAttribute(u,m),df(ra,m,l,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,_=d;g<_;g++)ra.fromBufferAttribute(u,g),df(ra,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function df(r,e,t,n,i,s,o){const a=Bc.distanceSqToPoint(r);if(a<t){const l=new L;Bc.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class ap extends Pt{constructor(e,t,n,i,s,o,a,l,c,h=lr){if(h!==lr&&h!==Mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===lr&&(n=As),n===void 0&&h===Mr&&(n=yr),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:qt,this.minFilter=l!==void 0?l:qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ah(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ni{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new ie:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new L,i=[],s=[],o=[],a=new L,l=new Pe;for(let d=0;d<=e;d++){const g=d/e;i[d]=this.getTangentAt(g,new L)}s[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ie(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(i[d],s[d])}if(t===!0){let d=Math.acos(Ie(s[0].dot(s[e]),-1,1));d/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Dh extends ni{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ie){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class $g extends Dh{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ih(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let f=(o-s)/c-(a-s)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const oa=new L,Al=new Ih,wl=new Ih,Rl=new Ih;class Yi extends ni{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new L){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(oa.subVectors(i[0],i[1]).add(i[0]),c=oa);const u=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(oa.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=oa),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Al.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,_,m),wl.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,_,m),Rl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Al.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),wl.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Rl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Al.calc(l),wl.calc(l),Rl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new L().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function pf(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function Jg(r,e){const t=1-r;return t*t*e}function Qg(r,e){return 2*(1-r)*r*e}function e0(r,e){return r*r*e}function uo(r,e,t,n){return Jg(r,e)+Qg(r,t)+e0(r,n)}function t0(r,e){const t=1-r;return t*t*t*e}function n0(r,e){const t=1-r;return 3*t*t*r*e}function i0(r,e){return 3*(1-r)*r*r*e}function s0(r,e){return r*r*r*e}function fo(r,e,t,n,i){return t0(r,e)+n0(r,t)+i0(r,n)+s0(r,i)}class lp extends ni{constructor(e=new ie,t=new ie,n=new ie,i=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ie){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(fo(e,i.x,s.x,o.x,a.x),fo(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class r0 extends ni{constructor(e=new L,t=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new L){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(fo(e,i.x,s.x,o.x,a.x),fo(e,i.y,s.y,o.y,a.y),fo(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class cp extends ni{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class o0 extends ni{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hp extends ni{constructor(e=new ie,t=new ie,n=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ie){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(uo(e,i.x,s.x,o.x),uo(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class a0 extends ni{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(uo(e,i.x,s.x,o.x),uo(e,i.y,s.y,o.y),uo(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class up extends ni{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(pf(a,l.x,c.x,h.x,u.x),pf(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ie().fromArray(i))}return this}}var mf=Object.freeze({__proto__:null,ArcCurve:$g,CatmullRomCurve3:Yi,CubicBezierCurve:lp,CubicBezierCurve3:r0,EllipseCurve:Dh,LineCurve:cp,LineCurve3:o0,QuadraticBezierCurve:hp,QuadraticBezierCurve3:a0,SplineCurve:up});class l0 extends ni{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new mf[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new mf[i.type]().fromJSON(i))}return this}}class c0 extends l0{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new cp(this.currentPoint.clone(),new ie(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new hp(this.currentPoint.clone(),new ie(e,t),new ie(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const a=new lp(this.currentPoint.clone(),new ie(e,t),new ie(n,i),new ie(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new up(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,o,a,l),this}absellipse(e,t,n,i,s,o,a,l){const c=new Dh(e,t,n,i,s,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Nh extends xn{constructor(e=[new ie(0,-.5),new ie(.5,0),new ie(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Ie(i,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],h=1/t,u=new L,f=new ie,d=new L,g=new L,_=new L;let m=0,p=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(g)}for(let v=0;v<=t;v++){const M=n+v*h*i,x=Math.sin(M),E=Math.cos(M);for(let A=0;A<=e.length-1;A++){u.x=e[A].x*x,u.y=e[A].y,u.z=e[A].x*E,o.push(u.x,u.y,u.z),f.x=v/t,f.y=A/(e.length-1),a.push(f.x,f.y);const w=l[3*A+0]*x,R=l[3*A+1],y=l[3*A+0]*E;c.push(w,R,y)}}for(let v=0;v<t;v++)for(let M=0;M<e.length-1;M++){const x=M+v*e.length,E=x,A=x+e.length,w=x+e.length+1,R=x+1;s.push(E,A,R),s.push(w,R,A)}this.setIndex(s),this.setAttribute("position",new Lt(o,3)),this.setAttribute("uv",new Lt(a,2)),this.setAttribute("normal",new Lt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nh(e.points,e.segments,e.phiStart,e.phiLength)}}class Uh extends Nh{constructor(e=1,t=1,n=4,i=8){const s=new c0;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new Uh(e.radius,e.length,e.capSegments,e.radialSegments)}}class Oh extends xn{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new L,h=new ie;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const d=n+u/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Lt(o,3)),this.setAttribute("normal",new Lt(a,3)),this.setAttribute("uv",new Lt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Or extends xn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const v=p*f-o;for(let M=0;M<c;M++){const x=M*u-s;g.push(x,-v,0),_.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const M=v+c*p,x=v+c*(p+1),E=v+1+c*(p+1),A=v+1+c*p;d.push(M,x,A),d.push(x,E,A)}this.setIndex(d),this.setAttribute("position",new Lt(g,3)),this.setAttribute("normal",new Lt(_,3)),this.setAttribute("uv",new Lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Or(e.width,e.height,e.widthSegments,e.heightSegments)}}class Fh extends xn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new L,f=new L,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const v=[],M=p/n;let x=0;p===0&&o===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let E=0;E<=t;E++){const A=E/t;u.x=-e*Math.cos(i+A*s)*Math.sin(o+M*a),u.y=e*Math.cos(o+M*a),u.z=e*Math.sin(i+A*s)*Math.sin(o+M*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(A+x,1-M),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const M=h[p][v+1],x=h[p][v],E=h[p+1][v],A=h[p+1][v+1];(p!==0||o>0)&&d.push(M,x,A),(p!==n-1||l<Math.PI)&&d.push(x,E,A)}this.setIndex(d),this.setAttribute("position",new Lt(g,3)),this.setAttribute("normal",new Lt(_,3)),this.setAttribute("uv",new Lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class h0 extends Gn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new De(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Bh extends Gn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yd,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ii extends Bh{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ie(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class u0 extends Gn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=z_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class f0 extends Gn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function aa(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function d0(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function p0(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function _f(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function fp(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class Io{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class m0 extends Io{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pu,endingEnd:Pu}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Lu:s=e,a=2*t-n;break;case Du:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Lu:o=e,l=2*n-t;break;case Du:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,v=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,M=(-1-d)*m+(1.5+d)*_+.5*g,x=d*m-d*_;for(let E=0;E!==a;++E)s[E]=p*o[h+E]+v*o[c+E]+M*o[l+E]+x*o[u+E];return s}}class _0 extends Io{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==a;++f)s[f]=o[c+f]*u+o[l+f]*h;return s}}class g0 extends Io{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class si{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=aa(t,this.TimeBufferType),this.values=aa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:aa(e.times,Array),values:aa(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new g0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new _0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new m0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case yo:t=this.InterpolantFactoryMethodDiscrete;break;case Mo:t=this.InterpolantFactoryMethodLinear;break;case tl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yo;case this.InterpolantFactoryMethodLinear:return Mo;case this.InterpolantFactoryMethodSmooth:return tl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&d0(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===tl,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[f+g]||_!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}si.prototype.TimeBufferType=Float32Array;si.prototype.ValueBufferType=Float32Array;si.prototype.DefaultInterpolation=Mo;class Fr extends si{constructor(e,t,n){super(e,t,n)}}Fr.prototype.ValueTypeName="bool";Fr.prototype.ValueBufferType=Array;Fr.prototype.DefaultInterpolation=yo;Fr.prototype.InterpolantFactoryMethodLinear=void 0;Fr.prototype.InterpolantFactoryMethodSmooth=void 0;class dp extends si{}dp.prototype.ValueTypeName="color";class Er extends si{}Er.prototype.ValueTypeName="number";class x0 extends Io{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)Wn.slerpFlat(s,0,o,c-a,o,c,l);return s}}class br extends si{InterpolantFactoryMethodLinear(e){return new x0(this.times,this.values,this.getValueSize(),e)}}br.prototype.ValueTypeName="quaternion";br.prototype.InterpolantFactoryMethodSmooth=void 0;class Br extends si{constructor(e,t,n){super(e,t,n)}}Br.prototype.ValueTypeName="string";Br.prototype.ValueBufferType=Array;Br.prototype.DefaultInterpolation=yo;Br.prototype.InterpolantFactoryMethodLinear=void 0;Br.prototype.InterpolantFactoryMethodSmooth=void 0;class Ar extends si{}Ar.prototype.ValueTypeName="vector";class v0{constructor(e="",t=-1,n=[],i=F_){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Vn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(M0(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(si.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=p0(l);l=_f(l,1,h),c=_f(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Er(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let f=i[u];f||(i[u]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,d,g,_){if(d.length!==0){const m=[],p=[];fp(d,m,p,g),m.length!==0&&_.push(new u(f,m,p))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let v=0;v!==f[g].morphTargets.length;++v){const M=f[g];m.push(M.time),p.push(M.morphTarget===_?1:0)}i.push(new Er(".morphTargetInfluence["+_+"]",m,p))}l=d.length*o}else{const d=".bones["+t[u].name+"]";n(Ar,d+".position",f,"pos",i),n(br,d+".quaternion",f,"rot",i),n(Ar,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function y0(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Er;case"vector":case"vector2":case"vector3":case"vector4":return Ar;case"color":return dp;case"quaternion":return br;case"bool":case"boolean":return Fr;case"string":return Br}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function M0(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=y0(r.type);if(r.times===void 0){const t=[],n=[];fp(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Fi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class pp{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}}const S0=new pp;class zr{constructor(e){this.manager=e!==void 0?e:S0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}zr.DEFAULT_MATERIAL_NAME="__DEFAULT";const ui={};class T0 extends Error{constructor(e,t){super(e),this.response=t}}class mp extends zr{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Fi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ui[e]!==void 0){ui[e].push({onLoad:t,onProgress:n,onError:i});return}ui[e]=[],ui[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=ui[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){v();function v(){u.read().then(({done:M,value:x})=>{if(M)p.close();else{_+=x.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let A=0,w=h.length;A<w;A++){const R=h[A];R.onProgress&&R.onProgress(E)}p.enqueue(x),v()}},M=>{p.error(M)})}}});return new Response(m)}else throw new T0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Fi.add(e,c);const h=ui[e];delete ui[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{const h=ui[e];if(h===void 0)throw this.manager.itemError(e),c;delete ui[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class E0 extends zr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Fi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=So("img");function l(){h(),Fi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class _p extends zr{constructor(e){super(e)}load(e,t,n,i){const s=new Pt,o=new E0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Ya extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Cl=new Pe,gf=new L,xf=new L;class zh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ph,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;gf.setFromMatrixPosition(e.matrixWorld),t.position.copy(gf),xf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xf),t.updateMatrixWorld(),Cl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Cl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class b0 extends zh{constructor(){super(new Xt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Sr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class A0 extends Ya{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new b0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const vf=new Pe,Jr=new L,Pl=new L;class w0 extends zh{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ie(4,2),this._viewportCount=6,this._viewports=[new $e(2,1,1,1),new $e(0,1,1,1),new $e(3,1,1,1),new $e(1,1,1,1),new $e(3,0,1,1),new $e(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Jr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Jr),Pl.copy(n.position),Pl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Pl),n.updateMatrixWorld(),i.makeTranslation(-Jr.x,-Jr.y,-Jr.z),vf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vf)}}class R0 extends Ya{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new w0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class kh extends tp{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class C0 extends zh{constructor(){super(new kh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class P0 extends Ya{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new C0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class gp extends Ya{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class po{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class L0 extends zr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Fi.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Fi.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Fi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Fi.add(e,l),s.manager.itemStart(e)}}class D0 extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}const Hh="\\[\\]\\.:\\/",I0=new RegExp("["+Hh+"]","g"),Vh="[^"+Hh+"]",N0="[^"+Hh.replace("\\.","")+"]",U0=/((?:WC+[\/:])*)/.source.replace("WC",Vh),O0=/(WCOD+)?/.source.replace("WCOD",N0),F0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vh),B0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vh),z0=new RegExp("^"+U0+O0+F0+B0+"$"),k0=["material","materials","bones","map"];class H0{constructor(e,t,n){const i=n||nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class nt{constructor(e,t,n){this.path=t,this.parsedPath=n||nt.parseTrackName(t),this.node=nt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new nt.Composite(e,t,n):new nt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(I0,"")}static parseTrackName(e){const t=z0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);k0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=nt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}nt.Composite=H0;nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};nt.prototype.GetterByBindingType=[nt.prototype._getValue_direct,nt.prototype._getValue_array,nt.prototype._getValue_arrayElement,nt.prototype._getValue_toArray];nt.prototype.SetterByBindingTypeAndVersioning=[[nt.prototype._setValue_direct,nt.prototype._setValue_direct_setNeedsUpdate,nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_array,nt.prototype._setValue_array_setNeedsUpdate,nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_arrayElement,nt.prototype._setValue_arrayElement_setNeedsUpdate,nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_fromArray,nt.prototype._setValue_fromArray_setNeedsUpdate,nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const yf=new Pe;class V0{constructor(e,t,n=0,i=1/0){this.ray=new Ur(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new wh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return yf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yf),this}intersectObject(e,t=!0,n=[]){return zc(e,this,n,t),n.sort(Mf),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)zc(e[i],this,n,t);return n.sort(Mf),n}}function Mf(r,e){return r.distance-e.distance}function zc(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)zc(s[o],e,t,!0)}}class Sf{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ie(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ie(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class G0 extends Ls{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Tf(r,e,t,n){const i=W0(n);switch(t){case zd:return r*e;case Hd:return r*e;case Vd:return r*e*2;case Mh:return r*e/i.components*i.byteLength;case Sh:return r*e/i.components*i.byteLength;case Gd:return r*e*2/i.components*i.byteLength;case Th:return r*e*2/i.components*i.byteLength;case kd:return r*e*3/i.components*i.byteLength;case An:return r*e*4/i.components*i.byteLength;case Eh:return r*e*4/i.components*i.byteLength;case xa:case va:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ya:case Ma:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case hc:case fc:return Math.max(r,16)*Math.max(e,8)/4;case cc:case uc:return Math.max(r,8)*Math.max(e,8)/2;case dc:case pc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case mc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case _c:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case gc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case xc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case vc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case yc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Mc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Sc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Tc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Ec:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case bc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Ac:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case wc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Rc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Cc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Sa:case Pc:case Lc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Wd:case Dc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Ic:case Nc:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function W0(r){switch(r){case Ti:case Od:return{byteLength:1,components:1};case vo:case Fd:case Do:return{byteLength:2,components:1};case vh:case yh:return{byteLength:2,components:4};case As:case xh:case kn:return{byteLength:4,components:1};case Bd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function xp(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function X0(r){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const _=u[d];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var Y0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,q0=`#ifdef USE_ALPHAHASH
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
#endif`,j0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,K0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,J0=`#ifdef USE_AOMAP
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
#endif`,Q0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ex=`#ifdef USE_BATCHING
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
#endif`,tx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ix=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rx=`#ifdef USE_IRIDESCENCE
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
#endif`,ox=`#ifdef USE_BUMPMAP
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
#endif`,ax=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ux=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,px=`#if defined( USE_COLOR_ALPHA )
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
#endif`,mx=`#define PI 3.141592653589793
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
} // validated`,_x=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gx=`vec3 transformedNormal = objectNormal;
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
#endif`,xx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ex=`#ifdef USE_ENVMAP
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
#endif`,bx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ax=`#ifdef USE_ENVMAP
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
#endif`,wx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rx=`#ifdef USE_ENVMAP
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
#endif`,Cx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Px=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ix=`#ifdef USE_GRADIENTMAP
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
}`,Nx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ux=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ox=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fx=`uniform bool receiveShadow;
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
#endif`,Bx=`#ifdef USE_ENVMAP
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
#endif`,zx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gx=`PhysicalMaterial material;
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
#endif`,Wx=`struct PhysicalMaterial {
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
}`,Xx=`
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
#endif`,Yx=`#if defined( RE_IndirectDiffuse )
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
#endif`,qx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$x=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ev=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tv=`#if defined( USE_POINTS_UV )
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
#endif`,nv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ov=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,av=`#ifdef USE_MORPHTARGETS
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
#endif`,lv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,uv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pv=`#ifdef USE_NORMALMAP
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
#endif`,mv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_v=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Mv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ev=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Av=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pv=`float getShadowMask() {
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
}`,Lv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dv=`#ifdef USE_SKINNING
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
#endif`,Iv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nv=`#ifdef USE_SKINNING
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
#endif`,Uv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ov=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zv=`#ifdef USE_TRANSMISSION
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
#endif`,kv=`#ifdef USE_TRANSMISSION
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
#endif`,Hv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yv=`uniform sampler2D t2D;
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
}`,qv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Kv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$v=`#include <common>
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
}`,Jv=`#if DEPTH_PACKING == 3200
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
}`,Qv=`#define DISTANCE
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
}`,ey=`#define DISTANCE
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
}`,ty=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ny=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iy=`uniform float scale;
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
}`,sy=`uniform vec3 diffuse;
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
}`,ry=`#include <common>
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
}`,oy=`uniform vec3 diffuse;
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
}`,ay=`#define LAMBERT
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
}`,ly=`#define LAMBERT
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
}`,cy=`#define MATCAP
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
}`,hy=`#define MATCAP
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
}`,uy=`#define NORMAL
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
}`,fy=`#define NORMAL
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
}`,dy=`#define PHONG
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
}`,py=`#define PHONG
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
}`,my=`#define STANDARD
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
}`,_y=`#define STANDARD
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
}`,gy=`#define TOON
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
}`,xy=`#define TOON
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
}`,vy=`uniform float size;
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
}`,yy=`uniform vec3 diffuse;
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
}`,My=`#include <common>
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
}`,Sy=`uniform vec3 color;
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
}`,Ty=`uniform float rotation;
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
}`,Ey=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:Y0,alphahash_pars_fragment:q0,alphamap_fragment:j0,alphamap_pars_fragment:K0,alphatest_fragment:Z0,alphatest_pars_fragment:$0,aomap_fragment:J0,aomap_pars_fragment:Q0,batching_pars_vertex:ex,batching_vertex:tx,begin_vertex:nx,beginnormal_vertex:ix,bsdfs:sx,iridescence_fragment:rx,bumpmap_pars_fragment:ox,clipping_planes_fragment:ax,clipping_planes_pars_fragment:lx,clipping_planes_pars_vertex:cx,clipping_planes_vertex:hx,color_fragment:ux,color_pars_fragment:fx,color_pars_vertex:dx,color_vertex:px,common:mx,cube_uv_reflection_fragment:_x,defaultnormal_vertex:gx,displacementmap_pars_vertex:xx,displacementmap_vertex:vx,emissivemap_fragment:yx,emissivemap_pars_fragment:Mx,colorspace_fragment:Sx,colorspace_pars_fragment:Tx,envmap_fragment:Ex,envmap_common_pars_fragment:bx,envmap_pars_fragment:Ax,envmap_pars_vertex:wx,envmap_physical_pars_fragment:Bx,envmap_vertex:Rx,fog_vertex:Cx,fog_pars_vertex:Px,fog_fragment:Lx,fog_pars_fragment:Dx,gradientmap_pars_fragment:Ix,lightmap_pars_fragment:Nx,lights_lambert_fragment:Ux,lights_lambert_pars_fragment:Ox,lights_pars_begin:Fx,lights_toon_fragment:zx,lights_toon_pars_fragment:kx,lights_phong_fragment:Hx,lights_phong_pars_fragment:Vx,lights_physical_fragment:Gx,lights_physical_pars_fragment:Wx,lights_fragment_begin:Xx,lights_fragment_maps:Yx,lights_fragment_end:qx,logdepthbuf_fragment:jx,logdepthbuf_pars_fragment:Kx,logdepthbuf_pars_vertex:Zx,logdepthbuf_vertex:$x,map_fragment:Jx,map_pars_fragment:Qx,map_particle_fragment:ev,map_particle_pars_fragment:tv,metalnessmap_fragment:nv,metalnessmap_pars_fragment:iv,morphinstance_vertex:sv,morphcolor_vertex:rv,morphnormal_vertex:ov,morphtarget_pars_vertex:av,morphtarget_vertex:lv,normal_fragment_begin:cv,normal_fragment_maps:hv,normal_pars_fragment:uv,normal_pars_vertex:fv,normal_vertex:dv,normalmap_pars_fragment:pv,clearcoat_normal_fragment_begin:mv,clearcoat_normal_fragment_maps:_v,clearcoat_pars_fragment:gv,iridescence_pars_fragment:xv,opaque_fragment:vv,packing:yv,premultiplied_alpha_fragment:Mv,project_vertex:Sv,dithering_fragment:Tv,dithering_pars_fragment:Ev,roughnessmap_fragment:bv,roughnessmap_pars_fragment:Av,shadowmap_pars_fragment:wv,shadowmap_pars_vertex:Rv,shadowmap_vertex:Cv,shadowmask_pars_fragment:Pv,skinbase_vertex:Lv,skinning_pars_vertex:Dv,skinning_vertex:Iv,skinnormal_vertex:Nv,specularmap_fragment:Uv,specularmap_pars_fragment:Ov,tonemapping_fragment:Fv,tonemapping_pars_fragment:Bv,transmission_fragment:zv,transmission_pars_fragment:kv,uv_pars_fragment:Hv,uv_pars_vertex:Vv,uv_vertex:Gv,worldpos_vertex:Wv,background_vert:Xv,background_frag:Yv,backgroundCube_vert:qv,backgroundCube_frag:jv,cube_vert:Kv,cube_frag:Zv,depth_vert:$v,depth_frag:Jv,distanceRGBA_vert:Qv,distanceRGBA_frag:ey,equirect_vert:ty,equirect_frag:ny,linedashed_vert:iy,linedashed_frag:sy,meshbasic_vert:ry,meshbasic_frag:oy,meshlambert_vert:ay,meshlambert_frag:ly,meshmatcap_vert:cy,meshmatcap_frag:hy,meshnormal_vert:uy,meshnormal_frag:fy,meshphong_vert:dy,meshphong_frag:py,meshphysical_vert:my,meshphysical_frag:_y,meshtoon_vert:gy,meshtoon_frag:xy,points_vert:vy,points_frag:yy,shadow_vert:My,shadow_frag:Sy,sprite_vert:Ty,sprite_frag:Ey},ne={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},qn={basic:{uniforms:Wt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Wt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new De(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Wt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Wt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Wt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new De(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Wt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Wt([ne.points,ne.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Wt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Wt([ne.common,ne.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Wt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Wt([ne.sprite,ne.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Wt([ne.common,ne.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Wt([ne.lights,ne.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};qn.physical={uniforms:Wt([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const la={r:0,b:0,g:0},ls=new Qn,by=new Pe;function Ay(r,e,t,n,i,s,o){const a=new De(0);let l=s===!0?0:1,c,h,u=null,f=0,d=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?t:e).get(x)),x}function _(M){let x=!1;const E=g(M);E===null?p(a,l):E&&E.isColor&&(p(E,1),x=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(M,x){const E=g(x);E&&(E.isCubeTexture||E.mapping===Xa)?(h===void 0&&(h=new ut(new Rs(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:Tr(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ls.copy(x.backgroundRotation),ls.x*=-1,ls.y*=-1,ls.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(by.makeRotationFromEuler(ls)),h.material.toneMapped=Xe.getTransfer(E.colorSpace)!==it,(u!==E||f!==E.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,u=E,f=E.version,d=r.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new ut(new Or(2,2),new Xi({name:"BackgroundMaterial",uniforms:Tr(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Xe.getTransfer(E.colorSpace)!==it,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||f!==E.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=E,f=E.version,d=r.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,x){M.getRGB(la,ep(r)),n.buffers.color.setClear(la.r,la.g,la.b,x,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:_,addToRenderList:m,dispose:v}}function wy(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,o=!1;function a(S,P,F,O,Y){let G=!1;const V=u(O,F,P);s!==V&&(s=V,c(s.object)),G=d(S,O,F,Y),G&&g(S,O,F,Y),Y!==null&&e.update(Y,r.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,x(S,P,F,O),Y!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return r.createVertexArray()}function c(S){return r.bindVertexArray(S)}function h(S){return r.deleteVertexArray(S)}function u(S,P,F){const O=F.wireframe===!0;let Y=n[S.id];Y===void 0&&(Y={},n[S.id]=Y);let G=Y[P.id];G===void 0&&(G={},Y[P.id]=G);let V=G[O];return V===void 0&&(V=f(l()),G[O]=V),V}function f(S){const P=[],F=[],O=[];for(let Y=0;Y<t;Y++)P[Y]=0,F[Y]=0,O[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:O,object:S,attributes:{},index:null}}function d(S,P,F,O){const Y=s.attributes,G=P.attributes;let V=0;const q=F.getAttributes();for(const k in q)if(q[k].location>=0){const se=Y[k];let he=G[k];if(he===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(he=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(he=S.instanceColor)),se===void 0||se.attribute!==he||he&&se.data!==he.data)return!0;V++}return s.attributesNum!==V||s.index!==O}function g(S,P,F,O){const Y={},G=P.attributes;let V=0;const q=F.getAttributes();for(const k in q)if(q[k].location>=0){let se=G[k];se===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(se=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(se=S.instanceColor));const he={};he.attribute=se,se&&se.data&&(he.data=se.data),Y[k]=he,V++}s.attributes=Y,s.attributesNum=V,s.index=O}function _(){const S=s.newAttributes;for(let P=0,F=S.length;P<F;P++)S[P]=0}function m(S){p(S,0)}function p(S,P){const F=s.newAttributes,O=s.enabledAttributes,Y=s.attributeDivisors;F[S]=1,O[S]===0&&(r.enableVertexAttribArray(S),O[S]=1),Y[S]!==P&&(r.vertexAttribDivisor(S,P),Y[S]=P)}function v(){const S=s.newAttributes,P=s.enabledAttributes;for(let F=0,O=P.length;F<O;F++)P[F]!==S[F]&&(r.disableVertexAttribArray(F),P[F]=0)}function M(S,P,F,O,Y,G,V){V===!0?r.vertexAttribIPointer(S,P,F,Y,G):r.vertexAttribPointer(S,P,F,O,Y,G)}function x(S,P,F,O){_();const Y=O.attributes,G=F.getAttributes(),V=P.defaultAttributeValues;for(const q in G){const k=G[q];if(k.location>=0){let te=Y[q];if(te===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(te=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(te=S.instanceColor)),te!==void 0){const se=te.normalized,he=te.itemSize,Ae=e.get(te);if(Ae===void 0)continue;const Oe=Ae.buffer,W=Ae.type,J=Ae.bytesPerElement,ge=W===r.INT||W===r.UNSIGNED_INT||te.gpuType===xh;if(te.isInterleavedBufferAttribute){const re=te.data,be=re.stride,Ye=te.offset;if(re.isInstancedInterleavedBuffer){for(let xe=0;xe<k.locationSize;xe++)p(k.location+xe,re.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let xe=0;xe<k.locationSize;xe++)m(k.location+xe);r.bindBuffer(r.ARRAY_BUFFER,Oe);for(let xe=0;xe<k.locationSize;xe++)M(k.location+xe,he/k.locationSize,W,se,be*J,(Ye+he/k.locationSize*xe)*J,ge)}else{if(te.isInstancedBufferAttribute){for(let re=0;re<k.locationSize;re++)p(k.location+re,te.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let re=0;re<k.locationSize;re++)m(k.location+re);r.bindBuffer(r.ARRAY_BUFFER,Oe);for(let re=0;re<k.locationSize;re++)M(k.location+re,he/k.locationSize,W,se,he*J,he/k.locationSize*re*J,ge)}}else if(V!==void 0){const se=V[q];if(se!==void 0)switch(se.length){case 2:r.vertexAttrib2fv(k.location,se);break;case 3:r.vertexAttrib3fv(k.location,se);break;case 4:r.vertexAttrib4fv(k.location,se);break;default:r.vertexAttrib1fv(k.location,se)}}}}v()}function E(){R();for(const S in n){const P=n[S];for(const F in P){const O=P[F];for(const Y in O)h(O[Y].object),delete O[Y];delete P[F]}delete n[S]}}function A(S){if(n[S.id]===void 0)return;const P=n[S.id];for(const F in P){const O=P[F];for(const Y in O)h(O[Y].object),delete O[Y];delete P[F]}delete n[S.id]}function w(S){for(const P in n){const F=n[P];if(F[S.id]===void 0)continue;const O=F[S.id];for(const Y in O)h(O[Y].object),delete O[Y];delete F[S.id]}}function R(){y(),o=!0,s!==i&&(s=i,c(s.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:y,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function Ry(r,e,t){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Cy(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==An&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const R=w===Do&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Ti&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==kn&&!R)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:E,maxSamples:A}}function Py(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Ni,a=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{const v=s?0:n,M=v*4;let x=p.clippingState||null;l.value=x,x=h(g,f,M,d);for(let E=0;E!==M;++E)x[E]=t[E];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,x=d;M!==_;++M,x+=4)o.copy(u[M]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Ly(r){let e=new WeakMap;function t(o,a){return a===ac?o.mapping=gr:a===lc&&(o.mapping=xr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ac||a===lc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Fg(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const nr=4,Ef=[.125,.215,.35,.446,.526,.582],gs=20,Ll=new kh,bf=new De;let Dl=null,Il=0,Nl=0,Ul=!1;const ps=(1+Math.sqrt(5))/2,Js=1/ps,Af=[new L(-ps,Js,0),new L(ps,Js,0),new L(-Js,0,ps),new L(Js,0,ps),new L(0,ps,-Js),new L(0,ps,Js),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Dy=new L;class wf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=Dy}=s;Dl=this._renderer.getRenderTarget(),Il=this._renderer.getActiveCubeFace(),Nl=this._renderer.getActiveMipmapLevel(),Ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Dl,Il,Nl),this._renderer.xr.enabled=Ul,e.scissorTest=!1,ca(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gr||e.mapping===xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dl=this._renderer.getRenderTarget(),Il=this._renderer.getActiveCubeFace(),Nl=this._renderer.getActiveMipmapLevel(),Ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:Do,format:An,colorSpace:Kt,depthBuffer:!1},i=Rf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rf(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Iy(s)),this._blurMaterial=Ny(s,e,t)}return i}_compileMaterial(e){const t=new ut(this._lodPlanes[0],e);this._renderer.compile(t,Ll)}_sceneToCubeUV(e,t,n,i,s){const l=new Xt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(bf),u.toneMapping=Vi,u.autoClear=!1;const g=new Kn({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),_=new ut(new Rs,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(bf),m=!0);for(let v=0;v<6;v++){const M=v%3;M===0?(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[v],s.y,s.z)):M===1?(l.up.set(0,0,c[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[v],s.z)):(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[v]));const x=this._cubeSize;ca(i,M*x,v>2?x:0,x,x),u.setRenderTarget(i),m&&u.render(_,l),u.render(e,l)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===gr||e.mapping===xr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cf());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new ut(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ca(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ll)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Af[(i-s-1)%Af.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ut(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*gs-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):gs;m>gs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gs}`);const p=[];let v=0;for(let w=0;w<gs;++w){const R=w/_,y=Math.exp(-R*R/2);p.push(y),w===0?v+=y:w<m&&(v+=2*y)}for(let w=0;w<p.length;w++)p[w]=p[w]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-n;const x=this._sizeLods[i],E=3*x*(i>M-nr?i-M+nr:0),A=4*(this._cubeSize-x);ca(t,E,A,3*x,2*x),l.setRenderTarget(t),l.render(u,Ll)}}function Iy(r){const e=[],t=[],n=[];let i=r;const s=r-nr+1+Ef.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-nr?l=Ef[o-r+nr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*d),M=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let A=0;A<d;A++){const w=A%3*2/3-1,R=A>2?0:-1,y=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];v.set(y,_*g*A),M.set(f,m*g*A);const S=[A,A,A,A,A,A];x.set(S,p*g*A)}const E=new xn;E.setAttribute("position",new jt(v,_)),E.setAttribute("uv",new jt(M,m)),E.setAttribute("faceIndex",new jt(x,p)),e.push(E),i>nr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Rf(r,e,t){const n=new ws(r,e,t);return n.texture.mapping=Xa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ca(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Ny(r,e,t){const n=new Float32Array(gs),i=new L(0,1,0);return new Xi({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Gh(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Cf(){return new Xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gh(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Pf(){return new Xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Gh(){return`

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
	`}function Uy(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ac||l===lc,h=l===gr||l===xr;if(c||h){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new wf(r)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&i(d)?(t===null&&(t=new wf(r)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Oy(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ds("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Fy(r,e,t,n){const i={},s=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const d in f)e.update(f[d],r.ARRAY_BUFFER)}function c(u){const f=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const v=d.array;_=d.version;for(let M=0,x=v.length;M<x;M+=3){const E=v[M+0],A=v[M+1],w=v[M+2];f.push(E,A,A,w,w,E)}}else if(g!==void 0){const v=g.array;_=g.version;for(let M=0,x=v.length/3-1;M<x;M+=3){const E=M+0,A=M+1,w=M+2;f.push(E,A,A,w,w,E)}}else return;const m=new(Kd(f)?Qd:Jd)(f,1);m.version=_;const p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){const f=s.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function By(r,e,t){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*o),t.update(d,n,1)}function c(f,d,g){g!==0&&(r.drawElementsInstanced(n,d,s,f*o,g),t.update(d,n,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function u(f,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=d[v]*_[v];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function zy(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ky(r,e,t){const n=new WeakMap,i=new $e;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let S=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var d=S;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let E=a.attributes.position.count*x,A=1;E>e.maxTextureSize&&(A=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const w=new Float32Array(E*A*4*u),R=new Zd(w,E,A,u);R.type=kn,R.needsUpdate=!0;const y=x*4;for(let P=0;P<u;P++){const F=p[P],O=v[P],Y=M[P],G=E*A*4*P;for(let V=0;V<F.count;V++){const q=V*y;g===!0&&(i.fromBufferAttribute(F,V),w[G+q+0]=i.x,w[G+q+1]=i.y,w[G+q+2]=i.z,w[G+q+3]=0),_===!0&&(i.fromBufferAttribute(O,V),w[G+q+4]=i.x,w[G+q+5]=i.y,w[G+q+6]=i.z,w[G+q+7]=0),m===!0&&(i.fromBufferAttribute(Y,V),w[G+q+8]=i.x,w[G+q+9]=i.y,w[G+q+10]=i.z,w[G+q+11]=Y.itemSize===4?i.w:1)}}f={count:u,texture:R,size:new ie(E,A)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function Hy(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const vp=new Pt,Lf=new ap(1,1),yp=new Zd,Mp=new yg,Sp=new np,Df=[],If=[],Nf=new Float32Array(16),Uf=new Float32Array(9),Of=new Float32Array(4);function kr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Df[i];if(s===void 0&&(s=new Float32Array(i),Df[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function At(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function wt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function qa(r,e){let t=If[e];t===void 0&&(t=new Int32Array(e),If[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Vy(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Gy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;r.uniform2fv(this.addr,e),wt(t,e)}}function Wy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;r.uniform3fv(this.addr,e),wt(t,e)}}function Xy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;r.uniform4fv(this.addr,e),wt(t,e)}}function Yy(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(At(t,n))return;Of.set(n),r.uniformMatrix2fv(this.addr,!1,Of),wt(t,n)}}function qy(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(At(t,n))return;Uf.set(n),r.uniformMatrix3fv(this.addr,!1,Uf),wt(t,n)}}function jy(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(At(t,n))return;Nf.set(n),r.uniformMatrix4fv(this.addr,!1,Nf),wt(t,n)}}function Ky(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Zy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;r.uniform2iv(this.addr,e),wt(t,e)}}function $y(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;r.uniform3iv(this.addr,e),wt(t,e)}}function Jy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;r.uniform4iv(this.addr,e),wt(t,e)}}function Qy(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function eM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;r.uniform2uiv(this.addr,e),wt(t,e)}}function tM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;r.uniform3uiv(this.addr,e),wt(t,e)}}function nM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;r.uniform4uiv(this.addr,e),wt(t,e)}}function iM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Lf.compareFunction=qd,s=Lf):s=vp,t.setTexture2D(e||s,i)}function sM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Mp,i)}function rM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Sp,i)}function oM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||yp,i)}function aM(r){switch(r){case 5126:return Vy;case 35664:return Gy;case 35665:return Wy;case 35666:return Xy;case 35674:return Yy;case 35675:return qy;case 35676:return jy;case 5124:case 35670:return Ky;case 35667:case 35671:return Zy;case 35668:case 35672:return $y;case 35669:case 35673:return Jy;case 5125:return Qy;case 36294:return eM;case 36295:return tM;case 36296:return nM;case 35678:case 36198:case 36298:case 36306:case 35682:return iM;case 35679:case 36299:case 36307:return sM;case 35680:case 36300:case 36308:case 36293:return rM;case 36289:case 36303:case 36311:case 36292:return oM}}function lM(r,e){r.uniform1fv(this.addr,e)}function cM(r,e){const t=kr(e,this.size,2);r.uniform2fv(this.addr,t)}function hM(r,e){const t=kr(e,this.size,3);r.uniform3fv(this.addr,t)}function uM(r,e){const t=kr(e,this.size,4);r.uniform4fv(this.addr,t)}function fM(r,e){const t=kr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function dM(r,e){const t=kr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function pM(r,e){const t=kr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function mM(r,e){r.uniform1iv(this.addr,e)}function _M(r,e){r.uniform2iv(this.addr,e)}function gM(r,e){r.uniform3iv(this.addr,e)}function xM(r,e){r.uniform4iv(this.addr,e)}function vM(r,e){r.uniform1uiv(this.addr,e)}function yM(r,e){r.uniform2uiv(this.addr,e)}function MM(r,e){r.uniform3uiv(this.addr,e)}function SM(r,e){r.uniform4uiv(this.addr,e)}function TM(r,e,t){const n=this.cache,i=e.length,s=qa(t,i);At(n,s)||(r.uniform1iv(this.addr,s),wt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||vp,s[o])}function EM(r,e,t){const n=this.cache,i=e.length,s=qa(t,i);At(n,s)||(r.uniform1iv(this.addr,s),wt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Mp,s[o])}function bM(r,e,t){const n=this.cache,i=e.length,s=qa(t,i);At(n,s)||(r.uniform1iv(this.addr,s),wt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Sp,s[o])}function AM(r,e,t){const n=this.cache,i=e.length,s=qa(t,i);At(n,s)||(r.uniform1iv(this.addr,s),wt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||yp,s[o])}function wM(r){switch(r){case 5126:return lM;case 35664:return cM;case 35665:return hM;case 35666:return uM;case 35674:return fM;case 35675:return dM;case 35676:return pM;case 5124:case 35670:return mM;case 35667:case 35671:return _M;case 35668:case 35672:return gM;case 35669:case 35673:return xM;case 5125:return vM;case 36294:return yM;case 36295:return MM;case 36296:return SM;case 35678:case 36198:case 36298:case 36306:case 35682:return TM;case 35679:case 36299:case 36307:return EM;case 35680:case 36300:case 36308:case 36293:return bM;case 36289:case 36303:case 36311:case 36292:return AM}}class RM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=aM(t.type)}}class CM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wM(t.type)}}class PM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Ol=/(\w+)(\])?(\[|\.)?/g;function Ff(r,e){r.seq.push(e),r.map[e.id]=e}function LM(r,e,t){const n=r.name,i=n.length;for(Ol.lastIndex=0;;){const s=Ol.exec(n),o=Ol.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Ff(t,c===void 0?new RM(a,r,e):new CM(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new PM(a),Ff(t,u)),t=u}}}class Ta{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);LM(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Bf(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const DM=37297;let IM=0;function NM(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const zf=new Ue;function UM(r){Xe._getMatrix(zf,Xe.workingColorSpace,r);const e=`mat3( ${zf.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(r)){case Pa:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function kf(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+NM(r.getShaderSource(e),o)}else return i}function OM(r,e){const t=UM(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function FM(r,e){let t;switch(e){case C_:t="Linear";break;case P_:t="Reinhard";break;case L_:t="Cineon";break;case D_:t="ACESFilmic";break;case N_:t="AgX";break;case U_:t="Neutral";break;case I_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ha=new L;function BM(){Xe.getLuminanceCoefficients(ha);const r=ha.x.toFixed(4),e=ha.y.toFixed(4),t=ha.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(so).join(`
`)}function kM(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function HM(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function so(r){return r!==""}function Hf(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vf(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const VM=/^[ \t]*#include +<([\w\d./]+)>/gm;function kc(r){return r.replace(VM,WM)}const GM=new Map;function WM(r,e){let t=Be[e];if(t===void 0){const n=GM.get(e);if(n!==void 0)t=Be[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return kc(t)}const XM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gf(r){return r.replace(XM,YM)}function YM(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Wf(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qM(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Dd?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===l_?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===fi&&(e="SHADOWMAP_TYPE_VSM"),e}function jM(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case gr:case xr:e="ENVMAP_TYPE_CUBE";break;case Xa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function KM(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case xr:e="ENVMAP_MODE_REFRACTION";break}return e}function ZM(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Id:e="ENVMAP_BLENDING_MULTIPLY";break;case w_:e="ENVMAP_BLENDING_MIX";break;case R_:e="ENVMAP_BLENDING_ADD";break}return e}function $M(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function JM(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=qM(t),c=jM(t),h=KM(t),u=ZM(t),f=$M(t),d=zM(t),g=kM(s),_=i.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(so).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(so).join(`
`),p.length>0&&(p+=`
`)):(m=[Wf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(so).join(`
`),p=[Wf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vi?"#define TONE_MAPPING":"",t.toneMapping!==Vi?Be.tonemapping_pars_fragment:"",t.toneMapping!==Vi?FM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,OM("linearToOutputTexel",t.outputColorSpace),BM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(so).join(`
`)),o=kc(o),o=Hf(o,t),o=Vf(o,t),a=kc(a),a=Hf(a,t),a=Vf(a,t),o=Gf(o),a=Gf(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Nu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=v+m+o,x=v+p+a,E=Bf(i,i.VERTEX_SHADER,M),A=Bf(i,i.FRAGMENT_SHADER,x);i.attachShader(_,E),i.attachShader(_,A),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(P){if(r.debug.checkShaderErrors){const F=i.getProgramInfoLog(_).trim(),O=i.getShaderInfoLog(E).trim(),Y=i.getShaderInfoLog(A).trim();let G=!0,V=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(G=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,E,A);else{const q=kf(i,E,"vertex"),k=kf(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+F+`
`+q+`
`+k)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(O===""||Y==="")&&(V=!1);V&&(P.diagnostics={runnable:G,programLog:F,vertexShader:{log:O,prefix:m},fragmentShader:{log:Y,prefix:p}})}i.deleteShader(E),i.deleteShader(A),R=new Ta(i,_),y=HM(i,_)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(_,DM)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=IM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=A,this}let QM=0;class eS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new tS(e),t.set(e,n)),n}}class tS{constructor(e){this.id=QM++,this.code=e,this.usedTimes=0}}function nS(r,e,t,n,i,s,o){const a=new wh,l=new eS,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,S,P,F,O){const Y=F.fog,G=O.geometry,V=y.isMeshStandardMaterial?F.environment:null,q=(y.isMeshStandardMaterial?t:e).get(y.envMap||V),k=q&&q.mapping===Xa?q.image.height:null,te=g[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const se=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,he=se!==void 0?se.length:0;let Ae=0;G.morphAttributes.position!==void 0&&(Ae=1),G.morphAttributes.normal!==void 0&&(Ae=2),G.morphAttributes.color!==void 0&&(Ae=3);let Oe,W,J,ge;if(te){const et=qn[te];Oe=et.vertexShader,W=et.fragmentShader}else Oe=y.vertexShader,W=y.fragmentShader,l.update(y),J=l.getVertexShaderID(y),ge=l.getFragmentShaderID(y);const re=r.getRenderTarget(),be=r.state.buffers.depth.getReversed(),Ye=O.isInstancedMesh===!0,xe=O.isBatchedMesh===!0,vt=!!y.map,dt=!!y.matcap,He=!!q,D=!!y.aoMap,vn=!!y.lightMap,Ve=!!y.bumpMap,Ge=!!y.normalMap,Me=!!y.displacementMap,at=!!y.emissiveMap,ye=!!y.metalnessMap,C=!!y.roughnessMap,T=y.anisotropy>0,B=y.clearcoat>0,K=y.dispersion>0,$=y.iridescence>0,j=y.sheen>0,ve=y.transmission>0,le=T&&!!y.anisotropyMap,de=B&&!!y.clearcoatMap,qe=B&&!!y.clearcoatNormalMap,ee=B&&!!y.clearcoatRoughnessMap,pe=$&&!!y.iridescenceMap,we=$&&!!y.iridescenceThicknessMap,Re=j&&!!y.sheenColorMap,me=j&&!!y.sheenRoughnessMap,We=!!y.specularMap,Fe=!!y.specularColorMap,ot=!!y.specularIntensityMap,I=ve&&!!y.transmissionMap,oe=ve&&!!y.thicknessMap,X=!!y.gradientMap,Z=!!y.alphaMap,ue=y.alphaTest>0,ce=!!y.alphaHash,Ne=!!y.extensions;let _t=Vi;y.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(_t=r.toneMapping);const Ot={shaderID:te,shaderType:y.type,shaderName:y.name,vertexShader:Oe,fragmentShader:W,defines:y.defines,customVertexShaderID:J,customFragmentShaderID:ge,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:xe,batchingColor:xe&&O._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&O.instanceColor!==null,instancingMorph:Ye&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:re===null?r.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Kt,alphaToCoverage:!!y.alphaToCoverage,map:vt,matcap:dt,envMap:He,envMapMode:He&&q.mapping,envMapCubeUVHeight:k,aoMap:D,lightMap:vn,bumpMap:Ve,normalMap:Ge,displacementMap:f&&Me,emissiveMap:at,normalMapObjectSpace:Ge&&y.normalMapType===H_,normalMapTangentSpace:Ge&&y.normalMapType===Yd,metalnessMap:ye,roughnessMap:C,anisotropy:T,anisotropyMap:le,clearcoat:B,clearcoatMap:de,clearcoatNormalMap:qe,clearcoatRoughnessMap:ee,dispersion:K,iridescence:$,iridescenceMap:pe,iridescenceThicknessMap:we,sheen:j,sheenColorMap:Re,sheenRoughnessMap:me,specularMap:We,specularColorMap:Fe,specularIntensityMap:ot,transmission:ve,transmissionMap:I,thicknessMap:oe,gradientMap:X,opaque:y.transparent===!1&&y.blending===ar&&y.alphaToCoverage===!1,alphaMap:Z,alphaTest:ue,alphaHash:ce,combine:y.combine,mapUv:vt&&_(y.map.channel),aoMapUv:D&&_(y.aoMap.channel),lightMapUv:vn&&_(y.lightMap.channel),bumpMapUv:Ve&&_(y.bumpMap.channel),normalMapUv:Ge&&_(y.normalMap.channel),displacementMapUv:Me&&_(y.displacementMap.channel),emissiveMapUv:at&&_(y.emissiveMap.channel),metalnessMapUv:ye&&_(y.metalnessMap.channel),roughnessMapUv:C&&_(y.roughnessMap.channel),anisotropyMapUv:le&&_(y.anisotropyMap.channel),clearcoatMapUv:de&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:qe&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:we&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:me&&_(y.sheenRoughnessMap.channel),specularMapUv:We&&_(y.specularMap.channel),specularColorMapUv:Fe&&_(y.specularColorMap.channel),specularIntensityMapUv:ot&&_(y.specularIntensityMap.channel),transmissionMapUv:I&&_(y.transmissionMap.channel),thicknessMapUv:oe&&_(y.thicknessMap.channel),alphaMapUv:Z&&_(y.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Ge||T),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!G.attributes.uv&&(vt||Z),fog:!!Y,useFog:y.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:be,skinning:O.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Ae,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:_t,decodeVideoTexture:vt&&y.map.isVideoTexture===!0&&Xe.getTransfer(y.map.colorSpace)===it,decodeVideoTextureEmissive:at&&y.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(y.emissiveMap.colorSpace)===it,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Fn,flipSided:y.side===Jt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ne&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&y.extensions.multiDraw===!0||xe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ot.vertexUv1s=c.has(1),Ot.vertexUv2s=c.has(2),Ot.vertexUv3s=c.has(3),c.clear(),Ot}function p(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)S.push(P),S.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(v(S,y),M(S,y),S.push(r.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function v(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function M(y,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),y.push(a.mask)}function x(y){const S=g[y.type];let P;if(S){const F=qn[S];P=Ig.clone(F.uniforms)}else P=y.uniforms;return P}function E(y,S){let P;for(let F=0,O=h.length;F<O;F++){const Y=h[F];if(Y.cacheKey===S){P=Y,++P.usedTimes;break}}return P===void 0&&(P=new JM(r,S,y,s),h.push(P)),P}function A(y){if(--y.usedTimes===0){const S=h.indexOf(y);h[S]=h[h.length-1],h.pop(),y.destroy()}}function w(y){l.remove(y)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:E,releaseProgram:A,releaseShaderCache:w,programs:h,dispose:R}}function iS(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function sS(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Xf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Yf(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u,f,d,g,_,m){let p=r[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},r[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function a(u,f,d,g,_,m){const p=o(u,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(u,f,d,g,_,m){const p=o(u,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||sS),n.length>1&&n.sort(f||Xf),i.length>1&&i.sort(f||Xf)}function h(){for(let u=e,f=r.length;u<f;u++){const d=r[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function rS(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Yf,r.set(n,[o])):i>=s.length?(o=new Yf,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function oS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new De};break;case"SpotLight":t={position:new L,direction:new L,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new L,halfWidth:new L,halfHeight:new L};break}return r[e.id]=t,t}}}function aS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let lS=0;function cS(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function hS(r){const e=new oS,t=aS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const i=new L,s=new Pe,o=new Pe;function a(c){let h=0,u=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,v=0,M=0,x=0,E=0,A=0,w=0;c.sort(cS);for(let y=0,S=c.length;y<S;y++){const P=c[y],F=P.color,O=P.intensity,Y=P.distance,G=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=F.r*O,u+=F.g*O,f+=F.b*O;else if(P.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(P.sh.coefficients[V],O);w++}else if(P.isDirectionalLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const q=P.shadow,k=t.get(P);k.shadowIntensity=q.intensity,k.shadowBias=q.bias,k.shadowNormalBias=q.normalBias,k.shadowRadius=q.radius,k.shadowMapSize=q.mapSize,n.directionalShadow[d]=k,n.directionalShadowMap[d]=G,n.directionalShadowMatrix[d]=P.shadow.matrix,v++}n.directional[d]=V,d++}else if(P.isSpotLight){const V=e.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(F).multiplyScalar(O),V.distance=Y,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,n.spot[_]=V;const q=P.shadow;if(P.map&&(n.spotLightMap[E]=P.map,E++,q.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[_]=q.matrix,P.castShadow){const k=t.get(P);k.shadowIntensity=q.intensity,k.shadowBias=q.bias,k.shadowNormalBias=q.normalBias,k.shadowRadius=q.radius,k.shadowMapSize=q.mapSize,n.spotShadow[_]=k,n.spotShadowMap[_]=G,x++}_++}else if(P.isRectAreaLight){const V=e.get(P);V.color.copy(F).multiplyScalar(O),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=V,m++}else if(P.isPointLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){const q=P.shadow,k=t.get(P);k.shadowIntensity=q.intensity,k.shadowBias=q.bias,k.shadowNormalBias=q.normalBias,k.shadowRadius=q.radius,k.shadowMapSize=q.mapSize,k.shadowCameraNear=q.camera.near,k.shadowCameraFar=q.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=P.shadow.matrix,M++}n.point[g]=V,g++}else if(P.isHemisphereLight){const V=e.get(P);V.skyColor.copy(P.color).multiplyScalar(O),V.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[p]=V,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ne.LTC_FLOAT_1,n.rectAreaLTC2=ne.LTC_FLOAT_2):(n.rectAreaLTC1=ne.LTC_HALF_1,n.rectAreaLTC2=ne.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==d||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==v||R.numPointShadows!==M||R.numSpotShadows!==x||R.numSpotMaps!==E||R.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+E-A,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,R.directionalLength=d,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=v,R.numPointShadows=M,R.numSpotShadows=x,R.numSpotMaps=E,R.numLightProbes=w,n.version=lS++)}function l(c,h){let u=0,f=0,d=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){const M=c[p];if(M.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(M.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function qf(r){const e=new hS(r),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function uS(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new qf(r),e.set(i,[a])):s>=o.length?(a=new qf(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const fS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dS=`uniform sampler2D shadow_pass;
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
}`;function pS(r,e,t){let n=new Ph;const i=new ie,s=new ie,o=new $e,a=new u0({depthPacking:k_}),l=new f0,c={},h=t.maxTextureSize,u={[Si]:Jt,[Jt]:Si,[Fn]:Fn},f=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:fS,fragmentShader:dS}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new xn;g.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ut(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dd;let p=this.type;this.render=function(A,w,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const y=r.getRenderTarget(),S=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),F=r.state;F.setBlending(Hi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const O=p!==fi&&this.type===fi,Y=p===fi&&this.type!==fi;for(let G=0,V=A.length;G<V;G++){const q=A[G],k=q.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const te=k.getFrameExtents();if(i.multiply(te),s.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/te.x),i.x=s.x*te.x,k.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/te.y),i.y=s.y*te.y,k.mapSize.y=s.y)),k.map===null||O===!0||Y===!0){const he=this.type!==fi?{minFilter:qt,magFilter:qt}:{};k.map!==null&&k.map.dispose(),k.map=new ws(i.x,i.y,he),k.map.texture.name=q.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();const se=k.getViewportCount();for(let he=0;he<se;he++){const Ae=k.getViewport(he);o.set(s.x*Ae.x,s.y*Ae.y,s.x*Ae.z,s.y*Ae.w),F.viewport(o),k.updateMatrices(q,he),n=k.getFrustum(),x(w,R,k.camera,q,this.type)}k.isPointLightShadow!==!0&&this.type===fi&&v(k,R),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(y,S,P)};function v(A,w){const R=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ws(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(w,null,R,f,_,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(w,null,R,d,_,null)}function M(A,w,R,y){let S=null;const P=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)S=P;else if(S=R.isPointLight===!0?l:a,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const F=S.uuid,O=w.uuid;let Y=c[F];Y===void 0&&(Y={},c[F]=Y);let G=Y[O];G===void 0&&(G=S.clone(),Y[O]=G,w.addEventListener("dispose",E)),S=G}if(S.visible=w.visible,S.wireframe=w.wireframe,y===fi?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:u[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const F=r.properties.get(S);F.light=R}return S}function x(A,w,R,y,S){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===fi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const O=e.update(A),Y=A.material;if(Array.isArray(Y)){const G=O.groups;for(let V=0,q=G.length;V<q;V++){const k=G[V],te=Y[k.materialIndex];if(te&&te.visible){const se=M(A,te,y,S);A.onBeforeShadow(r,A,w,R,O,se,k),r.renderBufferDirect(R,null,O,se,A,k),A.onAfterShadow(r,A,w,R,O,se,k)}}}else if(Y.visible){const G=M(A,Y,y,S);A.onBeforeShadow(r,A,w,R,O,G,null),r.renderBufferDirect(R,null,O,G,A,null),A.onAfterShadow(r,A,w,R,O,G,null)}}const F=A.children;for(let O=0,Y=F.length;O<Y;O++)x(F[O],w,R,y,S)}function E(A){A.target.removeEventListener("dispose",E);for(const R in c){const y=c[R],S=A.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}const mS={[ec]:tc,[nc]:rc,[ic]:oc,[_r]:sc,[tc]:ec,[rc]:nc,[oc]:ic,[sc]:_r};function _S(r,e){function t(){let I=!1;const oe=new $e;let X=null;const Z=new $e(0,0,0,0);return{setMask:function(ue){X!==ue&&!I&&(r.colorMask(ue,ue,ue,ue),X=ue)},setLocked:function(ue){I=ue},setClear:function(ue,ce,Ne,_t,Ot){Ot===!0&&(ue*=_t,ce*=_t,Ne*=_t),oe.set(ue,ce,Ne,_t),Z.equals(oe)===!1&&(r.clearColor(ue,ce,Ne,_t),Z.copy(oe))},reset:function(){I=!1,X=null,Z.set(-1,0,0,0)}}}function n(){let I=!1,oe=!1,X=null,Z=null,ue=null;return{setReversed:function(ce){if(oe!==ce){const Ne=e.get("EXT_clip_control");oe?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT);const _t=ue;ue=null,this.setClear(_t)}oe=ce},getReversed:function(){return oe},setTest:function(ce){ce?re(r.DEPTH_TEST):be(r.DEPTH_TEST)},setMask:function(ce){X!==ce&&!I&&(r.depthMask(ce),X=ce)},setFunc:function(ce){if(oe&&(ce=mS[ce]),Z!==ce){switch(ce){case ec:r.depthFunc(r.NEVER);break;case tc:r.depthFunc(r.ALWAYS);break;case nc:r.depthFunc(r.LESS);break;case _r:r.depthFunc(r.LEQUAL);break;case ic:r.depthFunc(r.EQUAL);break;case sc:r.depthFunc(r.GEQUAL);break;case rc:r.depthFunc(r.GREATER);break;case oc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Z=ce}},setLocked:function(ce){I=ce},setClear:function(ce){ue!==ce&&(oe&&(ce=1-ce),r.clearDepth(ce),ue=ce)},reset:function(){I=!1,X=null,Z=null,ue=null,oe=!1}}}function i(){let I=!1,oe=null,X=null,Z=null,ue=null,ce=null,Ne=null,_t=null,Ot=null;return{setTest:function(et){I||(et?re(r.STENCIL_TEST):be(r.STENCIL_TEST))},setMask:function(et){oe!==et&&!I&&(r.stencilMask(et),oe=et)},setFunc:function(et,Ln,ri){(X!==et||Z!==Ln||ue!==ri)&&(r.stencilFunc(et,Ln,ri),X=et,Z=Ln,ue=ri)},setOp:function(et,Ln,ri){(ce!==et||Ne!==Ln||_t!==ri)&&(r.stencilOp(et,Ln,ri),ce=et,Ne=Ln,_t=ri)},setLocked:function(et){I=et},setClear:function(et){Ot!==et&&(r.clearStencil(et),Ot=et)},reset:function(){I=!1,oe=null,X=null,Z=null,ue=null,ce=null,Ne=null,_t=null,Ot=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,v=null,M=null,x=null,E=null,A=null,w=new De(0,0,0),R=0,y=!1,S=null,P=null,F=null,O=null,Y=null;const G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,q=0;const k=r.getParameter(r.VERSION);k.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(k)[1]),V=q>=1):k.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),V=q>=2);let te=null,se={};const he=r.getParameter(r.SCISSOR_BOX),Ae=r.getParameter(r.VIEWPORT),Oe=new $e().fromArray(he),W=new $e().fromArray(Ae);function J(I,oe,X,Z){const ue=new Uint8Array(4),ce=r.createTexture();r.bindTexture(I,ce),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ne=0;Ne<X;Ne++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(oe,0,r.RGBA,1,1,Z,0,r.RGBA,r.UNSIGNED_BYTE,ue):r.texImage2D(oe+Ne,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ue);return ce}const ge={};ge[r.TEXTURE_2D]=J(r.TEXTURE_2D,r.TEXTURE_2D,1),ge[r.TEXTURE_CUBE_MAP]=J(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[r.TEXTURE_2D_ARRAY]=J(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ge[r.TEXTURE_3D]=J(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(r.DEPTH_TEST),o.setFunc(_r),Ve(!1),Ge(bu),re(r.CULL_FACE),D(Hi);function re(I){h[I]!==!0&&(r.enable(I),h[I]=!0)}function be(I){h[I]!==!1&&(r.disable(I),h[I]=!1)}function Ye(I,oe){return u[I]!==oe?(r.bindFramebuffer(I,oe),u[I]=oe,I===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=oe),I===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=oe),!0):!1}function xe(I,oe){let X=d,Z=!1;if(I){X=f.get(oe),X===void 0&&(X=[],f.set(oe,X));const ue=I.textures;if(X.length!==ue.length||X[0]!==r.COLOR_ATTACHMENT0){for(let ce=0,Ne=ue.length;ce<Ne;ce++)X[ce]=r.COLOR_ATTACHMENT0+ce;X.length=ue.length,Z=!0}}else X[0]!==r.BACK&&(X[0]=r.BACK,Z=!0);Z&&r.drawBuffers(X)}function vt(I){return g!==I?(r.useProgram(I),g=I,!0):!1}const dt={[_s]:r.FUNC_ADD,[h_]:r.FUNC_SUBTRACT,[u_]:r.FUNC_REVERSE_SUBTRACT};dt[f_]=r.MIN,dt[d_]=r.MAX;const He={[p_]:r.ZERO,[m_]:r.ONE,[__]:r.SRC_COLOR,[Jl]:r.SRC_ALPHA,[S_]:r.SRC_ALPHA_SATURATE,[y_]:r.DST_COLOR,[x_]:r.DST_ALPHA,[g_]:r.ONE_MINUS_SRC_COLOR,[Ql]:r.ONE_MINUS_SRC_ALPHA,[M_]:r.ONE_MINUS_DST_COLOR,[v_]:r.ONE_MINUS_DST_ALPHA,[T_]:r.CONSTANT_COLOR,[E_]:r.ONE_MINUS_CONSTANT_COLOR,[b_]:r.CONSTANT_ALPHA,[A_]:r.ONE_MINUS_CONSTANT_ALPHA};function D(I,oe,X,Z,ue,ce,Ne,_t,Ot,et){if(I===Hi){_===!0&&(be(r.BLEND),_=!1);return}if(_===!1&&(re(r.BLEND),_=!0),I!==c_){if(I!==m||et!==y){if((p!==_s||x!==_s)&&(r.blendEquation(r.FUNC_ADD),p=_s,x=_s),et)switch(I){case ar:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Au:r.blendFunc(r.ONE,r.ONE);break;case wu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ru:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ar:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Au:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case wu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ru:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}v=null,M=null,E=null,A=null,w.set(0,0,0),R=0,m=I,y=et}return}ue=ue||oe,ce=ce||X,Ne=Ne||Z,(oe!==p||ue!==x)&&(r.blendEquationSeparate(dt[oe],dt[ue]),p=oe,x=ue),(X!==v||Z!==M||ce!==E||Ne!==A)&&(r.blendFuncSeparate(He[X],He[Z],He[ce],He[Ne]),v=X,M=Z,E=ce,A=Ne),(_t.equals(w)===!1||Ot!==R)&&(r.blendColor(_t.r,_t.g,_t.b,Ot),w.copy(_t),R=Ot),m=I,y=!1}function vn(I,oe){I.side===Fn?be(r.CULL_FACE):re(r.CULL_FACE);let X=I.side===Jt;oe&&(X=!X),Ve(X),I.blending===ar&&I.transparent===!1?D(Hi):D(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const Z=I.stencilWrite;a.setTest(Z),Z&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),at(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?re(r.SAMPLE_ALPHA_TO_COVERAGE):be(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(I){S!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),S=I)}function Ge(I){I!==o_?(re(r.CULL_FACE),I!==P&&(I===bu?r.cullFace(r.BACK):I===a_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):be(r.CULL_FACE),P=I}function Me(I){I!==F&&(V&&r.lineWidth(I),F=I)}function at(I,oe,X){I?(re(r.POLYGON_OFFSET_FILL),(O!==oe||Y!==X)&&(r.polygonOffset(oe,X),O=oe,Y=X)):be(r.POLYGON_OFFSET_FILL)}function ye(I){I?re(r.SCISSOR_TEST):be(r.SCISSOR_TEST)}function C(I){I===void 0&&(I=r.TEXTURE0+G-1),te!==I&&(r.activeTexture(I),te=I)}function T(I,oe,X){X===void 0&&(te===null?X=r.TEXTURE0+G-1:X=te);let Z=se[X];Z===void 0&&(Z={type:void 0,texture:void 0},se[X]=Z),(Z.type!==I||Z.texture!==oe)&&(te!==X&&(r.activeTexture(X),te=X),r.bindTexture(I,oe||ge[I]),Z.type=I,Z.texture=oe)}function B(){const I=se[te];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function K(){try{r.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{r.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{r.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{r.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{r.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{r.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function qe(){try{r.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{r.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pe(){try{r.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(){try{r.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(I){Oe.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),Oe.copy(I))}function me(I){W.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),W.copy(I))}function We(I,oe){let X=c.get(oe);X===void 0&&(X=new WeakMap,c.set(oe,X));let Z=X.get(I);Z===void 0&&(Z=r.getUniformBlockIndex(oe,I.name),X.set(I,Z))}function Fe(I,oe){const Z=c.get(oe).get(I);l.get(oe)!==Z&&(r.uniformBlockBinding(oe,Z,I.__bindingPointIndex),l.set(oe,Z))}function ot(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},te=null,se={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,v=null,M=null,x=null,E=null,A=null,w=new De(0,0,0),R=0,y=!1,S=null,P=null,F=null,O=null,Y=null,Oe.set(0,0,r.canvas.width,r.canvas.height),W.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:re,disable:be,bindFramebuffer:Ye,drawBuffers:xe,useProgram:vt,setBlending:D,setMaterial:vn,setFlipSided:Ve,setCullFace:Ge,setLineWidth:Me,setPolygonOffset:at,setScissorTest:ye,activeTexture:C,bindTexture:T,unbindTexture:B,compressedTexImage2D:K,compressedTexImage3D:$,texImage2D:pe,texImage3D:we,updateUBOMapping:We,uniformBlockBinding:Fe,texStorage2D:qe,texStorage3D:ee,texSubImage2D:j,texSubImage3D:ve,compressedTexSubImage2D:le,compressedTexSubImage3D:de,scissor:Re,viewport:me,reset:ot}}function gS(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ie,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,T){return d?new OffscreenCanvas(C,T):So("canvas")}function _(C,T,B){let K=1;const $=ye(C);if(($.width>B||$.height>B)&&(K=B/Math.max($.width,$.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const j=Math.floor(K*$.width),ve=Math.floor(K*$.height);u===void 0&&(u=g(j,ve));const le=T?g(j,ve):u;return le.width=j,le.height=ve,le.getContext("2d").drawImage(C,0,0,j,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+j+"x"+ve+")."),le}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){r.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function M(C,T,B,K,$=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let j=T;if(T===r.RED&&(B===r.FLOAT&&(j=r.R32F),B===r.HALF_FLOAT&&(j=r.R16F),B===r.UNSIGNED_BYTE&&(j=r.R8)),T===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&(j=r.R8UI),B===r.UNSIGNED_SHORT&&(j=r.R16UI),B===r.UNSIGNED_INT&&(j=r.R32UI),B===r.BYTE&&(j=r.R8I),B===r.SHORT&&(j=r.R16I),B===r.INT&&(j=r.R32I)),T===r.RG&&(B===r.FLOAT&&(j=r.RG32F),B===r.HALF_FLOAT&&(j=r.RG16F),B===r.UNSIGNED_BYTE&&(j=r.RG8)),T===r.RG_INTEGER&&(B===r.UNSIGNED_BYTE&&(j=r.RG8UI),B===r.UNSIGNED_SHORT&&(j=r.RG16UI),B===r.UNSIGNED_INT&&(j=r.RG32UI),B===r.BYTE&&(j=r.RG8I),B===r.SHORT&&(j=r.RG16I),B===r.INT&&(j=r.RG32I)),T===r.RGB_INTEGER&&(B===r.UNSIGNED_BYTE&&(j=r.RGB8UI),B===r.UNSIGNED_SHORT&&(j=r.RGB16UI),B===r.UNSIGNED_INT&&(j=r.RGB32UI),B===r.BYTE&&(j=r.RGB8I),B===r.SHORT&&(j=r.RGB16I),B===r.INT&&(j=r.RGB32I)),T===r.RGBA_INTEGER&&(B===r.UNSIGNED_BYTE&&(j=r.RGBA8UI),B===r.UNSIGNED_SHORT&&(j=r.RGBA16UI),B===r.UNSIGNED_INT&&(j=r.RGBA32UI),B===r.BYTE&&(j=r.RGBA8I),B===r.SHORT&&(j=r.RGBA16I),B===r.INT&&(j=r.RGBA32I)),T===r.RGB&&B===r.UNSIGNED_INT_5_9_9_9_REV&&(j=r.RGB9_E5),T===r.RGBA){const ve=$?Pa:Xe.getTransfer(K);B===r.FLOAT&&(j=r.RGBA32F),B===r.HALF_FLOAT&&(j=r.RGBA16F),B===r.UNSIGNED_BYTE&&(j=ve===it?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return(j===r.R16F||j===r.R32F||j===r.RG16F||j===r.RG32F||j===r.RGBA16F||j===r.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function x(C,T){let B;return C?T===null||T===As||T===yr?B=r.DEPTH24_STENCIL8:T===kn?B=r.DEPTH32F_STENCIL8:T===vo&&(B=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===As||T===yr?B=r.DEPTH_COMPONENT24:T===kn?B=r.DEPTH_COMPONENT32F:T===vo&&(B=r.DEPTH_COMPONENT16),B}function E(C,T){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==qt&&C.minFilter!==un?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function A(C){const T=C.target;T.removeEventListener("dispose",A),R(T),T.isVideoTexture&&h.delete(T)}function w(C){const T=C.target;T.removeEventListener("dispose",w),S(T)}function R(C){const T=n.get(C);if(T.__webglInit===void 0)return;const B=C.source,K=f.get(B);if(K){const $=K[T.__cacheKey];$.usedTimes--,$.usedTimes===0&&y(C),Object.keys(K).length===0&&f.delete(B)}n.remove(C)}function y(C){const T=n.get(C);r.deleteTexture(T.__webglTexture);const B=C.source,K=f.get(B);delete K[T.__cacheKey],o.memory.textures--}function S(C){const T=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(T.__webglFramebuffer[K]))for(let $=0;$<T.__webglFramebuffer[K].length;$++)r.deleteFramebuffer(T.__webglFramebuffer[K][$]);else r.deleteFramebuffer(T.__webglFramebuffer[K]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[K])}else{if(Array.isArray(T.__webglFramebuffer))for(let K=0;K<T.__webglFramebuffer.length;K++)r.deleteFramebuffer(T.__webglFramebuffer[K]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let K=0;K<T.__webglColorRenderbuffer.length;K++)T.__webglColorRenderbuffer[K]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[K]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const B=C.textures;for(let K=0,$=B.length;K<$;K++){const j=n.get(B[K]);j.__webglTexture&&(r.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(B[K])}n.remove(C)}let P=0;function F(){P=0}function O(){const C=P;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),P+=1,C}function Y(C){const T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function G(C,T){const B=n.get(C);if(C.isVideoTexture&&Me(C),C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){const K=C.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(B,C,T);return}}t.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+T)}function V(C,T){const B=n.get(C);if(C.version>0&&B.__version!==C.version){W(B,C,T);return}t.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+T)}function q(C,T){const B=n.get(C);if(C.version>0&&B.__version!==C.version){W(B,C,T);return}t.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+T)}function k(C,T){const B=n.get(C);if(C.version>0&&B.__version!==C.version){J(B,C,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+T)}const te={[vr]:r.REPEAT,[Oi]:r.CLAMP_TO_EDGE,[Ca]:r.MIRRORED_REPEAT},se={[qt]:r.NEAREST,[Ud]:r.NEAREST_MIPMAP_NEAREST,[io]:r.NEAREST_MIPMAP_LINEAR,[un]:r.LINEAR,[ga]:r.LINEAR_MIPMAP_NEAREST,[xi]:r.LINEAR_MIPMAP_LINEAR},he={[V_]:r.NEVER,[j_]:r.ALWAYS,[G_]:r.LESS,[qd]:r.LEQUAL,[W_]:r.EQUAL,[q_]:r.GEQUAL,[X_]:r.GREATER,[Y_]:r.NOTEQUAL};function Ae(C,T){if(T.type===kn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===un||T.magFilter===ga||T.magFilter===io||T.magFilter===xi||T.minFilter===un||T.minFilter===ga||T.minFilter===io||T.minFilter===xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,te[T.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,te[T.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,te[T.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,se[T.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,se[T.minFilter]),T.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,he[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===qt||T.minFilter!==io&&T.minFilter!==xi||T.type===kn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Oe(C,T){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",A));const K=T.source;let $=f.get(K);$===void 0&&($={},f.set(K,$));const j=Y(T);if(j!==C.__cacheKey){$[j]===void 0&&($[j]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,B=!0),$[j].usedTimes++;const ve=$[C.__cacheKey];ve!==void 0&&($[C.__cacheKey].usedTimes--,ve.usedTimes===0&&y(T)),C.__cacheKey=j,C.__webglTexture=$[j].texture}return B}function W(C,T,B){let K=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(K=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(K=r.TEXTURE_3D);const $=Oe(C,T),j=T.source;t.bindTexture(K,C.__webglTexture,r.TEXTURE0+B);const ve=n.get(j);if(j.version!==ve.__version||$===!0){t.activeTexture(r.TEXTURE0+B);const le=Xe.getPrimaries(Xe.workingColorSpace),de=T.colorSpace===Ui?null:Xe.getPrimaries(T.colorSpace),qe=T.colorSpace===Ui||le===de?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let ee=_(T.image,!1,i.maxTextureSize);ee=at(T,ee);const pe=s.convert(T.format,T.colorSpace),we=s.convert(T.type);let Re=M(T.internalFormat,pe,we,T.colorSpace,T.isVideoTexture);Ae(K,T);let me;const We=T.mipmaps,Fe=T.isVideoTexture!==!0,ot=ve.__version===void 0||$===!0,I=j.dataReady,oe=E(T,ee);if(T.isDepthTexture)Re=x(T.format===Mr,T.type),ot&&(Fe?t.texStorage2D(r.TEXTURE_2D,1,Re,ee.width,ee.height):t.texImage2D(r.TEXTURE_2D,0,Re,ee.width,ee.height,0,pe,we,null));else if(T.isDataTexture)if(We.length>0){Fe&&ot&&t.texStorage2D(r.TEXTURE_2D,oe,Re,We[0].width,We[0].height);for(let X=0,Z=We.length;X<Z;X++)me=We[X],Fe?I&&t.texSubImage2D(r.TEXTURE_2D,X,0,0,me.width,me.height,pe,we,me.data):t.texImage2D(r.TEXTURE_2D,X,Re,me.width,me.height,0,pe,we,me.data);T.generateMipmaps=!1}else Fe?(ot&&t.texStorage2D(r.TEXTURE_2D,oe,Re,ee.width,ee.height),I&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ee.width,ee.height,pe,we,ee.data)):t.texImage2D(r.TEXTURE_2D,0,Re,ee.width,ee.height,0,pe,we,ee.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Fe&&ot&&t.texStorage3D(r.TEXTURE_2D_ARRAY,oe,Re,We[0].width,We[0].height,ee.depth);for(let X=0,Z=We.length;X<Z;X++)if(me=We[X],T.format!==An)if(pe!==null)if(Fe){if(I)if(T.layerUpdates.size>0){const ue=Tf(me.width,me.height,T.format,T.type);for(const ce of T.layerUpdates){const Ne=me.data.subarray(ce*ue/me.data.BYTES_PER_ELEMENT,(ce+1)*ue/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,ce,me.width,me.height,1,pe,Ne)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,0,me.width,me.height,ee.depth,pe,me.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,X,Re,me.width,me.height,ee.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?I&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,0,me.width,me.height,ee.depth,pe,we,me.data):t.texImage3D(r.TEXTURE_2D_ARRAY,X,Re,me.width,me.height,ee.depth,0,pe,we,me.data)}else{Fe&&ot&&t.texStorage2D(r.TEXTURE_2D,oe,Re,We[0].width,We[0].height);for(let X=0,Z=We.length;X<Z;X++)me=We[X],T.format!==An?pe!==null?Fe?I&&t.compressedTexSubImage2D(r.TEXTURE_2D,X,0,0,me.width,me.height,pe,me.data):t.compressedTexImage2D(r.TEXTURE_2D,X,Re,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?I&&t.texSubImage2D(r.TEXTURE_2D,X,0,0,me.width,me.height,pe,we,me.data):t.texImage2D(r.TEXTURE_2D,X,Re,me.width,me.height,0,pe,we,me.data)}else if(T.isDataArrayTexture)if(Fe){if(ot&&t.texStorage3D(r.TEXTURE_2D_ARRAY,oe,Re,ee.width,ee.height,ee.depth),I)if(T.layerUpdates.size>0){const X=Tf(ee.width,ee.height,T.format,T.type);for(const Z of T.layerUpdates){const ue=ee.data.subarray(Z*X/ee.data.BYTES_PER_ELEMENT,(Z+1)*X/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Z,ee.width,ee.height,1,pe,we,ue)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,pe,we,ee.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Re,ee.width,ee.height,ee.depth,0,pe,we,ee.data);else if(T.isData3DTexture)Fe?(ot&&t.texStorage3D(r.TEXTURE_3D,oe,Re,ee.width,ee.height,ee.depth),I&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,pe,we,ee.data)):t.texImage3D(r.TEXTURE_3D,0,Re,ee.width,ee.height,ee.depth,0,pe,we,ee.data);else if(T.isFramebufferTexture){if(ot)if(Fe)t.texStorage2D(r.TEXTURE_2D,oe,Re,ee.width,ee.height);else{let X=ee.width,Z=ee.height;for(let ue=0;ue<oe;ue++)t.texImage2D(r.TEXTURE_2D,ue,Re,X,Z,0,pe,we,null),X>>=1,Z>>=1}}else if(We.length>0){if(Fe&&ot){const X=ye(We[0]);t.texStorage2D(r.TEXTURE_2D,oe,Re,X.width,X.height)}for(let X=0,Z=We.length;X<Z;X++)me=We[X],Fe?I&&t.texSubImage2D(r.TEXTURE_2D,X,0,0,pe,we,me):t.texImage2D(r.TEXTURE_2D,X,Re,pe,we,me);T.generateMipmaps=!1}else if(Fe){if(ot){const X=ye(ee);t.texStorage2D(r.TEXTURE_2D,oe,Re,X.width,X.height)}I&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,pe,we,ee)}else t.texImage2D(r.TEXTURE_2D,0,Re,pe,we,ee);m(T)&&p(K),ve.__version=j.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function J(C,T,B){if(T.image.length!==6)return;const K=Oe(C,T),$=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+B);const j=n.get($);if($.version!==j.__version||K===!0){t.activeTexture(r.TEXTURE0+B);const ve=Xe.getPrimaries(Xe.workingColorSpace),le=T.colorSpace===Ui?null:Xe.getPrimaries(T.colorSpace),de=T.colorSpace===Ui||ve===le?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const qe=T.isCompressedTexture||T.image[0].isCompressedTexture,ee=T.image[0]&&T.image[0].isDataTexture,pe=[];for(let Z=0;Z<6;Z++)!qe&&!ee?pe[Z]=_(T.image[Z],!0,i.maxCubemapSize):pe[Z]=ee?T.image[Z].image:T.image[Z],pe[Z]=at(T,pe[Z]);const we=pe[0],Re=s.convert(T.format,T.colorSpace),me=s.convert(T.type),We=M(T.internalFormat,Re,me,T.colorSpace),Fe=T.isVideoTexture!==!0,ot=j.__version===void 0||K===!0,I=$.dataReady;let oe=E(T,we);Ae(r.TEXTURE_CUBE_MAP,T);let X;if(qe){Fe&&ot&&t.texStorage2D(r.TEXTURE_CUBE_MAP,oe,We,we.width,we.height);for(let Z=0;Z<6;Z++){X=pe[Z].mipmaps;for(let ue=0;ue<X.length;ue++){const ce=X[ue];T.format!==An?Re!==null?Fe?I&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue,0,0,ce.width,ce.height,Re,ce.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue,We,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue,0,0,ce.width,ce.height,Re,me,ce.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue,We,ce.width,ce.height,0,Re,me,ce.data)}}}else{if(X=T.mipmaps,Fe&&ot){X.length>0&&oe++;const Z=ye(pe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,oe,We,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ee){Fe?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,pe[Z].width,pe[Z].height,Re,me,pe[Z].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,We,pe[Z].width,pe[Z].height,0,Re,me,pe[Z].data);for(let ue=0;ue<X.length;ue++){const Ne=X[ue].image[Z].image;Fe?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue+1,0,0,Ne.width,Ne.height,Re,me,Ne.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue+1,We,Ne.width,Ne.height,0,Re,me,Ne.data)}}else{Fe?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Re,me,pe[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,We,Re,me,pe[Z]);for(let ue=0;ue<X.length;ue++){const ce=X[ue];Fe?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue+1,0,0,Re,me,ce.image[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue+1,We,Re,me,ce.image[Z])}}}m(T)&&p(r.TEXTURE_CUBE_MAP),j.__version=$.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function ge(C,T,B,K,$,j){const ve=s.convert(B.format,B.colorSpace),le=s.convert(B.type),de=M(B.internalFormat,ve,le,B.colorSpace),qe=n.get(T),ee=n.get(B);if(ee.__renderTarget=T,!qe.__hasExternalTextures){const pe=Math.max(1,T.width>>j),we=Math.max(1,T.height>>j);$===r.TEXTURE_3D||$===r.TEXTURE_2D_ARRAY?t.texImage3D($,j,de,pe,we,T.depth,0,ve,le,null):t.texImage2D($,j,de,pe,we,0,ve,le,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),Ge(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,K,$,ee.__webglTexture,0,Ve(T)):($===r.TEXTURE_2D||$>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,K,$,ee.__webglTexture,j),t.bindFramebuffer(r.FRAMEBUFFER,null)}function re(C,T,B){if(r.bindRenderbuffer(r.RENDERBUFFER,C),T.depthBuffer){const K=T.depthTexture,$=K&&K.isDepthTexture?K.type:null,j=x(T.stencilBuffer,$),ve=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,le=Ve(T);Ge(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,le,j,T.width,T.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,le,j,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,j,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,C)}else{const K=T.textures;for(let $=0;$<K.length;$++){const j=K[$],ve=s.convert(j.format,j.colorSpace),le=s.convert(j.type),de=M(j.internalFormat,ve,le,j.colorSpace),qe=Ve(T);B&&Ge(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,qe,de,T.width,T.height):Ge(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qe,de,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,de,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function be(C,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(T.depthTexture);K.__renderTarget=T,(!K.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),G(T.depthTexture,0);const $=K.__webglTexture,j=Ve(T);if(T.depthTexture.format===lr)Ge(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,$,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,$,0);else if(T.depthTexture.format===Mr)Ge(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,$,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Ye(C){const T=n.get(C),B=C.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==C.depthTexture){const K=C.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),K){const $=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,K.removeEventListener("dispose",$)};K.addEventListener("dispose",$),T.__depthDisposeCallback=$}T.__boundDepthTexture=K}if(C.depthTexture&&!T.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");be(T.__webglFramebuffer,C)}else if(B){T.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[K]),T.__webglDepthbuffer[K]===void 0)T.__webglDepthbuffer[K]=r.createRenderbuffer(),re(T.__webglDepthbuffer[K],C,!1);else{const $=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=T.__webglDepthbuffer[K];r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,j)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),re(T.__webglDepthbuffer,C,!1);else{const K=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,$)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function xe(C,T,B){const K=n.get(C);T!==void 0&&ge(K.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&Ye(C)}function vt(C){const T=C.texture,B=n.get(C),K=n.get(T);C.addEventListener("dispose",w);const $=C.textures,j=C.isWebGLCubeRenderTarget===!0,ve=$.length>1;if(ve||(K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture()),K.__version=T.version,o.memory.textures++),j){B.__webglFramebuffer=[];for(let le=0;le<6;le++)if(T.mipmaps&&T.mipmaps.length>0){B.__webglFramebuffer[le]=[];for(let de=0;de<T.mipmaps.length;de++)B.__webglFramebuffer[le][de]=r.createFramebuffer()}else B.__webglFramebuffer[le]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){B.__webglFramebuffer=[];for(let le=0;le<T.mipmaps.length;le++)B.__webglFramebuffer[le]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(ve)for(let le=0,de=$.length;le<de;le++){const qe=n.get($[le]);qe.__webglTexture===void 0&&(qe.__webglTexture=r.createTexture(),o.memory.textures++)}if(C.samples>0&&Ge(C)===!1){B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let le=0;le<$.length;le++){const de=$[le];B.__webglColorRenderbuffer[le]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[le]);const qe=s.convert(de.format,de.colorSpace),ee=s.convert(de.type),pe=M(de.internalFormat,qe,ee,de.colorSpace,C.isXRRenderTarget===!0),we=Ve(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,we,pe,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,B.__webglColorRenderbuffer[le])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),re(B.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(j){t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),Ae(r.TEXTURE_CUBE_MAP,T);for(let le=0;le<6;le++)if(T.mipmaps&&T.mipmaps.length>0)for(let de=0;de<T.mipmaps.length;de++)ge(B.__webglFramebuffer[le][de],C,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,de);else ge(B.__webglFramebuffer[le],C,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(T)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let le=0,de=$.length;le<de;le++){const qe=$[le],ee=n.get(qe);t.bindTexture(r.TEXTURE_2D,ee.__webglTexture),Ae(r.TEXTURE_2D,qe),ge(B.__webglFramebuffer,C,qe,r.COLOR_ATTACHMENT0+le,r.TEXTURE_2D,0),m(qe)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let le=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(le=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(le,K.__webglTexture),Ae(le,T),T.mipmaps&&T.mipmaps.length>0)for(let de=0;de<T.mipmaps.length;de++)ge(B.__webglFramebuffer[de],C,T,r.COLOR_ATTACHMENT0,le,de);else ge(B.__webglFramebuffer,C,T,r.COLOR_ATTACHMENT0,le,0);m(T)&&p(le),t.unbindTexture()}C.depthBuffer&&Ye(C)}function dt(C){const T=C.textures;for(let B=0,K=T.length;B<K;B++){const $=T[B];if(m($)){const j=v(C),ve=n.get($).__webglTexture;t.bindTexture(j,ve),p(j),t.unbindTexture()}}}const He=[],D=[];function vn(C){if(C.samples>0){if(Ge(C)===!1){const T=C.textures,B=C.width,K=C.height;let $=r.COLOR_BUFFER_BIT;const j=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ve=n.get(C),le=T.length>1;if(le)for(let de=0;de<T.length;de++)t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let de=0;de<T.length;de++){if(C.resolveDepthBuffer&&(C.depthBuffer&&($|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&($|=r.STENCIL_BUFFER_BIT)),le){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ve.__webglColorRenderbuffer[de]);const qe=n.get(T[de]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,qe,0)}r.blitFramebuffer(0,0,B,K,0,0,B,K,$,r.NEAREST),l===!0&&(He.length=0,D.length=0,He.push(r.COLOR_ATTACHMENT0+de),C.depthBuffer&&C.resolveDepthBuffer===!1&&(He.push(j),D.push(j),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,D)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,He))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),le)for(let de=0;de<T.length;de++){t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,ve.__webglColorRenderbuffer[de]);const qe=n.get(T[de]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,qe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const T=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function Ve(C){return Math.min(i.maxSamples,C.samples)}function Ge(C){const T=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Me(C){const T=o.render.frame;h.get(C)!==T&&(h.set(C,T),C.update())}function at(C,T){const B=C.colorSpace,K=C.format,$=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==Kt&&B!==Ui&&(Xe.getTransfer(B)===it?(K!==An||$!==Ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),T}function ye(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=F,this.setTexture2D=G,this.setTexture2DArray=V,this.setTexture3D=q,this.setTextureCube=k,this.rebindTextures=xe,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=vn,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Ge}function xS(r,e){function t(n,i=Ui){let s;const o=Xe.getTransfer(i);if(n===Ti)return r.UNSIGNED_BYTE;if(n===vh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===yh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Bd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Od)return r.BYTE;if(n===Fd)return r.SHORT;if(n===vo)return r.UNSIGNED_SHORT;if(n===xh)return r.INT;if(n===As)return r.UNSIGNED_INT;if(n===kn)return r.FLOAT;if(n===Do)return r.HALF_FLOAT;if(n===zd)return r.ALPHA;if(n===kd)return r.RGB;if(n===An)return r.RGBA;if(n===Hd)return r.LUMINANCE;if(n===Vd)return r.LUMINANCE_ALPHA;if(n===lr)return r.DEPTH_COMPONENT;if(n===Mr)return r.DEPTH_STENCIL;if(n===Mh)return r.RED;if(n===Sh)return r.RED_INTEGER;if(n===Gd)return r.RG;if(n===Th)return r.RG_INTEGER;if(n===Eh)return r.RGBA_INTEGER;if(n===xa||n===va||n===ya||n===Ma)if(o===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===xa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===va)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ma)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===xa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===va)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ya)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ma)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===cc||n===hc||n===uc||n===fc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===cc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===hc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===uc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===dc||n===pc||n===mc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===dc||n===pc)return o===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===mc)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===_c||n===gc||n===xc||n===vc||n===yc||n===Mc||n===Sc||n===Tc||n===Ec||n===bc||n===Ac||n===wc||n===Rc||n===Cc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===_c)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===gc)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xc)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vc)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yc)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Mc)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Sc)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Tc)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ec)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bc)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ac)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wc)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Rc)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Cc)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Sa||n===Pc||n===Lc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Sa)return o===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Lc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wd||n===Dc||n===Ic||n===Nc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Sa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Dc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ic)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Nc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===yr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const vS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yS=`
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

}`;class MS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Pt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Xi({vertexShader:vS,fragmentShader:yS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ut(new Or(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class SS extends Ls{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const _=new MS,m=t.getContextAttributes();let p=null,v=null;const M=[],x=[],E=new ie;let A=null;const w=new Xt;w.viewport=new $e;const R=new Xt;R.viewport=new $e;const y=[w,R],S=new D0;let P=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let J=M[W];return J===void 0&&(J=new Ml,M[W]=J),J.getTargetRaySpace()},this.getControllerGrip=function(W){let J=M[W];return J===void 0&&(J=new Ml,M[W]=J),J.getGripSpace()},this.getHand=function(W){let J=M[W];return J===void 0&&(J=new Ml,M[W]=J),J.getHandSpace()};function O(W){const J=x.indexOf(W.inputSource);if(J===-1)return;const ge=M[J];ge!==void 0&&(ge.update(W.inputSource,W.frame,c||o),ge.dispatchEvent({type:W.type,data:W.inputSource}))}function Y(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",G);for(let W=0;W<M.length;W++){const J=x[W];J!==null&&(x[W]=null,M[W].disconnect(J))}P=null,F=null,_.reset(),e.setRenderTarget(p),d=null,f=null,u=null,i=null,v=null,Oe.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(E),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,re=null,be=null;m.depth&&(be=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=m.stencil?Mr:lr,re=m.stencil?yr:As);const Ye={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:s};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(Ye),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new ws(f.textureWidth,f.textureHeight,{format:An,type:Ti,depthTexture:new ap(f.textureWidth,f.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ge={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,ge),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new ws(d.framebufferWidth,d.framebufferHeight,{format:An,type:Ti,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Oe.setContext(i),Oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function G(W){for(let J=0;J<W.removed.length;J++){const ge=W.removed[J],re=x.indexOf(ge);re>=0&&(x[re]=null,M[re].disconnect(ge))}for(let J=0;J<W.added.length;J++){const ge=W.added[J];let re=x.indexOf(ge);if(re===-1){for(let Ye=0;Ye<M.length;Ye++)if(Ye>=x.length){x.push(ge),re=Ye;break}else if(x[Ye]===null){x[Ye]=ge,re=Ye;break}if(re===-1)break}const be=M[re];be&&be.connect(ge)}}const V=new L,q=new L;function k(W,J,ge){V.setFromMatrixPosition(J.matrixWorld),q.setFromMatrixPosition(ge.matrixWorld);const re=V.distanceTo(q),be=J.projectionMatrix.elements,Ye=ge.projectionMatrix.elements,xe=be[14]/(be[10]-1),vt=be[14]/(be[10]+1),dt=(be[9]+1)/be[5],He=(be[9]-1)/be[5],D=(be[8]-1)/be[0],vn=(Ye[8]+1)/Ye[0],Ve=xe*D,Ge=xe*vn,Me=re/(-D+vn),at=Me*-D;if(J.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(at),W.translateZ(Me),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),be[10]===-1)W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const ye=xe+Me,C=vt+Me,T=Ve-at,B=Ge+(re-at),K=dt*vt/C*ye,$=He*vt/C*ye;W.projectionMatrix.makePerspective(T,B,K,$,ye,C),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function te(W,J){J===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(J.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;let J=W.near,ge=W.far;_.texture!==null&&(_.depthNear>0&&(J=_.depthNear),_.depthFar>0&&(ge=_.depthFar)),S.near=R.near=w.near=J,S.far=R.far=w.far=ge,(P!==S.near||F!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,F=S.far),w.layers.mask=W.layers.mask|2,R.layers.mask=W.layers.mask|4,S.layers.mask=w.layers.mask|R.layers.mask;const re=W.parent,be=S.cameras;te(S,re);for(let Ye=0;Ye<be.length;Ye++)te(be[Ye],re);be.length===2?k(S,w,R):S.projectionMatrix.copy(w.projectionMatrix),se(W,S,re)};function se(W,J,ge){ge===null?W.matrix.copy(J.matrixWorld):(W.matrix.copy(ge.matrixWorld),W.matrix.invert(),W.matrix.multiply(J.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Sr*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let he=null;function Ae(W,J){if(h=J.getViewerPose(c||o),g=J,h!==null){const ge=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let re=!1;ge.length!==S.cameras.length&&(S.cameras.length=0,re=!0);for(let xe=0;xe<ge.length;xe++){const vt=ge[xe];let dt=null;if(d!==null)dt=d.getViewport(vt);else{const D=u.getViewSubImage(f,vt);dt=D.viewport,xe===0&&(e.setRenderTargetTextures(v,D.colorTexture,f.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(v))}let He=y[xe];He===void 0&&(He=new Xt,He.layers.enable(xe),He.viewport=new $e,y[xe]=He),He.matrix.fromArray(vt.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(vt.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(dt.x,dt.y,dt.width,dt.height),xe===0&&(S.matrix.copy(He.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),re===!0&&S.cameras.push(He)}const be=i.enabledFeatures;if(be&&be.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&u){const xe=u.getDepthInformation(ge[0]);xe&&xe.isValid&&xe.texture&&_.init(e,xe,i.renderState)}}for(let ge=0;ge<M.length;ge++){const re=x[ge],be=M[ge];re!==null&&be!==void 0&&be.update(re,J,c||o)}he&&he(W,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const Oe=new xp;Oe.setAnimationLoop(Ae),this.setAnimationLoop=function(W){he=W},this.dispose=function(){}}}const cs=new Qn,TS=new Pe;function ES(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ep(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,M,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Jt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Jt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),M=v.envMap,x=v.envMapRotation;M&&(m.envMap.value=M,cs.copy(x),cs.x*=-1,cs.y*=-1,cs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),m.envMapRotation.value.setFromMatrix4(TS.makeRotationFromEuler(cs)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Jt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function bS(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){const x=M.program;n.uniformBlockBinding(v,x)}function c(v,M){let x=i[v.id];x===void 0&&(g(v),x=h(v),i[v.id]=x,v.addEventListener("dispose",m));const E=M.program;n.updateUBOMapping(v,E);const A=e.render.frame;s[v.id]!==A&&(f(v),s[v.id]=A)}function h(v){const M=u();v.__bindingPointIndex=M;const x=r.createBuffer(),E=v.__size,A=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,E,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,x),x}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const M=i[v.id],x=v.uniforms,E=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let A=0,w=x.length;A<w;A++){const R=Array.isArray(x[A])?x[A]:[x[A]];for(let y=0,S=R.length;y<S;y++){const P=R[y];if(d(P,A,y,E)===!0){const F=P.__offset,O=Array.isArray(P.value)?P.value:[P.value];let Y=0;for(let G=0;G<O.length;G++){const V=O[G],q=_(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,F+Y,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):(V.toArray(P.__data,Y),Y+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,F,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(v,M,x,E){const A=v.value,w=M+"_"+x;if(E[w]===void 0)return typeof A=="number"||typeof A=="boolean"?E[w]=A:E[w]=A.clone(),!0;{const R=E[w];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return E[w]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function g(v){const M=v.uniforms;let x=0;const E=16;for(let w=0,R=M.length;w<R;w++){const y=Array.isArray(M[w])?M[w]:[M[w]];for(let S=0,P=y.length;S<P;S++){const F=y[S],O=Array.isArray(F.value)?F.value:[F.value];for(let Y=0,G=O.length;Y<G;Y++){const V=O[Y],q=_(V),k=x%E,te=k%q.boundary,se=k+te;x+=te,se!==0&&E-se<q.storage&&(x+=E-se),F.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=q.storage}}}const A=x%E;return A>0&&(x+=E-A),v.__size=x,v.__cache={},this}function _(v){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function m(v){const M=v.target;M.removeEventListener("dispose",m);const x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function p(){for(const v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class AS{constructor(e={}){const{canvas:t=ug(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const v=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ct,this.toneMapping=Vi,this.toneMappingExposure=1;const x=this;let E=!1,A=0,w=0,R=null,y=-1,S=null;const P=new $e,F=new $e;let O=null;const Y=new De(0);let G=0,V=t.width,q=t.height,k=1,te=null,se=null;const he=new $e(0,0,V,q),Ae=new $e(0,0,V,q);let Oe=!1;const W=new Ph;let J=!1,ge=!1;this.transmissionResolutionScale=1;const re=new Pe,be=new Pe,Ye=new L,xe=new $e,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function He(){return R===null?k:1}let D=n;function vn(b,N){return t.getContext(b,N)}try{const b={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${gh}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",ce,!1),D===null){const N="webgl2";if(D=vn(N,b),D===null)throw vn(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ve,Ge,Me,at,ye,C,T,B,K,$,j,ve,le,de,qe,ee,pe,we,Re,me,We,Fe,ot,I;function oe(){Ve=new Oy(D),Ve.init(),Fe=new xS(D,Ve),Ge=new Cy(D,Ve,e,Fe),Me=new _S(D,Ve),Ge.reverseDepthBuffer&&f&&Me.buffers.depth.setReversed(!0),at=new zy(D),ye=new iS,C=new gS(D,Ve,Me,ye,Ge,Fe,at),T=new Ly(x),B=new Uy(x),K=new X0(D),ot=new wy(D,K),$=new Fy(D,K,at,ot),j=new Hy(D,$,K,at),Re=new ky(D,Ge,C),ee=new Py(ye),ve=new nS(x,T,B,Ve,Ge,ot,ee),le=new ES(x,ye),de=new rS,qe=new uS(Ve),we=new Ay(x,T,B,Me,j,d,l),pe=new pS(x,j,Ge),I=new bS(D,at,Ge,Me),me=new Ry(D,Ve,at),We=new By(D,Ve,at),at.programs=ve.programs,x.capabilities=Ge,x.extensions=Ve,x.properties=ye,x.renderLists=de,x.shadowMap=pe,x.state=Me,x.info=at}oe();const X=new SS(x,D);this.xr=X,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const b=Ve.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ve.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(b){b!==void 0&&(k=b,this.setSize(V,q,!1))},this.getSize=function(b){return b.set(V,q)},this.setSize=function(b,N,z=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=b,q=N,t.width=Math.floor(b*k),t.height=Math.floor(N*k),z===!0&&(t.style.width=b+"px",t.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(V*k,q*k).floor()},this.setDrawingBufferSize=function(b,N,z){V=b,q=N,k=z,t.width=Math.floor(b*z),t.height=Math.floor(N*z),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(he)},this.setViewport=function(b,N,z,H){b.isVector4?he.set(b.x,b.y,b.z,b.w):he.set(b,N,z,H),Me.viewport(P.copy(he).multiplyScalar(k).round())},this.getScissor=function(b){return b.copy(Ae)},this.setScissor=function(b,N,z,H){b.isVector4?Ae.set(b.x,b.y,b.z,b.w):Ae.set(b,N,z,H),Me.scissor(F.copy(Ae).multiplyScalar(k).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(b){Me.setScissorTest(Oe=b)},this.setOpaqueSort=function(b){te=b},this.setTransparentSort=function(b){se=b},this.getClearColor=function(b){return b.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(b=!0,N=!0,z=!0){let H=0;if(b){let U=!1;if(R!==null){const Q=R.texture.format;U=Q===Eh||Q===Th||Q===Sh}if(U){const Q=R.texture.type,ae=Q===Ti||Q===As||Q===vo||Q===yr||Q===vh||Q===yh,fe=we.getClearColor(),_e=we.getClearAlpha(),Ce=fe.r,Le=fe.g,Se=fe.b;ae?(g[0]=Ce,g[1]=Le,g[2]=Se,g[3]=_e,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=Ce,_[1]=Le,_[2]=Se,_[3]=_e,D.clearBufferiv(D.COLOR,0,_))}else H|=D.COLOR_BUFFER_BIT}N&&(H|=D.DEPTH_BUFFER_BIT),z&&(H|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),we.dispose(),de.dispose(),qe.dispose(),ye.dispose(),T.dispose(),B.dispose(),j.dispose(),ot.dispose(),I.dispose(),ve.dispose(),X.dispose(),X.removeEventListener("sessionstart",xu),X.removeEventListener("sessionend",vu),ns.stop()};function Z(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const b=at.autoReset,N=pe.enabled,z=pe.autoUpdate,H=pe.needsUpdate,U=pe.type;oe(),at.autoReset=b,pe.enabled=N,pe.autoUpdate=z,pe.needsUpdate=H,pe.type=U}function ce(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ne(b){const N=b.target;N.removeEventListener("dispose",Ne),_t(N)}function _t(b){Ot(b),ye.remove(b)}function Ot(b){const N=ye.get(b).programs;N!==void 0&&(N.forEach(function(z){ve.releaseProgram(z)}),b.isShaderMaterial&&ve.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,z,H,U,Q){N===null&&(N=vt);const ae=U.isMesh&&U.matrixWorld.determinant()<0,fe=e_(b,N,z,H,U);Me.setMaterial(H,ae);let _e=z.index,Ce=1;if(H.wireframe===!0){if(_e=$.getWireframeAttribute(z),_e===void 0)return;Ce=2}const Le=z.drawRange,Se=z.attributes.position;let je=Le.start*Ce,Je=(Le.start+Le.count)*Ce;Q!==null&&(je=Math.max(je,Q.start*Ce),Je=Math.min(Je,(Q.start+Q.count)*Ce)),_e!==null?(je=Math.max(je,0),Je=Math.min(Je,_e.count)):Se!=null&&(je=Math.max(je,0),Je=Math.min(Je,Se.count));const Mt=Je-je;if(Mt<0||Mt===1/0)return;ot.setup(U,H,fe,z,_e);let gt,Ke=me;if(_e!==null&&(gt=K.get(_e),Ke=We,Ke.setIndex(gt)),U.isMesh)H.wireframe===!0?(Me.setLineWidth(H.wireframeLinewidth*He()),Ke.setMode(D.LINES)):Ke.setMode(D.TRIANGLES);else if(U.isLine){let Te=H.linewidth;Te===void 0&&(Te=1),Me.setLineWidth(Te*He()),U.isLineSegments?Ke.setMode(D.LINES):U.isLineLoop?Ke.setMode(D.LINE_LOOP):Ke.setMode(D.LINE_STRIP)}else U.isPoints?Ke.setMode(D.POINTS):U.isSprite&&Ke.setMode(D.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)ds("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ke.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))Ke.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Te=U._multiDrawStarts,Nt=U._multiDrawCounts,Qe=U._multiDrawCount,Dn=_e?K.get(_e).bytesPerElement:1,Fs=ye.get(H).currentProgram.getUniforms();for(let on=0;on<Qe;on++)Fs.setValue(D,"_gl_DrawID",on),Ke.render(Te[on]/Dn,Nt[on])}else if(U.isInstancedMesh)Ke.renderInstances(je,Mt,U.count);else if(z.isInstancedBufferGeometry){const Te=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Nt=Math.min(z.instanceCount,Te);Ke.renderInstances(je,Mt,Nt)}else Ke.render(je,Mt)};function et(b,N,z){b.transparent===!0&&b.side===Fn&&b.forceSinglePass===!1?(b.side=Jt,b.needsUpdate=!0,Oo(b,N,z),b.side=Si,b.needsUpdate=!0,Oo(b,N,z),b.side=Fn):Oo(b,N,z)}this.compile=function(b,N,z=null){z===null&&(z=b),p=qe.get(z),p.init(N),M.push(p),z.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),b!==z&&b.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const H=new Set;return b.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const Q=U.material;if(Q)if(Array.isArray(Q))for(let ae=0;ae<Q.length;ae++){const fe=Q[ae];et(fe,z,U),H.add(fe)}else et(Q,z,U),H.add(Q)}),p=M.pop(),H},this.compileAsync=function(b,N,z=null){const H=this.compile(b,N,z);return new Promise(U=>{function Q(){if(H.forEach(function(ae){ye.get(ae).currentProgram.isReady()&&H.delete(ae)}),H.size===0){U(b);return}setTimeout(Q,10)}Ve.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Ln=null;function ri(b){Ln&&Ln(b)}function xu(){ns.stop()}function vu(){ns.start()}const ns=new xp;ns.setAnimationLoop(ri),typeof self<"u"&&ns.setContext(self),this.setAnimationLoop=function(b){Ln=b,X.setAnimationLoop(b),b===null?ns.stop():ns.start()},X.addEventListener("sessionstart",xu),X.addEventListener("sessionend",vu),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(N),N=X.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,N,R),p=qe.get(b,M.length),p.init(N),M.push(p),be.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),W.setFromProjectionMatrix(be),ge=this.localClippingEnabled,J=ee.init(this.clippingPlanes,ge),m=de.get(b,v.length),m.init(),v.push(m),X.enabled===!0&&X.isPresenting===!0){const Q=x.xr.getDepthSensingMesh();Q!==null&&Qa(Q,N,-1/0,x.sortObjects)}Qa(b,N,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(te,se),dt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,dt&&we.addToRenderList(m,b),this.info.render.frame++,J===!0&&ee.beginShadows();const z=p.state.shadowsArray;pe.render(z,b,N),J===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,U=m.transmissive;if(p.setupLights(),N.isArrayCamera){const Q=N.cameras;if(U.length>0)for(let ae=0,fe=Q.length;ae<fe;ae++){const _e=Q[ae];Mu(H,U,b,_e)}dt&&we.render(b);for(let ae=0,fe=Q.length;ae<fe;ae++){const _e=Q[ae];yu(m,b,_e,_e.viewport)}}else U.length>0&&Mu(H,U,b,N),dt&&we.render(b),yu(m,b,N);R!==null&&w===0&&(C.updateMultisampleRenderTarget(R),C.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(x,b,N),ot.resetDefaultState(),y=-1,S=null,M.pop(),M.length>0?(p=M[M.length-1],J===!0&&ee.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Qa(b,N,z,H){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||W.intersectsSprite(b)){H&&xe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(be);const ae=j.update(b),fe=b.material;fe.visible&&m.push(b,ae,fe,z,xe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||W.intersectsObject(b))){const ae=j.update(b),fe=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),xe.copy(b.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),xe.copy(ae.boundingSphere.center)),xe.applyMatrix4(b.matrixWorld).applyMatrix4(be)),Array.isArray(fe)){const _e=ae.groups;for(let Ce=0,Le=_e.length;Ce<Le;Ce++){const Se=_e[Ce],je=fe[Se.materialIndex];je&&je.visible&&m.push(b,ae,je,z,xe.z,Se)}}else fe.visible&&m.push(b,ae,fe,z,xe.z,null)}}const Q=b.children;for(let ae=0,fe=Q.length;ae<fe;ae++)Qa(Q[ae],N,z,H)}function yu(b,N,z,H){const U=b.opaque,Q=b.transmissive,ae=b.transparent;p.setupLightsView(z),J===!0&&ee.setGlobalState(x.clippingPlanes,z),H&&Me.viewport(P.copy(H)),U.length>0&&Uo(U,N,z),Q.length>0&&Uo(Q,N,z),ae.length>0&&Uo(ae,N,z),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Mu(b,N,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new ws(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?Do:Ti,minFilter:xi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));const Q=p.state.transmissionRenderTarget[H.id],ae=H.viewport||P;Q.setSize(ae.z*x.transmissionResolutionScale,ae.w*x.transmissionResolutionScale);const fe=x.getRenderTarget();x.setRenderTarget(Q),x.getClearColor(Y),G=x.getClearAlpha(),G<1&&x.setClearColor(16777215,.5),x.clear(),dt&&we.render(z);const _e=x.toneMapping;x.toneMapping=Vi;const Ce=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),J===!0&&ee.setGlobalState(x.clippingPlanes,H),Uo(b,z,H),C.updateMultisampleRenderTarget(Q),C.updateRenderTargetMipmap(Q),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let Se=0,je=N.length;Se<je;Se++){const Je=N[Se],Mt=Je.object,gt=Je.geometry,Ke=Je.material,Te=Je.group;if(Ke.side===Fn&&Mt.layers.test(H.layers)){const Nt=Ke.side;Ke.side=Jt,Ke.needsUpdate=!0,Su(Mt,z,H,gt,Ke,Te),Ke.side=Nt,Ke.needsUpdate=!0,Le=!0}}Le===!0&&(C.updateMultisampleRenderTarget(Q),C.updateRenderTargetMipmap(Q))}x.setRenderTarget(fe),x.setClearColor(Y,G),Ce!==void 0&&(H.viewport=Ce),x.toneMapping=_e}function Uo(b,N,z){const H=N.isScene===!0?N.overrideMaterial:null;for(let U=0,Q=b.length;U<Q;U++){const ae=b[U],fe=ae.object,_e=ae.geometry,Ce=H===null?ae.material:H,Le=ae.group;fe.layers.test(z.layers)&&Su(fe,N,z,_e,Ce,Le)}}function Su(b,N,z,H,U,Q){b.onBeforeRender(x,N,z,H,U,Q),b.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),U.onBeforeRender(x,N,z,H,b,Q),U.transparent===!0&&U.side===Fn&&U.forceSinglePass===!1?(U.side=Jt,U.needsUpdate=!0,x.renderBufferDirect(z,N,H,U,b,Q),U.side=Si,U.needsUpdate=!0,x.renderBufferDirect(z,N,H,U,b,Q),U.side=Fn):x.renderBufferDirect(z,N,H,U,b,Q),b.onAfterRender(x,N,z,H,U,Q)}function Oo(b,N,z){N.isScene!==!0&&(N=vt);const H=ye.get(b),U=p.state.lights,Q=p.state.shadowsArray,ae=U.state.version,fe=ve.getParameters(b,U.state,Q,N,z),_e=ve.getProgramCacheKey(fe);let Ce=H.programs;H.environment=b.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(b.isMeshStandardMaterial?B:T).get(b.envMap||H.environment),H.envMapRotation=H.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,Ce===void 0&&(b.addEventListener("dispose",Ne),Ce=new Map,H.programs=Ce);let Le=Ce.get(_e);if(Le!==void 0){if(H.currentProgram===Le&&H.lightsStateVersion===ae)return Eu(b,fe),Le}else fe.uniforms=ve.getUniforms(b),b.onBeforeCompile(fe,x),Le=ve.acquireProgram(fe,_e),Ce.set(_e,Le),H.uniforms=fe.uniforms;const Se=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Se.clippingPlanes=ee.uniform),Eu(b,fe),H.needsLights=n_(b),H.lightsStateVersion=ae,H.needsLights&&(Se.ambientLightColor.value=U.state.ambient,Se.lightProbe.value=U.state.probe,Se.directionalLights.value=U.state.directional,Se.directionalLightShadows.value=U.state.directionalShadow,Se.spotLights.value=U.state.spot,Se.spotLightShadows.value=U.state.spotShadow,Se.rectAreaLights.value=U.state.rectArea,Se.ltc_1.value=U.state.rectAreaLTC1,Se.ltc_2.value=U.state.rectAreaLTC2,Se.pointLights.value=U.state.point,Se.pointLightShadows.value=U.state.pointShadow,Se.hemisphereLights.value=U.state.hemi,Se.directionalShadowMap.value=U.state.directionalShadowMap,Se.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Se.spotShadowMap.value=U.state.spotShadowMap,Se.spotLightMatrix.value=U.state.spotLightMatrix,Se.spotLightMap.value=U.state.spotLightMap,Se.pointShadowMap.value=U.state.pointShadowMap,Se.pointShadowMatrix.value=U.state.pointShadowMatrix),H.currentProgram=Le,H.uniformsList=null,Le}function Tu(b){if(b.uniformsList===null){const N=b.currentProgram.getUniforms();b.uniformsList=Ta.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function Eu(b,N){const z=ye.get(b);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.batchingColor=N.batchingColor,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.instancingMorph=N.instancingMorph,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function e_(b,N,z,H,U){N.isScene!==!0&&(N=vt),C.resetTextureUnits();const Q=N.fog,ae=H.isMeshStandardMaterial?N.environment:null,fe=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Kt,_e=(H.isMeshStandardMaterial?B:T).get(H.envMap||ae),Ce=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Le=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Se=!!z.morphAttributes.position,je=!!z.morphAttributes.normal,Je=!!z.morphAttributes.color;let Mt=Vi;H.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Mt=x.toneMapping);const gt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ke=gt!==void 0?gt.length:0,Te=ye.get(H),Nt=p.state.lights;if(J===!0&&(ge===!0||b!==S)){const Vt=b===S&&H.id===y;ee.setState(H,b,Vt)}let Qe=!1;H.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==Nt.state.version||Te.outputColorSpace!==fe||U.isBatchedMesh&&Te.batching===!1||!U.isBatchedMesh&&Te.batching===!0||U.isBatchedMesh&&Te.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Te.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Te.instancing===!1||!U.isInstancedMesh&&Te.instancing===!0||U.isSkinnedMesh&&Te.skinning===!1||!U.isSkinnedMesh&&Te.skinning===!0||U.isInstancedMesh&&Te.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Te.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Te.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Te.instancingMorph===!1&&U.morphTexture!==null||Te.envMap!==_e||H.fog===!0&&Te.fog!==Q||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==ee.numPlanes||Te.numIntersection!==ee.numIntersection)||Te.vertexAlphas!==Ce||Te.vertexTangents!==Le||Te.morphTargets!==Se||Te.morphNormals!==je||Te.morphColors!==Je||Te.toneMapping!==Mt||Te.morphTargetsCount!==Ke)&&(Qe=!0):(Qe=!0,Te.__version=H.version);let Dn=Te.currentProgram;Qe===!0&&(Dn=Oo(H,N,U));let Fs=!1,on=!1,Wr=!1;const ct=Dn.getUniforms(),yn=Te.uniforms;if(Me.useProgram(Dn.program)&&(Fs=!0,on=!0,Wr=!0),H.id!==y&&(y=H.id,on=!0),Fs||S!==b){Me.buffers.depth.getReversed()?(re.copy(b.projectionMatrix),dg(re),pg(re),ct.setValue(D,"projectionMatrix",re)):ct.setValue(D,"projectionMatrix",b.projectionMatrix),ct.setValue(D,"viewMatrix",b.matrixWorldInverse);const Zt=ct.map.cameraPosition;Zt!==void 0&&Zt.setValue(D,Ye.setFromMatrixPosition(b.matrixWorld)),Ge.logarithmicDepthBuffer&&ct.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ct.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,on=!0,Wr=!0)}if(U.isSkinnedMesh){ct.setOptional(D,U,"bindMatrix"),ct.setOptional(D,U,"bindMatrixInverse");const Vt=U.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),ct.setValue(D,"boneTexture",Vt.boneTexture,C))}U.isBatchedMesh&&(ct.setOptional(D,U,"batchingTexture"),ct.setValue(D,"batchingTexture",U._matricesTexture,C),ct.setOptional(D,U,"batchingIdTexture"),ct.setValue(D,"batchingIdTexture",U._indirectTexture,C),ct.setOptional(D,U,"batchingColorTexture"),U._colorsTexture!==null&&ct.setValue(D,"batchingColorTexture",U._colorsTexture,C));const Mn=z.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&Re.update(U,z,Dn),(on||Te.receiveShadow!==U.receiveShadow)&&(Te.receiveShadow=U.receiveShadow,ct.setValue(D,"receiveShadow",U.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(yn.envMap.value=_e,yn.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(yn.envMapIntensity.value=N.environmentIntensity),on&&(ct.setValue(D,"toneMappingExposure",x.toneMappingExposure),Te.needsLights&&t_(yn,Wr),Q&&H.fog===!0&&le.refreshFogUniforms(yn,Q),le.refreshMaterialUniforms(yn,H,k,q,p.state.transmissionRenderTarget[b.id]),Ta.upload(D,Tu(Te),yn,C)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ta.upload(D,Tu(Te),yn,C),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ct.setValue(D,"center",U.center),ct.setValue(D,"modelViewMatrix",U.modelViewMatrix),ct.setValue(D,"normalMatrix",U.normalMatrix),ct.setValue(D,"modelMatrix",U.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Vt=H.uniformsGroups;for(let Zt=0,el=Vt.length;Zt<el;Zt++){const is=Vt[Zt];I.update(is,Dn),I.bind(is,Dn)}}return Dn}function t_(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function n_(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,N,z){ye.get(b.texture).__webglTexture=N,ye.get(b.depthTexture).__webglTexture=z;const H=ye.get(b);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,N){const z=ye.get(b);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0};const i_=D.createFramebuffer();this.setRenderTarget=function(b,N=0,z=0){R=b,A=N,w=z;let H=!0,U=null,Q=!1,ae=!1;if(b){const _e=ye.get(b);if(_e.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(D.FRAMEBUFFER,null),H=!1;else if(_e.__webglFramebuffer===void 0)C.setupRenderTarget(b);else if(_e.__hasExternalTextures)C.rebindTextures(b,ye.get(b.texture).__webglTexture,ye.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Se=b.depthTexture;if(_e.__boundDepthTexture!==Se){if(Se!==null&&ye.has(Se)&&(b.width!==Se.image.width||b.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(b)}}const Ce=b.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(ae=!0);const Le=ye.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Le[N])?U=Le[N][z]:U=Le[N],Q=!0):b.samples>0&&C.useMultisampledRTT(b)===!1?U=ye.get(b).__webglMultisampledFramebuffer:Array.isArray(Le)?U=Le[z]:U=Le,P.copy(b.viewport),F.copy(b.scissor),O=b.scissorTest}else P.copy(he).multiplyScalar(k).floor(),F.copy(Ae).multiplyScalar(k).floor(),O=Oe;if(z!==0&&(U=i_),Me.bindFramebuffer(D.FRAMEBUFFER,U)&&H&&Me.drawBuffers(b,U),Me.viewport(P),Me.scissor(F),Me.setScissorTest(O),Q){const _e=ye.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,_e.__webglTexture,z)}else if(ae){const _e=ye.get(b.texture),Ce=N;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,_e.__webglTexture,z,Ce)}else if(b!==null&&z!==0){const _e=ye.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,_e.__webglTexture,z)}y=-1},this.readRenderTargetPixels=function(b,N,z,H,U,Q,ae){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=ye.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ae!==void 0&&(fe=fe[ae]),fe){Me.bindFramebuffer(D.FRAMEBUFFER,fe);try{const _e=b.texture,Ce=_e.format,Le=_e.type;if(!Ge.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-H&&z>=0&&z<=b.height-U&&D.readPixels(N,z,H,U,Fe.convert(Ce),Fe.convert(Le),Q)}finally{const _e=R!==null?ye.get(R).__webglFramebuffer:null;Me.bindFramebuffer(D.FRAMEBUFFER,_e)}}},this.readRenderTargetPixelsAsync=async function(b,N,z,H,U,Q,ae){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=ye.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ae!==void 0&&(fe=fe[ae]),fe){const _e=b.texture,Ce=_e.format,Le=_e.type;if(!Ge.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=b.width-H&&z>=0&&z<=b.height-U){Me.bindFramebuffer(D.FRAMEBUFFER,fe);const Se=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Se),D.bufferData(D.PIXEL_PACK_BUFFER,Q.byteLength,D.STREAM_READ),D.readPixels(N,z,H,U,Fe.convert(Ce),Fe.convert(Le),0);const je=R!==null?ye.get(R).__webglFramebuffer:null;Me.bindFramebuffer(D.FRAMEBUFFER,je);const Je=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await fg(D,Je,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Se),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Q),D.deleteBuffer(Se),D.deleteSync(Je),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,N=null,z=0){b.isTexture!==!0&&(ds("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,b=arguments[1]);const H=Math.pow(2,-z),U=Math.floor(b.image.width*H),Q=Math.floor(b.image.height*H),ae=N!==null?N.x:0,fe=N!==null?N.y:0;C.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,z,0,0,ae,fe,U,Q),Me.unbindTexture()};const s_=D.createFramebuffer(),r_=D.createFramebuffer();this.copyTextureToTexture=function(b,N,z=null,H=null,U=0,Q=null){b.isTexture!==!0&&(ds("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,b=arguments[1],N=arguments[2],Q=arguments[3]||0,z=null),Q===null&&(U!==0?(ds("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=U,U=0):Q=0);let ae,fe,_e,Ce,Le,Se,je,Je,Mt;const gt=b.isCompressedTexture?b.mipmaps[Q]:b.image;if(z!==null)ae=z.max.x-z.min.x,fe=z.max.y-z.min.y,_e=z.isBox3?z.max.z-z.min.z:1,Ce=z.min.x,Le=z.min.y,Se=z.isBox3?z.min.z:0;else{const Mn=Math.pow(2,-U);ae=Math.floor(gt.width*Mn),fe=Math.floor(gt.height*Mn),b.isDataArrayTexture?_e=gt.depth:b.isData3DTexture?_e=Math.floor(gt.depth*Mn):_e=1,Ce=0,Le=0,Se=0}H!==null?(je=H.x,Je=H.y,Mt=H.z):(je=0,Je=0,Mt=0);const Ke=Fe.convert(N.format),Te=Fe.convert(N.type);let Nt;N.isData3DTexture?(C.setTexture3D(N,0),Nt=D.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(C.setTexture2DArray(N,0),Nt=D.TEXTURE_2D_ARRAY):(C.setTexture2D(N,0),Nt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const Qe=D.getParameter(D.UNPACK_ROW_LENGTH),Dn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Fs=D.getParameter(D.UNPACK_SKIP_PIXELS),on=D.getParameter(D.UNPACK_SKIP_ROWS),Wr=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,gt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,gt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ce),D.pixelStorei(D.UNPACK_SKIP_ROWS,Le),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Se);const ct=b.isDataArrayTexture||b.isData3DTexture,yn=N.isDataArrayTexture||N.isData3DTexture;if(b.isDepthTexture){const Mn=ye.get(b),Vt=ye.get(N),Zt=ye.get(Mn.__renderTarget),el=ye.get(Vt.__renderTarget);Me.bindFramebuffer(D.READ_FRAMEBUFFER,Zt.__webglFramebuffer),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,el.__webglFramebuffer);for(let is=0;is<_e;is++)ct&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ye.get(b).__webglTexture,U,Se+is),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ye.get(N).__webglTexture,Q,Mt+is)),D.blitFramebuffer(Ce,Le,ae,fe,je,Je,ae,fe,D.DEPTH_BUFFER_BIT,D.NEAREST);Me.bindFramebuffer(D.READ_FRAMEBUFFER,null),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(U!==0||b.isRenderTargetTexture||ye.has(b)){const Mn=ye.get(b),Vt=ye.get(N);Me.bindFramebuffer(D.READ_FRAMEBUFFER,s_),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,r_);for(let Zt=0;Zt<_e;Zt++)ct?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Mn.__webglTexture,U,Se+Zt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Mn.__webglTexture,U),yn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Vt.__webglTexture,Q,Mt+Zt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Vt.__webglTexture,Q),U!==0?D.blitFramebuffer(Ce,Le,ae,fe,je,Je,ae,fe,D.COLOR_BUFFER_BIT,D.NEAREST):yn?D.copyTexSubImage3D(Nt,Q,je,Je,Mt+Zt,Ce,Le,ae,fe):D.copyTexSubImage2D(Nt,Q,je,Je,Ce,Le,ae,fe);Me.bindFramebuffer(D.READ_FRAMEBUFFER,null),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else yn?b.isDataTexture||b.isData3DTexture?D.texSubImage3D(Nt,Q,je,Je,Mt,ae,fe,_e,Ke,Te,gt.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(Nt,Q,je,Je,Mt,ae,fe,_e,Ke,gt.data):D.texSubImage3D(Nt,Q,je,Je,Mt,ae,fe,_e,Ke,Te,gt):b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Q,je,Je,ae,fe,Ke,Te,gt.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Q,je,Je,gt.width,gt.height,Ke,gt.data):D.texSubImage2D(D.TEXTURE_2D,Q,je,Je,ae,fe,Ke,Te,gt);D.pixelStorei(D.UNPACK_ROW_LENGTH,Qe),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Dn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Fs),D.pixelStorei(D.UNPACK_SKIP_ROWS,on),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Wr),Q===0&&N.generateMipmaps&&D.generateMipmap(Nt),Me.unbindTexture()},this.copyTextureToTexture3D=function(b,N,z=null,H=null,U=0){return b.isTexture!==!0&&(ds("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,H=arguments[1]||null,b=arguments[2],N=arguments[3],U=arguments[4]||0),ds('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,N,z,H,U)},this.initRenderTarget=function(b){ye.get(b).__webglFramebuffer===void 0&&C.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?C.setTextureCube(b,0):b.isData3DTexture?C.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?C.setTexture2DArray(b,0):C.setTexture2D(b,0),Me.unbindTexture()},this.resetState=function(){A=0,w=0,R=null,Me.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}}const jf={type:"change"},Wh={type:"start"},Tp={type:"end"},ua=new Ur,Kf=new Ni,wS=Math.cos(70*jd.DEG2RAD),bt=new L,$t=2*Math.PI,st={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Fl=1e-6;class RS extends G0{constructor(e,t=null){super(e,t),this.state=st.NONE,this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:or.ROTATE,MIDDLE:or.DOLLY,RIGHT:or.PAN},this.touches={ONE:tr.ROTATE,TWO:tr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new Wn,this._lastTargetPosition=new L,this._quat=new Wn().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Sf,this._sphericalDelta=new Sf,this._scale=1,this._panOffset=new L,this._rotateStart=new ie,this._rotateEnd=new ie,this._rotateDelta=new ie,this._panStart=new ie,this._panEnd=new ie,this._panDelta=new ie,this._dollyStart=new ie,this._dollyEnd=new ie,this._dollyDelta=new ie,this._dollyDirection=new L,this._mouse=new ie,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=PS.bind(this),this._onPointerDown=CS.bind(this),this._onPointerUp=LS.bind(this),this._onContextMenu=BS.bind(this),this._onMouseWheel=NS.bind(this),this._onKeyDown=US.bind(this),this._onTouchStart=OS.bind(this),this._onTouchMove=FS.bind(this),this._onMouseDown=DS.bind(this),this._onMouseMove=IS.bind(this),this._interceptControlDown=zS.bind(this),this._interceptControlUp=kS.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(jf),this.update(),this.state=st.NONE}update(e=null){const t=this.object.position;bt.copy(t).sub(this.target),bt.applyQuaternion(this._quat),this._spherical.setFromVector3(bt),this.autoRotate&&this.state===st.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=$t:n>Math.PI&&(n-=$t),i<-Math.PI?i+=$t:i>Math.PI&&(i-=$t),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(bt.setFromSpherical(this._spherical),bt.applyQuaternion(this._quatInverse),t.copy(this.target).add(bt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=bt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=bt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ua.origin.copy(this.object.position),ua.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ua.direction))<wS?this.object.lookAt(this.target):(Kf.setFromNormalAndCoplanarPoint(this.object.up,this.target),ua.intersectPlane(Kf,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Fl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Fl||this._lastTargetPosition.distanceToSquared(this.target)>Fl?(this.dispatchEvent(jf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?$t/60*this.autoRotateSpeed*e:$t/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){bt.setFromMatrixColumn(t,0),bt.multiplyScalar(-e),this._panOffset.add(bt)}_panUp(e,t){this.screenSpacePanning===!0?bt.setFromMatrixColumn(t,1):(bt.setFromMatrixColumn(t,0),bt.crossVectors(this.object.up,bt)),bt.multiplyScalar(e),this._panOffset.add(bt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;bt.copy(i).sub(this.target);let s=bt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,s=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft($t*this._rotateDelta.x/t.clientHeight),this._rotateUp($t*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp($t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-$t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft($t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-$t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft($t*this._rotateDelta.x/t.clientHeight),this._rotateUp($t*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ie,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function CS(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function PS(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function LS(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Tp),this.state=st.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function DS(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case or.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=st.DOLLY;break;case or.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=st.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=st.ROTATE}break;case or.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=st.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=st.PAN}break;default:this.state=st.NONE}this.state!==st.NONE&&this.dispatchEvent(Wh)}function IS(r){switch(this.state){case st.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case st.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case st.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function NS(r){this.enabled===!1||this.enableZoom===!1||this.state!==st.NONE||(r.preventDefault(),this.dispatchEvent(Wh),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Tp))}function US(r){this.enabled!==!1&&this._handleKeyDown(r)}function OS(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case tr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=st.TOUCH_ROTATE;break;case tr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=st.TOUCH_PAN;break;default:this.state=st.NONE}break;case 2:switch(this.touches.TWO){case tr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=st.TOUCH_DOLLY_PAN;break;case tr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=st.TOUCH_DOLLY_ROTATE;break;default:this.state=st.NONE}break;default:this.state=st.NONE}this.state!==st.NONE&&this.dispatchEvent(Wh)}function FS(r){switch(this._trackPointer(r),this.state){case st.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case st.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case st.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case st.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=st.NONE}}function BS(r){this.enabled!==!1&&r.preventDefault()}function zS(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function kS(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Zf(r,e){if(e===B_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Uc||e===Xd){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Uc)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class HS extends zr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new YS(t)}),this.register(function(t){return new qS(t)}),this.register(function(t){return new nT(t)}),this.register(function(t){return new iT(t)}),this.register(function(t){return new sT(t)}),this.register(function(t){return new KS(t)}),this.register(function(t){return new ZS(t)}),this.register(function(t){return new $S(t)}),this.register(function(t){return new JS(t)}),this.register(function(t){return new XS(t)}),this.register(function(t){return new QS(t)}),this.register(function(t){return new jS(t)}),this.register(function(t){return new tT(t)}),this.register(function(t){return new eT(t)}),this.register(function(t){return new GS(t)}),this.register(function(t){return new rT(t)}),this.register(function(t){return new oT(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=po.extractUrlBase(e);o=po.resolveURL(c,this.path)}else o=po.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new mp(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Ep){try{o[ze.KHR_BINARY_GLTF]=new aT(e)}catch(u){i&&i(u);return}s=JSON.parse(o[ze.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new yT(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],f=s.extensionsRequired||[];switch(u){case ze.KHR_MATERIALS_UNLIT:o[u]=new WS;break;case ze.KHR_DRACO_MESH_COMPRESSION:o[u]=new lT(s,this.dracoLoader);break;case ze.KHR_TEXTURE_TRANSFORM:o[u]=new cT;break;case ze.KHR_MESH_QUANTIZATION:o[u]=new hT;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function VS(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class GS{constructor(e){this.parser=e,this.name=ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new De(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Kt);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new P0(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new R0(h),c.distance=u;break;case"spot":c=new A0(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),di(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class WS{constructor(){this.name=ze.KHR_MATERIALS_UNLIT}getMaterialType(){return Kn}extendParams(e,t,n){const i=[];e.color=new De(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Kt),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Ct))}return Promise.all(i)}}class XS{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class YS{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ie(a,a)}return Promise.all(s)}}class qS{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class jS{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class KS{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new De(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Kt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ct)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class ZS{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class $S{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new De().setRGB(a[0],a[1],a[2],Kt),Promise.all(s)}}class JS{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class QS{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new De().setRGB(a[0],a[1],a[2],Kt),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ct)),Promise.all(s)}}class eT{constructor(e){this.parser=e,this.name=ze.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class tT{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ii}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class nT{constructor(e){this.parser=e,this.name=ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class iT{constructor(e){this.parser=e,this.name=ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class sT{constructor(e){this.parser=e,this.name=ze.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class rT{constructor(e){this.name=ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}}class oT{constructor(e){this.name=ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==En.TRIANGLES&&c.mode!==En.TRIANGLE_STRIP&&c.mode!==En.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(const g of u){const _=new Pe,m=new L,p=new Wn,v=new L(1,1,1),M=new Xg(g.geometry,g.material,f);for(let x=0;x<f;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&v.fromBufferAttribute(l.SCALE,x),M.setMatrixAt(x,_.compose(m,p,v));for(const x in l)if(x==="_COLOR_0"){const E=l[x];M.instanceColor=new Fc(E.array,E.itemSize,E.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);ft.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),d.push(M)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}}const Ep="glTF",Qr=12,$f={JSON:1313821514,BIN:5130562};class aT{constructor(e){this.name=ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Qr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ep)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Qr,s=new DataView(e,Qr);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===$f.JSON){const c=new Uint8Array(e,Qr+o,a);this.content=n.decode(c)}else if(l===$f.BIN){const c=Qr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class lT{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=Hc[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=Hc[h]||h.toLowerCase();if(o[h]!==void 0){const f=n.accessors[e.attributes[h]],d=hr[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(const g in d.attributes){const _=d.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}u(d)},a,c,Kt,f)})})}}class cT{constructor(){this.name=ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class hT{constructor(){this.name=ze.KHR_MESH_QUANTIZATION}}class bp extends Io{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,g=e*c,_=g-c,m=-2*d+3*f,p=d-f,v=1-m,M=p-f+u;for(let x=0;x!==a;x++){const E=o[_+x+a],A=o[_+x+l]*h,w=o[g+x+a],R=o[g+x]*h;s[x]=v*E+M*A+m*w+p*R}return s}}const uT=new Wn;class fT extends bp{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return uT.fromArray(s).normalize().toArray(s),s}}const En={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},hr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Jf={9728:qt,9729:un,9984:Ud,9985:ga,9986:io,9987:xi},Qf={33071:Oi,33648:Ca,10497:vr},Bl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Hc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ii={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},dT={CUBICSPLINE:void 0,LINEAR:Mo,STEP:yo},zl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function pT(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Bh({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Si})),r.DefaultMaterial}function hs(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function di(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function mT(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;o.push(f)}if(i){const f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;a.push(f)}if(s){const f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],f=c[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function _T(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function gT(r){let e;const t=r.extensions&&r.extensions[ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+kl(t.attributes):e=r.indices+":"+kl(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+kl(r.targets[n]);return e}function kl(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Vc(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function xT(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const vT=new Pe;class yT{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new VS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new _p(this.options.manager):this.textureLoader=new L0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new mp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return hs(s,a,i),di(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())s(h,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ze.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(po.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Bl[i.type],a=hr[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new jt(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Bl[i.type],c=hr[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(d&&d!==u){const p=Math.floor(f/d),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let M=t.cache.get(v);M||(_=new c(a,p*d,i.count*d/h),M=new kg(_,d/h),t.cache.add(v,M)),m=new Rh(M,l,f%d/h,g)}else a===null?_=new c(i.count*l):_=new c(a,f,i.count*l),m=new jt(_,l,g);if(i.sparse!==void 0){const p=Bl.SCALAR,v=hr[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,E=new v(o[1],M,i.sparse.count*p),A=new c(o[2],x,i.sparse.count*l);a!==null&&(m=new jt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,R=E.length;w<R;w++){const y=E[w];if(m.setX(y,A[w*l]),l>=2&&m.setY(y,A[w*l+1]),l>=3&&m.setZ(y,A[w*l+2]),l>=4&&m.setW(y,A[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return h.magFilter=Jf[f.magFilter]||un,h.minFilter=Jf[f.minFilter]||xi,h.wrapS=Qf[f.wrapS]||vr,h.wrapT=Qf[f.wrapT]||vr,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==qt&&h.minFilter!==un,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const f=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Pt(_);m.needsUpdate=!0,f(m)}),t.load(po.resolveURL(u,s.path),g,void 0,d)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),di(u,o),u.userData.mimeType=o.mimeType||xT(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[ze.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ze.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[ze.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new op,Gn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new rp,Gn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Bh}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[ze.KHR_MATERIALS_UNLIT]){const u=i[ze.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,s,t))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new De(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Kt),a.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Ct)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Fn);const h=s.alphaMode||zl.OPAQUE;if(h===zl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===zl.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Kn&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new ie(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==Kn&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Kn){const u=s.emissiveFactor;a.emissive=new De().setRGB(u[0],u[1],u[2],Kt)}return s.emissiveTexture!==void 0&&o!==Kn&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Ct)),Promise.all(c).then(function(){const u=new o(a);return s.name&&(u.name=s.name),di(u,s),t.associations.set(u,{materials:e}),s.extensions&&hs(i,u,s),u})}createUniqueName(e){const t=nt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return ed(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=gT(c),u=i[h];if(u)o.push(u.promise);else{let f;c.extensions&&c.extensions[ze.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=ed(new xn,c,t),i[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?pT(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,g=h.length;d<g;d++){const _=h[d],m=o[d];let p;const v=c[d];if(m.mode===En.TRIANGLES||m.mode===En.TRIANGLE_STRIP||m.mode===En.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new Vg(_,v):new ut(_,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===En.TRIANGLE_STRIP?p.geometry=Zf(p.geometry,Xd):m.mode===En.TRIANGLE_FAN&&(p.geometry=Zf(p.geometry,Uc));else if(m.mode===En.LINES)p=new jg(_,v);else if(m.mode===En.LINE_STRIP)p=new Lh(_,v);else if(m.mode===En.LINE_LOOP)p=new Kg(_,v);else if(m.mode===En.POINTS)p=new Zg(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&_T(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),di(p,s),m.extensions&&hs(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let d=0,g=u.length;d<g;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return s.extensions&&hs(i,u[0],s),u[0];const f=new xs;s.extensions&&hs(i,f,s),t.associations.set(f,{meshes:e});for(let d=0,g=u.length;d<g;d++)f.add(u[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Xt(jd.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new kh(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),di(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const f=new Pe;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ch(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){const d=i.channels[u],g=i.samplers[d.sampler],_=d.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",v)),c.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const f=u[0],d=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let v=0,M=f.length;v<M;v++){const x=f[v],E=d[v],A=g[v],w=_[v],R=m[v];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const y=n._createAnimationTracks(x,E,A,w,R);if(y)for(let S=0;S<y.length;S++)p.push(y[S])}return new v0(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,vT)});for(let d=0,g=u.length;d<g;d++)h.add(u[d]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(s.isBone===!0?h=new ip:c.length>1?h=new xs:c.length===1?h=c[0]:h=new ft,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=o),di(h,s),s.extensions&&hs(n,h,s),s.matrix!==void 0){const u=new Pe;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new xs;n.name&&(s.name=i.createUniqueName(n.name)),di(s,n),n.extensions&&hs(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);const c=h=>{const u=new Map;for(const[f,d]of i.associations)(f instanceof Gn||f instanceof Pt)&&u.set(f,d);return h.traverse(f=>{const d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,l=[];Ii[s.path]===Ii.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Ii[s.path]){case Ii.weights:c=Er;break;case Ii.rotation:c=br;break;case Ii.position:case Ii.scale:c=Ar;break;default:switch(n.itemSize){case 1:c=Er;break;case 2:case 3:default:c=Ar;break}break}const h=i.interpolation!==void 0?dT[i.interpolation]:Mo,u=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const g=new c(l[f]+"."+Ii[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Vc(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof br?fT:bp;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function MT(r,e,t){const n=e.attributes,i=new Ai;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),a.normalized){const h=Vc(hr[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new L,l=new L;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const f=t.json.accessors[u.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const _=Vc(hr[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new ti;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function ed(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=Hc[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return Xe.workingColorSpace!==Kt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Xe.workingColorSpace}" not supported.`),di(r,e),MT(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?mT(r,e.targets,t):r})}function pi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Ap(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var dn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},wr={duration:.5,overwrite:!1,delay:0},Xh,Ut,ht,$n=1e8,kt=1/$n,Gc=Math.PI*2,ST=Gc/4,TT=0,wp=Math.sqrt,ET=Math.cos,bT=Math.sin,It=function(e){return typeof e=="string"},xt=function(e){return typeof e=="function"},Ei=function(e){return typeof e=="number"},Yh=function(e){return typeof e>"u"},ei=function(e){return typeof e=="object"},Qt=function(e){return e!==!1},qh=function(){return typeof window<"u"},fa=function(e){return xt(e)||It(e)},Rp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ht=Array.isArray,Wc=/(?:-?\.?\d|\.)+/gi,Cp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ir=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Hl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Pp=/[+-]=-?[.\d]+/,Lp=/[^,'"\[\]\s]+/gi,AT=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,pt,Yn,Xc,jh,pn={},Na={},Dp,Ip=function(e){return(Na=Rr(e,pn))&&sn},Kh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},To=function(e,t){return!t&&console.warn(e)},Np=function(e,t){return e&&(pn[e]=t)&&Na&&(Na[e]=t)||pn},Eo=function(){return 0},wT={suppressEvents:!0,isStart:!0,kill:!1},Ea={suppressEvents:!0,kill:!1},RT={suppressEvents:!0},Zh={},Gi=[],Yc={},Up,cn={},Vl={},td=30,ba=[],$h="",Jh=function(e){var t=e[0],n,i;if(ei(t)||xt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=ba.length;i--&&!ba[i].targetTest(t););n=ba[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new rm(e[i],n)))||e.splice(i,1);return e},ys=function(e){return e._gsap||Jh(wn(e))[0]._gsap},Op=function(e,t,n){return(n=e[t])&&xt(n)?e[t]():Yh(n)&&e.getAttribute&&e.getAttribute(t)||n},en=function(e,t){return(e=e.split(",")).forEach(t)||e},yt=function(e){return Math.round(e*1e5)/1e5||0},Et=function(e){return Math.round(e*1e7)/1e7||0},ur=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},CT=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Ua=function(){var e=Gi.length,t=Gi.slice(0),n,i;for(Yc={},Gi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Fp=function(e,t,n,i){Gi.length&&!Ut&&Ua(),e.render(t,n,Ut&&t<0&&(e._initted||e._startAt)),Gi.length&&!Ut&&Ua()},Bp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Lp).length<2?t:It(e)?e.trim():e},zp=function(e){return e},mn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},PT=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Rr=function(e,t){for(var n in t)e[n]=t[n];return e},nd=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ei(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Oa=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},mo=function(e){var t=e.parent||pt,n=e.keyframes?PT(Ht(e.keyframes)):mn;if(Qt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},LT=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},kp=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},ja=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},qi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ms=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},DT=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},qc=function(e,t,n,i){return e._startAt&&(Ut?e._startAt.revert(Ea):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},IT=function r(e){return!e||e._ts&&r(e.parent)},id=function(e){return e._repeat?Cr(e._tTime,e=e.duration()+e._rDelay)*e:0},Cr=function(e,t){var n=Math.floor(e=Et(e/t));return e&&n===e?n-1:n},Fa=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ka=function(e){return e._end=Et(e._start+(e._tDur/Math.abs(e._ts||e._rts||kt)||0))},Za=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Et(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ka(e),n._dirty||Ms(n,e)),e},Hp=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Fa(e.rawTime(),t),(!t._dur||No(0,t.totalDuration(),n)-t._tTime>kt)&&t.render(n,!0)),Ms(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-1e-8}},jn=function(e,t,n,i){return t.parent&&qi(t),t._start=Et((Ei(n)?n:n||e!==pt?Tn(e,n,t):e._time)+t._delay),t._end=Et(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),kp(e,t,"_first","_last",e._sort?"_start":0),jc(t)||(e._recent=t),i||Hp(e,t),e._ts<0&&Za(e,e._tTime),e},Vp=function(e,t){return(pn.ScrollTrigger||Kh("scrollTrigger",t))&&pn.ScrollTrigger.create(t,e)},Gp=function(e,t,n,i,s){if(eu(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Ut&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Up!==hn.frame)return Gi.push(e),e._lazy=[s,i],1},NT=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},jc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},UT=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&NT(e)&&!(!e._initted&&jc(e))||(e._ts<0||e._dp._ts<0)&&!jc(e))?0:1,a=e._rDelay,l=0,c,h,u;if(a&&e._repeat&&(l=No(0,e._tDur,t),h=Cr(l,a),e._yoyo&&h&1&&(o=1-o),h!==Cr(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Ut||i||e._zTime===kt||!t&&e._zTime){if(!e._initted&&Gp(e,t,i,n,l))return;for(u=e._zTime,e._zTime=t||(n?kt:0),n||(n=t&&!u),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&qc(e,t,n,!0),e._onUpdate&&!n&&fn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&fn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&qi(e,1),!n&&!Ut&&(fn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},OT=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Pr=function(e,t,n,i){var s=e._repeat,o=Et(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Et(o*(s+1)+e._rDelay*s):o,a>0&&!i&&Za(e,e._tTime=e._tDur*a),e.parent&&Ka(e),n||Ms(e.parent,e),e},sd=function(e){return e instanceof Yt?Ms(e):Pr(e,e._dur)},FT={_start:0,endTime:Eo,totalDuration:Eo},Tn=function r(e,t,n){var i=e.labels,s=e._recent||FT,o=e.duration()>=$n?s.endTime(!1):e._dur,a,l,c;return It(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Ht(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},_o=function(e,t,n){var i=Ei(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Qt(l.vars.inherit)&&l.parent;o.immediateRender=Qt(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Tt(t[0],o,t[s+1])},Qi=function(e,t){return e||e===0?t(e):t},No=function(e,t,n){return n<e?e:n>t?t:n},zt=function(e,t){return!It(e)||!(t=AT.exec(e))?"":t[1]},BT=function(e,t,n){return Qi(n,function(i){return No(e,t,i)})},Kc=[].slice,Wp=function(e,t){return e&&ei(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ei(e[0]))&&!e.nodeType&&e!==Yn},zT=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return It(i)&&!t||Wp(i,1)?(s=n).push.apply(s,wn(i)):n.push(i)})||n},wn=function(e,t,n){return ht&&!t&&ht.selector?ht.selector(e):It(e)&&!n&&(Xc||!Lr())?Kc.call((t||jh).querySelectorAll(e),0):Ht(e)?zT(e,n):Wp(e)?Kc.call(e,0):e?[e]:[]},Zc=function(e){return e=wn(e)[0]||To("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return wn(t,n.querySelectorAll?n:n===e?To("Invalid scope")||jh.createElement("div"):e)}},Xp=function(e){return e.sort(function(){return .5-Math.random()})},Yp=function(e){if(xt(e))return e;var t=ei(e)?e:{each:e},n=Ss(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,h=i,u=i;return It(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(f,d,g){var _=(g||t).length,m=o[_],p,v,M,x,E,A,w,R,y;if(!m){if(y=t.grid==="auto"?0:(t.grid||[1,$n])[1],!y){for(w=-1e8;w<(w=g[y++].getBoundingClientRect().left)&&y<_;);y<_&&y--}for(m=o[_]=[],p=l?Math.min(y,_)*h-.5:i%y,v=y===$n?0:l?_*u/y-.5:i/y|0,w=0,R=$n,A=0;A<_;A++)M=A%y-p,x=v-(A/y|0),m[A]=E=c?Math.abs(c==="y"?x:M):wp(M*M+x*x),E>w&&(w=E),E<R&&(R=E);i==="random"&&Xp(m),m.max=w-R,m.min=R,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(y>_?_-1:c?c==="y"?_/y:y:Math.max(y,_/y))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=zt(t.amount||t.each)||0,n=n&&_<0?nm(n):n}return _=(m[f]-m.min)/m.max||0,Et(m.b+(n?n(_):_)*m.v)+m.u}},$c=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Et(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Ei(n)?0:zt(n))}},qp=function(e,t){var n=Ht(e),i,s;return!n&&ei(e)&&(i=n=e.radius||$n,e.values?(e=wn(e.values),(s=!Ei(e[0]))&&(i*=i)):e=$c(e.increment)),Qi(t,n?xt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=$n,h=0,u=e.length,f,d;u--;)s?(f=e[u].x-a,d=e[u].y-l,f=f*f+d*d):f=Math.abs(e[u]-a),f<c&&(c=f,h=u);return h=!i||c<=i?e[h]:o,s||h===o||Ei(o)?h:h+zt(o)}:$c(e))},jp=function(e,t,n,i){return Qi(Ht(e)?!t:n===!0?!!(n=0):!i,function(){return Ht(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},kT=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},HT=function(e,t){return function(n){return e(parseFloat(n))+(t||zt(n))}},VT=function(e,t,n){return Zp(e,t,0,1,n)},Kp=function(e,t,n){return Qi(n,function(i){return e[~~t(i)]})},GT=function r(e,t,n){var i=t-e;return Ht(e)?Kp(e,r(0,e.length),t):Qi(n,function(s){return(i+(s-e)%i)%i+e})},WT=function r(e,t,n){var i=t-e,s=i*2;return Ht(e)?Kp(e,r(0,e.length-1),t):Qi(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},bo=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?Lp:Wc),n+=e.substr(t,i-t)+jp(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},Zp=function(e,t,n,i,s){var o=t-e,a=i-n;return Qi(s,function(l){return n+((l-e)/o*a||0)})},XT=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=It(e),a={},l,c,h,u,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Ht(e)&&!Ht(t)){for(h=[],u=e.length,f=u-2,c=1;c<u;c++)h.push(r(e[c-1],e[c]));u--,s=function(g){g*=u;var _=Math.min(f,~~g);return h[_](g-_)},n=t}else i||(e=Rr(Ht(e)?[]:{},e));if(!h){for(l in t)Qh.call(a,e,l,"get",t[l]);s=function(g){return iu(g,a)||(o?e.p:e)}}}return Qi(n,s)},rd=function(e,t,n){var i=e.labels,s=$n,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},fn=function(e,t,n){var i=e.vars,s=i[t],o=ht,a=e._ctx,l,c,h;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Gi.length&&Ua(),a&&(ht=a),h=l?s.apply(c,l):s.call(c),ht=o,h},ro=function(e){return qi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ut),e.progress()<1&&fn(e,"onInterrupt"),e},sr,$p=[],Jp=function(e){if(e)if(e=!e.name&&e.default||e,qh()||e.headless){var t=e.name,n=xt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Eo,render:iu,add:Qh,kill:aE,modifier:oE,rawVars:0},o={targetTest:0,get:0,getSetter:nu,aliases:{},register:0};if(Lr(),e!==i){if(cn[t])return;mn(i,mn(Oa(e,s),o)),Rr(i.prototype,Rr(s,Oa(e,o))),cn[i.prop=t]=i,e.targetTest&&(ba.push(i),Zh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Np(t,i),e.register&&e.register(sn,i,tn)}else $p.push(e)},rt=255,oo={aqua:[0,rt,rt],lime:[0,rt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,rt],navy:[0,0,128],white:[rt,rt,rt],olive:[128,128,0],yellow:[rt,rt,0],orange:[rt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[rt,0,0],pink:[rt,192,203],cyan:[0,rt,rt],transparent:[rt,rt,rt,0]},Gl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*rt+.5|0},Qp=function(e,t,n){var i=e?Ei(e)?[e>>16,e>>8&rt,e&rt]:0:oo.black,s,o,a,l,c,h,u,f,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),oo[e])i=oo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&rt,i&rt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&rt,e&rt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Wc),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=Gl(l+1/3,s,o),i[1]=Gl(l,s,o),i[2]=Gl(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(Cp),n&&i.length<4&&(i[3]=1),i}else i=e.match(Wc)||oo.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/rt,o=i[1]/rt,a=i[2]/rt,u=Math.max(s,o,a),f=Math.min(s,o,a),h=(u+f)/2,u===f?l=c=0:(d=u-f,c=h>.5?d/(2-u-f):d/(u+f),l=u===s?(o-a)/d+(o<a?6:0):u===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},em=function(e){var t=[],n=[],i=-1;return e.split(Wi).forEach(function(s){var o=s.match(ir)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},od=function(e,t,n){var i="",s=(e+i).match(Wi),o=t?"hsla(":"rgba(",a=0,l,c,h,u;if(!s)return e;if(s=s.map(function(f){return(f=Qp(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=em(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(Wi,"1").split(ir),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=e.split(Wi),u=c.length-1;a<u;a++)i+=c[a]+s[a];return i+c[u]},Wi=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in oo)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),YT=/hsl[a]?\(/,tm=function(e){var t=e.join(" "),n;if(Wi.lastIndex=0,Wi.test(t))return n=YT.test(t),e[1]=od(e[1],n),e[0]=od(e[0],n,em(e[1])),!0},Ao,hn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,u,f,d,g=function _(m){var p=r()-i,v=m===!0,M,x,E,A;if((p>e||p<0)&&(n+=p-t),i+=p,E=i-n,M=E-o,(M>0||v)&&(A=++u.frame,f=E-u.time*1e3,u.time=E=E/1e3,o+=M+(M>=s?4:s-M),x=1),v||(l=c(_)),x)for(d=0;d<a.length;d++)a[d](E,f,A,m)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Dp&&(!Xc&&qh()&&(Yn=Xc=window,jh=Yn.document||{},pn.gsap=sn,(Yn.gsapVersions||(Yn.gsapVersions=[])).push(sn.version),Ip(Na||Yn.GreenSockGlobals||!Yn.gsap&&Yn||{}),$p.forEach(Jp)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,o-u.time*1e3+1|0)},Ao=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Ao=0,c=Eo},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=u.time*1e3+s},add:function(m,p,v){var M=p?function(x,E,A,w){m(x,E,A,w),u.remove(M)}:m;return u.remove(m),a[v?"unshift":"push"](M),Lr(),M},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},u}(),Lr=function(){return!Ao&&hn.wake()},ke={},qT=/^[\d.\-M][\d.\-,\s]/,jT=/["']/g,KT=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(jT,"").trim():+c,i=l.substr(a+1).trim();return t},ZT=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},$T=function(e){var t=(e+"").split("("),n=ke[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[KT(t[1])]:ZT(e).split(",").map(Bp)):ke._CE&&qT.test(e)?ke._CE("",e):n},nm=function(e){return function(t){return 1-e(1-t)}},im=function r(e,t){for(var n=e._first,i;n;)n instanceof Yt?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Ss=function(e,t){return e&&(xt(e)?e:ke[e]||$T(e))||t},Ds=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return en(e,function(a){ke[a]=pn[a]=s,ke[o=a.toLowerCase()]=n;for(var l in s)ke[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ke[a+"."+l]=s[l]}),s},sm=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Wl=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Gc*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*bT((h-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:sm(a);return s=Gc/s,l.config=function(c,h){return r(e,c,h)},l},Xl=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:sm(n);return i.config=function(s){return r(e,s)},i};en("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Ds(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ke.Linear.easeNone=ke.none=ke.Linear.easeIn;Ds("Elastic",Wl("in"),Wl("out"),Wl());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Ds("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Ds("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Ds("Circ",function(r){return-(wp(1-r*r)-1)});Ds("Sine",function(r){return r===1?1:-ET(r*ST)+1});Ds("Back",Xl("in"),Xl("out"),Xl());ke.SteppedEase=ke.steps=pn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-kt;return function(a){return((i*No(0,o,a)|0)+s)*n}}};wr.ease=ke["quad.out"];en("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return $h+=r+","+r+"Params,"});var rm=function(e,t){this.id=TT++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Op,this.set=t?t.getSetter:nu},wo=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Pr(this,+t.duration,1,1),this.data=t.data,ht&&(this._ctx=ht,ht.data.push(this)),Ao||hn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Pr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Lr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Za(this,n),!s._dp||s.parent||Hp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&jn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===kt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Fp(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+id(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+id(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Cr(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Fa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-1e-8?0:this._rts,this.totalTime(No(-Math.abs(this._delay),this._tDur,s),i!==!1),Ka(this),DT(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Lr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==kt&&(this._tTime-=kt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&jn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Qt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Fa(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=RT);var i=Ut;return Ut=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ut=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,sd(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,sd(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Tn(this,n),Qt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Qt(i)),this._dur||(this._zTime=-1e-8),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-kt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=xt(n)?n:zp,a=function(){var c=i.then;i.then=null,xt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){ro(this)},r}();mn(wo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var Yt=function(r){Ap(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Qt(n.sortChildren),pt&&jn(n.parent||pt,pi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Vp(pi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return _o(0,arguments,this),this},t.from=function(i,s,o){return _o(1,arguments,this),this},t.fromTo=function(i,s,o,a){return _o(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,mo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Tt(i,s,Tn(this,o),1),this},t.call=function(i,s,o){return jn(this,Tt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Tt(i,o,Tn(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,mo(o).immediateRender=Qt(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},t.staggerFromTo=function(i,s,o,a,l,c,h,u){return a.startAt=o,mo(a).immediateRender=Qt(a.immediateRender),this.staggerTo(i,s,a,l,c,h,u)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Et(i),u=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,_,m,p,v,M,x,E,A,w;if(this!==pt&&h>l&&i>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),f=h,x=this._start,M=this._ts,p=!M,u&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(f=Et(h%m),h===l?(_=this._repeat,f=c):(E=Et(h/m),_=~~E,_&&_===E&&(f=c,_--),f>c&&(f=c)),E=Cr(this._tTime,m),!a&&this._tTime&&E!==_&&this._tTime-E*m-this._dur<=0&&(E=_),A&&_&1&&(f=c-f,w=1),_!==E&&!this._lock){var R=A&&E&1,y=R===(A&&_&1);if(_<E&&(R=!R),a=R?0:h%c?c:h,this._lock=1,this.render(a||(w?0:Et(_*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&fn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,a=R?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;im(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=OT(this,Et(a),Et(f)),v&&(h-=f-(f=v._start))),this._tTime=h,this._time=f,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!s&&!_&&(fn(this,"onStart"),this._tTime!==h))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&v!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!p){v=0,g&&(h+=this._zTime=-1e-8);break}}d=g}else{d=this._last;for(var S=i<0?i:f;d;){if(g=d._prev,(d._act||S<=d._end)&&d._ts&&v!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(S-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(S-d._start)*d._ts,s,o||Ut&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!p){v=0,g&&(h+=this._zTime=S?-1e-8:kt);break}}d=g}}if(v&&!s&&(this.pause(),v.render(f>=a?0:-1e-8)._zTime=f>=a?1:-1,this._ts))return this._start=x,Ka(this),this.render(i,s,o);this._onUpdate&&!s&&fn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(x===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&qi(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(fn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Ei(s)||(s=Tn(this,s,i)),!(i instanceof wo)){if(Ht(i))return i.forEach(function(a){return o.add(a,s)}),this;if(It(i))return this.addLabel(i,s);if(xt(i))i=Tt.delayedCall(0,i);else return this}return this!==i?jn(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-1e8);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Tt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return It(i)?this.removeLabel(i):xt(i)?this.killTweensOf(i):(i.parent===this&&ja(this,i),i===this._recent&&(this._recent=this._last),Ms(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Et(hn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Tn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Tt.delayedCall(0,s||Eo,o);return a.data="isPause",this._hasPause=1,jn(this,a,Tn(this,i))},t.removePause=function(i){var s=this._first;for(i=Tn(this,i);s;)s._start===i&&s.data==="isPause"&&qi(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Bi!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=wn(i),l=this._first,c=Ei(s),h;l;)l instanceof Tt?CT(l._targets,a)&&(c?(!Bi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=Tn(o,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,d,g=Tt.to(o,mn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||kt,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&Pr(g,m,0,1).render(g._time,!0,!0),d=1}h&&h.apply(g,u||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,mn({startAt:{time:Tn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),rd(this,Tn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),rd(this,Tn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+kt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Ms(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ms(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=$n,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,jn(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Pr(o,o===pt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(pt._ts&&(Fp(pt,Fa(i,pt)),Up=hn.frame),hn.frame>=td){td+=dn.autoSleep||120;var s=pt._first;if((!s||!s._ts)&&dn.autoSleep&&hn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||hn.sleep()}}},e}(wo);mn(Yt.prototype,{_lock:0,_hasPause:0,_forcing:0});var JT=function(e,t,n,i,s,o,a){var l=new tn(this._pt,e,t,0,1,um,null,s),c=0,h=0,u,f,d,g,_,m,p,v;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=bo(i)),o&&(v=[n,i],o(v,e,t),n=v[0],i=v[1]),f=n.match(Hl)||[];u=Hl.exec(i);)g=u[0],_=i.substring(c,u.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[h++]&&(m=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:g.charAt(1)==="="?ur(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=Hl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Pp.test(i)||p)&&(l.e=0),this._pt=l,l},Qh=function(e,t,n,i,s,o,a,l,c,h){xt(i)&&(i=i(s||0,e,o));var u=e[t],f=n!=="get"?n:xt(u)?c?e[t.indexOf("set")||!xt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,d=xt(u)?c?iE:cm:tu,g;if(It(i)&&(~i.indexOf("random(")&&(i=bo(i)),i.charAt(1)==="="&&(g=ur(f,i)+(zt(f)||0),(g||g===0)&&(i=g))),!h||f!==i||Jc)return!isNaN(f*i)&&i!==""?(g=new tn(this._pt,e,t,+f||0,i-(f||0),typeof u=="boolean"?rE:hm,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!u&&!(t in e)&&Kh(t,i),JT.call(this,e,t,f,i,d,l||dn.stringFilter,c))},QT=function(e,t,n,i,s){if(xt(e)&&(e=go(e,s,t,n,i)),!ei(e)||e.style&&e.nodeType||Ht(e)||Rp(e))return It(e)?go(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=go(e[a],s,t,n,i);return o},om=function(e,t,n,i,s,o){var a,l,c,h;if(cn[e]&&(a=new cn[e]).init(s,a.rawVars?t[e]:QT(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new tn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==sr))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Bi,Jc,eu=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,f=i.keyframes,d=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,v=p&&p.data==="nested"?p.vars.targets:m,M=e._overwrite==="auto"&&!Xh,x=e.timeline,E,A,w,R,y,S,P,F,O,Y,G,V,q;if(x&&(!f||!s)&&(s="none"),e._ease=Ss(s,wr.ease),e._yEase=u?nm(Ss(u===!0?s:u,wr.ease)):0,u&&e._yoyo&&!e._repeat&&(u=e._yEase,e._yEase=e._ease,e._ease=u),e._from=!x&&!!i.runBackwards,!x||f&&!i.stagger){if(F=m[0]?ys(m[0]).harness:0,V=F&&i[F.prop],E=Oa(i,Zh),_&&(_._zTime<0&&_.progress(1),t<0&&h&&a&&!d?_.render(-1,!0):_.revert(h&&g?Ea:wT),_._lazy=0),o){if(qi(e._startAt=Tt.set(m,mn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Qt(l),startAt:null,delay:0,onUpdate:c&&function(){return fn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ut||!a&&!d)&&e._startAt.revert(Ea),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&g&&!_){if(t&&(a=!1),w=mn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Qt(l),immediateRender:a,stagger:0,parent:p},E),V&&(w[F.prop]=V),qi(e._startAt=Tt.set(m,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ut?e._startAt.revert(Ea):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,kt,kt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Qt(l)||l&&!g,A=0;A<m.length;A++){if(y=m[A],P=y._gsap||Jh(m)[A]._gsap,e._ptLookup[A]=Y={},Yc[P.id]&&Gi.length&&Ua(),G=v===m?A:v.indexOf(y),F&&(O=new F).init(y,V||E,e,G,v)!==!1&&(e._pt=R=new tn(e._pt,y,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(k){Y[k]=R}),O.priority&&(S=1)),!F||V)for(w in E)cn[w]&&(O=om(w,E,e,G,y,v))?O.priority&&(S=1):Y[w]=R=Qh.call(e,y,w,"get",E[w],G,v,0,i.stringFilter);e._op&&e._op[A]&&e.kill(y,e._op[A]),M&&e._pt&&(Bi=e,pt.killTweensOf(y,Y,e.globalTime(t)),q=!e.parent,Bi=0),e._pt&&l&&(Yc[P.id]=1)}S&&fm(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!q,f&&t<=0&&x.render($n,!0,!0)},eE=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(h=f[d][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Jc=1,e.vars[t]="+=0",eu(e,a),Jc=0,l?To(t+" not eligible for reset"):1;c.push(h)}for(d=c.length;d--;)u=c[d],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=yt(n)+zt(u.e)),u.b&&(u.b=h.s+zt(u.b))},tE=function(e,t){var n=e[0]?ys(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Rr({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},nE=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(Ht(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},go=function(e,t,n,i,s){return xt(e)?e.call(t,n,i,s):It(e)&&~e.indexOf("random(")?bo(e):e},am=$h+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",lm={};en(am+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return lm[r]=1});var Tt=function(r){Ap(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:mo(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,v=i.parent||pt,M=(Ht(n)||Rp(n)?Ei(n[0]):"length"in i)?[n]:wn(n),x,E,A,w,R,y,S,P;if(a._targets=M.length?Jh(M):To("GSAP target "+n+" not found. https://gsap.com",!dn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||f||fa(c)||fa(h)){if(i=a.vars,x=a.timeline=new Yt({data:"nested",defaults:_||{},targets:v&&v.data==="nested"?v.vars.targets:M}),x.kill(),x.parent=x._dp=pi(a),x._start=0,f||fa(c)||fa(h)){if(w=M.length,S=f&&Yp(f),ei(f))for(R in f)~am.indexOf(R)&&(P||(P={}),P[R]=f[R]);for(E=0;E<w;E++)A=Oa(i,lm),A.stagger=0,p&&(A.yoyoEase=p),P&&Rr(A,P),y=M[E],A.duration=+go(c,pi(a),E,y,M),A.delay=(+go(h,pi(a),E,y,M)||0)-a._delay,!f&&w===1&&A.delay&&(a._delay=h=A.delay,a._start+=h,A.delay=0),x.to(y,A,S?S(E,y,M):0),x._ease=ke.none;x.duration()?c=h=0:a.timeline=0}else if(g){mo(mn(x.vars.defaults,{ease:"none"})),x._ease=Ss(g.ease||i.ease||"none");var F=0,O,Y,G;if(Ht(g))g.forEach(function(V){return x.to(M,V,">")}),x.duration();else{A={};for(R in g)R==="ease"||R==="easeEach"||nE(R,g[R],A,g.easeEach);for(R in A)for(O=A[R].sort(function(V,q){return V.t-q.t}),F=0,E=0;E<O.length;E++)Y=O[E],G={ease:Y.e,duration:(Y.t-(E?O[E-1].t:0))/100*c},G[R]=Y.v,x.to(M,G,F),F+=G.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return d===!0&&!Xh&&(Bi=pi(a),pt.killTweensOf(M),Bi=0),jn(v,pi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!g&&a._start===Et(v._time)&&Qt(u)&&IT(pi(a))&&v.data!=="nested")&&(a._tTime=-1e-8,a.render(Math.max(0,-h)||0)),m&&Vp(pi(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-kt&&!h?l:i<kt?0:i,f,d,g,_,m,p,v,M,x;if(!c)UT(this,i,s,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=u,M=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,o);if(f=Et(u%_),u===l?(g=this._repeat,f=c):(m=Et(u/_),g=~~m,g&&g===m?(f=c,g--):f>c&&(f=c)),p=this._yoyo&&g&1,p&&(x=this._yEase,f=c-f),m=Cr(this._tTime,_),f===a&&!o&&this._initted&&g===m)return this._tTime=u,this;g!==m&&(M&&this._yEase&&im(M,p),this.vars.repeatRefresh&&!p&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(Et(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Gp(this,h?i:f,o,s,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(x||this._ease)(f/c),this._from&&(this.ratio=v=1-v),f&&!a&&!s&&!g&&(fn(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(v,d.d),d=d._next;M&&M.render(i<0?i:M._dur*M._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&qc(this,i,s,o),fn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&fn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&qc(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&qi(this,1),!s&&!(h&&!a)&&(u||a||p)&&(fn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){Ao||hn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||eu(this,c),h=this._ease(c/this._dur),eE(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(Za(this,0),this.parent||kp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ro(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ut),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Bi&&Bi.vars.overwrite!==!0)._first||ro(this),this.parent&&o!==this.timeline.totalDuration()&&Pr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?wn(i):a,c=this._ptLookup,h=this._pt,u,f,d,g,_,m,p;if((!s||s==="all")&&LT(a,l))return s==="all"&&(this._pt=0),ro(this);for(u=this._op=this._op||[],s!=="all"&&(It(s)&&(_={},en(s,function(v){return _[v]=1}),s=_),s=tE(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],s==="all"?(u[p]=s,g=f,d={}):(d=u[p]=u[p]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&ja(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&h&&ro(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return _o(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return _o(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return pt.killTweensOf(i,s,o)},e}(wo);mn(Tt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});en("staggerTo,staggerFrom,staggerFromTo",function(r){Tt[r]=function(){var e=new Yt,t=Kc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var tu=function(e,t,n){return e[t]=n},cm=function(e,t,n){return e[t](n)},iE=function(e,t,n,i){return e[t](i.fp,n)},sE=function(e,t,n){return e.setAttribute(t,n)},nu=function(e,t){return xt(e[t])?cm:Yh(e[t])&&e.setAttribute?sE:tu},hm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},rE=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},um=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},iu=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},oE=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},aE=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?ja(this,t,"_pt"):t.dep||(n=1),t=i;return!n},lE=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},fm=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},tn=function(){function r(t,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||hm,this.d=l||this,this.set=c||tu,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=lE,this.m=n,this.mt=s,this.tween=i},r}();en($h+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Zh[r]=1});pn.TweenMax=pn.TweenLite=Tt;pn.TimelineLite=pn.TimelineMax=Yt;pt=new Yt({sortChildren:!1,defaults:wr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});dn.stringFilter=tm;var Ts=[],Aa={},cE=[],ad=0,hE=0,Yl=function(e){return(Aa[e]||cE).map(function(t){return t()})},Qc=function(){var e=Date.now(),t=[];e-ad>2&&(Yl("matchMediaInit"),Ts.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Yn.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Yl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),ad=e,Yl("matchMedia"))},dm=function(){function r(t,n){this.selector=n&&Zc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=hE++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){xt(n)&&(s=i,i=n,n=xt);var o=this,a=function(){var c=ht,h=o.selector,u;return c&&c!==o&&c.data.push(o),s&&(o.selector=Zc(s)),ht=o,u=i.apply(o,arguments),xt(u)&&o._r.push(u),ht=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===xt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=ht;ht=null,n(this),ht=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Tt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Yt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Tt)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Ts.length;o--;)Ts[o].id===this.id&&Ts.splice(o,1)},e.revert=function(n){this.kill(n||{})},r}(),uE=function(){function r(t){this.contexts=[],this.scope=t,ht&&ht.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){ei(n)||(n={matches:n});var o=new dm(0,s||this.scope),a=o.conditions={},l,c,h;ht&&!o.selector&&(o.selector=ht.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Yn.matchMedia(n[c]),l&&(Ts.indexOf(o)<0&&Ts.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Qc):l.addEventListener("change",Qc)));return h&&i(o,function(u){return o.add(null,u)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Ba={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Jp(i)})},timeline:function(e){return new Yt(e)},getTweensOf:function(e,t){return pt.getTweensOf(e,t)},getProperty:function(e,t,n,i){It(e)&&(e=wn(e)[0]);var s=ys(e||{}).get,o=n?zp:Bp;return n==="native"&&(n=""),e&&(t?o((cn[t]&&cn[t].get||s)(e,t,n,i)):function(a,l,c){return o((cn[a]&&cn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=wn(e),e.length>1){var i=e.map(function(h){return sn.quickSetter(h,t,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}e=e[0]||{};var o=cn[t],a=ys(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(h){var u=new o;sr._pt=0,u.init(e,n?h+n:h,sr,0,[e]),u.render(1,u),sr._pt&&iu(1,sr)}:a.set(e,l);return o?c:function(h){return c(e,l,n?h+n:h,a,1)}},quickTo:function(e,t,n){var i,s=sn.to(e,mn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return s.resetTo(t,l,c,h)};return o.tween=s,o},isTweening:function(e){return pt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ss(e.ease,wr.ease)),nd(wr,e||{})},config:function(e){return nd(dn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!cn[a]&&!pn[a]&&To(t+" effect requires "+a+" plugin.")}),Vl[t]=function(a,l,c){return n(wn(a),mn(l||{},s),c)},o&&(Yt.prototype[t]=function(a,l,c){return this.add(Vl[t](a,ei(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ke[e]=Ss(t)},parseEase:function(e,t){return arguments.length?Ss(e,t):ke},getById:function(e){return pt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Yt(e),i,s;for(n.smoothChildTiming=Qt(e.smoothChildTiming),pt.remove(n),n._dp=0,n._time=n._tTime=pt._time,i=pt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Tt&&i.vars.onComplete===i._targets[0]))&&jn(n,i,i._start-i._delay),i=s;return jn(pt,n,0),n},context:function(e,t){return e?new dm(e,t):ht},matchMedia:function(e){return new uE(e)},matchMediaRefresh:function(){return Ts.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Qc()},addEventListener:function(e,t){var n=Aa[e]||(Aa[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Aa[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:GT,wrapYoyo:WT,distribute:Yp,random:jp,snap:qp,normalize:VT,getUnit:zt,clamp:BT,splitColor:Qp,toArray:wn,selector:Zc,mapRange:Zp,pipe:kT,unitize:HT,interpolate:XT,shuffle:Xp},install:Ip,effects:Vl,ticker:hn,updateRoot:Yt.updateRoot,plugins:cn,globalTimeline:pt,core:{PropTween:tn,globals:Np,Tween:Tt,Timeline:Yt,Animation:wo,getCache:ys,_removeLinkedListItem:ja,reverting:function(){return Ut},context:function(e){return e&&ht&&(ht.data.push(e),e._ctx=ht),ht},suppressOverwrites:function(e){return Xh=e}}};en("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ba[r]=Tt[r]});hn.add(Yt.updateRoot);sr=Ba.to({},{duration:0});var fE=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},dE=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=fE(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},ql=function(e,t){return{name:e,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(It(s)&&(l={},en(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}dE(a,s)}}}},sn=Ba.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Ut?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},ql("roundProps",$c),ql("modifiers"),ql("snap",qp))||Ba;Tt.version=Yt.version=sn.version="3.12.7";Dp=1;qh()&&Lr();ke.Power0;ke.Power1;ke.Power2;ke.Power3;ke.Power4;ke.Linear;ke.Quad;ke.Cubic;ke.Quart;ke.Quint;ke.Strong;ke.Elastic;ke.Back;ke.SteppedEase;ke.Bounce;ke.Sine;ke.Expo;ke.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ld,zi,fr,su,vs,cd,ru,pE=function(){return typeof window<"u"},bi={},ms=180/Math.PI,dr=Math.PI/180,Qs=Math.atan2,hd=1e8,ou=/([A-Z])/g,mE=/(left|right|width|margin|padding|x)/i,_E=/[\s,\(]\S/,Zn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},eh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},gE=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},xE=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},vE=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},pm=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},mm=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},yE=function(e,t,n){return e.style[t]=n},ME=function(e,t,n){return e.style.setProperty(t,n)},SE=function(e,t,n){return e._gsap[t]=n},TE=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},EE=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},bE=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},mt="transform",nn=mt+"Origin",AE=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in bi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Zn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=mi(i,a)}):this.tfm[e]=o.x?o[e]:mi(i,e),e===nn&&(this.tfm.zOrigin=o.zOrigin);else return Zn.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(mt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(nn,t,"")),e=mt}(s||t)&&this.props.push(e,t,s[e])},_m=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},wE=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(ou,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=ru(),(!s||!s.isStart)&&!n[mt]&&(_m(n),i.zOrigin&&n[nn]&&(n[nn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},gm=function(e,t){var n={target:e,props:[],revert:wE,save:AE};return e._gsap||sn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},xm,th=function(e,t){var n=zi.createElementNS?zi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):zi.createElement(e);return n&&n.style?n:zi.createElement(e)},Jn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(ou,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Dr(t)||t,1)||""},ud="O,Moz,ms,Ms,Webkit".split(","),Dr=function(e,t,n){var i=t||vs,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(ud[o]+e in s););return o<0?null:(o===3?"ms":o>=0?ud[o]:"")+e},nh=function(){pE()&&window.document&&(ld=window,zi=ld.document,fr=zi.documentElement,vs=th("div")||{style:{}},th("div"),mt=Dr(mt),nn=mt+"Origin",vs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",xm=!!Dr("perspective"),ru=sn.core.reverting,su=1)},fd=function(e){var t=e.ownerSVGElement,n=th("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),fr.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),fr.removeChild(n),s},dd=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},vm=function(e){var t,n;try{t=e.getBBox()}catch{t=fd(e),n=1}return t&&(t.width||t.height)||n||(t=fd(e)),t&&!t.width&&!t.x&&!t.y?{x:+dd(e,["x","cx","x1"])||0,y:+dd(e,["y","cy","y1"])||0,width:0,height:0}:t},ym=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&vm(e))},Cs=function(e,t){if(t){var n=e.style,i;t in bi&&t!==nn&&(t=mt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(ou,"-$1").toLowerCase())):n.removeAttribute(t)}},ki=function(e,t,n,i,s,o){var a=new tn(e._pt,t,n,0,1,o?mm:pm);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},pd={deg:1,rad:1,turn:1},RE={grid:1,flex:1},ji=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=vs.style,l=mE.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=i==="px",d=i==="%",g,_,m,p;if(i===o||!s||pd[i]||pd[o])return s;if(o!=="px"&&!f&&(s=r(e,t,n,"px")),p=e.getCTM&&ym(e),(d||o==="%")&&(bi[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[h],yt(d?s/g*u:s/100*g);if(a[l?"width":"height"]=u+(f?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===zi||!_.appendChild)&&(_=zi.body),m=_._gsap,m&&d&&m.width&&l&&m.time===hn.time&&!m.uncache)return yt(s/m.width*u);if(d&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=u+i,g=e[h],v?e.style[t]=v:Cs(e,t)}else(d||o==="%")&&!RE[Jn(_,"display")]&&(a.position=Jn(e,"position")),_===e&&(a.position="static"),_.appendChild(vs),g=vs[h],_.removeChild(vs),a.position="absolute";return l&&d&&(m=ys(_),m.time=hn.time,m.width=_[h]),yt(f?g*s/u:g&&s?u/g*s:0)},mi=function(e,t,n,i){var s;return su||nh(),t in Zn&&t!=="transform"&&(t=Zn[t],~t.indexOf(",")&&(t=t.split(",")[0])),bi[t]&&t!=="transform"?(s=Co(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:ka(Jn(e,nn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=za[t]&&za[t](e,t,n)||Jn(e,t)||Op(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ji(e,t,s,n)+n:s},CE=function(e,t,n,i){if(!n||n==="none"){var s=Dr(t,e,1),o=s&&Jn(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Jn(e,"borderTopColor"))}var a=new tn(this._pt,e.style,t,0,1,um),l=0,c=0,h,u,f,d,g,_,m,p,v,M,x,E;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(_=e.style[t],e.style[t]=i,i=Jn(e,t)||i,_?e.style[t]=_:Cs(e,t)),h=[n,i],tm(h),n=h[0],i=h[1],f=n.match(ir)||[],E=i.match(ir)||[],E.length){for(;u=ir.exec(i);)m=u[0],v=i.substring(l,u.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(d=parseFloat(_)||0,x=_.substr((d+"").length),m.charAt(1)==="="&&(m=ur(d,m)+x),p=parseFloat(m),M=m.substr((p+"").length),l=ir.lastIndex-M.length,M||(M=M||dn.units[t]||x,l===i.length&&(i+=M,a.e+=M)),x!==M&&(d=ji(e,t,_,M)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?mm:pm;return Pp.test(i)&&(a.e=0),this._pt=a,a},md={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},PE=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=md[n]||n,t[1]=md[i]||i,t.join(" ")},LE=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],bi[a]&&(l=1,a=a==="transformOrigin"?nn:mt),Cs(n,a);l&&(Cs(n,mt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Co(n,1),o.uncache=1,_m(i)))}},za={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new tn(e._pt,t,n,0,0,LE);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Ro=[1,0,0,1,0,0],Mm={},Sm=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},_d=function(e){var t=Jn(e,mt);return Sm(t)?Ro:t.substr(7).match(Cp).map(yt)},au=function(e,t){var n=e._gsap||ys(e),i=e.style,s=_d(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ro:s):(s===Ro&&!e.offsetParent&&e!==fr&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,fr.appendChild(e)),s=_d(e),l?i.display=l:Cs(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):fr.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},ih=function(e,t,n,i,s,o){var a=e._gsap,l=s||au(e,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,f=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],v=l[5],M=t.split(" "),x=parseFloat(M[0])||0,E=parseFloat(M[1])||0,A,w,R,y;n?l!==Ro&&(w=d*m-g*_)&&(R=x*(m/w)+E*(-_/w)+(_*v-m*p)/w,y=x*(-g/w)+E*(d/w)-(d*v-g*p)/w,x=R,E=y):(A=vm(e),x=A.x+(~M[0].indexOf("%")?x/100*A.width:x),E=A.y+(~(M[1]||M[0]).indexOf("%")?E/100*A.height:E)),i||i!==!1&&a.smooth?(p=x-c,v=E-h,a.xOffset=u+(p*d+v*_)-p,a.yOffset=f+(p*g+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=E,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[nn]="0px 0px",o&&(ki(o,a,"xOrigin",c,x),ki(o,a,"yOrigin",h,E),ki(o,a,"xOffset",u,a.xOffset),ki(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+E)},Co=function(e,t){var n=e._gsap||new rm(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Jn(e,nn)||"0",h,u,f,d,g,_,m,p,v,M,x,E,A,w,R,y,S,P,F,O,Y,G,V,q,k,te,se,he,Ae,Oe,W,J;return h=u=f=_=m=p=v=M=x=0,d=g=1,n.svg=!!(e.getCTM&&ym(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[mt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[mt]!=="none"?l[mt]:"")),i.scale=i.rotate=i.translate="none"),w=au(e,n.svg),n.svg&&(n.uncache?(k=e.getBBox(),c=n.xOrigin-k.x+"px "+(n.yOrigin-k.y)+"px",q=""):q=!t&&e.getAttribute("data-svg-origin"),ih(e,q||c,!!q||n.originIsAbsolute,n.smooth!==!1,w)),E=n.xOrigin||0,A=n.yOrigin||0,w!==Ro&&(P=w[0],F=w[1],O=w[2],Y=w[3],h=G=w[4],u=V=w[5],w.length===6?(d=Math.sqrt(P*P+F*F),g=Math.sqrt(Y*Y+O*O),_=P||F?Qs(F,P)*ms:0,v=O||Y?Qs(O,Y)*ms+_:0,v&&(g*=Math.abs(Math.cos(v*dr))),n.svg&&(h-=E-(E*P+A*O),u-=A-(E*F+A*Y))):(J=w[6],Oe=w[7],se=w[8],he=w[9],Ae=w[10],W=w[11],h=w[12],u=w[13],f=w[14],R=Qs(J,Ae),m=R*ms,R&&(y=Math.cos(-R),S=Math.sin(-R),q=G*y+se*S,k=V*y+he*S,te=J*y+Ae*S,se=G*-S+se*y,he=V*-S+he*y,Ae=J*-S+Ae*y,W=Oe*-S+W*y,G=q,V=k,J=te),R=Qs(-O,Ae),p=R*ms,R&&(y=Math.cos(-R),S=Math.sin(-R),q=P*y-se*S,k=F*y-he*S,te=O*y-Ae*S,W=Y*S+W*y,P=q,F=k,O=te),R=Qs(F,P),_=R*ms,R&&(y=Math.cos(R),S=Math.sin(R),q=P*y+F*S,k=G*y+V*S,F=F*y-P*S,V=V*y-G*S,P=q,G=k),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=yt(Math.sqrt(P*P+F*F+O*O)),g=yt(Math.sqrt(V*V+J*J)),R=Qs(G,V),v=Math.abs(R)>2e-4?R*ms:0,x=W?1/(W<0?-W:W):0),n.svg&&(q=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Sm(Jn(e,mt)),q&&e.setAttribute("transform",q))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(d*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=yt(d),n.scaleY=yt(g),n.rotation=yt(_)+a,n.rotationX=yt(m)+a,n.rotationY=yt(p)+a,n.skewX=v+a,n.skewY=M+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[nn]=ka(c)),n.xOffset=n.yOffset=0,n.force3D=dn.force3D,n.renderTransform=n.svg?IE:xm?Tm:DE,n.uncache=0,n},ka=function(e){return(e=e.split(" "))[0]+" "+e[1]},jl=function(e,t,n){var i=zt(t);return yt(parseFloat(t)+parseFloat(ji(e,"x",n+"px",i)))+i},DE=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Tm(e,t)},us="0deg",eo="0px",fs=") ",Tm=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,v=n.target,M=n.zOrigin,x="",E=p==="auto"&&e&&e!==1||p===!0;if(M&&(u!==us||h!==us)){var A=parseFloat(h)*dr,w=Math.sin(A),R=Math.cos(A),y;A=parseFloat(u)*dr,y=Math.cos(A),o=jl(v,o,w*y*-M),a=jl(v,a,-Math.sin(A)*-M),l=jl(v,l,R*y*-M+M)}m!==eo&&(x+="perspective("+m+fs),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(E||o!==eo||a!==eo||l!==eo)&&(x+=l!==eo||E?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+fs),c!==us&&(x+="rotate("+c+fs),h!==us&&(x+="rotateY("+h+fs),u!==us&&(x+="rotateX("+u+fs),(f!==us||d!==us)&&(x+="skew("+f+", "+d+fs),(g!==1||_!==1)&&(x+="scale("+g+", "+_+fs),v.style[mt]=x||"translate(0, 0)"},IE=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,v=n.forceCSS,M=parseFloat(o),x=parseFloat(a),E,A,w,R,y;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=dr,c*=dr,E=Math.cos(l)*u,A=Math.sin(l)*u,w=Math.sin(l-c)*-f,R=Math.cos(l-c)*f,c&&(h*=dr,y=Math.tan(c-h),y=Math.sqrt(1+y*y),w*=y,R*=y,h&&(y=Math.tan(h),y=Math.sqrt(1+y*y),E*=y,A*=y)),E=yt(E),A=yt(A),w=yt(w),R=yt(R)):(E=u,R=f,A=w=0),(M&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(M=ji(d,"x",o,"px"),x=ji(d,"y",a,"px")),(g||_||m||p)&&(M=yt(M+g-(g*E+_*w)+m),x=yt(x+_-(g*A+_*R)+p)),(i||s)&&(y=d.getBBox(),M=yt(M+i/100*y.width),x=yt(x+s/100*y.height)),y="matrix("+E+","+A+","+w+","+R+","+M+","+x+")",d.setAttribute("transform",y),v&&(d.style[mt]=y)},NE=function(e,t,n,i,s){var o=360,a=It(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?ms:1),c=l-i,h=i+c+"deg",u,f;return a&&(u=s.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-360)),u==="cw"&&c<0?c=(c+o*hd)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*hd)%o-~~(c/o)*o)),e._pt=f=new tn(e._pt,t,n,i,c,gE),f.e=h,f.u="deg",e._props.push(n),f},gd=function(e,t){for(var n in t)e[n]=t[n];return e},UE=function(e,t,n){var i=gd({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[mt]=t,a=Co(n,1),Cs(n,mt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[mt],o[mt]=t,a=Co(n,1),o[mt]=c);for(l in bi)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(d=zt(c),g=zt(h),u=d!==g?ji(n,l,c,g):parseFloat(c),f=parseFloat(h),e._pt=new tn(e._pt,a,l,u,f-u,eh),e._pt.u=g||0,e._props.push(l));gd(a,i)};en("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});za[e>1?"border"+r:r]=function(a,l,c,h,u){var f,d;if(arguments.length<4)return f=o.map(function(g){return mi(a,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(h+"").split(" "),d={},o.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,u)}});var Em={name:"css",register:nh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,h,u,f,d,g,_,m,p,v,M,x,E,A,w,R;su||nh(),this.styles=this.styles||gm(e),R=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(h=t[_],!(cn[_]&&om(_,t,n,i,e,s)))){if(d=typeof h,g=za[_],d==="function"&&(h=h.call(n,i,e,s),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=bo(h)),g)g(this,e,_,h,n)&&(w=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),h+="",Wi.lastIndex=0,Wi.test(c)||(m=zt(c),p=zt(h)),p?m!==p&&(c=ji(e,_,c,p)+p):m&&(h+=m),this.add(a,"setProperty",c,h,i,s,0,0,_),o.push(_),R.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],It(c)&&~c.indexOf("random(")&&(c=bo(c)),zt(c+"")||c==="auto"||(c+=dn.units[_]||zt(mi(e,_))||""),(c+"").charAt(1)==="="&&(c=mi(e,_))):c=mi(e,_),f=parseFloat(c),v=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),u=parseFloat(h),_ in Zn&&(_==="autoAlpha"&&(f===1&&mi(e,"visibility")==="hidden"&&u&&(f=0),R.push("visibility",0,a.visibility),ki(this,a,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=Zn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),M=_ in bi,M){if(this.styles.save(_),x||(E=e._gsap,E.renderTransform&&!t.parseTransform||Co(e,t.parseTransform),A=t.smoothOrigin!==!1&&E.smooth,x=this._pt=new tn(this._pt,a,mt,0,1,E.renderTransform,E,0,-1),x.dep=1),_==="scale")this._pt=new tn(this._pt,E,"scaleY",E.scaleY,(v?ur(E.scaleY,v+u):u)-E.scaleY||0,eh),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(nn,0,a[nn]),h=PE(h),E.svg?ih(e,h,0,A,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==E.zOrigin&&ki(this,E,"zOrigin",E.zOrigin,p),ki(this,a,_,ka(c),ka(h)));continue}else if(_==="svgOrigin"){ih(e,h,1,A,0,this);continue}else if(_ in Mm){NE(this,E,_,f,v?ur(f,v+h):h);continue}else if(_==="smoothOrigin"){ki(this,E,"smooth",E.smooth,h);continue}else if(_==="force3D"){E[_]=h;continue}else if(_==="transform"){UE(this,h,e);continue}}else _ in a||(_=Dr(_)||_);if(M||(u||u===0)&&(f||f===0)&&!_E.test(h)&&_ in a)m=(c+"").substr((f+"").length),u||(u=0),p=zt(h)||(_ in dn.units?dn.units[_]:m),m!==p&&(f=ji(e,_,c,p)),this._pt=new tn(this._pt,M?E:a,_,f,(v?ur(f,v+u):u)-f,!M&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?vE:eh),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=xE);else if(_ in a)CE.call(this,e,_,c,v?v+h:h);else if(_ in e)this.add(e,_,c||e[_],v?v+h:h,i,s);else if(_!=="parseTransform"){Kh(_,h);continue}M||(_ in a?R.push(_,0,a[_]):typeof e[_]=="function"?R.push(_,2,e[_]()):R.push(_,1,c||e[_])),o.push(_)}}w&&fm(this)},render:function(e,t){if(t.tween._time||!ru())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:mi,aliases:Zn,getSetter:function(e,t,n){var i=Zn[t];return i&&i.indexOf(",")<0&&(t=i),t in bi&&t!==nn&&(e._gsap.x||mi(e,"x"))?n&&cd===n?t==="scale"?TE:SE:(cd=n||{})&&(t==="scale"?EE:bE):e.style&&!Yh(e.style[t])?yE:~t.indexOf("-")?ME:nu(e,t)},core:{_removeProperty:Cs,_getMatrix:au}};sn.utils.checkPrefix=Dr;sn.core.getStyleSaver=gm;(function(r,e,t,n){var i=en(r+","+e+","+t,function(s){bi[s]=1});en(e,function(s){dn.units[s]="deg",Mm[s]=1}),Zn[i[13]]=r+","+e,en(n,function(s){var o=s.split(":");Zn[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");en("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){dn.units[r]="px"});sn.registerPlugin(Em);var Hr=sn.registerPlugin(Em)||sn;Hr.core.Tween;/*!
 * paths 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var OE=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,FE=/(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,BE=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,zE=/(^[#\.][a-z]|[a-y][a-z])/i,kE=Math.PI/180,HE=180/Math.PI,da=Math.sin,pa=Math.cos,Rn=Math.abs,gi=Math.sqrt,VE=Math.atan2,sh=1e8,xd=function(e){return typeof e=="string"},bm=function(e){return typeof e=="number"},GE=function(e){return typeof e>"u"},WE={},XE={},Ha=1e5,Am=function(e){return Math.round((e+sh)%1*Ha)/Ha||(e<0?0:1)},Ze=function(e){return Math.round(e*Ha)/Ha||0},vd=function(e){return Math.round(e*1e10)/1e10||0},yd=function(e,t,n,i){var s=e[t],o=i===1?6:rh(s,n,i);if((o||!i)&&o+n+2<s.length)return e.splice(t,0,s.slice(0,n+o+2)),s.splice(0,n+o),1},wm=function(e,t,n){var i=e.length,s=~~(n*i);if(e[s]>t){for(;--s&&e[s]>t;);s<0&&(s=0)}else for(;e[++s]<t&&s<i;);return s<i?s:i-1},YE=function(e,t){var n=e.length;for(e.reverse();n--;)e[n].reversed||KE(e[n])},Md=function(e,t){return t.totalLength=e.totalLength,e.samples?(t.samples=e.samples.slice(0),t.lookup=e.lookup.slice(0),t.minLength=e.minLength,t.resolution=e.resolution):e.totalPoints&&(t.totalPoints=e.totalPoints),t},qE=function(e,t){var n=e.length,i=e[n-1]||[],s=i.length;n&&t[0]===i[s-2]&&t[1]===i[s-1]&&(t=i.concat(t.slice(2)),n--),e[n]=t};function wa(r){r=xd(r)&&zE.test(r)&&document.querySelector(r)||r;var e=r.getAttribute?r:0,t;return e&&(r=r.getAttribute("d"))?(e._gsPath||(e._gsPath={}),t=e._gsPath[r],t&&!t._dirty?t:e._gsPath[r]=Va(r)):r?xd(r)?Va(r):bm(r[0])?[r]:r:console.warn("Expecting a <path> element or an SVG path data string")}function jE(r){for(var e=[],t=0;t<r.length;t++)e[t]=Md(r[t],r[t].slice(0));return Md(r,e)}function KE(r){var e=0,t;for(r.reverse();e<r.length;e+=2)t=r[e],r[e]=r[e+1],r[e+1]=t;r.reversed=!r.reversed}var ZE=function(e,t){var n=document.createElementNS("http://www.w3.org/2000/svg","path"),i=[].slice.call(e.attributes),s=i.length,o;for(t=","+t+",";--s>-1;)o=i[s].nodeName.toLowerCase(),t.indexOf(","+o+",")<0&&n.setAttributeNS(null,o,i[s].nodeValue);return n},$E={rect:"rx,ry,x,y,width,height",circle:"r,cx,cy",ellipse:"rx,ry,cx,cy",line:"x1,x2,y1,y2"},JE=function(e,t){for(var n=t?t.split(","):[],i={},s=n.length;--s>-1;)i[n[s]]=+e.getAttribute(n[s])||0;return i};function QE(r,e){var t=r.tagName.toLowerCase(),n=.552284749831,i,s,o,a,l,c,h,u,f,d,g,_,m,p,v,M,x,E,A,w,R,y;return t==="path"||!r.getBBox?r:(c=ZE(r,"x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"),y=JE(r,$E[t]),t==="rect"?(a=y.rx,l=y.ry||a,s=y.x,o=y.y,d=y.width-a*2,g=y.height-l*2,a||l?(_=s+a*(1-n),m=s+a,p=m+d,v=p+a*n,M=p+a,x=o+l*(1-n),E=o+l,A=E+g,w=A+l*n,R=A+l,i="M"+M+","+E+" V"+A+" C"+[M,w,v,R,p,R,p-(p-m)/3,R,m+(p-m)/3,R,m,R,_,R,s,w,s,A,s,A-(A-E)/3,s,E+(A-E)/3,s,E,s,x,_,o,m,o,m+(p-m)/3,o,p-(p-m)/3,o,p,o,v,o,M,x,M,E].join(",")+"z"):i="M"+(s+d)+","+o+" v"+g+" h"+-d+" v"+-g+" h"+d+"z"):t==="circle"||t==="ellipse"?(t==="circle"?(a=l=y.r,u=a*n):(a=y.rx,l=y.ry,u=l*n),s=y.cx,o=y.cy,h=a*n,i="M"+(s+a)+","+o+" C"+[s+a,o+u,s+h,o+l,s,o+l,s-h,o+l,s-a,o+u,s-a,o,s-a,o-u,s-h,o-l,s,o-l,s+h,o-l,s+a,o-u,s+a,o].join(",")+"z"):t==="line"?i="M"+y.x1+","+y.y1+" L"+y.x2+","+y.y2:(t==="polyline"||t==="polygon")&&(f=(r.getAttribute("points")+"").match(FE)||[],s=f.shift(),o=f.shift(),i="M"+s+","+o+" L"+f.join(","),t==="polygon"&&(i+=","+s+","+o+"z")),c.setAttribute("d",Pm(c._gsRawPath=Va(i))),e&&r.parentNode&&(r.parentNode.insertBefore(c,r),r.parentNode.removeChild(r)),c)}function Rm(r,e,t){var n=r[e],i=r[e+2],s=r[e+4],o;return n+=(i-n)*t,i+=(s-i)*t,n+=(i-n)*t,o=i+(s+(r[e+6]-s)*t-i)*t-n,n=r[e+1],i=r[e+3],s=r[e+5],n+=(i-n)*t,i+=(s-i)*t,n+=(i-n)*t,Ze(VE(i+(s+(r[e+7]-s)*t-i)*t-n,o)*HE)}function Cm(r,e,t){t=GE(t)?1:vd(t)||0,e=vd(e)||0;var n=Math.max(0,~~(Rn(t-e)-1e-8)),i=jE(r);if(e>t&&(e=1-e,t=1-t,YE(i),i.totalLength=0),e<0||t<0){var s=Math.abs(~~Math.min(e,t))+1;e+=s,t+=s}i.totalLength||Es(i);var o=t>1,a=Sd(i,e,WE,!0),l=Sd(i,t,XE),c=l.segment,h=a.segment,u=l.segIndex,f=a.segIndex,d=l.i,g=a.i,_=f===u,m=d===g&&_,p,v,M,x,E,A,w,R;if(o||n){for(p=u<f||_&&d<g||m&&l.t<a.t,yd(i,f,g,a.t)&&(f++,p||(u++,m?(l.t=(l.t-a.t)/(1-a.t),d=0):_&&(d-=g))),Math.abs(1-(t-e))<1e-5?u=f-1:!l.t&&u?u--:yd(i,u,d,l.t)&&p&&f++,a.t===1&&(f=(f+1)%i.length),E=[],A=i.length,w=1+A*n,R=f,w+=(A-f+u)%A,x=0;x<w;x++)qE(E,i[R++%A]);i=E}else if(M=l.t===1?6:rh(c,d,l.t),e!==t)for(v=rh(h,g,m?a.t/l.t:a.t),_&&(M+=v),c.splice(d+M+2),(v||g)&&h.splice(0,g+v),x=i.length;x--;)(x<f||x>u)&&i.splice(x,1);else c.angle=Rm(c,d+M,0),d+=M,a=c[d],l=c[d+1],c.length=c.totalLength=0,c.totalPoints=i.totalPoints=8,c.push(a,l,a,l,a,l,a,l);return i.totalLength=0,i}function eb(r,e,t){e=e||0,r.samples||(r.samples=[],r.lookup=[]);var n=~~r.resolution||12,i=1/n,s=r.length,o=r[e],a=r[e+1],l=e?e/6*n:0,c=r.samples,h=r.lookup,u=(e?r.minLength:sh)||sh,f=c[l+t*n-1],d=e?c[l-1]:0,g,_,m,p,v,M,x,E,A,w,R,y,S,P,F,O,Y;for(c.length=h.length=0,_=e+2;_<s;_+=6){if(m=r[_+4]-o,p=r[_+2]-o,v=r[_]-o,E=r[_+5]-a,A=r[_+3]-a,w=r[_+1]-a,M=x=R=y=0,Rn(m)<.01&&Rn(E)<.01&&Rn(v)+Rn(w)<.01)r.length>8&&(r.splice(_,6),_-=6,s-=6);else for(g=1;g<=n;g++)P=i*g,S=1-P,M=x-(x=(P*P*m+3*S*(P*p+S*v))*P),R=y-(y=(P*P*E+3*S*(P*A+S*w))*P),O=gi(R*R+M*M),O<u&&(u=O),d+=O,c[l++]=d;o+=m,a+=E}if(f)for(f-=d;l<c.length;l++)c[l]+=f;if(c.length&&u){if(r.totalLength=Y=c[c.length-1]||0,r.minLength=u,Y/u<9999)for(O=F=0,g=0;g<Y;g+=u)h[O++]=c[F]<g?++F:F}else r.totalLength=c[0]=0;return e?d-c[e/2-1]:d}function Es(r,e){var t,n,i;for(i=t=n=0;i<r.length;i++)r[i].resolution=~~e||12,n+=r[i].length,t+=eb(r[i]);return r.totalPoints=n,r.totalLength=t,r}function rh(r,e,t){if(t<=0||t>=1)return 0;var n=r[e],i=r[e+1],s=r[e+2],o=r[e+3],a=r[e+4],l=r[e+5],c=r[e+6],h=r[e+7],u=n+(s-n)*t,f=s+(a-s)*t,d=i+(o-i)*t,g=o+(l-o)*t,_=u+(f-u)*t,m=d+(g-d)*t,p=a+(c-a)*t,v=l+(h-l)*t;return f+=(p-f)*t,g+=(v-g)*t,r.splice(e+2,4,Ze(u),Ze(d),Ze(_),Ze(m),Ze(_+(f-_)*t),Ze(m+(g-m)*t),Ze(f),Ze(g),Ze(p),Ze(v)),r.samples&&r.samples.splice(e/6*r.resolution|0,0,0,0,0,0,0,0),6}function Sd(r,e,t,n){t=t||{},r.totalLength||Es(r),(e<0||e>1)&&(e=Am(e));var i=0,s=r[0],o,a,l,c,h,u,f;if(!e)f=u=i=0,s=r[0];else if(e===1)f=1,i=r.length-1,s=r[i],u=s.length-8;else{if(r.length>1){for(l=r.totalLength*e,h=u=0;(h+=r[u++].totalLength)<l;)i=u;s=r[i],c=h-s.totalLength,e=(l-c)/(h-c)||0}o=s.samples,a=s.resolution,l=s.totalLength*e,u=s.lookup.length?s.lookup[~~(l/s.minLength)]||0:wm(o,l,e),c=u?o[u-1]:0,h=o[u],h<l&&(c=h,h=o[++u]),f=1/a*((l-c)/(h-c)+u%a),u=~~(u/a)*6,n&&f===1&&(u+6<s.length?(u+=6,f=0):i+1<r.length&&(u=f=0,s=r[++i]))}return t.t=f,t.i=u,t.path=r,t.segment=s,t.segIndex=i,t}function Td(r,e,t,n){var i=r[0],s=n||{},o,a,l,c,h,u,f,d,g;if((e<0||e>1)&&(e=Am(e)),i.lookup||Es(r),r.length>1){for(l=r.totalLength*e,h=u=0;(h+=r[u++].totalLength)<l;)i=r[u];c=h-i.totalLength,e=(l-c)/(h-c)||0}return o=i.samples,a=i.resolution,l=i.totalLength*e,u=i.lookup.length?i.lookup[e<1?~~(l/i.minLength):i.lookup.length-1]||0:wm(o,l,e),c=u?o[u-1]:0,h=o[u],h<l&&(c=h,h=o[++u]),f=1/a*((l-c)/(h-c)+u%a)||0,g=1-f,u=~~(u/a)*6,d=i[u],s.x=Ze((f*f*(i[u+6]-d)+3*g*(f*(i[u+4]-d)+g*(i[u+2]-d)))*f+d),s.y=Ze((f*f*(i[u+7]-(d=i[u+1]))+3*g*(f*(i[u+5]-d)+g*(i[u+3]-d)))*f+d),t&&(s.angle=i.totalLength?Rm(i,u,f>=1?1-1e-9:f||1e-9):i.angle||0),s}function ao(r,e,t,n,i,s,o){for(var a=r.length,l,c,h,u,f;--a>-1;)for(l=r[a],c=l.length,h=0;h<c;h+=2)u=l[h],f=l[h+1],l[h]=u*e+f*n+s,l[h+1]=u*t+f*i+o;return r._dirty=1,r}function tb(r,e,t,n,i,s,o,a,l){if(!(r===a&&e===l)){t=Rn(t),n=Rn(n);var c=i%360*kE,h=pa(c),u=da(c),f=Math.PI,d=f*2,g=(r-a)/2,_=(e-l)/2,m=h*g+u*_,p=-u*g+h*_,v=m*m,M=p*p,x=v/(t*t)+M/(n*n);x>1&&(t=gi(x)*t,n=gi(x)*n);var E=t*t,A=n*n,w=(E*A-E*M-A*v)/(E*M+A*v);w<0&&(w=0);var R=(s===o?-1:1)*gi(w),y=R*(t*p/n),S=R*-(n*m/t),P=(r+a)/2,F=(e+l)/2,O=P+(h*y-u*S),Y=F+(u*y+h*S),G=(m-y)/t,V=(p-S)/n,q=(-m-y)/t,k=(-p-S)/n,te=G*G+V*V,se=(V<0?-1:1)*Math.acos(G/gi(te)),he=(G*k-V*q<0?-1:1)*Math.acos((G*q+V*k)/gi(te*(q*q+k*k)));isNaN(he)&&(he=f),!o&&he>0?he-=d:o&&he<0&&(he+=d),se%=d,he%=d;var Ae=Math.ceil(Rn(he)/(d/4)),Oe=[],W=he/Ae,J=4/3*da(W/2)/(1+pa(W/2)),ge=h*t,re=u*t,be=u*-n,Ye=h*n,xe;for(xe=0;xe<Ae;xe++)i=se+xe*W,m=pa(i),p=da(i),G=pa(i+=W),V=da(i),Oe.push(m-J*p,p+J*m,G+J*V,V-J*G,G,V);for(xe=0;xe<Oe.length;xe+=2)m=Oe[xe],p=Oe[xe+1],Oe[xe]=m*ge+p*be+O,Oe[xe+1]=m*re+p*Ye+Y;return Oe[xe-2]=a,Oe[xe-1]=l,Oe}}function Va(r){var e=(r+"").replace(BE,function(y){var S=+y;return S<1e-4&&S>-1e-4?0:S}).match(OE)||[],t=[],n=0,i=0,s=2/3,o=e.length,a=0,l="ERROR: malformed path: "+r,c,h,u,f,d,g,_,m,p,v,M,x,E,A,w,R=function(S,P,F,O){v=(F-S)/3,M=(O-P)/3,_.push(S+v,P+M,F-v,O-M,F,O)};if(!r||!isNaN(e[0])||isNaN(e[1]))return console.log(l),t;for(c=0;c<o;c++)if(E=d,isNaN(e[c])?(d=e[c].toUpperCase(),g=d!==e[c]):c--,u=+e[c+1],f=+e[c+2],g&&(u+=n,f+=i),c||(m=u,p=f),d==="M")_&&(_.length<8?t.length-=1:a+=_.length),n=m=u,i=p=f,_=[u,f],t.push(_),c+=2,d="L";else if(d==="C")_||(_=[0,0]),g||(n=i=0),_.push(u,f,n+e[c+3]*1,i+e[c+4]*1,n+=e[c+5]*1,i+=e[c+6]*1),c+=6;else if(d==="S")v=n,M=i,(E==="C"||E==="S")&&(v+=n-_[_.length-4],M+=i-_[_.length-3]),g||(n=i=0),_.push(v,M,u,f,n+=e[c+3]*1,i+=e[c+4]*1),c+=4;else if(d==="Q")v=n+(u-n)*s,M=i+(f-i)*s,g||(n=i=0),n+=e[c+3]*1,i+=e[c+4]*1,_.push(v,M,n+(u-n)*s,i+(f-i)*s,n,i),c+=4;else if(d==="T")v=n-_[_.length-4],M=i-_[_.length-3],_.push(n+v,i+M,u+(n+v*1.5-u)*s,f+(i+M*1.5-f)*s,n=u,i=f),c+=2;else if(d==="H")R(n,i,n=u,i),c+=1;else if(d==="V")R(n,i,n,i=u+(g?i-n:0)),c+=1;else if(d==="L"||d==="Z")d==="Z"&&(u=m,f=p,_.closed=!0),(d==="L"||Rn(n-u)>.5||Rn(i-f)>.5)&&(R(n,i,u,f),d==="L"&&(c+=2)),n=u,i=f;else if(d==="A"){if(A=e[c+4],w=e[c+5],v=e[c+6],M=e[c+7],h=7,A.length>1&&(A.length<3?(M=v,v=w,h--):(M=w,v=A.substr(2),h-=2),w=A.charAt(1),A=A.charAt(0)),x=tb(n,i,+e[c+1],+e[c+2],+e[c+3],+A,+w,(g?n:0)+v*1,(g?i:0)+M*1),c+=h,x)for(h=0;h<x.length;h++)_.push(x[h]);n=_[_.length-2],i=_[_.length-1]}else console.log(l);return c=_.length,c<6?(t.pop(),c=0):_[0]===_[c-2]&&_[1]===_[c-1]&&(_.closed=!0),t.totalPoints=a+c,t}function nb(r,e){e===void 0&&(e=1);for(var t=r[0],n=0,i=[t,n],s=2;s<r.length;s+=2)i.push(t,n,r[s],n=(r[s]-t)*e/2,t=r[s],-n);return i}function oh(r,e){Rn(r[0]-r[2])<1e-4&&Rn(r[1]-r[3])<1e-4&&(r=r.slice(2));var t=r.length-2,n=+r[0],i=+r[1],s=+r[2],o=+r[3],a=[n,i,n,i],l=s-n,c=o-i,h=Math.abs(r[t]-n)<.001&&Math.abs(r[t+1]-i)<.001,u,f,d,g,_,m,p,v,M,x,E,A,w,R,y;for(h&&(r.push(s,o),s=n,o=i,n=r[t-2],i=r[t-1],r.unshift(n,i),t+=4),e=e||e===0?+e:1,d=2;d<t;d+=2)u=n,f=i,n=s,i=o,s=+r[d+2],o=+r[d+3],!(n===s&&i===o)&&(g=l,_=c,l=s-n,c=o-i,m=gi(g*g+_*_),p=gi(l*l+c*c),v=gi(Math.pow(l/p+g/m,2)+Math.pow(c/p+_/m,2)),M=(m+p)*e*.25/v,x=n-(n-u)*(m?M/m:0),E=n+(s-n)*(p?M/p:0),A=n-(x+((E-x)*(m*3/(m+p)+.5)/4||0)),w=i-(i-f)*(m?M/m:0),R=i+(o-i)*(p?M/p:0),y=i-(w+((R-w)*(m*3/(m+p)+.5)/4||0)),(n!==u||i!==f)&&a.push(Ze(x+A),Ze(w+y),Ze(n),Ze(i),Ze(E+A),Ze(R+y)));return n!==s||i!==o||a.length<4?a.push(Ze(s),Ze(o),Ze(s),Ze(o)):a.length-=2,a.length===2?a.push(n,i,n,i,n,i):h&&(a.splice(0,6),a.length=a.length-6),a}function Pm(r){bm(r[0])&&(r=[r]);var e="",t=r.length,n,i,s,o;for(i=0;i<t;i++){for(o=r[i],e+="M"+Ze(o[0])+","+Ze(o[1])+" C",n=o.length,s=2;s<n;s++)e+=Ze(o[s++])+","+Ze(o[s++])+" "+Ze(o[s++])+","+Ze(o[s++])+" "+Ze(o[s++])+","+Ze(o[s])+" ";o.closed&&(e+="z")}return e}/*!
 * matrix 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var yi,bs,lu,$a,lo,Ra,Ga,xo,Hn="transform",ah=Hn+"Origin",Lm,Dm=function(e){var t=e.ownerDocument||e;for(!(Hn in e.style)&&("msTransform"in e.style)&&(Hn="msTransform",ah=Hn+"Origin");t.parentNode&&(t=t.parentNode););if(bs=window,Ga=new Po,t){yi=t,lu=t.documentElement,$a=t.body,xo=yi.createElementNS("http://www.w3.org/2000/svg","g"),xo.style.transform="none";var n=t.createElement("div"),i=t.createElement("div"),s=t&&(t.body||t.firstElementChild);s&&s.appendChild&&(s.appendChild(n),n.appendChild(i),n.setAttribute("style","position:static;transform:translate3d(0,0,1px)"),Lm=i.offsetParent!==n,s.removeChild(n))}return t},ib=function(e){for(var t,n;e&&e!==$a;)n=e._gsap,n&&n.uncache&&n.get(e,"x"),n&&!n.scaleX&&!n.scaleY&&n.renderTransform&&(n.scaleX=n.scaleY=1e-4,n.renderTransform(1,n),t?t.push(n):t=[n]),e=e.parentNode;return t},Im=[],Nm=[],sb=function(){return bs.pageYOffset||yi.scrollTop||lu.scrollTop||$a.scrollTop||0},rb=function(){return bs.pageXOffset||yi.scrollLeft||lu.scrollLeft||$a.scrollLeft||0},cu=function(e){return e.ownerSVGElement||((e.tagName+"").toLowerCase()==="svg"?e:null)},ob=function r(e){if(bs.getComputedStyle(e).position==="fixed")return!0;if(e=e.parentNode,e&&e.nodeType===1)return r(e)},Kl=function r(e,t){if(e.parentNode&&(yi||Dm(e))){var n=cu(e),i=n?n.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",s=n?t?"rect":"g":"div",o=t!==2?0:100,a=t===3?100:0,l="position:absolute;display:block;pointer-events:none;margin:0;padding:0;",c=yi.createElementNS?yi.createElementNS(i.replace(/^https/,"http"),s):yi.createElement(s);return t&&(n?(Ra||(Ra=r(e)),c.setAttribute("width",.01),c.setAttribute("height",.01),c.setAttribute("transform","translate("+o+","+a+")"),Ra.appendChild(c)):(lo||(lo=r(e),lo.style.cssText=l),c.style.cssText=l+"width:0.1px;height:0.1px;top:"+a+"px;left:"+o+"px",lo.appendChild(c))),c}throw"Need document and parent."},ab=function(e){for(var t=new Po,n=0;n<e.numberOfItems;n++)t.multiply(e.getItem(n).matrix);return t},lb=function(e){var t=e.getCTM(),n;return t||(n=e.style[Hn],e.style[Hn]="none",e.appendChild(xo),t=xo.getCTM(),e.removeChild(xo),n?e.style[Hn]=n:e.style.removeProperty(Hn.replace(/([A-Z])/g,"-$1").toLowerCase())),t||Ga.clone()},cb=function(e,t){var n=cu(e),i=e===n,s=n?Im:Nm,o=e.parentNode,a,l,c,h,u,f;if(e===bs)return e;if(s.length||s.push(Kl(e,1),Kl(e,2),Kl(e,3)),a=n?Ra:lo,n)i?(c=lb(e),h=-c.e/c.a,u=-c.f/c.d,l=Ga):e.getBBox?(c=e.getBBox(),l=e.transform?e.transform.baseVal:{},l=l.numberOfItems?l.numberOfItems>1?ab(l):l.getItem(0).matrix:Ga,h=l.a*c.x+l.c*c.y,u=l.b*c.x+l.d*c.y):(l=new Po,h=u=0),t&&e.tagName.toLowerCase()==="g"&&(h=u=0),(i?n:o).appendChild(a),a.setAttribute("transform","matrix("+l.a+","+l.b+","+l.c+","+l.d+","+(l.e+h)+","+(l.f+u)+")");else{if(h=u=0,Lm)for(l=e.offsetParent,c=e;c&&(c=c.parentNode)&&c!==l&&c.parentNode;)(bs.getComputedStyle(c)[Hn]+"").length>4&&(h=c.offsetLeft,u=c.offsetTop,c=0);if(f=bs.getComputedStyle(e),f.position!=="absolute"&&f.position!=="fixed")for(l=e.offsetParent;o&&o!==l;)h+=o.scrollLeft||0,u+=o.scrollTop||0,o=o.parentNode;c=a.style,c.top=e.offsetTop-u+"px",c.left=e.offsetLeft-h+"px",c[Hn]=f[Hn],c[ah]=f[ah],c.position=f.position==="fixed"?"fixed":"absolute",e.parentNode.appendChild(a)}return a},Zl=function(e,t,n,i,s,o,a){return e.a=t,e.b=n,e.c=i,e.d=s,e.e=o,e.f=a,e},Po=function(){function r(t,n,i,s,o,a){t===void 0&&(t=1),n===void 0&&(n=0),i===void 0&&(i=0),s===void 0&&(s=1),o===void 0&&(o=0),a===void 0&&(a=0),Zl(this,t,n,i,s,o,a)}var e=r.prototype;return e.inverse=function(){var n=this.a,i=this.b,s=this.c,o=this.d,a=this.e,l=this.f,c=n*o-i*s||1e-10;return Zl(this,o/c,-i/c,-s/c,n/c,(s*l-o*a)/c,-(n*l-i*a)/c)},e.multiply=function(n){var i=this.a,s=this.b,o=this.c,a=this.d,l=this.e,c=this.f,h=n.a,u=n.c,f=n.b,d=n.d,g=n.e,_=n.f;return Zl(this,h*i+f*o,h*s+f*a,u*i+d*o,u*s+d*a,l+g*i+_*o,c+g*s+_*a)},e.clone=function(){return new r(this.a,this.b,this.c,this.d,this.e,this.f)},e.equals=function(n){var i=this.a,s=this.b,o=this.c,a=this.d,l=this.e,c=this.f;return i===n.a&&s===n.b&&o===n.c&&a===n.d&&l===n.e&&c===n.f},e.apply=function(n,i){i===void 0&&(i={});var s=n.x,o=n.y,a=this.a,l=this.b,c=this.c,h=this.d,u=this.e,f=this.f;return i.x=s*a+o*c+u||0,i.y=s*l+o*h+f||0,i},r}();function pr(r,e,t,n){if(!r||!r.parentNode||(yi||Dm(r)).documentElement===r)return new Po;var i=ib(r),s=cu(r),o=s?Im:Nm,a=cb(r,t),l=o[0].getBoundingClientRect(),c=o[1].getBoundingClientRect(),h=o[2].getBoundingClientRect(),u=a.parentNode,f=!n&&ob(r),d=new Po((c.left-l.left)/100,(c.top-l.top)/100,(h.left-l.left)/100,(h.top-l.top)/100,l.left+(f?0:rb()),l.top+(f?0:sb()));if(u.removeChild(a),i)for(l=i.length;l--;)c=i[l],c.scaleX=c.scaleY=0,c.renderTransform(1,c);return e?d.inverse():d}/*!
 * MotionPathPlugin 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var hb="x,translateX,left,marginLeft,xPercent".split(","),ub="y,translateY,top,marginTop,yPercent".split(","),fb=Math.PI/180,bn,Um,er,lh,$l,Ed,db=function(){return bn||typeof window<"u"&&(bn=window.gsap)&&bn.registerPlugin&&bn},to=function(e,t,n,i){for(var s=t.length,o=i===2?0:i,a=0;a<s;a++)e[o]=parseFloat(t[a][n]),i===2&&(e[o+1]=0),o+=2;return e},rr=function(e,t,n){return parseFloat(e._gsap.get(e,t,n||"px"))||0},Om=function(e){var t=e[0],n=e[1],i;for(i=2;i<e.length;i+=2)t=e[i]+=t,n=e[i+1]+=n},bd=function(e,t,n,i,s,o,a,l,c){if(a.type==="cubic")t=[t];else{a.fromCurrent!==!1&&t.unshift(rr(n,i,l),s?rr(n,s,c):0),a.relative&&Om(t);var h=s?oh:nb;t=[h(t,a.curviness)]}return t=o(Fm(t,n,a)),Wa(e,n,i,t,"x",l),s&&Wa(e,n,s,t,"y",c),Es(t,a.resolution||(a.curviness===0?20:12))},pb=function(e){return e},mb=/[-+\.]*\d+\.?(?:e-|e\+)?\d*/g,Ad=function(e,t,n){var i=pr(e),s=0,o=0,a;return(e.tagName+"").toLowerCase()==="svg"?(a=e.viewBox.baseVal,a.width||(a={width:+e.getAttribute("width"),height:+e.getAttribute("height")})):a=t&&e.getBBox&&e.getBBox(),t&&t!=="auto"&&(s=t.push?t[0]*(a?a.width:e.offsetWidth||0):t.x,o=t.push?t[1]*(a?a.height:e.offsetHeight||0):t.y),n.apply(s||o?i.apply({x:s,y:o}):{x:i.e,y:i.f})},ch=function(e,t,n,i){var s=pr(e.parentNode,!0,!0),o=s.clone().multiply(pr(t)),a=Ad(e,n,s),l=Ad(t,i,s),c=l.x,h=l.y,u;return o.e=o.f=0,i==="auto"&&t.getTotalLength&&t.tagName.toLowerCase()==="path"&&(u=t.getAttribute("d").match(mb)||[],u=o.apply({x:+u[0],y:+u[1]}),c+=u.x,h+=u.y),u&&(u=o.apply(t.getBBox()),c-=u.x,h-=u.y),o.e=c-a.x,o.f=h-a.y,o},Fm=function(e,t,n){var i=n.align,s=n.matrix,o=n.offsetX,a=n.offsetY,l=n.alignOrigin,c=e[0][0],h=e[0][1],u=rr(t,"x"),f=rr(t,"y"),d,g,_;return!e||!e.length?wa("M0,0L0,0"):(i&&(i==="self"||(d=lh(i)[0]||t)===t?ao(e,1,0,0,1,u-c,f-h):(l&&l[2]!==!1?bn.set(t,{transformOrigin:l[0]*100+"% "+l[1]*100+"%"}):l=[rr(t,"xPercent")/-100,rr(t,"yPercent")/-100],g=ch(t,d,l,"auto"),_=g.apply({x:c,y:h}),ao(e,g.a,g.b,g.c,g.d,u+g.e-(_.x-g.e),f+g.f-(_.y-g.f)))),s?ao(e,s.a,s.b,s.c,s.d,s.e,s.f):(o||a)&&ao(e,1,0,0,1,o||0,a||0),e)},Wa=function(e,t,n,i,s,o){var a=t._gsap,l=a.harness,c=l&&l.aliases&&l.aliases[n],h=c&&c.indexOf(",")<0?c:n,u=e._pt=new Um(e._pt,t,h,0,0,pb,0,a.set(t,h,e));u.u=er(a.get(t,h,o))||0,u.path=i,u.pp=s,e._props.push(h)},_b=function(e,t){return function(n){return e||t!==1?Cm(n,e,t):n}},Bm={version:"3.12.7",name:"motionPath",register:function(e,t,n){bn=e,er=bn.utils.getUnit,lh=bn.utils.toArray,$l=bn.core.getStyleSaver,Ed=bn.core.reverting||function(){},Um=n},init:function(e,t,n){if(!bn)return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"),!1;(!(typeof t=="object"&&!t.style)||!t.path)&&(t={path:t});var i=[],s=t,o=s.path,a=s.autoRotate,l=s.unitX,c=s.unitY,h=s.x,u=s.y,f=o[0],d=_b(t.start,"end"in t?t.end:1),g,_;if(this.rawPaths=i,this.target=e,this.tween=n,this.styles=$l&&$l(e,"transform"),(this.rotate=a||a===0)&&(this.rOffset=parseFloat(a)||0,this.radians=!!t.useRadians,this.rProp=t.rotation||"rotation",this.rSet=e._gsap.set(e,this.rProp,this),this.ru=er(e._gsap.get(e,this.rProp))||0),Array.isArray(o)&&!("closed"in o)&&typeof f!="number"){for(_ in f)!h&&~hb.indexOf(_)?h=_:!u&&~ub.indexOf(_)&&(u=_);h&&u?i.push(bd(this,to(to([],o,h,0),o,u,1),e,h,u,d,t,l||er(o[0][h]),c||er(o[0][u]))):h=u=0;for(_ in f)_!==h&&_!==u&&i.push(bd(this,to([],o,_,2),e,_,0,d,t,er(o[0][_])))}else g=d(Fm(wa(t.path),e,t)),Es(g,t.resolution),i.push(g),Wa(this,e,t.x||"x",g,"x",t.unitX||"px"),Wa(this,e,t.y||"y",g,"y",t.unitY||"px");n.vars.immediateRender&&this.render(n.progress(),this)},render:function(e,t){var n=t.rawPaths,i=n.length,s=t._pt;if(t.tween._time||!Ed()){for(e>1?e=1:e<0&&(e=0);i--;)Td(n[i],e,!i&&t.rotate,n[i]);for(;s;)s.set(s.t,s.p,s.path[s.pp]+s.u,s.d,e),s=s._next;t.rotate&&t.rSet(t.target,t.rProp,n[0].angle*(t.radians?fb:1)+t.rOffset+t.ru,t,e)}else t.styles.revert()},getLength:function(e){return Es(wa(e)).totalLength},sliceRawPath:Cm,getRawPath:wa,pointsToSegment:oh,stringToRawPath:Va,rawPathToString:Pm,transformRawPath:ao,getGlobalMatrix:pr,getPositionOnPath:Td,cacheRawPathMeasurements:Es,convertToPath:function(e,t){return lh(e).map(function(n){return QE(n,t!==!1)})},convertCoordinates:function(e,t,n){var i=pr(t,!0,!0).multiply(pr(e));return n?i.apply(n):i},getAlignMatrix:ch,getRelativePosition:function(e,t,n,i){var s=ch(e,t,n,i);return{x:s.e,y:s.f}},arrayToRawPath:function(e,t){t=t||{};var n=to(to([],e,t.x||"x",0),e,t.y||"y",1);return t.relative&&Om(n),[t.type==="cubic"?n:oh(n,t.curviness)]}};db()&&bn.registerPlugin(Bm);const wd=new L,gb=new Wn,Rd=new L;class zm extends ft{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}}const Xn=new Pe,xb=new Pe;class vb{constructor(e={}){const t=this;let n,i,s,o;const a={camera:{style:""},objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;const c=document.createElement("div");c.style.transformOrigin="0 0",c.style.pointerEvents="none",l.appendChild(c);const h=document.createElement("div");h.style.transformStyle="preserve-3d",c.appendChild(h),this.getSize=function(){return{width:n,height:i}},this.render=function(m,p){const v=p.projectionMatrix.elements[5]*o;p.view&&p.view.enabled?(c.style.transform=`translate( ${-p.view.offsetX*(n/p.view.width)}px, ${-p.view.offsetY*(i/p.view.height)}px )`,c.style.transform+=`scale( ${p.view.fullWidth/p.view.width}, ${p.view.fullHeight/p.view.height} )`):c.style.transform="",m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),p.parent===null&&p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld();let M,x;p.isOrthographicCamera&&(M=-(p.right+p.left)/2,x=(p.top+p.bottom)/2);const E=p.view&&p.view.enabled?p.view.height/p.view.fullHeight:1,A=p.isOrthographicCamera?`scale( ${E} )scale(`+v+")translate("+u(M)+"px,"+u(x)+"px)"+f(p.matrixWorldInverse):`scale( ${E} )translateZ(`+v+"px)"+f(p.matrixWorldInverse),R=(p.isPerspectiveCamera?"perspective("+v+"px) ":"")+A+"translate("+s+"px,"+o+"px)";a.camera.style!==R&&(h.style.transform=R,a.camera.style=R),_(m,m,p)},this.setSize=function(m,p){n=m,i=p,s=n/2,o=i/2,l.style.width=m+"px",l.style.height=p+"px",c.style.width=m+"px",c.style.height=p+"px",h.style.width=m+"px",h.style.height=p+"px"};function u(m){return Math.abs(m)<1e-10?0:m}function f(m){const p=m.elements;return"matrix3d("+u(p[0])+","+u(-p[1])+","+u(p[2])+","+u(p[3])+","+u(p[4])+","+u(-p[5])+","+u(p[6])+","+u(p[7])+","+u(p[8])+","+u(-p[9])+","+u(p[10])+","+u(p[11])+","+u(p[12])+","+u(-p[13])+","+u(p[14])+","+u(p[15])+")"}function d(m){const p=m.elements;return"translate(-50%,-50%)"+("matrix3d("+u(p[0])+","+u(p[1])+","+u(p[2])+","+u(p[3])+","+u(-p[4])+","+u(-p[5])+","+u(-p[6])+","+u(-p[7])+","+u(p[8])+","+u(p[9])+","+u(p[10])+","+u(p[11])+","+u(p[12])+","+u(p[13])+","+u(p[14])+","+u(p[15])+")")}function g(m){m.isCSS3DObject&&(m.element.style.display="none");for(let p=0,v=m.children.length;p<v;p++)g(m.children[p])}function _(m,p,v,M){if(m.visible===!1){g(m);return}if(m.isCSS3DObject){const x=m.layers.test(v.layers)===!0,E=m.element;if(E.style.display=x===!0?"":"none",x===!0){m.onBeforeRender(t,p,v);let A;m.isCSS3DSprite?(Xn.copy(v.matrixWorldInverse),Xn.transpose(),m.rotation2D!==0&&Xn.multiply(xb.makeRotationZ(m.rotation2D)),m.matrixWorld.decompose(wd,gb,Rd),Xn.setPosition(wd),Xn.scale(Rd),Xn.elements[3]=0,Xn.elements[7]=0,Xn.elements[11]=0,Xn.elements[15]=1,A=d(Xn)):A=d(m.matrixWorld);const w=a.objects.get(m);if(w===void 0||w.style!==A){E.style.transform=A;const R={style:A};a.objects.set(m,R)}E.parentNode!==h&&h.appendChild(E),m.onAfterRender(t,p,v)}}for(let x=0,E=m.children.length;x<E;x++)_(m.children[x],p,v)}}}Hr.registerPlugin(Bm);let _n=!1;(window.innerWidth<=550&&window.innerHeight<=900||window.innerWidth<=900&&window.innerHeight<=450)&&(_n=!0);const km=new pp,Hm=new HS(km),yb=document.querySelector(".progress-bar-container");document.getElementById("progress-bar-label");document.getElementById("loadingCircle");km.onLoad=function(){yb.classList.add("hidden"),ts.removeAttribute("hidden"),_n==!1&&qm.removeAttribute("hidden"),window.setTimeout(()=>{Vm.style.display="flex"},3e3)};const Vm=document.getElementById("popup1-wrapper"),Mb=document.getElementById("popup1-button"),hu=document.getElementById("popup2-wrapper"),Sb=document.getElementById("popup2-button"),hh=document.getElementById("mobile-button"),uh=document.getElementById("desktop-button"),Gm=document.getElementById("mobile-controls"),Wm=document.getElementById("desktop-controls");Mb.addEventListener("click",()=>{Vm.style.display="none"});Sb.addEventListener("click",()=>{hu.style.display="none",ts.contentWindow.focus()});hh.addEventListener("click",function(){hh.classList.remove("active"),uh.classList.remove("active"),Gm.removeAttribute("hidden"),Wm.setAttribute("hidden",!0),this.classList.add("active")});uh.addEventListener("click",function(){hh.classList.remove("active"),uh.classList.remove("active"),Wm.removeAttribute("hidden"),Gm.setAttribute("hidden",!0),this.classList.add("active")});const uu=window.innerWidth,fu=window.innerHeight,Cn=new V0,Dt=new ie,rn=new zg,lt=new Xt(90,uu/fu,.1,100);lt.position.set(0,0,5);const fh=lt.position.x,dh=lt.position.y,ph=lt.position.z,Vr=new vb;Vr.setSize(uu,fu);Vr.domElement.style.position="absolute";document.body.appendChild(Vr.domElement);const Pn=new AS({antialias:!0});Pn.setSize(uu,fu);document.body.appendChild(Pn.domElement);window.addEventListener("resize",()=>{lt.aspect=window.innerWidth/window.innerHeight,lt.updateProjectionMatrix(),Pn.setSize(window.innerWidth,window.innerHeight),Vr.setSize(window.innerWidth,window.innerHeight)});const Ee=new RS(lt,Pn.domElement);Ee.rotateSpeed=".25";Ee.enableDamping=!0;Ee.dampingFactor="0.03";Ee.enablePan=!1;Ee.enableZoom=!1;const ma=30*Math.PI/180,Cd=Math.PI/2;function du(){Ee.minAzimuthAngle=-ma,Ee.maxAzimuthAngle=ma,Ee.minPolarAngle=Cd-ma,Ee.maxPolarAngle=Cd+ma}du();const pu=new gp(16445329,20,2,1);pu.rotateX(-2.2);pu.position.set(-2,-2.5,-7.1);const mu=new gp(16446393,.5,6,6);mu.position.set(-6,18.2,7);mu.rotateX(-1.6);rn.add(pu,mu);let no;Hm.load("models/bedroom/scene.gltf",function(r){no=r.scene,no.rotation.y+=-1.5,no.position.set(-7,3,8),no.scale.set(10,10,10),rn.add(no)});let _i;Hm.load("models/gameboy/scene.gltf",function(r){_i=r.scene,_i.rotation.x+=-1.5,_i.rotation.y+=4.7,_i.position.set(0,-7,-4.25),_i.scale.set(8,8,8),rn.add(_i)});const Tb=.1,Eb=new Fh(Tb,16,16),bb=new Kn({color:10688279}),Ja=new ut(Eb,bb);Ja.position.set(-.432,-6.7,-5.75);Ja.scale.set(.11,.11,.11);Ja.name="light";rn.add(Ja);let Ir;_n?Ir=new Rs(.082,.082,.082):Ir=new Rs(.073,.073,.073);const Xm=new Oh(.07),Ym=new Uh(.02,.11,10,20),es=new h0,Ki=new ut(Ir,es),Zi=new ut(Ir,es),$i=new ut(Ir,es),Ji=new ut(Ir,es),Is=new ut(Xm,es),Ns=new ut(Xm,es),Us=new ut(Ym,es),Os=new ut(Ym,es);Is.rotateX(-1.5);Ns.rotateX(-1.5);Us.rotateZ(-1.5).rotateX(-.45);Os.rotateZ(-1.5).rotateX(-.45);_n?(Ki.position.set(-.365,-6.8,-4.987),Zi.position.set(-.365,-6.8,-4.81),$i.position.set(-.454,-6.8,-4.9),Ji.position.set(-.283,-6.8,-4.902)):(Ki.position.set(-.365,-6.76,-4.983),Zi.position.set(-.365,-6.76,-4.825),$i.position.set(-.454,-6.76,-4.9),Ji.position.set(-.285,-6.76,-4.9));Is.position.set(.432,-6.74,-4.945);Ns.position.set(.2374,-6.74,-4.856);Us.position.set(.016,-6.79,-4.579);Os.position.set(-.18,-6.79,-4.579);Ki.name="upButton";Zi.name="downButton";$i.name="leftButton";Ji.name="rightButton";Is.name="aButton";Ns.name="bButton";Us.name="startButton";Os.name="selectButton";rn.add(Ki,Zi,$i,Ji,Is,Ns,Us,Os);const mr=new Map([[Ki,"w"],[Zi,"s"],[$i,"a"],[Ji,"d"],[Is,"o"],[Ns,"p"],[Us,"Enter"],[Os,"Shift"]]),ts=document.getElementById("gameboyScreen"),Nr=new zm(ts);_n?Nr.position.set(-.002,-6.54,-5.68):Nr.position.set(-.002,-6.7,-5.68);Nr.rotateX(-1.5);Nr.rotateY(-.01);Nr.scale.set(.004,.0036,.0038);rn.add(Nr);const qm=document.getElementById("pcScreen");if(_n){const e=new _p().load("./portfolioIMG.png");e.colorSpace=Ct;const t=new Or(5,3),n=new Kn({map:e,side:Fn}),i=new ut(t,n);i.rotateY(-.715),i.position.set(6.4,-4.37,-6.625),i.scale.x=1.115,i.scale.y=1.09,rn.add(i)}else{const r=new zm(qm);r.position.set(6.4,-4.37,-6.6),r.rotateY(-.71),r.scale.set(.00291,.00302),rn.add(r)}Vr.domElement.style.pointerEvents="none";const Ab=new Or(1,1.57),wb=new Kn({color:0}),Gr=new ut(Ab,wb);Gr.name="screenSquare";Gr.rotateX(-1.57);Gr.rotateY(-.01);Gr.rotateZ(.08);Gr.position.set(7.27,-6.98,-.71);rn.add(Gr);let Pd=!1;function Rb(r,e,t){let n;Ee.minPolarAngle=0,Ee.maxPolarAngle=Math.PI,_n?n=new Yi([new L(r,e,t),new L(0,-5.45,-5.15)]):n=new Yi([new L(r,e,t),new L(0,-5.65,-5.15)]),Hr.to(lt.position,{motionPath:{path:n.getPoints(300),autoRotate:!1,curviness:2},duration:2,ease:"power2.out",onUpdate:()=>{Ee.enableRotate=!1,Ee.target.set(_i.position.x,_i.position.y,_i.position.z-1),Ee.update()},onComplete:()=>{Ee.enableRotate=!1,Ee.enableZoom=!0,Ee.minDistance=1,Ee.maxDistance=2,Pd==!1?window.setTimeout(()=>{hu.style.display="flex",_h()},250):_h(),Pd=!0}})}function Cb(){let r,e=-7.5;Ee.minPolarAngle=0,Ee.maxPolarAngle=Math.PI,Ee.minDistance=0,Ee.maxDistance=1/0,Ee.enableZoom=!1,r=new Yi([new L(0,-4.45,-5.15),new L(fh,dh,ph)]),Hr.to(lt.position,{motionPath:{path:r.getPoints(250),autoRotate:!1,curviness:2},duration:2,ease:"power2",onUpdate:()=>{Ee.enableRotate=!1,_n?e=e+.0625:e=e+.022,Ee.target.set(0,e,-5.4),Ee.update()},onComplete:()=>{Ee.enableRotate=!0,du(),Ee.target.set(0,0,0),gn=!1}})}function Pb(r,e,t){let n;Ee.minPolarAngle=0,Ee.maxPolarAngle=Math.PI,Ee.minAzimuthAngle=0,Ee.minAzimuthAngle=1/0,_n?n=new Yi([new L(r,e,t),new L(4.4555800914127115,-4.4313336221728905,-4.332661108140991)]):n=new Yi([new L(r,e,t),new L(4.4555800914127115,-4.4313336221728905,-4.332661108140991)]),Hr.to(lt.position,{motionPath:{path:n.getPoints(200),autoRotate:!1,curviness:2},duration:2,ease:"power2.out",onUpdate:()=>{Ee.target.set(6.32,-4.442,-6.48),Ee.update()},onComplete:()=>{_n&&(window.location.href="https://dawsonweilage.com/portfolio",Ee.minDistance=2.25,Ee.maxDistance=7),Ee.enableRotate=!1,Ee.enableZoom=!0,Ee.minDistance=2,Ee.maxDistance=3,Ps=!0,_h()}})}function Lb(){let r,e=6.9,t=-4.3;Ee.minPolarAngle=0,Ee.maxPolarAngle=Math.PI,Ee.minDistance=0,Ee.maxDistance=1/0,Ee.enableZoom=!1,_n?r=new Yi([new L(3.5554371708328594,-4.426178519110029,-3.295923265403402),new L(fh,dh,ph)]):r=new Yi([new L(4.4555800914127115,-4.4313336221728905,-4.332661108140991),new L(fh,dh,ph)]),Hr.to(lt.position,{motionPath:{path:r.getPoints(250),autoRotate:!1,curviness:2},duration:2,ease:"power2",onUpdate:()=>{Ee.enableRotate=!1,_n?(e=e-.0582,t=t+.033):(e=e-.021,t=t+.01368),Ee.target.set(e,t,-7.3),Ee.update()},onComplete:()=>{Ee.enableRotate=!0,du(),Ee.target.set(0,0,0),Ps=!1}})}const mh=document.getElementById("backArrowButton"),Db=document.getElementById("showControlsButton"),jm=document.getElementById("rightGBUI"),_u=document.getElementById("linkButton"),_a=document.getElementById("soundButton"),Ld=document.getElementById("gbMusic");function _h(){mh.style.display="block",gn==!0?jm.style.display="flex":Ps==!0&&_n==!1&&(_u.style.display="flex")}let Ps=!1,gn=!1;function Ib(r){Dt.x=r.clientX/window.innerWidth*2-1,Dt.y=-(r.clientY/window.innerHeight)*2+1,Cn.setFromCamera(Dt,lt);var e=Cn.intersectObjects(rn.children,!0);e[0].object.name.includes("Gameboy")&&gn==!1||e[0].object.name.includes("Computer")&&Ps==!1?document.body.style.cursor="pointer":document.body.style.cursor="default"}function Nb(r){Dt.x=r.clientX/window.innerWidth*2-1,Dt.y=-(r.clientY/window.innerHeight)*2+1,Cn.setFromCamera(Dt,lt);var e=Cn.intersectObjects(rn.children,!0);e[0].object.name.includes("Gameboy")||e[1].object.name.includes("Gameboy")?e.length>0&&gn==!1&&(Rb(lt.position.x,lt.position.y,lt.position.z),gn=!0,ts.contentWindow.focus()):(e[0].object.name.includes("Computer")||e[1].object.name.includes("Computer"))&&e.length>0&&Ps==!1&&(Pb(lt.position.x,lt.position.y,lt.position.z),Ps=!0)}function Ub(r){Dt.x=r.clientX/window.innerWidth*2-1,Dt.y=-(r.clientY/window.innerHeight)*2+1,Cn.setFromCamera(Dt,lt);var e=Cn.intersectObjects(rn.children,!0);e.length>0&&(e[1].object.name.includes("Button")||e[0].object.name.includes("Button")?document.body.style.cursor="pointer":document.body.style.cursor="default")}function Km(r){const e=new KeyboardEvent("keydown",{key:r,code:r});ts.contentWindow.dispatchEvent(e)}function Lo(r){const e=new KeyboardEvent("keyup",{key:r,code:r});ts.contentWindow.dispatchEvent(e)}let On;function Zm(r){let e,t;r.type.startsWith("touch")?(e=r.touches[0].clientX,t=r.touches[0].clientY):(e=r.clientX,t=r.clientY),Dt.x=e/window.innerWidth*2-1,Dt.y=-(t/window.innerHeight)*2+1,Cn.setFromCamera(Dt,lt);const n=Cn.intersectObjects([Ki,Zi,$i,Ji,Is,Ns,Us,Os]);if(n.length>0){const i=n[0].object;On=i;const s=mr.get(i);s?Km(s):Lo(s)}}function $m(r){let e,t;r.type.startsWith("touch")?(e=r.changedTouches[0].clientX,t=r.changedTouches[0].clientY):(e=r.clientX,t=r.clientY),Dt.x=e/window.innerWidth*2-1,Dt.y=-(t/window.innerHeight)*2+1,Cn.setFromCamera(Dt,lt);const n=Cn.intersectObjects([Ki,Zi,$i,Ji,Is,Ns,Us,Os]);if(n.length>0){const i=n[0].object,s=mr.get(i);s&&Lo(s)}else if(On){const i=mr.get(On);i&&Lo(i)}On=void 0}function Jm(r){let e,t;r.type.startsWith("touch")?(e=r.changedTouches[0].clientX,t=r.changedTouches[0].clientY):(e=r.clientX,t=r.clientY),Dt.x=e/window.innerWidth*2-1,Dt.y=-(t/window.innerHeight)*2+1,Cn.setFromCamera(Dt,lt);const n=Cn.intersectObjects([Ki,Zi,$i,Ji]);if(n.length>0){let i=n[0].object;if(On!==i){if(On){const o=mr.get(On);Lo(o)}On=i;const s=mr.get(i);Km(s)}}else if(On){const i=mr.get(On);Lo(i),On=void 0}}let gu=!1;Pn.domElement.addEventListener("mousedown",r=>{gn&&r.button===0&&(gu=!0,Zm(r))});Pn.domElement.addEventListener("mousemove",r=>{gn&&r.button===0?(Ub(r),gu&&r.button===0&&Jm(r)):Ib(r)});Pn.domElement.addEventListener("mouseup",r=>{gn&&r.button===0&&(gu=!1,r.preventDefault(),$m(r))});Pn.domElement.addEventListener("touchstart",r=>{gn&&(r.preventDefault(),Zm(r))});Pn.domElement.addEventListener("touchmove",r=>{gn&&(r.preventDefault(),Jm(r))});Pn.domElement.addEventListener("touchend",r=>{gn&&(r.preventDefault(),$m(r))});Pn.domElement.addEventListener("click",r=>{gn?ts.contentWindow.focus():Ps==!1&&Nb(r)});document.addEventListener("contextmenu",function(r){ts.contentWindow.focus()});mh.addEventListener("click",function(){mh.style.display="none",gn==!0?(jm.style.display="none",Cb()):(_u.style.display="none",Lb())});Db.addEventListener("click",function(){hu.style.display="flex"});_a.addEventListener("click",function(){_a.src.endsWith("soundOff.svg")?(_a.src="/static/soundOn.svg",Ld.volume=.75):(_a.src="/static/soundOff.svg",Ld.volume=0)});_u.addEventListener("click",function(){window.location.href="https://dawsonweilage.com/portfolio"});function Qm(){requestAnimationFrame(Qm),Pn.render(rn,lt),Vr.render(rn,lt),Ee.update()}Qm();
