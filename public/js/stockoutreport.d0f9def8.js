(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["stockoutreport"],{"1f4f":function(t,e,s){"use strict";s("8b37");var a=s("80d2"),i=s("7560"),r=s("58df");e["a"]=Object(r["a"])(i["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes(){return{"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom,...this.themeClasses}}},methods:{genWrapper(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(a["g"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"1fe9":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-main",[s("v-container",{attrs:{"fill-width":""}},[s("v-date-picker",{attrs:{"full-width":"",range:""},model:{value:t.dates,callback:function(e){t.dates=e},expression:"dates"}}),s("div",{staticClass:"text-center"},[s("v-chip",{staticClass:"ma-2"},[t._v("\n                From : "+t._s(t.dates[0])+"\n            ")]),s("v-chip",{staticClass:"ma-2"},[t._v("\n                To : "+t._s(t.dates[1]?t.dates[1]:"????-??-??")+"\n            ")])],1),s("div",{staticClass:"text-center",staticStyle:{margin:"10px"}},[s("v-btn",{on:{click:t.printToPage}},[t._v("\n                Print\n            ")])],1),s("v-card",[s("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[s("thead",[s("tr",[s("th",{staticClass:"text-left"},[t._v("\n                                No\n                            ")]),s("th",{staticClass:"text-left"},[t._v("\n                                Device Name\n                            ")]),s("th",{staticClass:"text-left"},[t._v("\n                                Brand Name\n                            ")]),s("th",{staticClass:"text-left"},[t._v("\n                                Inventory Code\n                            ")]),s("th",{staticClass:"text-left"},[t._v("\n                                Model\n                            ")]),s("th",{staticClass:"text-left"},[t._v("\n                                Quantity\n                            ")]),s("th",{staticClass:"text-left"},[t._v("\n                                Date\n                            ")]),s("th",{staticClass:"text-left"},[t._v("\n                                CC\n                            ")])])]),s("tbody",t._l(t.reportTable,(function(e,a){return s("tr",{key:a},[s("td",[t._v(t._s(a+1))]),s("td",[t._v(t._s(e.devicename))]),s("td",[t._v(t._s(e.brandname))]),s("td",[t._v(t._s(e.serial_number))]),s("td",[t._v(t._s(e.model))]),s("td",[t._v(t._s(e.count_input))]),s("td",[t._v(t._s(e.datecreated))]),s("td",[t._v(t._s(e.adminname))])])})),0)]},proxy:!0}])})],1),s("v-btn",{staticStyle:{margin:"10px"},attrs:{color:"primary"},on:{click:t.printTable}},[s("v-icon",[t._v("mdi-printer")])],1)],1)],1)},i=[],r=(s("99af"),{created:function(){var t=this.$store.dispatch;t("stockin/removeTableReport")},data:function(){return{dates:[(new Date).toISOString().substr(0,10),(new Date).toISOString().substr(0,10)],items:[]}},methods:{printToPage:function(){var t=this.$store.dispatch;t("stockin/tableReportStockOut",{startdate:this.dates[0],enddate:this.dates[1]})},printTable:function(){this.reportTable.length>0&&this.dates.length>=2&&window.open("http://localhost/visionet-api/report/stockout?startdate=".concat(this.dates[0],"&enddate=").concat(this.dates[1]),"_black")}},computed:{isLoading:function(){return this.$store.getters["stockin/getLoading"]},reportTable:function(){return this.$store.getters["stockin/getReportTable"]}}}),n=r,o=s("2877"),l=s("6544"),c=s.n(l),d=s("8336"),h=s("b0af"),u=s("cc20"),p=s("a523"),v=s("2e4b"),g=s("132d"),f=s("f6c4"),m=s("1f4f"),b=Object(o["a"])(n,a,i,!1,null,null,null);e["default"]=b.exports;c()(b,{VBtn:d["a"],VCard:h["a"],VChip:u["a"],VContainer:p["a"],VDatePicker:v["a"],VIcon:g["a"],VMain:f["a"],VSimpleTable:m["a"]})},"297c":function(t,e,s){"use strict";var a=s("2b0e"),i=(s("6ece"),s("0789")),r=s("90a2"),n=s("a9ad"),o=s("fe6c"),l=s("a452"),c=s("7560"),d=s("80d2"),h=s("58df");const u=Object(h["a"])(n["a"],Object(o["b"])(["absolute","fixed","top","bottom"]),l["a"],c["a"]);var p=u.extend({name:"v-progress-linear",directives:{intersect:r["a"]},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(d["g"])(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(d["g"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){const t=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return{opacity:t,[this.isReversed?"right":"left"]:Object(d["g"])(this.normalizedValue,"%"),width:Object(d["g"])(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible,...this.themeClasses}},computedTransition(){return this.indeterminate?i["c"]:i["d"]},isReversed(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(d["g"])(this.normalizedBuffer,"%")),t}},methods:{genContent(){const t=Object(d["s"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners(){const t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[t]:!0}}))},onClick(t){if(!this.reactive)return;const{width:e}=this.$el.getBoundingClientRect();this.internalValue=t.offsetX/e*100},onObserve(t,e,s){this.isVisible=s},normalize(t){return t<0?0:t>100?100:parseFloat(t)}},render(t){const e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?Object(d["g"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),v=p;e["a"]=a["default"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(v,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},"4b85":function(t,e,s){},"6ece":function(t,e,s){},"8adc":function(t,e,s){},"8b37":function(t,e,s){},a523:function(t,e,s){"use strict";s("20f6"),s("4b85");var a=s("e8f2"),i=s("d9f7");e["a"]=Object(a["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:s,children:a}){let r;const{attrs:n}=s;return n&&(s.attrs={},r=Object.keys(n).filter(t=>{if("slot"===t)return!1;const e=n[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e})),e.id&&(s.domProps=s.domProps||{},s.domProps.id=e.id),t(e.tag,Object(i["a"])(s,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(r||[])}),a)}})},b0af:function(t,e,s){"use strict";s("615b");var a=s("10d2"),i=s("297c"),r=s("1c87"),n=s("58df");e["a"]=Object(n["a"])(i["a"],r["a"],a["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...r["a"].options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...a["a"].options.computed.classes.call(this)}},styles(){const t={...a["a"].options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=i["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){const{tag:e,data:s}=this.generateRouteLink();return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})},bd0c:function(t,e,s){},cc20:function(t,e,s){"use strict";s("8adc");var a=s("58df"),i=s("0789"),r=s("9d26"),n=s("a9ad"),o=s("4e82"),l=s("7560"),c=s("f2e7"),d=s("1c87"),h=s("af2b"),u=s("d9bd");e["a"]=Object(a["a"])(n["a"],h["a"],d["a"],l["a"],Object(o["a"])("chipGroup"),Object(c["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:()=>({proxyClass:"v-chip--active"}),computed:{classes(){return{"v-chip":!0,...d["a"].options.computed.classes.call(this),"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose,...this.themeClasses,...this.sizeableClasses,...this.groupClasses}},hasClose(){return Boolean(this.close)},isClickable(){return Boolean(d["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created(){const t=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];t.forEach(([t,e])=>{this.$attrs.hasOwnProperty(t)&&Object(u["a"])(t,e,this)})},methods:{click(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter(){const t=[];return this.isActive&&t.push(this.$createElement(r["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(i["b"],t)},genClose(){return this.$createElement(r["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:t=>{t.stopPropagation(),t.preventDefault(),this.$emit("click:close"),this.$emit("update:active",!1)}}},this.closeIcon)},genContent(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render(t){const e=[this.genContent()];let{tag:s,data:a}=this.generateRouteLink();a.attrs={...a.attrs,draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:a.attrs.tabindex},a.directives.push({name:"show",value:this.active}),a=this.setBackgroundColor(this.color,a);const i=this.textColor||this.outlined&&this.color;return t(s,this.setTextColor(i,a),e)}})},e8f2:function(t,e,s){"use strict";s.d(e,"a",(function(){return i}));var a=s("2b0e");function i(t){return a["default"].extend({name:"v-"+t,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:s,data:a,children:i}){a.staticClass=`${t} ${a.staticClass||""}`.trim();const{attrs:r}=a;if(r){a.attrs={};const t=Object.keys(r).filter(t=>{if("slot"===t)return!1;const e=r[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e});t.length&&(a.staticClass+=" "+t.join(" "))}return s.id&&(a.domProps=a.domProps||{},a.domProps.id=s.id),e(s.tag,a,i)}})}},f6c4:function(t,e,s){"use strict";s("bd0c");var a=s("d10f");e["a"]=a["a"].extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles(){const{bar:t,top:e,right:s,footer:a,insetFooter:i,bottom:r,left:n}=this.$vuetify.application;return{paddingTop:e+t+"px",paddingRight:s+"px",paddingBottom:a+i+r+"px",paddingLeft:n+"px"}}},render(t){const e={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,e,[t("div",{staticClass:"v-main__wrap"},this.$slots.default)])}})}}]);
//# sourceMappingURL=stockoutreport.d0f9def8.js.map