(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[8],{282:function(e,t,a){"use strict";var c=a(4),r=a(3),n=a(24),s=a(0),i=a(6),o=a.n(i),l=a(486),u=a(60),d=function(e,t){var a={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(a[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(c=Object.getOwnPropertySymbols(e);r<c.length;r++)t.indexOf(c[r])<0&&Object.prototype.propertyIsEnumerable.call(e,c[r])&&(a[c[r]]=e[c[r]])}return a};var j=["xs","sm","md","lg","xl","xxl"],b=s.forwardRef((function(e,t){var a,i=s.useContext(u.b),b=i.getPrefixCls,m=i.direction,f=s.useContext(l.a),p=f.gutter,h=f.wrap,O=e.prefixCls,x=e.span,g=e.order,y=e.offset,v=e.push,w=e.pull,N=e.className,P=e.children,k=e.flex,C=e.style,A=d(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),E=b("col",O),F={};j.forEach((function(t){var a,s={},i=e[t];"number"===typeof i?s.span=i:"object"===Object(n.a)(i)&&(s=i||{}),delete A[t],F=Object(r.a)(Object(r.a)({},F),(a={},Object(c.a)(a,"".concat(E,"-").concat(t,"-").concat(s.span),void 0!==s.span),Object(c.a)(a,"".concat(E,"-").concat(t,"-order-").concat(s.order),s.order||0===s.order),Object(c.a)(a,"".concat(E,"-").concat(t,"-offset-").concat(s.offset),s.offset||0===s.offset),Object(c.a)(a,"".concat(E,"-").concat(t,"-push-").concat(s.push),s.push||0===s.push),Object(c.a)(a,"".concat(E,"-").concat(t,"-pull-").concat(s.pull),s.pull||0===s.pull),Object(c.a)(a,"".concat(E,"-rtl"),"rtl"===m),a))}));var I=o()(E,(a={},Object(c.a)(a,"".concat(E,"-").concat(x),void 0!==x),Object(c.a)(a,"".concat(E,"-order-").concat(g),g),Object(c.a)(a,"".concat(E,"-offset-").concat(y),y),Object(c.a)(a,"".concat(E,"-push-").concat(v),v),Object(c.a)(a,"".concat(E,"-pull-").concat(w),w),a),N,F),S=Object(r.a)({},C);return p&&(S=Object(r.a)(Object(r.a)(Object(r.a)({},p[0]>0?{paddingLeft:p[0]/2,paddingRight:p[0]/2}:{}),p[1]>0?{paddingTop:p[1]/2,paddingBottom:p[1]/2}:{}),S)),k&&(S.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(k),"auto"!==k||!1!==h||S.minWidth||(S.minWidth=0)),s.createElement("div",Object(r.a)({},A,{style:S,className:I,ref:t}),P)}));b.displayName="Col",t.a=b},283:function(e,t,a){"use strict";var c=a(3),r=a(4),n=a(24),s=a(8),i=a(0),o=a(6),l=a.n(o),u=a(60),d=a(486),j=a(56),b=a(165),m=function(e,t){var a={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(a[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(c=Object.getOwnPropertySymbols(e);r<c.length;r++)t.indexOf(c[r])<0&&Object.prototype.propertyIsEnumerable.call(e,c[r])&&(a[c[r]]=e[c[r]])}return a},f=(Object(j.a)("top","middle","bottom","stretch"),Object(j.a)("start","end","center","space-around","space-between"),i.forwardRef((function(e,t){var a,o=e.prefixCls,j=e.justify,f=e.align,p=e.className,h=e.style,O=e.children,x=e.gutter,g=void 0===x?0:x,y=e.wrap,v=m(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),w=i.useContext(u.b),N=w.getPrefixCls,P=w.direction,k=i.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),C=Object(s.a)(k,2),A=C[0],E=C[1],F=i.useRef(g);i.useEffect((function(){var e=b.a.subscribe((function(e){var t=F.current||0;(!Array.isArray(t)&&"object"===Object(n.a)(t)||Array.isArray(t)&&("object"===Object(n.a)(t[0])||"object"===Object(n.a)(t[1])))&&E(e)}));return function(){return b.a.unsubscribe(e)}}),[]);var I=N("row",o),S=function(){var e=[0,0];return(Array.isArray(g)?g:[g,0]).forEach((function(t,a){if("object"===Object(n.a)(t))for(var c=0;c<b.b.length;c++){var r=b.b[c];if(A[r]&&void 0!==t[r]){e[a]=t[r];break}}else e[a]=t||0})),e}(),R=l()(I,(a={},Object(r.a)(a,"".concat(I,"-no-wrap"),!1===y),Object(r.a)(a,"".concat(I,"-").concat(j),j),Object(r.a)(a,"".concat(I,"-").concat(f),f),Object(r.a)(a,"".concat(I,"-rtl"),"rtl"===P),a),p),T=Object(c.a)(Object(c.a)(Object(c.a)({},S[0]>0?{marginLeft:S[0]/-2,marginRight:S[0]/-2}:{}),S[1]>0?{marginTop:S[1]/-2,marginBottom:S[1]/2}:{}),h);return i.createElement(d.a.Provider,{value:{gutter:S,wrap:y}},i.createElement("div",Object(c.a)({},v,{className:R,style:T,ref:t}),O))})));f.displayName="Row",t.a=f},486:function(e,t,a){"use strict";var c=a(0),r=Object(c.createContext)({});t.a=r},487:function(e,t,a){"use strict";var c=a(193),r={login:function(e){return Object(c.a)({url:"/posts",method:"post",headers:{"public-request":"true"},data:e})},signUp:function(e){return Object(c.a)({url:"/auth/signup",method:"post",headers:{"public-request":"true"},data:e})}};t.a=r},491:function(e,t,a){"use strict";var c=a(283);t.a=c.a},492:function(e,t,a){"use strict";var c=a(282);t.a=c.a},494:function(e,t,a){"use strict";var c=a(2),r=a(76),n=a(0),s=a(38),i=a(477),o=a(529),l=a(526),u=a(528),d=a(463),j=a(111),b=a(53),m=a(42),f=a(489),p=a(487),h={email:[{required:!0,message:"Please input your email address"},{type:"email",message:"Please enter a validate email!"}],password:[{required:!0,message:"Please input your password"}],confirm:[{required:!0,message:"Please confirm your password!"},function(e){var t=e.getFieldValue;return{validator:function(e,a){return a&&t("password")!==a?Promise.reject("Passwords do not match!"):Promise.resolve()}}}]},O={showAuthMessage:b.c,hideAuthMessage:b.b,showLoading:b.d,authenticated:b.a};t.a=Object(s.b)((function(e){var t=e.auth;return{loading:t.loading,message:t.message,showMessage:t.showMessage,token:t.token,redirect:t.redirect}}),O)((function(e){var t=e.showLoading,a=e.token,s=e.loading,O=e.redirect,x=e.message,g=e.showMessage,y=e.hideAuthMessage,v=e.authenticated,w=e.allowRedirect,N=l.a.useForm(),P=Object(r.a)(N,1)[0],k=Object(m.g)();return Object(n.useEffect)((function(){null!==a&&w&&k.push(O),g&&setTimeout((function(){y()}),3e3)})),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(f.a.div,{initial:{opacity:0,marginBottom:0},animate:{opacity:g?1:0,marginBottom:g?20:0},children:Object(c.jsx)(u.a,{type:"error",showIcon:!0,message:x})}),Object(c.jsxs)(l.a,{form:P,layout:"vertical",name:"register-form",onFinish:function(){P.validateFields().then((function(e){t();p.a.signUp(e).then((function(e){v("fakeToken")})).then((function(e){Object(b.c)(e)}))})).catch((function(e){console.log("Validate Failed:",e)}))},children:[Object(c.jsx)(l.a.Item,{name:"email",label:"Email",rules:h.email,hasFeedback:!0,children:Object(c.jsx)(d.a,{prefix:Object(c.jsx)(i.a,{className:"text-primary"})})}),Object(c.jsx)(l.a.Item,{name:"password",label:"Password",rules:h.password,hasFeedback:!0,children:Object(c.jsx)(d.a.Password,{prefix:Object(c.jsx)(o.a,{className:"text-primary"})})}),Object(c.jsx)(l.a.Item,{name:"confirm",label:"ConfirmPassword",rules:h.confirm,hasFeedback:!0,children:Object(c.jsx)(d.a.Password,{prefix:Object(c.jsx)(o.a,{className:"text-primary"})})}),Object(c.jsx)(l.a.Item,{children:Object(c.jsx)(j.a,{type:"primary",htmlType:"submit",block:!0,loading:s,children:"Sign Up"})})]})]})}))},519:function(e,t,a){"use strict";a.r(t);var c=a(15),r=a(2),n=(a(0),a(494)),s=a(491),i=a(492),o=a(38),l={backgroundImage:"url(".concat("/img/others/img-17.jpg",")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"};t.default=function(e){var t=Object(o.c)((function(e){return e.theme.currentTheme}));return Object(r.jsx)("div",{className:"h-100 ".concat("light"===t?"bg-white":""),children:Object(r.jsxs)(s.a,{justify:"center",className:"align-items-stretch h-100",children:[Object(r.jsx)(i.a,{xs:20,sm:20,md:24,lg:16,children:Object(r.jsx)("div",{className:"container d-flex flex-column justify-content-center h-100",children:Object(r.jsx)(s.a,{justify:"center",children:Object(r.jsxs)(i.a,{xs:24,sm:24,md:20,lg:12,xl:8,children:[Object(r.jsx)("h1",{children:"Sign Up"}),Object(r.jsxs)("p",{children:["Already have an account? ",Object(r.jsx)("a",{href:"/auth/login-2",children:"Sign In"})]}),Object(r.jsx)("div",{className:"mt-4",children:Object(r.jsx)(n.a,Object(c.a)({},e))})]})})})}),Object(r.jsx)(i.a,{xs:0,sm:0,md:0,lg:8,children:Object(r.jsxs)("div",{className:"d-flex flex-column justify-content-between h-100 px-4",style:l,children:[Object(r.jsx)("div",{className:"text-right",children:Object(r.jsx)("img",{src:"/img/logo-white.png",alt:"logo"})}),Object(r.jsx)(s.a,{justify:"center",children:Object(r.jsxs)(i.a,{xs:0,sm:0,md:0,lg:20,children:[Object(r.jsx)("img",{className:"img-fluid mb-5",src:"/img/others/img-19.png",alt:""}),Object(r.jsx)("h1",{className:"text-white",children:"Welcome to emilus"}),Object(r.jsx)("p",{className:"text-white",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat, vel convallis elit fermentum pellentesque."})]})}),Object(r.jsx)("div",{className:"d-flex justify-content-end pb-4",children:Object(r.jsxs)("div",{children:[Object(r.jsx)("a",{className:"text-white",href:"/#",onClick:function(e){return e.preventDefault()},children:"Term & Conditions"}),Object(r.jsx)("span",{className:"mx-2 text-white",children:" | "}),Object(r.jsx)("a",{className:"text-white",href:"/#",onClick:function(e){return e.preventDefault()},children:"Privacy & Policy"})]})})]})})]})})}}}]);
//# sourceMappingURL=8.c14c1c9e.chunk.js.map