"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[884],{934:function(e,n,t){t.d(n,{M:function(){return r}});var r="https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"},884:function(e,n,t){t.r(n);var r=t(861),c=t(439),i=t(757),o=t.n(i),s=t(474),a=t(934),u=t(791),h=t(689),f=t(87),v=t(847),l=t(184);n.default=function(){var e,n,t,i=(0,h.UO)().movieId,d=(0,u.useState)({}),p=(0,c.Z)(d,2),x=p[0],j=p[1],m=(0,u.useState)(!1),g=(0,c.Z)(m,2),w=g[0],_=g[1],k=(0,u.useState)(null),y=(0,c.Z)(k,2),b=y[0],Z=y[1],U=(0,h.TH)(),S=(0,u.useRef)(null!==(e=null===(n=U.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/");(0,u.useEffect)((function(){var e=function(){var e=(0,r.Z)(o().mark((function e(){var n,t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _(!0),e.next=3,(0,v.Y5)(i);case 3:return n=e.sent,e.prev=4,e.next=7,n.json();case 7:t=e.sent,j(t),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),Z(e.t0);case 14:return e.prev=14,_(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[4,11,14,17]])})));return function(){return e.apply(this,arguments)}}();e()}),[i]);var C=x.poster_path,O=x.title,B=x.vote_average,F=x.overview,G=(null===(t=x.genres)||void 0===t?void 0:t.length)>0?x.genres.map((function(e){return e.name})).join(", "):[];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(f.rU,{to:S.current,children:"Go Back"}),(0,l.jsx)("br",{}),w&&(0,l.jsx)(s.Z,{}),!w&&x&&(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{children:[(0,l.jsx)("img",{width:300,src:C?"https://image.tmdb.org/t/p/w300".concat(C):a.M,alt:O}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:O}),(0,l.jsxs)("p",{children:["User score: ",parseInt(10*B),"%"]}),(0,l.jsx)("h3",{children:"Overview"}),(0,l.jsx)("p",{children:F}),(0,l.jsx)("h3",{children:"Genres"}),(0,l.jsx)("p",{children:G})]})]})}),b&&(0,l.jsxs)("h3",{children:["Oops, something went wrong: ",b.message]}),(0,l.jsx)("hr",{}),(0,l.jsx)("p",{children:"Additional information"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(f.rU,{to:"cast",children:"Cast"})}),(0,l.jsx)("li",{children:(0,l.jsx)(f.rU,{to:"reviews",children:"Reviews"})})]}),(0,l.jsx)("hr",{}),(0,l.jsx)(u.Suspense,{fallback:(0,l.jsx)(s.Z,{}),children:(0,l.jsx)(h.j3,{})})]})}},847:function(e,n,t){t.d(n,{Bt:function(){return u},Tg:function(){return i},Y5:function(){return s},vw:function(){return o},y:function(){return a}});var r="9efd78fa8242429fba828d6622123fa4",c="https://api.themoviedb.org/3/",i=function(){return fetch("".concat(c,"trending/movie/week?api_key=").concat(r))},o=function(e){return fetch("".concat(c,"search/movie?api_key=").concat(r,"&query=").concat(e))},s=function(e){return fetch("".concat(c,"movie/").concat(e,"?api_key=").concat(r))},a=function(e){return fetch("".concat(c,"movie/").concat(e,"/credits?api_key=").concat(r))},u=function(e){return fetch("".concat(c,"movie/").concat(e,"/reviews?api_key=").concat(r))}},861:function(e,n,t){function r(e,n,t,r,c,i,o){try{var s=e[i](o),a=s.value}catch(u){return void t(u)}s.done?n(a):Promise.resolve(a).then(r,c)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(c,i){var o=e.apply(n,t);function s(e){r(o,c,i,s,a,"next",e)}function a(e){r(o,c,i,s,a,"throw",e)}s(void 0)}))}}t.d(n,{Z:function(){return c}})}}]);
//# sourceMappingURL=884.a65146f7.chunk.js.map