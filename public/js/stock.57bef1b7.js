(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["stock"],{"0fd9":function(t,e,s){"use strict";s("4b85");var a=s("2b0e"),n=s("d9f7"),i=s("80d2");const r=["sm","md","lg","xl"],o=["start","end","center"];function l(t,e){return r.reduce((s,a)=>(s[t+Object(i["F"])(a)]=e(),s),{})}const c=t=>[...o,"baseline","stretch"].includes(t),u=l("align",()=>({type:String,default:null,validator:c})),d=t=>[...o,"space-between","space-around"].includes(t),h=l("justify",()=>({type:String,default:null,validator:d})),g=t=>[...o,"space-between","space-around","stretch"].includes(t),p=l("alignContent",()=>({type:String,default:null,validator:g})),f={align:Object.keys(u),justify:Object.keys(h),alignContent:Object.keys(p)},v={align:"align",justify:"justify",alignContent:"align-content"};function m(t,e,s){let a=v[t];if(null!=s){if(e){const s=e.replace(t,"");a+="-"+s}return a+="-"+s,a.toLowerCase()}}const b=new Map;e["a"]=a["default"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...u,justify:{type:String,default:null,validator:d},...h,alignContent:{type:String,default:null,validator:g},...p},render(t,{props:e,data:s,children:a}){let i="";for(const n in e)i+=String(e[n]);let r=b.get(i);if(!r){let t;for(t in r=[],f)f[t].forEach(s=>{const a=e[s],n=m(t,s,a);n&&r.push(n)});r.push({"no-gutters":e.noGutters,"row--dense":e.dense,["align-"+e.align]:e.align,["justify-"+e.justify]:e.justify,["align-content-"+e.alignContent]:e.alignContent}),b.set(i,r)}return t(e.tag,Object(n["a"])(s,{staticClass:"row",class:r}),a)}})},"2db4":function(t,e,s){"use strict";s("ca71");var a=s("8dd9"),n=s("a9ad"),i=s("7560"),r=s("f2e7"),o=s("fe6c"),l=s("58df"),c=s("80d2"),u=s("d9bd");e["a"]=Object(l["a"])(a["a"],n["a"],r["a"],Object(o["b"])(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:t=>"string"===typeof t||!1===t},vertical:Boolean},data:()=>({activeTimeout:-1}),computed:{classes(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground(){return!this.text&&!this.outlined},isDark(){return this.hasBackground?!this.light:i["a"].options.computed.isDark.call(this)},styles(){if(this.absolute)return{};const{bar:t,bottom:e,footer:s,insetFooter:a,left:n,right:i,top:r}=this.$vuetify.application;return{paddingBottom:Object(c["g"])(e+s+a),paddingLeft:this.app?Object(c["g"])(n):void 0,paddingRight:this.app?Object(c["g"])(i):void 0,paddingTop:Object(c["g"])(t+r)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted(){this.isActive&&this.setTimeout()},created(){this.$attrs.hasOwnProperty("auto-height")&&Object(u["e"])("auto-height",this),0==this.timeout&&Object(u["d"])('timeout="0"',"-1",this)},methods:{genActions(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(c["s"])(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent(){return this.$createElement("div",{staticClass:"v-snack__content",class:{[this.contentClass]:!0},attrs:{role:"status","aria-live":"polite"}},[Object(c["s"])(this)])},genWrapper(){const t=this.hasBackground?this.setBackgroundColor:this.setTextColor,e=t(this.color,{staticClass:"v-snack__wrapper",class:a["a"].options.computed.classes.call(this),style:a["a"].options.computed.styles.call(this),directives:[{name:"show",value:this.isActive}],on:{mouseenter:()=>window.clearTimeout(this.activeTimeout),mouseleave:this.setTimeout}});return this.$createElement("div",e,[this.genContent(),this.genActions()])},genTransition(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout(){window.clearTimeout(this.activeTimeout);const t=Number(this.timeout);this.isActive&&![0,-1].includes(t)&&(this.activeTimeout=window.setTimeout(()=>{this.isActive=!1},t))}},render(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}})},"615b":function(t,e,s){},"62ad":function(t,e,s){"use strict";s("4b85");var a=s("2b0e"),n=s("d9f7"),i=s("80d2");const r=["sm","md","lg","xl"],o=(()=>r.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}))(),l=(()=>r.reduce((t,e)=>(t["offset"+Object(i["F"])(e)]={type:[String,Number],default:null},t),{}))(),c=(()=>r.reduce((t,e)=>(t["order"+Object(i["F"])(e)]={type:[String,Number],default:null},t),{}))(),u={col:Object.keys(o),offset:Object.keys(l),order:Object.keys(c)};function d(t,e,s){let a=t;if(null!=s&&!1!==s){if(e){const s=e.replace(t,"");a+="-"+s}return"col"!==t||""!==s&&!0!==s?(a+="-"+s,a.toLowerCase()):a.toLowerCase()}}const h=new Map;e["a"]=a["default"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...o,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:s,children:a,parent:i}){let r="";for(const n in e)r+=String(e[n]);let o=h.get(r);if(!o){let t;for(t in o=[],u)u[t].forEach(s=>{const a=e[s],n=d(t,s,a);n&&o.push(n)});const s=o.some(t=>t.startsWith("col-"));o.push({col:!s||!e.cols,["col-"+e.cols]:e.cols,["offset-"+e.offset]:e.offset,["order-"+e.order]:e.order,["align-self-"+e.alignSelf]:e.alignSelf}),h.set(r,o)}return t(e.tag,Object(n["a"])(s,{class:o}),a)}})},"99d9":function(t,e,s){"use strict";s.d(e,"a",(function(){return i})),s.d(e,"b",(function(){return r})),s.d(e,"c",(function(){return o})),s.d(e,"d",(function(){return l}));var a=s("b0af"),n=s("80d2");const i=Object(n["i"])("v-card__actions"),r=Object(n["i"])("v-card__subtitle"),o=Object(n["i"])("v-card__text"),l=Object(n["i"])("v-card__title");a["a"]},b0af:function(t,e,s){"use strict";s("615b");var a=s("10d2"),n=s("297c"),i=s("1c87"),r=s("58df");e["a"]=Object(r["a"])(n["a"],i["a"],a["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...i["a"].options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...a["a"].options.computed.classes.call(this)}},styles(){const t={...a["a"].options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=n["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){const{tag:e,data:s}=this.generateRouteLink();return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})},ca71:function(t,e,s){},f928:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-main",[s("v-container",{attrs:{"fill-width":""}},[s("v-card",[s("v-row",{staticStyle:{height:"150px"},attrs:{"no-gutters":""}},[s("v-col",[s("v-card",{staticClass:"pa-2",staticStyle:{margin:"5px"},attrs:{color:"#26c6da",dark:"",outlined:""}},[s("v-card-title",{staticClass:"text-h5"},[t._v("\n                        All Stock\n                        ")]),s("v-card-subtitle",[t._v("\n                            "+t._s(t.getDetailStock.quantity_all)+"\n                        ")])],1)],1),s("v-col",[s("v-card",{staticClass:"pa-2",staticStyle:{margin:"5px"},attrs:{color:"#26c6da",dark:"",outlined:""}},[s("v-card-title",{staticClass:"text-h5"},[t._v("\n                        Stock In\n                        ")]),s("v-card-subtitle",[t._v("\n                            "+t._s(t.getDetailStock.quantity_in)+"\n                        ")])],1)],1),s("v-col",[s("v-card",{staticClass:"pa-2",staticStyle:{margin:"5px"},attrs:{color:"#26c6da",dark:"",outlined:""}},[s("v-card-title",{staticClass:"text-h5"},[t._v("\n                        Stock Out\n                        ")]),s("v-card-subtitle",[t._v("\n                            "+t._s(t.getDetailStock.quantity_out)+"\n                        ")])],1)],1)],1)],1),s("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.table,options:t.options,"server-items-length":t.lentable,loading:t.isLoading},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"top",fn:function(){return[s("v-toolbar",{attrs:{flat:""}},[s("v-text-field",{staticClass:"mx-12",attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)]},proxy:!0}])}),s("v-snackbar",{attrs:{value:t.errorMsg,color:t.color,"multi-line":"multi-line"===t.mode,timeout:t.timeout,vertical:"vertical"===t.mode}},[t._v("\n            "+t._s(t.errorMsg)+"\n            "),s("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),s("v-btn",{attrs:{dark:"",text:""},on:{click:function(e){return t.removeError()}}},[t._v("\n                Close\n            ")])],1)],1)],1)},n=[],i=s("5530"),r=(s("d3b7"),s("3ca3"),s("ddb0"),s("841c"),s("ac1f"),{components:{Dialog:function(){return s.e("chunk-7ac52809").then(s.bind(null,"3f7a"))},AssetInput:function(){return s.e("chunk-5e768ec7").then(s.bind(null,"87e9"))},WorkOrderInput:function(){return s.e("chunk-3aa366c8").then(s.bind(null,"c63f"))}},data:function(){return{asset_id_server:-1,wo:!1,formTitle:"",forminput:{device_name:null,device_brand:null,model:"",serial_number:"",description:"",warehouse:null,id:0},forminputWO:{asset_id:-1,customer:{id:-1,name:""},location:{id:-1,name:""},device_name:"",brand_name:"",model:"",serial_number:""},edit:!1,options:{},selected:[],alert:!1,search:"",headers:[{text:"ID",value:"id",sortable:!1},{text:"Device",value:"devicename",sortable:!1},{text:"Brand",value:"brandname",sortable:!1},{text:"Model",value:"model",sortable:!1},{text:"Serial Number",value:"serial_number",sortable:!1},{text:"Description",value:"description",sortable:!1},{text:"Stock In",value:"stock_in",sortable:!1},{text:"Stock Out",value:"stock_out",sortable:!1},{text:"Available Stock",value:"stock_available",sortable:!1}],idselected:-1,items:[],currentY:0,lastY:0,hidden:!1,timeout:6e3,color:"",mode:"",loading:!1}},created:function(){this.detailStockAPI()},destroyed:function(){},methods:{removeError:function(){var t=this.$store.dispatch;t("asset/removeError")},getDataFromAPI:function(){var t=this.$store.dispatch,e=this.options,s=e.sortBy,a=e.sortDesc,n=e.page,i=e.itemsPerPage;s.length>0&&(this.sortbylast=s),1===a.length&&(this.sorting=a[0]?"DESC":"ASC"),t("asset/reqList",{index:n,rows:i,search:this.search,sortby:this.sortbylast,sort:this.sorting})},detailStockAPI:function(){var t=this.$store.dispatch;t("asset/getDetailStock")}},computed:{getDetailStock:function(){return this.$store.getters["asset/getDetailStock"]||{quantity_all:0,quantity_in:0,quantity_out:0}},updateStat:function(){return this.$store.getters["asset/getUpdate"]},table:function(){return this.$store.getters["asset/getList"]},lentable:function(){return this.$store.getters["asset/getTotalItems"]},dialogStat:function(){return this.$store.getters["asset/getDialog"]},isLoading:function(){return this.$store.getters["customer/getLoading"]},errorMsg:function(){return this.$store.getters["customer/getError"]},params:function(){return Object(i["a"])(Object(i["a"])({},this.options),{},{query:this.search})}},watch:{options:{handler:function(t){this.getDataFromAPI()},deep:!0},params:{handler:function(t){this.getDataFromAPI()},deep:!0},updateStat:{handler:function(t){t&&this.getDataFromAPI()},deep:!0},dialogStat:{handler:function(t){t||(this.$refs.submitpanel&&this.$refs.submitpanel.resetForm(),this.$refs.workorderinput&&this.$refs.workorderinput.resetForm())},deep:!0}}}),o=r,l=s("2877"),c=s("6544"),u=s.n(c),d=s("8336"),h=s("b0af"),g=s("99d9"),p=s("62ad"),f=s("a523"),v=s("8fea"),m=s("ce7e"),b=s("f6c4"),k=s("0fd9"),y=s("2db4"),S=s("8654"),_=s("71d9"),C=Object(l["a"])(o,a,n,!1,null,null,null);e["default"]=C.exports;u()(C,{VBtn:d["a"],VCard:h["a"],VCardSubtitle:g["b"],VCardTitle:g["d"],VCol:p["a"],VContainer:f["a"],VDataTable:v["a"],VDivider:m["a"],VMain:b["a"],VRow:k["a"],VSnackbar:y["a"],VTextField:S["a"],VToolbar:_["a"]})}}]);
//# sourceMappingURL=stock.57bef1b7.js.map