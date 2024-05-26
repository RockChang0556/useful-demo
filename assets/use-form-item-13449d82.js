import{p as h,u as d,j as l,k as c,e as s,a8 as b,h as y,s as w,E as S,a9 as T}from"./index-35ec7750.js";import{K as D,L as N,Q as p,P as g,j as k}from"./base-9b8d3a37.js";function P(t,e,a){var o=t==null?void 0:D(t,e);return o===void 0?a:o}const x=["","default","small","large"],J=({from:t,replacement:e,scope:a,version:o,ref:r,type:n="API"},i)=>{h(()=>d(i),u=>{},{immediate:!0})};var F={name:"en",el:{breadcrumb:{label:"Breadcrumb"},colorpicker:{confirm:"OK",clear:"Clear",defaultLabel:"color picker",description:"current color is {color}. press enter to select a new color."},datepicker:{now:"Now",today:"Today",cancel:"Cancel",clear:"Clear",confirm:"OK",dateTablePrompt:"Use the arrow keys and enter to select the day of the month",monthTablePrompt:"Use the arrow keys and enter to select the month",yearTablePrompt:"Use the arrow keys and enter to select the year",selectedDate:"Selected date",selectDate:"Select date",selectTime:"Select time",startDate:"Start Date",startTime:"Start Time",endDate:"End Date",endTime:"End Time",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",year:"",month1:"January",month2:"February",month3:"March",month4:"April",month5:"May",month6:"June",month7:"July",month8:"August",month9:"September",month10:"October",month11:"November",month12:"December",week:"week",weeks:{sun:"Sun",mon:"Mon",tue:"Tue",wed:"Wed",thu:"Thu",fri:"Fri",sat:"Sat"},weeksFull:{sun:"Sunday",mon:"Monday",tue:"Tuesday",wed:"Wednesday",thu:"Thursday",fri:"Friday",sat:"Saturday"},months:{jan:"Jan",feb:"Feb",mar:"Mar",apr:"Apr",may:"May",jun:"Jun",jul:"Jul",aug:"Aug",sep:"Sep",oct:"Oct",nov:"Nov",dec:"Dec"}},inputNumber:{decrease:"decrease number",increase:"increase number"},select:{loading:"Loading",noMatch:"No matching data",noData:"No data",placeholder:"Select"},dropdown:{toggleDropdown:"Toggle Dropdown"},cascader:{noMatch:"No matching data",loading:"Loading",placeholder:"Select",noData:"No data"},pagination:{goto:"Go to",pagesize:"/page",total:"Total {total}",pageClassifier:"",page:"Page",prev:"Go to previous page",next:"Go to next page",currentPage:"page {pager}",prevPages:"Previous {pager} pages",nextPages:"Next {pager} pages",deprecationWarning:"Deprecated usages detected, please refer to the el-pagination documentation for more details"},dialog:{close:"Close this dialog"},drawer:{close:"Close this dialog"},messagebox:{title:"Message",confirm:"OK",cancel:"Cancel",error:"Illegal input",close:"Close this dialog"},upload:{deleteTip:"press delete to remove",delete:"Delete",preview:"Preview",continue:"Continue"},slider:{defaultLabel:"slider between {min} and {max}",defaultRangeStartLabel:"pick start value",defaultRangeEndLabel:"pick end value"},table:{emptyText:"No Data",confirmFilter:"Confirm",resetFilter:"Reset",clearFilter:"All",sumText:"Sum"},tour:{next:"Next",previous:"Previous",finish:"Finish"},tree:{emptyText:"No Data"},transfer:{noMatch:"No matching data",noData:"No data",titles:["List 1","List 2"],filterPlaceholder:"Enter keyword",noCheckedFormat:"{total} items",hasCheckedFormat:"{checked}/{total} checked"},image:{error:"FAILED"},pageHeader:{title:"Back"},popconfirm:{confirmButtonText:"Yes",cancelButtonText:"No"},carousel:{leftArrow:"Carousel arrow left",rightArrow:"Carousel arrow right",indicator:"Carousel switch to index {index}"}}};const I=t=>(e,a)=>z(e,a,d(t)),z=(t,e,a)=>P(a,t,t).replace(/\{(\w+)\}/g,(o,r)=>{var n;return`${(n=e==null?void 0:e[r])!=null?n:`{${r}}`}`}),C=t=>{const e=s(()=>d(t).name),a=b(t)?t:c(t);return{lang:e,locale:a,t:I(t)}},L=Symbol("localeContextKey"),R=t=>{const e=t||l(L,c());return C(s(()=>e.value||F))},f=t=>{const e=y();return s(()=>{var a,o;return(o=(a=e==null?void 0:e.proxy)==null?void 0:a.$props)==null?void 0:o[t]})},_=N({type:String,values:x,required:!1}),M=Symbol("size"),E=()=>{const t=l(M,{});return s(()=>d(t.size)||"")},j=(t,e={})=>{const a=c(void 0),o=e.prop?a:f("size"),r=e.global?a:E(),n=e.form?{size:void 0}:l(p,void 0),i=e.formItem?{size:void 0}:l(g,void 0);return s(()=>o.value||d(t)||(i==null?void 0:i.size)||(n==null?void 0:n.size)||r.value||"")},O=t=>{const e=f("disabled"),a=l(p,void 0);return s(()=>e.value||d(t)||(a==null?void 0:a.disabled)||!1)},Y=()=>{const t=l(p,void 0),e=l(g,void 0);return{form:t,formItem:e}},B=(t,{formItemContext:e,disableIdGeneration:a,disableIdManagement:o})=>{a||(a=c(!1)),o||(o=c(!1));const r=c();let n;const i=s(()=>{var u;return!!(!(t.label||t.ariaLabel)&&e&&e.inputIds&&((u=e.inputIds)==null?void 0:u.length)<=1)});return w(()=>{n=h([S(t,"id"),a],([u,v])=>{const m=u??(v?void 0:k().value);m!==r.value&&(e!=null&&e.removeInputId&&(r.value&&e.removeInputId(r.value),!(o!=null&&o.value)&&!v&&m&&e.addInputId(m)),r.value=m)},{immediate:!0})}),T(()=>{n&&n(),e!=null&&e.removeInputId&&r.value&&e.removeInputId(r.value)}),{isLabeledByFormItem:i,inputId:r}};export{Y as a,j as b,O as c,_ as d,R as e,B as f,J as u};
