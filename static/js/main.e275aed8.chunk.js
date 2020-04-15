(this.webpackJsonpmagic=this.webpackJsonpmagic||[]).push([[0],{45:function(e,n,t){e.exports=t(57)},57:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(34),i=t.n(c),l=t(23),o=t(35),u=t(27),s=t(28),f=t(4),d=t(1),b=t(61),m=t(2);function p(){var e=Object(d.a)(["\n  display: block;\n  width: 100%;\n"]);return p=function(){return e},e}function h(){var e=Object(d.a)(["\n  display: block;\n  margin-top: 0.5rem;\n  padding: 0.5rem;\n  width: 100%;\n  height: 140px;\n\n  font-family: monospace;\n  word-break: break-all;\n  resize: none;\n"]);return h=function(){return e},e}function v(){var e=Object(d.a)(["\n  display: block;\n  margin-top: 0.5rem;\n  padding: 0.5rem;\n  width: 100%;\n"]);return v=function(){return e},e}function g(){var e=Object(d.a)(["\n  display: block;\n  margin-bottom: 2rem;\n"]);return g=function(){return e},e}function O(){var e=Object(d.a)(["\n  margin-bottom: 1rem;\n\n  font-weight: 900;\n  font-size: 2rem;\n"]);return O=function(){return e},e}function E(){var e=Object(d.a)(["\n  padding: 1rem;\n  max-width: 640px;\n"]);return E=function(){return e},e}function j(){var e=Object(d.a)(["\n  display: block;\n  width: 100%;\n  padding: 1rem;\n\n  border: 1px dotted ",";\n\n  font-size: 1rem;\n  background-color: white;\n  cursor: pointer;\n\n  &:hover {\n    background-color: ",";\n  }\n"]);return j=function(){return e},e}var x=m.b.button(j(),"#ccc","#f8f8f8"),y=m.b.div(E()),w=m.b.h2(O()),C=m.b.label(g()),S=m.b.input(v()),k=m.b.textarea(h()),D=m.b.div(p()),L=function(e){var n=e.label,t=e.placeholder,c=e.onSubmit,i=e.submitButtonLabel,l=e.readOnly,o=Object(a.useState)(""),u=Object(f.a)(o,2),s=u[0],d=u[1];return r.a.createElement(D,null,r.a.createElement(C,null,n,r.a.createElement(k,{placeholder:t,onChange:function(e){d(e.target.value)},value:s,readOnly:l})),c?r.a.createElement(x,{onClick:function(){c(JSON.parse(s))}},i||"Submit"):null)},A=function(e){var n=e.label,t=e.content;return r.a.createElement(D,null,r.a.createElement(C,null,n,r.a.createElement(k,{value:t,readOnly:!0})))};function P(){var e=Object(d.a)(["\n  &:not(:last-child) {\n    margin-right: 1rem;\n  }\n"]);return P=function(){return e},e}function N(){var e=Object(d.a)(["\n  display: flex;\n"]);return N=function(){return e},e}var R=m.b.div(N()),J=Object(m.b)(x)(P());function I(e){var n=e.label,t=e.placeholder,a=e.value,c=e.onChange;return r.a.createElement(C,null,n,r.a.createElement(S,{type:"text",value:a,placeholder:t,onChange:function(e){c(e.target.value)}}))}function z(e){var n=e.label,t=e.placeholder,a=e.value,c=e.onChange;return r.a.createElement(C,null,n,r.a.createElement(S,{type:"text",value:a,placeholder:t,onChange:function(e){console.log(e.target.value),c(e.target.value)}}))}var T=function(e){var n=e.addPlayer,t=Object(b.e)(),c=Object(a.useState)(""),i=Object(f.a)(c,2),l=i[0],o=i[1],u=Object(a.useState)(40),s=Object(f.a)(u,2),d=s[0],m=s[1];return r.a.createElement(y,null,r.a.createElement(w,null,"Add player"),r.a.createElement(I,{label:"Player name",placeholder:"Insert the player name",value:l,onChange:function(e){o(e)}}),r.a.createElement(z,{label:"Player initial life points",placeholder:"Insert the player initial life points",value:null===d?"":d.toString(),onChange:function(e){!function(e){var n=parseInt(e);Number.isNaN(n)||n<=0?m(null):m(n)}(e)}}),r.a.createElement(R,null,r.a.createElement(J,{onClick:function(){t.push("/i")}},"Cancel"),r.a.createElement(J,{onClick:function(){""!==l&&null!==d&&(n({uuid:"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var n=16*Math.random()|0;return("x"===e?n:3&n|8).toString(16)})),name:l,initialLifePoints:d}),t.push("/i"))}},"Add player")))};function B(){var e=Object(d.a)(["\n  padding: 0.25rem;\n  border-radius: 4px;\n  border: 1px solid ",";\n"]);return B=function(){return e},e}function F(){var e=Object(d.a)([""]);return F=function(){return e},e}function M(){var e=Object(d.a)(["\n  flex: 1;\n"]);return M=function(){return e},e}function V(){var e=Object(d.a)(["\n  display: flex;\n  padding: 1rem;\n"]);return V=function(){return e},e}function q(){var e=Object(d.a)(["\n  font-style: italic;\n  text-align: center;\n"]);return q=function(){return e},e}function G(){var e=Object(d.a)(["\n  height: auto;\n\n  ",":last-child {\n    margin-bottom: 0;\n  }\n"]);return G=function(){return e},e}function H(){var e=Object(d.a)(["\n  margin-bottom: 1rem;\n"]);return H=function(){return e},e}function K(){var e=Object(d.a)(["\n  flex: 1;\n"]);return K=function(){return e},e}function Q(){var e=Object(d.a)(["\n  margin-bottom: 1rem;\n\n  text-align: center;\n  font-weight: 900;\n  font-size: 2rem;\n"]);return Q=function(){return e},e}function U(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n\n  border-right: 1px dotted ",";\n"]);return U=function(){return e},e}var W,X=m.b.div(U(),"#ccc"),Y=m.b.h1(Q()),Z=m.b.div(K()),$=Object(m.b)(x)(H()),_=m.b.div(G(),$),ee=m.b.p(q()),ne=m.b.div(V()),te=m.b.span(M()),ae=m.b.div(F()),re=m.b.span(B(),"#ccc"),ce=function(e){var n=e.player;return r.a.createElement(ne,null,r.a.createElement(te,null,n.name),r.a.createElement(ae,null,r.a.createElement(re,null,n.initialLifePoints)))},ie=function(){return r.a.createElement(ee,null,"Start by adding some players")},le=function(e){var n=e.players,t=Object(b.e)();return r.a.createElement(X,null,r.a.createElement(Y,null,"magic"),r.a.createElement(Z,null,n.length?r.a.createElement(Z,null,n.map((function(e){return r.a.createElement(ce,{key:e.uuid,player:e})})),r.a.createElement($,null,"Manage life points")):r.a.createElement(ie,null)),r.a.createElement(_,null,r.a.createElement($,{onClick:function(){t.push("/i/add-player")}},"Add player"),r.a.createElement($,{onClick:function(){t.push("/i/add-device")}},"Add device")))},oe=t(10),ue=t.n(oe),se=t(20),fe=t(43),de=function(){var e=Object(se.a)(ue.a.mark((function e(){return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(fe.a)("magic-db",1,{upgrade:function(e){e.createObjectStore("magic-store")}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),be=function(){var e=Object(se.a)(ue.a.mark((function e(){var n,t;return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===W){e.next=2;break}return e.abrupt("return",W);case 2:return e.next=4,de();case 4:if(n=e.sent,t=n.transaction("magic-store","readwrite"),null===window.localStorage.getItem("firstTabRegistered")){e.next=10;break}return W=!1,e.abrupt("return",!1);case 10:return window.localStorage.setItem("firstTabRegistered","true"),W=!0,window.addEventListener("beforeunload",(function(){window.localStorage.removeItem("firstTabRegistered")})),e.next=15,t.done;case 15:return e.abrupt("return",!0);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),me=t(40),pe=t(29),he=t(17),ve=t(11),ge=t(42),Oe=function(e){Object(s.a)(t,e);var n=Object(u.a)(t);function t(){var e;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=n.call.apply(n,[this].concat(r))).outgoingDataChannels=[],e.next=function(n){Object(ge.a)(Object(ve.a)(t.prototype),"next",Object(he.a)(e)).call(Object(he.a)(e),n),e.outgoingDataChannels.map((function(e){return e.send(JSON.stringify(n))}))},e.addPlayer=function(n){var t=e.getValue();e.next(Object(pe.a)({},t,{players:[].concat(Object(me.a)(t.players),[n])}))},e.addOutgoingDataChannel=function(n){e.outgoingDataChannels.push(n),n.send(JSON.stringify(e.getValue()))},e}return t}(t(59).a),Ee=t(6),je=t(60),xe=function(){var e=new RTCPeerConnection({iceServers:[{urls:["stun:stun.l.google.com:19302"]}]});return e.addEventListener("signalingstatechange",(function(e){console.info("onsignalingstatechange",e)})),e.addEventListener("iceconnectionstatechange",(function(e){console.info("oniceconnectionstatechange",e)})),e.addEventListener("icegatheringstatechange",(function(e){console.info("onicegatheringstatechange",e)})),e.addEventListener("datachannel",(function(e){console.info("ondatachannel",e);var n=e.channel;n.addEventListener("open",(function(e){return console.info("dataChannel.onopen",e)})),n.addEventListener("message",(function(e){return console.info("dataChannel.onmessage",e)})),n.addEventListener("error",(function(e){return console.info("dataChannel.onerror",e)}))})),e};function ye(){var e=Object(d.a)(["\n  display: block;\n  width: 100%;\n"]);return ye=function(){return e},e}var we=m.b.div(ye()),Ce=function(e){var n=e.setAppObservable,t=Object(b.e)(),c=Object(a.useState)(null),i=Object(f.a)(c,2),l=i[0],o=i[1];return r.a.createElement(we,null,r.a.createElement(L,{label:"Remote offer",onSubmit:null===l?function(e){o("Computing...");var a=function(e){var n=new RTCSessionDescription(e),t=xe(),a=t.setRemoteDescription(n).then((function(){return t.createAnswer().then((function(e){return t.setLocalDescription(e)}))}));return[new Promise((function(e){t.addEventListener("icecandidate",(function(n){null==n.candidate&&a.then((function(){if(null===t.localDescription)throw new Error("`peerConnection.localDescription` is nullish.");e(t.localDescription)}))}))})),new Promise((function(e){t.addEventListener("datachannel",(function(n){var t=n.channel,a=new Ee.a((function(e){t.addEventListener("message",(function(n){e.next(JSON.parse(n.data))}))})).pipe(Object(je.a)(1));a.connect(),t.addEventListener("open",(function(){"app-state-channel"===t.label&&e(a)}))}))}))]}(e),r=Object(f.a)(a,2),c=r[0],i=r[1];c.then((function(e){o(JSON.stringify(e))})),i.then((function(e){n(e),t.push("/i")}))}:void 0,submitButtonLabel:"Confirm remote offer",placeholder:"Paste remote offer here",readOnly:null!==l}),null!==l?r.a.createElement(A,{label:"Answer",content:l}):null)};function Se(){var e=Object(d.a)(["\n  max-width: 200px;\n  margin: 0 3rem;\n"]);return Se=function(){return e},e}function ke(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-width: 640px;\n  height: 100vh;\n  margin: auto;\n"]);return ke=function(){return e},e}var De=m.b.div(ke()),Le=Object(m.b)(x)(Se()),Ae=function(e){var n=e.setAppObservable,t=Object(b.e)(),c=Object(a.useState)(null),i=Object(f.a)(c,2),l=i[0],o=i[1];return Object(a.useEffect)((function(){be().then(o)}),[]),null===l?null:l?r.a.createElement(De,null,r.a.createElement(b.d,null,r.a.createElement(b.c,{exact:!0,path:"/o"},r.a.createElement(Le,{onClick:function(){n(new Oe({players:[]})),t.push("/i")}},"New master"),r.a.createElement(Le,{onClick:function(){t.push("/o/join")}},"Join remote master")),r.a.createElement(b.c,{path:"/o/join"},r.a.createElement(Ce,{setAppObservable:n})))):r.a.createElement(De,null,r.a.createElement("i",null,"magic.mozaiqu.es already opened in an other tab."))},Pe=function(e){var n=e.addOutgoingDataChannel,t=Object(b.e)(),c=Object(a.useState)(null),i=Object(f.a)(c,2),l=i[0],o=i[1],u=Object(a.useState)(null),s=Object(f.a)(u,2),d=s[0],m=s[1];return Object(a.useEffect)((function(){var e=function(){var e=xe(),n=e.createDataChannel("app-state-channel"),t=e.createOffer().then((function(n){e.setLocalDescription(n)}));return[new Promise((function(n){e.onicecandidate=function(a){null==a.candidate&&t.then((function(){if(null===e.localDescription)throw new Error("`peerConnection.localDescription` is nullish.");n(e.localDescription)}))}})),function(n){e.setRemoteDescription(n)},new Promise((function(e){n.addEventListener("open",(function(t){e(n)}))}))]}(),a=Object(f.a)(e,3),r=a[0],c=a[1],i=a[2];m((function(){return c})),r.then((function(e){o(JSON.stringify(e))})),i.then((function(e){n(e),t.push("/i")}))}),[n,t]),r.a.createElement(y,null,r.a.createElement(w,null,"Add device"),r.a.createElement(A,{label:"Offer",content:l||"Computing..."}),l&&d?r.a.createElement(L,{label:"Remote answer",onSubmit:function(e){d(new RTCSessionDescription(e))},submitButtonLabel:"Confirm remote answer",placeholder:"Paste remote answer here"}):null)};function Ne(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n\n  font-style: italic;\n"]);return Ne=function(){return e},e}function Re(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-style: italic;\n"]);return Re=function(){return e},e}function Je(){var e=Object(d.a)(["\n  body {\n    font-family: Lato, sans-serif;\n  }\n\n  * {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n  }\n"]);return Je=function(){return e},e}function Ie(){var e=Object(d.a)(["\n  display: grid;\n  width: 100vw;\n  height: 100vh;\n  grid-template-columns: 280px auto;\n"]);return Ie=function(){return e},e}var ze=m.b.div(Ie()),Te=Object(m.a)(Je()),Be=m.b.div(Re()),Fe=m.b.div(Ne()),Me=function(e){var n=e.masterAppObservable;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.c,{path:"/i/add-player"},r.a.createElement(T,{addPlayer:n.addPlayer})),r.a.createElement(b.c,{path:"/i/add-device"},r.a.createElement(Pe,{addOutgoingDataChannel:n.addOutgoingDataChannel})))},Ve=function(e){var n=function(e){if(null===e)throw new Error("`useAppObservable` called with a nullish AppObservable.");var n=e instanceof Oe?e.getValue():null,t=Object(a.useState)(n),r=Object(f.a)(t,2),c=r[0],i=r[1];return Object(a.useEffect)((function(){var n=e.subscribe((function(e){i(e)}));return function(){return n.unsubscribe()}}),[e]),[c,e instanceof Oe?e:null]}(e.appObservable),t=Object(f.a)(n,2),c=t[0],i=t[1];return null===c?null:r.a.createElement(ze,null,r.a.createElement(le,{players:c.players}),r.a.createElement(b.d,null,r.a.createElement(b.c,{exact:!0,path:"/i"},r.a.createElement(Be,null,"No video stream yet")),i?r.a.createElement(Me,{masterAppObservable:i}):null))},qe=function(e){Object(s.a)(t,e);var n=Object(u.a)(t);function t(e){var a;return Object(l.a)(this,t),(a=n.call(this,e)).state={hasError:!1,errorString:null},a}return Object(o.a)(t,[{key:"render",value:function(){return this.state.hasError?r.a.createElement(Fe,null,"Oopsie, something went wrong: ".concat(this.state.errorString,".")):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0,errorString:e.toString()}}}]),t}(r.a.Component),Ge=function(){var e=Object(a.useState)(null),n=Object(f.a)(e,2),t=n[0],c=n[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(Te,null),r.a.createElement(qe,null,r.a.createElement(b.a,null,r.a.createElement(b.d,null,r.a.createElement(b.c,{path:"/o"},r.a.createElement(Ae,{setAppObservable:c})),r.a.createElement(b.c,{path:"/i"},r.a.createElement(Ve,{appObservable:t})),r.a.createElement(b.b,{to:"/o"})))))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ge,null)),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.e275aed8.chunk.js.map