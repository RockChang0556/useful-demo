import{l as _,$ as u,e as m,W as d,q as s,t as o,B as i,E as n,X as r,F as p,_ as h,u as g,D as f,Y as k,P as v,v as x}from"./index-33d3b1b0.js";const y="/useful-demo/logo.png",B=[{name:"css",path:"/css"},{name:"components",path:"/components"}],C={class:"global-header"},N=r("img",{src:y,alt:"logo"},null,-1),V={class:"header-menu"},S=_({__name:"header",setup(D){const c=u(),l=m(()=>{var t;return(t=c.name)==null?void 0:t.toString().split("-")[0]});return(t,E)=>{const a=d("router-link");return s(),o("div",C,[i(a,{class:"header-logo",to:"/"},{default:n(()=>[N]),_:1}),r("div",V,[(s(!0),o(p,null,h(g(B),e=>(s(),f(a,{key:e.name,to:e.path,class:x({active:l.value===e.name})},{default:n(()=>[k(v(e.name),1)]),_:2},1032,["to","class"]))),128))])])}}});export{S as _};