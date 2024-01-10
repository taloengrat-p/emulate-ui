import{b as C,c as N,d as P,e as u,f as c,g as i,h as p,i as d,j as f,k as S}from"/build/_shared/chunk-DHPNDY6R.js";import{a as g,b as y,d as x}from"/build/_shared/chunk-DIR4EQ5R.js";import{a as F}from"/build/_shared/chunk-W72IG37K.js";import{a as k,b as L,d as T,e as B,g as q}from"/build/_shared/chunk-5DKN5SR5.js";import"/build/_shared/chunk-ZR36JDTU.js";import{l as D,m as V}from"/build/_shared/chunk-ULJO7JFN.js";import{a as v,b,c as h}from"/build/_shared/chunk-G7HKFOW5.js";import{d as I,e as z,f as A}from"/build/_shared/chunk-RGSKDG4M.js";import"/build/_shared/chunk-VR2YOW42.js";import{a as w}from"/build/_shared/chunk-7PGZUH7X.js";import"/build/_shared/chunk-CGGUTKH3.js";import"/build/_shared/chunk-XPV7H5DZ.js";import"/build/_shared/chunk-OVJ52WF4.js";import{c as s}from"/build/_shared/chunk-6TFJZL66.js";import"/build/_shared/chunk-JF66XJWX.js";import{j as n}from"/build/_shared/chunk-ZWSXUEUM.js";import"/build/_shared/chunk-UEGOBHZ5.js";import{d as m,g as l}from"/build/_shared/chunk-C46C5URB.js";var e=m(l(),1),E=[{label:"English",value:"en"},{label:"French",value:"fr"},{label:"German",value:"de"},{label:"Spanish",value:"es"},{label:"Portuguese",value:"pt"},{label:"Russian",value:"ru"},{label:"Japanese",value:"ja"},{label:"Korean",value:"ko"},{label:"Chinese",value:"zh"}],R=x({name:g().min(2,{message:"Name must be at least 2 characters."}).max(30,{message:"Name must not be longer than 30 characters."}),dob:y({required_error:"A date of birth is required."}),language:g({required_error:"Please select a language."})}),U={};function G(){let r=C({resolver:N(R),defaultValues:U});function J(o){S({title:"You submitted the following values:",description:(0,e.jsx)("pre",{className:"mt-2 w-[340px] rounded-md bg-slate-950 p-4",children:(0,e.jsx)("code",{className:"text-white",children:JSON.stringify(o,null,2)})})})}return(0,e.jsx)(P,{...r,children:(0,e.jsxs)("form",{onSubmit:r.handleSubmit(J),className:"space-y-8",children:[(0,e.jsx)(u,{control:r.control,name:"name",render:({field:o})=>(0,e.jsxs)(c,{children:[(0,e.jsx)(i,{children:"Name"}),(0,e.jsx)(p,{children:(0,e.jsx)(w,{placeholder:"Your name",...o})}),(0,e.jsx)(d,{children:"This is the name that will be displayed on your profile and in emails."}),(0,e.jsx)(f,{})]})}),(0,e.jsx)(u,{control:r.control,name:"dob",render:({field:o})=>(0,e.jsxs)(c,{className:"flex flex-col",children:[(0,e.jsx)(i,{children:"Date of birth"}),(0,e.jsxs)(v,{children:[(0,e.jsx)(b,{asChild:!0,children:(0,e.jsx)(p,{children:(0,e.jsxs)(s,{variant:"outline",className:n("w-[240px] pl-3 text-left font-normal",!o.value&&"text-muted-foreground"),children:[o.value?D(o.value,"PPP"):(0,e.jsx)("span",{children:"Pick a date"}),(0,e.jsx)(I,{className:"ml-auto h-4 w-4 opacity-50"})]})})}),(0,e.jsx)(h,{className:"w-auto p-0",align:"start",children:(0,e.jsx)(V,{mode:"single",selected:o.value,onSelect:o.onChange,disabled:a=>a>new Date||a<new Date("1900-01-01"),initialFocus:!0})})]}),(0,e.jsx)(d,{children:"Your date of birth is used to calculate your age."}),(0,e.jsx)(f,{})]})}),(0,e.jsx)(u,{control:r.control,name:"language",render:({field:o})=>(0,e.jsxs)(c,{className:"flex flex-col",children:[(0,e.jsx)(i,{children:"Language"}),(0,e.jsxs)(v,{children:[(0,e.jsx)(b,{asChild:!0,children:(0,e.jsx)(p,{children:(0,e.jsxs)(s,{variant:"outline",role:"combobox",className:n("w-[200px] justify-between",!o.value&&"text-muted-foreground"),children:[o.value?E.find(a=>a.value===o.value)?.label:"Select language",(0,e.jsx)(z,{className:"ml-2 h-4 w-4 shrink-0 opacity-50"})]})})}),(0,e.jsx)(h,{className:"w-[200px] p-0",children:(0,e.jsxs)(k,{children:[(0,e.jsx)(L,{placeholder:"Search language..."}),(0,e.jsx)(T,{children:"No language found."}),(0,e.jsx)(B,{children:E.map(a=>(0,e.jsxs)(q,{value:a.label,onSelect:()=>{r.setValue("language",a.value)},children:[(0,e.jsx)(A,{className:n("mr-2 h-4 w-4",a.value===o.value?"opacity-100":"opacity-0")}),a.label]},a.value))})]})})]}),(0,e.jsx)(d,{children:"This is the language that will be used in the dashboard."}),(0,e.jsx)(f,{})]})}),(0,e.jsx)(s,{type:"submit",children:"Update account"})]})})}var t=m(l(),1);function Y(){return(0,t.jsxs)("div",{className:"space-y-6",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-lg font-medium",children:"Account"}),(0,t.jsx)("p",{className:"text-sm text-muted-foreground",children:"Update your account settings. Set your preferred language and timezone."})]}),(0,t.jsx)(F,{}),(0,t.jsx)(G,{})]})}export{Y as default};