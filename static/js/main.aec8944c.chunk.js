(this["webpackJsonpotk-story"]=this["webpackJsonpotk-story"]||[]).push([[0],{106:function(e,n,t){e.exports=t.p+"static/media/logo.6ad731b9.png"},118:function(e,n,t){e.exports=t(176)},176:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(8),c=t.n(o),i=t(93),l=t(34),u=t(12),d="".concat("/otk-story","/theme"),s={default:localStorage.getItem("APP_THEME")||"light",themeMap:{light:"".concat(d,"/light.theme.css"),dark:"".concat(d,"/dark.theme.css")}},m=function(e){var n=document.createElement("link");return Object.keys(e).forEach((function(t){"onload"===t&&(n.onload=e.onload),n[t]=e[t]})),n},f=function(e){var n=document.head.querySelector("title");document.head.insertBefore(e,n)},p=Object(r.createContext)();var h=function(e){var n=e.children,t=Object(r.useState)("loading"),o=Object(l.a)(t,2),c=o[0],i=o[1],d=Object(r.useState)(null),h=Object(l.a)(d,2),g=h[0],b=h[1];Object(r.useEffect)((function(){Object.keys(s.themeMap).forEach((function(e){var n=m({rel:"prefetch",as:"style",href:s.themeMap[e],id:"".concat(e,"-theme-prefetch")});f(n)}))}),[]),Object(r.useEffect)((function(){v(s.default)}),[]),Object(r.useEffect)((function(){"loaded"===c&&setTimeout((function(){document.body.className="theme-loaded"}),100)}),[c]);var v=function(e){if(e!==g){var n=document.getElementById("current-theme");n&&n.remove(),document.body.className="theme-loading",i("loading");var t=m({type:"text/css",rel:"stylesheet",id:"current-theme",href:s.themeMap[e],onload:function(){return i("loaded")}});localStorage.setItem("APP_THEME",e),f(t),b(e)}};return a.a.createElement(p.Provider,{value:{status:c,themes:Object.keys(s.themeMap).reduce((function(e,n){return e[n]=n,e}),{}),currentTheme:g,switchTheme:v}},a.a.createElement(u.a,{theme:{mode:g}},n))},g=t(45),b=t(35),v=t.n(b),E=Object(r.createContext)(),x={date:v()(),loading:!1,error:!1,stories:[],story:[],currentImage:{}};function O(e,n){var t=n.type,r=n.payload;switch(t){case"DATE_CHANGE":return Object(g.a)({},e,{date:r});case"FETCHING":return Object(g.a)({},e,{loading:!0,error:!1});case"SET_STORIES":return Object(g.a)({},e,{loading:!1,stories:r});case"FETCH_FAILED":return Object(g.a)({},e,{loading:!1,error:!0});case"ADD_STORY":var a=e.stories.find((function(e){return e.date===r.date})).story,o=a.findIndex((function(e){return e.Id===r.id}));return Object(g.a)({},e,{story:a,currentImage:Object(g.a)({},a[o],{idx:o,isFirstImage:0===o,isLastImage:o===a.length-1})});case"REMOVE_STORY":return Object(g.a)({},e,{story:[],currentImage:{}});case"CHANGE_CURRENT_IMAGE":var c=e.currentImage.idx+r;return Object(g.a)({},e,{currentImage:Object(g.a)({},e.story[c],{idx:c,isFirstImage:0===c,isLastImage:c===e.story.length-1})});default:return e}}function y(){return Object(r.useContext)(E)}var k=function(e){var n=e.children,t=Object(r.useReducer)(O,x),o=Object(l.a)(t,2),c=o[0],i=o[1];return a.a.createElement(E.Provider,{value:{state:c,dispatch:i}},n)},j=t(15);function w(){var e=Object(j.a)(["\n    body {\n      font-family: 'IBM Plex Sans', sans-serif;\n      background: ",";\n      color: ",";\n      transition: opacity 0.2s;\n\n      &.theme-loading {\n        display: none;\n      }\n      &.theme-loaded {\n        display: block;\n      }\n    }\n  "]);return w=function(){return e},e}function C(){var e=Object(j.a)(["\n  ","\n\n  .ant-back-top {\n    right: 30px;\n    bottom: 30px;\n  }\n\n  .ant-back-top-icon {\n    font-size: 20px;\n  }\n\n  .ant-modal-mask {\n    background-color: rgba(0,0,0,.7);\n  }\n\n  .ant-modal-body {\n    padding: 0;\n  }\n\n  .ant-modal-body > div:not(.loaded) {\n    height: 45rem;\n  }\n\n  .ant-switch-checked {\n    background-color: #25c6c6;\n  }\n\n  ::-webkit-scrollbar {\n    width: 13px;\n    height: 10px;\n    background: transparent;\n  }\n\n  ::-webkit-scrollbar-button {\n    width: 0;\n    height: 0;\n    display: none;\n  }\n\n  ::-webkit-scrollbar-corner {\n    background: transparent;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    height: 6px;\n    border: 2px solid transparent;\n    background-clip: padding-box;\n    border-radius: 7px;\n    background-color: ",";\n  }\n"]);return C=function(){return e},e}var I=Object(u.b)(C(),(function(e){var n=e.theme;return Object(u.c)(w(),"dark"===n.mode?"#18191a":"#eef0f1","dark"===n.mode?"#ffffff":"#000000")}),(function(e){return"dark"===e.theme.mode?"rgba(255, 255, 255, 0.6)":"rgba(0,0,0,.2)"})),N=t(183),T=t(185);function S(){var e=Object(j.a)(["\n  padding: 1rem 50px;\n  font-size: 1rem;\n  letter-spacing: 0.5px;\n\n  a:hover {\n    text-decoration: underline;\n  }\n"]);return S=function(){return e},e}function _(){var e=Object(j.a)(["\n  max-width: 1920px;\n  width: 100%;\n  padding: 0 50px;\n  margin: 50px auto 0 auto;\n  flex-grow: 1;\n"]);return _=function(){return e},e}function A(){var e=Object(j.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  overflow: hidden;\n\n  .logo {\n    width: 150px;\n\n    img {\n      width: 100%;\n      margin-bottom: 4px;\n    }\n  }\n"]);return A=function(){return e},e}function M(){var e=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n"]);return M=function(){return e},e}var Y=Object(u.d)(T.a)(M()),D=Object(u.d)(T.a.Header)(A()),R=Object(u.d)(T.a.Content)(_()),z=Object(u.d)(T.a.Footer)(S()),F=t(186),Z=t(106),H=t.n(Z);var L=function(){var e=Object(r.useContext)(p),n=e.currentTheme,t=e.switchTheme,o=e.status;return a.a.createElement(D,null,a.a.createElement("a",{className:"logo",href:"/otk-story"},a.a.createElement("img",{src:H.a,alt:"logo"})),a.a.createElement(F.a,{disabled:"loading"===o,checkedChildren:"light",unCheckedChildren:"dark",checked:"light"===n,onChange:function(){t("light"===n?"dark":"light")}}))};var P=function(e){var n=e.children;return a.a.createElement(R,null,n)};var G=function(){return a.a.createElement(z,null,"Created by"," ",a.a.createElement("a",{href:"https://www.facebook.com/Nanoooooooooooooooooooooooooooooooooooooooooooooox",target:"_blank",rel:"noopener noreferrer"},"Nano")," ","\u2764\ufe0f"," ",a.a.createElement("a",{href:"https://github.com/Nagai-Nano/otk-story",target:"_blank",rel:"noopener noreferrer"},"Otk-story"))},U=t(177),X=t(53),B=t(187),q=t(188);function J(){var e=Object(j.a)(["\n  display: flex;\n  justify-content: flex-end;\n\n  button {\n    margin-left: 6px;\n\n    span {\n      font-size: 15px !important;\n    }\n  }\n\n  .ant-picker {\n    width: 16rem;\n\n    @media (max-width: 767.98px) {\n      flex-grow: 1;\n    }\n  }\n"]);return J=function(){return e},e}var V=u.d.div(J());var K=function(){var e=Object(r.useState)(v()()),n=Object(l.a)(e,2),t=n[0],o=n[1],c=y(),i=c.state,u=c.dispatch,d=function(e){return function(){var n=t.clone().add(e,"days");s(n)}},s=function(e){o(e),u({type:"DATE_CHANGE",payload:e})};return a.a.createElement(V,null,a.a.createElement(U.a,{size:"large",value:t,format:"DD/MM/YYYY",allowClear:!1,onChange:s,disabled:i.loading}),a.a.createElement(X.a,{size:"large",icon:a.a.createElement(B.a,null),loading:i.loading,disabled:i.loading,onClick:d(-7)}),a.a.createElement(X.a,{size:"large",icon:a.a.createElement(q.a,null),loading:i.loading,disabled:i.loading,onClick:d(7)}))},Q=t(69),W=t.n(Q),$=t(90),ee=t(182);function ne(){var e=Object(j.a)(["\n  margin-top: 25px;\n"]);return ne=function(){return e},e}var te=u.d.div(ne());function re(){var e=Object(j.a)(["\n  position: relative;\n  display: block;\n  height: 100%;\n  width: 100%;\n\n  .line {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    animation-duration: 1s;\n    border-left-width: calc(60px / 25);\n    border-top-width: calc(60px / 25);\n    border-left-color: #13c2c2;\n    border-left-style: solid;\n    border-top-style: solid;\n    border-top-color: transparent;\n\n    &:nth-child(1) {\n      animation: "," 1s linear infinite;\n      transform: rotateZ(120deg) rotateX(66deg) rotateZ(0deg);\n    }\n\n    &:nth-child(2) {\n      animation: "," 1s linear infinite;\n      transform: rotateZ(240deg) rotateX(66deg) rotateZ(0deg);\n    }\n\n    &:nth-child(3) {\n      animation: "," 1s linear infinite;\n      transform: rotateZ(360deg) rotateX(66deg) rotateZ(0deg);\n    }\n  }\n\n  .circle {\n    display: block;\n    position: absolute;\n    color: #13c2c2;\n    font-size: calc(60px * 0.24);\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n"]);return re=function(){return e},e}function ae(){var e=Object(j.a)(["\n  height: 60px;\n  width: 60px;\n  overflow: hidden;\n"]);return ae=function(){return e},e}function oe(){var e=Object(j.a)(["\n  width: 100%;\n  height: 50vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return oe=function(){return e},e}function ce(){var e=Object(j.a)(["\n  100% {\n    transform: rotateZ(360deg) rotateX(66deg) rotateZ(360deg);\n  }\n"]);return ce=function(){return e},e}function ie(){var e=Object(j.a)(["\n  100% {\n    transform: rotateZ(240deg) rotateX(66deg) rotateZ(360deg);\n  }\n"]);return ie=function(){return e},e}function le(){var e=Object(j.a)(["\n  100% {\n    transform: rotateZ(120deg) rotateX(66deg) rotateZ(360deg);\n  }\n"]);return le=function(){return e},e}var ue=Object(u.e)(le()),de=Object(u.e)(ie()),se=Object(u.e)(ce()),me=u.d.div(oe()),fe=u.d.div(ae()),pe=u.d.div(re(),ue,de,se);var he=function(){return a.a.createElement(me,null,a.a.createElement(fe,null,a.a.createElement(pe,null,a.a.createElement("div",{className:"line"}),a.a.createElement("div",{className:"line"}),a.a.createElement("div",{className:"line"}),a.a.createElement("div",{className:"circle"},"\u25cf"))))},ge=t(190),be=t(191),ve=t(192),Ee=t(180),xe=t(178);function Oe(){var e=Object(j.a)(["\n  grid-column: 1/-1;\n  text-align: center;\n  font-size: 1.2rem;\n  text-transform: uppercase;\n  color: ",";\n  padding: 1rem;\n  letter-spacing: 1px;\n"]);return Oe=function(){return e},e}function ye(){var e=Object(j.a)(["\n  border-radius: 4px;\n  background: transparent;\n  border-color: ",";\n  overflow: hidden;\n\n  &:hover .ant-card-cover img {\n    transform: scale(1.05);\n  }\n\n  .ant-card-body {\n    display: none;\n  }\n\n  .ant-card-cover {\n    height: 22rem;\n    overflow: hidden;\n  }\n\n  .ant-card-actions {\n    border-radius: 4px;\n    border-top: 0;\n    background: ",";\n\n    .anticon {\n      opacity: 1;\n      color: ",";\n\n      &:hover {\n        color: #13c2c2;\n      }\n    }\n\n    li:not(:last-child) {\n      border-right-color: ",";\n    }\n  }\n"]);return ye=function(){return e},e}function ke(){var e=Object(j.a)(["\n  font-size: 1.4rem;\n  font-weight: 500;\n  letter-spacing: 1px;\n  margin-left: 7px;\n"]);return ke=function(){return e},e}function je(){var e=Object(j.a)(["\n  margin-bottom: 25px;\n  border-radius: 4px;\n  box-shadow: 0 0 0 1px\n    ",";\n  border: none;\n\n  .ant-collapse-item,\n  .ant-collapse-header {\n    border-radius: 4px !important;\n    border-bottom: 0;\n  }\n\n  .ant-collapse-content {\n    border-top-color: ",";\n  }\n\n  .ant-collapse-content-box {\n    display: grid;\n    grid-template-columns: repeat(6, 1fr);\n    grid-gap: 1rem;\n\n    @media (max-width: 1499.98px) {\n      grid-template-columns: repeat(5, 1fr);\n    }\n\n    @media (max-width: 1199.98px) {\n      grid-template-columns: repeat(4, 1fr);\n    }\n\n    @media (max-width: 991.98px) {\n      grid-template-columns: repeat(3, 1fr);\n    }\n\n    @media (max-width: 767.98px) {\n      grid-template-columns: repeat(2, 1fr);\n    }\n\n    @media (max-width: 575.98px) {\n      grid-template-columns: 1fr;\n    }\n  }\n"]);return je=function(){return e},e}var we=Object(u.d)(Ee.a)(je(),(function(e){return"dark"===e.theme.mode?"rgba(0,0,0,.2)":"#08090a0d"}),(function(e){return"dark"===e.theme.mode?"#393a3b":"#08090a0d"})),Ce=u.d.div(ke()),Ie=Object(u.d)(xe.a)(ye(),(function(e){return"dark"===e.theme.mode?"#393a3b":"#f0f0f0"}),(function(e){return"dark"===e.theme.mode?"#242526":"#ffffff"}),(function(e){return"dark"===e.theme.mode?"#ffffffa6":"#8c8c8c"}),(function(e){return"dark"===e.theme.mode?"#ffffffa6":"#f0f0f0"})),Ne=u.d.div(Oe(),(function(e){return"dark"===e.theme.mode?"rgba(255,255,255,.4)":"rgba(0,0,0,.4)"})),Te=t(116),Se=t(181);function _e(){var e=Object(j.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: #f5222d;\n  font-size: 1.1rem;\n  letter-spacing: 0.2px;\n  background: ",";\n\n  .anticon-warning {\n    font-size: 2rem;\n    margin-bottom: 10px;\n  }\n"]);return _e=function(){return e},e}function Ae(){var e=Object(j.a)(["\n  height: 100%;\n\n  .ant-skeleton-header,\n  .ant-skeleton-avatar {\n    padding: 0;\n    height: 100%;\n    width: 100%;\n    border-radius: 4px;\n  }\n"]);return Ae=function(){return e},e}function Me(){var e=Object(j.a)(["\n  width: 100%;\n  height: 100%;\n\n  img {\n    width: 0;\n    height: 0;\n    object-fit: cover;\n    opacity: 0;\n    transition: 0.2s;\n    border-radius: 4px;\n  }\n\n  &.loaded img {\n    opacity: 1;\n    width: 100%;\n    height: 100%;\n  }\n"]);return Me=function(){return e},e}var Ye=u.d.div(Me()),De=Object(u.d)(Se.a)(Ae()),Re=u.d.div(_e(),(function(e){return"dark"===e.theme.mode?"rgba(255,255,255,.03)":"rgba(0,0,0,.03)"}));var ze=function(){return a.a.createElement(De,{avatar:{shape:"square"},active:!0,loading:!0,paragraph:!1,title:!1})},Fe=t(189);var Ze=function(){return a.a.createElement(Re,null,a.a.createElement(Fe.a,null),a.a.createElement("span",null,"Failed to load image"))};var He=function(e){var n=e.src,t=e.alt,o=e.onImageClick,c=Object(Te.a)(e,["src","alt","onImageClick"]),i=Object(r.useState)(!0),u=Object(l.a)(i,2),d=u[0],s=u[1],m=Object(r.useState)(!1),f=Object(l.a)(m,2),p=f[0],h=f[1],g=Object(r.useRef)();Object(r.useEffect)((function(){var e=document.createElement("img");e.src=n,e.onload=b,e.onerror=v}),[n]);var b=function(){g&&g.current&&(g.current.src=n,h(!1),s(!1),c.onImageLoad&&c.onImageLoad())},v=function(){h(!0),s(!1)};return a.a.createElement(Ye,{className:d||p?"":"loaded"},d&&a.a.createElement(ze,null),p&&a.a.createElement(Ze,null),!p&&a.a.createElement("img",Object.assign({},c,{alt:t,ref:g,onClick:d?void 0:o,style:{cursor:!o||d||p?"auto":"pointer"}})))};var Le=function(e){var n=e.date,t=e.story,r=y().dispatch,o=function(e){return function(){window.open("https://otakusan.net/Cosplay/PictureDetail/".concat(e),"_blank")}};return a.a.createElement(we,{defaultActiveKey:[n],expandIcon:function(e){var n=e.isActive;return a.a.createElement(ge.a,{rotate:n?90:0})}},a.a.createElement(we.Panel,{header:a.a.createElement(Ce,null,v()(n).format("DD/MM/YYYY")),key:n},t.length?t.map((function(e){var t,c,i=e.Id,l=e.ThumbUrl,u=e.Name,d=e.Url;return a.a.createElement(Ie,{key:i,hoverable:!0,cover:a.a.createElement(He,{src:l,alt:u,onImageClick:(c=i,function(){r({type:"ADD_STORY",payload:{id:c,date:n}})})}),actions:[a.a.createElement(be.a,{key:"file",onClick:o(i)}),a.a.createElement(ve.a,{key:"download",onClick:(t=d,function(){var e=document.createElement("a");e.href=t,e.target="_blank",e.click()})})]})})):a.a.createElement(Ne,null,"No images found")))};var Pe=function(){var e=y(),n=e.state,t=e.dispatch;Object(r.useEffect)((function(){c()}),[n.date]);var o=function(){var e=Object($.a)(W.a.mark((function e(n){var t,r;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://service.otakuscan.net/api/cosplayservice/Cosplaybydate","?date=").concat(n));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",{date:n,story:r});case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),c=function(){var e=Object($.a)(W.a.mark((function e(){var r,a,c,i;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=0,a=n.date.clone(),c=[],e.prev=3,t({type:"FETCHING"});do{c.push(o((l=r?1:0,a.subtract(l,"days").format("YYYY-MM-DD")))),r++}while(7>r);return e.next=8,Promise.all(c);case 8:i=e.sent,t({type:"SET_STORIES",payload:i}),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(3),t({type:"FETCH_FAILED"}),ee.a.destroy(),ee.a.error({message:"Error",description:"Something went wrong, please try again!"});case 17:case"end":return e.stop()}var l}),e,null,[[3,12]])})));return function(){return e.apply(this,arguments)}}();return n.error?null:n.loading?a.a.createElement(he,null):a.a.createElement(te,null,n.stories.map((function(e){return a.a.createElement(Le,Object.assign({key:e.date},e))})))},Ge=t(179),Ue=t(193),Xe=t(194),Be=t(195);function qe(){var e=Object(j.a)(["\n  position: fixed;\n  font-size: 1.3rem;\n  color: #fff;\n  width: 3rem;\n  height: 3rem;\n  z-index: 3090;\n  background: transparent;\n  line-height: 3rem;\n  text-align: center;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: 0.2s;\n\n  &:hover {\n    background: #fff;\n    color: #000;\n  }\n\n  &.close {\n    top: 10px;\n    right: 10px;\n  }\n\n  &.next {\n    right: 12px;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n\n  &.prev {\n    left: 12px;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n"]);return qe=function(){return e},e}var Je=u.d.div(qe());var Ve=function(){var e=Object(r.useState)(!1),n=Object(l.a)(e,2),t=n[0],o=n[1],c=Object(r.useState)(600),i=Object(l.a)(c,2),u=i[0],d=i[1],s=y(),m=s.state,f=s.dispatch,p=m.story,h=m.currentImage,g=h.Name,b=h.Url,v=h.isFirstImage,E=h.isLastImage,x=h.idx;Object(r.useEffect)((function(){return window.addEventListener("keydown",j),function(){return window.removeEventListener("keydown",j)}}),[p,b]),Object(r.useEffect)((function(){d(t?"auto":600)}),[t]);var O=function(){f({type:"REMOVE_STORY"}),o(!1)},k=function(e){return function(){d(600),f({type:"CHANGE_CURRENT_IMAGE",payload:e})}},j=function(e){var n=e.code;(p.length||b)&&("ArrowLeft"!==n||v||k(-1)(),"ArrowRight"!==n||E||k(1)())};return a.a.createElement(a.a.Fragment,null,!!p.length&&a.a.createElement(a.a.Fragment,null,a.a.createElement(Je,{className:"close",onClick:O},a.a.createElement(Ue.a,null)),!v&&a.a.createElement(Je,{className:"prev",onClick:k(-1)},a.a.createElement(Xe.a,null)),!E&&a.a.createElement(Je,{className:"next",onClick:k(1)},a.a.createElement(Be.a,null))),a.a.createElement(Ge.a,{closable:!1,visible:!!p.length,onCancel:O,centered:!0,destroyOnClose:!0,footer:null,width:u},!!b&&a.a.createElement(He,{key:x,src:b,alt:g,onImageLoad:function(){return d((function(e){return t?"auto":e}))},onImageClick:function(){return o((function(e){return!e}))}})))};var Ke=function(){return a.a.createElement(Y,null,a.a.createElement(L,null),a.a.createElement(P,null,a.a.createElement(K,null),a.a.createElement(Pe,null)),a.a.createElement(N.a,null),a.a.createElement(G,null),a.a.createElement(Ve,null))};i.a.initialize("UA-178421575-1"),i.a.pageview("/"),c.a.render(a.a.createElement(h,null,a.a.createElement(k,null,a.a.createElement(I,null),a.a.createElement(Ke,null))),document.getElementById("root"))}},[[118,1,2]]]);
//# sourceMappingURL=main.aec8944c.chunk.js.map