import{p as f,u as c,h as b,e as t,j as r,k as v,s as y,E as S,R as F}from"./index-8be71128.js";import{s as _,F as p,z,j as h}from"./base-173ebea9.js";const j=["","default","small","large"],R=({from:s,replacement:e,scope:o,version:u,ref:l,type:n="API"},i)=>{f(()=>c(i),a=>{},{immediate:!0})},I=s=>{const e=b();return t(()=>{var o,u;return(u=(o=e==null?void 0:e.proxy)==null?void 0:o.$props)==null?void 0:u[s]})},D=_({type:String,values:j,required:!1}),E=Symbol("size"),P=()=>{const s=r(E,{});return t(()=>c(s.size)||"")},L=(s,e={})=>{const o=v(void 0),u=e.prop?o:I("size"),l=e.global?o:P(),n=e.form?{size:void 0}:r(p,void 0),i=e.formItem?{size:void 0}:r(z,void 0);return t(()=>u.value||c(s)||(i==null?void 0:i.size)||(n==null?void 0:n.size)||l.value||"")},N=s=>{const e=I("disabled"),o=r(p,void 0);return t(()=>e.value||c(s)||(o==null?void 0:o.disabled)||!1)},U=()=>{const s=r(p,void 0),e=r(z,void 0);return{form:s,formItem:e}},g=(s,{formItemContext:e,disableIdGeneration:o,disableIdManagement:u})=>{o||(o=v(!1)),u||(u=v(!1));const l=v();let n;const i=t(()=>{var a;return!!(!(s.label||s.ariaLabel)&&e&&e.inputIds&&((a=e.inputIds)==null?void 0:a.length)<=1)});return y(()=>{n=f([S(s,"id"),o],([a,m])=>{const d=a??(m?void 0:h().value);d!==l.value&&(e!=null&&e.removeInputId&&(l.value&&e.removeInputId(l.value),!(u!=null&&u.value)&&!m&&d&&e.addInputId(d)),l.value=d)},{immediate:!0})}),F(()=>{n&&n(),e!=null&&e.removeInputId&&l.value&&e.removeInputId(l.value)}),{isLabeledByFormItem:i,inputId:l}};export{U as a,L as b,N as c,R as d,g as e,D as u};