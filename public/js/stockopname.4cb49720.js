(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["stockopname"],{"1a69":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-main",[s("v-container",{attrs:{"fill-width":""}},[s("v-card",[s("v-card-actions",[0==t.idStockHistory?s("v-btn",{on:{click:function(e){return t.createStockOpname()}}},[t._v("\n                    Create Stock Opname \n                ")]):s("div",[t._v("\n                    "+t._s(t.dateStockHistory)+"\n                ")])],1)],1),s("v-card",{staticStyle:{margin:"10px"},attrs:{"max-width":"300"}},[s("v-card-title",[s("span",{staticClass:"headline"},[t._v("Input Stock Opname")])]),s("v-card-text",[s("StockOpnameInput",{ref:"stockinput",attrs:{forminput:t.forminput}})],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{disabled:0==t.selectedId,color:"blue darken-1",text:""},on:{click:t.save}},[t._v("Save")])],1)],1),s("v-card",{staticStyle:{margin:"10px"}},[s("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.listStock,options:t.options,"server-items-length":t.lentable,loading:t.isLoading},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"item.actions",fn:function(e){var i=e.item;return[s("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[s("v-icon",t._g({staticClass:"mr-3",attrs:{small:""},on:{click:function(e){return t.deleteAction(i)}}},o),[t._v("\n                                mdi-delete\n                            ")])]}}],null,!0)},[s("span",[t._v("Delete Asset")])])]}}],null,!0)})],1),s("v-btn",{attrs:{block:"",color:"primary"},on:{click:t.submitList}},[t._v("\n            Submit All\n        ")]),s("Dialog",{attrs:{dialog:t.alert,title:"Delete",text:"Delete this item?"},on:{ok:t.OkButton,no:t.NoButton}})],1)],1)},o=[],a=s("5530"),n=(s("d3b7"),s("3ca3"),s("ddb0"),s("841c"),s("ac1f"),s("a4d3"),s("e01a"),{components:{StockOpnameInput:function(){return s.e("chunk-c6608f5e").then(s.bind(null,"74189"))},Dialog:function(){return s.e("chunk-7ac52809").then(s.bind(null,"3f7a"))}},data:function(){return{saveAvailable:!0,headers:[{text:"Device",value:"devicename",sortable:!1},{text:"Brand",value:"brandname",sortable:!1},{text:"Model",value:"model",sortable:!1},{text:"Inventory Code",value:"serial_number",sortable:!1},{text:"Stock Available",value:"current_stock_available",sortable:!1},{text:"Stock in Warehouse",value:"actual_stock_available",sortable:!1},{text:"Stock Difference",value:"stock_difference",sortable:!1},{text:"Description",value:"description",sortable:!1},{text:"Actions",value:"actions",sortable:!1}],forminput:{asset:{assetid:0,stock_available:0,devicename:"",brandname:"",serial_number:"",quantity:0,warehousestock:0,diffstock:0,description:""}},items:[],dialogStatus:!1,edit:!1,item_selected:null,alert:!1,options:{}}},created:function(){this.checkStockOpname()},methods:{createStockOpname:function(){var t=this.$store.dispatch;t("stockopname/createStockOpname")},checkStockOpname:function(){var t=this.$store.dispatch;t("stockopname/checkStockOpnameHistory")},OkButton:function(){this.deleteStockHistory(this.item_selected),this.alert=!1},deleteAction:function(t){this.item_selected=t,this.alert=!0},NoButton:function(){this.alert=!1},close:function(){this.dialogStatus=!this.dialogStatus},getListAPI:function(){if(!this.isLoading){var t=this.$store.dispatch,e=this.options,s=e.sortBy,i=e.sortDesc,o=e.page,a=e.itemsPerPage;s.length>0&&(this.sortbylast=s),1===i.length&&(this.sorting=i[0]?"DESC":"ASC"),t("stockopname/reqList",{index:o,rows:a,search:this.search,sortby:this.sortbylast,sort:this.sorting})}},inputStockHistory:function(){if(!this.isLoading){var t=this.$store.dispatch,e=this.$refs.stockinput.stockopnameinput.asset,s=e.assetid,i=e.stock_available,o=e.warehousestock,a=e.diffstock,n=e.description,r={idasset:s,stock_available:i,stock_actual:o,diffstock:a,description:n||""};t("stockopname/inputStock",r)}},submitList:function(){if(!this.isLoading){var t=this.$store.dispatch;t("stockopname/submitListStock")}},deleteStockHistory:function(t){if(!this.isLoading){var e=this.$store.dispatch,s=this.item_selected,i=s.id_history,o=s.id_asset,a={idhistory:i,idasset:o};e("stockopname/deleteStock",a),this.$refs.stockinput.resetForm()}},save:function(){this.inputStockHistory(),this.$refs.stockinput.resetForm()}},computed:{idStockHistory:function(){return this.$store.getters["stockopname/getIdStockHistory"]},dateStockHistory:function(){return this.$store.getters["stockopname/getDateStockHistory"]},lentable:function(){return this.$store.getters["stockopname/getTotalItems"]},getUpdate:function(){return this.$store.getters["stockopname/getUpdate"]},isLoading:function(){return this.$store.getters["stockopname/getLoading"]},listStock:function(){return this.$store.getters["stockopname/getListStock"]},params:function(){return Object(a["a"])(Object(a["a"])({},this.options),{},{query:this.search})},selectedId:function(){return this.$store.getters["stockopname/getSelectedID"]}},watch:{params:{handler:function(t){this.getListAPI()},deep:!0},options:{handler:function(t){this.getListAPI()},deep:!0},getUpdate:{handler:function(t,e){t&&this.getListAPI()},deep:!0}}}),r=n,c=s("2877"),l=s("6544"),h=s.n(l),d=s("8336"),u=s("b0af"),p=s("99d9"),v=s("a523"),f=s("8fea"),m=s("132d"),g=s("f6c4"),b=s("2fa4"),k=s("3a2f"),S=Object(c["a"])(r,i,o,!1,null,null,null);e["default"]=S.exports;h()(S,{VBtn:d["a"],VCard:u["a"],VCardActions:p["a"],VCardText:p["c"],VCardTitle:p["d"],VContainer:v["a"],VDataTable:f["a"],VIcon:m["a"],VMain:g["a"],VSpacer:b["a"],VTooltip:k["a"]})},"3a2f":function(t,e,s){"use strict";s("9734");var i=s("4ad4"),o=s("a9ad"),a=s("16b7"),n=s("b848"),r=s("75eb"),c=s("f573"),l=s("f2e7"),h=s("80d2"),d=s("d9bd"),u=s("58df");e["a"]=Object(u["a"])(o["a"],a["a"],n["a"],r["a"],c["a"],l["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:()=>({calculatedMinWidth:0,closeDependents:!1}),computed:{calculatedLeft(){const{activator:t,content:e}=this.dimensions,s=!this.bottom&&!this.left&&!this.top&&!this.right,i=!1!==this.attach?t.offsetLeft:t.left;let o=0;return this.top||this.bottom||s?o=i+t.width/2-e.width/2:(this.left||this.right)&&(o=i+(this.right?t.width:-e.width)+(this.right?10:-10)),this.nudgeLeft&&(o-=parseInt(this.nudgeLeft)),this.nudgeRight&&(o+=parseInt(this.nudgeRight)),this.calcXOverflow(o,this.dimensions.content.width)+"px"},calculatedTop(){const{activator:t,content:e}=this.dimensions,s=!1!==this.attach?t.offsetTop:t.top;let i=0;return this.top||this.bottom?i=s+(this.bottom?t.height:-e.height)+(this.bottom?10:-10):(this.left||this.right)&&(i=s+t.height/2-e.height/2),this.nudgeTop&&(i-=parseInt(this.nudgeTop)),this.nudgeBottom&&(i+=parseInt(this.nudgeBottom)),this.calcYOverflow(i+this.pageYOffset)+"px"},classes(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY(){return this.top||this.bottom},offsetX(){return this.left||this.right},styles(){return{left:this.calculatedLeft,maxWidth:Object(h["g"])(this.maxWidth),minWidth:Object(h["g"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount(){this.$nextTick(()=>{this.value&&this.callActivate()})},mounted(){"v-slot"===Object(h["t"])(this,"activator",!0)&&Object(d["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate(){this.runDelay("close")},genActivatorListeners(){const t=i["a"].options.methods.genActivatorListeners.call(this);return t.focus=t=>{this.getActivator(t),this.runDelay("open")},t.blur=t=>{this.getActivator(t),this.runDelay("close")},t.keydown=t=>{t.keyCode===h["x"].esc&&(this.getActivator(t),this.runDelay("close"))},t},genActivatorAttributes(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition(){const t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:{[this.contentClass]:!0,menuable__content__active:this.isActive,"v-tooltip__content--fixed":this.activatorFixed},style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render(t){return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent(()=>[this.genTransition()]),this.genActivator()])}})},"615b":function(t,e,s){},9734:function(t,e,s){},"99d9":function(t,e,s){"use strict";s.d(e,"a",(function(){return a})),s.d(e,"b",(function(){return n})),s.d(e,"c",(function(){return r})),s.d(e,"d",(function(){return c}));var i=s("b0af"),o=s("80d2");const a=Object(o["i"])("v-card__actions"),n=Object(o["i"])("v-card__subtitle"),r=Object(o["i"])("v-card__text"),c=Object(o["i"])("v-card__title");i["a"]},b0af:function(t,e,s){"use strict";s("615b");var i=s("10d2"),o=s("297c"),a=s("1c87"),n=s("58df");e["a"]=Object(n["a"])(o["a"],a["a"],i["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...a["a"].options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...i["a"].options.computed.classes.call(this)}},styles(){const t={...i["a"].options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=o["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){const{tag:e,data:s}=this.generateRouteLink();return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})}}]);
//# sourceMappingURL=stockopname.4cb49720.js.map