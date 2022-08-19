"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[869],{7869:function(e,t,r){r.r(t),r.d(t,{default:function(){return Z}});var n=r(5861),a=r(885),s=r(7757),u=r.n(s),c=r(2791),i=r(501),o=r(3170),h=r(2072),p=r(3439),f="MovieSearch_searchForm__8c7z6",l="MovieSearch_button__LdFnP",v="MovieSearch_icon__o-0yw",d="MovieSearch_input__ixDAZ",m="MovieSearch_noResults__jQn0p",y="MovieSearch_load__6WVqO",g=r(184),Z=function(){var e=(0,i.lr)(),t=(0,a.Z)(e,2),r=t[0],s=t[1],Z=(0,c.useState)([]),x=(0,a.Z)(Z,2),_=x[0],w=x[1],b=(0,c.useState)(""),k=(0,a.Z)(b,2),j=k[0],S=k[1];(0,c.useEffect)((function(){var e=function(){var e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S("loading"),e.prev=1,e.next=4,h.Z.search();case 4:t=e.sent,w(t.results),t.results.length?S(""):S("noResults"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("error: ",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),t=r.get("query");t&&(h.Z.query=t,e())}),[r,s]);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("form",{className:f,onSubmit:function(e){e.preventDefault();var t=e.target[1].value.trim();e.target[1].value="",h.Z.query!==t&&s({query:t})},children:[(0,g.jsx)("button",{type:"submit",className:l,children:"loading"===j?(0,g.jsx)("svg",{className:y,children:(0,g.jsx)("use",{href:"".concat(p.Z,"#load")})}):(0,g.jsx)("svg",{className:v,children:(0,g.jsx)("use",{href:"".concat(p.Z,"#search")})})}),(0,g.jsx)("input",{className:d,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"})]}),"noResults"===j&&(0,g.jsx)("div",{className:m,children:"Sorry, there are no movies matching your search query. Please try again."}),_.length&&(0,g.jsx)(o.OM,{list:_})]})}},2072:function(e,t,r){var n=r(5861),a=r(5671),s=r(3144),u=r(6274),c=r(9359),i=r(7757),o=r.n(i),h=r(4569),p=r.n(h);p().defaults.baseURL="https://api.themoviedb.org/3";var f="ba6eefe67f978283c5f8594635575ba8",l=(0,c.Z)("query"),v=(0,c.Z)("fetch"),d=function(){function e(){(0,a.Z)(this,e),Object.defineProperty(this,v,{value:m}),Object.defineProperty(this,l,{writable:!0,value:""}),this.page=1}return(0,s.Z)(e,[{key:"query",get:function(){return(0,u.Z)(this,l)[l]},set:function(e){this.signal=null,this.page=1,(0,u.Z)(this,l)[l]=e}},{key:"search",value:function(){var e=(0,n.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)(this,v)[v]("search/movie");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getTrend",value:function(){var e=(0,n.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)(this,v)[v]("trending/movie/day");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getMovie",value:function(){var e=(0,n.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)(this,v)[v]("movie/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getCredits",value:function(){var e=(0,n.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)(this,v)[v]("movie/".concat(t,"/credits"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getReviews",value:function(){var e=(0,n.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)(this,v)[v]("movie/".concat(t,"/reviews"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}();function m(e){return y.apply(this,arguments)}function y(){return(y=(0,n.Z)(o().mark((function e(t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p().get(t,{params:{api_key:f,query:(0,u.Z)(this,l)[l],page:this.page},signal:this.signal});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}t.Z=new d}}]);
//# sourceMappingURL=869.03e73d8c.chunk.js.map