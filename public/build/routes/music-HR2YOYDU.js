import{a as U,b as Re}from"/build/_shared/chunk-WSR6GMUN.js";import{a as mt}from"/build/_shared/chunk-4ROZ6T4S.js";import{a as X}from"/build/_shared/chunk-W72IG37K.js";import{a as J,b as ae,c as ne,d as re,e as se,g as ie,h as ce,i as de,j as Pe,k as ue,l as me,m as le,n as pe,o as be,p as fe}from"/build/_shared/chunk-UC2K6RWA.js";import{d as ye}from"/build/_shared/chunk-MWTMT4VF.js";import{a as Ce,b as dt,c as ut}from"/build/_shared/chunk-EREOA2DW.js";import{a as bt,b as ft,c as Mt,d as xt,e as gt,f as $t,g as vt}from"/build/_shared/chunk-ZR36JDTU.js";import{s as oe}from"/build/_shared/chunk-RGSKDG4M.js";import"/build/_shared/chunk-VR2YOW42.js";import"/build/_shared/chunk-7DMFJOR6.js";import{a as st,b as ct}from"/build/_shared/chunk-74C3M246.js";import{a as pt}from"/build/_shared/chunk-7PGZUH7X.js";import{a as Z}from"/build/_shared/chunk-CGGUTKH3.js";import{a as lt}from"/build/_shared/chunk-XPV7H5DZ.js";import{e as Q,h as ee,j as te}from"/build/_shared/chunk-OVJ52WF4.js";import{c as j}from"/build/_shared/chunk-6TFJZL66.js";import{a as I,c as Y,e as it,f as H}from"/build/_shared/chunk-JF66XJWX.js";import{a as m,c as rt,f as F,j as x}from"/build/_shared/chunk-ZWSXUEUM.js";import"/build/_shared/chunk-UEGOBHZ5.js";import{d as N,f as q,g as T}from"/build/_shared/chunk-C46C5URB.js";var B=N(q(),1);var i=N(q(),1);var ht="ContextMenu",[ao,la]=Y(ht,[J]),L=J(),[no,Ct]=ao(ht),ro=e=>{let{__scopeContextMenu:a,children:o,onOpenChange:n,dir:r,modal:b=!0}=e,[f,l]=(0,i.useState)(!1),u=L(a),P=it(n),p=(0,i.useCallback)(S=>{l(S),P(S)},[P]);return(0,i.createElement)(no,{scope:a,open:f,onOpenChange:p,modal:b},(0,i.createElement)(ae,m({},u,{dir:r,open:f,onOpenChange:p,modal:b}),o))},so="ContextMenuTrigger",io=(0,i.forwardRef)((e,a)=>{let{__scopeContextMenu:o,disabled:n=!1,...r}=e,b=Ct(so,o),f=L(o),l=(0,i.useRef)({x:0,y:0}),u=(0,i.useRef)({getBoundingClientRect:()=>DOMRect.fromRect({width:0,height:0,...l.current})}),P=(0,i.useRef)(0),p=(0,i.useCallback)(()=>window.clearTimeout(P.current),[]),S=$=>{l.current={x:$.clientX,y:$.clientY},b.onOpenChange(!0)};return(0,i.useEffect)(()=>p,[p]),(0,i.useEffect)(()=>void(n&&p()),[n,p]),(0,i.createElement)(i.Fragment,null,(0,i.createElement)(ne,m({},f,{virtualRef:u})),(0,i.createElement)(F.span,m({"data-state":b.open?"open":"closed","data-disabled":n?"":void 0},r,{ref:a,style:{WebkitTouchCallout:"none",...e.style},onContextMenu:n?e.onContextMenu:I(e.onContextMenu,$=>{p(),S($),$.preventDefault()}),onPointerDown:n?e.onPointerDown:I(e.onPointerDown,Me($=>{p(),P.current=window.setTimeout(()=>S($),700)})),onPointerMove:n?e.onPointerMove:I(e.onPointerMove,Me(p)),onPointerCancel:n?e.onPointerCancel:I(e.onPointerCancel,Me(p)),onPointerUp:n?e.onPointerUp:I(e.onPointerUp,Me(p))})))});var co=e=>{let{__scopeContextMenu:a,...o}=e,n=L(a);return(0,i.createElement)(re,m({},n,o))},uo="ContextMenuContent",mo=(0,i.forwardRef)((e,a)=>{let{__scopeContextMenu:o,...n}=e,r=Ct(uo,o),b=L(o),f=(0,i.useRef)(!1);return(0,i.createElement)(se,m({},b,n,{ref:a,side:"right",sideOffset:2,align:"start",onCloseAutoFocus:l=>{var u;(u=e.onCloseAutoFocus)===null||u===void 0||u.call(e,l),!l.defaultPrevented&&f.current&&l.preventDefault(),f.current=!1},onInteractOutside:l=>{var u;(u=e.onInteractOutside)===null||u===void 0||u.call(e,l),!l.defaultPrevented&&!r.modal&&(f.current=!0)},style:{...e.style,"--radix-context-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-context-menu-content-available-width":"var(--radix-popper-available-width)","--radix-context-menu-content-available-height":"var(--radix-popper-available-height)","--radix-context-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-context-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))});var lo=(0,i.forwardRef)((e,a)=>{let{__scopeContextMenu:o,...n}=e,r=L(o);return(0,i.createElement)(ie,m({},r,n,{ref:a}))});var po=(0,i.forwardRef)((e,a)=>{let{__scopeContextMenu:o,...n}=e,r=L(o);return(0,i.createElement)(ce,m({},r,n,{ref:a}))});var bo=(0,i.forwardRef)((e,a)=>{let{__scopeContextMenu:o,...n}=e,r=L(o);return(0,i.createElement)(de,m({},r,n,{ref:a}))});var fo=(0,i.forwardRef)((e,a)=>{let{__scopeContextMenu:o,...n}=e,r=L(o);return(0,i.createElement)(ue,m({},r,n,{ref:a}))});var Mo=(0,i.forwardRef)((e,a)=>{let{__scopeContextMenu:o,...n}=e,r=L(o);return(0,i.createElement)(me,m({},r,n,{ref:a}))});var xo=(0,i.forwardRef)((e,a)=>{let{__scopeContextMenu:o,...n}=e,r=L(o);return(0,i.createElement)(le,m({},r,n,{ref:a}))});var go=e=>{let{__scopeContextMenu:a,children:o,onOpenChange:n,open:r,defaultOpen:b}=e,f=L(a),[l,u]=H({prop:r,defaultProp:b,onChange:n});return(0,i.createElement)(pe,m({},f,{open:l,onOpenChange:u}),o)};var $o=(0,i.forwardRef)((e,a)=>{let{__scopeContextMenu:o,...n}=e,r=L(o);return(0,i.createElement)(be,m({},r,n,{ref:a}))});var vo=(0,i.forwardRef)((e,a)=>{let{__scopeContextMenu:o,...n}=e,r=L(o);return(0,i.createElement)(fe,m({},r,n,{ref:a,style:{...e.style,"--radix-context-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-context-menu-content-available-width":"var(--radix-popper-available-width)","--radix-context-menu-content-available-height":"var(--radix-popper-available-height)","--radix-context-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-context-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))});function Me(e){return a=>a.pointerType!=="mouse"?e(a):void 0}var yt=ro,Pt=io,Rt=co,Ne=mo;var we=lo,Se=po,Ie=bo;var Te=fo,_e=Mo,Ae=xo;var Nt=go,Le=$o,ke=vo;var y=N(T(),1),wt=yt,St=Pt;var It=Nt;var Ee=B.forwardRef(({className:e,inset:a,children:o,...n},r)=>(0,y.jsxs)(Le,{ref:r,className:x("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",a&&"pl-8",e),...n,children:[o,(0,y.jsx)(ee,{className:"ml-auto h-4 w-4"})]}));Ee.displayName=Le.displayName;var Oe=B.forwardRef(({className:e,...a},o)=>(0,y.jsx)(ke,{ref:o,className:x("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...a}));Oe.displayName=ke.displayName;var je=B.forwardRef(({className:e,...a},o)=>(0,y.jsx)(Rt,{children:(0,y.jsx)(Ne,{ref:o,className:x("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...a})}));je.displayName=Ne.displayName;var O=B.forwardRef(({className:e,inset:a,...o},n)=>(0,y.jsx)(Se,{ref:n,className:x("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a&&"pl-8",e),...o}));O.displayName=Se.displayName;var Co=B.forwardRef(({className:e,children:a,checked:o,...n},r)=>(0,y.jsxs)(Ie,{ref:r,className:x("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),checked:o,...n,children:[(0,y.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,y.jsx)(_e,{children:(0,y.jsx)(Q,{className:"h-4 w-4"})})}),a]}));Co.displayName=Ie.displayName;var yo=B.forwardRef(({className:e,children:a,...o},n)=>(0,y.jsxs)(Te,{ref:n,className:x("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...o,children:[(0,y.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,y.jsx)(_e,{children:(0,y.jsx)(te,{className:"h-2 w-2 fill-current"})})}),a]}));yo.displayName=Te.displayName;var Po=B.forwardRef(({className:e,inset:a,...o},n)=>(0,y.jsx)(we,{ref:n,className:x("px-2 py-1.5 text-sm font-semibold text-foreground",a&&"pl-8",e),...o}));Po.displayName=we.displayName;var K=B.forwardRef(({className:e,...a},o)=>(0,y.jsx)(Ae,{ref:o,className:x("-mx-1 my-1 h-px bg-border",e),...a}));K.displayName=Ae.displayName;var Ro=({className:e,...a})=>(0,y.jsx)("span",{className:x("ml-auto text-xs tracking-widest text-muted-foreground",e),...a});Ro.displayName="ContextMenuShortcut";var xe=["Recently Added","Recently Played","Top Songs","Top Albums","Top Artists","Logic Discography","Bedtime Beats","Feeling Happy","I miss Y2K Pop","Runtober","Mellow Days","Eminem Essentials"];var M=N(T(),1);function Be({album:e,aspectRatio:a="portrait",width:o,height:n,className:r,...b}){return(0,M.jsxs)("div",{className:x("space-y-3",r),...b,children:[(0,M.jsxs)(wt,{children:[(0,M.jsx)(St,{children:(0,M.jsx)("div",{className:"overflow-hidden rounded-md",children:(0,M.jsx)("img",{src:e.cover,alt:e.name,width:o,height:n,className:x("h-auto w-auto object-cover transition-all hover:scale-105",a==="portrait"?"aspect-[3/4]":"aspect-square")})})}),(0,M.jsxs)(je,{className:"w-40",children:[(0,M.jsx)(O,{children:"Add to Library"}),(0,M.jsxs)(It,{children:[(0,M.jsx)(Ee,{children:"Add to Playlist"}),(0,M.jsxs)(Oe,{className:"w-48",children:[(0,M.jsxs)(O,{children:[(0,M.jsx)(oe,{className:"mr-2 h-4 w-4"}),"New Playlist"]}),(0,M.jsx)(K,{}),xe.map(f=>(0,M.jsxs)(O,{children:[(0,M.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:"mr-2 h-4 w-4",viewBox:"0 0 24 24",children:(0,M.jsx)("path",{d:"M21 15V6M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM12 12H3M16 6H3M12 18H3"})}),f]},f))]})]}),(0,M.jsx)(K,{}),(0,M.jsx)(O,{children:"Play Next"}),(0,M.jsx)(O,{children:"Play Later"}),(0,M.jsx)(O,{children:"Create Station"}),(0,M.jsx)(K,{}),(0,M.jsx)(O,{children:"Like"}),(0,M.jsx)(O,{children:"Share"})]})]}),(0,M.jsxs)("div",{className:"space-y-1 text-sm",children:[(0,M.jsx)("h3",{className:"font-medium leading-none",children:e.name}),(0,M.jsx)("p",{className:"text-xs text-muted-foreground",children:e.artist})]})]})}var E=N(q(),1);var s=N(q(),1);var Ge="Menubar",[De,No,wo]=st(Ge),[At,Ea]=Y(Ge,[wo,Ce]),_=J(),Lt=Ce(),[So,ze]=At(Ge),Io=(0,s.forwardRef)((e,a)=>{let{__scopeMenubar:o,value:n,onValueChange:r,defaultValue:b,loop:f=!0,dir:l,...u}=e,P=ct(l),p=Lt(o),[S="",$]=H({prop:n,onChange:r,defaultProp:b}),[k,R]=(0,s.useState)(null);return(0,s.createElement)(So,{scope:o,value:S,onMenuOpen:(0,s.useCallback)(A=>{$(A),R(A)},[$]),onMenuClose:(0,s.useCallback)(()=>$(""),[$]),onMenuToggle:(0,s.useCallback)(A=>{$(ot=>Boolean(ot)?"":A),R(A)},[$]),dir:P,loop:f},(0,s.createElement)(De.Provider,{scope:o},(0,s.createElement)(De.Slot,{scope:o},(0,s.createElement)(dt,m({asChild:!0},p,{orientation:"horizontal",loop:f,dir:P,currentTabStopId:k,onCurrentTabStopIdChange:R}),(0,s.createElement)(F.div,m({role:"menubar"},u,{ref:a}))))))}),kt="MenubarMenu",[To,Et]=At(kt),_o=e=>{let{__scopeMenubar:a,value:o,...n}=e,r=Z(),b=o||r||"LEGACY_REACT_AUTO_VALUE",f=ze(kt,a),l=_(a),u=(0,s.useRef)(null),P=(0,s.useRef)(!1),p=f.value===b;return(0,s.useEffect)(()=>{p||(P.current=!1)},[p]),(0,s.createElement)(To,{scope:a,value:b,triggerId:Z(),triggerRef:u,contentId:Z(),wasKeyboardTriggerOpenRef:P},(0,s.createElement)(ae,m({},l,{open:p,onOpenChange:S=>{S||f.onMenuClose()},modal:!1,dir:f.dir},n)))},Tt="MenubarTrigger",Ao=(0,s.forwardRef)((e,a)=>{let{__scopeMenubar:o,disabled:n=!1,...r}=e,b=Lt(o),f=_(o),l=ze(Tt,o),u=Et(Tt,o),P=(0,s.useRef)(null),p=rt(a,P,u.triggerRef),[S,$]=(0,s.useState)(!1),k=l.value===u.value;return(0,s.createElement)(De.ItemSlot,{scope:o,value:u.value,disabled:n},(0,s.createElement)(ut,m({asChild:!0},b,{focusable:!n,tabStopId:u.value}),(0,s.createElement)(ne,m({asChild:!0},f),(0,s.createElement)(F.button,m({type:"button",role:"menuitem",id:u.triggerId,"aria-haspopup":"menu","aria-expanded":k,"aria-controls":k?u.contentId:void 0,"data-highlighted":S?"":void 0,"data-state":k?"open":"closed","data-disabled":n?"":void 0,disabled:n},r,{ref:p,onPointerDown:I(e.onPointerDown,R=>{!n&&R.button===0&&R.ctrlKey===!1&&(l.onMenuOpen(u.value),k||R.preventDefault())}),onPointerEnter:I(e.onPointerEnter,()=>{if(Boolean(l.value)&&!k){var A;l.onMenuOpen(u.value),(A=P.current)===null||A===void 0||A.focus()}}),onKeyDown:I(e.onKeyDown,R=>{n||(["Enter"," "].includes(R.key)&&l.onMenuToggle(u.value),R.key==="ArrowDown"&&l.onMenuOpen(u.value),["Enter"," ","ArrowDown"].includes(R.key)&&(u.wasKeyboardTriggerOpenRef.current=!0,R.preventDefault()))}),onFocus:I(e.onFocus,()=>$(!0)),onBlur:I(e.onBlur,()=>$(!1))})))))});var Lo=e=>{let{__scopeMenubar:a,...o}=e,n=_(a);return(0,s.createElement)(re,m({},n,o))},_t="MenubarContent",ko=(0,s.forwardRef)((e,a)=>{let{__scopeMenubar:o,align:n="start",...r}=e,b=_(o),f=ze(_t,o),l=Et(_t,o),u=No(o),P=(0,s.useRef)(!1);return(0,s.createElement)(se,m({id:l.contentId,"aria-labelledby":l.triggerId,"data-radix-menubar-content":""},b,r,{ref:a,align:n,onCloseAutoFocus:I(e.onCloseAutoFocus,p=>{if(!Boolean(f.value)&&!P.current){var $;($=l.triggerRef.current)===null||$===void 0||$.focus()}P.current=!1,p.preventDefault()}),onFocusOutside:I(e.onFocusOutside,p=>{let S=p.target;u().some(k=>{var R;return(R=k.ref.current)===null||R===void 0?void 0:R.contains(S)})&&p.preventDefault()}),onInteractOutside:I(e.onInteractOutside,()=>{P.current=!0}),onEntryFocus:p=>{l.wasKeyboardTriggerOpenRef.current||p.preventDefault()},onKeyDown:I(e.onKeyDown,p=>{if(["ArrowRight","ArrowLeft"].includes(p.key)){let S=p.target,$=S.hasAttribute("data-radix-menubar-subtrigger"),k=S.closest("[data-radix-menubar-content]")!==p.currentTarget,A=(f.dir==="rtl"?"ArrowRight":"ArrowLeft")===p.key;if(!A&&$||k&&A)return;let z=u().filter(he=>!he.disabled).map(he=>he.value);A&&z.reverse();let at=z.indexOf(l.value);z=f.loop?Jo(z,at+1):z.slice(at+1);let[nt]=z;nt&&f.onMenuOpen(nt)}},{checkForDefaultPrevented:!1}),style:{...e.style,"--radix-menubar-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-menubar-content-available-width":"var(--radix-popper-available-width)","--radix-menubar-content-available-height":"var(--radix-popper-available-height)","--radix-menubar-trigger-width":"var(--radix-popper-anchor-width)","--radix-menubar-trigger-height":"var(--radix-popper-anchor-height)"}}))});var Eo=(0,s.forwardRef)((e,a)=>{let{__scopeMenubar:o,...n}=e,r=_(o);return(0,s.createElement)(ie,m({},r,n,{ref:a}))});var Oo=(0,s.forwardRef)((e,a)=>{let{__scopeMenubar:o,...n}=e,r=_(o);return(0,s.createElement)(ce,m({},r,n,{ref:a}))});var jo=(0,s.forwardRef)((e,a)=>{let{__scopeMenubar:o,...n}=e,r=_(o);return(0,s.createElement)(de,m({},r,n,{ref:a}))});var Bo=(0,s.forwardRef)((e,a)=>{let{__scopeMenubar:o,...n}=e,r=_(o);return(0,s.createElement)(Pe,m({},r,n,{ref:a}))});var Do=(0,s.forwardRef)((e,a)=>{let{__scopeMenubar:o,...n}=e,r=_(o);return(0,s.createElement)(ue,m({},r,n,{ref:a}))});var Go=(0,s.forwardRef)((e,a)=>{let{__scopeMenubar:o,...n}=e,r=_(o);return(0,s.createElement)(me,m({},r,n,{ref:a}))});var zo=(0,s.forwardRef)((e,a)=>{let{__scopeMenubar:o,...n}=e,r=_(o);return(0,s.createElement)(le,m({},r,n,{ref:a}))});var Wo=e=>{let{__scopeMenubar:a,children:o,open:n,onOpenChange:r,defaultOpen:b}=e,f=_(a),[l=!1,u]=H({prop:n,defaultProp:b,onChange:r});return(0,s.createElement)(pe,m({},f,{open:l,onOpenChange:u}),o)};var Fo=(0,s.forwardRef)((e,a)=>{let{__scopeMenubar:o,...n}=e,r=_(o);return(0,s.createElement)(be,m({"data-radix-menubar-subtrigger":""},r,n,{ref:a}))});var Ho=(0,s.forwardRef)((e,a)=>{let{__scopeMenubar:o,...n}=e,r=_(o);return(0,s.createElement)(fe,m({},r,{"data-radix-menubar-content":""},n,{ref:a,style:{...e.style,"--radix-menubar-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-menubar-content-available-width":"var(--radix-popper-available-width)","--radix-menubar-content-available-height":"var(--radix-popper-available-height)","--radix-menubar-trigger-width":"var(--radix-popper-anchor-width)","--radix-menubar-trigger-height":"var(--radix-popper-anchor-height)"}}))});function Jo(e,a){return e.map((o,n)=>e[(a+n)%e.length])}var We=Io,Ot=_o,Fe=Ao,jt=Lo,He=ko;var Je=Eo,Ue=Oo,Ke=jo,Bt=Bo,Ve=Do,qe=Go,Ye=zo;var Dt=Wo,Ze=Fo,Xe=Ho;var C=N(T(),1),W=Ot;var Qe=Dt,Gt=Bt,et=E.forwardRef(({className:e,...a},o)=>(0,C.jsx)(We,{ref:o,className:x("flex h-10 items-center space-x-1 rounded-md border bg-background p-1",e),...a}));et.displayName=We.displayName;var D=E.forwardRef(({className:e,...a},o)=>(0,C.jsx)(Fe,{ref:o,className:x("flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",e),...a}));D.displayName=Fe.displayName;var ge=E.forwardRef(({className:e,inset:a,children:o,...n},r)=>(0,C.jsxs)(Ze,{ref:r,className:x("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",a&&"pl-8",e),...n,children:[o,(0,C.jsx)(ee,{className:"ml-auto h-4 w-4"})]}));ge.displayName=Ze.displayName;var $e=E.forwardRef(({className:e,...a},o)=>(0,C.jsx)(Xe,{ref:o,className:x("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...a}));$e.displayName=Xe.displayName;var G=E.forwardRef(({className:e,align:a="start",alignOffset:o=-4,sideOffset:n=8,...r},b)=>(0,C.jsx)(jt,{children:(0,C.jsx)(He,{ref:b,align:a,alignOffset:o,sideOffset:n,className:x("z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...r})}));G.displayName=He.displayName;var c=E.forwardRef(({className:e,inset:a,...o},n)=>(0,C.jsx)(Ue,{ref:n,className:x("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a&&"pl-8",e),...o}));c.displayName=Ue.displayName;var ve=E.forwardRef(({className:e,children:a,checked:o,...n},r)=>(0,C.jsxs)(Ke,{ref:r,className:x("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),checked:o,...n,children:[(0,C.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,C.jsx)(qe,{children:(0,C.jsx)(Q,{className:"h-4 w-4"})})}),a]}));ve.displayName=Ke.displayName;var V=E.forwardRef(({className:e,children:a,...o},n)=>(0,C.jsxs)(Ve,{ref:n,className:x("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...o,children:[(0,C.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,C.jsx)(qe,{children:(0,C.jsx)(te,{className:"h-2 w-2 fill-current"})})}),a]}));V.displayName=Ve.displayName;var tt=E.forwardRef(({className:e,inset:a,...o},n)=>(0,C.jsx)(Je,{ref:n,className:x("px-2 py-1.5 text-sm font-semibold",a&&"pl-8",e),...o}));tt.displayName=Je.displayName;var w=E.forwardRef(({className:e,...a},o)=>(0,C.jsx)(Ye,{ref:o,className:x("-mx-1 my-1 h-px bg-muted",e),...a}));w.displayName=Ye.displayName;var v=({className:e,...a})=>(0,C.jsx)("span",{className:x("ml-auto text-xs tracking-widest text-muted-foreground",e),...a});v.displayname="MenubarShortcut";var t=N(T(),1);function zt(){return(0,t.jsxs)(et,{className:"rounded-none border-b border-none px-2 lg:px-4",children:[(0,t.jsxs)(W,{children:[(0,t.jsx)(D,{className:"font-bold",children:"Music"}),(0,t.jsxs)(G,{children:[(0,t.jsx)(c,{children:"About Music"}),(0,t.jsx)(w,{}),(0,t.jsxs)(c,{children:["Preferences... ",(0,t.jsx)(v,{children:"\u2318,"})]}),(0,t.jsx)(w,{}),(0,t.jsxs)(c,{children:["Hide Music... ",(0,t.jsx)(v,{children:"\u2318H"})]}),(0,t.jsxs)(c,{children:["Hide Others... ",(0,t.jsx)(v,{children:"\u21E7\u2318H"})]}),(0,t.jsx)(v,{}),(0,t.jsxs)(c,{children:["Quit Music ",(0,t.jsx)(v,{children:"\u2318Q"})]})]})]}),(0,t.jsxs)(W,{children:[(0,t.jsx)(D,{className:"relative",children:"File"}),(0,t.jsxs)(G,{children:[(0,t.jsxs)(Qe,{children:[(0,t.jsx)(ge,{children:"New"}),(0,t.jsxs)($e,{className:"w-[230px]",children:[(0,t.jsxs)(c,{children:["Playlist ",(0,t.jsx)(v,{children:"\u2318N"})]}),(0,t.jsxs)(c,{disabled:!0,children:["Playlist from Selection ",(0,t.jsx)(v,{children:"\u21E7\u2318N"})]}),(0,t.jsxs)(c,{children:["Smart Playlist... ",(0,t.jsx)(v,{children:"\u2325\u2318N"})]}),(0,t.jsx)(c,{children:"Playlist Folder"}),(0,t.jsx)(c,{disabled:!0,children:"Genius Playlist"})]})]}),(0,t.jsxs)(c,{children:["Open Stream URL... ",(0,t.jsx)(v,{children:"\u2318U"})]}),(0,t.jsxs)(c,{children:["Close Window ",(0,t.jsx)(v,{children:"\u2318W"})]}),(0,t.jsx)(w,{}),(0,t.jsxs)(Qe,{children:[(0,t.jsx)(ge,{children:"Library"}),(0,t.jsxs)($e,{children:[(0,t.jsx)(c,{children:"Update Cloud Library"}),(0,t.jsx)(c,{children:"Update Genius"}),(0,t.jsx)(w,{}),(0,t.jsx)(c,{children:"Organize Library..."}),(0,t.jsx)(c,{children:"Export Library..."}),(0,t.jsx)(w,{}),(0,t.jsx)(c,{children:"Import Playlist..."}),(0,t.jsx)(c,{disabled:!0,children:"Export Playlist..."}),(0,t.jsx)(c,{children:"Show Duplicate Items"}),(0,t.jsx)(w,{}),(0,t.jsx)(c,{children:"Get Album Artwork"}),(0,t.jsx)(c,{disabled:!0,children:"Get Track Names"})]})]}),(0,t.jsxs)(c,{children:["Import... ",(0,t.jsx)(v,{children:"\u2318O"})]}),(0,t.jsx)(c,{disabled:!0,children:"Burn Playlist to Disc..."}),(0,t.jsx)(w,{}),(0,t.jsxs)(c,{children:["Show in Finder ",(0,t.jsx)(v,{children:"\u21E7\u2318R"})," "]}),(0,t.jsx)(c,{children:"Convert"}),(0,t.jsx)(w,{}),(0,t.jsx)(c,{children:"Page Setup..."}),(0,t.jsxs)(c,{disabled:!0,children:["Print... ",(0,t.jsx)(v,{children:"\u2318P"})]})]})]}),(0,t.jsxs)(W,{children:[(0,t.jsx)(D,{children:"Edit"}),(0,t.jsxs)(G,{children:[(0,t.jsxs)(c,{disabled:!0,children:["Undo ",(0,t.jsx)(v,{children:"\u2318Z"})]}),(0,t.jsxs)(c,{disabled:!0,children:["Redo ",(0,t.jsx)(v,{children:"\u21E7\u2318Z"})]}),(0,t.jsx)(w,{}),(0,t.jsxs)(c,{disabled:!0,children:["Cut ",(0,t.jsx)(v,{children:"\u2318X"})]}),(0,t.jsxs)(c,{disabled:!0,children:["Copy ",(0,t.jsx)(v,{children:"\u2318C"})]}),(0,t.jsxs)(c,{disabled:!0,children:["Paste ",(0,t.jsx)(v,{children:"\u2318V"})]}),(0,t.jsx)(w,{}),(0,t.jsxs)(c,{children:["Select All ",(0,t.jsx)(v,{children:"\u2318A"})]}),(0,t.jsxs)(c,{disabled:!0,children:["Deselect All ",(0,t.jsx)(v,{children:"\u21E7\u2318A"})]}),(0,t.jsx)(w,{}),(0,t.jsxs)(c,{children:["Smart Dictation..."," ",(0,t.jsx)(v,{children:(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:"h-4 w-4",viewBox:"0 0 24 24",children:[(0,t.jsx)("path",{d:"m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"}),(0,t.jsx)("circle",{cx:"17",cy:"7",r:"5"})]})})]}),(0,t.jsxs)(c,{children:["Emoji & Symbols"," ",(0,t.jsx)(v,{children:(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:"h-4 w-4",viewBox:"0 0 24 24",children:[(0,t.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,t.jsx)("path",{d:"M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]})})]})]})]}),(0,t.jsxs)(W,{children:[(0,t.jsx)(D,{children:"View"}),(0,t.jsxs)(G,{children:[(0,t.jsx)(ve,{children:"Show Playing Next"}),(0,t.jsx)(ve,{checked:!0,children:"Show Lyrics"}),(0,t.jsx)(w,{}),(0,t.jsx)(c,{inset:!0,disabled:!0,children:"Show Status Bar"}),(0,t.jsx)(w,{}),(0,t.jsx)(c,{inset:!0,children:"Hide Sidebar"}),(0,t.jsx)(c,{disabled:!0,inset:!0,children:"Enter Full Screen"})]})]}),(0,t.jsxs)(W,{children:[(0,t.jsx)(D,{className:"hidden md:block",children:"Account"}),(0,t.jsxs)(G,{forceMount:!0,children:[(0,t.jsx)(tt,{inset:!0,children:"Switch Account"}),(0,t.jsx)(w,{}),(0,t.jsxs)(Gt,{value:"benoit",children:[(0,t.jsx)(V,{value:"andy",children:"Andy"}),(0,t.jsx)(V,{value:"benoit",children:"Benoit"}),(0,t.jsx)(V,{value:"Luis",children:"Luis"})]}),(0,t.jsx)(w,{}),(0,t.jsx)(c,{inset:!0,children:"Manage Family..."}),(0,t.jsx)(w,{}),(0,t.jsx)(c,{inset:!0,children:"Add Account..."})]})]})]})}var h=N(T(),1);function Wt(){return(0,h.jsx)("div",{className:"flex h-[450px] shrink-0 items-center justify-center rounded-md border border-dashed",children:(0,h.jsxs)("div",{className:"mx-auto flex max-w-[420px] flex-col items-center justify-center text-center",children:[(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:"h-10 w-10 text-muted-foreground",viewBox:"0 0 24 24",children:[(0,h.jsx)("circle",{cx:"12",cy:"11",r:"1"}),(0,h.jsx)("path",{d:"M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5ZM8 14a5 5 0 1 1 8 0"}),(0,h.jsx)("path",{d:"M17 18.5a9 9 0 1 0-10 0"})]}),(0,h.jsx)("h3",{className:"mt-4 text-lg font-semibold",children:"No episodes added"}),(0,h.jsx)("p",{className:"mb-4 mt-2 text-sm text-muted-foreground",children:"You have not added any podcasts. Add one below."}),(0,h.jsxs)(bt,{children:[(0,h.jsx)(ft,{asChild:!0,children:(0,h.jsx)(j,{size:"sm",className:"relative",children:"Add Podcast"})}),(0,h.jsxs)(Mt,{children:[(0,h.jsxs)(xt,{children:[(0,h.jsx)($t,{children:"Add Podcast"}),(0,h.jsx)(vt,{children:"Copy and paste the podcast feed URL to import."})]}),(0,h.jsx)("div",{className:"grid gap-4 py-4",children:(0,h.jsxs)("div",{className:"grid gap-2",children:[(0,h.jsx)(lt,{htmlFor:"url",children:"Podcast URL"}),(0,h.jsx)(pt,{id:"url",placeholder:"https://example.com/feed.xml"})]})}),(0,h.jsx)(gt,{children:(0,h.jsx)(j,{children:"Import Podcast"})})]})]})]})})}var g=N(T(),1);function Ft({className:e,playlists:a,discoverItems:o,libraryItems:n}){return(0,g.jsx)("div",{className:x("pb-12",e),children:(0,g.jsxs)("div",{className:"space-y-4 py-4",children:[(0,g.jsxs)("div",{className:"px-3 py-2",children:[(0,g.jsx)("h2",{className:"mb-2 px-4 text-lg font-semibold tracking-tight",children:"Discover"}),(0,g.jsx)("div",{className:"space-y-1",children:o.map((r,b)=>(0,g.jsxs)(j,{variant:b===0?"secondary":"ghost",className:"w-full justify-start",children:[(0,g.jsx)("img",{src:r.icon,width:16,alt:"",className:"mr-2 h-4 w-4"}),r.title]},`${r}-${b}`))})]}),(0,g.jsxs)("div",{className:"px-3 py-2",children:[(0,g.jsx)("h2",{className:"mb-2 px-4 text-lg font-semibold tracking-tight",children:"Library"}),(0,g.jsx)("div",{className:"space-y-1",children:n.map((r,b)=>(0,g.jsxs)(j,{variant:"ghost",className:"w-full justify-start",children:[(0,g.jsx)("img",{src:r.icon,width:16,alt:"",className:"mr-2 h-4 w-4"}),r.title]},`${r}-${b}`))})]}),(0,g.jsxs)("div",{className:"py-2",children:[(0,g.jsx)("h2",{className:"relative px-7 text-lg font-semibold tracking-tight",children:"Playlists"}),(0,g.jsx)(U,{className:"h-[300px] px-1",children:(0,g.jsx)("div",{className:"space-y-1 p-2",children:a?.map((r,b)=>(0,g.jsxs)(j,{variant:"ghost",className:"w-full justify-start font-normal",children:[(0,g.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"mr-2 h-4 w-4",children:[(0,g.jsx)("path",{d:"M21 15V6"}),(0,g.jsx)("path",{d:"M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"}),(0,g.jsx)("path",{d:"M12 12H3"}),(0,g.jsx)("path",{d:"M16 6H3"}),(0,g.jsx)("path",{d:"M12 18H3"})]}),r]},`${r}-${b}`))})})]})]})})}var Ht=[{name:"React Rendezvous",artist:"Ethan Byte",cover:"https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80"},{name:"Async Awakenings",artist:"Nina Netcode",cover:"https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80"},{name:"The Art of Reusability",artist:"Lena Logic",cover:"https://images.unsplash.com/photo-1528143358888-6d3c7f67bd5d?w=300&dpr=2&q=80"},{name:"Stateful Symphony",artist:"Beth Binary",cover:"https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80"}],Jt=[{name:"Thinking Components",artist:"Lena Logic",cover:"https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80"},{name:"Functional Fury",artist:"Beth Binary",cover:"https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80"},{name:"React Rendezvous",artist:"Ethan Byte",cover:"https://images.unsplash.com/photo-1614113489855-66422ad300a4?w=300&dpr=2&q=80"},{name:"Stateful Symphony",artist:"Beth Binary",cover:"https://images.unsplash.com/photo-1446185250204-f94591f7d702?w=300&dpr=2&q=80"},{name:"Async Awakenings",artist:"Nina Netcode",cover:"https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80"},{name:"The Art of Reusability",artist:"Lena Logic",cover:"https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80"}];var Ut="/build/_assets/discover_1-M5LBYGF6.svg";var Kt="/build/_assets/discover_2-FGHKIEPJ.svg";var Vt="/build/_assets/discover_3-N2VKD6QN.svg";var qt="/build/_assets/library_1-SQ3UZDZP.svg";var Yt="/build/_assets/library_2-22JZB7KN.svg";var Zt="/build/_assets/library_3-TXME7N3Y.svg";var Xt="/build/_assets/library_4-6SINYWAE.svg";var Qt="/build/_assets/library_5-5ETGMPEC.svg";var d=N(T(),1);var ta=[{title:"Listen Now",icon:Ut},{title:"Browse",icon:Kt},{title:"Radio",icon:Vt}],oa=[{title:"Playlists",icon:qt},{title:"Songs",icon:Yt},{title:"Made for you",icon:Zt},{title:"Artists",icon:Xt},{title:"Albums",icon:Qt}],aa=[{title:"Music",value:"music",disabled:!1},{title:"Podcasts",value:"podcasts",disabled:!1},{title:"Live",value:"live",disabled:!0}];function eo(){return(0,d.jsxs)("div",{className:"hidden md:block",children:[(0,d.jsx)(zt,{}),(0,d.jsx)("div",{className:"border-t",children:(0,d.jsx)("div",{className:"bg-background",children:(0,d.jsxs)("div",{className:"grid lg:grid-cols-5",children:[(0,d.jsx)(Ft,{playlists:xe,discoverItems:ta,libraryItems:oa,className:"hidden lg:block"}),(0,d.jsx)("div",{className:"col-span-3 lg:col-span-4 lg:border-l",children:(0,d.jsx)("div",{className:"h-full px-4 py-6 lg:px-8",children:(0,d.jsxs)(mt,{items:aa,defaultValue:"music",tabAction:(0,d.jsx)("div",{className:"ml-auto mr-4",children:(0,d.jsxs)(j,{children:[(0,d.jsx)(oe,{className:"mr-2 h-4 w-4"}),"Add music"]})}),tabClassName:"space-between flex items-center",children:[(0,d.jsxs)(ye,{value:"music",className:"border-none p-0 outline-none",children:[(0,d.jsx)("div",{className:"flex items-center justify-between",children:(0,d.jsxs)("div",{className:"space-y-1",children:[(0,d.jsx)("h2",{className:"text-2xl font-semibold tracking-tight",children:"Listen Now"}),(0,d.jsx)("p",{className:"text-sm text-muted-foreground",children:"Top picks for you. Updated daily."})]})}),(0,d.jsx)(X,{className:"my-4"}),(0,d.jsx)("div",{className:"relative",children:(0,d.jsxs)(U,{children:[(0,d.jsx)("div",{className:"flex space-x-4 pb-4",children:Ht.map(e=>(0,d.jsx)(Be,{album:e,className:"w-[250px]",aspectRatio:"portrait",width:250,height:330},e.name))}),(0,d.jsx)(Re,{orientation:"horizontal"})]})}),(0,d.jsxs)("div",{className:"mt-6 space-y-1",children:[(0,d.jsx)("h2",{className:"text-2xl font-semibold tracking-tight",children:"Made for You"}),(0,d.jsx)("p",{className:"text-sm text-muted-foreground",children:"Your personal playlists. Updated daily."})]}),(0,d.jsx)(X,{className:"my-4"}),(0,d.jsx)("div",{className:"relative",children:(0,d.jsxs)(U,{children:[(0,d.jsx)("div",{className:"flex space-x-4 pb-4",children:Jt.map(e=>(0,d.jsx)(Be,{album:e,className:"w-[150px]",aspectRatio:"square",width:150,height:150},e.name))}),(0,d.jsx)(Re,{orientation:"horizontal"})]})})]}),(0,d.jsxs)(ye,{value:"podcasts",className:"h-full flex-col border-none p-0 data-[state=active]:flex",children:[(0,d.jsx)("div",{className:"flex items-center justify-between",children:(0,d.jsxs)("div",{className:"space-y-1",children:[(0,d.jsx)("h2",{className:"text-2xl font-semibold tracking-tight",children:"New Episodes"}),(0,d.jsx)("p",{className:"text-sm text-muted-foreground",children:"Your favorite podcasts. Updated daily."})]})}),(0,d.jsx)(X,{className:"my-4"}),(0,d.jsx)(Wt,{})]})]})})})]})})})]})}export{eo as default};