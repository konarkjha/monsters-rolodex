(this["webpackJsonpmonsters-rolodex-tutorial"]=this["webpackJsonpmonsters-rolodex-tutorial"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(1),s=n.n(o),a=n(7),c=n.n(a),r=(n(12),n(2)),i=n(3),l=n(5),u=n(4),d=(n(13),n(14),n(0)),h=function(e){return Object(d.jsxs)("div",{className:"card-container",children:[Object(d.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),Object(d.jsx)("h1",{children:e.monster.name}),Object(d.jsx)("p",{children:e.monster.email})]})},m=function(e){return Object(d.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(d.jsx)(h,{monster:e},e.id)}))})},j=(n(16),function(e){return Object(d.jsx)("input",{className:"search-box",type:"search",placeholder:"search monsters",onChange:e.onSearchChange})}),b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).googleInit=null,e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.timeout;this.googleInit=setTimeout((function(){"undefined"!==typeof window&&(window.adsbygoogle=window.adsbygoogle||[]).push({})}),e)}},{key:"componentWillUnmount",value:function(){this.googleInit&&clearTimeout(this.googleInit)}},{key:"render",value:function(){var e=this.props,t=e.classNames,n=e.slot;return Object(d.jsx)("div",{className:t,children:Object(d.jsx)("ins",{className:"adsbygoogle",style:{display:"block",textAlign:"center"},"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":"ca-pub-4137242124503361","data-ad-slot":n})})}}]),n}(o.Component);b.defaultProps={classNames:"",timeout:200};var p=b,f=(n(17),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,o=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(p,{slot:"3052648734",classNames:"page-top"}),Object(d.jsx)("h1",{children:"Monsters Rolodex"}),Object(d.jsx)(j,{onSearchChange:this.onSearchChange}),Object(d.jsx)(m,{monsters:o}),Object(d.jsx)(p,{slot:"7482848338",timeout:1e3,classNames:"page-bottom"}),Object(d.jsx)(p,{slot:"1060798018",timeout:1e3,classNames:"page-bottom"})]})}}]),n}(o.Component)),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,o=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),o(e),s(e),a(e),c(e)}))};c.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),g()}],[[18,1,2]]]);
//# sourceMappingURL=main.aab4370d.chunk.js.map