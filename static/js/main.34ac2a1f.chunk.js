(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],{23:function(n,e,t){},24:function(n,e,t){"use strict";t.r(e);var r,o,a=t(0),s=t(8),c=t.n(s),i=t(9),l=t(10),d=t(15),h=t(14),u=t(2),b=t(3),m=t(1),p=b.b.div(r||(r=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  background-color: #95dada;\n  border: 1px solid grey;\n  border-radius: 5px;\n  padding: 25px;\n  cursor: pointer;\n  -moz-osx-font-smoothing: grayscale;\n  backface-visibility: hidden;\n  transform: translateZ(0);\n  transition: transform 0.25s ease-out;\n  &:hover{\n    transform: scale(1.05); \n  }\n"])));function j(n){var e=n.monster,t="https://robohash.org/".concat(e.id,"?set=set2&size=180x180");return Object(m.jsxs)(p,{children:[Object(m.jsx)("img",{src:t,alt:e.name}),Object(m.jsx)("h1",{children:e.name}),Object(m.jsx)("p",{children:e.email})]})}var f,g=b.b.div(o||(o=Object(u.a)(["\nwidth:85vw;\nmargin: 0 auto;\ndisplay: grid;\ngrid-template-columns: 1fr 1fr 1fr 1fr;\ngrid-gap: 20px;\n"])));function x(n){return Object(m.jsx)(g,{children:n.monsters.map((function(n){return Object(m.jsx)(j,{monster:n},n.id)}))})}var O,v=b.b.input(f||(f=Object(u.a)(["\n-webkit-appearance: none;\nborder: none;\noutline: none;\npadding: 10px;\nwidth: 150px;\nline-height: 30px;\nmargin-bottom: 30px;\n"])));function y(n){var e=n.placeholder,t=n.handleChange;return Object(m.jsx)(v,{type:"search",placeholder:e,onChange:t})}var k,w,C=Object(b.a)(O||(O=Object(u.a)(["\n body {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  background: linear-gradient(\n    to left,\n    rgba(7, 27, 82, 1) 0%,\n    rgba(0, 128, 128, 1) 100%\n  );\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n"]))),F=(t(23),b.b.div(k||(k=Object(u.a)(["\n  text-align: center;\n"])))),S=b.b.h1(w||(w=Object(u.a)(['\n  font-family: "Bigelow Rules";\n  font-size: 72px;\n  color: #0ccac4;\n']))),M=function(n){Object(d.a)(t,n);var e=Object(h.a)(t);function t(){var n;return Object(i.a)(this,t),(n=e.call(this)).handleChange=function(e){return n.setState({searchField:e.target.value})},n.state={monsters:[],searchField:""},n}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var n=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(n){return n.json()})).then((function(e){return n.setState({monsters:e},(function(){return console.log(n.state)}))}))}},{key:"render",value:function(){var n=this.state,e=n.monsters,t=n.searchField,r=e.filter((function(n){return n.name.toLowerCase().includes(t)}));return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(C,{}),Object(m.jsxs)(F,{children:[Object(m.jsx)(S,{children:"Monster Rolodex"}),Object(m.jsx)(y,{type:"search",placeholder:"search",handleChange:this.handleChange}),Object(m.jsx)(x,{monsters:r})]})]})}}]),t}(a.Component);c.a.render(Object(m.jsx)(M,{}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.34ac2a1f.chunk.js.map