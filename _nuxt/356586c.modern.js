(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{201:function(e,t,n){var map={"./aws.svg":202,"./django.svg":203,"./docker.svg":204,"./email.svg":205,"./facebook.svg":206,"./flutter.svg":207,"./github.svg":208,"./javascript.svg":209,"./linkedin.svg":210,"./nuxt.svg":211,"./postgresql.svg":212,"./python.svg":213,"./rails.svg":214,"./redis.svg":215,"./ruby.svg":216,"./tailwindcss.svg":217,"./typescript.svg":218,"./vue.svg":219,"./wechat.svg":220};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=o,e.exports=r,r.id=201},225:function(e,t,n){"use strict";n.r(t);var r=n(19),o=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},c=class extends r.Vue{get iconLocation(){return n(201)("./".concat(this.skill.name.toLowerCase(),".svg"))}};o([Object(r.Prop)({required:!0})],c.prototype,"skill",void 0);var l=c=o([r.Component],c),v=n(10),component=Object(v.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"no-underline",attrs:{href:e.skill.url,target:"_blank",rel:"noreferrer"}},[n("div",{staticClass:"\n      flex flex-col\n      items-center\n      justify-center\n      bg-gray-100\n      text-off-black\n      shadow-sm\n      hover:shadow-md\n      transition-shadow\n      duration-150\n      cursor-pointer\n      p-8\n    "},[n("div",{staticClass:"w-14 h-14",domProps:{innerHTML:e._s(e.iconLocation)}}),e._v(" "),n("span",{staticClass:"mt-4"},[e._v(e._s(e.skill.name))])])])}),[],!1,null,null,null);t.default=component.exports}}]);