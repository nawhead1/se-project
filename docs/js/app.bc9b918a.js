(function(){"use strict";var t={3380:function(t,e,n){var o=n(144),l=n(998),r=function(){var t=this,e=t._self._c;return e(l.Z,[e("router-view")],1)},s=[],c=(n(7658),n(8345)),i=function(){var t=this,e=t._self._c;return e("div",[e("router-view")],1)},a=[],u=n(1001),f={},p=(0,u.Z)(f,i,a,!1,null,null,null),Z=p.exports,h=n(6232),v=n(6190),d=n(9582),m=n(266),g=n(8271),_=n(3059),k=n(1713),w=n(3687),x=n(7953),b=function(){var t=this,e=t._self._c;return e(d.Z,{staticClass:"overflow-hidden"},[e(h.Z,{attrs:{color:"#f5efe6",app:"",dense:"",fixed:""},scopedSlots:t._u([{key:"extension",fn:function(){return[e(k.Z,[e(w.Z),e(m.Z,[e(v.Z,{staticStyle:{width:"100%"},attrs:{to:"/recipe"}},[t._v("레시피 게시판")])],1),e(m.Z,[e(v.Z,{staticStyle:{width:"100%"},attrs:{to:"/photo"}},[t._v("요리 사진 게시판")])],1),e(m.Z,[e(v.Z,{staticStyle:{width:"100%"},attrs:{to:"/mypage"}},[t._v("마이페이지")])],1),e(w.Z)],1)]},proxy:!0}])},[e(w.Z),e(x.qW,[t._v("레쉽피")]),e(w.Z),e(w.Z),e(w.Z),e(w.Z),e(v.Z,{on:{click:t.logout}},[t._v("로그아웃")]),e(w.Z)],1),e(_.Z,[e("router-view")],1),e(g.Z,{attrs:{color:"#f5efe6"}},[e("div",[t._v("푸터 위치입니다아")])])],1)},y=[],S={methods:{logout(){localStorage.removeItem("UserInfo"),Te.push({name:"login"})}}},P=S,O=(0,u.Z)(P,b,y,!1,null,null,null),j=O.exports,N=n(4886),$=n(120),I=n(2118),C=n(9223),J=n(5125),T=n(7808),E=function(){var t=this,e=t._self._c;return e(I.Z,[e(J.Z,{ref:"form"},[e(k.Z,[e(m.Z,{attrs:{cols:"4",offset:"4"}},[e(N.EB,{staticStyle:{"justify-content":"center"}},[t._v("로그인")])],1)],1),e(k.Z,[e(m.Z,{attrs:{cols:"6",offset:"3"}},[e(C.Z)],1)],1),e(k.Z,[e(m.Z,{attrs:{cols:"4",offset:"4"}},[e(T.Z,{attrs:{label:"id"},model:{value:t.info.id,callback:function(e){t.$set(t.info,"id",e)},expression:"info.id"}})],1)],1),e(k.Z,[e(m.Z,{attrs:{cols:"4",offset:"4"}},[e(T.Z,{attrs:{label:"password"},model:{value:t.info.pw,callback:function(e){t.$set(t.info,"pw",e)},expression:"info.pw"}})],1)],1),e(k.Z,[e(m.Z,{attrs:{cols:"3",offset:"4"}},[e($.Z,{attrs:{label:"자동 로그인"},model:{value:t.info.al,callback:function(e){t.$set(t.info,"al",e)},expression:"info.al"}})],1)],1),e(k.Z,{attrs:{justify:"center"}},[e(m.Z,{attrs:{cols:"auto"}},[e(v.Z,{attrs:{to:"/email-auth"}},[t._v("회원가입")])],1),e(m.Z,{attrs:{cols:"2"}},[e(v.Z,{staticStyle:{width:"100%"},on:{click:t.login}},[t._v("login")])],1)],1),e(k.Z,[e(m.Z,{attrs:{cols:"6",offset:"3"}},[e(C.Z)],1)],1)],1)],1)},U=[],B=n(196);const L="https://recippe-sg.herokuapp.com/";var M={login:function(t){return B.ZP.post(L+"login/",t)},firstcheck:function(t){return B.ZP.post(L+"firstcheck/",t)},secondcheck:function(t){return B.ZP.post(L+"secondcheck/",t)},signup:function(t){return B.ZP.post(L+"signup/",t)},changeNN:function(t){return B.ZP.post(L+"changenickname/",t)},changePW:function(t){return B.ZP.post(L+"changepw/",t)},recipeList:function(t){return B.ZP.get(L+"recipeboard/"+t+"/")},recipeLookup:function(t){return B.ZP.get(L+"recipe/"+t+"/")}},R={data(){return{info:{id:null,pw:null,al:!1}}},methods:{login(){const t=JSON.stringify({nickname:null,uid:this.info.id,password:this.info.pw,email:null,auto_login:this.info.al});console.log(t),M.login(t).then((function(e){console.log("login",e),console.log("response.status",e.status),200==e.status&&(console.log("로그인 성공"),localStorage.setItem("UserInfo",t),Te.push({name:"home"}))})).catch((function(t){console.log(t)}))}}},F=R,W=(0,u.Z)(F,E,U,!1,null,null,null),q=W.exports,A=function(){var t=this,e=t._self._c;return e(I.Z,[e(J.Z,{ref:"form"},[e(k.Z,[e(m.Z,{attrs:{cols:"4",offset:"4"}},[e(N.EB,{staticStyle:{"justify-content":"center"}},[t._v("레쉽피 회원가입")])],1)],1),e(k.Z,[e(m.Z,{attrs:{cols:"6",offset:"3"}},[e(C.Z)],1)],1),e(k.Z,[e(m.Z,{attrs:{cols:"4",offset:"4"}},[e(T.Z,{attrs:{label:"id"},model:{value:t.info.id,callback:function(e){t.$set(t.info,"id",e)},expression:"info.id"}})],1)],1),e(k.Z,[e(m.Z,{attrs:{cols:"4",offset:"4"}},[e(T.Z,{attrs:{label:"nickname"},model:{value:t.info.nick,callback:function(e){t.$set(t.info,"nick",e)},expression:"info.nick"}})],1)],1),e(k.Z,[e(m.Z,{attrs:{cols:"4",offset:"4"}},[e(T.Z,{attrs:{label:"password"},model:{value:t.info.pw,callback:function(e){t.$set(t.info,"pw",e)},expression:"info.pw"}})],1)],1),e(k.Z,[e(m.Z,{attrs:{cols:"4",offset:"4"}},[e(T.Z,{attrs:{label:"check password"},model:{value:t.info.pwcheck,callback:function(e){t.$set(t.info,"pwcheck",e)},expression:"info.pwcheck"}})],1)],1),e(k.Z,{attrs:{justify:"center"}},[e(m.Z,{attrs:{cols:"auto"}},[e(v.Z,{on:{click:t.back}},[t._v("돌아가기")])],1),e(m.Z,{attrs:{cols:"2"}},[e(v.Z,{staticStyle:{width:"100%"},on:{click:t.signup}},[t._v("회원가입")])],1)],1),e(k.Z,[e(m.Z,{attrs:{cols:"6",offset:"3"}},[e(C.Z)],1)],1)],1)],1)},D=[],z={data(){return{info:{id:null,nick:null,pw:null,pwcheck:null}}},methods:{signup(){const t={};console.log(t),JSON.parse(t),M.signup(t).then((function(t){console.log("login",t),200==t.status&&(console.log("회원가입 성공"),Te.push({name:"login"}))})).catch((function(t){console.log(t)}))},back(){this.$router.go(-1)}}},G=z,H=(0,u.Z)(G,A,D,!1,null,null,null),K=H.exports,Q=n(8789),V=function(){var t=this,e=t._self._c;return e(I.Z,[e(J.Z,{ref:"form"},[e(k.Z,[e(m.Z,{attrs:{cols:"4",offset:"4"}},[e(N.EB,{staticStyle:{"justify-content":"center"}},[t._v("이메일 인증")])],1)],1),e(k.Z,[e(m.Z,{attrs:{cols:"6",offset:"3"}},[e(C.Z)],1)],1),e(k.Z,[e(m.Z,{attrs:{cols:"4",offset:"4"}},[e(T.Z,{attrs:{label:"email"},model:{value:t.info.email,callback:function(e){t.$set(t.info,"email",e)},expression:"info.email"}})],1)],1),e(k.Z,[e(m.Z,{attrs:{cols:"2",offset:"5"}},[e(v.Z,{staticStyle:{width:"100%"},on:{click:t.firstcheck}},[t._v("코드 전송하기")])],1)],1),e(k.Z,[e(m.Z,{attrs:{cols:"6",offset:"3"}},[e(C.Z)],1)],1),e(k.Z,[e(m.Z,{attrs:{cols:"4",offset:"4"}},[e(Q.Z,{attrs:{length:"6",type:"number"},model:{value:t.info.code,callback:function(e){t.$set(t.info,"code",e)},expression:"info.code"}})],1)],1),e(k.Z,[e(m.Z,{attrs:{cols:"2",offset:"5"}},[e(v.Z,{staticStyle:{width:"100%"},on:{click:t.secondcheck}},[t._v("인증하기")])],1)],1),e(k.Z,[e(m.Z,{attrs:{cols:"6",offset:"3"}},[e(C.Z)],1)],1)],1)],1)},X=[],Y={data(){return{info:{email:null,code:0}}},methods:{firstcheck(){const t=JSON.stringify({email:this.info.email,code:0});console.log(t),JSON.parse(t),M.firstcheck(t).then((function(t){console.log("firstcheck",t)})).catch((function(t){console.log(t)}))},secondcheck(){const t=Number(this.info.code),e=JSON.stringify({email:this.info.email,code:t});console.log(e),M.secondcheck(e).then((function(t){console.log("secondcheck",t),200==t.status&&(console.log("코드 일치"),Te.push({name:"signup"}))})).catch((function(t){console.log(t)}))}}},tt=Y,et=(0,u.Z)(tt,V,X,!1,null,null,null),nt=et.exports,ot=function(){var t=this,e=t._self._c;return e(I.Z,[e(k.Z,[e(m.Z,[e("div",[t._v("app.vue")])])],1),e(k.Z,[e(m.Z,[t._v("home 화면")])],1)],1)},lt=[],rt={},st=rt,ct=(0,u.Z)(st,ot,lt,!1,null,null,null),it=ct.exports,at=function(){var t=this,e=t._self._c;return e("div",[e("div",[t._v("레시피 게시판")]),e("router-view")],1)},ut=[],ft={},pt=(0,u.Z)(ft,at,ut,!1,null,null,null),Zt=pt.exports,ht=function(){var t=this,e=t._self._c;return e("div",[e("div",[t._v("요리 사진 게시판")]),e("router-view")],1)},vt=[],dt={},mt=(0,u.Z)(dt,ht,vt,!1,null,null,null),gt=mt.exports,_t=function(){var t=this,e=t._self._c;return e("div",[e("div",[t._v("마이페이지")]),e("router-view")],1)},kt=[],wt={},xt=(0,u.Z)(wt,_t,kt,!1,null,null,null),bt=xt.exports,yt=n(2861),St=function(){var t=this,e=t._self._c;return e(I.Z,[t._v(" 레시피 기본화면 "),e(yt.Z,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.recipes,"items-per-page":5}}),e(v.Z,{attrs:{to:"/recipe/create"}},[t._v("작성하기")])],1)},Pt=[],Ot={data(){return{headers:[{text:"Dessert (100g serving)",align:"start",sortable:!1,value:"name"},{text:"Calories",value:"calories"},{text:"Fat (g)",value:"fat"},{text:"Carbs (g)",value:"carbs"},{text:"Protein (g)",value:"protein"},{text:"Iron (%)",value:"iron"}],recipes:[]}},mounted(){M.recipeList(1).then((function(t){console.log("응답 온거",t),200==t.status&&(console.log("조회 성공"),recipes=t,console.log(recipes))}))},methods:{}},jt=Ot,Nt=(0,u.Z)(jt,St,Pt,!1,null,null,null),$t=Nt.exports,It=function(){var t=this,e=t._self._c;return e(I.Z,[t._v(" 레시피 게시글 작성 화면 ")])},Ct=[],Jt={},Tt=(0,u.Z)(Jt,It,Ct,!1,null,null,null),Et=Tt.exports,Ut=function(){var t=this,e=t._self._c;return e(I.Z,[t._v(" 열람 화면 ")])},Bt=[],Lt={},Mt=(0,u.Z)(Lt,Ut,Bt,!1,null,null,null),Rt=Mt.exports,Ft=function(){var t=this,e=t._self._c;return e(I.Z,[t._v(" 수정 ")])},Wt=[],qt={},At=(0,u.Z)(qt,Ft,Wt,!1,null,null,null),Dt=At.exports,zt=function(){var t=this,e=t._self._c;return e(I.Z,[t._v(" 요리사진게시판 기본화면 "),e(v.Z,{attrs:{to:"/photo/create"}},[t._v("작성하기")])],1)},Gt=[],Ht={},Kt=(0,u.Z)(Ht,zt,Gt,!1,null,null,null),Qt=Kt.exports,Vt=function(){var t=this,e=t._self._c;return e(I.Z,[t._v(" 요리 사진 게시글 작성 화면 ")])},Xt=[],Yt={},te=(0,u.Z)(Yt,Vt,Xt,!1,null,null,null),ee=te.exports,ne=function(){var t=this,e=t._self._c;return e(I.Z,[t._v(" 요리사진 열람 ")])},oe=[],le={},re=(0,u.Z)(le,ne,oe,!1,null,null,null),se=re.exports,ce=function(){var t=this,e=t._self._c;return e(I.Z,[t._v(" 요리사진 수정? 필요하나 ")])},ie=[],ae={},ue=(0,u.Z)(ae,ce,ie,!1,null,null,null),fe=ue.exports,pe=function(){var t=this,e=t._self._c;return e(I.Z,[t._v(" 마이페이지 기본 화면 ")])},Ze=[],he={},ve=(0,u.Z)(he,pe,Ze,!1,null,null,null),de=ve.exports,me=function(){var t=this,e=t._self._c;return e(I.Z,[t._v(" 냉장고 화면 ")])},ge=[],_e={},ke=(0,u.Z)(_e,me,ge,!1,null,null,null),we=ke.exports,xe=function(){var t=this,e=t._self._c;return e(I.Z,[t._v(" 닉네임 변경 화면 ")])},be=[],ye={},Se=(0,u.Z)(ye,xe,be,!1,null,null,null),Pe=Se.exports,Oe=function(){var t=this,e=t._self._c;return e(I.Z,[t._v(" 비밀번호 수정 화면 ")])},je=[],Ne={},$e=(0,u.Z)(Ne,Oe,je,!1,null,null,null),Ie=$e.exports;o.ZP.use(c.ZP);const Ce=[{path:"",component:j,children:[{path:"",name:"home",component:it},{path:"recipe",component:Zt,children:[{path:"",name:"recipe",component:$t},{path:"create",name:"createR",component:Et},{path:"lookup",name:"lookupR",component:Rt},{path:"edit",name:"editR",component:Dt}]},{path:"photo",component:gt,children:[{path:"",name:"photo",component:Qt},{path:"create",name:"createP",component:ee},{path:"lookup",name:"lookupP",component:se},{path:"edit",name:"editP",component:fe}]},{path:"mypage",component:bt,children:[{path:"",name:"mypage",component:de},{path:"refrigerator",name:"refrigerator",component:we},{path:"changeNickname",name:"changeNickname",component:Pe},{path:"changePassword",name:"changePassword",component:Ie}]}]},{path:"",component:Z,children:[{path:"/login",name:"login",component:q},{path:"/signup",name:"signup",component:K},{path:"/email-auth",name:"email-auth",component:nt}]}],Je=new c.ZP({mode:"history",routes:Ce});var Te=Je,Ee={name:"App",data:()=>({}),created(){const t=JSON.parse(localStorage.getItem("UserInfo"));null==t?Te.push({name:"login"}):0==t.auto_login&&(console.log("오토 로그인 미선택 - 로그인 화면 이동"),localStorage.removeItem("UserInfo"),Te.push({name:"login"}))}},Ue=Ee,Be=(0,u.Z)(Ue,r,s,!1,null,null,null),Le=Be.exports,Me=n(1705);o.ZP.use(Me.Z);var Re=new Me.Z({});o.ZP.config.productionTip=!1,new o.ZP({vuetify:Re,router:Te,render:t=>t(Le)}).$mount("#app")}},e={};function n(o){var l=e[o];if(void 0!==l)return l.exports;var r=e[o]={exports:{}};return t[o](r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,o,l,r){if(!o){var s=1/0;for(u=0;u<t.length;u++){o=t[u][0],l=t[u][1],r=t[u][2];for(var c=!0,i=0;i<o.length;i++)(!1&r||s>=r)&&Object.keys(n.O).every((function(t){return n.O[t](o[i])}))?o.splice(i--,1):(c=!1,r<s&&(s=r));if(c){t.splice(u--,1);var a=l();void 0!==a&&(e=a)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[o,l,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var l,r,s=o[0],c=o[1],i=o[2],a=0;if(s.some((function(e){return 0!==t[e]}))){for(l in c)n.o(c,l)&&(n.m[l]=c[l]);if(i)var u=i(n)}for(e&&e(o);a<s.length;a++)r=s[a],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(u)},o=self["webpackChunkse_project"]=self["webpackChunkse_project"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(3380)}));o=n.O(o)})();
//# sourceMappingURL=app.bc9b918a.js.map