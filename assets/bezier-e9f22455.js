import{d as _,k as s,s as m,R as d,G as f,o as p,f as b,O as z,H as c}from"./index-bc3b54d2.js";const x={class:"content bezier-content"},y={class:"bezier-box"},C=_({__name:"bezier",setup(k){const a=s(),r=s(),o=s(),i=s();m(()=>{setTimeout(()=>{a.value&&(o.value=l(a.value)),r.value&&(i.value=l(r.value))},1e3)}),d(()=>{o.value&&clearInterval(o.value),i.value&&clearInterval(i.value)});function l(t){return setInterval(function(){var u;const{x:n,y:e}=(u=t.getClientRects())==null?void 0:u[0];v(n+10,e+10)},20)}function v(t,n){var e=document.createElement("div");e.className="track",e.style.left=t+"px",e.style.top=n+"px",document.getElementsByClassName("bezier-content")[0].appendChild(e)}return(t,n)=>{const e=f("v-md-preview");return p(),b("div",x,[z(e,{text:`
> 贝塞尔的奇妙动画

动画只支持数值类的 css ***属性***
`}),c("div",y,[c("div",{ref_key:"bezier1Ref",ref:a,class:"bezier-item bezier-item1"},null,512),c("div",{ref_key:"bezier2Ref",ref:r,class:"bezier-item bezier-item2"},null,512)])])}}});export{C as default};