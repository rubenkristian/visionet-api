(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"0fd9":function(t,e,s){"use strict";s("4b85");var a=s("2b0e"),i=s("d9f7"),n=s("80d2");const r=["sm","md","lg","xl"],o=["start","end","center"];function c(t,e){return r.reduce((s,a)=>(s[t+Object(n["F"])(a)]=e(),s),{})}const l=t=>[...o,"baseline","stretch"].includes(t),d=c("align",()=>({type:String,default:null,validator:l})),u=t=>[...o,"space-between","space-around"].includes(t),h=c("justify",()=>({type:String,default:null,validator:u})),v=t=>[...o,"space-between","space-around","stretch"].includes(t),g=c("alignContent",()=>({type:String,default:null,validator:v})),p={align:Object.keys(d),justify:Object.keys(h),alignContent:Object.keys(g)},f={align:"align",justify:"justify",alignContent:"align-content"};function m(t,e,s){let a=f[t];if(null!=s){if(e){const s=e.replace(t,"");a+="-"+s}return a+="-"+s,a.toLowerCase()}}const b=new Map;e["a"]=a["default"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:l},...d,justify:{type:String,default:null,validator:u},...h,alignContent:{type:String,default:null,validator:v},...g},render(t,{props:e,data:s,children:a}){let n="";for(const i in e)n+=String(e[i]);let r=b.get(n);if(!r){let t;for(t in r=[],p)p[t].forEach(s=>{const a=e[s],i=m(t,s,a);i&&r.push(i)});r.push({"no-gutters":e.noGutters,"row--dense":e.dense,["align-"+e.align]:e.align,["justify-"+e.justify]:e.justify,["align-content-"+e.alignContent]:e.alignContent}),b.set(n,r)}return t(e.tag,Object(i["a"])(s,{staticClass:"row",class:r}),a)}})},"2db4":function(t,e,s){"use strict";s("ca71");var a=s("8dd9"),i=s("a9ad"),n=s("7560"),r=s("f2e7"),o=s("fe6c"),c=s("58df"),l=s("80d2"),d=s("d9bd");e["a"]=Object(c["a"])(a["a"],i["a"],r["a"],Object(o["b"])(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:t=>"string"===typeof t||!1===t},vertical:Boolean},data:()=>({activeTimeout:-1}),computed:{classes(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground(){return!this.text&&!this.outlined},isDark(){return this.hasBackground?!this.light:n["a"].options.computed.isDark.call(this)},styles(){if(this.absolute)return{};const{bar:t,bottom:e,footer:s,insetFooter:a,left:i,right:n,top:r}=this.$vuetify.application;return{paddingBottom:Object(l["g"])(e+s+a),paddingLeft:this.app?Object(l["g"])(i):void 0,paddingRight:this.app?Object(l["g"])(n):void 0,paddingTop:Object(l["g"])(t+r)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted(){this.isActive&&this.setTimeout()},created(){this.$attrs.hasOwnProperty("auto-height")&&Object(d["e"])("auto-height",this),0==this.timeout&&Object(d["d"])('timeout="0"',"-1",this)},methods:{genActions(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(l["s"])(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent(){return this.$createElement("div",{staticClass:"v-snack__content",class:{[this.contentClass]:!0},attrs:{role:"status","aria-live":"polite"}},[Object(l["s"])(this)])},genWrapper(){const t=this.hasBackground?this.setBackgroundColor:this.setTextColor,e=t(this.color,{staticClass:"v-snack__wrapper",class:a["a"].options.computed.classes.call(this),style:a["a"].options.computed.styles.call(this),directives:[{name:"show",value:this.isActive}],on:{mouseenter:()=>window.clearTimeout(this.activeTimeout),mouseleave:this.setTimeout}});return this.$createElement("div",e,[this.genContent(),this.genActions()])},genTransition(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout(){window.clearTimeout(this.activeTimeout);const t=Number(this.timeout);this.isActive&&![0,-1].includes(t)&&(this.activeTimeout=window.setTimeout(()=>{this.isActive=!1},t))}},render(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}})},"615b":function(t,e,s){},"62ad":function(t,e,s){"use strict";s("4b85");var a=s("2b0e"),i=s("d9f7"),n=s("80d2");const r=["sm","md","lg","xl"],o=(()=>r.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}))(),c=(()=>r.reduce((t,e)=>(t["offset"+Object(n["F"])(e)]={type:[String,Number],default:null},t),{}))(),l=(()=>r.reduce((t,e)=>(t["order"+Object(n["F"])(e)]={type:[String,Number],default:null},t),{}))(),d={col:Object.keys(o),offset:Object.keys(c),order:Object.keys(l)};function u(t,e,s){let a=t;if(null!=s&&!1!==s){if(e){const s=e.replace(t,"");a+="-"+s}return"col"!==t||""!==s&&!0!==s?(a+="-"+s,a.toLowerCase()):a.toLowerCase()}}const h=new Map;e["a"]=a["default"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...o,offset:{type:[String,Number],default:null},...c,order:{type:[String,Number],default:null},...l,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:s,children:a,parent:n}){let r="";for(const i in e)r+=String(e[i]);let o=h.get(r);if(!o){let t;for(t in o=[],d)d[t].forEach(s=>{const a=e[s],i=u(t,s,a);i&&o.push(i)});const s=o.some(t=>t.startsWith("col-"));o.push({col:!s||!e.cols,["col-"+e.cols]:e.cols,["offset-"+e.offset]:e.offset,["order-"+e.order]:e.order,["align-self-"+e.alignSelf]:e.alignSelf}),h.set(r,o)}return t(e.tag,Object(i["a"])(s,{class:o}),a)}})},"8ce9":function(t,e,s){},"91ae":function(t,e,s){t.exports=s.p+"img/visionet.d4d1abb4.jpg"},"99d9":function(t,e,s){"use strict";s.d(e,"a",(function(){return n})),s.d(e,"b",(function(){return r})),s.d(e,"c",(function(){return o})),s.d(e,"d",(function(){return c}));var a=s("b0af"),i=s("80d2");const n=Object(i["i"])("v-card__actions"),r=Object(i["i"])("v-card__subtitle"),o=Object(i["i"])("v-card__text"),c=Object(i["i"])("v-card__title");a["a"]},b0af:function(t,e,s){"use strict";s("615b");var a=s("10d2"),i=s("297c"),n=s("1c87"),r=s("58df");e["a"]=Object(r["a"])(i["a"],n["a"],a["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...n["a"].options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...a["a"].options.computed.classes.call(this)}},styles(){const t={...a["a"].options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=i["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){const{tag:e,data:s}=this.generateRouteLink();return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})},bb51:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-main",[0==t.userType?a("v-container",{staticClass:"d-flex justify-space-between flex-wrap",attrs:{"fill-width":""}},[a("v-row",{staticStyle:{height:"150px"},attrs:{"no-gutters":""}},[a("v-col",[a("v-card",{staticClass:"pa-2",staticStyle:{margin:"5px"},attrs:{color:"#26c6da",dark:"",outlined:""}},[a("v-card-title",{staticClass:"text-h5"},[t._v("\n            Customer\n          ")]),a("v-card-subtitle",[t._v("\n            "+t._s(t.homeData.customer)+"\n          ")]),a("v-card-actions",[a("v-btn",{attrs:{text:""},on:{click:function(e){return t.toLocation("/customer")}}},[t._v("\n              View Detail\n            ")])],1)],1)],1),a("v-col",[a("v-card",{staticClass:"pa-2",staticStyle:{margin:"5px"},attrs:{color:"#26c6da",dark:"",outlined:""}},[a("v-card-title",{staticClass:"text-h5"},[t._v("\n            All Asset\n          ")]),a("v-card-subtitle",[t._v("\n            "+t._s(t.homeData.assets)+"\n          ")]),a("v-card-actions",[a("v-btn",{attrs:{text:""},on:{click:function(e){return t.toLocation("/asset")}}},[t._v("\n              View Detail\n            ")])],1)],1)],1),a("v-col",[a("v-card",{staticClass:"pa-2",staticStyle:{margin:"5px"},attrs:{color:"#26c6da",dark:"",outlined:""}},[a("v-card-title",{staticClass:"text-h5"},[t._v("\n            All Work Order\n          ")]),a("v-card-subtitle",[t._v("\n            "+t._s(t.homeData.wo)+"\n          ")]),a("v-card-actions",[a("v-btn",{attrs:{text:""},on:{click:function(e){return t.toLocation("workorder")}}},[t._v("\n              View Detail\n            ")])],1)],1)],1),a("v-col",[a("v-card",{staticClass:"pa-2",staticStyle:{margin:"5px"},attrs:{color:"#26c6da",dark:"",outlined:""}},[a("v-card-title",{staticClass:"text-h5"},[t._v("\n            All Stock\n          ")]),a("v-card-subtitle",[t._v("\n            "+t._s(t.homeData.stock)+"\n          ")]),a("v-card-actions",[a("v-btn",{attrs:{text:""},on:{click:function(e){return t.toLocation("/stock")}}},[t._v("\n              View Detail\n            ")])],1)],1)],1)],1)],1):a("v-container",[a("v-img",{attrs:{contain:"",height:120,"lazy-src":s("91ae"),src:s("91ae")}})],1),a("v-snackbar",{attrs:{value:t.errorMsg,color:t.color,"multi-line":"multi-line"===t.mode,timeout:t.timeout,vertical:"vertical"===t.mode}},[t._v("\n      "+t._s(t.errorMsg)+"\n      "),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-btn",{attrs:{dark:"",text:""},on:{click:function(e){return t.removeError()}}},[t._v("\n          Close\n      ")])],1)],1)},i=[],n={name:"Home",data:function(){return{asset_count:10,timeout:6e3,color:"",mode:""}},created:function(){this.getHomeAPI()},methods:{toLocation:function(t){this.$route.path!==t&&this.$router.push(t)},getHomeAPI:function(){if(!this.isLoading&&0===this.userType){var t=this.$store.dispatch;t("home/getHomeData")}}},computed:{homeData:function(){return this.$store.getters["home/getData"]},isLoading:function(){return this.$store.getters["home/getLoading"]},userType:function(){return this.$store.getters["auth/getUserType"]},errorMsg:function(){return this.$store.getters["home/getError"]}}},r=n,o=s("2877"),c=s("6544"),l=s.n(c),d=s("8336"),u=s("b0af"),h=s("99d9"),v=s("62ad"),g=s("a523"),p=s("ce7e"),f=s("adda"),m=s("f6c4"),b=s("0fd9"),k=s("2db4"),y=Object(o["a"])(r,a,i,!1,null,null,null);e["default"]=y.exports;l()(y,{VBtn:d["a"],VCard:u["a"],VCardActions:h["a"],VCardSubtitle:h["b"],VCardTitle:h["d"],VCol:v["a"],VContainer:g["a"],VDivider:p["a"],VImg:f["a"],VMain:m["a"],VRow:b["a"],VSnackbar:k["a"]})},ca71:function(t,e,s){},ce7e:function(t,e,s){"use strict";s("8ce9");var a=s("7560");e["a"]=a["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(t){let e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":e,...this.$attrs},on:this.$listeners})}})}}]);
//# sourceMappingURL=home.bbfec816.js.map