(this["webpackJsonpmovie-project"]=this["webpackJsonpmovie-project"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(7),r=a.n(s),i=(a(13),a(0));function o(){return Object(i.jsx)("nav",{className:"blue-grey darken-3",children:Object(i.jsxs)("div",{className:"nav-wrapper",children:[Object(i.jsx)("a",{href:"!#",className:"brand-logo",children:"React Movies"}),Object(i.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"!#",children:"Sass"})})})]})})}function l(){return Object(i.jsx)("footer",{className:"page-footer #37474f blue-grey darken-2",children:Object(i.jsx)("div",{className:"footer-copyright",children:Object(i.jsxs)("div",{className:"container",children:["@ ",(new Date).getFullYear()," Copyright Text",Object(i.jsx)("a",{className:"grey-text text-lighten-4 right",href:"#!",children:"More Links"})]})})})}var h=a(2),j=a(3),d=a(5),b=a(4),p=a(8);function u(e){var t=e.Title,a=e.Year,c=e.imdbID,n=e.Type,s=e.Poster;return Object(i.jsxs)("div",{id:c,className:"card movie",children:[Object(i.jsx)("div",{className:"card-image waves-effect waves-block waves-light",children:"N/A"===s?Object(i.jsx)("img",{className:"activator",alt:"some text",src:"\n    https://via.placeholder.com/255x364/455a64/ffffff?Text=".concat(t,"\n    ")}):Object(i.jsx)("img",{className:"activator",alt:"some text",src:s})}),Object(i.jsxs)("div",{className:"card-content",children:[Object(i.jsx)("span",{className:"card-title activator grey-text text-darken-4",children:t}),Object(i.jsxs)("p",{children:[a," ",Object(i.jsx)("span",{className:"right",children:n})]})]})]})}function v(e){var t=e.movies,a=void 0===t?[]:t;return Object(i.jsx)("div",{className:"movies",children:a.length?a.map((function(e){return Object(i.jsx)(u,Object(p.a)({},e),e.imdbID)})):"Nothing found!"})}function m(){return Object(i.jsx)("div",{className:"progress",children:Object(i.jsx)("div",{className:"indeterminate"})})}var x=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(h.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={search:"",type:"all"},e.searchHandler=function(t){e.setState({search:t.target.value})},e.handleKey=function(t){"Enter"===t.key&&e.props.searchMovies(e.state.search,e.state.type)},e.handleType=function(t){e.setState((function(){return{type:t.target.dataset.type}}),(function(){e.props.searchMovies(e.state.search,e.state.type)}))},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.search,c=t.type;return Object(i.jsxs)("div",{className:"col s12",children:[Object(i.jsxs)("div",{className:"input-field",children:[Object(i.jsx)("input",{type:"search",className:"validate",placeholder:"Search",value:a,onChange:this.searchHandler,onKeyDown:this.handleKey}),Object(i.jsx)("button",{className:"waves-effect waves-light btn light-green search-btn",onClick:function(){return e.props.searchMovies(e.state.search,e.state.type)},children:"Search"})]}),Object(i.jsxs)("div",{className:"col s12",children:[Object(i.jsx)("p",{children:Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{name:"type",type:"radio","data-type":"all",onChange:this.handleType,checked:"all"===c}),Object(i.jsx)("span",{children:"All"})]})}),Object(i.jsx)("p",{children:Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{name:"type",type:"radio","data-type":"movie",onChange:this.handleType,checked:"movie"===c}),Object(i.jsx)("span",{children:"Movies only"})]})}),Object(i.jsx)("p",{children:Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{name:"type",type:"radio","data-type":"series",onChange:this.handleType,checked:"series"===c}),Object(i.jsx)("span",{children:"Series only"})]})})]})]})}}]),a}(n.a.Component),O="6774af1a",f=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(h.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={movies:[],loading:!0},e.searchMovies=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all";e.setState({loading:!0}),fetch("https://www.omdbapi.com/?apikey=".concat(O,"&s=").concat(t).concat("all"!==a?"&type=".concat(a):"")).then((function(e){return e.json()})).then((function(t){return e.setState({movies:t.Search,loading:!1})})).catch((function(t){console.error(t),e.setState({loading:!1})}))},e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix").then((function(e){return e.json()})).then((function(t){return e.setState({movies:t.Search,loading:!1})})).catch((function(t){console.error(t),e.setState({loading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.movies,a=e.loading;return Object(i.jsxs)("main",{className:"container content",children:[Object(i.jsx)(x,{searchMovies:this.searchMovies}),a?Object(i.jsx)(m,{}):Object(i.jsx)(v,{movies:t})]})}}]),a}(n.a.Component);var y=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(o,{}),Object(i.jsx)(f,{}),Object(i.jsx)(l,{})]})};r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(y,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.f82a8cf2.chunk.js.map