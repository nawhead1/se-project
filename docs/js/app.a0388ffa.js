(function(){"use strict";var t={9705:function(t,e,n){var o=n(144),l=n(998),s=function(){var t=this,e=t._self._c;return e(l.Z,[e("router-view")],1)},i=[],r=(n(7658),n(8345)),c=function(){var t=this,e=t._self._c;return e("div",[e("router-view")],1)},a=[],u=n(1001),f={},p=(0,u.Z)(f,c,a,!1,null,null,null),h=p.exports,Z=n(6232),m=n(6190),d=n(9582),v=n(266),g=n(8271),_=n(3059),k=n(1713),x=n(3687),w=n(7953),b=function(){var t=this,e=t._self._c;return e(d.Z,{staticClass:"overflow-hidden"},[e(Z.Z,{attrs:{color:"#f5efe6",app:"",dense:"",fixed:""},scopedSlots:t._u([{key:"extension",fn:function(){return[e(k.Z,[e(x.Z),e(v.Z,[e(m.Z,{staticStyle:{width:"100%"},attrs:{to:"/recipe"}},[t._v("레시피 게시판")])],1),e(v.Z,[e(m.Z,{staticStyle:{width:"100%"},attrs:{to:"/photo"}},[t._v("요리 사진 게시판")])],1),e(v.Z,[e(m.Z,{staticStyle:{width:"100%"},attrs:{to:"/mypage"}},[t._v("마이페이지")])],1),e(x.Z)],1)]},proxy:!0}])},[e(x.Z),e(w.qW,[t._v("레쉽피")]),e(x.Z),e(x.Z),e(x.Z),e(x.Z),e(m.Z,{on:{click:t.logout}},[t._v("로그아웃")]),e(x.Z)],1),e(_.Z,[e("router-view")],1),e(g.Z,{attrs:{color:"#f5efe6"}},[e("div",[t._v("푸터 위치입니다아")])])],1)},y=[],S={methods:{logout(){localStorage.removeItem("UserInfo"),Ee.push({name:"login"})}}},P=S,O=(0,u.Z)(P,b,y,!1,null,null,null),j=O.exports,$=n(4886),I=n(120),N=n(2118),J=n(9223),C=n(5125),T=n(7808),E=function(){var t=this,e=t._self._c;return e(N.Z,[e(C.Z,{ref:"form"},[e(k.Z,[e(v.Z,{attrs:{cols:"4",offset:"4"}},[e($.EB,{staticStyle:{"justify-content":"center"}},[t._v("로그인")])],1)],1),e(k.Z,[e(v.Z,{attrs:{cols:"6",offset:"3"}},[e(J.Z)],1)],1),e(k.Z,[e(v.Z,{attrs:{cols:"4",offset:"4"}},[e(T.Z,{attrs:{label:"id"},model:{value:t.info.id,callback:function(e){t.$set(t.info,"id",e)},expression:"info.id"}})],1)],1),e(k.Z,[e(v.Z,{attrs:{cols:"4",offset:"4"}},[e(T.Z,{attrs:{label:"password"},model:{value:t.info.pw,callback:function(e){t.$set(t.info,"pw",e)},expression:"info.pw"}})],1)],1),e(k.Z,[e(v.Z,{attrs:{cols:"3",offset:"4"}},[e(I.Z,{attrs:{label:"자동 로그인"},model:{value:t.info.al,callback:function(e){t.$set(t.info,"al",e)},expression:"info.al"}})],1)],1),e(k.Z,{attrs:{justify:"center"}},[e(v.Z,{attrs:{cols:"auto"}},[e(m.Z,{on:{click:t.signup}},[t._v("회원가입")])],1),e(v.Z,{attrs:{cols:"2"}},[e(m.Z,{staticStyle:{width:"100%"},on:{click:t.login}},[t._v("login")])],1)],1),e(k.Z,[e(v.Z,{attrs:{cols:"6",offset:"3"}},[e(J.Z)],1)],1)],1)],1)},U=[],W=n(196);const B="https://recippe-sg.herokuapp.com/";var L={login:function(t){return W.ZP.post(B+"login/",t)},firstcheck:function(t){return W.ZP.post(B+"firstcheck/",t)},secondcheck:function(t){return W.ZP.post(B+"secondcheck/",t)},signup:function(t){return W.ZP.post(B+"signup/",t)},changeNN:function(t){return W.ZP.post(B+"changenickname/",t)},changePW:function(t){return W.ZP.post(B+"changepw/",t)},recipeList:function(t){return W.ZP.get(B+"recipeboard/"+t+"/")},recipeLookup:function(t){return W.ZP.get(B+"recipe/"+t+"/")}},M={data(){return{info:{id:null,pw:null,al:!1}}},methods:{login(){const t=JSON.stringify({nickname:null,uid:this.info.id,password:this.info.pw,email:null,auto_login:this.info.al});console.log(t),L.login(t).then((function(e){console.log("login",e),console.log("response.status",e.status),200==e.status&&(console.log("로그인 성공"),localStorage.setItem("UserInfo",t),Ee.push({name:"home"}))})).catch((function(t){console.log(t)}))},signup(){Ee.push({path:"/email-auth/0"})}}},R=M,A=(0,u.Z)(R,E,U,!1,null,null,null),F=A.exports,q=function(){var t=this,e=t._self._c;return e(N.Z,[e(C.Z,{ref:"form"},[e(k.Z,[e(v.Z,{attrs:{cols:"4",offset:"4"}},[e($.EB,{staticStyle:{"justify-content":"center"}},[t._v("레쉽피 회원가입")])],1)],1),e(k.Z,[e(v.Z,{attrs:{cols:"6",offset:"3"}},[e(J.Z)],1)],1),e(k.Z,[e(v.Z,{attrs:{cols:"4",offset:"4"}},[e(T.Z,{attrs:{label:"id"},model:{value:t.info.id,callback:function(e){t.$set(t.info,"id",e)},expression:"info.id"}})],1)],1),e(k.Z,[e(v.Z,{attrs:{cols:"4",offset:"4"}},[e(T.Z,{attrs:{label:"nickname"},model:{value:t.info.nick,callback:function(e){t.$set(t.info,"nick",e)},expression:"info.nick"}})],1)],1),e(k.Z,[e(v.Z,{attrs:{cols:"4",offset:"4"}},[e(T.Z,{attrs:{label:"password"},model:{value:t.info.pw,callback:function(e){t.$set(t.info,"pw",e)},expression:"info.pw"}})],1)],1),e(k.Z,[e(v.Z,{attrs:{cols:"4",offset:"4"}},[e(T.Z,{attrs:{label:"check password"},model:{value:t.info.pwcheck,callback:function(e){t.$set(t.info,"pwcheck",e)},expression:"info.pwcheck"}})],1)],1),e(k.Z,{attrs:{justify:"center"}},[e(v.Z,{attrs:{cols:"auto"}},[e(m.Z,{attrs:{to:"/login"}},[t._v("돌아가기")])],1),e(v.Z,{attrs:{cols:"2"}},[e(m.Z,{staticStyle:{width:"100%"},on:{click:t.signup}},[t._v("회원가입")])],1)],1),e(k.Z,[e(v.Z,{attrs:{cols:"6",offset:"3"}},[e(J.Z)],1)],1)],1)],1)},D=[],z={data(){return{info:{email:null,id:null,nick:null,pw:null,pwcheck:null}}},created(){this.info.email=localStorage.getItem("email"),console.log("로컬스토리지에서 이메일 받아오기",this.info.email)},methods:{signup(){const t=JSON.stringify({nickname:this.info.nick,uid:this.info.id,password:this.info.pw,email:this.info.email,auto_login:!1});console.log(t),JSON.parse(t),L.signup(t).then((function(t){console.log("login",t),200==t.status&&(console.log("회원가입 성공"),localStorage.removeItem("email"),Ee.push({name:"login"}))})).catch((function(t){console.log(t)}))}}},G=z,H=(0,u.Z)(G,q,D,!1,null,null,null),K=H.exports,Q=n(8789),V=function(){var t=this,e=t._self._c;return e(N.Z,[e(C.Z,{ref:"form"},[e(k.Z,[e(v.Z,{attrs:{cols:"4",offset:"4"}},[e($.EB,{staticStyle:{"justify-content":"center"}},[t._v("이메일 인증")])],1)],1),e(k.Z,[e(v.Z,{attrs:{cols:"6",offset:"3"}},[e(J.Z)],1)],1),e(k.Z,[e(v.Z,{attrs:{cols:"4",offset:"4"}},[e(T.Z,{attrs:{label:"email"},model:{value:t.info.email,callback:function(e){t.$set(t.info,"email",e)},expression:"info.email"}})],1)],1),e(k.Z,[e(v.Z,{attrs:{cols:"2",offset:"5"}},[e(m.Z,{staticStyle:{width:"100%"},on:{click:t.firstcheck}},[t._v("코드 전송하기")])],1)],1),e(k.Z,[e(v.Z,{attrs:{cols:"6",offset:"3"}},[e(J.Z)],1)],1),e(k.Z,[e(v.Z,{attrs:{cols:"4",offset:"4"}},[e(Q.Z,{attrs:{length:"6",type:"number"},model:{value:t.info.code,callback:function(e){t.$set(t.info,"code",e)},expression:"info.code"}})],1)],1),e(k.Z,[e(v.Z,{attrs:{cols:"2",offset:"5"}},[e(m.Z,{staticStyle:{width:"100%"},on:{click:t.secondcheck}},[t._v("인증하기")])],1)],1),e(k.Z,[e(v.Z,{attrs:{cols:"6",offset:"3"}},[e(J.Z)],1)],1)],1)],1)},X=[],Y={data(){return{info:{email:null,code:0},next:null}},created(){console.log("route",this.$route.params.id),0==this.$route.params.id?this.next="signup":1==this.$route.params.id&&(this.next="changePassword"),console.log("params 메시지 받은내용",this.next)},methods:{firstcheck(){const t=JSON.stringify({email:this.info.email,code:0});console.log(t),JSON.parse(t),L.firstcheck(t).then((function(t){console.log("firstcheck",t)})).catch((function(t){console.log(t)}))},secondcheck(){const t=Number(this.info.code),e=JSON.stringify({email:this.info.email,code:t}),n=this.info.email,o=this.next;console.log(e),L.secondcheck(e).then((function(t){console.log("secondcheck",t),200==t.status&&(console.log("코드 일치",o),"signup"==o&&localStorage.setItem("email",n),Ee.push({name:o}))})).catch((function(t){console.log(t)}))}}},tt=Y,et=(0,u.Z)(tt,V,X,!1,null,null,null),nt=et.exports,ot=function(){var t=this,e=t._self._c;return e(N.Z,[e(k.Z,[e(v.Z,[e("div",[t._v("app.vue")])])],1),e(k.Z,[e(v.Z,[t._v("home 화면")])],1)],1)},lt=[],st={},it=st,rt=(0,u.Z)(it,ot,lt,!1,null,null,null),ct=rt.exports,at=function(){var t=this,e=t._self._c;return e("div",[e("div",[t._v("레시피 게시판")]),e("router-view")],1)},ut=[],ft={},pt=(0,u.Z)(ft,at,ut,!1,null,null,null),ht=pt.exports,Zt=function(){var t=this,e=t._self._c;return e("div",[e("div",[t._v("요리 사진 게시판")]),e("router-view")],1)},mt=[],dt={},vt=(0,u.Z)(dt,Zt,mt,!1,null,null,null),gt=vt.exports,_t=function(){var t=this,e=t._self._c;return e("div",[e("div",[t._v("마이페이지")]),e("router-view")],1)},kt=[],xt={},wt=(0,u.Z)(xt,_t,kt,!1,null,null,null),bt=wt.exports,yt=n(2861),St=function(){var t=this,e=t._self._c;return e(N.Z,[t._v(" 레시피 기본화면 "),e(yt.Z,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.recipes,"items-per-page":5}}),e(m.Z,{attrs:{to:"/recipe/create"}},[t._v("작성하기")])],1)},Pt=[],Ot={data(){return{headers:[{text:"Dessert (100g serving)",align:"start",sortable:!1,value:"name"},{text:"Calories",value:"calories"},{text:"Fat (g)",value:"fat"},{text:"Carbs (g)",value:"carbs"},{text:"Protein (g)",value:"protein"},{text:"Iron (%)",value:"iron"}],recipes:[]}},mounted(){L.recipeList(1).then((function(t){console.log("응답 온거",t),200==t.status&&(console.log("조회 성공"),recipes=t.data,console.log(recipes))}))},methods:{}},jt=Ot,$t=(0,u.Z)(jt,St,Pt,!1,null,null,null),It=$t.exports,Nt=function(){var t=this,e=t._self._c;return e(N.Z,[t._v(" 레시피 게시글 작성 화면 ")])},Jt=[],Ct={},Tt=(0,u.Z)(Ct,Nt,Jt,!1,null,null,null),Et=Tt.exports,Ut=function(){var t=this,e=t._self._c;return e(N.Z,[t._v(" 열람 화면 ")])},Wt=[],Bt={},Lt=(0,u.Z)(Bt,Ut,Wt,!1,null,null,null),Mt=Lt.exports,Rt=function(){var t=this,e=t._self._c;return e(N.Z,[t._v(" 수정 ")])},At=[],Ft={},qt=(0,u.Z)(Ft,Rt,At,!1,null,null,null),Dt=qt.exports,zt=function(){var t=this,e=t._self._c;return e(N.Z,[t._v(" 요리사진게시판 기본화면 "),e(m.Z,{attrs:{to:"/photo/create"}},[t._v("작성하기")])],1)},Gt=[],Ht={},Kt=(0,u.Z)(Ht,zt,Gt,!1,null,null,null),Qt=Kt.exports,Vt=function(){var t=this,e=t._self._c;return e(N.Z,[t._v(" 요리 사진 게시글 작성 화면 ")])},Xt=[],Yt={},te=(0,u.Z)(Yt,Vt,Xt,!1,null,null,null),ee=te.exports,ne=function(){var t=this,e=t._self._c;return e(N.Z,[t._v(" 요리사진 열람 ")])},oe=[],le={},se=(0,u.Z)(le,ne,oe,!1,null,null,null),ie=se.exports,re=function(){var t=this,e=t._self._c;return e(N.Z,[t._v(" 요리사진 수정? 필요하나 ")])},ce=[],ae={},ue=(0,u.Z)(ae,re,ce,!1,null,null,null),fe=ue.exports,pe=function(){var t=this,e=t._self._c;return e(N.Z,[t._v(" 마이페이지 기본 화면 "),e(m.Z,{on:{click:t.changePW}},[t._v("비밀번호 변경")])],1)},he=[],Ze={methods:{changePW(){Ee.push({path:"/email-auth/1"})}}},me=Ze,de=(0,u.Z)(me,pe,he,!1,null,null,null),ve=de.exports,ge=function(){var t=this,e=t._self._c;return e(N.Z,[t._v(" 냉장고 화면 ")])},_e=[],ke={},xe=(0,u.Z)(ke,ge,_e,!1,null,null,null),we=xe.exports,be=function(){var t=this,e=t._self._c;return e(N.Z,[t._v(" 닉네임 변경 화면 ")])},ye=[],Se={},Pe=(0,u.Z)(Se,be,ye,!1,null,null,null),Oe=Pe.exports,je=function(){var t=this,e=t._self._c;return e(N.Z,[t._v(" 비밀번호 수정 화면 ")])},$e=[],Ie={},Ne=(0,u.Z)(Ie,je,$e,!1,null,null,null),Je=Ne.exports;o.ZP.use(r.ZP);const Ce=[{path:"",component:j,children:[{path:"",name:"home",component:ct},{path:"recipe",component:ht,children:[{path:"",name:"recipe",component:It},{path:"create",name:"createR",component:Et},{path:"lookup",name:"lookupR",component:Mt},{path:"edit",name:"editR",component:Dt}]},{path:"photo",component:gt,children:[{path:"",name:"photo",component:Qt},{path:"create",name:"createP",component:ee},{path:"lookup",name:"lookupP",component:ie},{path:"edit",name:"editP",component:fe}]},{path:"mypage",component:bt,children:[{path:"",name:"mypage",component:ve},{path:"refrigerator",name:"refrigerator",component:we},{path:"changeNickname",name:"changeNickname",component:Oe},{path:"changePassword",name:"changePassword",component:Je}]}]},{path:"",component:h,children:[{path:"/login",name:"login",component:F},{path:"/signup",name:"signup",component:K},{path:"/email-auth/:id",name:"email-auth",component:nt}]}],Te=new r.ZP({mode:"history",routes:Ce});var Ee=Te,Ue={name:"App",data:()=>({}),created(){const t=JSON.parse(localStorage.getItem("UserInfo"));console.log("App.vue created"),null==t?Ee.push({name:"login"}):0==t.auto_login&&(console.log("오토 로그인 미선택 - 로그인 화면 이동"),localStorage.removeItem("UserInfo"),Ee.push({name:"login"}))}},We=Ue,Be=(0,u.Z)(We,s,i,!1,null,null,null),Le=Be.exports,Me=n(1705);o.ZP.use(Me.Z);var Re=new Me.Z({});o.ZP.config.productionTip=!1,new o.ZP({vuetify:Re,router:Ee,render:t=>t(Le)}).$mount("#app")}},e={};function n(o){var l=e[o];if(void 0!==l)return l.exports;var s=e[o]={exports:{}};return t[o](s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,o,l,s){if(!o){var i=1/0;for(u=0;u<t.length;u++){o=t[u][0],l=t[u][1],s=t[u][2];for(var r=!0,c=0;c<o.length;c++)(!1&s||i>=s)&&Object.keys(n.O).every((function(t){return n.O[t](o[c])}))?o.splice(c--,1):(r=!1,s<i&&(i=s));if(r){t.splice(u--,1);var a=l();void 0!==a&&(e=a)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[o,l,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var l,s,i=o[0],r=o[1],c=o[2],a=0;if(i.some((function(e){return 0!==t[e]}))){for(l in r)n.o(r,l)&&(n.m[l]=r[l]);if(c)var u=c(n)}for(e&&e(o);a<i.length;a++)s=i[a],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(u)},o=self["webpackChunkse_project"]=self["webpackChunkse_project"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(9705)}));o=n.O(o)})();
//# sourceMappingURL=app.a0388ffa.js.map