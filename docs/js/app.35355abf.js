(function(){var t={7641:function(){},2284:function(t,e,n){"use strict";var o=n(144),l=n(998),s=function(){var t=this,e=t._self._c;return e(l.Z,[e("router-view")],1)},i=[],c=(n(7658),n(8345)),a=n(3059),r=function(){var t=this,e=t._self._c;return e(a.Z,[e("router-view")],1)},u=[],f=n(1001),p={},Z=(0,f.Z)(p,r,u,!1,null,null,null),h=Z.exports,m=n(6232),d=n(6190),v=n(9582),g=n(266),_=n(8271),k=n(1713),y=n(3687),x=n(7953),w=function(){var t=this,e=t._self._c;return e(v.Z,{staticClass:"overflow-hidden"},[e(m.Z,{attrs:{color:"#f5efe6",app:"",dense:"",fixed:""},scopedSlots:t._u([{key:"extension",fn:function(){return[e(k.Z,[e(y.Z),e(g.Z,[e(d.Z,{staticStyle:{width:"100%"},attrs:{to:"/recipe"}},[t._v("레시피 게시판")])],1),e(g.Z,[e(d.Z,{staticStyle:{width:"100%"},attrs:{to:"/photo"}},[t._v("요리 사진 게시판")])],1),e(g.Z,[e(d.Z,{staticStyle:{width:"100%"},attrs:{to:"/mypage"}},[t._v("마이페이지")])],1),e(y.Z)],1)]},proxy:!0}])},[e(y.Z),e(x.qW,[t._v("레쉽피")]),e(y.Z),e(y.Z),e(y.Z),e(y.Z),e(d.Z,{on:{click:t.logout}},[t._v("로그아웃")]),e(y.Z)],1),e(a.Z,[e("router-view")],1),e(_.Z,{attrs:{color:"#f5efe6",app:""}},[e("div",[t._v("푸터 위치입니다아")])])],1)},b=[],S={methods:{logout(){localStorage.removeItem("UserInfo"),Ue.push({name:"login"})}}},P=S,C=(0,f.Z)(P,w,b,!1,null,null,null),j=C.exports,O=n(4886),N=n(120),B=n(9256),$=n(9223),E=n(5125),I=n(7808),J=function(){var t=this,e=t._self._c;return e(B.Z,[e(E.Z,{ref:"form"},[e(k.Z,[e(g.Z,{attrs:{cols:"4",offset:"4"}},[e(O.EB,{staticStyle:{"justify-content":"center"}},[t._v("로그인")])],1)],1),e(k.Z,[e(g.Z,{attrs:{cols:"6",offset:"3"}},[e($.Z)],1)],1),e(k.Z,[e(g.Z,{attrs:{cols:"4",offset:"4"}},[e(I.Z,{attrs:{label:"id"},model:{value:t.info.id,callback:function(e){t.$set(t.info,"id",e)},expression:"info.id"}})],1)],1),e(k.Z,[e(g.Z,{attrs:{cols:"4",offset:"4"}},[e(I.Z,{attrs:{label:"password"},model:{value:t.info.pw,callback:function(e){t.$set(t.info,"pw",e)},expression:"info.pw"}})],1)],1),e(k.Z,[e(g.Z,{attrs:{cols:"3",offset:"4"}},[e(N.Z,{attrs:{label:"자동 로그인"},model:{value:t.info.al,callback:function(e){t.$set(t.info,"al",e)},expression:"info.al"}})],1)],1),e(k.Z,{attrs:{justify:"center"}},[e(g.Z,{attrs:{cols:"auto"}},[e(d.Z,{on:{click:t.signup}},[t._v("회원가입")])],1),e(g.Z,{attrs:{cols:"2"}},[e(d.Z,{staticStyle:{width:"100%"},on:{click:t.login}},[t._v("login")])],1)],1),e(k.Z,[e(g.Z,{attrs:{cols:"6",offset:"3"}},[e($.Z)],1)],1)],1)],1)},L=[],T=n(196);const U="https://recippe-sg.herokuapp.com/";var W={login:function(t){return T.ZP.post(U+"login/",t)},firstcheck:function(t){return T.ZP.post(U+"firstcheck/",t)},secondcheck:function(t){return T.ZP.post(U+"secondcheck/",t)},signup:function(t){return T.ZP.post(U+"signup/",t)},changeNN:function(t){return T.ZP.post(U+"changenickname/",t)},changePW:function(t){return T.ZP.post(U+"changepw/",t)},recipeList:function(t){return T.ZP.get(U+"recipeboard/"+t+"/")},recipeLookup:function(t){return T.ZP.get(U+"recipe/"+t+"/")}},M={data(){return{info:{id:null,pw:null,al:!1}}},methods:{login(){const t=JSON.stringify({nickname:null,uid:this.info.id,password:this.info.pw,email:null,auto_login:this.info.al});console.log(t),W.login(t).then((function(t){console.log("response.status",t.status),200==t.status&&(console.log("로그인 성공"),console.log(t.data),localStorage.setItem("UserInfo",t.data),Ue.push({name:"home"}))})).catch((function(t){console.log(t)}))},signup(){Ue.push({path:"/email-auth/0"})}}},R=M,A=(0,f.Z)(R,J,L,!1,null,null,null),q=A.exports,F=function(){var t=this,e=t._self._c;return e(B.Z,[e(E.Z,{ref:"form"},[e(k.Z,[e(g.Z,{attrs:{cols:"4",offset:"4"}},[e(O.EB,{staticStyle:{"justify-content":"center"}},[t._v("레쉽피 회원가입")])],1)],1),e(k.Z,[e(g.Z,{attrs:{cols:"6",offset:"3"}},[e($.Z)],1)],1),e(k.Z,[e(g.Z,{attrs:{cols:"4",offset:"4"}},[e(I.Z,{attrs:{label:"id"},model:{value:t.info.id,callback:function(e){t.$set(t.info,"id",e)},expression:"info.id"}})],1)],1),e(k.Z,[e(g.Z,{attrs:{cols:"4",offset:"4"}},[e(I.Z,{attrs:{label:"nickname"},model:{value:t.info.nick,callback:function(e){t.$set(t.info,"nick",e)},expression:"info.nick"}})],1)],1),e(k.Z,[e(g.Z,{attrs:{cols:"4",offset:"4"}},[e(I.Z,{attrs:{label:"password"},model:{value:t.info.pw,callback:function(e){t.$set(t.info,"pw",e)},expression:"info.pw"}})],1)],1),e(k.Z,[e(g.Z,{attrs:{cols:"4",offset:"4"}},[e(I.Z,{attrs:{label:"check password"},model:{value:t.info.pwcheck,callback:function(e){t.$set(t.info,"pwcheck",e)},expression:"info.pwcheck"}})],1)],1),e(k.Z,{attrs:{justify:"center"}},[e(g.Z,{attrs:{cols:"auto"}},[e(d.Z,{attrs:{to:"/login"}},[t._v("돌아가기")])],1),e(g.Z,{attrs:{cols:"2"}},[e(d.Z,{staticStyle:{width:"100%"},on:{click:t.signup}},[t._v("회원가입")])],1)],1),e(k.Z,[e(g.Z,{attrs:{cols:"6",offset:"3"}},[e($.Z)],1)],1)],1)],1)},z=[],D={data(){return{info:{email:null,id:null,nick:null,pw:null,pwcheck:null}}},created(){this.info.email=localStorage.getItem("email"),console.log("로컬스토리지에서 이메일 받아오기",this.info.email),localStorage.removeItem("email")},methods:{signup(){const t=JSON.stringify({nickname:this.info.nick,uid:this.info.id,password:this.info.pw,email:this.info.email,auto_login:!1});console.log(t),JSON.parse(t),W.signup(t).then((function(t){console.log("login",t),200==t.status&&(console.log("회원가입 성공"),Ue.push({name:"login"}))})).catch((function(t){console.log(t)}))}}},G=D,H=(0,f.Z)(G,F,z,!1,null,null,null),K=H.exports,Q=n(8789),V=function(){var t=this,e=t._self._c;return e(B.Z,[e(E.Z,{ref:"form"},[e(k.Z,[e(g.Z,{attrs:{cols:"4",offset:"4"}},[e(O.EB,{staticStyle:{"justify-content":"center"}},[t._v("이메일 인증")])],1)],1),e(k.Z,[e(g.Z,{attrs:{cols:"6",offset:"3"}},[e($.Z)],1)],1),e(k.Z,[e(g.Z,{attrs:{cols:"4",offset:"4"}},[e(I.Z,{attrs:{label:"email"},model:{value:t.info.email,callback:function(e){t.$set(t.info,"email",e)},expression:"info.email"}})],1)],1),e(k.Z,[e(g.Z,{attrs:{cols:"2",offset:"5"}},[e(d.Z,{staticStyle:{width:"100%"},on:{click:function(e){return t.firstcheck()}}},[t._v("코드 전송하기")])],1)],1),e(k.Z,[e(g.Z,{attrs:{cols:"6",offset:"3"}},[e($.Z)],1)],1),e(k.Z,[e(g.Z,{attrs:{cols:"4",offset:"4"}},[e(Q.Z,{attrs:{length:"6",type:"number"},model:{value:t.info.code,callback:function(e){t.$set(t.info,"code",e)},expression:"info.code"}})],1)],1),e(k.Z,[e(g.Z,{attrs:{cols:"2",offset:"5"}},[e(d.Z,{staticStyle:{width:"100%"},on:{click:function(e){return t.secondcheck()}}},[t._v("인증하기")])],1)],1),e(k.Z,[e(g.Z,{attrs:{cols:"6",offset:"3"}},[e($.Z)],1)],1)],1)],1)},X=[],Y={data(){return{info:{email:null,code:0},next:null}},created(){console.log("route",this.$route.params.id),0==this.$route.params.id?this.next="signup":1==this.$route.params.id&&(this.next="changePassword"),console.log("params 메시지 받은내용",this.next)},methods:{firstcheck(){const t=JSON.stringify({email:this.info.email,code:0});console.log(t),JSON.parse(t),W.firstcheck(t).then((function(t){console.log("firstcheck",t)})).catch((function(t){console.log(t)}))},secondcheck(){const t=Number(this.info.code),e=JSON.stringify({email:this.info.email,code:t}),n=this.info.email,o=this.next;console.log(e),W.secondcheck(e).then((function(t){console.log("secondcheck",t),200==t.status&&(console.log("코드 일치",o),"signup"==o&&localStorage.setItem("email",n),Ue.push({name:o}))})).catch((function(t){console.log(t)}))}}},tt=Y,et=(0,f.Z)(tt,V,X,!1,null,null,null),nt=et.exports,ot=function(){var t=this,e=t._self._c;return e(B.Z,[e(k.Z,[e(g.Z,[e("div",[t._v("app.vue")])])],1),e(k.Z,[e(g.Z,[t._v("home 화면")])],1)],1)},lt=[],st={},it=st,ct=(0,f.Z)(it,ot,lt,!1,null,null,null),at=ct.exports,rt=n(3201),ut=function(){var t=this,e=t._self._c;return e(B.Z,[e(rt.Z,[t._v(" v ")]),e("div",[e("div",[t._v("레시피 게시판")]),e("router-view")],1)],1)},ft=[],pt={},Zt=(0,f.Z)(pt,ut,ft,!1,null,null,null),ht=Zt.exports,mt=function(){var t=this,e=t._self._c;return e("div",[e("div",[t._v("요리 사진 게시판")]),e("router-view")],1)},dt=[],vt={},gt=(0,f.Z)(vt,mt,dt,!1,null,null,null),_t=gt.exports,kt=function(){var t=this,e=t._self._c;return e("div",[e("router-view")],1)},yt=[],xt={},wt=(0,f.Z)(xt,kt,yt,!1,null,null,null),bt=wt.exports,St=n(2861),Pt=function(){var t=this,e=t._self._c;return e(B.Z,[t._v(" 레시피 기본화면 "),e(St.Z,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.recipes,"items-per-page":3}}),e(d.Z,{attrs:{to:"/recipe/create"}},[t._v("작성하기")])],1)},Ct=[],jt={data(){return{headers:[{text:"id",value:"post_id"},{text:"title",value:"title"},{text:"nickname",value:"nickname"},{text:"spicy",value:"degree_of_spicy"},{text:"like",value:"like_count"},{text:"comment",value:"comment_count"},{text:"view",value:"views"},{text:"time",value:"upload_time"}],recipes:[]}},mounted(){let t=[];W.recipeList(1).then((function(e){if(console.log("응답 온거",e),200==e.status){console.log("조회 성공");for(let n=0;null!=e.data.recipeList[n];n++)t.push(e.data.recipeList[n])}})),this.recipes=t},methods:{}},Ot=jt,Nt=(0,f.Z)(Ot,Pt,Ct,!1,null,null,null),Bt=Nt.exports,$t=function(){var t=this,e=t._self._c;return e(B.Z,[t._v(" 레시피 게시글 작성 화면 ")])},Et=[],It={},Jt=(0,f.Z)(It,$t,Et,!1,null,null,null),Lt=Jt.exports,Tt=function(){var t=this,e=t._self._c;return e(B.Z,[e(k.Z,[e(g.Z,[t._v(" lookup page ")])],1)],1)},Ut=[],Wt={},Mt=(0,f.Z)(Wt,Tt,Ut,!1,null,null,null),Rt=Mt.exports,At=function(){var t=this,e=t._self._c;return e(B.Z,[t._v(" 수정 ")])},qt=[],Ft={},zt=(0,f.Z)(Ft,At,qt,!1,null,null,null),Dt=zt.exports,Gt=function(){var t=this,e=t._self._c;return e(B.Z,[t._v(" 요리사진게시판 기본화면 "),e(d.Z,{attrs:{to:"/photo/create"}},[t._v("작성하기")])],1)},Ht=[],Kt={},Qt=(0,f.Z)(Kt,Gt,Ht,!1,null,null,null),Vt=Qt.exports,Xt=function(){var t=this,e=t._self._c;return e(B.Z,[t._v(" 요리 사진 게시글 작성 화면 ")])},Yt=[],te={},ee=(0,f.Z)(te,Xt,Yt,!1,null,null,null),ne=ee.exports,oe=function(){var t=this,e=t._self._c;return e(B.Z,[t._v(" 요리사진 열람 ")])},le=[],se={},ie=(0,f.Z)(se,oe,le,!1,null,null,null),ce=ie.exports,ae=function(){var t=this,e=t._self._c;return e(B.Z,[t._v(" 요리사진 수정? 필요하나 ")])},re=[],ue={},fe=(0,f.Z)(ue,ae,re,!1,null,null,null),pe=fe.exports,Ze=function(){var t=this,e=t._self._c;return e(B.Z,[e(rt.Z,[e(g.Z,{attrs:{offset:"1",cols:"10"}},[e(v.Z,{staticClass:"py-2",attrs:{color:"#f5efe6"}},[e(O.EB,{staticClass:"pl-10"},[t._v("나의 활동")]),e(O.ZB,{staticClass:"pl-15"},[t._v("내가 쓴 레시피")]),e(O.ZB,{staticClass:"pl-15"},[t._v("좋아요 누른 레시피")]),e(O.ZB,{staticClass:"pl-15"},[t._v("댓글 단 레시피")])],1)],1)],1),e(rt.Z,[e(g.Z,{attrs:{offset:"1",cols:"5"}},[e(v.Z,{staticClass:"py-2",attrs:{color:"#f5efe6"}},[e(O.EB,{staticClass:"pl-10"},[t._v("냉장고")])],1)],1),e(g.Z,{attrs:{cols:"5"}},[e(v.Z,{staticClass:"py-2",attrs:{color:"#f5efe6"}},[e(O.EB,{staticClass:"pl-10"},[t._v("쪽지함")])],1)],1)],1),e(rt.Z,[e(g.Z,{staticClass:"py-2",attrs:{offset:"1",cols:"10"}},[e(v.Z,{staticClass:"py-2",attrs:{color:"#f5efe6"}},[e(O.EB,{staticClass:"ml-10"},[t._v("계정 관리")]),e(O.h7,{staticClass:"ml-15"},[e(d.Z,{on:{click:function(e){return t.changeNi()}}},[t._v("닉네임 변경")])],1),e(O.h7,{staticClass:"ml-15"},[e(d.Z,{on:{click:function(e){return t.changePW()}}},[t._v("비밀번호 변경")])],1)],1)],1)],1)],1)},he=[],me={methods:{changePW(){Ue.push({path:"/email-auth/1"})},changeNi(){Ue.push({path:"/mypage/changeNickname"})}}},de=me,ve=(0,f.Z)(de,Ze,he,!1,null,null,null),ge=ve.exports,_e=function(){var t=this,e=t._self._c;return e(B.Z,[t._v(" 냉장고 화면 ")])},ke=[],ye={},xe=(0,f.Z)(ye,_e,ke,!1,null,null,null),we=xe.exports,be=function(){var t=this,e=t._self._c;t._self._setupProxy;return e(B.Z,[e(rt.Z,[e(k.Z,{attrs:{justify:"center"}},[e(g.Z,{attrs:{cols:"8"}},[e(v.Z,{attrs:{color:"#f5efe6",height:"800"}},[e(v.Z,{attrs:{color:"#f5efe6",height:"100",flat:""}}),e(k.Z,{attrs:{justify:"center"}},[e(g.Z,{attrs:{xl12:"",md10:"",cols:"4","align-content":"center"}},[e(v.Z,{attrs:{color:"#fefefe",height:"600",rounded:"xl"}},[e(O.EB,{staticClass:"justify-center"},[t._v("닉네임 변경")]),e(O.EB,{staticClass:"pl-15"},[t._v("현재 닉네임")]),e(O.EB,{staticClass:"justify-center pb-15"},[t._v(t._s(t.nickname))]),e(O.EB,{staticClass:"pt-15 pl-15"},[t._v("새로운 닉네임")]),e(g.Z,{attrs:{offset:"2",cols:"8"}},[e(I.Z,{staticClass:"pb-10",attrs:{filled:"",label:"새 닉네임",placeholder:"새로운 닉네임 입력."},model:{value:t.info.nick,callback:function(e){t.$set(t.info,"nick",e)},expression:"info.nick"}})],1),e(k.Z,{attrs:{justify:"center"}},[e(O.h7,[e(d.Z,{attrs:{outlined:"",width:"120",to:"/mypage"}},[t._v("취소")])],1),e(O.h7,[e(d.Z,{attrs:{outlined:"",width:"120"},on:{click:function(e){return t.NNchange()}}},[t._v("확인")])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)},Se=[],Pe=n(7641),Ce=n.n(Pe),je=Ce(),Oe=(0,f.Z)(je,be,Se,!1,null,null,null),Ne=Oe.exports,Be=function(){var t=this,e=t._self._c;return e(B.Z,[t._v(" 비밀번호 수정 화면 ")])},$e=[],Ee={},Ie=(0,f.Z)(Ee,Be,$e,!1,null,null,null),Je=Ie.exports;o.ZP.use(c.ZP);const Le=[{path:"",component:j,children:[{path:"",name:"home",component:at},{path:"recipe",component:ht,children:[{path:"",name:"recipe",component:Bt},{path:"create",name:"createR",component:Lt},{path:"lookup",name:"lookupR",component:Rt},{path:"edit",name:"editR",component:Dt}]},{path:"photo",component:_t,children:[{path:"",name:"photo",component:Vt},{path:"create",name:"createP",component:ne},{path:"lookup",name:"lookupP",component:ce},{path:"edit",name:"editP",component:pe}]},{path:"mypage",component:bt,children:[{path:"",name:"mypage",component:ge},{path:"refrigerator",name:"refrigerator",component:we},{path:"changeNickname",name:"changeNickname",component:Ne},{path:"changePassword",name:"changePassword",component:Je}]}]},{path:"",component:h,children:[{path:"/login",name:"login",component:q},{path:"/signup",name:"signup",component:K},{path:"/email-auth/:id",name:"email-auth",component:nt}]}],Te=new c.ZP({mode:"history",routes:Le});var Ue=Te,We={name:"App",data:()=>({}),created(){const t=localStorage.getItem("UserInfo");console.log("App.vue created"),null==t?Ue.push({name:"login"}):0==t.auto_login&&(console.log("오토 로그인 미선택 - 로그인 화면 이동"),localStorage.removeItem("UserInfo"),Ue.push({name:"login"}))}},Me=We,Re=(0,f.Z)(Me,s,i,!1,null,null,null),Ae=Re.exports,qe=n(1705);o.ZP.use(qe.Z);var Fe=new qe.Z({});o.ZP.config.productionTip=!1,new o.ZP({vuetify:Fe,router:Ue,render:t=>t(Ae)}).$mount("#app")}},e={};function n(o){var l=e[o];if(void 0!==l)return l.exports;var s=e[o]={exports:{}};return t[o](s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,o,l,s){if(!o){var i=1/0;for(u=0;u<t.length;u++){o=t[u][0],l=t[u][1],s=t[u][2];for(var c=!0,a=0;a<o.length;a++)(!1&s||i>=s)&&Object.keys(n.O).every((function(t){return n.O[t](o[a])}))?o.splice(a--,1):(c=!1,s<i&&(i=s));if(c){t.splice(u--,1);var r=l();void 0!==r&&(e=r)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[o,l,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var l,s,i=o[0],c=o[1],a=o[2],r=0;if(i.some((function(e){return 0!==t[e]}))){for(l in c)n.o(c,l)&&(n.m[l]=c[l]);if(a)var u=a(n)}for(e&&e(o);r<i.length;r++)s=i[r],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(u)},o=self["webpackChunkse_project"]=self["webpackChunkse_project"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(2284)}));o=n.O(o)})();
//# sourceMappingURL=app.35355abf.js.map