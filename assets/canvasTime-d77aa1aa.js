var g=Object.defineProperty;var _=(s,t,i)=>t in s?g(s,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[t]=i;var r=(s,t,i)=>(_(s,typeof t!="symbol"?t+"":t,i),i);import{d as w,k as y,s as S,G as T,o as z,f as P,O as R,H as x,S as M,U as C,_ as F}from"./index-fda072de.js";const m=(s,t)=>Math.floor(Math.random()*(t-s+1)+s);class I{constructor(t,i){r(this,"x",0);r(this,"y",0);r(this,"size",0);r(this,"ctx");r(this,"conf");this.ctx=t,this.conf=i;const{width:o,height:n,particSize:[a,h]}=i;this.size=m(a*window.devicePixelRatio,h*window.devicePixelRatio);const c=Math.min(o,n)/2,e=m(0,360)*Math.PI/180,l=o/2,d=n/2;this.x=l+c*Math.cos(e),this.y=d+c*Math.sin(e)}draw(){this.ctx&&(this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.size,0,Math.PI*2),this.ctx.fillStyle=this.conf.color,this.ctx.fill())}moveTo(t,i){const n=this.x,a=this.y,h=(t-n)/300,c=(i-a)/300,e=Date.now(),l=()=>{const d=Date.now()-e,f=n+h*d,p=a+c*d;if(this.x=f,this.y=p,d>=300){this.x=t,this.y=i;return}requestAnimationFrame(l)};l()}}class b{constructor(t,i={}){r(this,"dom");r(this,"ctx");r(this,"config");r(this,"particles",[]);r(this,"canvasText","");this.dom=t,this.ctx=t==null?void 0:t.getContext("2d",{willReadFrequently:!0}),this.config={width:i.width??500,height:i.height??200,color:i.color??"#000",fontFamily:i.fontFamily??"sans-serif",fontSize:i.fontSize??120,gap:i.gap??6,particSize:i.particSize??[2,4]},this.initCanvasSize(this.config.width,this.config.height)}initCanvasSize(t,i){this.dom&&(this.dom.width=t*window.devicePixelRatio,this.dom.height=i*window.devicePixelRatio)}clear(){var t;this.dom&&((t=this.ctx)==null||t.clearRect(0,0,this.dom.width,this.dom.height))}draw(t){if(!this.dom)return;const i=typeof t=="function"?t():t;this.clear(),this.update(i);for(const o of this.particles)o.draw();typeof t=="function"&&requestAnimationFrame(()=>this.draw(t))}update(t){var l,d;if(!this.dom||!this.ctx)return;const{fontSize:i,fontFamily:o,color:n,particSize:a}=this.config;if(this.canvasText===t)return;this.canvasText=t;const h=((l=this.dom)==null?void 0:l.width)||0,c=((d=this.dom)==null?void 0:d.height)||0;this.ctx.fillStyle="#000",this.ctx.textBaseline="middle",this.ctx.textAlign="center",this.ctx.font=`${i*window.devicePixelRatio}px ${o}`,this.ctx.fillText(this.canvasText,h/2,c/2);const e=this.getPoint();this.clear(),this.particles.length>e.length&&this.particles.splice(e.length);for(let f=0;f<e.length;f++){let p=this.particles[f];p||(p=new I(this.ctx,{width:h,height:c,color:n,particSize:a}),this.particles.push(p));const[u,v]=e[f];p.moveTo(u,v)}}getPoint(){if(!this.dom||!this.ctx)return[];const{width:t,height:i}=this.dom,o=[],{data:n}=this.ctx.getImageData(0,0,t,i),{gap:a}=this.config;for(let h=0;h<t;h+=a)for(let c=0;c<i;c+=a){const e=(h+c*t)*4,[l,d,f,p]=[n[e],n[e+1],n[e+2],n[e+3]];l===0&&d===0&&f===0&&p===255&&o.push([h,c])}return o}}const k=s=>(M("data-v-7b7ac9f0"),s=s(),C(),s),B={class:"content"},D={class:"canvasTime"},q=k(()=>x("h2",null,"粒子绘画时钟",-1)),A=w({__name:"canvasTime",setup(s){const t=y(),i=()=>new Date().toTimeString().substring(0,8);return S(()=>{new b(t.value,{width:500,height:200,fontFamily:"PCMyungjo"}).draw(i)}),(o,n)=>{const a=T("v-md-preview");return z(),P("div",B,[R(a,{text:`
> canvas 粒子绘画
`}),x("div",D,[q,x("canvas",{ref_key:"canvasRef",ref:t},null,512)])])}}});const V=F(A,[["__scopeId","data-v-7b7ac9f0"]]);export{V as default};
