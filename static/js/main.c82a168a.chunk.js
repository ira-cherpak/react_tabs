(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(2),o=n.n(r),l=n(3),i=n(4),s=n(6),u=n(5),b=n(12),m=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={index:0,content:""},t.onTabSelected=function(e,n){t.setState({index:e,content:n})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this,e=this.props.tabs,n=this.state,a=n.content,r=n.index;return c.a.createElement("div",null,e.map((function(e,n){return c.a.createElement("button",{className:b("buttom",{active:r===n}),key:e.title,type:"button",onClick:function(){return t.onTabSelected(n,e.content)}},e.title)})),c.a.createElement("p",{className:"text"},a))}}]),n}(c.a.Component),p=(n(13),[{title:"Tab 1",content:"Some text 1"},{title:"Tab 2",content:"Some text 2"},{title:"Tab 3",content:"Some text 3"}]),f=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"title"},"React tabs"),c.a.createElement(m,{tabs:p}))};o.a.render(c.a.createElement(f,null),document.getElementById("root"))},7:function(t,e,n){t.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.c82a168a.chunk.js.map