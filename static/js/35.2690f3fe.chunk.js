"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[35],{3035:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var r=n(5861),s=n(885),u=n(7757),a=n.n(u),i=n(2791),c=n(3170),o="TrendList_container__ror8K",p=n(2072),f=n(184),h=function(){var t=(0,i.useState)([]),e=(0,s.Z)(t,2),n=e[0],u=e[1];return(0,i.useEffect)((function(){var t=new AbortController;function e(){return(e=(0,r.Z)(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.Z.getTrend();case 2:e=t.sent,u(e.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return p.Z.signal=t.signal,function(){e.apply(this,arguments)}(),function(){t.abort()}}),[]),(0,f.jsxs)("div",{className:o,children:[(0,f.jsx)("h2",{children:"Trending today"}),(0,f.jsx)(c.OM,{list:n})]})}},2072:function(t,e,n){var r=n(5861),s=n(5671),u=n(3144),a=n(6274),i=n(9359),c=n(7757),o=n.n(c),p=n(4569),f=n.n(p);f().defaults.baseURL="https://api.themoviedb.org/3";var h="ba6eefe67f978283c5f8594635575ba8",v=(0,i.Z)("query"),l=(0,i.Z)("fetch"),d=function(){function t(){(0,s.Z)(this,t),Object.defineProperty(this,l,{value:w}),Object.defineProperty(this,v,{writable:!0,value:""}),this.page=1}return(0,u.Z)(t,[{key:"query",get:function(){return(0,a.Z)(this,v)[v]},set:function(t){this.signal=null,this.page=1,(0,a.Z)(this,v)[v]=t}},{key:"search",value:function(){var t=(0,r.Z)(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,a.Z)(this,l)[l]("search/movie");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getTrend",value:function(){var t=(0,r.Z)(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,a.Z)(this,l)[l]("trending/movie/day");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getMovie",value:function(){var t=(0,r.Z)(o().mark((function t(e){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,a.Z)(this,l)[l]("movie/".concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getCredits",value:function(){var t=(0,r.Z)(o().mark((function t(e){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,a.Z)(this,l)[l]("movie/".concat(e,"/credits"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getReviews",value:function(){var t=(0,r.Z)(o().mark((function t(e){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,a.Z)(this,l)[l]("movie/".concat(e,"/reviews"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()}]),t}();function w(t){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(o().mark((function t(e){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f().get(e,{params:{api_key:h,query:(0,a.Z)(this,v)[v],page:this.page},signal:this.signal});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}e.Z=new d}}]);
//# sourceMappingURL=35.2690f3fe.chunk.js.map