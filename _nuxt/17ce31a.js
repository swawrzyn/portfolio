(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{244:function(t,e,n){var map={"./aws.svg":245,"./django.svg":246,"./docker.svg":247,"./email.svg":248,"./facebook.svg":249,"./fastapi.svg":250,"./flask.svg":251,"./flutter.svg":252,"./github.svg":253,"./java.svg":254,"./javascript.svg":255,"./linkedin.svg":256,"./nuxt.svg":257,"./postgresql.svg":258,"./python.svg":259,"./rails.svg":260,"./redis.svg":261,"./ruby.svg":262,"./tailwindcss.svg":263,"./typescript.svg":264,"./vue.svg":265,"./wechat.svg":266};function r(t){var e=c(t);return n(e)}function c(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=c,t.exports=r,r.id=244},268:function(t,e,n){"use strict";n.r(e);n(91);var r=n(42),c=n(125),o=n(53),f=n(54),l=n(32),v=n(11),d=(n(22),n(33));function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var c=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var y=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},w=function(t){Object(o.a)(f,t);var e=h(f);function f(){return Object(r.a)(this,f),e.apply(this,arguments)}return Object(c.a)(f,[{key:"iconLocation",get:function(){return n(244)("./".concat(this.contact.icon,".svg"))}}]),f}(d.Vue);y([Object(d.Prop)({required:!0})],w.prototype,"contact",void 0);var j=w=y([d.Component],w),O=n(17),component=Object(O.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"w-full px-4 flex justify-start items-center h-32 bg-gray-100 no-underline cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-150",attrs:{href:t.contact.value,rel:"noreferrer",target:"email"===t.contact.type?"_self":"_blank"}},[n("div",{staticClass:"w-1/5 flex items-center justify-center"},[n("div",{staticClass:"w-14 h-14",domProps:{innerHTML:t._s(t.iconLocation)}})]),t._v(" "),n("div",{staticClass:"w-4/5 text-2xl"},[t._v("\n    "+t._s(t.contact.text)+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports}}]);