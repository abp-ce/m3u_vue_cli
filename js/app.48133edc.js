(function(e){function t(t){for(var n,a,s=t[0],l=t[1],c=t[2],u=0,p=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],n=!0,a=1;a<o.length;a++){var l=o[a];0!==r[l]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=o[0]))}return e}var n={},r={app:0},i=[];function a(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"cb05baf3","chunk-2d0c8e41":"52b7193e"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(e){var t=[],o=r[e];if(0!==o)if(o)t.push(o[2]);else{var n=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=n);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=a(e);var c=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(u);var o=r[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",c.name="ChunkLoadError",c.type=n,c.request=i,o[1](c)}r[e]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(o,n,function(t){return e[t]}.bind(null,n));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/m3u_vue_cli/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=c;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("b-container",[o("b-navbar",[o("b-navbar-brand",{attrs:{to:"/"}},[e._v("M3U editor")]),o("b-navbar-nav",[o("b-nav-item",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sample",modifiers:{sample:!0}},{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Sample List"}},[o("b-icon-file")],1),o("b-nav-item",{directives:[{name:"b-toggle",rawName:"v-b-toggle.personal",modifiers:{personal:!0}},{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"float-left",attrs:{title:"Personal List"}},[o("b-icon-file-person")],1)],1),o("b-navbar-nav",{staticClass:"ml-auto"},[this.$store.getters.isLoggedIn?o("b-nav-item",{attrs:{id:"nav-user"}},[o("b-icon-person-check")],1):e._e(),this.$store.getters.isLoggedIn?o("b-tooltip",{attrs:{target:"nav-user"}},[e._v(e._s(this.$store.state.user))]):e._e(),this.$store.getters.isLoggedIn?o("b-nav-item",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Logout"},on:{click:e.logout}},[o("b-icon-person-dash")],1):e._e(),this.$store.getters.isLoggedIn?e._e():o("b-nav-item",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{to:"/login/reg",title:"Register"}},[o("b-icon-person-plus")],1),this.$store.getters.isLoggedIn?e._e():o("b-nav-item",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{to:"/login/log",title:"Login"}},[o("b-icon-person")],1)],1)],1),o("router-view")],1)},i=[],a={name:"App",metaInfo:{title:"M3U Editor",meta:[{name:"description",content:"IPTV M3U playlist editor."}]},methods:{logout:function(){this.$store.dispatch("logout")}}},s=a,l=o("2877"),c=Object(l["a"])(s,r,i,!1,null,null,null),u=c.exports,d=(o("d3b7"),o("3ca3"),o("ddb0"),o("8c4f")),p=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("M3U")},h=[],b=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("b-container",[e.isMobile()?e._e():o("b-alert",{attrs:{show:"",dismissible:""}},[e._v("To watch please allow mixed content in your browser.")]),o("b-sidebar",{attrs:{id:"sample",title:"Sample List",width:e.sb_width,shadow:""}},[o("b-input-group",{staticClass:"mt-3",attrs:{prepend:"URL"}},[o("b-form-input",{attrs:{placeholder:e.sampleURL,type:"url"},model:{value:e.sampleURL,callback:function(t){e.sampleURL=t},expression:"sampleURL"}}),o("b-input-group-append",[o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Load"},on:{click:e.load}},[o("b-icon-download")],1)],1)],1),o("b-form-select",{attrs:{options:e.channels,"text-field":"title",multiple:"","select-size":16},on:{change:function(t){return e.index(0)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"To Personal List"},on:{click:e.toPersonal}},[o("b-icon-chevron-double-right")],1)],1),o("b-sidebar",{attrs:{id:"personal",title:"Personal List",width:e.sb_width,right:"",shadow:""}},[o("b-form-select",{key:e.rerender,attrs:{options:e.personal,"text-field":"title",multiple:"","select-size":16},on:{change:function(t){return e.index(1)}},model:{value:e.perSelected,callback:function(t){e.perSelected=t},expression:"perSelected"}}),o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Up"},on:{click:function(t){return e.up_down(-1)}}},[o("b-icon-chevron-double-up")],1),o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Down"},on:{click:function(t){return e.up_down(1)}}},[o("b-icon-chevron-double-down")],1),o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Delete"},on:{click:e.delItems}},[o("b-icon-trash")],1),e.isLoggedIn?o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Save and Download"},on:{click:e.save}},[o("b-icon-archive")],1):e._e()],1),o("b-card",{attrs:{"no-body":""}},[e.details?o("b-card-body",[e.isMobile()?o("b-card-title",[o("b-link",{attrs:{href:e.source}},[e._v(e._s(e.details.title))])],1):o("b-card-title",[e._v(e._s(e.details.title))]),o("b-card-sub-title",[e._v(" "+e._s(e.details.disp_name)+" "+e._s(e._f("slice")(e.details.pstart))+"-"+e._s(e._f("slice")(e.details.pstop))+" "),o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.bottomleft",modifiers:{hover:!0,bottomleft:!0}}],attrs:{size:"sm",title:"Backward"},on:{click:e.backward}},[o("b-icon-chevron-double-left")],1),o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.bottom",modifiers:{hover:!0,bottom:!0}}],attrs:{size:"sm",title:"Now"},on:{click:e.now}},[o("b-icon-clock")],1),o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.bottomright",modifiers:{hover:!0,bottomright:!0}}],attrs:{size:"sm",title:"Forward"},on:{click:e.forward}},[o("b-icon-chevron-double-right")],1)],1),o("b-card-text",[e._v(e._s(e.details.pdesc))])],1):e._e(),e.isMobile()?e._e():o("video",{ref:"video",attrs:{type:"video/mp4",poster:"//vjs.zencdn.net/v/oceans.png",preload:"metadata",controls:"",width:"100%"}})],1)],1)},f=[],m=o("1da1"),v=o("5530"),g=o("b85c"),w=(o("96cf"),o("4d90"),o("25f0"),o("159b"),o("7db0"),o("c740"),o("4de4"),o("caad"),o("2532"),o("2b3d"),o("2f62")),_=o("ba56"),k=o.n(_),y=o("bc3a"),S=o.n(y),L=S.a.create({baseURL:"https://a.abp-te.tk:8443/api",withCredentials:!0}),I={name:"M3U",data:function(){return{sampleURL:"http://topplay.do.am/FreeBestTV.m3u",channels:[],selected:[],personal:[],perSelected:[],tabIndex:0,details:null,prTime:new Date,hls:new k.a,rerender:!1}},beforeMount:function(){var e=this;this.isLoggedIn&&L.get("/load_personal").then((function(t){return e.personal=t.data})).catch((function(t){alert(t.response.data.detail),e.$store.dispatch("logout"),e.personal=[]}))},beforeUnmount:function(){this.hls.destroy()},filters:{slice:function(e){var t=new Date(e);return t.getHours().toString().padStart(2,"0")+":"+t.getMinutes().toString().padStart(2,"0")}},methods:{isMobile:function(){return!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},index:function(e){this.tabIndex=e},load:function(){var e=this,t="load/?url=".concat(this.sampleURL);L.get(t).then((function(t){return e.channels=t.data}))},toPersonal:function(){var e=this;this.perSelected=[],this.selected.forEach((function(t){e.personal.find((function(e){return e.value==t}))||e.personal.push(e.channels.find((function(e){return e.value==t})))}))},up_down:function(e){var t=this;1==e&&this.perSelected.reverse();var o,n=Object(g["a"])(this.perSelected);try{var r=function(){var n=o.value,r=t.personal.findIndex((function(e){return e.value==n}));if(-1==e&&0==r)return"break";if(1==e&&r==t.personal.length-1)return"break";var i=[t.personal[r],t.personal[r+e]];t.personal[r+e]=i[0],t.personal[r]=i[1]};for(n.s();!(o=n.n()).done;){var i=r();if("break"===i)break}}catch(a){n.e(a)}finally{n.f()}1==e&&this.perSelected.reverse(),this.rerender=!this.rerender},delItems:function(){var e=this;this.personal=this.personal.filter((function(t){return!e.perSelected.includes(t.value)}))},save:function(){L.post("/save",this.personal).then((function(e){var t=window.URL.createObjectURL(new Blob([e.data])),o=document.createElement("a");o.href=t,o.setAttribute("download","list.m3u"),document.body.appendChild(o),o.click()})).catch((function(e){alert(e.response.data.detail)}))},backward:function(){var e=new Date(this.details.pstart);e.setMinutes(e.getMinutes()-1),this.prTime=e},forward:function(){var e=new Date(this.details.pstop);e.setMinutes(e.getMinutes()+1),this.prTime=e},now:function(){this.prTime=new Date}},computed:Object(v["a"])(Object(v["a"])({},Object(w["b"])(["isLoggedIn"])),{},{source:function(){if(0==this.tabIndex){if(this.selected)return this.selected[0]}else if(this.perSelected)return this.perSelected[0];return""},sb_width:function(){return this.isMobile()?"100%":"43%"}}),watch:{isLoggedIn:function(e){e||(this.personal=[])},source:function(){if(this.source&&(this.hls&&this.hls.destroy(),this.prTime=new Date,!this.isMobile())){var e=this.$refs["video"];k.a.isSupported()?(this.hls=new k.a,this.hls.loadSource(this.source),this.hls.attachMedia(e),this.hls.on(k.a.Events.MANIFEST_PARSED,(function(){e.play()}))):e.canPlayType("application/vnd.apple.mpegurl")&&(e.src=this.source)}},prTime:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(){var t,o,n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t="",0==this.tabIndex?this.channels&&(t=this.channels.filter((function(e){return e.value==n.source}))[0].title):this.personal&&(t=this.personal.filter((function(e){return e.value==n.source}))[0].title),o=t+"/"+this.prTime.toISOString(),L.get(o).then((function(e){e.data?n.details=e.data:n.details=null}));case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},M=I,x=Object(l["a"])(M,b,f,!1,null,null,null),O=x.exports,j={name:"Home",components:{M3U:O}},P=j,N=Object(l["a"])(P,p,h,!1,null,null,null),T=N.exports,U=o("58ca");n["default"].use(d["a"]),n["default"].use(U["a"]);var R=[{path:"/",name:"Home",component:T},{path:"/login/:reg",name:"Login",component:function(){return o.e("chunk-2d0c8e41").then(o.bind(null,"578a"))}},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}}],E=new d["a"]({mode:"history",base:"/m3u_vue_cli/",routes:R}),$=E;o("b0c0"),o("99af");n["default"].use(w["a"]);var D=new w["a"].Store({state:{status:"",token:localStorage.getItem("token")||"",user:localStorage.getItem("user")||""},mutations:{auth_request:function(e){e.status="loading"},auth_success:function(e,t){e.status="success",e.token=t.token,e.user=t.user},auth_error:function(e){e.status="error"},logout:function(e){e.status="",e.token=""}},actions:{login:function(e,t){var o=e.commit;return new Promise((function(e,n){o("auth_request");var r=null,i=null;r=new FormData,r.append("username",t.form.name),r.append("password",t.form.password),t.reg?(r.append("email",t.form.email),i="/auth/register"):i="/auth/token",L.post(i,r).then((function(n){var r=n.data,i={token:r,user:t.form.name};localStorage.setItem("token",r),localStorage.setItem("user",t.form.name),L.defaults.headers.common["Authorization"]="".concat(r.token_type," ").concat(r.access_token),o("auth_success",i),e(n)})).catch((function(e){alert(e.response.data.detail),o("auth_error"),localStorage.removeItem("token"),localStorage.removeItem("user"),n(e)}))}))},logout:function(e){var t=e.commit;t("logout"),localStorage.removeItem("token"),localStorage.removeItem("user"),delete L.defaults.headers.common["Authorization"]}},getters:{isLoggedIn:function(e){return!!e.token},authStatus:function(e){return e.status}},modules:{}}),A=o("5f5b"),z=o("b1e0");o("f9e3"),o("2dd8");n["default"].config.productionTip=!1,n["default"].use(A["a"]),n["default"].use(z["a"]),new n["default"]({router:$,store:D,render:function(e){return e(u)}}).$mount("#app")}});
//# sourceMappingURL=app.48133edc.js.map