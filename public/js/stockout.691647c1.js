(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["stockout"],{"1f4f":function(t,e,s){"use strict";s("8b37");var i=s("80d2"),a=s("7560"),r=s("58df");e["a"]=Object(r["a"])(a["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes(){return{"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom,...this.themeClasses}}},methods:{genWrapper(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(i["g"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"297c":function(t,e,s){"use strict";var i=s("2b0e"),a=(s("6ece"),s("0789")),r=s("90a2"),n=s("a9ad"),o=s("fe6c"),l=s("a452"),c=s("7560"),d=s("80d2"),u=s("58df");const h=Object(u["a"])(n["a"],Object(o["b"])(["absolute","fixed","top","bottom"]),l["a"],c["a"]);var p=h.extend({name:"v-progress-linear",directives:{intersect:r["a"]},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(d["g"])(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(d["g"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){const t=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return{opacity:t,[this.isReversed?"right":"left"]:Object(d["g"])(this.normalizedValue,"%"),width:Object(d["g"])(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible,...this.themeClasses}},computedTransition(){return this.indeterminate?a["d"]:a["e"]},isReversed(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(d["g"])(this.normalizedBuffer,"%")),t}},methods:{genContent(){const t=Object(d["s"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners(){const t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[t]:!0}}))},onClick(t){if(!this.reactive)return;const{width:e}=this.$el.getBoundingClientRect();this.internalValue=t.offsetX/e*100},onObserve(t,e,s){this.isVisible=s},normalize(t){return t<0?0:t>100?100:parseFloat(t)}},render(t){const e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?Object(d["g"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),f=p;e["a"]=i["default"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(f,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},"4b85":function(t,e,s){},"615b":function(t,e,s){},"6ece":function(t,e,s){},"8b37":function(t,e,s){},"99d9":function(t,e,s){"use strict";s.d(e,"a",(function(){return r})),s.d(e,"b",(function(){return n})),s.d(e,"c",(function(){return o})),s.d(e,"d",(function(){return l}));var i=s("b0af"),a=s("80d2");const r=Object(a["i"])("v-card__actions"),n=Object(a["i"])("v-card__subtitle"),o=Object(a["i"])("v-card__text"),l=Object(a["i"])("v-card__title");i["a"]},a523:function(t,e,s){"use strict";s("20f6"),s("4b85");var i=s("e8f2"),a=s("d9f7");e["a"]=Object(i["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:s,children:i}){let r;const{attrs:n}=s;return n&&(s.attrs={},r=Object.keys(n).filter(t=>{if("slot"===t)return!1;const e=n[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e})),e.id&&(s.domProps=s.domProps||{},s.domProps.id=e.id),t(e.tag,Object(a["a"])(s,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(r||[])}),i)}})},aba4:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-main",[s("v-container",{attrs:{"fill-width":""}},[s("v-card",{staticStyle:{margin:"10px"},attrs:{"max-width":"300"}},[s("v-card-title",[s("span",{staticClass:"headline"},[t._v("Input Stock Out")])]),s("v-card-text",[s("StockInput",{ref:"stockinput",attrs:{forminput:t.forminput}})],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v("Save")])],1)],1),s("v-card",{staticStyle:{margin:"10px"}},[s("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[s("thead",[s("tr",[s("th",{staticClass:"text-left"},[t._v("\n                                No\n                            ")]),s("th",{staticClass:"text-left"},[t._v("\n                                Device Name\n                            ")]),s("th",{staticClass:"text-left"},[t._v("\n                                Quantity\n                            ")]),s("th",{staticClass:"text-left"},[t._v("\n                                Opsi\n                            ")])])]),s("tbody",t._l(t.listStock,(function(e,i){return s("tr",{key:i},[s("td",[t._v(t._s(i+1))]),s("td",[t._v(t._s(e.devicename))]),s("td",[t._v(t._s(e.quantity))]),s("td",[s("v-icon",{on:{click:function(s){return t.remove(e)}}},[t._v("mdi-delete")])],1)])})),0)]},proxy:!0}])})],1),s("v-btn",{attrs:{disabled:t.listStock.length<=0,block:"",color:"primary"},on:{click:t.submitList}},[t._v("\n            Submit All\n        ")]),s("Dialog",{attrs:{dialog:t.alert,title:"Delete",text:"Delete this item?"},on:{ok:t.OkButton,no:t.NoButton}})],1)],1)},a=[],r=(s("d3b7"),s("3ca3"),s("ddb0"),{components:{StockInput:function(){return Promise.all([s.e("chunk-895be7da"),s.e("chunk-2f76e3ae"),s.e("chunk-089c660e")]).then(s.bind(null,"6963"))},Dialog:function(){return s.e("chunk-684fd71c").then(s.bind(null,"3f7a"))}},created:function(){this.getListAPI()},data:function(){return{forminput:{asset:{assetid:0,stock_available:0,devicename:"",brandname:"",serial_number:"",quantity:0}},items:[],dialogStatus:!1,edit:!1,item_selected:null,alert:!1}},methods:{OkButton:function(){this.deleteStockHistory(this.item_selected),this.alert=!1},remove:function(t){this.item_selected=t,this.alert=!0},NoButton:function(){this.alert=!1},close:function(){this.dialogStatus=!this.dialogStatus},getListAPI:function(){if(!this.isLoading){var t=this.$store.dispatch;t("stockin/reqHistoryStockOut")}},inputStockHistory:function(){if(!this.isLoading){var t=this.$store.dispatch,e=this.$refs.stockinput.stockinput.asset,s=e.assetid,i=e.quantity,a={assetid:s,quantity:i};t("stockin/inputStockOut",a)}},submitList:function(){if(!this.isLoading){var t=this.$store.dispatch;t("stockin/submitListStockOut")}},deleteStockHistory:function(t){if(!this.isLoading){var e=this.$store.dispatch,s=t.assetid,i={assetid:s};e("stockin/deleteStockOut",i)}},save:function(){this.inputStockHistory(),this.$refs.stockinput.resetForm()}},computed:{getUpdate:function(){return this.$store.getters["stockin/getUpdate"]},isLoading:function(){return this.$store.getters["stockin/getLoading"]},listStock:function(){return this.$store.getters["stockin/getListStock"]}},watch:{getUpdate:{handler:function(t,e){t&&this.getListAPI()},deep:!0}}}),n=r,o=s("2877"),l=s("6544"),c=s.n(l),d=s("8336"),u=s("b0af"),h=s("99d9"),p=s("a523"),f=s("132d"),g=s("f6c4"),v=s("1f4f"),m=s("2fa4"),b=Object(o["a"])(n,i,a,!1,null,null,null);e["default"]=b.exports;c()(b,{VBtn:d["a"],VCard:u["a"],VCardActions:h["a"],VCardText:h["c"],VCardTitle:h["d"],VContainer:p["a"],VIcon:f["a"],VMain:g["a"],VSimpleTable:v["a"],VSpacer:m["a"]})},b0af:function(t,e,s){"use strict";s("615b");var i=s("10d2"),a=s("297c"),r=s("1c87"),n=s("58df");e["a"]=Object(n["a"])(a["a"],r["a"],i["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...r["a"].options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...i["a"].options.computed.classes.call(this)}},styles(){const t={...i["a"].options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=a["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){const{tag:e,data:s}=this.generateRouteLink();return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})},bd0c:function(t,e,s){},e8f2:function(t,e,s){"use strict";s.d(e,"a",(function(){return a}));var i=s("2b0e");function a(t){return i["default"].extend({name:"v-"+t,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:s,data:i,children:a}){i.staticClass=`${t} ${i.staticClass||""}`.trim();const{attrs:r}=i;if(r){i.attrs={};const t=Object.keys(r).filter(t=>{if("slot"===t)return!1;const e=r[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e});t.length&&(i.staticClass+=" "+t.join(" "))}return s.id&&(i.domProps=i.domProps||{},i.domProps.id=s.id),e(s.tag,i,a)}})}},f6c4:function(t,e,s){"use strict";s("bd0c");var i=s("d10f");e["a"]=i["a"].extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles(){const{bar:t,top:e,right:s,footer:i,insetFooter:a,bottom:r,left:n}=this.$vuetify.application;return{paddingTop:e+t+"px",paddingRight:s+"px",paddingBottom:i+a+r+"px",paddingLeft:n+"px"}}},render(t){const e={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,e,[t("div",{staticClass:"v-main__wrap"},this.$slots.default)])}})}}]);
//# sourceMappingURL=stockout.691647c1.js.map