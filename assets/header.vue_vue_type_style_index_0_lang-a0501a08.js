import{d as _,M as u,e as m,G as i,o as s,f as o,O as p,w as n,H as r,F as d,L as h,c as g,I as f,J as k,n as x,u as y}from"./index-ead78b8e.js";const v="/useful-demo/logo.png",B=[{name:"css",path:"/css"},{name:"components",path:"/components"},{name:"utils",path:"/utils"}],C={class:"global-header"},N=r("img",{src:v,alt:"logo"},null,-1),E={class:"header-menu"},F=_({__name:"header",setup(V){const c=u(),l=m(()=>{var t;return(t=c.name)==null?void 0:t.toString().split("-")[0]});return(t,w)=>{const a=i("router-link");return s(),o("div",C,[p(a,{class:"header-logo",to:"/"},{default:n(()=>[N]),_:1}),r("div",E,[(s(!0),o(d,null,h(y(B),e=>(s(),g(a,{key:e.name,to:e.path,class:x({active:l.value===e.name})},{default:n(()=>[f(k(e.name),1)]),_:2},1032,["to","class"]))),128))])])}}});export{F as _};
