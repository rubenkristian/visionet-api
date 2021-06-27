(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["workorder"],{"169a":function(t,e,i){"use strict";i("368e");var s=i("480e"),n=i("4ad4"),o=i("b848"),r=i("75eb"),a=i("e707"),l=i("e4d3"),c=i("21be"),d=i("f2e7"),h=i("a293"),u=i("58df"),m=i("d9bd"),v=i("80d2");const f=Object(u["a"])(n["a"],o["a"],r["a"],a["a"],l["a"],c["a"],d["a"]);e["a"]=f.extend({name:"v-dialog",directives:{ClickOutside:h["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes(){return{[("v-dialog "+this.contentClass).trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&Object(m["e"])("full-width",this)},beforeMount(){this.$nextTick(()=>{this.isBooted=this.isActive,this.isActive&&this.show()})},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick(()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout(()=>this.animate=!1,150)})},closeConditional(t){const e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):a["a"].options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick(()=>{this.$nextTick(()=>{this.previousActiveElement=document.activeElement,this.$refs.content.focus(),this.bind()})})},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(t){if(t.keyCode===v["x"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick(()=>t&&t.focus())}this.$emit("keydown",t)},onFocusin(t){if(!t||!this.retainFocus)return;const e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some(t=>t.contains(e))){const t=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),e=[...t].find(t=>!t.hasAttribute("disabled"));e&&e.focus()}},genContent(){return this.showLazyContent(()=>[this.$createElement(s["a"],{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"document",tabindex:this.isActive?0:void 0,...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])])},genTransition(){const t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent(){const t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style={...t.style,maxWidth:"none"===this.maxWidth?void 0:Object(v["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(v["g"])(this.width)}),this.$createElement("div",t,this.getContentSlot())}},render(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"368e":function(t,e,i){},"5e97":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-main",[i("v-container",{attrs:{"fill-width":""}},[i("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.dialogStat,callback:function(e){t.dialogStat=e},expression:"dialogStat"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),i("v-card-text",[i("WorkOrderInput",{ref:"workorderinput",attrs:{edit:!0,forminputWO:t.forminputWO}})],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDialog}},[t._v("Cancel")]),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v("Save")])],1)],1)],1),i("Dialog",{attrs:{dialog:t.alert,title:"Delete",text:"Are you sure delete this?"},on:{ok:t.OkButton,no:t.NoButton}}),i("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.table,options:t.options,"server-items-length":t.lentable,loading:t.isLoading},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"top",fn:function(){return[i("v-toolbar",{attrs:{flat:""}},[i("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},on:{keyup:t.searchAction},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)]},proxy:!0},{key:"item.actions",fn:function(e){var s=e.item;return[i("v-icon",{staticClass:"mr-3",attrs:{small:""},on:{click:function(e){return t.editAction(s)}}},[t._v("\n                    mdi-pencil\n                ")]),i("v-icon",{staticClass:"mr-3",attrs:{small:""},on:{click:function(e){return t.deleteAction(s)}}},[t._v("\n                    mdi-delete\n                ")])]}}],null,!0)}),i("v-snackbar",{attrs:{value:t.errorMsg,color:t.color,"multi-line":"multi-line"===t.mode,timeout:t.timeout,vertical:"vertical"===t.mode}},[t._v("\n            "+t._s(t.errorMsg)+"\n            "),i("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),i("v-btn",{attrs:{dark:"",text:""},on:{click:function(e){return t.removeError()}}},[t._v("\n                Close\n            ")])],1)],1)],1)},n=[],o=i("5530"),r=(i("d3b7"),i("3ca3"),i("ddb0"),i("841c"),i("ac1f"),{components:{Dialog:function(){return i.e("chunk-2d0c55d3").then(i.bind(null,"3f7a"))},WorkOrderInput:function(){return i.e("chunk-3aa366c8").then(i.bind(null,"c63f"))}},data:function(){return{wo:!1,formTitle:"",forminputWO:{wo_id:-1,asset_id:-1,customer:{id:-1,name:""},location:{id:-1,name:""},device_name:"",brand_name:"",model:"",serial_number:""},edit:!1,options:{},selected:[],alert:!1,search:"",headers:[{text:"ID",value:"id",sortable:!1},{text:"Device",value:"devicename",sortable:!1},{text:"Brand",value:"brandname",sortable:!1},{text:"Model",value:"model",sortable:!1},{text:"Serial Number",value:"serial_number",sortable:!1},{text:"Customer",value:"customername",sortable:!1},{text:"Location",value:"worklocation",sortable:!1},{text:"Actions",value:"actions",sortable:!1}],idselected:-1,items:[],currentY:0,lastY:0,timeout:6e3,color:"",mode:"",id_server:0}},methods:{handleScroll:function(){this.currentY=window.top.scrollY,this.currentY>this.lastY?this.hidden=!0:this.hidden=!1,this.lastY=this.currentY},searchAction:function(){},editAction:function(t){this.formTitle="Edit Work Order",this.forminputWO.wo_id=t.id,this.forminputWO.asset_id=t.asset_id,this.forminputWO.device_name=t.devicename,this.forminputWO.brand_name=t.brandname,this.forminputWO.model=t.model,this.forminputWO.serial_number=t.serial_number,this.forminputWO.customer={id:t.customer,name:t.customername},this.forminputWO.location={id:t.location,name:t.worklocation};var e=this.$store.dispatch;e("workorder/openDialog")},deleteAction:function(t){this.items.indexOf(t);this.id_server=t.id,this.alert=!0},closeDialog:function(){var t=this.$store.dispatch;t("workorder/closeDialog"),this.$refs.submitpanel&&this.$refs.submitpanel.resetForm(),this.$refs.workorderinput&&this.$refs.workorderinput.resetForm()},save:function(){this.updateAPI()},removeError:function(){var t=this.$store.dispatch;t("workorder/removeError")},OkButton:function(){var t=this.$store.dispatch,e={id:this.id_server};t("workorder/deleteWorkOrder",e),this.alert=!1,this.idselected=-1},NoButton:function(){this.alert=!1},getDataFromAPI:function(){if(!this.isLoading){var t=this.$store.dispatch,e=this.options,i=e.sortBy,s=e.sortDesc,n=e.page,o=e.itemsPerPage;i.length>0&&(this.sortbylast=i),1===s.length&&(this.sorting=s[0]?"DESC":"ASC"),t("workorder/reqList",{index:n,rows:o,search:this.search,sortby:this.sortbylast,sort:this.sorting})}},updateAPI:function(){if(!this.isLoading){var t={id:this.forminputWO.wo_id,customer:this.forminputWO.customer.id,location:this.forminputWO.location.id},e=this.$store.dispatch;e("workorder/updateWorkOrder",t),e("workorder/closeDialog"),this.$refs.workorderinput&&this.$refs.workorderinput.resetForm()}},deleteAPI:function(){this.isLoading}},computed:{updateStat:function(){return this.$store.getters["workorder/getUpdate"]},table:function(){return this.$store.getters["workorder/getList"]},lentable:function(){return this.$store.getters["workorder/getTotalItems"]},dialogStat:function(){return this.$store.getters["workorder/getDialog"]},isLoading:function(){return this.$store.getters["workorder/getLoading"]},errorMsg:function(){return this.$store.getters["workorder/getError"]},params:function(){return Object(o["a"])(Object(o["a"])({},this.options),{},{query:this.search})}},watch:{options:{handler:function(t){this.getDataFromAPI()},deep:!0},updateStat:{handler:function(t){t&&this.getDataFromAPI()},deep:!0},params:{handler:function(t){this.getDataFromAPI()},deep:!0}}}),a=r,l=i("2877"),c=i("6544"),d=i.n(c),h=i("8336"),u=i("b0af"),m=i("99d9"),v=i("a523"),f=i("8fea"),p=i("169a"),g=i("ce7e"),b=i("132d"),k=i("f6c4"),w=i("2db4"),x=i("2fa4"),_=i("8654"),O=i("71d9"),y=Object(l["a"])(a,s,n,!1,null,null,null);e["default"]=y.exports;d()(y,{VBtn:h["a"],VCard:u["a"],VCardActions:m["a"],VCardText:m["c"],VCardTitle:m["d"],VContainer:v["a"],VDataTable:f["a"],VDialog:p["a"],VDivider:g["a"],VIcon:b["a"],VMain:k["a"],VSnackbar:w["a"],VSpacer:x["a"],VTextField:_["a"],VToolbar:O["a"]})},"615b":function(t,e,i){},"99d9":function(t,e,i){"use strict";i.d(e,"a",(function(){return o})),i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"d",(function(){return l}));var s=i("b0af"),n=i("80d2");const o=Object(n["i"])("v-card__actions"),r=Object(n["i"])("v-card__subtitle"),a=Object(n["i"])("v-card__text"),l=Object(n["i"])("v-card__title");s["a"]},b0af:function(t,e,i){"use strict";i("615b");var s=i("10d2"),n=i("297c"),o=i("1c87"),r=i("58df");e["a"]=Object(r["a"])(n["a"],o["a"],s["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...o["a"].options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...s["a"].options.computed.classes.call(this)}},styles(){const t={...s["a"].options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=n["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){const{tag:e,data:i}=this.generateRouteLink();return i.style=this.styles,this.isClickable&&(i.attrs=i.attrs||{},i.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,i),[this.genProgress(),this.$slots.default])}})}}]);
//# sourceMappingURL=workorder.54f6cb61.js.map