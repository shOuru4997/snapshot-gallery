(this.webpackJsonpsnapshot=this.webpackJsonpsnapshot||[]).push([[0],{31:function(e,t,a){e.exports=a(59)},36:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),l=a.n(c),o=(a(36),a(24)),u=a(25),i=a(30),m=a(29),s=a(10),h=a(26),d=a.n(h),E=Object(n.createContext)(),f=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(!0),u=Object(s.a)(o,2),i=u[0],m=u[1];return r.a.createElement(E.Provider,{value:{images:c,loading:i,runSearch:function(e){d.a.get("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat("636e1481b4f3c446d26b8eb6ebfe7127","&tags=").concat(e,"&per_page=24&format=json&nojsoncallback=1")).then((function(e){l(e.data.photos.photo),m(!1)})).catch((function(e){console.log("Encountered an error with fetching and parsing data",e)}))}}},e.children)},b=a(7),p=a(1),v=function(e){var t=e.handleSubmit,a=e.history,c=Object(n.useState)(""),l=Object(s.a)(c,2),o=l[0],u=l[1];return r.a.createElement("form",{className:"search-form",onSubmit:function(e){return t(e,a,o)}},r.a.createElement("input",{type:"text",name:"search",placeholder:"Search Photos",onChange:function(e){u(e.target.value)},value:o}),r.a.createElement("button",{type:"submit",className:"search-button ".concat(o.trim()?"active":null),disabled:!o.trim()},r.a.createElement("svg",{height:"32",width:"32"},r.a.createElement("path",{d:"M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z",fill:"#ffffff",fillRule:"evenodd"}))))},g=function(){return r.a.createElement("nav",{className:"main-nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(b.b,{to:"/mountain"},"Mountain")),r.a.createElement("li",null,r.a.createElement(b.b,{to:"/beach"},"Beaches")),r.a.createElement("li",null,r.a.createElement(b.b,{to:"/bird"},"Birds")),r.a.createElement("li",null,r.a.createElement(b.b,{to:"/food"},"Food"))))},S=function(e){var t=e.history,a=e.handleSubmit;return r.a.createElement("div",null,r.a.createElement("h1",null,"SnapShot:A Photo Gallery With Search"),r.a.createElement(v,{history:t,handleSubmit:a}),r.a.createElement(g,null))},j=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"No Images Found"),r.a.createElement("p",null,"Please try a different search term"))},y=function(e){var t=e.url,a=e.title;return r.a.createElement("li",null,r.a.createElement("img",{src:t,alt:a}))},O=function(e){var t,a,n=e.data;return n.length>0?t=n.map((function(e){var t=e.farm,a=e.server,n=e.id,c=e.secret,l=e.title,o="https://farm".concat(t,".staticflickr.com/").concat(a,"/").concat(n,"_").concat(c,"_m.jpg");return r.a.createElement(y,{url:o,key:n,alt:l})})):a=r.a.createElement(j,null),r.a.createElement("div",null,r.a.createElement("ul",null,t),a)},k=function(){return r.a.createElement("div",{className:"loader"})},w=function(e){var t=e.searchTerm,a=Object(n.useContext)(E),c=a.images,l=a.loading,o=a.runSearch;return Object(n.useEffect)((function(){o(t)}),[t]),r.a.createElement("div",{className:"photo-container"},l?r.a.createElement(k,null):r.a.createElement(O,{data:c}))},T=function(e){var t=e.searchTerm;return r.a.createElement("div",null,r.a.createElement("h2",null,t," Pictures"),r.a.createElement(w,{searchTerm:t}))},N=function(e){var t=e.searchTerm;return r.a.createElement("div",null,r.a.createElement("h2",null,t," Images"),r.a.createElement(w,{searchTerm:t}))},P=function(){return r.a.createElement("div",{className:"not-found"},r.a.createElement("h2",null,"Page Not Found"))},x=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleSubmit=function(e,t,a){e.preventDefault(),e.currentTarget.reset();var n="/search/".concat(a);t.push(n)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(f,null,r.a.createElement(b.a,{basename:"/SnapScout"},r.a.createElement("div",{className:"container"},r.a.createElement(p.b,{render:function(t){return r.a.createElement(S,{handleSubmit:e.handleSubmit,history:t.history})}}),r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/",render:function(){return r.a.createElement(p.a,{to:"/mountain"})}}),r.a.createElement(p.b,{path:"/mountain",render:function(){return r.a.createElement(T,{searchTerm:"mountain"})}}),r.a.createElement(p.b,{path:"/beach",render:function(){return r.a.createElement(T,{searchTerm:"beach"})}}),r.a.createElement(p.b,{path:"/bird",render:function(){return r.a.createElement(T,{searchTerm:"bird"})}}),r.a.createElement(p.b,{path:"/food",render:function(){return r.a.createElement(T,{searchTerm:"food"})}}),r.a.createElement(p.b,{path:"/search/:searchInput",render:function(e){return r.a.createElement(N,{searchTerm:e.match.params.searchInput})}}),r.a.createElement(p.b,{component:P})))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.db923546.chunk.js.map