import{aa as K,ab as X,k as F,a6 as k,u as J,h as Y,s as Z,D as V,p as M}from"./index-ead78b8e.js";import{c as j}from"./base-be481581.js";import{g as ee,e as ne,c as W,d as te,S as P,f as B,h,t as G,a as I,b as re}from"./_baseGet-5f66532d.js";var E;const y=typeof window<"u",se=e=>typeof e=="string",H=()=>{},oe=y&&((E=window==null?void 0:window.navigator)==null?void 0:E.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function b(e){return typeof e=="function"?e():J(e)}function ae(e){return e}function _(e){return K()?(X(e),!0):!1}function ie(e,n=!0){Y()?Z(e):n?e():V(e)}function on(e,n,t={}){const{immediate:r=!0}=t,s=F(!1);let a=null;function i(){a&&(clearTimeout(a),a=null)}function o(){s.value=!1,i()}function l(...d){i(),s.value=!0,a=setTimeout(()=>{s.value=!1,a=null,e(...d)},b(n))}return r&&(s.value=!0,y&&l()),_(o),{isPending:k(s),start:l,stop:o}}function v(e){var n;const t=b(e);return(n=t==null?void 0:t.$el)!=null?n:t}const w=y?window:void 0;function O(...e){let n,t,r,s;if(se(e[0])||Array.isArray(e[0])?([t,r,s]=e,n=w):[n,t,r,s]=e,!n)return H;Array.isArray(t)||(t=[t]),Array.isArray(r)||(r=[r]);const a=[],i=()=>{a.forEach(c=>c()),a.length=0},o=(c,m,u,f)=>(c.addEventListener(m,u,f),()=>c.removeEventListener(m,u,f)),l=M(()=>[v(n),b(s)],([c,m])=>{i(),c&&a.push(...t.flatMap(u=>r.map(f=>o(c,u,f,m))))},{immediate:!0,flush:"post"}),d=()=>{l(),i()};return _(d),d}let S=!1;function an(e,n,t={}){const{window:r=w,ignore:s=[],capture:a=!0,detectIframe:i=!1}=t;if(!r)return;oe&&!S&&(S=!0,Array.from(r.document.body.children).forEach(u=>u.addEventListener("click",H)));let o=!0;const l=u=>s.some(f=>{if(typeof f=="string")return Array.from(r.document.querySelectorAll(f)).some(p=>p===u.target||u.composedPath().includes(p));{const p=v(f);return p&&(u.target===p||u.composedPath().includes(p))}}),c=[O(r,"click",u=>{const f=v(e);if(!(!f||f===u.target||u.composedPath().includes(f))){if(u.detail===0&&(o=!l(u)),!o){o=!0;return}n(u)}},{passive:!0,capture:a}),O(r,"pointerdown",u=>{const f=v(e);f&&(o=!u.composedPath().includes(f)&&!l(u))},{passive:!0}),i&&O(r,"blur",u=>{var f;const p=v(e);((f=r.document.activeElement)==null?void 0:f.tagName)==="IFRAME"&&!(p!=null&&p.contains(r.document.activeElement))&&n(u)})].filter(Boolean);return()=>c.forEach(u=>u())}function ue(e,n=!1){const t=F(),r=()=>t.value=!!e();return r(),ie(r,n),t}const A=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},T="__vueuse_ssr_handlers__";A[T]=A[T]||{};var $=Object.getOwnPropertySymbols,le=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable,ce=(e,n)=>{var t={};for(var r in e)le.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&$)for(var r of $(e))n.indexOf(r)<0&&fe.call(e,r)&&(t[r]=e[r]);return t};function un(e,n,t={}){const r=t,{window:s=w}=r,a=ce(r,["window"]);let i;const o=ue(()=>s&&"ResizeObserver"in s),l=()=>{i&&(i.disconnect(),i=void 0)},d=M(()=>v(e),m=>{l(),o.value&&s&&m&&(i=new ResizeObserver(n),i.observe(m,a))},{immediate:!0,flush:"post"}),c=()=>{l(),d()};return _(c),{isSupported:o,stop:c}}var x;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(x||(x={}));var de=Object.defineProperty,N=Object.getOwnPropertySymbols,pe=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable,C=(e,n,t)=>n in e?de(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,ve=(e,n)=>{for(var t in n||(n={}))pe.call(n,t)&&C(e,t,n[t]);if(N)for(var t of N(n))me.call(n,t)&&C(e,t,n[t]);return e};const ge={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};ve({linear:ae},ge);function Oe(e){return e}function he(e,n,t){switch(t.length){case 0:return e.call(n);case 1:return e.call(n,t[0]);case 2:return e.call(n,t[0],t[1]);case 3:return e.call(n,t[0],t[1],t[2])}return e.apply(n,t)}var ye=800,be=16,_e=Date.now;function we(e){var n=0,t=0;return function(){var r=_e(),s=be-(r-t);if(t=r,s>0){if(++n>=ye)return arguments[0]}else n=0;return e.apply(void 0,arguments)}}function Pe(e){return function(){return e}}var Ie=function(){try{var e=ee(Object,"defineProperty");return e({},"",{}),e}catch{}}();const g=Ie;var Ee=g?function(e,n){return g(e,"toString",{configurable:!0,enumerable:!1,value:Pe(n),writable:!0})}:Oe;const Se=Ee;var Ae=we(Se);const Te=Ae;var $e=9007199254740991,xe=/^(?:0|[1-9]\d*)$/;function U(e,n){var t=typeof e;return n=n??$e,!!n&&(t=="number"||t!="symbol"&&xe.test(e))&&e>-1&&e%1==0&&e<n}function Ne(e,n,t){n=="__proto__"&&g?g(e,n,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[n]=t}var Ce=Object.prototype,Re=Ce.hasOwnProperty;function Le(e,n,t){var r=e[n];(!(Re.call(e,n)&&ne(r,t))||t===void 0&&!(n in e))&&Ne(e,n,t)}var R=Math.max;function Qe(e,n,t){return n=R(n===void 0?e.length-1:n,0),function(){for(var r=arguments,s=-1,a=R(r.length-n,0),i=Array(a);++s<a;)i[s]=r[n+s];s=-1;for(var o=Array(n+1);++s<n;)o[s]=r[s];return o[n]=t(i),he(e,this,o)}}var Fe=9007199254740991;function Me(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Fe}var We="[object Arguments]";function L(e){return W(e)&&te(e)==We}var z=Object.prototype,Be=z.hasOwnProperty,Ge=z.propertyIsEnumerable,He=L(function(){return arguments}())?L:function(e){return W(e)&&Be.call(e,"callee")&&!Ge.call(e,"callee")};const D=He;function Ue(e,n){for(var t=-1,r=n.length,s=e.length;++t<r;)e[s+t]=n[t];return e}var Q=P?P.isConcatSpreadable:void 0;function ze(e){return B(e)||D(e)||!!(Q&&e&&e[Q])}function q(e,n,t,r,s){var a=-1,i=e.length;for(t||(t=ze),s||(s=[]);++a<i;){var o=e[a];n>0&&t(o)?n>1?q(o,n-1,t,r,s):Ue(s,o):r||(s[s.length]=o)}return s}function De(e){var n=e==null?0:e.length;return n?q(e,1):[]}function qe(e){return Te(Qe(e,void 0,De),e+"")}function Ke(e,n){return e!=null&&n in Object(e)}function Xe(e,n,t){n=h(n,e);for(var r=-1,s=n.length,a=!1;++r<s;){var i=G(n[r]);if(!(a=e!=null&&t(e,i)))break;e=e[i]}return a||++r!=s?a:(s=e==null?0:e.length,!!s&&Me(s)&&U(i,s)&&(B(e)||D(e)))}function ke(e,n){return e!=null&&Xe(e,n,Ke)}function ln(e){return e==null}function Je(e,n,t,r){if(!I(e))return e;n=h(n,e);for(var s=-1,a=n.length,i=a-1,o=e;o!=null&&++s<a;){var l=G(n[s]),d=t;if(l==="__proto__"||l==="constructor"||l==="prototype")return e;if(s!=i){var c=o[l];d=r?r(c,l,o):void 0,d===void 0&&(d=I(c)?c:U(n[s+1])?[]:{})}Le(o,l,d),o=o[l]}return e}function Ye(e,n,t){for(var r=-1,s=n.length,a={};++r<s;){var i=n[r],o=re(e,i);t(o,i)&&Je(a,h(i,e),o)}return a}function Ze(e,n){return Ye(e,n,function(t,r){return ke(e,r)})}var Ve=qe(function(e,n){return e==null?{}:Ze(e,n)});const je=Ve;class en extends Error{constructor(n){super(n),this.name="ElementPlusError"}}function fn(e,n){throw new en(`[${e}] ${n}`)}function cn(e,n){}const dn=e=>e,nn=j({ariaLabel:String,ariaOrientation:{type:String,values:["horizontal","vertical","undefined"]},ariaControls:String}),pn=e=>je(nn,e);export{un as a,ln as b,pn as c,cn as d,O as e,_ as f,v as g,y as i,dn as m,an as o,fn as t,on as u};
