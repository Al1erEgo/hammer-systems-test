(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[17],{525:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(21),a=n.n(c),i=n(97),o=n(74),s=n(505),l=n(546),d=n(549),u={TABLE:"table",TABLE2:"table2",TABLE3:"table3"},j=function(e){var t=e.x,n=e.y,c=e.children,a=Object(d.a)((function(){return{accept:Object(s.a)(Object.values(u)),drop:function(){return{x:t,y:n}},collect:function(e){return{isOver:e.isOver()?"green":"lightgray"}}}}),[t,n]),i=Object(o.a)(a,2),l=i[0].isOver,j=i[1];return Object(r.jsx)("div",{ref:j,style:{width:"100%",height:"100%",backgroundColor:l,border:"solid black 1px"},children:c})},p=n(0),b=n(550),f=function(e){var t=e.locateElement,n=e.type,c=e.width,a=e.id,i=Object(b.a)((function(){return{type:n,item:{id:a},end:function(e,r){var c=r.getDropResult();e&&c&&t(c.x,c.y,n,e.id)},collect:function(e){return{opacity:e.isDragging()?.4:1}}}}),[t,n]),s=Object(o.a)(i,2),l=s[0].opacity,d=s[1];return Object(r.jsx)("img",{ref:d,style:{opacity:l},src:"/hammer-systems-test"+"/img/elements/".concat(n,".png"),width:c||"70px",alt:"table"})},h=function(e,t,n,c){if(c[e][t])return Object(r.jsx)(f,{locateElement:n,type:c[e][t].type,width:"100%",id:c[e][t].id})},x=function(e,t,n){var c=e%10,a=Math.floor(e/10);return Object(r.jsx)("div",{style:{minWidth:"3vw",minHeight:"3vw",maxWidth:"3vw",maxHeight:"3vw"},children:Object(r.jsx)(j,{x:c,y:a,children:h(c,a,t,n)})},e)},O=function(e){var t=function(e,t){for(var n=[],r=0;r<100;r++)n.push(x(r,e,t));return n}(e.addElementOnBoard,e.elementsOnBoard);return Object(r.jsx)(l.a,{title:"\u041a\u0430\u0440\u0442\u0430 \u0437\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u044f",bodyStyle:{padding:"20px"},children:Object(r.jsx)("div",{style:{display:"flex",margin:"0 auto",flexWrap:"wrap",maxWidth:"30vw",minWidth:"30vw"},children:t})})},y=function(e){var t=e.locateElement;return Object(r.jsx)(l.a,{title:"\u041c\u0435\u043d\u044e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432",bodyStyle:{padding:"20px"},children:Object(r.jsx)("div",{style:{display:"flex",gap:"5px",flexWrap:"wrap",justifyContent:"center"},children:Object.values(u).map((function(e){return Object(r.jsx)(f,{locateElement:t,type:e})}))})})},v=n(500),m=n(501),w=n(542),g=n(524),E=n(551),k=n(106),B=n(544),L=function(e){var t=e.onSave,n=e.onLoad;return Object(r.jsx)(l.a,{bodyStyle:{padding:"20px"},children:Object(r.jsxs)("div",{style:{overflow:"hidden"},children:[Object(r.jsx)(k.a,{style:{width:"100%"},onClick:t,type:"primary",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0432 \u0444\u0430\u0439\u043b"}),Object(r.jsx)(B.a,{style:{width:"100%"},showUploadList:!1,accept:".txt",customRequest:n,children:Object(r.jsx)(k.a,{style:{marginTop:"10px",width:"100%"},children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0438\u0437 \u0444\u0430\u0439\u043b\u0430"})})]})})},S=function(e){return new Promise((function(t,n){var r=new FileReader;r.readAsText(e),r.onload=function(){return t(r.result)},r.onerror=function(e){return n(e)}}))};t.default=function(){var e=Object(p.useState)([[],[],[],[],[],[],[],[],[],[],{}]),t=Object(o.a)(e,2),n=t[0],c=t[1],l=function(e,t,n,r){r?function(e,t,n,r,c){c((function(c){var a=Object(s.a)(c),i=a[10][r][0],o=a[10][r][1];return a[i][o]=void 0,a[e][t]={type:n,id:r},a[10][r]=[e,t],a}))}(e,t,n,r,c):function(e,t,n,r){r((function(r){var c=Object(E.a)(),a=Object(s.a)(r);return a[e][t]={type:n,id:c},a[10][c]=[e,t],a}))}(e,t,n,c)},d=function(){var e=Object(i.a)(a.a.mark((function e(){var t,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=new Blob([JSON.stringify(n)],{type:"application/json"}),(r=document.createElement("a")).download="\u0420\u0430\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430.txt",r.href=URL.createObjectURL(t),document.body.appendChild(r),r.click();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(i.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=6;break}return e.next=3,S(t.file);case 3:n=e.sent,r=JSON.parse(n),c(r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)(w.a,{backend:g.a,children:[Object(r.jsxs)(v.a,{gutter:16,children:[Object(r.jsx)(m.a,{className:"gutter-row",span:6,children:Object(r.jsx)(y,{locateElement:l})}),Object(r.jsx)(m.a,{className:"gutter-row",span:18,children:Object(r.jsx)(O,{addElementOnBoard:l,elementsOnBoard:n})})]}),Object(r.jsx)(v.a,{gutter:16,children:Object(r.jsx)(m.a,{className:"gutter-row",span:24,children:Object(r.jsx)(L,{onSave:d,onLoad:u})})})]})}}}]);
//# sourceMappingURL=17.6f72f1c8.chunk.js.map