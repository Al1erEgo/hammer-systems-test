(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[15],{499:function(e,t,n){"use strict";n.r(t);var s=n(76),c=n(2),a=n(0),r=n(518),i=n(195),o=n(111),d=n(516),l=n(515),u=n(504),j=n(127),x=n(38),m=n(101),b=n(48),f=n(18),O=[{title:"\u041a\u043b\u0438\u0435\u043d\u0442",dataIndex:"info",render:function(e){return Object(c.jsxs)("div",{className:"d-flex flex-column",children:[Object(c.jsx)(r.a.Text,{strong:!0,children:e.name}),Object(c.jsx)(r.a.Text,{type:"secondary",children:e.username})]})},sorter:{compare:function(e,t){return(e=e.info.name.toLowerCase())>(t=t.info.name.toLowerCase())?-1:t>e?1:0}}},{title:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b",dataIndex:"contacts",render:function(e){return Object(c.jsxs)("div",{className:"d-flex flex-column",children:[Object(c.jsx)(r.a.Text,{strong:!0,children:e.email}),Object(c.jsx)(r.a.Text,{type:"secondary",children:e.phone}),Object(c.jsx)(r.a.Link,{children:e.website})]})}},{title:"\u0410\u0434\u0440\u0435\u0441",dataIndex:"address",render:function(e){return Object(c.jsxs)("div",{className:"d-flex flex-column",children:[Object(c.jsx)(r.a.Text,{strong:!0,children:e.city}),Object(c.jsx)(r.a.Text,{type:"secondary",children:e.street})]})},sorter:{compare:function(e,t){return(e=e.address.city.toLowerCase())>(t=t.address.city.toLowerCase())?-1:t>e?1:0}}},{title:"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f",dataIndex:"company",render:function(e){return Object(c.jsxs)("div",{className:"d-flex flex-column",children:[Object(c.jsx)(r.a.Text,{strong:!0,children:e.name}),Object(c.jsx)(r.a.Text,{type:"secondary",children:e.catchPhrase})]})},sorter:{compare:function(e,t){return(e=e.company.name.toLowerCase())>(t=t.company.name.toLowerCase())?-1:t>e?1:0}}},{title:"",dataIndex:"actions",render:function(e,t){return Object(c.jsx)("div",{className:"text-left",children:Object(c.jsx)(i.a,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",children:Object(c.jsx)(b.b,{to:"".concat(f.c,"/main/clients/edit-user/").concat(t.key),children:Object(c.jsx)(o.a,{type:"primary",className:"mr-2",icon:Object(c.jsx)(u.a,{}),size:"small"})})})})}}],h={getUsers:j.a};t.default=Object(x.b)((function(e){var t=e.users;return{loading:t.loading,usersList:t.usersList}}),h)((function(e){var t=e.loading,n=e.usersList,r=e.getUsers,i=Object(a.useState)([]),o=Object(s.a)(i,2),u=o[0],j=o[1];return Object(a.useEffect)((function(){r()}),[r]),Object(a.useEffect)((function(){var e;n&&j(null===(e=n)||void 0===e?void 0:e.map((function(e){return{key:e.id,info:{name:e.name,username:e.username},contacts:{email:e.email,phone:e.phone,website:e.website},address:e.address,company:e.company}})))}),[n]),t?Object(c.jsx)(m.a,{cover:"content"}):Object(c.jsx)(d.a,{bodyStyle:{padding:"0px"},children:Object(c.jsx)(l.a,{columns:O,dataSource:u,rowKey:"key"})})}))}}]);
//# sourceMappingURL=15.871abcf4.chunk.js.map