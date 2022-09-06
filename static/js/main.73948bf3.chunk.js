(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var s,a=c(5),n=c.n(a),l=c(2),i=c(4),r=c(1);!function(e){e[e.SELECT_TODO=0]="SELECT_TODO"}(s||(s={}));var o,d=c(0),j=function(e,t){return t.type===s.SELECT_TODO?Object(i.a)(Object(i.a)({},e),{},{selectedTodo:t.selectedTodo||null}):e},u={selectedTodo:null},b=Object(r.createContext)((function(){})),O=Object(r.createContext)(u),h=function(e){var t=e.children,c=Object(r.useReducer)(j,u),s=Object(l.a)(c,2),a=s[0],n=s[1];return Object(d.jsx)(b.Provider,{value:n,children:Object(d.jsx)(O.Provider,{value:a,children:t})})},x=(c(12),c(13),c(6)),m=c.n(x),f=function(e){var t=e.todo,c=Object(r.useContext)(b),a=Object(r.useContext)(O).selectedTodo;return Object(d.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(d.jsx)("td",{className:"is-vcentered",children:t.id}),Object(d.jsx)("td",{className:"is-vcentered",children:t.completed&&Object(d.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(d.jsx)("i",{className:"fas fa-check"})})}),Object(d.jsx)("td",{className:"is-vcentered is-expanded",children:Object(d.jsx)("p",{className:m()({"has-text-danger":!t.completed,"has-text-success":t.completed}),children:t.title})}),Object(d.jsx)("td",{className:"has-text-right is-vcentered",children:Object(d.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c({type:s.SELECT_TODO,selectedTodo:t})},children:Object(d.jsx)("span",{className:"icon",children:t.id===(null===a||void 0===a?void 0:a.id)?Object(d.jsx)("i",{className:"far fa-eye-slash"}):Object(d.jsx)("i",{className:"far fa-eye"})})})})]})},p=function(e){var t=e.todos;return Object(d.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"#"}),Object(d.jsx)("th",{children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:"fas fa-check"})})}),Object(d.jsx)("th",{children:"Title"}),Object(d.jsx)("th",{children:" "})]})}),Object(d.jsx)("tbody",{children:t.map((function(e){return Object(d.jsx)(f,{todo:e},e.id)}))})]})};!function(e){e.ALL="all",e.ACTIVE="active",e.COMPLETE="completed"}(o||(o={}));var v=function(e){var t=e.filterByStatus,c=e.setFilterByStatus,s=e.filterByContent,a=e.setFilterByContent;return Object(d.jsxs)("form",{className:"field has-addons",children:[Object(d.jsx)("p",{className:"control",children:Object(d.jsx)("span",{className:"select",children:Object(d.jsxs)("select",{"data-cy":"statusSelect",value:t,onChange:function(e){switch(e.target.value){case"active":c(o.ACTIVE);break;case"completed":c(o.COMPLETE);break;default:c(o.ALL)}},children:[Object(d.jsx)("option",{value:o.ALL,children:"All"}),Object(d.jsx)("option",{value:o.ACTIVE,children:"Active"}),Object(d.jsx)("option",{value:o.COMPLETE,children:"Completed"})]})})}),Object(d.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(d.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:s,onChange:function(e){return a(e.target.value)}}),Object(d.jsx)("span",{className:"icon is-left",children:Object(d.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(d.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:s&&Object(d.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return a("")}})})]})]})},N=(c(14),function(){return Object(d.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(d.jsx)("div",{className:"Loader__content"})})});function y(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var C=function(){var e=Object(r.useContext)(b),t=Object(r.useContext)(O).selectedTodo,c=Object(r.useState)(null),a=Object(l.a)(c,2),n=a[0],i=a[1];return Object(r.useEffect)((function(){var e;t&&(e=t.userId,y("/users/".concat(e))).then(i)}),[t]),Object(d.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(d.jsx)("div",{className:"modal-background"}),n&&t?Object(d.jsxs)("div",{className:"modal-card",children:[Object(d.jsxs)("header",{className:"modal-card-head",children:[Object(d.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(d.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return e({type:s.SELECT_TODO,selectedTodo:null})}})]}),Object(d.jsxs)("div",{className:"modal-card-body",children:[Object(d.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(d.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(d.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(d.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(d.jsx)("a",{href:"mailto:".concat(n.email),children:n.name})]})]})]}):Object(d.jsx)(N,{})]})},T=function(e,t){return e.toLowerCase().includes(t.toLowerCase())},E=function(){var e=Object(r.useContext)(O).selectedTodo,t=Object(r.useState)([]),c=Object(l.a)(t,2),s=c[0],a=c[1],n=Object(r.useState)([]),i=Object(l.a)(n,2),j=i[0],u=i[1],b=Object(r.useState)(!1),h=Object(l.a)(b,2),x=h[0],m=h[1],f=Object(r.useState)(o.ALL),E=Object(l.a)(f,2),L=E[0],g=E[1],S=Object(r.useState)(""),k=Object(l.a)(S,2),A=k[0],B=k[1];return Object(r.useEffect)((function(){y("/todos").then(a).then((function(){return m(!0)}))}),[]),Object(r.useEffect)((function(){switch(L){case o.COMPLETE:u(s.filter((function(e){return e.completed})).filter((function(e){return T(e.title,A)})));break;case o.ACTIVE:u(s.filter((function(e){return!e.completed})).filter((function(e){return T(e.title,A)})));break;case o.ALL:default:u(s.filter((function(e){return T(e.title,A)})))}}),[s,L,A]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"box",children:[Object(d.jsx)("h1",{className:"title",children:"Todos:"}),Object(d.jsx)("div",{className:"block",children:Object(d.jsx)(v,{filterByStatus:L,setFilterByStatus:g,filterByContent:A,setFilterByContent:B})}),Object(d.jsx)("div",{className:"block",children:x?Object(d.jsx)(p,{todos:j}):Object(d.jsx)(N,{})})]})})}),e&&Object(d.jsx)(C,{})]})};n.a.render(Object(d.jsx)(h,{children:Object(d.jsx)(E,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.73948bf3.chunk.js.map