(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["stockopname"],{"1a69":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-main",[i("v-container",{attrs:{"fill-width":""}},[i("v-card",[i("v-card-actions",[0==t.idStockHistory?i("v-btn",{on:{click:function(e){return t.createStockOpname()}}},[t._v("\n                    Create Stock Opname \n                ")]):i("div",[t._v("\n                    "+t._s(t.dateStockHistory)+"\n                ")])],1)],1),0!=t.idStockHistory?i("div",[i("v-card",{staticStyle:{margin:"10px"},attrs:{"max-width":"300"}},[i("v-card-title",[i("span",{staticClass:"headline"},[t._v("Input Stock Opname")])]),i("v-card-text",[i("StockOpnameInput",{ref:"stockinput",attrs:{forminput:t.forminput}})],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{disabled:0==t.selectedId,color:"blue darken-1",text:""},on:{click:t.save}},[t._v("Save")])],1)],1),i("v-card",{staticStyle:{margin:"10px"}},[i("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.listStock,options:t.options,"server-items-length":t.lentable,loading:t.isLoading},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"item.actions",fn:function(e){var s=e.item;return[i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[i("v-icon",t._g({staticClass:"mr-3",attrs:{small:""},on:{click:function(e){return t.deleteAction(s)}}},o),[t._v("\n                                    mdi-delete\n                                ")])]}}],null,!0)},[i("span",[t._v("Delete Asset")])])]}}],null,!0)})],1),i("v-btn",{attrs:{disabled:t.lentable<=0,block:"",color:"primary"},on:{click:t.submitList}},[t._v("\n                Submit All\n            ")])],1):t._e(),i("Dialog",{attrs:{dialog:t.alert,title:"Delete",text:"Delete this item?"},on:{ok:t.OkButton,no:t.NoButton}})],1),i("v-snackbar",{attrs:{value:t.errorMsg,color:t.color,"multi-line":"multi-line"===t.mode,timeout:t.timeout,vertical:"vertical"===t.mode}},[t._v("\n            "+t._s(t.errorMsg)+"\n            "),i("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),i("v-btn",{attrs:{dark:"",text:""},on:{click:function(e){return t.removeError()}}},[t._v("\n                Close\n            ")])],1)],1)},o=[],a=i("5530"),n=(i("d3b7"),i("3ca3"),i("ddb0"),i("841c"),i("ac1f"),i("a4d3"),i("e01a"),{components:{StockOpnameInput:function(){return i.e("chunk-c6608f5e").then(i.bind(null,"74189"))},Dialog:function(){return i.e("chunk-7ac52809").then(i.bind(null,"3f7a"))}},data:function(){return{saveAvailable:!0,headers:[{text:"Device",value:"devicename",sortable:!1},{text:"Brand",value:"brandname",sortable:!1},{text:"Model",value:"model",sortable:!1},{text:"Inventory Code",value:"serial_number",sortable:!1},{text:"Stock Available",value:"current_stock_available",sortable:!1},{text:"Stock in Warehouse",value:"actual_stock_available",sortable:!1},{text:"Stock Difference",value:"stock_difference",sortable:!1},{text:"Description",value:"description",sortable:!1},{text:"Actions",value:"actions",sortable:!1}],forminput:{asset:{assetid:0,stock_available:0,devicename:"",brandname:"",serial_number:"",quantity:0,warehousestock:0,diffstock:0,description:""}},items:[],dialogStatus:!1,edit:!1,item_selected:null,alert:!1,options:{},timeout:6e3,color:"",mode:""}},created:function(){this.checkStockOpname()},methods:{removeError:function(){var t=this.$store.dispatch;t("stockopname/removeError")},createStockOpname:function(){var t=this.$store.dispatch;t("stockopname/createStockOpname")},checkStockOpname:function(){var t=this.$store.dispatch;t("stockopname/checkStockOpnameHistory")},OkButton:function(){this.deleteStockHistory(this.item_selected),this.alert=!1},deleteAction:function(t){this.item_selected=t,this.alert=!0},NoButton:function(){this.alert=!1},close:function(){this.dialogStatus=!this.dialogStatus},getListAPI:function(){if(!this.isLoading){var t=this.$store.dispatch,e=this.options,i=e.sortBy,s=e.sortDesc,o=e.page,a=e.itemsPerPage;i.length>0&&(this.sortbylast=i),1===s.length&&(this.sorting=s[0]?"DESC":"ASC"),t("stockopname/reqList",{index:o,rows:a,search:this.search,sortby:this.sortbylast,sort:this.sorting})}},inputStockHistory:function(){if(!this.isLoading){var t=this.$store.dispatch,e=this.$refs.stockinput.stockopnameinput.asset,i=e.assetid,s=e.stock_available,o=e.warehousestock,a=e.diffstock,n=e.description,r={idasset:i,stock_available:s,stock_actual:o,diffstock:a,description:n||""};t("stockopname/inputStock",r)}},submitList:function(){if(!this.isLoading){var t=this.$store.dispatch;t("stockopname/submitListStock")}},deleteStockHistory:function(t){if(!this.isLoading){var e=this.$store.dispatch,i=this.item_selected,s=i.id_history,o=i.id_asset,a={idhistory:s,idasset:o};e("stockopname/deleteStock",a),this.$refs.stockinput.resetForm()}},save:function(){this.inputStockHistory(),this.$refs.stockinput.resetForm()}},computed:{idStockHistory:function(){return this.$store.getters["stockopname/getIdStockHistory"]},dateStockHistory:function(){return this.$store.getters["stockopname/getDateStockHistory"]},lentable:function(){return this.$store.getters["stockopname/getTotalItems"]},getUpdate:function(){return this.$store.getters["stockopname/getUpdate"]},isLoading:function(){return this.$store.getters["stockopname/getLoading"]},listStock:function(){return this.$store.getters["stockopname/getListStock"]},params:function(){return Object(a["a"])(Object(a["a"])({},this.options),{},{query:this.search})},selectedId:function(){return this.$store.getters["stockopname/getSelectedID"]},errorMsg:function(){return this.$store.getters["stockopname/getError"]}},watch:{params:{handler:function(t){this.getListAPI()},deep:!0},options:{handler:function(t){this.getListAPI()},deep:!0},getUpdate:{handler:function(t,e){t&&this.getListAPI()},deep:!0},idStockHistory:{handler:function(t,e){}}}}),r=n,c=i("2877"),l=i("6544"),d=i.n(l),h=i("8336"),u=i("b0af"),p=i("99d9"),v=i("a523"),m=i("8fea"),f=i("ce7e"),g=i("132d"),b=i("f6c4"),k=i("2db4"),S=i("2fa4"),y=i("3a2f"),_=Object(c["a"])(r,s,o,!1,null,null,null);e["default"]=_.exports;d()(_,{VBtn:h["a"],VCard:u["a"],VCardActions:p["a"],VCardText:p["c"],VCardTitle:p["d"],VContainer:v["a"],VDataTable:m["a"],VDivider:f["a"],VIcon:g["a"],VMain:b["a"],VSnackbar:k["a"],VSpacer:S["a"],VTooltip:y["a"]})},"3a2f":function(t,e,i){"use strict";i("9734");var s=i("4ad4"),o=i("a9ad"),a=i("16b7"),n=i("b848"),r=i("f573"),c=i("f2e7"),l=i("80d2"),d=i("d9bd"),h=i("58df");e["a"]=Object(h["a"])(o["a"],a["a"],n["a"],r["a"],c["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:()=>({calculatedMinWidth:0,closeDependents:!1}),computed:{calculatedLeft(){const{activator:t,content:e}=this.dimensions,i=!this.bottom&&!this.left&&!this.top&&!this.right,s=!1!==this.attach?t.offsetLeft:t.left;let o=0;return this.top||this.bottom||i?o=s+t.width/2-e.width/2:(this.left||this.right)&&(o=s+(this.right?t.width:-e.width)+(this.right?10:-10)),this.nudgeLeft&&(o-=parseInt(this.nudgeLeft)),this.nudgeRight&&(o+=parseInt(this.nudgeRight)),this.calcXOverflow(o,this.dimensions.content.width)+"px"},calculatedTop(){const{activator:t,content:e}=this.dimensions,i=!1!==this.attach?t.offsetTop:t.top;let s=0;return this.top||this.bottom?s=i+(this.bottom?t.height:-e.height)+(this.bottom?10:-10):(this.left||this.right)&&(s=i+t.height/2-e.height/2),this.nudgeTop&&(s-=parseInt(this.nudgeTop)),this.nudgeBottom&&(s+=parseInt(this.nudgeBottom)),this.calcYOverflow(s+this.pageYOffset)+"px"},classes(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY(){return this.top||this.bottom},offsetX(){return this.left||this.right},styles(){return{left:this.calculatedLeft,maxWidth:Object(l["g"])(this.maxWidth),minWidth:Object(l["g"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount(){this.$nextTick(()=>{this.value&&this.callActivate()})},mounted(){"v-slot"===Object(l["t"])(this,"activator",!0)&&Object(d["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate(){this.runDelay("close")},genActivatorListeners(){const t=s["a"].options.methods.genActivatorListeners.call(this);return t.focus=t=>{this.getActivator(t),this.runDelay("open")},t.blur=t=>{this.getActivator(t),this.runDelay("close")},t.keydown=t=>{t.keyCode===l["x"].esc&&(this.getActivator(t),this.runDelay("close"))},t},genActivatorAttributes(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition(){const t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:{[this.contentClass]:!0,menuable__content__active:this.isActive,"v-tooltip__content--fixed":this.activatorFixed},style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render(t){return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent(()=>[this.genTransition()]),this.genActivator()])}})},"615b":function(t,e,i){},9734:function(t,e,i){},"99d9":function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"d",(function(){return c}));var s=i("b0af"),o=i("80d2");const a=Object(o["i"])("v-card__actions"),n=Object(o["i"])("v-card__subtitle"),r=Object(o["i"])("v-card__text"),c=Object(o["i"])("v-card__title");s["a"]},b0af:function(t,e,i){"use strict";i("615b");var s=i("10d2"),o=i("297c"),a=i("1c87"),n=i("58df");e["a"]=Object(n["a"])(o["a"],a["a"],s["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...a["a"].options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...s["a"].options.computed.classes.call(this)}},styles(){const t={...s["a"].options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=o["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){const{tag:e,data:i}=this.generateRouteLink();return i.style=this.styles,this.isClickable&&(i.attrs=i.attrs||{},i.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,i),[this.genProgress(),this.$slots.default])}})}}]);
//# sourceMappingURL=stockopname.05f15835.js.map