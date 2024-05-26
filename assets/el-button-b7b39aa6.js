import{c as q,f as I,D as M,g as O,u as V,E as w,_ as G,w as Q,a as R}from"./base-be481581.js";import{d as H,a as J,b as L,c as D,u as W}from"./use-form-item-ec2d5a05.js";import{k as F,h as X,j as K,e as c,b as Y,a3 as Z,d as _,o as b,c as p,w as h,f as $,F as tt,r as k,u as i,n as x,P as C,Q as E,m as ot,q as et,l as nt,E as T}from"./index-ead78b8e.js";import{T as at}from"./index-f8748455.js";const st=Symbol(),P=F();function lt(o,l=void 0){const n=X()?K(st,P):P;return o?c(()=>{var e,s;return(s=(e=n.value)==null?void 0:e[o])!=null?s:l}):n}const j=Symbol("buttonGroupContextKey"),rt=(o,l)=>{H({from:"type.text",replacement:"link",version:"3.0.0",scope:"props",ref:"https://element-plus.org/en-US/component/button.html#button-attributes"},c(()=>o.type==="text"));const n=K(j,void 0),e=lt("button"),{form:s}=J(),t=L(c(()=>n==null?void 0:n.size)),r=D(),f=F(),u=Y(),v=c(()=>o.type||(n==null?void 0:n.type)||""),B=c(()=>{var a,g,m;return(m=(g=o.autoInsertSpace)!=null?g:(a=e.value)==null?void 0:a.autoInsertSpace)!=null?m:!1}),y=c(()=>o.tag==="button"?{ariaDisabled:r.value||o.loading,disabled:r.value||o.loading,autofocus:o.autofocus,type:o.nativeType}:{}),S=c(()=>{var a;const g=(a=u.default)==null?void 0:a.call(u);if(B.value&&(g==null?void 0:g.length)===1){const m=g[0];if((m==null?void 0:m.type)===Z){const U=m.children;return/^\p{Unified_Ideograph}{2}$/u.test(U.trim())}}return!1});return{_disabled:r,_size:t,_type:v,_ref:f,_props:y,shouldAddSpace:S,handleClick:a=>{o.nativeType==="reset"&&(s==null||s.resetFields()),l("click",a)}}},it=["default","primary","success","warning","info","danger","text",""],ct=["button","submit","reset"],N=q({size:W,disabled:Boolean,type:{type:String,values:it,default:""},icon:{type:I},nativeType:{type:String,values:ct,default:"button"},loading:Boolean,loadingIcon:{type:I,default:()=>M},plain:Boolean,text:Boolean,link:Boolean,bg:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean,color:String,dark:Boolean,autoInsertSpace:{type:Boolean,default:void 0},tag:{type:O([String,Object]),default:"button"}}),ut={click:o=>o instanceof MouseEvent};function d(o,l=20){return o.mix("#141414",l).toString()}function dt(o){const l=D(),n=V("button");return c(()=>{let e={};const s=o.color;if(s){const t=new at(s),r=o.dark?t.tint(20).toString():d(t,20);if(o.plain)e=n.cssVarBlock({"bg-color":o.dark?d(t,90):t.tint(90).toString(),"text-color":s,"border-color":o.dark?d(t,50):t.tint(50).toString(),"hover-text-color":`var(${n.cssVarName("color-white")})`,"hover-bg-color":s,"hover-border-color":s,"active-bg-color":r,"active-text-color":`var(${n.cssVarName("color-white")})`,"active-border-color":r}),l.value&&(e[n.cssVarBlockName("disabled-bg-color")]=o.dark?d(t,90):t.tint(90).toString(),e[n.cssVarBlockName("disabled-text-color")]=o.dark?d(t,50):t.tint(50).toString(),e[n.cssVarBlockName("disabled-border-color")]=o.dark?d(t,80):t.tint(80).toString());else{const f=o.dark?d(t,30):t.tint(30).toString(),u=t.isDark()?`var(${n.cssVarName("color-white")})`:`var(${n.cssVarName("color-black")})`;if(e=n.cssVarBlock({"bg-color":s,"text-color":u,"border-color":s,"hover-bg-color":f,"hover-text-color":u,"hover-border-color":f,"active-bg-color":r,"active-border-color":r}),l.value){const v=o.dark?d(t,50):t.tint(50).toString();e[n.cssVarBlockName("disabled-bg-color")]=v,e[n.cssVarBlockName("disabled-text-color")]=o.dark?"rgba(255, 255, 255, 0.5)":`var(${n.cssVarName("color-white")})`,e[n.cssVarBlockName("disabled-border-color")]=v}}}return e})}const bt=_({name:"ElButton"}),ft=_({...bt,props:N,emits:ut,setup(o,{expose:l,emit:n}){const e=o,s=dt(e),t=V("button"),{_ref:r,_size:f,_type:u,_disabled:v,_props:B,shouldAddSpace:y,handleClick:S}=rt(e,n),z=c(()=>[t.b(),t.m(u.value),t.m(f.value),t.is("disabled",v.value),t.is("loading",e.loading),t.is("plain",e.plain),t.is("round",e.round),t.is("circle",e.circle),t.is("text",e.text),t.is("link",e.link),t.is("has-bg",e.bg)]);return l({ref:r,size:f,type:u,disabled:v,shouldAddSpace:y}),(a,g)=>(b(),p(C(a.tag),ot({ref_key:"_ref",ref:r},i(B),{class:i(z),style:i(s),onClick:i(S)}),{default:h(()=>[a.loading?(b(),$(tt,{key:0},[a.$slots.loading?k(a.$slots,"loading",{key:0}):(b(),p(i(w),{key:1,class:x(i(t).is("loading"))},{default:h(()=>[(b(),p(C(a.loadingIcon)))]),_:1},8,["class"]))],64)):a.icon||a.$slots.icon?(b(),p(i(w),{key:1},{default:h(()=>[a.icon?(b(),p(C(a.icon),{key:0})):k(a.$slots,"icon",{key:1})]),_:3})):E("v-if",!0),a.$slots.default?(b(),$("span",{key:2,class:x({[i(t).em("text","expand")]:i(y)})},[k(a.$slots,"default")],2)):E("v-if",!0)]),_:3},16,["class","style","onClick"]))}});var vt=G(ft,[["__file","button.vue"]]);const gt={size:N.size,type:N.type},mt=_({name:"ElButtonGroup"}),pt=_({...mt,props:gt,setup(o){const l=o;et(j,nt({size:T(l,"size"),type:T(l,"type")}));const n=V("button");return(e,s)=>(b(),$("div",{class:x(`${i(n).b("group")}`)},[k(e.$slots,"default")],2))}});var A=G(pt,[["__file","button-group.vue"]]);const St=Q(vt,{ButtonGroup:A});R(A);export{St as E};
