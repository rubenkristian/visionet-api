(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["stockinreport"],{"1f4f":function(t,e,s){"use strict";s("8b37");var a=s("80d2"),i=s("7560"),n=s("58df");e["a"]=Object(n["a"])(i["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes(){return{"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom,...this.themeClasses}}},methods:{genWrapper(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(a["g"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"2e1e":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-main",[s("v-container",{attrs:{"fill-width":""}},[s("v-date-picker",{attrs:{"full-width":"",range:""},model:{value:t.dates,callback:function(e){t.dates=e},expression:"dates"}}),s("div",{staticClass:"text-center"},[s("v-chip",{staticClass:"ma-2"},[t._v("\n                From : "+t._s(t.dates[0])+"\n            ")]),s("v-chip",{staticClass:"ma-2"},[t._v("\n                To : "+t._s(t.dates[1]?t.dates[1]:"????-??-??")+"\n            ")])],1),s("div",{staticClass:"text-center",staticStyle:{margin:"10px"}},[s("v-btn",{on:{click:t.printToPage}},[t._v("\n                Print\n            ")])],1),s("v-card",[s("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[s("thead",[s("tr",[s("th",{staticClass:"text-left"},[t._v("\n                                No\n                            ")]),s("th",{staticClass:"text-left"},[t._v("\n                                Device Name\n                            ")]),s("th",{staticClass:"text-left"},[t._v("\n                                Brand Name\n                            ")]),s("th",{staticClass:"text-left"},[t._v("\n                                Inventory Code\n                            ")]),s("th",{staticClass:"text-left"},[t._v("\n                                Model\n                            ")]),s("th",{staticClass:"text-left"},[t._v("\n                                Quantity\n                            ")]),s("th",{staticClass:"text-left"},[t._v("\n                                Date\n                            ")]),s("th",{staticClass:"text-left"},[t._v("\n                                CC\n                            ")])])]),s("tbody",t._l(t.reportTable,(function(e,a){return s("tr",{key:a},[s("td",[t._v(t._s(a+1))]),s("td",[t._v(t._s(e.devicename))]),s("td",[t._v(t._s(e.brandname))]),s("td",[t._v(t._s(e.serial_number))]),s("td",[t._v(t._s(e.model))]),s("td",[t._v(t._s(e.count_input))]),s("td",[t._v(t._s(e.datecreated))]),s("td",[t._v(t._s(e.adminname))])])})),0)]},proxy:!0}])})],1),s("v-btn",{staticStyle:{margin:"10px"},attrs:{color:"primary"},on:{click:t.printTable}},[s("v-icon",[t._v("mdi-printer")])],1)],1)],1)},i=[],n=(s("99af"),{created:function(){var t=this.$store.dispatch;t("stockin/removeTableReport")},data:function(){return{dates:[(new Date).toISOString().substr(0,10),(new Date).toISOString().substr(0,10)],items:[],urlprint:""}},methods:{printToPage:function(){var t=this.$store.dispatch;t("stockin/tableReportStockIn",{startdate:this.dates[0],enddate:this.dates[1]})},printTable:function(){if(this.reportTable.length>0&&this.dates.length>=2){var t=window.open("http://localhost/visionet-api/report/stockin?startdate=".concat(this.dates[0],"&enddate=").concat(this.dates[1]),"_black");t.onloadstart((function(){t.print()}))}}},computed:{isLoading:function(){return this.$store.getters["stockin/getLoading"]},reportTable:function(){return this.$store.getters["stockin/getReportTable"]}}}),l=n,o=s("2877"),r=s("6544"),c=s.n(r),d=s("8336"),h=s("b0af"),p=s("cc20"),u=s("a523"),v=s("2e4b"),b=s("132d"),g=s("f6c4"),f=s("1f4f"),m=Object(o["a"])(l,a,i,!1,null,null,null);e["default"]=m.exports;c()(m,{VBtn:d["a"],VCard:h["a"],VChip:p["a"],VContainer:u["a"],VDatePicker:v["a"],VIcon:b["a"],VMain:g["a"],VSimpleTable:f["a"]})},"8adc":function(t,e,s){},"8b37":function(t,e,s){},b0af:function(t,e,s){"use strict";s("615b");var a=s("10d2"),i=s("297c"),n=s("1c87"),l=s("58df");e["a"]=Object(l["a"])(i["a"],n["a"],a["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...n["a"].options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...a["a"].options.computed.classes.call(this)}},styles(){const t={...a["a"].options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=i["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){const{tag:e,data:s}=this.generateRouteLink();return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})},cc20:function(t,e,s){"use strict";s("8adc");var a=s("58df"),i=s("0789"),n=s("9d26"),l=s("a9ad"),o=s("4e82"),r=s("7560"),c=s("f2e7"),d=s("1c87"),h=s("af2b"),p=s("d9bd");e["a"]=Object(a["a"])(l["a"],h["a"],d["a"],r["a"],Object(o["a"])("chipGroup"),Object(c["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:()=>({proxyClass:"v-chip--active"}),computed:{classes(){return{"v-chip":!0,...d["a"].options.computed.classes.call(this),"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose,...this.themeClasses,...this.sizeableClasses,...this.groupClasses}},hasClose(){return Boolean(this.close)},isClickable(){return Boolean(d["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created(){const t=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];t.forEach(([t,e])=>{this.$attrs.hasOwnProperty(t)&&Object(p["a"])(t,e,this)})},methods:{click(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter(){const t=[];return this.isActive&&t.push(this.$createElement(n["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(i["b"],t)},genClose(){return this.$createElement(n["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:t=>{t.stopPropagation(),t.preventDefault(),this.$emit("click:close"),this.$emit("update:active",!1)}}},this.closeIcon)},genContent(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render(t){const e=[this.genContent()];let{tag:s,data:a}=this.generateRouteLink();a.attrs={...a.attrs,draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:a.attrs.tabindex},a.directives.push({name:"show",value:this.active}),a=this.setBackgroundColor(this.color,a);const i=this.textColor||this.outlined&&this.color;return t(s,this.setTextColor(i,a),e)}})}}]);
//# sourceMappingURL=stockinreport.d0b0af10.js.map