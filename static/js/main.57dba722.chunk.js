(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,n){e.exports={global:"Message_global__2ZzuQ",avatar:"Message_avatar__2GcBa",message:"Message_message__33u83",name:"Message_name__2fs5z",time:"Message_time__f0-qg"}},16:function(e,t,n){e.exports={someClass:"Greeting_someClass__277mM",error:"Greeting_error__po7LW",button:"Greeting_button__3aOh8",input:"Greeting_input__2uPFg",span:"Greeting_span__3Gr71",div:"Greeting_div__2-TPs"}},23:function(e,t,n){e.exports={dark:"HW12_dark__3oPyd","dark-text":"HW12_dark-text__1_IIH",red:"HW12_red__j2bsG","red-text":"HW12_red-text__2kEJx",some:"HW12_some__2M_8z","some-text":"HW12_some-text__12hKU"}},25:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__3vDG1",errorInput:"SuperInputText_errorInput__fM_WM",error:"SuperInputText_error__28Imc"}},26:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__2ut5l",errorInput:"SuperInputText_errorInput__2burA",error:"SuperInputText_error__3zCTp"}},27:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__1GCBr",spanClassName:"SuperCheckbox_spanClassName__3XtVy"}},39:function(e,t,n){e.exports={App:"App_App__15a0_"}},44:function(e,t,n){e.exports={range:"SuperRange_range__1LQc3"}},51:function(e,t,n){},53:function(e,t,n){},59:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(19),s=n.n(a),i=(n(51),n(39)),o=n.n(i),j=n(10),u=n(13),l=n.n(u),b=n(0);var d=function(e){return Object(b.jsxs)("div",{className:l.a.global,children:[Object(b.jsx)("div",{className:l.a.avatar,children:Object(b.jsx)("img",{src:e.avatar})}),Object(b.jsx)("div",{className:l.a.message,children:e.message}),Object(b.jsx)("div",{className:l.a.name,children:Object(b.jsxs)("b",{children:[" ",e.name]})}),Object(b.jsx)("div",{className:l.a.time,children:e.time})]})},O="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",h="Some Name",x="\u0422\u044b \u043d\u0430\u0436\u0430\u043b NPM?",m="22:00";var p=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(d,{avatar:O,name:h,message:x,time:m})})},f=n(2);var v=function(e){return Object(b.jsxs)("div",{children:[e.affair.name,Object(b.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var g=function(e){var t=e.data.map((function(t){return Object(b.jsx)(v,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(b.jsxs)("div",{children:[t,Object(b.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(b.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(b.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(b.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})},_=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var C=function(){var e=Object(c.useState)(_),t=Object(f.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)("all"),s=Object(f.a)(a,2),i=s[0],o=s[1],j=function(e,t){return"all"===t?e.filter((function(e){return e.priority===e.priority})):"high"===t?e.filter((function(e){return"high"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):void 0}(n,i);return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 2",Object(b.jsx)(g,{data:j,setFilter:o,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},k=n(15),N=n(16),y=n.n(N),S=n(5),w=n(4),T=function(e){e.red;var t=e.className,n=Object(w.a)(e,["red","className"]),c="".concat(t);return Object(b.jsx)("button",Object(S.a)({className:c},n))},E=n(25),I=n.n(E),z=function(e){e.type;var t=e.onChange,n=e.onChangeText,c=e.onKeyPress,r=e.onEnter,a=e.error,s=e.className,i=e.spanClassName,o=Object(w.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(I.a.error," ").concat(i||""),u="".concat(I.a.errorInput," ").concat(s||"");return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",Object(S.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){c&&c(e),r&&"Enter"===e.key&&r()},className:u},o)),a&&Object(b.jsx)("span",{className:j,children:a})]})},P=function(e){var t=e.name,n=e.setNameCallback,c=e.addUser,r=e.error,a=e.totalUsers,s=t.charAt(0).toUpperCase()+t.slice(1),i=s.length<=2?y.a.error:y.a.input;return Object(b.jsxs)("div",{className:y.a.div,onKeyPress:function(e){"Enter"===e.code&&c()},children:[Object(b.jsx)(z,{placeholder:r,className:i,value:s,onChange:n}),Object(b.jsx)(T,{onClick:c,className:y.a.button,children:"add"}),Object(b.jsxs)("b",{children:[" ",a]})]})},A=function(e){var t=e.users,n=e.addUserCallback,r=Object(c.useState)(""),a=Object(f.a)(r,2),s=a[0],i=a[1],o=Object(c.useState)(""),j=Object(f.a)(o,2),u=j[0],l=j[1],d=t.length;return Object(b.jsx)(P,{name:s,setNameCallback:function(e){var t=e.currentTarget.value;["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",""].includes(t.slice(-1).toLowerCase())&&(l(""),i(t))},addUser:function(){s.length<=2?(i(""),l("error")):(alert("Hello ".concat(s," ! ")),n(s),i(""))},error:u,totalUsers:d})},H=n(80);var W=function(){var e=Object(c.useState)([]),t=Object(f.a)(e,2),n=t[0],r=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 3",Object(b.jsx)(A,{users:n,addUserCallback:function(e){var t={name:e,_id:Object(H.a)()};r([t].concat(Object(k.a)(n)))}}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},M=n(26),G=n.n(M),U=function(e){e.type;var t=e.onChange,n=e.onChangeText,c=e.onKeyPress,r=e.onEnter,a=e.error,s=e.className,i=e.spanClassName,o=Object(w.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(G.a.error," ").concat(i||""),u="".concat(G.a.errorInput," ").concat(s||"");return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",Object(S.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){c&&c(e),r&&"Enter"===e.key&&r()},className:u},o)),a&&Object(b.jsx)("span",{className:j,children:a})]})},F=n(8),R=n.n(F),L=function(e){e.red;var t=e.className,n=Object(w.a)(e,["red","className"]),c="".concat(t);return Object(b.jsx)("button",Object(S.a)({className:c},n))},D=n(27),J=n.n(D),B=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,c=e.className,r=(e.spanClassName,e.children),a=Object(w.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(J.a.checkbox," ").concat(c||"");return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",Object(S.a)({type:"checkbox",onChange:function(e){n&&n(e.currentTarget.checked),t&&t(e)},className:s,checked:a.checked},a)),r&&Object(b.jsx)("span",{className:J.a.spanClassName,children:r})]})};var K=function(){var e=Object(c.useState)(""),t=Object(f.a)(e,2),n=t[0],r=t[1],a=n?"":"error",s=function(){a?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(c.useState)(!1),o=Object(f.a)(i,2),j=o[0],u=o[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 4",Object(b.jsxs)("div",{className:R.a.column,children:[Object(b.jsx)(U,{className:R.a.input,value:n,onChangeText:r,onEnter:s,error:a,spanClassName:R.a.testSpanError}),Object(b.jsx)(U,{className:R.a.input}),Object(b.jsx)(L,{className:R.a.button,children:"default"}),Object(b.jsx)(L,{red:!0,onClick:s,className:R.a.buttondelete,children:"delete "}),Object(b.jsx)(L,{disabled:!0,className:R.a.buttondisable,children:"disabled"}),Object(b.jsx)(B,{checked:j,onChangeChecked:u,className:R.a.check}),Object(b.jsx)(B,{checked:j,onChange:function(e){return u(e.currentTarget.checked)}})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},Z=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,r=e.spanProps,a=Object(w.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(c.useState)(!1),i=Object(f.a)(s,2),o=i[0],j=i[1],u=r||{},l=u.children,d=u.onDoubleClick,O=u.className,h=Object(w.a)(u,["children","onDoubleClick","className"]),x="\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",O);return Object(b.jsx)(b.Fragment,{children:o?Object(b.jsx)(U,Object(S.a)({autoFocus:!0,onBlur:function(e){j(!o),t&&t(e)},onEnter:function(){j(!o),n&&n()}},a)):Object(b.jsx)("span",Object(S.a)(Object(S.a)({onDoubleClick:function(e){j(!o),d&&d(e)},className:x},h),{},{children:l||a.value}))})};function Y(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function q(e,t){var n=t,c=localStorage.getItem(e);return null!==c&&(n=JSON.parse(c)),n}Y("test",{x:"A",y:1});q("test",{x:"",y:0});var Q=function(){var e=Object(c.useState)(""),t=Object(f.a)(e,2),n=t[0],r=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 6",Object(b.jsx)("div",{children:Object(b.jsx)(Z,{value:n,onChangeText:r,spanProps:{children:n?void 0:"enter text..."}})}),Object(b.jsx)(L,{onClick:function(){Y("editable-span-value",n)},children:"save"}),Object(b.jsx)(L,{onClick:function(){r(q("editable-span-value",n))},children:"restore"}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},X=function(e){var t=e.options,n=(e.onChange,e.onChangeOption),c=e.value,r=(Object(w.a)(e,["options","onChange","onChangeOption","value"]),t?t.map((function(e,t){return Object(b.jsx)("option",{children:e},t)})):[]);return Object(b.jsx)("select",{onChange:function(e){n&&n(e.currentTarget.selectedIndex),console.log(e.currentTarget.selectedIndex),console.log(c)},value:c,children:r})},V=function(e){e.type;var t=e.name,n=e.options,c=e.value;e.onChange,e.onChangeOption,Object(w.a)(e,["type","name","options","value","onChange","onChangeOption"]);console.log(c);var r=n?n.map((function(e,n){return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"radio",checked:c===e,value:e}),e]},t+"-"+n)})):[];return Object(b.jsx)(b.Fragment,{children:r})},$=["x","y","z"];var ee=function(){var e=Object(c.useState)($[0]),t=Object(f.a)(e,2),n=t[0],r=t[1];return console.log(n),Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 7",Object(b.jsx)("div",{children:Object(b.jsx)(X,{options:$,value:n,onChangeOption:r})}),Object(b.jsx)("div",{children:Object(b.jsx)(V,{name:"radio",options:$,value:n,onChangeOption:r})}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var te=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(p,{}),Object(b.jsx)(C,{}),Object(b.jsx)(W,{}),Object(b.jsx)(K,{}),Object(b.jsx)(Q,{}),Object(b.jsx)(ee,{})]})},ne=n(3);n(53);var ce=function(){return Object(b.jsxs)("div",{className:"error",children:[Object(b.jsx)("div",{children:"404"}),Object(b.jsx)("div",{children:"Page not found!"}),Object(b.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},re=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var ae=function(){var e=Object(c.useState)(re),t=Object(f.a)(e,2),n=t[0],r=t[1],a=n.map((function(e){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("span",{children:[e.name," "]}),Object(b.jsxs)("span",{children:[" ",e.age]})]},e._id)})),s=function(e){return r(function(e,t){switch(t.type){case"UP":return Object(k.a)(e).sort((function(e,t){return e.name.localeCompare(t.name)}));case"DOWN":return Object(k.a)(e).sort((function(e,t){return t.name.localeCompare(e.name)}));case"AGE18":return e.filter((function(e){return e.age>=18}));default:return e}}(re,{type:e}))};return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),Object(b.jsx)("b",{children:" homeworks 8 "}),a,Object(b.jsx)("div",{children:Object(b.jsx)(L,{onClick:function(){return s("UP")},children:"sort up"})}),Object(b.jsx)("div",{children:Object(b.jsx)(L,{onClick:function(){return s("DOWN")},children:"sort down"})}),Object(b.jsx)("div",{children:Object(b.jsx)(L,{onClick:function(){return s("AGE18")},children:"check 18"})}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var se=function(){var e=Object(c.useState)(0),t=Object(f.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(),s=Object(f.a)(a,2),i=s[0],o=s[1],j=Object(c.useState)(!1),u=Object(f.a)(j,2),l=u[0],d=u[1],O=function(){clearInterval(n)},h=null===i||void 0===i?void 0:i.toLocaleTimeString(),x=null===i||void 0===i?void 0:i.toLocaleDateString();return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{onMouseEnter:function(){d(!0)},onMouseLeave:function(){d(!1)},children:h}),l&&Object(b.jsx)("div",{children:x}),Object(b.jsxs)("div",{style:{display:"inline-flex"},children:[Object(b.jsx)("button",{onClick:function(){O();var e=window.setInterval((function(){o(new Date)}),1e3);r(e)},children:"start"}),Object(b.jsx)("button",{onClick:O,children:"stop"})]})]})};var ie,oe,je,ue=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 9",Object(b.jsx)(se,{}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},le=n(21),be=n(22),de=be.a.div(oe||(oe=Object(le.a)(["\n  display: inline-block;\n  transform: translateZ(1px);\n"]))),Oe=be.a.div(je||(je=Object(le.a)(["\n  display: inline-block;\n  width: ",";\n  height: ",";\n  margin: 6px;\n  border-radius: 50%;\n  background: ",";\n  animation: "," 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n"])),(function(e){return"".concat(e.size).concat(e.sizeUnit)}),(function(e){return"".concat(e.size).concat(e.sizeUnit)}),(function(e){return e.color}),(function(e){return Object(be.b)(ie||(ie=Object(le.a)(["\n  0%,\n  100% {\n    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);\n  }\n  0% {\n    transform: rotateY(0deg);\n  }\n  50% {\n    transform: rotateY(1800deg);\n    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);\n  }\n  100% {\n    transform: rotateY(3600deg);\n  }\n"])))})),he=function(e){var t=e.color,n=e.size,c=e.sizeUnit;return Object(b.jsx)(de,{children:Object(b.jsx)(Oe,{color:t,size:n,sizeUnit:c})})};he.defaultProps={size:50,color:"#00bfff",sizeUnit:"px"};var xe=he,me=n(9),pe=function(e){return{type:"LOADING",value:e}};var fe=function(){var e=Object(me.c)((function(e){return e.loadingReducer})),t=Object(me.b)();return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 10",e?Object(b.jsx)("div",{children:Object(b.jsx)(xe,{})}):Object(b.jsx)("div",{children:Object(b.jsx)(L,{onClick:function(){t(pe(!0)),setTimeout((function(){t(pe(!1))}),2e3)},children:"set loading..."})}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},ve=n(44),ge=n.n(ve),_e=function(e){e.type;var t=e.onChange,n=e.onChangeRange,c=e.className,r=Object(w.a)(e,["type","onChange","onChangeRange","className"]),a="".concat(ge.a.range," ").concat(c||"");return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("input",Object(S.a)({type:"range",onChange:function(e){t&&t(e),n&&n(+e.currentTarget.value),console.log(+e.currentTarget.value)},className:a},r))})},Ce=n(45),ke=n.n(Ce),Ne=(n(59),function(e){var t=e.min,n=e.max,r=e.onChange,a=Object(c.useState)(t),s=Object(f.a)(a,2),i=s[0],o=s[1],j=Object(c.useState)(n),u=Object(f.a)(j,2),l=u[0],d=u[1],O=Object(c.useRef)(null),h=Object(c.useRef)(null),x=Object(c.useRef)(null),m=Object(c.useCallback)((function(e){return Math.round((e-t)/(n-t)*100)}),[t,n]);return Object(c.useEffect)((function(){if(h.current){var e=m(i),t=m(+h.current.value);x.current&&(x.current.style.left="".concat(e,"%"),x.current.style.width="".concat(t-e,"%"))}}),[i,m]),Object(c.useEffect)((function(){if(O.current){var e=m(+O.current.value),t=m(l);x.current&&(x.current.style.width="".concat(t-e,"%"))}}),[l,m]),Object(c.useEffect)((function(){r({min:i,max:l})}),[i,l,r]),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("input",{type:"range",min:t,max:n,value:i,ref:O,onChange:function(e){var t=Math.min(+e.target.value,l-1);o(t),e.target.value=t.toString()},className:ke()("thumb thumb--zindex-3",{"thumb--zindex-5":i>n-100})}),Object(b.jsx)("input",{type:"range",min:t,max:n,value:l,ref:h,onChange:function(e){var t=Math.max(+e.target.value,i+1);d(t),e.target.value=t.toString()},className:"thumb thumb--zindex-4"}),Object(b.jsxs)("div",{className:"slider",children:[Object(b.jsx)("div",{className:"slider__track"}),Object(b.jsx)("div",{ref:x,className:"slider__range"})]})]})});var ye=function(){var e=Object(c.useState)(0),t=Object(f.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(100),s=Object(f.a)(a,2),i=s[0],o=s[1],j=Object(c.useState)(100),u=Object(f.a)(j,2),l=u[0],d=u[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 11",Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:n}),Object(b.jsx)(_e,{onChangeRange:function(e){return r(e)}})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{children:[Object(b.jsx)(Ne,{min:0,max:1e3,onChange:function(e){var t=e.min,n=e.max;o(t),d(n)}}),Object(b.jsxs)("div",{style:{fontSize:"20px"},children:["Min: ",i]}),Object(b.jsxs)("div",{style:{fontSize:"20px"},children:["Max: ",l]})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},Se=n(23),we=n.n(Se),Te="some",Ee=["dark","red","some"];var Ie=function(){var e=Object(me.c)((function(e){return e.themeReducer})),t=Object(me.b)();return Object(b.jsxs)("div",{className:we.a[e],children:[Object(b.jsx)("hr",{}),Object(b.jsx)("span",{className:we.a[e+"-text"],children:Object(b.jsx)("select",{className:we.a[e],value:e,onChange:function(e){!function(e){t({type:"CHANGE-THEME",value:e})}(e.currentTarget.value)},children:Ee.map((function(e){return Object(b.jsxs)("option",{value:e,children:[" ",e," "]})}))})}),Object(b.jsx)("hr",{})]})},ze=n(46),Pe=n.n(ze).a.create({baseURL:"https://neko-cafe-back.herokuapp.com/"}),Ae=function(e){return Pe.post("auth/test",{success:e})},He=function(){var e=Object(c.useState)(),t=Object(f.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(),s=Object(f.a)(a,2),i=s[0],o=s[1],j=Object(c.useState)(),u=Object(f.a)(j,2),l=u[0],d=u[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{disabled:l,checked:n,style:{width:"100px",height:"100px"},type:"checkbox",onChange:function(e){d(!0),Ae(e.currentTarget.checked).then((function(e){200===e.status&&(r(e.data.yourBody.success),o(e.data.errorText),d(!1))})).catch((function(e){o(e.response.data.errorText),r(e.response.data.yourBody.success),console.log(Object(S.a)({},e)),console.warn(e.response?e.response.data.errorText:e.message),d(!1)}))}}),Object(b.jsx)("span",{children:i})]})},We=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(ae,{}),Object(b.jsx)(ue,{}),Object(b.jsx)(fe,{}),Object(b.jsx)(ye,{}),Object(b.jsx)(Ie,{}),Object(b.jsx)(Ie,{}),Object(b.jsx)(He,{})]})},Me="/pre-junior",Ge="/junior",Ue="/junior_plus";var Fe=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(ne.c,{children:[Object(b.jsx)(ne.a,{path:Me,element:Object(b.jsx)(te,{})}),Object(b.jsx)(ne.a,{path:Ge,element:Object(b.jsx)(We,{})}),Object(b.jsx)(ne.a,{path:Ue,element:Object(b.jsx)("div",{children:"JUNIOR_PLUS"})}),Object(b.jsx)(ne.a,{path:"/*",element:Object(b.jsx)(ce,{})})]})})};n(77);var Re=function(){return Object(b.jsxs)("ul",{className:"menu-main",children:[Object(b.jsx)("li",{children:Object(b.jsx)(j.b,{className:function(e){return e.isActive?"current":""},to:Me,children:" Pre Junior  "})}),Object(b.jsxs)("li",{children:[" ",Object(b.jsx)(j.b,{className:function(e){return e.isActive?"current":""},to:Ge,children:"   Junior  "})]}),Object(b.jsx)("li",{children:Object(b.jsx)(j.b,{className:function(e){return e.isActive?"current":""},to:Ue,children:" Junior Plus  "})})]})};var Le=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(j.a,{children:[Object(b.jsx)(Re,{}),Object(b.jsx)(Fe,{})]})})};var De=function(){return Object(b.jsx)("div",{className:o.a.App,children:Object(b.jsx)(Le,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Je=n(28),Be=Object(Je.a)({loadingReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING":return t.value;default:return e}},themeReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE-THEME":return t.value;default:return e}}}),Ke=Object(Je.b)(Be),Ze=Ke;window.store=Ke,s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(me.a,{store:Ze,children:Object(b.jsx)(De,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports={blue:"HW4_blue__3Y0OT",column:"HW4_column__2y8vg",testSpanError:"HW4_testSpanError__2TZqf",button:"HW4_button__1jKPL",input:"HW4_input__1ZDgE",span:"HW4_span__1rVZu",buttondelete:"HW4_buttondelete__29JSE",buttondisable:"HW4_buttondisable__2PFi2","custom-checkbox":"HW4_custom-checkbox__1QjLk"}}},[[78,1,2]]]);
//# sourceMappingURL=main.57dba722.chunk.js.map