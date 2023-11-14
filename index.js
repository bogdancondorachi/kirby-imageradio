(function(){"use strict";var v=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("k-field",e._b({class:["k-radio-field","k-imageradio-field",{"has-gap":e.gap==!0}]},"k-field",e.$props,!1),[t("k-input",e._g(e._b({ref:"input",attrs:{id:e._uid,theme:"field"}},"k-input",e.$props,!1),e.$listeners))],1)},m=[],E="";function u(e,a,t,i,r,l,c,I){var n=typeof e=="function"?e.options:e;a&&(n.render=a,n.staticRenderFns=t,n._compiled=!0),i&&(n.functional=!0),l&&(n._scopeId="data-v-"+l);var o;if(c?(o=function(s){s=s||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!s&&typeof __VUE_SSR_CONTEXT__!="undefined"&&(s=__VUE_SSR_CONTEXT__),r&&r.call(this,s),s&&s._registeredComponents&&s._registeredComponents.add(c)},n._ssrRegister=o):r&&(o=I?function(){r.call(this,(n.functional?this.parent:this).$root.$options.shadowRoot)}:r),o)if(n.functional){n._injectStyles=o;var N=n.render;n.render=function(T,p){return o.call(p),N(T,p)}}else{var f=n.beforeCreate;n.beforeCreate=f?[].concat(f,o):[o]}return{exports:e,options:n}}const g={extends:"k-radio-field",props:{fit:String,gap:Boolean,mobile:Boolean,ratio:Number,back:[Boolean,String]}},_={};var h=u(g,v,m,!1,k,null,null,null);function k(e){for(let a in _)this[a]=_[a]}var b=function(){return h.exports}(),$=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ul",{staticClass:"k-radio-input",style:"--columns:"+e.columns},e._l(e.options,function(i,r){return t("li",{key:r},[t("input",{staticClass:"k-radio-input-native",attrs:{id:e.id+"-"+r,name:e.id,type:"radio"},domProps:{value:i.value,checked:e.value===i.value},on:{change:function(l){return e.onInput(i.value)}}}),t("label",{attrs:{for:e.id+"-"+r}},[t("figure",{class:["k-radio-image-ctn",{"mobile-show":e.mobile}]},[t("figure",{staticClass:"k-radio-image",style:e.padding},[t("img",{class:e.fit,attrs:{src:i.image,alt:""}}),t("div",{staticClass:"background",style:e.background})])]),t("div",[i.info?[t("span",{staticClass:"k-radio-input-text"},[e._v(e._s(i.text))]),t("span",{staticClass:"k-radio-input-info"},[e._v(e._s(i.info))])]:[e._v(" "+e._s(i.text)+" ")]],2)])])}),0)},C=[];const y={extends:"k-radio-input",props:{fit:String,ratio:Number,mobile:Boolean,back:[Boolean,String]},computed:{padding(){return"padding-top:"+this.$helper.ratio(this.ratio,"auto",!0)+";"},background(){return this.back?"background:"+this.back+";":!1}}},d={};var R=u(y,$,C,!1,S,null,null,null);function S(e){for(let a in d)this[a]=d[a]}var B=function(){return R.exports}();panel.plugin("sylvainjule/imageradio",{fields:{imageradio:b},components:{"k-imageradio-input":B}})})();
