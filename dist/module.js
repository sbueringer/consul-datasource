define(["lodash","app/plugins/sdk"],function(t,e){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=37)}([function(t,e,r){var n=r(24),o="object"==typeof self&&self&&self.Object===Object&&self,u=n||o||Function("return this")();t.exports=u},function(t,e){var r=Array.isArray;t.exports=r},function(t,e,r){var n=r(53),o=r(59);t.exports=function(t,e){var r=o(t,e);return n(r)?r:void 0}},function(t,e,r){var n=r(7),o=r(55),u=r(56),i="[object Null]",a="[object Undefined]",c=n?n.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?a:i:c&&c in Object(t)?o(t):u(t)}},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e,r){var n=r(43),o=r(44),u=r(45),i=r(46),a=r(47);function c(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}c.prototype.clear=n,c.prototype.delete=o,c.prototype.get=u,c.prototype.has=i,c.prototype.set=a,t.exports=c},function(t,e,r){var n=r(22);t.exports=function(t,e){for(var r=t.length;r--;)if(n(t[r][0],e))return r;return-1}},function(t,e,r){var n=r(0).Symbol;t.exports=n},function(t,e,r){var n=r(2)(Object,"create");t.exports=n},function(t,e,r){var n=r(68);t.exports=function(t,e){var r=t.__data__;return n(e)?r["string"==typeof e?"string":"hash"]:r.map}},function(t,e,r){var n=r(18),o=1/0;t.exports=function(t){if("string"==typeof t||n(t))return t;var e=t+"";return"0"==e&&1/t==-o?"-0":e}},function(t,e,r){var n=r(2)(r(0),"Map");t.exports=n},function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},function(t,e,r){var n=r(60),o=r(67),u=r(69),i=r(70),a=r(71);function c(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}c.prototype.clear=n,c.prototype.delete=o,c.prototype.get=u,c.prototype.has=i,c.prototype.set=a,t.exports=c},function(t,e,r){var n=r(89),o=r(96),u=r(16);t.exports=function(t){return u(t)?n(t):o(t)}},function(t,e){var r=9007199254740991;t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=r}},function(t,e,r){var n=r(23),o=r(15);t.exports=function(t){return null!=t&&o(t.length)&&!n(t)}},function(t,e,r){var n=r(1),o=r(18),u=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/;t.exports=function(t,e){if(n(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!o(t))||i.test(t)||!u.test(t)||null!=e&&t in Object(e)}},function(t,e,r){var n=r(3),o=r(4),u="[object Symbol]";t.exports=function(t){return"symbol"==typeof t||o(t)&&n(t)==u}},function(t,e,r){var n=r(20),o=r(40),u=r(120),i=r(1);t.exports=function(t,e){return(i(t)?n:u)(t,o(e,3))}},function(t,e){t.exports=function(t,e){for(var r=-1,n=null==t?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}},function(t,e,r){var n=r(5),o=r(48),u=r(49),i=r(50),a=r(51),c=r(52);function s(t){var e=this.__data__=new n(t);this.size=e.size}s.prototype.clear=o,s.prototype.delete=u,s.prototype.get=i,s.prototype.has=a,s.prototype.set=c,t.exports=s},function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},function(t,e,r){var n=r(3),o=r(12),u="[object AsyncFunction]",i="[object Function]",a="[object GeneratorFunction]",c="[object Proxy]";t.exports=function(t){if(!o(t))return!1;var e=n(t);return e==i||e==a||e==u||e==c}},function(t,e,r){(function(e){var r="object"==typeof e&&e&&e.Object===Object&&e;t.exports=r}).call(this,r(54))},function(t,e){var r=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return r.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},function(t,e,r){var n=r(72),o=r(4);t.exports=function t(e,r,u,i,a){return e===r||(null==e||null==r||!o(e)&&!o(r)?e!=e&&r!=r:n(e,r,u,i,t,a))}},function(t,e,r){var n=r(73),o=r(76),u=r(77),i=1,a=2;t.exports=function(t,e,r,c,s,f){var l=r&i,p=t.length,v=e.length;if(p!=v&&!(l&&v>p))return!1;var d=f.get(t);if(d&&f.get(e))return d==e;var h=-1,y=!0,b=r&a?new n:void 0;for(f.set(t,e),f.set(e,t);++h<p;){var g=t[h],_=e[h];if(c)var x=l?c(_,g,h,e,t,f):c(g,_,h,t,e,f);if(void 0!==x){if(x)continue;y=!1;break}if(b){if(!o(e,function(t,e){if(!u(b,e)&&(g===t||s(g,t,r,c,f)))return b.push(e)})){y=!1;break}}else if(g!==_&&!s(g,_,r,c,f)){y=!1;break}}return f.delete(t),f.delete(e),y}},function(t,e,r){var n=r(91),o=r(4),u=Object.prototype,i=u.hasOwnProperty,a=u.propertyIsEnumerable,c=n(function(){return arguments}())?n:function(t){return o(t)&&i.call(t,"callee")&&!a.call(t,"callee")};t.exports=c},function(t,e,r){(function(t){var n=r(0),o=r(92),u="object"==typeof e&&e&&!e.nodeType&&e,i=u&&"object"==typeof t&&t&&!t.nodeType&&t,a=i&&i.exports===u?n.Buffer:void 0,c=(a?a.isBuffer:void 0)||o;t.exports=c}).call(this,r(30)(t))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e){var r=9007199254740991,n=/^(?:0|[1-9]\d*)$/;t.exports=function(t,e){var o=typeof t;return!!(e=null==e?r:e)&&("number"==o||"symbol"!=o&&n.test(t))&&t>-1&&t%1==0&&t<e}},function(t,e,r){var n=r(93),o=r(94),u=r(95),i=u&&u.isTypedArray,a=i?o(i):n;t.exports=a},function(t,e,r){var n=r(12);t.exports=function(t){return t==t&&!n(t)}},function(t,e){t.exports=function(t,e){return function(r){return null!=r&&r[t]===e&&(void 0!==e||t in Object(r))}}},function(t,e,r){var n=r(36),o=r(10);t.exports=function(t,e){for(var r=0,u=(e=n(e,t)).length;null!=t&&r<u;)t=t[o(e[r++])];return r&&r==u?t:void 0}},function(t,e,r){var n=r(1),o=r(17),u=r(108),i=r(111);t.exports=function(t,e){return n(t)?t:o(t,e)?[t]:u(i(t))}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.QueryCtrl=e.QueryOptionsCtrl=e.ConfigCtrl=e.Datasource=void 0;var n=r(38),o=r(126),u=function(){function t(){}return t.templateUrl="partials/config.html",t}(),i=function(){function t(){}return t.templateUrl="partials/query.options.html",t}();e.Datasource=n.ConsulDatasource,e.ConfigCtrl=u,e.QueryOptionsCtrl=i,e.QueryCtrl=o.ConsulDatasourceQueryCtrl},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ConsulDatasource=void 0;var n=u(r(39)),o=u(r(19));function u(t){return t&&t.__esModule?t:{default:t}}var i=function(){function t(t,e,r,n){this.$q=e,this.backendSrv=r,this.templateSrv=n,this.debug=!1,this.name=t.name,this.id=t.id}return t.$inject=["instanceSettings","$q","backendSrv","templateSrv"],t.prototype.query=function(t){var e=this;this.debug&&console.log("query: "+JSON.stringify(t));for(var r={},o=0,u=t.targets;o<u.length;o++){var i=u[o];i.hide||(r[i.refId]=i)}t=n.default.clone(t);var a=this.buildQueryParameters(t);return a.targets.length<=0?this.$q.when({data:[]}):this.doRequest({data:a}).then(function(t){e.debug&&console.log("results pre-table/timeseries: "+JSON.stringify(t));var o=[];return n.default.each(t.data.results,function(t,u){if(e.debug&&console.log("single result pre-table/timeseries: "+JSON.stringify(t)),t.tables&&t.tables.length>0){var i=t.tables[0];i.type="table",o.push(i)}t.series&&t.series.length>0&&n.default.each(t.series,function(t,i){var a=r[u].legendFormat;if(n.default.isEmpty(a))o.push({target:t.name,datapoints:t.points});else{var c=e.renderTemplate(e.templateSrv.replace(a),t.tags);o.push({target:c,datapoints:t.points})}})}),e.debug&&console.log("result query: "+JSON.stringify({data:o})),{_request:t._request,data:o}})},t.prototype.renderTemplate=function(t,e){return t.replace(/\{\{\s*(.+?)\s*\}\}/g,function(t,r){return e[r]?e[r]:r})},t.prototype.testDatasource=function(){return this.debug&&console.log("testDatasource"),this.backendSrv.datasourceRequest({url:"/api/tsdb/query",method:"POST",data:{queries:[{type:"test",refId:"test",datasourceId:this.id}]}}).then(function(t){return 200===t.status?{status:"success",message:"Data source is working",title:"Success"}:{status:"error",message:"Data source is not working: "+t.message,title:"Error"}})},t.prototype.metricFindQuery=function(t){return this.debug&&console.log("metricFindQuery: "+JSON.stringify(t)),this.doFindQuery({data:{targets:[{target:this.templateSrv.replace(t,null,"regex"),format:"timeseries",type:"keys",refId:"keys",datasourceId:this.id}]}}).then(function(t){var e=t.data.results.keys;return(0,o.default)(e.series,function(t){return{text:t.name,value:t.name}})})},t.prototype.doFindQuery=function(t){var e=this;return this.debug&&console.log("doFindQuery: "+JSON.stringify(t)),this.backendSrv.datasourceRequest({url:"/api/tsdb/query",method:"POST",data:{queries:t.data.targets}}).then(function(t){return e.debug&&console.log("doFindQuery result: "+JSON.stringify(t)),t})},t.prototype.doRequest=function(t){var e=this;this.debug&&console.log("doRequest: "+JSON.stringify(t));var r={from:"",to:"",queries:t.data.targets};return t.data.range&&(r.from=t.data.range.from.valueOf().toString(),r.to=t.data.range.to.valueOf().toString()),this.backendSrv.datasourceRequest({url:"/api/tsdb/query",method:"POST",data:r}).then(function(t){return e.debug&&console.log("doRequest result: "+JSON.stringify(t)),t})},t.prototype.buildQueryParameters=function(t){var e=this;return this.debug&&console.log("buildQueryParameters: "+JSON.stringify(t)),t.targets=n.default.filter(t.targets,function(t){return""!==t.target&&!t.hide}),t.targets=n.default.map(t.targets,function(r){return{target:e.templateSrv.replace(r.target,t.scopedVars,"regex"),format:r.format||"timeseries",type:r.type||"get",columns:r.columns||"",refId:r.refId,hide:r.hide,datasourceId:e.id}}),t},t}();e.ConsulDatasource=i},function(e,r){e.exports=t},function(t,e,r){var n=r(41),o=r(106),u=r(116),i=r(1),a=r(117);t.exports=function(t){return"function"==typeof t?t:null==t?u:"object"==typeof t?i(t)?o(t[0],t[1]):n(t):a(t)}},function(t,e,r){var n=r(42),o=r(105),u=r(34);t.exports=function(t){var e=o(t);return 1==e.length&&e[0][2]?u(e[0][0],e[0][1]):function(r){return r===t||n(r,t,e)}}},function(t,e,r){var n=r(21),o=r(26),u=1,i=2;t.exports=function(t,e,r,a){var c=r.length,s=c,f=!a;if(null==t)return!s;for(t=Object(t);c--;){var l=r[c];if(f&&l[2]?l[1]!==t[l[0]]:!(l[0]in t))return!1}for(;++c<s;){var p=(l=r[c])[0],v=t[p],d=l[1];if(f&&l[2]){if(void 0===v&&!(p in t))return!1}else{var h=new n;if(a)var y=a(v,d,p,t,e,h);if(!(void 0===y?o(d,v,u|i,a,h):y))return!1}}return!0}},function(t,e){t.exports=function(){this.__data__=[],this.size=0}},function(t,e,r){var n=r(6),o=Array.prototype.splice;t.exports=function(t){var e=this.__data__,r=n(e,t);return!(r<0||(r==e.length-1?e.pop():o.call(e,r,1),--this.size,0))}},function(t,e,r){var n=r(6);t.exports=function(t){var e=this.__data__,r=n(e,t);return r<0?void 0:e[r][1]}},function(t,e,r){var n=r(6);t.exports=function(t){return n(this.__data__,t)>-1}},function(t,e,r){var n=r(6);t.exports=function(t,e){var r=this.__data__,o=n(r,t);return o<0?(++this.size,r.push([t,e])):r[o][1]=e,this}},function(t,e,r){var n=r(5);t.exports=function(){this.__data__=new n,this.size=0}},function(t,e){t.exports=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}},function(t,e){t.exports=function(t){return this.__data__.get(t)}},function(t,e){t.exports=function(t){return this.__data__.has(t)}},function(t,e,r){var n=r(5),o=r(11),u=r(13),i=200;t.exports=function(t,e){var r=this.__data__;if(r instanceof n){var a=r.__data__;if(!o||a.length<i-1)return a.push([t,e]),this.size=++r.size,this;r=this.__data__=new u(a)}return r.set(t,e),this.size=r.size,this}},function(t,e,r){var n=r(23),o=r(57),u=r(12),i=r(25),a=/^\[object .+?Constructor\]$/,c=Function.prototype,s=Object.prototype,f=c.toString,l=s.hasOwnProperty,p=RegExp("^"+f.call(l).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!u(t)||o(t))&&(n(t)?p:a).test(i(t))}},function(t,e){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){var n=r(7),o=Object.prototype,u=o.hasOwnProperty,i=o.toString,a=n?n.toStringTag:void 0;t.exports=function(t){var e=u.call(t,a),r=t[a];try{t[a]=void 0;var n=!0}catch(t){}var o=i.call(t);return n&&(e?t[a]=r:delete t[a]),o}},function(t,e){var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},function(t,e,r){var n=r(58),o=function(){var t=/[^.]+$/.exec(n&&n.keys&&n.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();t.exports=function(t){return!!o&&o in t}},function(t,e,r){var n=r(0)["__core-js_shared__"];t.exports=n},function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},function(t,e,r){var n=r(61),o=r(5),u=r(11);t.exports=function(){this.size=0,this.__data__={hash:new n,map:new(u||o),string:new n}}},function(t,e,r){var n=r(62),o=r(63),u=r(64),i=r(65),a=r(66);function c(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}c.prototype.clear=n,c.prototype.delete=o,c.prototype.get=u,c.prototype.has=i,c.prototype.set=a,t.exports=c},function(t,e,r){var n=r(8);t.exports=function(){this.__data__=n?n(null):{},this.size=0}},function(t,e){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},function(t,e,r){var n=r(8),o="__lodash_hash_undefined__",u=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(n){var r=e[t];return r===o?void 0:r}return u.call(e,t)?e[t]:void 0}},function(t,e,r){var n=r(8),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return n?void 0!==e[t]:o.call(e,t)}},function(t,e,r){var n=r(8),o="__lodash_hash_undefined__";t.exports=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=n&&void 0===e?o:e,this}},function(t,e,r){var n=r(9);t.exports=function(t){var e=n(this,t).delete(t);return this.size-=e?1:0,e}},function(t,e){t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},function(t,e,r){var n=r(9);t.exports=function(t){return n(this,t).get(t)}},function(t,e,r){var n=r(9);t.exports=function(t){return n(this,t).has(t)}},function(t,e,r){var n=r(9);t.exports=function(t,e){var r=n(this,t),o=r.size;return r.set(t,e),this.size+=r.size==o?0:1,this}},function(t,e,r){var n=r(21),o=r(27),u=r(78),i=r(82),a=r(100),c=r(1),s=r(29),f=r(32),l=1,p="[object Arguments]",v="[object Array]",d="[object Object]",h=Object.prototype.hasOwnProperty;t.exports=function(t,e,r,y,b,g){var _=c(t),x=c(e),m=_?v:a(t),j=x?v:a(e),O=(m=m==p?d:m)==d,S=(j=j==p?d:j)==d,w=m==j;if(w&&s(t)){if(!s(e))return!1;_=!0,O=!1}if(w&&!O)return g||(g=new n),_||f(t)?o(t,e,r,y,b,g):u(t,e,m,r,y,b,g);if(!(r&l)){var C=O&&h.call(t,"__wrapped__"),P=S&&h.call(e,"__wrapped__");if(C||P){var k=C?t.value():t,A=P?e.value():e;return g||(g=new n),b(k,A,r,y,g)}}return!!w&&(g||(g=new n),i(t,e,r,y,b,g))}},function(t,e,r){var n=r(13),o=r(74),u=r(75);function i(t){var e=-1,r=null==t?0:t.length;for(this.__data__=new n;++e<r;)this.add(t[e])}i.prototype.add=i.prototype.push=o,i.prototype.has=u,t.exports=i},function(t,e){var r="__lodash_hash_undefined__";t.exports=function(t){return this.__data__.set(t,r),this}},function(t,e){t.exports=function(t){return this.__data__.has(t)}},function(t,e){t.exports=function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1}},function(t,e){t.exports=function(t,e){return t.has(e)}},function(t,e,r){var n=r(7),o=r(79),u=r(22),i=r(27),a=r(80),c=r(81),s=1,f=2,l="[object Boolean]",p="[object Date]",v="[object Error]",d="[object Map]",h="[object Number]",y="[object RegExp]",b="[object Set]",g="[object String]",_="[object Symbol]",x="[object ArrayBuffer]",m="[object DataView]",j=n?n.prototype:void 0,O=j?j.valueOf:void 0;t.exports=function(t,e,r,n,j,S,w){switch(r){case m:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case x:return!(t.byteLength!=e.byteLength||!S(new o(t),new o(e)));case l:case p:case h:return u(+t,+e);case v:return t.name==e.name&&t.message==e.message;case y:case g:return t==e+"";case d:var C=a;case b:var P=n&s;if(C||(C=c),t.size!=e.size&&!P)return!1;var k=w.get(t);if(k)return k==e;n|=f,w.set(t,e);var A=i(C(t),C(e),n,j,S,w);return w.delete(t),A;case _:if(O)return O.call(t)==O.call(e)}return!1}},function(t,e,r){var n=r(0).Uint8Array;t.exports=n},function(t,e){t.exports=function(t){var e=-1,r=Array(t.size);return t.forEach(function(t,n){r[++e]=[n,t]}),r}},function(t,e){t.exports=function(t){var e=-1,r=Array(t.size);return t.forEach(function(t){r[++e]=t}),r}},function(t,e,r){var n=r(83),o=1,u=Object.prototype.hasOwnProperty;t.exports=function(t,e,r,i,a,c){var s=r&o,f=n(t),l=f.length;if(l!=n(e).length&&!s)return!1;for(var p=l;p--;){var v=f[p];if(!(s?v in e:u.call(e,v)))return!1}var d=c.get(t);if(d&&c.get(e))return d==e;var h=!0;c.set(t,e),c.set(e,t);for(var y=s;++p<l;){var b=t[v=f[p]],g=e[v];if(i)var _=s?i(g,b,v,e,t,c):i(b,g,v,t,e,c);if(!(void 0===_?b===g||a(b,g,r,i,c):_)){h=!1;break}y||(y="constructor"==v)}if(h&&!y){var x=t.constructor,m=e.constructor;x!=m&&"constructor"in t&&"constructor"in e&&!("function"==typeof x&&x instanceof x&&"function"==typeof m&&m instanceof m)&&(h=!1)}return c.delete(t),c.delete(e),h}},function(t,e,r){var n=r(84),o=r(86),u=r(14);t.exports=function(t){return n(t,u,o)}},function(t,e,r){var n=r(85),o=r(1);t.exports=function(t,e,r){var u=e(t);return o(t)?u:n(u,r(t))}},function(t,e){t.exports=function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}},function(t,e,r){var n=r(87),o=r(88),u=Object.prototype.propertyIsEnumerable,i=Object.getOwnPropertySymbols,a=i?function(t){return null==t?[]:(t=Object(t),n(i(t),function(e){return u.call(t,e)}))}:o;t.exports=a},function(t,e){t.exports=function(t,e){for(var r=-1,n=null==t?0:t.length,o=0,u=[];++r<n;){var i=t[r];e(i,r,t)&&(u[o++]=i)}return u}},function(t,e){t.exports=function(){return[]}},function(t,e,r){var n=r(90),o=r(28),u=r(1),i=r(29),a=r(31),c=r(32),s=Object.prototype.hasOwnProperty;t.exports=function(t,e){var r=u(t),f=!r&&o(t),l=!r&&!f&&i(t),p=!r&&!f&&!l&&c(t),v=r||f||l||p,d=v?n(t.length,String):[],h=d.length;for(var y in t)!e&&!s.call(t,y)||v&&("length"==y||l&&("offset"==y||"parent"==y)||p&&("buffer"==y||"byteLength"==y||"byteOffset"==y)||a(y,h))||d.push(y);return d}},function(t,e){t.exports=function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}},function(t,e,r){var n=r(3),o=r(4),u="[object Arguments]";t.exports=function(t){return o(t)&&n(t)==u}},function(t,e){t.exports=function(){return!1}},function(t,e,r){var n=r(3),o=r(15),u=r(4),i={};i["[object Float32Array]"]=i["[object Float64Array]"]=i["[object Int8Array]"]=i["[object Int16Array]"]=i["[object Int32Array]"]=i["[object Uint8Array]"]=i["[object Uint8ClampedArray]"]=i["[object Uint16Array]"]=i["[object Uint32Array]"]=!0,i["[object Arguments]"]=i["[object Array]"]=i["[object ArrayBuffer]"]=i["[object Boolean]"]=i["[object DataView]"]=i["[object Date]"]=i["[object Error]"]=i["[object Function]"]=i["[object Map]"]=i["[object Number]"]=i["[object Object]"]=i["[object RegExp]"]=i["[object Set]"]=i["[object String]"]=i["[object WeakMap]"]=!1,t.exports=function(t){return u(t)&&o(t.length)&&!!i[n(t)]}},function(t,e){t.exports=function(t){return function(e){return t(e)}}},function(t,e,r){(function(t){var n=r(24),o="object"==typeof e&&e&&!e.nodeType&&e,u=o&&"object"==typeof t&&t&&!t.nodeType&&t,i=u&&u.exports===o&&n.process,a=function(){try{var t=u&&u.require&&u.require("util").types;return t||i&&i.binding&&i.binding("util")}catch(t){}}();t.exports=a}).call(this,r(30)(t))},function(t,e,r){var n=r(97),o=r(98),u=Object.prototype.hasOwnProperty;t.exports=function(t){if(!n(t))return o(t);var e=[];for(var r in Object(t))u.call(t,r)&&"constructor"!=r&&e.push(r);return e}},function(t,e){var r=Object.prototype;t.exports=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||r)}},function(t,e,r){var n=r(99)(Object.keys,Object);t.exports=n},function(t,e){t.exports=function(t,e){return function(r){return t(e(r))}}},function(t,e,r){var n=r(101),o=r(11),u=r(102),i=r(103),a=r(104),c=r(3),s=r(25),f=s(n),l=s(o),p=s(u),v=s(i),d=s(a),h=c;(n&&"[object DataView]"!=h(new n(new ArrayBuffer(1)))||o&&"[object Map]"!=h(new o)||u&&"[object Promise]"!=h(u.resolve())||i&&"[object Set]"!=h(new i)||a&&"[object WeakMap]"!=h(new a))&&(h=function(t){var e=c(t),r="[object Object]"==e?t.constructor:void 0,n=r?s(r):"";if(n)switch(n){case f:return"[object DataView]";case l:return"[object Map]";case p:return"[object Promise]";case v:return"[object Set]";case d:return"[object WeakMap]"}return e}),t.exports=h},function(t,e,r){var n=r(2)(r(0),"DataView");t.exports=n},function(t,e,r){var n=r(2)(r(0),"Promise");t.exports=n},function(t,e,r){var n=r(2)(r(0),"Set");t.exports=n},function(t,e,r){var n=r(2)(r(0),"WeakMap");t.exports=n},function(t,e,r){var n=r(33),o=r(14);t.exports=function(t){for(var e=o(t),r=e.length;r--;){var u=e[r],i=t[u];e[r]=[u,i,n(i)]}return e}},function(t,e,r){var n=r(26),o=r(107),u=r(113),i=r(17),a=r(33),c=r(34),s=r(10),f=1,l=2;t.exports=function(t,e){return i(t)&&a(e)?c(s(t),e):function(r){var i=o(r,t);return void 0===i&&i===e?u(r,t):n(e,i,f|l)}}},function(t,e,r){var n=r(35);t.exports=function(t,e,r){var o=null==t?void 0:n(t,e);return void 0===o?r:o}},function(t,e,r){var n=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,o=/\\(\\)?/g,u=r(109)(function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(n,function(t,r,n,u){e.push(n?u.replace(o,"$1"):r||t)}),e});t.exports=u},function(t,e,r){var n=r(110),o=500;t.exports=function(t){var e=n(t,function(t){return r.size===o&&r.clear(),t}),r=e.cache;return e}},function(t,e,r){var n=r(13),o="Expected a function";function u(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError(o);var r=function(){var n=arguments,o=e?e.apply(this,n):n[0],u=r.cache;if(u.has(o))return u.get(o);var i=t.apply(this,n);return r.cache=u.set(o,i)||u,i};return r.cache=new(u.Cache||n),r}u.Cache=n,t.exports=u},function(t,e,r){var n=r(112);t.exports=function(t){return null==t?"":n(t)}},function(t,e,r){var n=r(7),o=r(20),u=r(1),i=r(18),a=1/0,c=n?n.prototype:void 0,s=c?c.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(u(e))return o(e,t)+"";if(i(e))return s?s.call(e):"";var r=e+"";return"0"==r&&1/e==-a?"-0":r}},function(t,e,r){var n=r(114),o=r(115);t.exports=function(t,e){return null!=t&&o(t,e,n)}},function(t,e){t.exports=function(t,e){return null!=t&&e in Object(t)}},function(t,e,r){var n=r(36),o=r(28),u=r(1),i=r(31),a=r(15),c=r(10);t.exports=function(t,e,r){for(var s=-1,f=(e=n(e,t)).length,l=!1;++s<f;){var p=c(e[s]);if(!(l=null!=t&&r(t,p)))break;t=t[p]}return l||++s!=f?l:!!(f=null==t?0:t.length)&&a(f)&&i(p,f)&&(u(t)||o(t))}},function(t,e){t.exports=function(t){return t}},function(t,e,r){var n=r(118),o=r(119),u=r(17),i=r(10);t.exports=function(t){return u(t)?n(i(t)):o(t)}},function(t,e){t.exports=function(t){return function(e){return null==e?void 0:e[t]}}},function(t,e,r){var n=r(35);t.exports=function(t){return function(e){return n(e,t)}}},function(t,e,r){var n=r(121),o=r(16);t.exports=function(t,e){var r=-1,u=o(t)?Array(t.length):[];return n(t,function(t,n,o){u[++r]=e(t,n,o)}),u}},function(t,e,r){var n=r(122),o=r(125)(n);t.exports=o},function(t,e,r){var n=r(123),o=r(14);t.exports=function(t,e){return t&&n(t,e,o)}},function(t,e,r){var n=r(124)();t.exports=n},function(t,e){t.exports=function(t){return function(e,r,n){for(var o=-1,u=Object(e),i=n(e),a=i.length;a--;){var c=i[t?a:++o];if(!1===r(u[c],c,u))break}return e}}},function(t,e,r){var n=r(16);t.exports=function(t,e){return function(r,o){if(null==r)return r;if(!n(r))return t(r,o);for(var u=r.length,i=e?u:-1,a=Object(r);(e?i--:++i<u)&&!1!==o(a[i],i,a););return r}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ConsulDatasourceQueryCtrl=void 0;var n=r(127),o=r(128),u=function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),i=function(t){function e(e,r,n){var o=t.call(this,e,r)||this;return o.templateSrv=n,o.target.format||(o.target.format="table"===o.panelCtrl.panel.type?"table":"timeseries"),o.target.target=o.target.target||"",o.target.format=o.target.format||"timeseries",o.target.type=o.target.type||"get",o.target.columns=o.target.columns||"",o.target.data=o.target.data||"",o.formats=[{text:"Time series",value:"timeseries"},{text:"Table",value:"table"}],o.types=[{text:"get value",value:"get"},{text:"get direct subkeys",value:"keys"},{text:"get subkeys as tags",value:"tags"},{text:"get subkeys recursive as tags",value:"tagsrec"}],o}return u(e,t),e.$inject=["$scope","$injector","templateSrv"],e.prototype.getCompleter=function(t){return new o.ConsulCompleter(this.datasource,this.templateSrv)},e.prototype.refreshMetricData=function(){this.panelCtrl.refresh()},e.templateUrl="partials/query.editor.html",e}(n.QueryCtrl);e.ConsulDatasourceQueryCtrl=i},function(t,r){t.exports=e},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ConsulCompleter=void 0;var n=function(t){return t&&t.__esModule?t:{default:t}}(r(19));var o=function(){function t(t,e){this.datasource=t,this.templateSrv=e,this.labelQueryCache={},this.labelNameCache={},this.labelValueCache={},this.templateVariableCompletions=this.templateSrv.variables.map(function(t){return{caption:"${"+t.name+"}",value:"${"+t.name+"}",meta:"variable",score:Number.MAX_VALUE-1}})}return t.prototype.getCompletions=function(t,e,r,o,u){var i=this,a=e.getTokenAt(r.row,r.column),c=this.templateSrv.replace(a.value,null,"regex");this.datasource.doFindQuery({data:{targets:[{target:c,format:"timeseries",type:"keys",refId:"keys",datasourceId:this.datasource.id}]}}).then(function(t){var e=t.data.results.keys;return function(t,e){e=e.concat(i.templateVariableCompletions),u(t,e)}(null,(0,n.default)(e.series,function(t){var e=t.name.slice(c.length);return{caption:t.name,value:e,meta:"key",score:Number.MAX_VALUE}})),t})},t}();e.ConsulCompleter=o}])});
//# sourceMappingURL=module.js.map