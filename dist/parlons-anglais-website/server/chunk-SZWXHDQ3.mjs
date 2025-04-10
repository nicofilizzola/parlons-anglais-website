import './polyfills.server.mjs';
import{A,B as H2,C as G2,D as G1,E as V1,F as L,G as U1,H as W1,I as o,J as r,K as m,L as j1,M as q1,N as a1,O as j,P as q,Q as a,R as o1,S as V2,T as U2,U as W2,V as x,W as $1,a as w2,b as F1,ba as j2,c as D2,d as T2,da as q2,e as E2,ea as b1,f as k2,fa as $2,g as A2,ga as K2,h as O2,ha as Q2,i as P2,j as g1,k as X,ka as Y2,l as B1,m as R2,n as i1,o as I2,p as y,q as H1,qa as J2,r as z1,s as l1,t as L1,u as M1,v as C1,w as _1,x as F2,y as B2,z}from"./chunk-VUTRA34V.mjs";var X2={animation:!0,transitionTimerDelayMs:5},D3=(()=>{class c{constructor(){this.animation=X2.animation}static{this.\u0275fac=function(n){return new(n||c)}}static{this.\u0275prov=X({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})();function T3(c){let{transitionDelay:e,transitionDuration:t}=window.getComputedStyle(c),n=parseFloat(e),s=parseFloat(t);return(n+s)*1e3}function E3(c){return(c||document.body).getBoundingClientRect()}function k3(c){return e=>new w2(t=>{let n=l=>c.run(()=>t.next(l)),s=l=>c.run(()=>t.error(l)),i=()=>c.run(()=>t.complete());return e.subscribe({next:n,error:s,complete:i})})}var A3=()=>{},{transitionTimerDelayMs:O3}=X2,v1=new Map,P3=(c,e,t,n)=>{let s=n.context||{},i=v1.get(e);if(i)switch(n.runningTransition){case"continue":return D2;case"stop":c.run(()=>i.transition$.complete()),s=Object.assign(i.context,s),v1.delete(e)}let l=t(e,n.animation,s)||A3;if(!n.animation||window.getComputedStyle(e).transitionProperty==="none")return c.run(()=>l()),T2(void 0).pipe(k3(c));let f=new F1,h=new F1,p=f.pipe(P2(!0));v1.set(e,{transition$:f,complete:()=>{h.next(),h.complete()},context:s});let g=T3(e);return c.runOutsideAngular(()=>{let C=E2(e,"transitionend").pipe(g1(p),A2(({target:b})=>b===e)),M=k2(g+O3).pipe(g1(p));O2(M,C,h).pipe(g1(p)).subscribe(()=>{v1.delete(e),c.run(()=>{l(),f.next(),f.complete()})})}),f.asObservable()};function R3(c,e){if(typeof navigator>"u")return"0px";let{classList:t}=c,n=t.contains("show");n||t.add("show"),c.style[e]="";let s=c.getBoundingClientRect()[e]+"px";return n||t.remove("show"),s}var I3=(c,e,t)=>{let{direction:n,maxSize:s,dimension:i}=t,{classList:l}=c;function f(){l.add("collapse"),n==="show"?l.add("show"):l.remove("show")}if(!e){f();return}return s||(s=R3(c,i),t.maxSize=s,c.style[i]=n!=="show"?s:"0px",l.remove("collapse"),l.remove("collapsing"),l.remove("show"),E3(c),l.add("collapsing")),c.style[i]=n==="show"?s:"0px",()=>{f(),l.remove("collapsing"),c.style[i]=""}},F3=(()=>{class c{constructor(){this._ngbConfig=i1(D3),this.horizontal=!1}get animation(){return this._animation??this._ngbConfig.animation}set animation(t){this._animation=t}static{this.\u0275fac=function(n){return new(n||c)}}static{this.\u0275prov=X({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),y1=(()=>{class c{constructor(){this._config=i1(F3),this._element=i1(C1),this._zone=i1(G2),this.animation=this._config.animation,this._afterInit=!1,this._isCollapsed=!1,this.ngbCollapseChange=new _1,this.horizontal=this._config.horizontal,this.shown=new _1,this.hidden=new _1}set collapsed(t){this._isCollapsed!==t&&(this._isCollapsed=t,this._afterInit&&this._runTransitionWithEvents(t,this.animation))}ngOnInit(){this._runTransition(this._isCollapsed,!1),this._afterInit=!0}toggle(t=this._isCollapsed){this.collapsed=!t,this.ngbCollapseChange.next(this._isCollapsed)}_runTransition(t,n){return P3(this._zone,this._element.nativeElement,I3,{animation:n,runningTransition:"stop",context:{direction:t?"hide":"show",dimension:this.horizontal?"width":"height"}})}_runTransitionWithEvents(t,n){this._runTransition(t,n).subscribe(()=>{t?this.hidden.emit():this.shown.emit()})}static{this.\u0275fac=function(n){return new(n||c)}}static{this.\u0275dir=z1({type:c,selectors:[["","ngbCollapse",""]],hostVars:2,hostBindings:function(n,s){n&2&&U1("collapse-horizontal",s.horizontal)},inputs:{animation:"animation",collapsed:[I2.None,"ngbCollapse","collapsed"],horizontal:"horizontal"},outputs:{ngbCollapseChange:"ngbCollapseChange",shown:"shown",hidden:"hidden"},exportAs:["ngbCollapse"],standalone:!0})}}return c})();var b5=(()=>{let c=()=>/iPad|iPhone|iPod/.test(navigator.userAgent)||/Macintosh/.test(navigator.userAgent)&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2,e=()=>/Android/.test(navigator.userAgent);return typeof navigator<"u"?!!navigator.userAgent&&(c()||e()):!1})();var v5=["a[href]","button:not([disabled])",'input:not([disabled]):not([type="hidden"])',"select:not([disabled])","textarea:not([disabled])","[contenteditable]",'[tabindex]:not([tabindex="-1"])'].join(", ");var y5=new Date(1882,10,12),x5=new Date(2174,10,25);var N5=1e3*60*60*24;var K1=1080,B3=24*K1,H3=12*K1+793,S5=29*B3+H3,w5=11*K1+204;var D5=new R2("live announcer delay",{providedIn:"root",factory:()=>100});var Z2=(()=>{class c{constructor(){this.isNavbarCollapsed=!0}static{this.\u0275fac=function(n){return new(n||c)}}static{this.\u0275cmp=y({type:c,selectors:[["app-nav"]],standalone:!0,features:[x],decls:26,vars:1,consts:[[1,"navbar","navbar-expand-md","position-fixed","top-0","z-3","w-100"],[1,"container-fluid"],[1,"navbar-brand"],["src","../assets/img/logo-full.png","alt","Logo de Parlons Anglais !"],["type","button","aria-controls","navbarNav","aria-expanded","!isNavbarCollapsed","aria-label","Toggle navigation",1,"navbar-toggler",3,"click"],[1,"navbar-toggler-icon"],["id","navbarNav",1,"collapse","navbar-collapse",3,"ngbCollapse"],[1,"navbar-nav","ms-auto"],[1,"nav-item"],["aria-current","page","href","#",1,"nav-link","active"],["href","#s3",1,"nav-link"],["href","#s5",1,"nav-link"],["href","#s6",1,"nav-link"],["href","#s7",1,"nav-link"],[1,"nav-item","ms-2"],["href","https://calendly.com/nicolas-filizzola-english/seance-de-decouverte","target","_blank",1,"nav-link","button"]],template:function(n,s){n&1&&(o(0,"nav",0)(1,"div",1)(2,"button",2),m(3,"img",3),r(),o(4,"button",4),a1("click",function(){return s.isNavbarCollapsed=!s.isNavbarCollapsed}),m(5,"span",5),r(),o(6,"div",6)(7,"ul",7)(8,"li",8)(9,"a",9),a(10,"Accueil"),r()(),o(11,"li",8)(12,"a",10),a(13,"P\xE9dagogie"),r()(),o(14,"li",8)(15,"a",11),a(16,"Tarifs"),r()(),o(17,"li",8)(18,"a",12),a(19,"T\xE9moignages"),r()(),o(20,"li",8)(21,"a",13),a(22,"FAQ"),r()(),o(23,"li",14)(24,"a",15),a(25," R\xE9server une s\xE9ance gratuite "),r()()()()()()),n&2&&(z(6),L("ngbCollapse",s.isNavbarCollapsed))},dependencies:[y1],styles:[".color-primary[_ngcontent-%COMP%]{color:#263d9a}.color-secondary[_ngcontent-%COMP%]{color:#ff4d3d}.color-light[_ngcontent-%COMP%]{color:#f5f5f5}.color-dark[_ngcontent-%COMP%]{color:#2e2e2e}nav.navbar[_ngcontent-%COMP%]{background-color:#f5f5f5}nav.navbar[_ngcontent-%COMP%]   button.navbar-brand[_ngcontent-%COMP%]{border:none;background:none;width:200px}nav.navbar[_ngcontent-%COMP%]   button.navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}@media (max-width: 768px){nav.navbar[_ngcontent-%COMP%]   button.navbar-brand[_ngcontent-%COMP%]{width:150px}}nav.navbar[_ngcontent-%COMP%]   a.button[_ngcontent-%COMP%]{border-radius:10px;border:2px solid #ff4d3d;color:#ff4d3d}nav.navbar[_ngcontent-%COMP%]   a.button[_ngcontent-%COMP%]:hover{border-color:#bd1000;color:#bd1000}"]})}}return c})();function G3(c,e,t){return(e=U3(e))in c?Object.defineProperty(c,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):c[e]=t,c}function c0(c,e){var t=Object.keys(c);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(c);e&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(c,s).enumerable})),t.push.apply(t,n)}return t}function d(c){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?c0(Object(t),!0).forEach(function(n){G3(c,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(t)):c0(Object(t)).forEach(function(n){Object.defineProperty(c,n,Object.getOwnPropertyDescriptor(t,n))})}return c}function V3(c,e){if(typeof c!="object"||!c)return c;var t=c[Symbol.toPrimitive];if(t!==void 0){var n=t.call(c,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(c)}function U3(c){var e=V3(c,"string");return typeof e=="symbol"?e:e+""}var e0=()=>{},z2={},S0={},w0=null,D0={mark:e0,measure:e0};try{typeof window<"u"&&(z2=window),typeof document<"u"&&(S0=document),typeof MutationObserver<"u"&&(w0=MutationObserver),typeof performance<"u"&&(D0=performance)}catch{}var{userAgent:t0=""}=z2.navigator||{},B=z2,_=S0,n0=w0,x1=D0,O5=!!B.document,R=!!_.documentElement&&!!_.head&&typeof _.addEventListener=="function"&&typeof _.createElement=="function",T0=~t0.indexOf("MSIE")||~t0.indexOf("Trident/"),W3=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,j3=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,E0={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},q3={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},k0=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],v="classic",E1="duotone",$3="sharp",K3="sharp-duotone",A0=[v,E1,$3,K3],Q3={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Y3={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},J3=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),X3={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Z3=["fak","fa-kit","fakd","fa-kit-duotone"],s0={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},c4=["kit"],e4={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},t4=["fak","fakd"],n4={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},i0={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},N1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},s4=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],i4=["fak","fa-kit","fakd","fa-kit-duotone"],l4={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},a4={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},o4={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},c2={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},r4=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],e2=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...s4,...r4],f4=["solid","regular","light","thin","duotone","brands"],O0=[1,2,3,4,5,6,7,8,9,10],d4=O0.concat([11,12,13,14,15,16,17,18,19,20]),m4=[...Object.keys(o4),...f4,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",N1.GROUP,N1.SWAP_OPACITY,N1.PRIMARY,N1.SECONDARY].concat(O0.map(c=>"".concat(c,"x"))).concat(d4.map(c=>"w-".concat(c))),u4={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},O="___FONT_AWESOME___",t2=16,P0="fa",R0="svg-inline--fa",K="data-fa-i2svg",n2="data-fa-pseudo-element",p4="data-fa-pseudo-element-pending",L2="data-prefix",M2="data-icon",l0="fontawesome-i2svg",h4="async",g4=["HTML","HEAD","STYLE","SCRIPT"],I0=(()=>{try{return process.env.NODE_ENV==="production"}catch{return!1}})();function p1(c){return new Proxy(c,{get(e,t){return t in e?e[t]:e[v]}})}var F0=d({},E0);F0[v]=d(d(d(d({},{"fa-duotone":"duotone"}),E0[v]),s0.kit),s0["kit-duotone"]);var z4=p1(F0),s2=d({},X3);s2[v]=d(d(d(d({},{duotone:"fad"}),s2[v]),i0.kit),i0["kit-duotone"]);var a0=p1(s2),i2=d({},c2);i2[v]=d(d({},i2[v]),n4.kit);var C2=p1(i2),l2=d({},a4);l2[v]=d(d({},l2[v]),e4.kit);var P5=p1(l2),L4=W3,B0="fa-layers-text",M4=j3,C4=d({},Q3),R5=p1(C4),_4=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Q1=q3,b4=[...c4,...m4],f1=B.FontAwesomeConfig||{};function v4(c){var e=_.querySelector("script["+c+"]");if(e)return e.getAttribute(c)}function y4(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}_&&typeof _.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[t,n]=e,s=y4(v4(t));s!=null&&(f1[n]=s)});var H0={styleDefault:"solid",familyDefault:v,cssPrefix:P0,replacementClass:R0,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};f1.familyPrefix&&(f1.cssPrefix=f1.familyPrefix);var t1=d(d({},H0),f1);t1.autoReplaceSvg||(t1.observeMutations=!1);var u={};Object.keys(H0).forEach(c=>{Object.defineProperty(u,c,{enumerable:!0,set:function(e){t1[c]=e,d1.forEach(t=>t(u))},get:function(){return t1[c]}})});Object.defineProperty(u,"familyPrefix",{enumerable:!0,set:function(c){t1.cssPrefix=c,d1.forEach(e=>e(u))},get:function(){return t1.cssPrefix}});B.FontAwesomeConfig=u;var d1=[];function x4(c){return d1.push(c),()=>{d1.splice(d1.indexOf(c),1)}}var F=t2,T={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function N4(c){if(!c||!R)return;let e=_.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=c;let t=_.head.childNodes,n=null;for(let s=t.length-1;s>-1;s--){let i=t[s],l=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(l)>-1&&(n=i)}return _.head.insertBefore(e,n),c}var S4="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function m1(){let c=12,e="";for(;c-- >0;)e+=S4[Math.random()*62|0];return e}function n1(c){let e=[];for(let t=(c||[]).length>>>0;t--;)e[t]=c[t];return e}function _2(c){return c.classList?n1(c.classList):(c.getAttribute("class")||"").split(" ").filter(e=>e)}function G0(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function w4(c){return Object.keys(c||{}).reduce((e,t)=>e+"".concat(t,'="').concat(G0(c[t]),'" '),"").trim()}function k1(c){return Object.keys(c||{}).reduce((e,t)=>e+"".concat(t,": ").concat(c[t].trim(),";"),"")}function b2(c){return c.size!==T.size||c.x!==T.x||c.y!==T.y||c.rotate!==T.rotate||c.flipX||c.flipY}function D4(c){let{transform:e,containerWidth:t,iconWidth:n}=c,s={transform:"translate(".concat(t/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),l="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),f="rotate(".concat(e.rotate," 0 0)"),h={transform:"".concat(i," ").concat(l," ").concat(f)},p={transform:"translate(".concat(n/2*-1," -256)")};return{outer:s,inner:h,path:p}}function T4(c){let{transform:e,width:t=t2,height:n=t2,startCentered:s=!1}=c,i="";return s&&T0?i+="translate(".concat(e.x/F-t/2,"em, ").concat(e.y/F-n/2,"em) "):s?i+="translate(calc(-50% + ".concat(e.x/F,"em), calc(-50% + ").concat(e.y/F,"em)) "):i+="translate(".concat(e.x/F,"em, ").concat(e.y/F,"em) "),i+="scale(".concat(e.size/F*(e.flipX?-1:1),", ").concat(e.size/F*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var E4=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function V0(){let c=P0,e=R0,t=u.cssPrefix,n=u.replacementClass,s=E4;if(t!==c||n!==e){let i=new RegExp("\\.".concat(c,"\\-"),"g"),l=new RegExp("\\--".concat(c,"\\-"),"g"),f=new RegExp("\\.".concat(e),"g");s=s.replace(i,".".concat(t,"-")).replace(l,"--".concat(t,"-")).replace(f,".".concat(n))}return s}var o0=!1;function Y1(){u.autoAddCss&&!o0&&(N4(V0()),o0=!0)}var k4={mixout(){return{dom:{css:V0,insertCss:Y1}}},hooks(){return{beforeDOMElementCreation(){Y1()},beforeI2svg(){Y1()}}}},P=B||{};P[O]||(P[O]={});P[O].styles||(P[O].styles={});P[O].hooks||(P[O].hooks={});P[O].shims||(P[O].shims=[]);var E=P[O],U0=[],W0=function(){_.removeEventListener("DOMContentLoaded",W0),D1=1,U0.map(c=>c())},D1=!1;R&&(D1=(_.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(_.readyState),D1||_.addEventListener("DOMContentLoaded",W0));function A4(c){R&&(D1?setTimeout(c,0):U0.push(c))}function h1(c){let{tag:e,attributes:t={},children:n=[]}=c;return typeof c=="string"?G0(c):"<".concat(e," ").concat(w4(t),">").concat(n.map(h1).join(""),"</").concat(e,">")}function r0(c,e,t){if(c&&c[e]&&c[e][t])return{prefix:e,iconName:t,icon:c[e][t]}}var O4=function(e,t){return function(n,s,i,l){return e.call(t,n,s,i,l)}},J1=function(e,t,n,s){var i=Object.keys(e),l=i.length,f=s!==void 0?O4(t,s):t,h,p,g;for(n===void 0?(h=1,g=e[i[0]]):(h=0,g=n);h<l;h++)p=i[h],g=f(g,e[p],p,e);return g};function P4(c){let e=[],t=0,n=c.length;for(;t<n;){let s=c.charCodeAt(t++);if(s>=55296&&s<=56319&&t<n){let i=c.charCodeAt(t++);(i&64512)==56320?e.push(((s&1023)<<10)+(i&1023)+65536):(e.push(s),t--)}else e.push(s)}return e}function a2(c){let e=P4(c);return e.length===1?e[0].toString(16):null}function R4(c,e){let t=c.length,n=c.charCodeAt(e),s;return n>=55296&&n<=56319&&t>e+1&&(s=c.charCodeAt(e+1),s>=56320&&s<=57343)?(n-55296)*1024+s-56320+65536:n}function f0(c){return Object.keys(c).reduce((e,t)=>{let n=c[t];return!!n.icon?e[n.iconName]=n.icon:e[t]=n,e},{})}function o2(c,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:n=!1}=t,s=f0(e);typeof E.hooks.addPack=="function"&&!n?E.hooks.addPack(c,f0(e)):E.styles[c]=d(d({},E.styles[c]||{}),s),c==="fas"&&o2("fa",e)}var{styles:u1,shims:I4}=E,j0=Object.keys(C2),F4=j0.reduce((c,e)=>(c[e]=Object.keys(C2[e]),c),{}),v2=null,q0={},$0={},K0={},Q0={},Y0={};function B4(c){return~b4.indexOf(c)}function H4(c,e){let t=e.split("-"),n=t[0],s=t.slice(1).join("-");return n===c&&s!==""&&!B4(s)?s:null}var J0=()=>{let c=n=>J1(u1,(s,i,l)=>(s[l]=J1(i,n,{}),s),{});q0=c((n,s,i)=>(s[3]&&(n[s[3]]=i),s[2]&&s[2].filter(f=>typeof f=="number").forEach(f=>{n[f.toString(16)]=i}),n)),$0=c((n,s,i)=>(n[i]=i,s[2]&&s[2].filter(f=>typeof f=="string").forEach(f=>{n[f]=i}),n)),Y0=c((n,s,i)=>{let l=s[2];return n[i]=i,l.forEach(f=>{n[f]=i}),n});let e="far"in u1||u.autoFetchSvg,t=J1(I4,(n,s)=>{let i=s[0],l=s[1],f=s[2];return l==="far"&&!e&&(l="fas"),typeof i=="string"&&(n.names[i]={prefix:l,iconName:f}),typeof i=="number"&&(n.unicodes[i.toString(16)]={prefix:l,iconName:f}),n},{names:{},unicodes:{}});K0=t.names,Q0=t.unicodes,v2=A1(u.styleDefault,{family:u.familyDefault})};x4(c=>{v2=A1(c.styleDefault,{family:u.familyDefault})});J0();function y2(c,e){return(q0[c]||{})[e]}function G4(c,e){return($0[c]||{})[e]}function $(c,e){return(Y0[c]||{})[e]}function X0(c){return K0[c]||{prefix:null,iconName:null}}function V4(c){let e=Q0[c],t=y2("fas",c);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function H(){return v2}var Z0=()=>({prefix:null,iconName:null,rest:[]});function U4(c){let e=v,t=j0.reduce((n,s)=>(n[s]="".concat(u.cssPrefix,"-").concat(s),n),{});return A0.forEach(n=>{(c.includes(t[n])||c.some(s=>F4[n].includes(s)))&&(e=n)}),e}function A1(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:t=v}=e,n=z4[t][c];if(t===E1&&!c)return"fad";let s=a0[t][c]||a0[t][n],i=c in E.styles?c:null;return s||i||null}function W4(c){let e=[],t=null;return c.forEach(n=>{let s=H4(u.cssPrefix,n);s?t=s:n&&e.push(n)}),{iconName:t,rest:e}}function d0(c){return c.sort().filter((e,t,n)=>n.indexOf(e)===t)}function O1(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:t=!1}=e,n=null,s=e2.concat(i4),i=d0(c.filter(C=>s.includes(C))),l=d0(c.filter(C=>!e2.includes(C))),f=i.filter(C=>(n=C,!k0.includes(C))),[h=null]=f,p=U4(i),g=d(d({},W4(l)),{},{prefix:A1(h,{family:p})});return d(d(d({},g),K4({values:c,family:p,styles:u1,config:u,canonical:g,givenPrefix:n})),j4(t,n,g))}function j4(c,e,t){let{prefix:n,iconName:s}=t;if(c||!n||!s)return{prefix:n,iconName:s};let i=e==="fa"?X0(s):{},l=$(n,s);return s=i.iconName||l||s,n=i.prefix||n,n==="far"&&!u1.far&&u1.fas&&!u.autoFetchSvg&&(n="fas"),{prefix:n,iconName:s}}var q4=A0.filter(c=>c!==v||c!==E1),$4=Object.keys(c2).filter(c=>c!==v).map(c=>Object.keys(c2[c])).flat();function K4(c){let{values:e,family:t,canonical:n,givenPrefix:s="",styles:i={},config:l={}}=c,f=t===E1,h=e.includes("fa-duotone")||e.includes("fad"),p=l.familyDefault==="duotone",g=n.prefix==="fad"||n.prefix==="fa-duotone";if(!f&&(h||p||g)&&(n.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(n.prefix="fab"),!n.prefix&&q4.includes(t)&&(Object.keys(i).find(M=>$4.includes(M))||l.autoFetchSvg)){let M=J3.get(t).defaultShortPrefixId;n.prefix=M,n.iconName=$(n.prefix,n.iconName)||n.iconName}return(n.prefix==="fa"||s==="fa")&&(n.prefix=H()||"fas"),n}var r2=class{constructor(){this.definitions={}}add(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];let s=t.reduce(this._pullDefinitions,{});Object.keys(s).forEach(i=>{this.definitions[i]=d(d({},this.definitions[i]||{}),s[i]),o2(i,s[i]);let l=C2[v][i];l&&o2(l,s[i]),J0()})}reset(){this.definitions={}}_pullDefinitions(e,t){let n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(s=>{let{prefix:i,iconName:l,icon:f}=n[s],h=f[2];e[i]||(e[i]={}),h.length>0&&h.forEach(p=>{typeof p=="string"&&(e[i][p]=f)}),e[i][l]=f}),e}},m0=[],c1={},e1={},Q4=Object.keys(e1);function Y4(c,e){let{mixoutsTo:t}=e;return m0=c,c1={},Object.keys(e1).forEach(n=>{Q4.indexOf(n)===-1&&delete e1[n]}),m0.forEach(n=>{let s=n.mixout?n.mixout():{};if(Object.keys(s).forEach(i=>{typeof s[i]=="function"&&(t[i]=s[i]),typeof s[i]=="object"&&Object.keys(s[i]).forEach(l=>{t[i]||(t[i]={}),t[i][l]=s[i][l]})}),n.hooks){let i=n.hooks();Object.keys(i).forEach(l=>{c1[l]||(c1[l]=[]),c1[l].push(i[l])})}n.provides&&n.provides(e1)}),t}function f2(c,e){for(var t=arguments.length,n=new Array(t>2?t-2:0),s=2;s<t;s++)n[s-2]=arguments[s];return(c1[c]||[]).forEach(l=>{e=l.apply(null,[e,...n])}),e}function Q(c){for(var e=arguments.length,t=new Array(e>1?e-1:0),n=1;n<e;n++)t[n-1]=arguments[n];(c1[c]||[]).forEach(i=>{i.apply(null,t)})}function G(){let c=arguments[0],e=Array.prototype.slice.call(arguments,1);return e1[c]?e1[c].apply(null,e):void 0}function d2(c){c.prefix==="fa"&&(c.prefix="fas");let{iconName:e}=c,t=c.prefix||H();if(e)return e=$(t,e)||e,r0(c3.definitions,t,e)||r0(E.styles,t,e)}var c3=new r2,J4=()=>{u.autoReplaceSvg=!1,u.observeMutations=!1,Q("noAuto")},X4={i2svg:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return R?(Q("beforeI2svg",c),G("pseudoElements2svg",c),G("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:e}=c;u.autoReplaceSvg===!1&&(u.autoReplaceSvg=!0),u.observeMutations=!0,A4(()=>{c6({autoReplaceSvgRoot:e}),Q("watch",c)})}},Z4={icon:c=>{if(c===null)return null;if(typeof c=="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:$(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){let e=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],t=A1(c[0]);return{prefix:t,iconName:$(t,e)||e}}if(typeof c=="string"&&(c.indexOf("".concat(u.cssPrefix,"-"))>-1||c.match(L4))){let e=O1(c.split(" "),{skipLookups:!0});return{prefix:e.prefix||H(),iconName:$(e.prefix,e.iconName)||e.iconName}}if(typeof c=="string"){let e=H();return{prefix:e,iconName:$(e,c)||c}}}},S={noAuto:J4,config:u,dom:X4,parse:Z4,library:c3,findIconDefinition:d2,toHtml:h1},c6=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:e=_}=c;(Object.keys(E.styles).length>0||u.autoFetchSvg)&&R&&u.autoReplaceSvg&&S.dom.i2svg({node:e})};function P1(c,e){return Object.defineProperty(c,"abstract",{get:e}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(t=>h1(t))}}),Object.defineProperty(c,"node",{get:function(){if(!R)return;let t=_.createElement("div");return t.innerHTML=c.html,t.children}}),c}function e6(c){let{children:e,main:t,mask:n,attributes:s,styles:i,transform:l}=c;if(b2(l)&&t.found&&!n.found){let{width:f,height:h}=t,p={x:f/h/2,y:.5};s.style=k1(d(d({},i),{},{"transform-origin":"".concat(p.x+l.x/16,"em ").concat(p.y+l.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function t6(c){let{prefix:e,iconName:t,children:n,attributes:s,symbol:i}=c,l=i===!0?"".concat(e,"-").concat(u.cssPrefix,"-").concat(t):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:d(d({},s),{},{id:l}),children:n}]}]}function x2(c){let{icons:{main:e,mask:t},prefix:n,iconName:s,transform:i,symbol:l,title:f,maskId:h,titleId:p,extra:g,watchable:C=!1}=c,{width:M,height:b}=t.found?t:e,I=t4.includes(n),W=[u.replacementClass,s?"".concat(u.cssPrefix,"-").concat(s):""].filter(J=>g.classes.indexOf(J)===-1).filter(J=>J!==""||!!J).concat(g.classes).join(" "),w={children:[],attributes:d(d({},g.attributes),{},{"data-prefix":n,"data-icon":s,class:W,role:g.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(M," ").concat(b)})},k=I&&!~g.classes.indexOf("fa-fw")?{width:"".concat(M/b*16*.0625,"em")}:{};C&&(w.attributes[K]=""),f&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(p||m1())},children:[f]}),delete w.attributes.title);let N=d(d({},w),{},{prefix:n,iconName:s,main:e,mask:t,maskId:h,transform:i,symbol:l,styles:d(d({},k),g.styles)}),{children:D,attributes:Y}=t.found&&e.found?G("generateAbstractMask",N)||{children:[],attributes:{}}:G("generateAbstractIcon",N)||{children:[],attributes:{}};return N.children=D,N.attributes=Y,l?t6(N):e6(N)}function u0(c){let{content:e,width:t,height:n,transform:s,title:i,extra:l,watchable:f=!1}=c,h=d(d(d({},l.attributes),i?{title:i}:{}),{},{class:l.classes.join(" ")});f&&(h[K]="");let p=d({},l.styles);b2(s)&&(p.transform=T4({transform:s,startCentered:!0,width:t,height:n}),p["-webkit-transform"]=p.transform);let g=k1(p);g.length>0&&(h.style=g);let C=[];return C.push({tag:"span",attributes:h,children:[e]}),i&&C.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),C}function n6(c){let{content:e,title:t,extra:n}=c,s=d(d(d({},n.attributes),t?{title:t}:{}),{},{class:n.classes.join(" ")}),i=k1(n.styles);i.length>0&&(s.style=i);let l=[];return l.push({tag:"span",attributes:s,children:[e]}),t&&l.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),l}var{styles:X1}=E;function m2(c){let e=c[0],t=c[1],[n]=c.slice(4),s=null;return Array.isArray(n)?s={tag:"g",attributes:{class:"".concat(u.cssPrefix,"-").concat(Q1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(Q1.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(Q1.PRIMARY),fill:"currentColor",d:n[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:e,height:t,icon:s}}var s6={found:!1,width:512,height:512};function i6(c,e){!I0&&!u.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(e,'" is missing.'))}function u2(c,e){let t=e;return e==="fa"&&u.styleDefault!==null&&(e=H()),new Promise((n,s)=>{if(t==="fa"){let i=X0(c)||{};c=i.iconName||c,e=i.prefix||e}if(c&&e&&X1[e]&&X1[e][c]){let i=X1[e][c];return n(m2(i))}i6(c,e),n(d(d({},s6),{},{icon:u.showMissingIcons&&c?G("missingIconAbstract")||{}:{}}))})}var p0=()=>{},p2=u.measurePerformance&&x1&&x1.mark&&x1.measure?x1:{mark:p0,measure:p0},r1='FA "6.7.2"',l6=c=>(p2.mark("".concat(r1," ").concat(c," begins")),()=>e3(c)),e3=c=>{p2.mark("".concat(r1," ").concat(c," ends")),p2.measure("".concat(r1," ").concat(c),"".concat(r1," ").concat(c," begins"),"".concat(r1," ").concat(c," ends"))},N2={begin:l6,end:e3},S1=()=>{};function h0(c){return typeof(c.getAttribute?c.getAttribute(K):null)=="string"}function a6(c){let e=c.getAttribute?c.getAttribute(L2):null,t=c.getAttribute?c.getAttribute(M2):null;return e&&t}function o6(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(u.replacementClass)}function r6(){return u.autoReplaceSvg===!0?w1.replace:w1[u.autoReplaceSvg]||w1.replace}function f6(c){return _.createElementNS("http://www.w3.org/2000/svg",c)}function d6(c){return _.createElement(c)}function t3(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:t=c.tag==="svg"?f6:d6}=e;if(typeof c=="string")return _.createTextNode(c);let n=t(c.tag);return Object.keys(c.attributes||[]).forEach(function(i){n.setAttribute(i,c.attributes[i])}),(c.children||[]).forEach(function(i){n.appendChild(t3(i,{ceFn:t}))}),n}function m6(c){let e=" ".concat(c.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var w1={replace:function(c){let e=c[0];if(e.parentNode)if(c[1].forEach(t=>{e.parentNode.insertBefore(t3(t),e)}),e.getAttribute(K)===null&&u.keepOriginalSource){let t=_.createComment(m6(e));e.parentNode.replaceChild(t,e)}else e.remove()},nest:function(c){let e=c[0],t=c[1];if(~_2(e).indexOf(u.replacementClass))return w1.replace(c);let n=new RegExp("".concat(u.cssPrefix,"-.*"));if(delete t[0].attributes.id,t[0].attributes.class){let i=t[0].attributes.class.split(" ").reduce((l,f)=>(f===u.replacementClass||f.match(n)?l.toSvg.push(f):l.toNode.push(f),l),{toNode:[],toSvg:[]});t[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}let s=t.map(i=>h1(i)).join(`
`);e.setAttribute(K,""),e.innerHTML=s}};function g0(c){c()}function n3(c,e){let t=typeof e=="function"?e:S1;if(c.length===0)t();else{let n=g0;u.mutateApproach===h4&&(n=B.requestAnimationFrame||g0),n(()=>{let s=r6(),i=N2.begin("mutate");c.map(s),i(),t()})}}var S2=!1;function s3(){S2=!0}function h2(){S2=!1}var T1=null;function z0(c){if(!n0||!u.observeMutations)return;let{treeCallback:e=S1,nodeCallback:t=S1,pseudoElementsCallback:n=S1,observeMutationsRoot:s=_}=c;T1=new n0(i=>{if(S2)return;let l=H();n1(i).forEach(f=>{if(f.type==="childList"&&f.addedNodes.length>0&&!h0(f.addedNodes[0])&&(u.searchPseudoElements&&n(f.target),e(f.target)),f.type==="attributes"&&f.target.parentNode&&u.searchPseudoElements&&n(f.target.parentNode),f.type==="attributes"&&h0(f.target)&&~_4.indexOf(f.attributeName))if(f.attributeName==="class"&&a6(f.target)){let{prefix:h,iconName:p}=O1(_2(f.target));f.target.setAttribute(L2,h||l),p&&f.target.setAttribute(M2,p)}else o6(f.target)&&t(f.target)})}),R&&T1.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function u6(){T1&&T1.disconnect()}function p6(c){let e=c.getAttribute("style"),t=[];return e&&(t=e.split(";").reduce((n,s)=>{let i=s.split(":"),l=i[0],f=i.slice(1);return l&&f.length>0&&(n[l]=f.join(":").trim()),n},{})),t}function h6(c){let e=c.getAttribute("data-prefix"),t=c.getAttribute("data-icon"),n=c.innerText!==void 0?c.innerText.trim():"",s=O1(_2(c));return s.prefix||(s.prefix=H()),e&&t&&(s.prefix=e,s.iconName=t),s.iconName&&s.prefix||(s.prefix&&n.length>0&&(s.iconName=G4(s.prefix,c.innerText)||y2(s.prefix,a2(c.innerText))),!s.iconName&&u.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=c.firstChild.data)),s}function g6(c){let e=n1(c.attributes).reduce((s,i)=>(s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s),{}),t=c.getAttribute("title"),n=c.getAttribute("data-fa-title-id");return u.autoA11y&&(t?e["aria-labelledby"]="".concat(u.replacementClass,"-title-").concat(n||m1()):(e["aria-hidden"]="true",e.focusable="false")),e}function z6(){return{iconName:null,title:null,titleId:null,prefix:null,transform:T,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function L0(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:t,prefix:n,rest:s}=h6(c),i=g6(c),l=f2("parseNodeAttributes",{},c),f=e.styleParser?p6(c):[];return d({iconName:t,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:n,transform:T,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:f,attributes:i}},l)}var{styles:L6}=E;function i3(c){let e=u.autoReplaceSvg==="nest"?L0(c,{styleParser:!1}):L0(c);return~e.extra.classes.indexOf(B0)?G("generateLayersText",c,e):G("generateSvgReplacementMutation",c,e)}function M6(){return[...Z3,...e2]}function M0(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!R)return Promise.resolve();let t=_.documentElement.classList,n=g=>t.add("".concat(l0,"-").concat(g)),s=g=>t.remove("".concat(l0,"-").concat(g)),i=u.autoFetchSvg?M6():k0.concat(Object.keys(L6));i.includes("fa")||i.push("fa");let l=[".".concat(B0,":not([").concat(K,"])")].concat(i.map(g=>".".concat(g,":not([").concat(K,"])"))).join(", ");if(l.length===0)return Promise.resolve();let f=[];try{f=n1(c.querySelectorAll(l))}catch{}if(f.length>0)n("pending"),s("complete");else return Promise.resolve();let h=N2.begin("onTree"),p=f.reduce((g,C)=>{try{let M=i3(C);M&&g.push(M)}catch(M){I0||M.name==="MissingIcon"&&console.error(M)}return g},[]);return new Promise((g,C)=>{Promise.all(p).then(M=>{n3(M,()=>{n("active"),n("complete"),s("pending"),typeof e=="function"&&e(),h(),g()})}).catch(M=>{h(),C(M)})})}function C6(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;i3(c).then(t=>{t&&n3([t],e)})}function _6(c){return function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(e||{}).icon?e:d2(e||{}),{mask:s}=t;return s&&(s=(s||{}).icon?s:d2(s||{})),c(n,d(d({},t),{},{mask:s}))}}var b6=function(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:t=T,symbol:n=!1,mask:s=null,maskId:i=null,title:l=null,titleId:f=null,classes:h=[],attributes:p={},styles:g={}}=e;if(!c)return;let{prefix:C,iconName:M,icon:b}=c;return P1(d({type:"icon"},c),()=>(Q("beforeDOMElementCreation",{iconDefinition:c,params:e}),u.autoA11y&&(l?p["aria-labelledby"]="".concat(u.replacementClass,"-title-").concat(f||m1()):(p["aria-hidden"]="true",p.focusable="false")),x2({icons:{main:m2(b),mask:s?m2(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:M,transform:d(d({},T),t),symbol:n,title:l,maskId:i,titleId:f,extra:{attributes:p,styles:g,classes:h}})))},v6={mixout(){return{icon:_6(b6)}},hooks(){return{mutationObserverCallbacks(c){return c.treeCallback=M0,c.nodeCallback=C6,c}}},provides(c){c.i2svg=function(e){let{node:t=_,callback:n=()=>{}}=e;return M0(t,n)},c.generateSvgReplacementMutation=function(e,t){let{iconName:n,title:s,titleId:i,prefix:l,transform:f,symbol:h,mask:p,maskId:g,extra:C}=t;return new Promise((M,b)=>{Promise.all([u2(n,l),p.iconName?u2(p.iconName,p.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(I=>{let[W,w]=I;M([e,x2({icons:{main:W,mask:w},prefix:l,iconName:n,transform:f,symbol:h,maskId:g,title:s,titleId:i,extra:C,watchable:!0})])}).catch(b)})},c.generateAbstractIcon=function(e){let{children:t,attributes:n,main:s,transform:i,styles:l}=e,f=k1(l);f.length>0&&(n.style=f);let h;return b2(i)&&(h=G("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),t.push(h||s.icon),{children:t,attributes:n}}}},y6={mixout(){return{layer(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:t=[]}=e;return P1({type:"layer"},()=>{Q("beforeDOMElementCreation",{assembler:c,params:e});let n=[];return c(s=>{Array.isArray(s)?s.map(i=>{n=n.concat(i.abstract)}):n=n.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(u.cssPrefix,"-layers"),...t].join(" ")},children:n}]})}}}},x6={mixout(){return{counter(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:t=null,classes:n=[],attributes:s={},styles:i={}}=e;return P1({type:"counter",content:c},()=>(Q("beforeDOMElementCreation",{content:c,params:e}),n6({content:c.toString(),title:t,extra:{attributes:s,styles:i,classes:["".concat(u.cssPrefix,"-layers-counter"),...n]}})))}}}},N6={mixout(){return{text(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:t=T,title:n=null,classes:s=[],attributes:i={},styles:l={}}=e;return P1({type:"text",content:c},()=>(Q("beforeDOMElementCreation",{content:c,params:e}),u0({content:c,transform:d(d({},T),t),title:n,extra:{attributes:i,styles:l,classes:["".concat(u.cssPrefix,"-layers-text"),...s]}})))}}},provides(c){c.generateLayersText=function(e,t){let{title:n,transform:s,extra:i}=t,l=null,f=null;if(T0){let h=parseInt(getComputedStyle(e).fontSize,10),p=e.getBoundingClientRect();l=p.width/h,f=p.height/h}return u.autoA11y&&!n&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,u0({content:e.innerHTML,width:l,height:f,transform:s,title:n,extra:i,watchable:!0})])}}},S6=new RegExp('"',"ug"),C0=[1105920,1112319],_0=d(d(d(d({},{FontAwesome:{normal:"fas",400:"fas"}}),Y3),u4),l4),g2=Object.keys(_0).reduce((c,e)=>(c[e.toLowerCase()]=_0[e],c),{}),w6=Object.keys(g2).reduce((c,e)=>{let t=g2[e];return c[e]=t[900]||[...Object.entries(t)][0][1],c},{});function D6(c){let e=c.replace(S6,""),t=R4(e,0),n=t>=C0[0]&&t<=C0[1],s=e.length===2?e[0]===e[1]:!1;return{value:a2(s?e[0]:e),isSecondary:n||s}}function T6(c,e){let t=c.replace(/^['"]|['"]$/g,"").toLowerCase(),n=parseInt(e),s=isNaN(n)?"normal":n;return(g2[t]||{})[s]||w6[t]}function b0(c,e){let t="".concat(p4).concat(e.replace(":","-"));return new Promise((n,s)=>{if(c.getAttribute(t)!==null)return n();let l=n1(c.children).filter(M=>M.getAttribute(n2)===e)[0],f=B.getComputedStyle(c,e),h=f.getPropertyValue("font-family"),p=h.match(M4),g=f.getPropertyValue("font-weight"),C=f.getPropertyValue("content");if(l&&!p)return c.removeChild(l),n();if(p&&C!=="none"&&C!==""){let M=f.getPropertyValue("content"),b=T6(h,g),{value:I,isSecondary:W}=D6(M),w=p[0].startsWith("FontAwesome"),k=y2(b,I),N=k;if(w){let D=V4(I);D.iconName&&D.prefix&&(k=D.iconName,b=D.prefix)}if(k&&!W&&(!l||l.getAttribute(L2)!==b||l.getAttribute(M2)!==N)){c.setAttribute(t,N),l&&c.removeChild(l);let D=z6(),{extra:Y}=D;Y.attributes[n2]=e,u2(k,b).then(J=>{let y3=x2(d(d({},D),{},{icons:{main:J,mask:Z0()},prefix:b,iconName:N,extra:Y,watchable:!0})),I1=_.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?c.insertBefore(I1,c.firstChild):c.appendChild(I1),I1.outerHTML=y3.map(x3=>h1(x3)).join(`
`),c.removeAttribute(t),n()}).catch(s)}else n()}else n()})}function E6(c){return Promise.all([b0(c,"::before"),b0(c,"::after")])}function k6(c){return c.parentNode!==document.head&&!~g4.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(n2)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function v0(c){if(R)return new Promise((e,t)=>{let n=n1(c.querySelectorAll("*")).filter(k6).map(E6),s=N2.begin("searchPseudoElements");s3(),Promise.all(n).then(()=>{s(),h2(),e()}).catch(()=>{s(),h2(),t()})})}var A6={hooks(){return{mutationObserverCallbacks(c){return c.pseudoElementsCallback=v0,c}}},provides(c){c.pseudoElements2svg=function(e){let{node:t=_}=e;u.searchPseudoElements&&v0(t)}}},y0=!1,O6={mixout(){return{dom:{unwatch(){s3(),y0=!0}}}},hooks(){return{bootstrap(){z0(f2("mutationObserverCallbacks",{}))},noAuto(){u6()},watch(c){let{observeMutationsRoot:e}=c;y0?h2():z0(f2("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},x0=c=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce((t,n)=>{let s=n.toLowerCase().split("-"),i=s[0],l=s.slice(1).join("-");if(i&&l==="h")return t.flipX=!0,t;if(i&&l==="v")return t.flipY=!0,t;if(l=parseFloat(l),isNaN(l))return t;switch(i){case"grow":t.size=t.size+l;break;case"shrink":t.size=t.size-l;break;case"left":t.x=t.x-l;break;case"right":t.x=t.x+l;break;case"up":t.y=t.y-l;break;case"down":t.y=t.y+l;break;case"rotate":t.rotate=t.rotate+l;break}return t},e)},P6={mixout(){return{parse:{transform:c=>x0(c)}}},hooks(){return{parseNodeAttributes(c,e){let t=e.getAttribute("data-fa-transform");return t&&(c.transform=x0(t)),c}}},provides(c){c.generateAbstractTransformGrouping=function(e){let{main:t,transform:n,containerWidth:s,iconWidth:i}=e,l={transform:"translate(".concat(s/2," 256)")},f="translate(".concat(n.x*32,", ").concat(n.y*32,") "),h="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),p="rotate(".concat(n.rotate," 0 0)"),g={transform:"".concat(f," ").concat(h," ").concat(p)},C={transform:"translate(".concat(i/2*-1," -256)")},M={outer:l,inner:g,path:C};return{tag:"g",attributes:d({},M.outer),children:[{tag:"g",attributes:d({},M.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:d(d({},t.icon.attributes),M.path)}]}]}}}},Z1={x:0,y:0,width:"100%",height:"100%"};function N0(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||e)&&(c.attributes.fill="black"),c}function R6(c){return c.tag==="g"?c.children:[c]}var I6={hooks(){return{parseNodeAttributes(c,e){let t=e.getAttribute("data-fa-mask"),n=t?O1(t.split(" ").map(s=>s.trim())):Z0();return n.prefix||(n.prefix=H()),c.mask=n,c.maskId=e.getAttribute("data-fa-mask-id"),c}}},provides(c){c.generateAbstractMask=function(e){let{children:t,attributes:n,main:s,mask:i,maskId:l,transform:f}=e,{width:h,icon:p}=s,{width:g,icon:C}=i,M=D4({transform:f,containerWidth:g,iconWidth:h}),b={tag:"rect",attributes:d(d({},Z1),{},{fill:"white"})},I=p.children?{children:p.children.map(N0)}:{},W={tag:"g",attributes:d({},M.inner),children:[N0(d({tag:p.tag,attributes:d(d({},p.attributes),M.path)},I))]},w={tag:"g",attributes:d({},M.outer),children:[W]},k="mask-".concat(l||m1()),N="clip-".concat(l||m1()),D={tag:"mask",attributes:d(d({},Z1),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,w]},Y={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:R6(C)},D]};return t.push(Y,{tag:"rect",attributes:d({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(k,")")},Z1)}),{children:t,attributes:n}}}},F6={provides(c){let e=!1;B.matchMedia&&(e=B.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){let t=[],n={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};t.push({tag:"path",attributes:d(d({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let i=d(d({},s),{},{attributeName:"opacity"}),l={tag:"circle",attributes:d(d({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||l.children.push({tag:"animate",attributes:d(d({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:d(d({},i),{},{values:"1;0;1;1;0;1;"})}),t.push(l),t.push({tag:"path",attributes:d(d({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:d(d({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||t.push({tag:"path",attributes:d(d({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:d(d({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:t}}}},B6={hooks(){return{parseNodeAttributes(c,e){let t=e.getAttribute("data-fa-symbol"),n=t===null?!1:t===""?!0:t;return c.symbol=n,c}}}},H6=[k4,v6,y6,x6,N6,A6,O6,P6,I6,F6,B6];Y4(H6,{mixoutsTo:S});var I5=S.noAuto,F5=S.config,B5=S.library,H5=S.dom,l3=S.parse,G5=S.findIconDefinition,V5=S.toHtml,a3=S.icon,U5=S.layer,G6=S.text,V6=S.counter;var U6=["*"],W6=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},j6=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},q6=c=>{let e={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(e).map(t=>e[t]?t:null).filter(t=>t)},$6=c=>c.prefix!==void 0&&c.iconName!==void 0,K6=(c,e)=>$6(c)?c:typeof c=="string"?{prefix:e,iconName:c}:{prefix:c[0],iconName:c[1]},Q6=(()=>{class c{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}static{this.\u0275fac=function(n){return new(n||c)}}static{this.\u0275prov=X({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),Y6=(()=>{class c{constructor(){this.definitions={}}addIcons(...t){for(let n of t){n.prefix in this.definitions||(this.definitions[n.prefix]={}),this.definitions[n.prefix][n.iconName]=n;for(let s of n.icon[2])typeof s=="string"&&(this.definitions[n.prefix][s]=n)}}addIconPacks(...t){for(let n of t){let s=Object.keys(n).map(i=>n[i]);this.addIcons(...s)}}getIconDefinition(t,n){return t in this.definitions&&n in this.definitions[t]?this.definitions[t][n]:null}static{this.\u0275fac=function(n){return new(n||c)}}static{this.\u0275prov=X({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),J6=(()=>{class c{constructor(){this.stackItemSize="1x"}ngOnChanges(t){if("size"in t)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}static{this.\u0275fac=function(n){return new(n||c)}}static{this.\u0275dir=z1({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[l1]})}}return c})(),X6=(()=>{class c{constructor(t,n){this.renderer=t,this.elementRef=n}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(t){"size"in t&&(t.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${t.size.currentValue}`),t.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${t.size.previousValue}`))}static{this.\u0275fac=function(n){return new(n||c)(A(H2),A(C1))}}static{this.\u0275cmp=y({type:c,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[l1,x],ngContentSelectors:U6,decls:1,vars:0,template:function(n,s){n&1&&(j(),q(0))},encapsulation:2})}}return c})(),V=(()=>{class c{set spin(t){this.animation=t?"spin":void 0}set pulse(t){this.animation=t?"spin-pulse":void 0}constructor(t,n,s,i,l){this.sanitizer=t,this.config=n,this.iconLibrary=s,this.stackItem=i,this.classes=[],l!=null&&i==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(t){if(this.icon==null&&this.config.fallbackIcon==null){j6();return}if(t){let n=this.icon!=null?this.icon:this.config.fallbackIcon,s=this.findIconDefinition(n);if(s!=null){let i=this.buildParams();this.renderIcon(s,i)}}}render(){this.ngOnChanges({})}findIconDefinition(t){let n=K6(t,this.config.defaultPrefix);if("icon"in n)return n;let s=this.iconLibrary.getIconDefinition(n.prefix,n.iconName);return s??(W6(n),null)}buildParams(){let t={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},n=typeof this.transform=="string"?l3.transform(this.transform):this.transform;return{title:this.title,transform:n,classes:[...q6(t),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(t,n){let s=a3(t,n);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(s.html.join(`
`))}static{this.\u0275fac=function(n){return new(n||c)(A(K2),A(Q6),A(Y6),A(J6,8),A(X6,8))}}static{this.\u0275cmp=y({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(n,s){n&2&&(q1("innerHTML",s.renderedIconHTML,F2),V1("title",s.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[l1,x],decls:0,vars:0,template:function(n,s){},encapsulation:2})}}return c})();var U=(()=>{class c{static{this.\u0275fac=function(n){return new(n||c)}}static{this.\u0275mod=H1({type:c})}static{this.\u0275inj=B1({})}}return c})();var o3={prefix:"fas",iconName:"comments",icon:[640,512,[128490,61670],"f086","M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2s0 0 0 0s0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.2-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9c0 0 0 0 0 0s0 0 0 0l-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z"]};var r3={prefix:"fas",iconName:"users",icon:[640,512,[],"f0c0","M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192l42.7 0c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0L21.3 320C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7l42.7 0C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3l-213.3 0zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352l117.3 0C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7l-330.7 0c-14.7 0-26.7-11.9-26.7-26.7z"]};var f3={prefix:"fas",iconName:"globe",icon:[512,512,[127760],"f0ac","M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"]};var s1={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]};var d3={prefix:"fas",iconName:"caret-up",icon:[320,512,[],"f0d8","M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"]};var m3={prefix:"fas",iconName:"arrows-rotate",icon:[512,512,[128472,"refresh","sync"],"f021","M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160 352 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l111.5 0c0 0 0 0 0 0l.4 0c17.7 0 32-14.3 32-32l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 35.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1L16 432c0 17.7 14.3 32 32 32s32-14.3 32-32l0-35.1 17.6 17.5c0 0 0 0 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.8c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352l34.4 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L48.4 288c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"]};var u3={prefix:"fas",iconName:"comment-dots",icon:[512,512,[128172,62075,"commenting"],"f4ad","M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3c0 0 0 0 0 0c0 0 0 0 0 0s0 0 0 0s0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9zM128 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]};var p3={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]};var h3={prefix:"fas",iconName:"earth-americas",icon:[512,512,[127758,"earth","earth-america","globe-americas"],"f57d","M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5l0 39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9l0 39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7l0-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1L257 256c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"]};var g3={prefix:"fas",iconName:"face-smile",icon:[512,512,[128578,"smile"],"f118","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]};var Z6=["*"],c8=(c,e)=>({"fa-rotate-180":c,"fa-rotate-90":e});function e8(c,e){c&1&&m(0,"hr")}var z3=(()=>{class c{constructor(){this.isCollapsed=!0,this.hideBottomLine=!1,this.question="Question",this.faCaretUp=d3}static{this.\u0275fac=function(n){return new(n||c)}}static{this.\u0275cmp=y({type:c,selectors:[["app-faq-item"]],inputs:{isCollapsed:"isCollapsed",hideBottomLine:"hideBottomLine",question:"question"},standalone:!0,features:[x],ngContentSelectors:Z6,decls:10,vars:8,consts:[["collapse","ngbCollapse"],[2,"cursor","pointer",3,"click"],[1,"d-flex","mb-1"],[1,"me-3",2,"transition","0.3s",3,"icon","ngClass"],[1,"mb-0"],[3,"ngbCollapseChange","ngbCollapse"]],template:function(n,s){if(n&1){let i=j1();j(),o(0,"div",1),a1("click",function(){return L1(i),M1(s.isCollapsed=!s.isCollapsed)}),o(1,"div",2),m(2,"fa-icon",3),o(3,"p",4)(4,"b"),a(5),r()()(),o(6,"p",5,0),W2("ngbCollapseChange",function(f){return L1(i),U2(s.isCollapsed,f)||(s.isCollapsed=f),M1(f)}),q(8),r()(),G1(9,e8,1,0,"hr")}n&2&&(z(2),L("icon",s.faCaretUp)("ngClass",$1(5,c8,s.isCollapsed,!s.isCollapsed)),z(3),o1(s.question),z(),V2("ngbCollapse",s.isCollapsed),z(3),W1(9,s.hideBottomLine?-1:9))},dependencies:[U,V,y1,b1,q2]})}}return c})();var t8=["*"],L3=(()=>{class c{constructor(){this.faStar=s1,this.author="Author",this.imgSrc="../assets/img/dummy-profile.jpg"}static{this.\u0275fac=function(n){return new(n||c)}}static{this.\u0275cmp=y({type:c,selectors:[["app-review-item"]],inputs:{author:"author",imgSrc:"imgSrc"},standalone:!0,features:[x],ngContentSelectors:t8,decls:15,vars:7,consts:[[1,"mx-0","mx-md-5","d-flex","flex-column","align-items-center"],["alt","",1,"mb-1",3,"src"],[1,"text-center"],[1,"mb-1","d-flex"],[3,"icon"],[1,"ms-1"],[1,"d-block","text-center","fst-italic"]],template:function(n,s){n&1&&(j(),o(0,"div",0),m(1,"img",1),o(2,"p",2)(3,"b"),a(4),r()(),o(5,"div",3),m(6,"fa-icon",4)(7,"fa-icon",4)(8,"fa-icon",4)(9,"fa-icon",4)(10,"fa-icon",4),o(11,"span",5),a(12,"5/5"),r()(),o(13,"q",6),q(14),r()()),n&2&&(z(),L("src",s.imgSrc,B2),z(3),o1(s.author),z(2),L("icon",s.faStar),z(),L("icon",s.faStar),z(),L("icon",s.faStar),z(),L("icon",s.faStar),z(),L("icon",s.faStar))},dependencies:[U,V],styles:[".color-primary[_ngcontent-%COMP%]{color:#263d9a}.color-secondary[_ngcontent-%COMP%]{color:#ff4d3d}.color-light[_ngcontent-%COMP%]{color:#f5f5f5}.color-dark[_ngcontent-%COMP%]{color:#2e2e2e}[_nghost-%COMP%]{color:#f5f5f5}[_nghost-%COMP%]   img[_ngcontent-%COMP%]{width:150px;border-radius:100%;border:3px solid #f5f5f5}@media (max-width: 768px){[_nghost-%COMP%]   img[_ngcontent-%COMP%]{width:100px}}"]})}}return c})();var M3=(()=>{class c{constructor(){this.faStar=s1}static{this.\u0275fac=function(n){return new(n||c)}}static{this.\u0275cmp=y({type:c,selectors:[["app-mobile-pricing"]],standalone:!0,features:[x],decls:84,vars:1,consts:[["pagination","true","pagination-clickable","true","slides-per-view","auto","centered-slides","true","space-between","30",1,"mySwiper"],[1,"card","w-100"],[1,"card-header"],[1,"card-title"],[1,"card-subtitle","text-muted"],[1,"card-body"],[1,"card-footer"],[1,"fs-4"],[1,"card","w-100","position-relative","recommended"],[1,"position-absolute","top-0","end-0","recommended-label","py-1","px-2"],[1,"me-1",3,"icon"]],template:function(n,s){n&1&&(o(0,"swiper-container",0)(1,"swiper-slide")(2,"div",1)(3,"div",2)(4,"h2",3),a(5,"D\xE9couverte"),r(),o(6,"p",4),a(7," Pour tester, progresser, \xE9changer "),r()(),o(8,"div",5)(9,"p")(10,"b"),a(11,"Id\xE9al pour d\xE9buter en douceur sans se ruiner."),r()(),o(12,"p"),a(13," Un accompagnement collectif accessible, avec du suivi et des ressources solides. "),r(),o(14,"p"),a(15," \u2705 1 cours en petit groupe par semaine "),m(16,"br"),a(17," \u2705 1 suivi individuel de 20 min / mois "),m(18,"br"),a(19," \u2705 Acc\xE8s \xE0 des supports exclusifs (PDF, vid\xE9os, audios) "),m(20,"br"),a(21," \u2705 Conseils de progression personnalis\xE9s "),m(22,"br"),a(23," \u2705 Acc\xE8s \xE0 l\u2019espace communaut\xE9 "),m(24,"br"),r()(),o(25,"div",6)(26,"p",7),a(27,"69\u20AC/mois"),r()()()(),o(28,"swiper-slide")(29,"div",8)(30,"div",9),m(31,"fa-icon",10),o(32,"small"),a(33,"Recommand\xE9"),r()(),o(34,"div",2)(35,"h2",3),a(36,"Standard"),r(),o(37,"p",4),a(38," Pour ceux qui veulent du vrai sur-mesure "),r()(),o(39,"div",5)(40,"p")(41,"b"),a(42," Un \xE9quilibre entre structure collective et accompagnement personnel. "),r()(),o(43,"p"),a(44,"Vous progressez \xE0 votre rythme, avec un suivi renforc\xE9."),r(),o(45,"p"),a(46," \u2705 Tout ce qui est inclus dans l\u2019Offre D\xE9couverte"),m(47,"br"),a(48," \u2705 2 cours individuels d\u20191h par mois"),m(49,"br"),a(50," \u2705 Feedback personnalis\xE9 sur un exercice ou enregistrement chaque mois"),m(51,"br"),a(52," \u2705 Un plan d\u2019action mensuel pour booster votre progression"),m(53,"br"),r()(),o(54,"div",6)(55,"p",7),a(56,"169\u20AC/mois"),r()()()(),o(57,"swiper-slide")(58,"div",1)(59,"div",2)(60,"h2",3),a(61,"Acc\xE9l\xE9r\xE9"),r(),o(62,"p",4),a(63," Pour aller au bout de votre potentiel "),r()(),o(64,"div",5)(65,"p")(66,"b"),a(67,"Le nec plus ultra."),r()(),o(68,"p"),a(69," Coaching individuel intensif + suivi avanc\xE9 pour ceux qui veulent transformer leur anglais. "),r(),o(70,"p"),a(71," \u2705 Tout ce qui est inclus dans l\u2019Offre Standard"),m(72,"br"),a(73," \u2705 1 cours individuel d\u20191h par semaine (4\u20136 par mois)"),m(74,"br"),a(75," \u2705 Feedback d\xE9taill\xE9 apr\xE8s chaque session (oral + notes cl\xE9s)"),m(76,"br"),a(77," \u2705 Priorit\xE9 dans la prise de rendez-vous"),m(78,"br"),a(79," \u2705 Accompagnement mindset et organisation si besoin"),m(80,"br"),r()(),o(81,"div",6)(82,"p",7),a(83,"279\u20AC/mois"),r()()()()()),n&2&&(z(31),L("icon",s.faStar))},dependencies:[U,V],styles:[".color-primary[_ngcontent-%COMP%]{color:#263d9a}.color-secondary[_ngcontent-%COMP%]{color:#ff4d3d}.color-light[_ngcontent-%COMP%]{color:#f5f5f5}.color-dark[_ngcontent-%COMP%]{color:#2e2e2e}.card.recommended[_ngcontent-%COMP%]{border:2px solid #263d9a}.card.recommended[_ngcontent-%COMP%]   .recommended-label[_ngcontent-%COMP%]{background-color:#263d9a;color:#f5f5f5;border-radius:0 0 0 10px}"]})}}return c})();var C3=(()=>{class c{constructor(){this.faComments=o3,this.faGlobe=f3,this.faUsers=r3,this.faCommentDots=u3,this.faEarthAmericas=h3,this.faArrowsRotate=m3,this.faFaceSmile=g3,this.faStar=s1,this.faEnvelope=p3,this.faqIsCollapsed=[!1,!0,!0,!0,!0,!0]}static{this.\u0275fac=function(n){return new(n||c)}}static{this.\u0275cmp=y({type:c,selectors:[["app-root"]],standalone:!0,features:[x],decls:242,vars:25,consts:[[1,"section-1","d-flex","justify-content-center","align-items-center"],[1,"me-5","fade-in-from-left"],[1,"color-primary"],[1,"color-dark","fs-4"],["href","https://calendly.com/nicolas-filizzola-english/seance-de-decouverte","target","_blank",1,"button","button-primary","mt-2","sm-hidden"],["src","../assets/img/section-1.png","alt","Une photographie de Nicolas Filizzola, fondateur de Parlons Anglais !",1,"image-fade","fade-in-from-right","animation-delay-1"],["href","https://calendly.com/nicolas-filizzola-english/seance-de-decouverte","target","_blank",1,"button","button-primary","mt-2","sm-only","text-center"],["id","s2",1,"section-2"],[1,"text-center","color-dark","mt-4","mt-md-0","fs-3"],[1,"mt-4"],[1,"mt-4","text-center","color-dark","fs-4"],[1,"color-secondary"],[1,"d-flex","flex-column","flex-md-row","justify-content-between","mt-0","mt-md-5"],[1,"minicard"],["size","3x",3,"icon"],[1,"mt-2","mb-0"],["src","../assets/img/france-flag.svg","alt","Drapeau fran\xE7ais"],[1,"mb-0"],[1,"mb-0","mt-1"],[1,"minicard","mb-4","mb-md-0"],["id","s3",1,"section-3","d-flex","justify-content-between","align-items-center","flex-column","flex-md-row"],["src","../assets/img/section-3.jpg","alt","Nicolas en train de faire un cours",1,"sm-only","mobile"],[1,"mt-4","mt-md-0"],[1,"mb-3","fs-2"],[1,"text-decoration-underline"],[1,"d-flex","my-3","align-items-center"],["size","2x",1,"me-3",3,"icon"],["src","../assets/img/section-3.jpg","alt","Nicolas en train de faire un cours",1,"sm-hidden","desktop","ms-0","ms-md-3"],["id","s4",1,"section-4","d-flex","flex-column","align-items-center"],[1,"mb-4","fs-2"],["src","../assets/img/section-4.png","alt","Portrait de Nicolas",1,"mb-4"],["id","s5",1,"section-5"],[1,"fs-2"],[1,"sm-only"],[1,"d-flex","mt-4","sm-hidden"],[1,"card","w-100"],[1,"card-header"],[1,"card-title"],[1,"card-subtitle","text-muted"],[1,"card-body"],[1,"card-footer"],[1,"fs-4"],[1,"card","w-100","mx-4","position-relative","recommended"],[1,"position-absolute","top-0","end-0","recommended-label","py-1","px-2"],[1,"me-1",3,"icon"],[1,"d-flex","mt-3","justify-content-center"],["href","https://calendly.com/nicolas-filizzola-english/seance-de-decouverte","target","_blank",1,"button","button-primary","text-center"],["id","s6",1,"section-6"],["slides-per-view","1","speed","500","loop","true","navigation","true","pagination","true"],[1,"px-5","pb-5","pt-3","pt-md-0"],[3,"author"],[3,"author","imgSrc"],[1,"text-center","color-light"],["href","https://www.superprof.fr/prof-polyglotte-experience-donne-cours-conversation-anglais.html","target","_blank",1,"color-light","fw-light"],["id","s7",1,"section-7"],[3,"isCollapsed","question"],[3,"question"],[1,"section-8"],[1,"d-flex","flex-column","flex-md-row","justify-content-between","align-items-center"],[1,"text-center","text-md-start","my-3","my-md-0","fs-2"],["href","https://calendly.com/nicolas-filizzola-english/seance-de-decouverte","target","_blank",1,"button","button-secondary"],[1,"fs-5"],[1,"me-2",3,"icon"],[1,"py-3","d-flex","align-items-center","justify-content-center",2,"background-color","grey"],[1,"text-muted"]],template:function(n,s){n&1&&(m(0,"app-nav"),o(1,"section",0)(2,"div",1)(3,"h1",2),a(4," Apprendre l\u2019anglais comme je l\u2019ai appris : "),o(5,"b"),a(6,"en immersion totale."),r()(),o(7,"h2",3),a(8," Prof polyglotte, j\u2019ai appris le fran\xE7ais sans cours \u2014 maintenant, je vous montre comment faire pareil en anglais. "),r(),o(9,"a",4),a(10," R\xE9server une session de d\xE9couverte gratuite "),r()(),m(11,"img",5),o(12,"a",6),a(13," R\xE9server une session de d\xE9couverte gratuite "),r()(),o(14,"section",7)(15,"h1",8),a(16," Vous avez pris des cours, appris la grammaire, pass\xE9 des heures sur des applis\u2026 et pourtant vous n\u2019osez toujours pas parler ? "),r(),m(17,"hr",9),o(18,"h2",10),a(19," Chez Parlons Anglais, on fait le contraire : On pratique, on parle, on se trompe, on recommence \u2014 "),o(20,"span",11)(21,"b"),a(22,"comme les natifs."),r()()(),o(23,"div",12)(24,"div",13),m(25,"fa-icon",14),o(26,"p",15),a(27,"Cours 100 % conversationnels"),r()(),o(28,"div",13),m(29,"img",16),o(30,"p",17),a(31," Pour francophones, par un prof qui conna\xEEt vos blocages "),r()(),o(32,"div",13),m(33,"fa-icon",14),o(34,"p",18),a(35," Enti\xE8rement en ligne : pratique, flexible, accessible partout "),r()(),o(36,"div",19),m(37,"fa-icon",14),o(38,"p",15),a(39,"+100 \xE9l\xE8ves accompagn\xE9s avec succ\xE8s depuis 2018"),r()()()(),o(40,"section",20),m(41,"img",21),o(42,"div",22)(43,"h1",23),a(44,"Notre m\xE9thode ? Moins de r\xE8gles, plus de parole."),r(),o(45,"p"),a(46," En arrivant en France, je parlais \xE0 peine la langue. J\u2019ai \xE9t\xE9 plong\xE9 en internat, sans traducteur, sans b\xE9quille\u2026 "),r(),o(47,"p"),a(48," Un an plus tard, je parlais fran\xE7ais "),o(49,"span",24),a(50,"comme un natif."),r()(),o(51,"p"),a(52,"Cette m\xE9thode, je l\u2019ai adapt\xE9e pour vous :"),r(),o(53,"p",25),m(54,"fa-icon",26),a(55,"Conversations r\xE9elles et engageantes "),r(),o(56,"p",25),m(57,"fa-icon",26),a(58,"Vocabulaire utile, naturel, vivant "),r(),o(59,"p",25),m(60,"fa-icon",26),a(61,"R\xE9p\xE9tition espac\xE9e + techniques d\u2019input massif "),r(),o(62,"p",25),m(63,"fa-icon",26),a(64,"Feedback personnalis\xE9 et bienveillant "),r(),o(65,"p",25),m(66,"fa-icon",26),a(67,"Adaptation \xE0 votre niveau et vos objectifs "),r()(),m(68,"img",27),r(),o(69,"section",28)(70,"h1",29),a(71," Moi, c\u2019est Nicolas. Prof d\u2019anglais, polyglotte\u2026 et ancien \xE9l\xE8ve gal\xE9rien. "),r(),m(72,"img",30),o(73,"p"),a(74," Je parle "),o(75,"span",24),a(76,"4 langues couramment"),r(),a(77," (fran\xE7ais, anglais, espagnol, italien). En 2017, j\u2019ai \xE9tudi\xE9 \xE0 Chicago (niveau C2), avant d\u2019enseigner dans des instituts de langues en pr\xE9sentiel et en ligne. "),r(),o(78,"p"),a(79," Depuis 6 ans, j\u2019aide des francophones \xE0 transformer leur anglais, avec une m\xE9thode simple et fun bas\xE9e sur la conversation. "),r(),o(80,"p")(81,"b",11),a(82,"Pourquoi \xE7a marche ?"),r(),a(83," Parce que je sais ce que c\u2019est que d\u2019apprendre une langue dans la vraie vie. "),r()(),o(84,"section",31)(85,"h1",32),a(86,"Des cours adapt\xE9s \xE0 vous. Pas l\u2019inverse."),r(),o(87,"p"),a(88," Que vous cherchiez \xE0 prendre confiance, \xE0 pr\xE9parer un test, ou \xE0 passer un cap d\xE9cisif \xE0 l\u2019oral, il y a une offre pour vous. "),m(89,"br"),a(90," Et si vous h\xE9sitez ? On en parle ensemble. "),r(),m(91,"app-mobile-pricing",33),o(92,"div",34)(93,"div",35)(94,"div",36)(95,"h2",37),a(96,"D\xE9couverte"),r(),o(97,"p",38),a(98," Pour tester, progresser, \xE9changer "),r()(),o(99,"div",39)(100,"p")(101,"b"),a(102,"Id\xE9al pour d\xE9buter en douceur sans se ruiner."),r()(),o(103,"p"),a(104," Un accompagnement collectif accessible, avec du suivi et des ressources solides. "),r(),o(105,"p"),a(106," \u2705 1 cours en petit groupe par semaine "),m(107,"br"),a(108," \u2705 1 suivi individuel de 20 min / mois "),m(109,"br"),a(110," \u2705 Acc\xE8s \xE0 des supports exclusifs (PDF, vid\xE9os, audios) "),m(111,"br"),a(112," \u2705 Conseils de progression personnalis\xE9s "),m(113,"br"),a(114," \u2705 Acc\xE8s \xE0 l\u2019espace communaut\xE9 "),m(115,"br"),r()(),o(116,"div",40)(117,"p",41),a(118,"69\u20AC/mois"),r()()(),o(119,"div",42)(120,"div",43),m(121,"fa-icon",44),o(122,"small"),a(123,"Recommand\xE9"),r()(),o(124,"div",36)(125,"h2",37),a(126,"Standard"),r(),o(127,"p",38),a(128," Pour ceux qui veulent du vrai sur-mesure "),r()(),o(129,"div",39)(130,"p")(131,"b"),a(132," Un \xE9quilibre entre structure collective et accompagnement personnel. "),r()(),o(133,"p"),a(134,"Vous progressez \xE0 votre rythme, avec un suivi renforc\xE9."),r(),o(135,"p"),a(136," \u2705 Tout ce qui est inclus dans l\u2019Offre D\xE9couverte"),m(137,"br"),a(138," \u2705 2 cours individuels d\u20191h par mois"),m(139,"br"),a(140," \u2705 Feedback personnalis\xE9 sur un exercice ou enregistrement chaque mois"),m(141,"br"),a(142," \u2705 Un plan d\u2019action mensuel pour booster votre progression"),m(143,"br"),r()(),o(144,"div",40)(145,"p",41),a(146,"169\u20AC/mois"),r()()(),o(147,"div",35)(148,"div",36)(149,"h2",37),a(150,"Acc\xE9l\xE9r\xE9"),r(),o(151,"p",38),a(152," Pour aller au bout de votre potentiel "),r()(),o(153,"div",39)(154,"p")(155,"b"),a(156,"Le nec plus ultra."),r()(),o(157,"p"),a(158," Coaching individuel intensif + suivi avanc\xE9 pour ceux qui veulent transformer leur anglais. "),r(),o(159,"p"),a(160," \u2705 Tout ce qui est inclus dans l\u2019Offre Standard"),m(161,"br"),a(162," \u2705 1 cours individuel d\u20191h par semaine (4\u20136 par mois)"),m(163,"br"),a(164," \u2705 Feedback d\xE9taill\xE9 apr\xE8s chaque session (oral + notes cl\xE9s)"),m(165,"br"),a(166," \u2705 Priorit\xE9 dans la prise de rendez-vous"),m(167,"br"),a(168," \u2705 Accompagnement mindset et organisation si besoin"),m(169,"br"),r()(),o(170,"div",40)(171,"p",41),a(172,"279\u20AC/mois"),r()()()(),o(173,"div",45)(174,"a",46),a(175," R\xE9server un premier cours gratuit "),r()()(),o(176,"section",47)(177,"h1",32),a(178,"Quelques t\xE9moignages..."),r(),o(179,"swiper-container",48)(180,"swiper-slide",49)(181,"app-review-item",50),a(182," Le meilleur professeur d\u2019anglais que j\u2019ai rencontr\xE9 ! Je n\u2019aimais pas les cours d\u2019anglais, et Nicolas m\u2019a appris \xE0 aimer cette langue, \xE0 progresser, et \xE0 l\u2019int\xE9grer dans mon quotidien. Il sait s\u2019adapter en fonction de votre niveau et de vos besoins. Merci encore, Nicolas, et \xE0 tr\xE8s bient\xF4t "),r()(),o(183,"swiper-slide",49)(184,"app-review-item",51),a(185," Nicolas est un super prof: parfait pour progresser en discussion, apprendre du nouveau vocabulaire et progresser en grammaire. Le tout avec une approche p\xE9dagogique positive. Je recommande "),r()(),o(186,"swiper-slide",49)(187,"app-review-item",50),a(188," Tr\xE8s bon professeur et tr\xE8s sympathique. Il cible rapidement les \xE9l\xE9ments sur lesquels vous avez des difficult\xE9s et propose des exercices pertinents afin de vous am\xE9liorer. Il s\\'adapte parfaitement \xE0 vos besoins (court terme/moyen terme/long terme) ce qui est un vrai plus. Cela laisse pr\xE9sager une tr\xE8s bonne progression pour ma part. Merci \xE0 vous. "),r()(),o(189,"swiper-slide",49)(190,"app-review-item",50),a(191," En quelques conseils, j\u2019ai valid\xE9 mon examen !! Une bonne strat\xE9gie pour analyser les questions et pouvoir y r\xE9pondre !! Merci encore "),r()()(),o(192,"p",52)(193,"a",53),a(194,"Source: Superprof"),r()()(),o(195,"section",54)(196,"h1"),a(197,"Foire aux questions (FAQ)"),r(),o(198,"app-faq-item",55),a(199," Absolument. Les cours sont con\xE7us sur-mesure. Que vous soyez grand d\xE9butant, interm\xE9diaire ou d\xE9j\xE0 \xE0 l\u2019aise mais en qu\xEAte de fluidit\xE9, nous nous adaptons \xE0 votre niveau, vos objectifs et votre rythme. "),r(),o(200,"app-faq-item",56),a(201," Non ! On peut commencer de z\xE9ro. Gr\xE2ce \xE0 la m\xE9thode immersive, vous serez surpris de tout ce que vous comprenez et retenez, m\xEAme sans passer par le fran\xE7ais. "),r(),o(202,"app-faq-item",56),a(203," Oui, et m\xEAme plus qu\u2019en pr\xE9sentiel parfois. On se voit en visio, avec des outils interactifs, des supports partag\xE9s, des activit\xE9s dynamiques \u2014 tout est pens\xE9 pour garder le contact humain et maximiser l\u2019apprentissage, sans contrainte de d\xE9placement. "),r(),o(204,"app-faq-item",56),a(205," Chaque apprenant est diff\xE9rent, mais la plupart de mes \xE9l\xE8ves remarquent un vrai changement dans leur aisance orale d\xE8s les premi\xE8res semaines. Le plus important, c\u2019est la r\xE9gularit\xE9 et l\u2019engagement. "),r(),o(206,"app-faq-item",56),a(207," Oui\u2026 mais pas comme \xE0 l\u2019\xE9cole. On l\u2019aborde \xE0 travers des situations r\xE9elles, de fa\xE7on contextuelle, pour que \xE7a devienne un automatisme, pas un casse-t\xEAte. "),r(),o(208,"app-faq-item",56),a(209," \u{1F449} Cours individuels pour un accompagnement personnalis\xE9"),m(210,"br"),a(211," \u{1F449} Cours en petit groupe pour l\u2019\xE9mulation collective"),m(212,"br"),a(213," \u{1F449} Pr\xE9paration aux tests (TOEIC, TOEFL, IELTS)"),m(214,"br"),a(215," \u{1F449} Acc\xE8s \xE0 des supports exclusifs en compl\xE9ment des sessions"),m(216,"br"),a(217," \u{1F449} Suivi par une \xE9quipe p\xE9dagogique exp\xE9riment\xE9e "),r(),o(218,"app-faq-item",56),a(219," On commence souvent par une conversation libre (\xE9chauffement), suivie d\u2019exercices cibl\xE9s selon vos besoins. On travaille l\u2019\xE9coute, la parole, la fluidit\xE9\u2026 tout en s\u2019amusant. Pas de cours rigides, mais des \xE9changes vivants et utiles. "),r(),o(220,"app-faq-item",56),a(221," Oui, tant que c\u2019est pr\xE9venu au minimum 24h \xE0 l\u2019avance. La flexibilit\xE9, c\u2019est aussi \xE7a, l\u2019avantage des cours en ligne. "),r(),o(222,"app-faq-item",56),a(223," Bien s\xFBr ! Une "),o(224,"span",24),a(225,"session d\xE9couverte gratuite"),r(),a(226," est propos\xE9e pour qu\u2019on fasse connaissance, qu\u2019on \xE9value votre niveau et qu\u2019on d\xE9finisse ensemble vos objectifs. "),r()(),o(227,"section",57)(228,"div",58)(229,"h1",59),a(230," Pr\xEAt \xE0 parler anglais avec aisance ? "),r(),o(231,"a",60),a(232," R\xE9servez une session de d\xE9couverte gratuite "),r()(),m(233,"hr"),o(234,"h2",61),a(235,"Une question ? Contactez-nous"),r(),o(236,"p"),m(237,"fa-icon",62),a(238,"nicolas.filizzola.english@gmail.com "),r()(),o(239,"footer",63)(240,"span",64),a(241,"Tous droits r\xE9serv\xE9s \xA9 2025 Nicolas Filizzola"),r()()),n&2&&(z(25),L("icon",s.faComments),z(8),L("icon",s.faGlobe),z(4),L("icon",s.faUsers),z(17),L("icon",s.faCommentDots),z(3),L("icon",s.faEarthAmericas),z(3),L("icon",s.faArrowsRotate),z(3),L("icon",s.faFaceSmile),z(3),L("icon",s.faStar),z(55),L("icon",s.faStar),z(60),L("author","Kevin"),z(3),L("author","Sandrine Bourguignon")("imgSrc","../assets/img/section-6-sandrine.jpeg"),z(3),L("author","Ilhan Jean-Marie"),z(3),L("author","Mikael"),z(8),L("isCollapsed",!1)("question","Est-ce que c\u2019est adapt\xE9 \xE0 mon niveau ?"),z(2),L("question","Faut-il d\xE9j\xE0 parler un peu anglais pour commencer ?"),z(2),L("question","C\u2019est en ligne\u2026 mais est-ce vraiment efficace ?"),z(2),L("question","Combien de temps faut-il pour progresser ?"),z(2),L("question","Est-ce qu\u2019on fait de la grammaire ?"),z(2),L("question","Quels types de cours sont propos\xE9s ?"),z(10),L("question","Comment se d\xE9roule un cours typique ?"),z(2),L("question","Puis-je annuler ou d\xE9placer un cours ?"),z(2),L("question","Est-ce que je peux tester avant de m\u2019engager ?"),z(15),L("icon",s.faEnvelope))},dependencies:[b1,Z2,U,V,z3,L3,M3],styles:['@charset "UTF-8";.color-primary[_ngcontent-%COMP%]{color:#263d9a}.color-secondary[_ngcontent-%COMP%]{color:#ff4d3d}.color-light[_ngcontent-%COMP%]{color:#f5f5f5}.color-dark[_ngcontent-%COMP%]{color:#2e2e2e}*[_ngcontent-%COMP%]{font-family:Verdana,Geneva,Tahoma,sans-serif}section[_ngcontent-%COMP%]{position:relative;background-color:beige;padding:3rem;overflow-x:hidden}@media (max-width: 768px){section[_ngcontent-%COMP%]{padding:1rem}}section.section-1[_ngcontent-%COMP%]{background-image:url("./media/section-1-bg-DVKZSD6B.png");margin-top:82px;height:calc(100vh - 90px);overflow:hidden}section.section-1[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;background-color:#f5f5f5cc;pointer-events:none}@media (max-width: 768px){section.section-1[_ngcontent-%COMP%]{margin-top:82px;height:calc(100vh - 82px);flex-direction:column}section.section-1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;position:absolute;bottom:0;left:0;right:0;margin:1rem;font-size:x-large}section.section-1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:75%}}section.section-2[_ngcontent-%COMP%]{background-color:#ffecea!important}section.section-2[_ngcontent-%COMP%]   .minicard[_ngcontent-%COMP%]{border-radius:1rem;border:1px solid #ff4d3d;background-color:#f0f4ff;display:flex;flex-direction:column;align-items:center;justify-content:center;width:275px;padding:1.5rem;text-align:center;transition:.3s}section.section-2[_ngcontent-%COMP%]   .minicard[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:60px}section.section-2[_ngcontent-%COMP%]   .minicard[_ngcontent-%COMP%]:hover{background-color:#d7e1ff;box-shadow:0 0 10px #0000001a}@media (max-width: 768px){section.section-2[_ngcontent-%COMP%]   .minicard[_ngcontent-%COMP%]{width:100%;margin-top:1rem}section.section-2[_ngcontent-%COMP%]   .minicard[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:large}}section.section-3[_ngcontent-%COMP%]{background-image:url("./media/section-3-bg-TUX5U2DA.jpg");color:#ffecea}section.section-3[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;background-color:#263d9acc;pointer-events:none}section.section-3[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{z-index:1}section.section-3[_ngcontent-%COMP%]   img.desktop[_ngcontent-%COMP%]{height:calc(100vh - 90px);border-radius:1rem}section.section-3[_ngcontent-%COMP%]   img.mobile[_ngcontent-%COMP%]{width:100vw;height:450px;object-fit:cover;object-position:bottom}@media (max-width: 768px){section.section-3[_ngcontent-%COMP%]{padding-top:0}}section.section-4[_ngcontent-%COMP%]{text-align:center;color:#2e2e2e;background-color:#f0f4ff}section.section-4[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:100%;width:200px;border:3px solid #ff4d3d}section.section-5[_ngcontent-%COMP%]{background-color:#ffecea;border-top:10px solid #ff4d3d}section.section-5[_ngcontent-%COMP%]   .card.recommended[_ngcontent-%COMP%]{border:2px solid #263d9a}section.section-5[_ngcontent-%COMP%]   .card.recommended[_ngcontent-%COMP%]   .recommended-label[_ngcontent-%COMP%]{background-color:#263d9a;color:#f5f5f5;border-radius:0 0 0 10px}section.section-6[_ngcontent-%COMP%]{background-color:#ff4d3d;color:#f5f5f5}section.section-7[_ngcontent-%COMP%]{background-color:#f0f4ff;color:#2e2e2e}section.section-8[_ngcontent-%COMP%]{background-color:#263d9a;color:#f5f5f5}swiper-container[_ngcontent-%COMP%]{--swiper-pagination-color: #263d9a;--swiper-pagination-bullet-inactive-color: #263d9a;--swiper-pagination-bullet-inactive-opacity: .35;--swiper-navigation-color: #263d9a}@media (max-width: 768px){.sm-hidden[_ngcontent-%COMP%]{display:none!important}}@media (min-width: 1024px){.sm-only[_ngcontent-%COMP%]{display:none!important}}button.button[_ngcontent-%COMP%], a.button[_ngcontent-%COMP%]{text-decoration:none;border:none;background:none;font-size:large;padding:1rem;border-radius:1rem;cursor:pointer;transition:.3s;display:inline-block}button.button-primary[_ngcontent-%COMP%], a.button-primary[_ngcontent-%COMP%]{background-color:#263d9a;color:#f5f5f5}button.button-primary[_ngcontent-%COMP%]:hover, a.button-primary[_ngcontent-%COMP%]:hover{background-color:#17255d}button.button-secondary[_ngcontent-%COMP%], a.button-secondary[_ngcontent-%COMP%]{background-color:#ff4d3d;color:#f5f5f5}button.button-secondary[_ngcontent-%COMP%]:hover, a.button-secondary[_ngcontent-%COMP%]:hover{background-color:#bd1000}@media (max-width: 768px){h1[_ngcontent-%COMP%]{font-size:xx-large}}@keyframes _ngcontent-%COMP%_slideFadeInFromRight{0%{transform:translate(50px);opacity:0}to{transform:translate(0);opacity:1}}@keyframes _ngcontent-%COMP%_slideFadeInFromLeft{0%{transform:translate(-50px);opacity:0}to{transform:translate(0);opacity:1}}.fade-in-from-right[_ngcontent-%COMP%]{opacity:0;transform:translate(50px);animation:_ngcontent-%COMP%_slideFadeInFromRight 1s ease-out forwards}.fade-in-from-left[_ngcontent-%COMP%]{opacity:0;transform:translate(50px);animation:_ngcontent-%COMP%_slideFadeInFromLeft 1s ease-out forwards}.animation-delay-1[_ngcontent-%COMP%]{animation-delay:1s}.image-fade[_ngcontent-%COMP%]{mask-image:linear-gradient(to top,transparent 0%,black 20%,black 100%);-webkit-mask-image:linear-gradient(to top,transparent 0%,black 20%,black 100%)}']})}}return c})();var _3=[];var b3={providers:[J2(_3),Q2()]};var n8={providers:[Y2()]},v3=j2(b3,n8);var s8=()=>$2(C3,v3),Nc=s8;export{Nc as a};
