(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["device"],{"0798":function(t,e,i){"use strict";i("0c18");var s=i("10d2"),n=i("afdd"),o=i("9d26"),a=i("f2e7"),r=i("7560"),l=i("2b0e"),c=l["default"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),h=i("58df"),d=i("d9bd");e["a"]=Object(h["a"])(s["a"],a["a"],c).extend({name:"v-alert",props:{border:{type:String,validator(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder(){if(!this.border)return null;let t={staticClass:"v-alert__border",class:{["v-alert__border--"+this.border]:!0}};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible(){if(!this.dismissible)return null;const t=this.iconColor;return this.$createElement(n["a"],{staticClass:"v-alert__dismissible",props:{color:t,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:()=>this.isActive=!1}},[this.$createElement(o["a"],{props:{color:t}},this.closeIcon)])},__cachedIcon(){return this.computedIcon?this.$createElement(o["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes(){const t={...s["a"].options.computed.classes.call(this),"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text};return this.border&&(t["v-alert--border-"+this.border]=!0),t},computedColor(){return this.color||this.type},computedIcon(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$"+this.type)},hasColoredIcon(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText(){return this.text||this.outlined},iconColor(){return this.hasColoredIcon?this.computedColor:void 0},isDark(){return!(!this.type||this.coloredBorder||this.outlined)||r["a"].options.computed.isDark.call(this)}},created(){this.$attrs.hasOwnProperty("outline")&&Object(d["a"])("outline","outlined",this)},methods:{genWrapper(){const t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert(){let t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){const e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle(){this.isActive=!this.isActive}},render(t){const e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},"0c18":function(t,e,i){},"169a":function(t,e,i){"use strict";i("368e");var s=i("480e"),n=i("4ad4"),o=i("b848"),a=i("75eb"),r=i("e707"),l=i("e4d3"),c=i("21be"),h=i("f2e7"),d=i("a293"),u=i("58df"),v=i("d9bd"),m=i("80d2");const p=Object(u["a"])(n["a"],o["a"],a["a"],r["a"],l["a"],c["a"],h["a"]);e["a"]=p.extend({name:"v-dialog",directives:{ClickOutside:d["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes(){return{[("v-dialog "+this.contentClass).trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&Object(v["e"])("full-width",this)},beforeMount(){this.$nextTick(()=>{this.isBooted=this.isActive,this.isActive&&this.show()})},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick(()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout(()=>this.animate=!1,150)})},closeConditional(t){const e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):r["a"].options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick(()=>{this.$nextTick(()=>{this.previousActiveElement=document.activeElement,this.$refs.content.focus(),this.bind()})})},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(t){if(t.keyCode===m["x"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick(()=>t&&t.focus())}this.$emit("keydown",t)},onFocusin(t){if(!t||!this.retainFocus)return;const e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some(t=>t.contains(e))){const t=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),e=[...t].find(t=>!t.hasAttribute("disabled"));e&&e.focus()}},genContent(){return this.showLazyContent(()=>[this.$createElement(s["a"],{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"document",tabindex:this.isActive?0:void 0,...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])])},genTransition(){const t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent(){const t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style={...t.style,maxWidth:"none"===this.maxWidth?void 0:Object(m["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(m["g"])(this.width)}),this.$createElement("div",t,this.getContentSlot())}},render(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},2380:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-main",[i("v-container",{attrs:{"fill-width":""}},[i("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.dialogStatus,callback:function(e){t.dialogStatus=e},expression:"dialogStatus"}},[i("v-card",[i("v-alert",{attrs:{value:t.errorMsg,dismissible:"",color:"error"}},[t._v("\n                    "+t._s(t.errorMsg)+"\n                ")]),i("v-card-title",[i("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),i("v-card-text",[i("SubmitPanel",{ref:"submitpanel",attrs:{forminput:t.forminput}})],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDialog}},[t._v("Cancel")]),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v("Save")])],1)],1)],1),i("Dialog",{attrs:{dialog:t.alert,title:"Delete",text:"Are you sure delete this?"},on:{ok:t.OkButton,no:t.NoButton}}),i("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.table,options:t.options,"server-items-length":t.lentable,loading:t.isLoading},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"top",fn:function(){return[i("v-toolbar",{attrs:{flat:""}},[i("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},on:{keyup:t.searchAction},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[i("v-btn",t._g({staticClass:"mx-2",attrs:{color:"primary",dark:""},on:{click:t.addAction}},s),[i("v-icon",[t._v("mdi-plus")])],1)]}}])},[i("span",[t._v("Create New Device")])])],1)]},proxy:!0},{key:"item.actions",fn:function(e){var s=e.item;return[i("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editAction(s)}}},[t._v("\n                    mdi-pencil\n                ")]),i("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.deleteAction(s)}}},[t._v("\n                    mdi-delete\n                ")])]}}],null,!0),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),i("v-snackbar",{attrs:{value:t.responseMsg,color:t.color,"multi-line":"multi-line"===t.mode,timeout:t.timeout,vertical:"vertical"===t.mode}},[t._v("\n            "+t._s(t.responseMsg)+"\n            "),i("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),i("v-btn",{attrs:{dark:"",text:""},on:{click:function(e){return t.removeError()}}},[t._v("\n                Close\n            ")])],1),i("v-snackbar",{attrs:{value:t.errorMsg,color:t.color,"multi-line":"multi-line"===t.mode,timeout:t.timeout,vertical:"vertical"===t.mode}},[t._v("\n            "+t._s(t.errorMsg)+"\n            "),i("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),i("v-btn",{attrs:{dark:"",text:""},on:{click:function(e){return t.removeError()}}},[t._v("\n                Close\n            ")])],1)],1)],1)},n=[],o=i("5530"),a=(i("d3b7"),i("3ca3"),i("ddb0"),i("b0c0"),i("841c"),i("ac1f"),{components:{SubmitPanel:function(){return i.e("chunk-1c1400ea").then(i.bind(null,"d99a"))},Dialog:function(){return i.e("chunk-2d0c55d3").then(i.bind(null,"3f7a"))}},data:function(){return{forminput:{id:-1,name:"",submit:"brand",type:1},selected:[],alert:!1,idselected:-1,search:"",headers:[{text:"ID",value:"id",sortable:!1},{text:"Name",value:"name",sortable:!1},{text:"Actions",value:"actions",sortable:!1}],sortbylast:null,sorting:"ASC",editedIndex:-1,formInput:{id:-1,name:""},formTitle:"Device",hidden:!1,options:{},timeout:6e3,color:"",mode:""}},created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{searchAction:function(){},removeError:function(){var t=this.$store.dispatch;t("device/removeError")},removeMsg:function(){var t=this.$store.dispatch;t("device/removeMsg")},handleScroll:function(){this.currentY=window.top.scrollY,this.currentY>this.lastY?this.hidden=!0:this.hidden=!1,this.lastY=this.currentY},addAction:function(){var t=this.$store.dispatch;this.idselected=-1,this.formTitle="Add Device",t("device/removeError"),t("device/openDialog")},editAction:function(t){var e=t.id,i=t.name;this.editedIndex=-1,this.idselected=this.table.indexOf(t),console.log(this.idselected),this.forminput={id:e,name:i},this.formTitle="Edit Device";var s=this.$store.dispatch;s("device/openDialog")},deleteAction:function(t){var e=this.table.indexOf(t);this.alert=!0,this.idselected=e},closeDialog:function(){var t=this.$store.dispatch;t("device/closeDialog"),this.$refs.submitpanel.resetForm()},save:function(){-1===this.idselected?this.submitAPI():this.editAPI(),this.$refs.submitpanel.resetForm()},OkButton:function(){var t=this.$store.dispatch;t("device/deleteList",this.table[this.idselected].id),this.alert=!1,this.idselected=-1},NoButton:function(){this.alert=!1},close:function(){this.dialog=!1},getDataFromAPI:function(){if(!this.isLoading){console.log("get api");var t=this.$store.dispatch,e=this.options,i=e.sortBy,s=e.sortDesc,n=e.page,o=e.itemsPerPage;i.length>0&&(this.sortbylast=i),1===s.length&&(this.sorting=s[0]?"DESC":"ASC"),t("device/reqList",{index:n,rows:o,search:this.search,sortby:this.sortbylast,sort:this.sorting})}},submitAPI:function(){var t=this;if(!this.isLoading){var e=this.$store.dispatch;if(this.$refs.submitpanel.isValid()){var i={name:this.forminput.name};e("device/insertList",i)}e("device/closeDialog"),setTimeout((function(){t.getDataFromAPI()}),1e3)}},editAPI:function(){var t=this;if(!this.isLoading){var e=this.$store.dispatch;if(this.$refs.submitpanel.isValid()){var i={id:this.forminput.id,name:this.forminput.name};e("device/updateList",i)}e("device/closeDialog"),this.idselected=-1,setTimeout((function(){t.getDataFromAPI()}),1e3)}}},computed:{table:function(){return this.$store.getters["device/getAllItems"]},isLoading:function(){return this.$store.getters["device/getLoading"]},lentable:function(){return this.$store.getters["device/getLenItems"]},errorMsg:function(){return this.$store.getters["device/getError"]},dialogStatus:function(){return this.$store.getters["device/getDialog"]},responseMsg:function(){return this.$store.getters["device/getMessage"]},params:function(){return Object(o["a"])(Object(o["a"])({},this.options),{},{query:this.search})}},watch:{dialogStatus:{handler:function(t){t||this.close()},deep:!0},options:{handler:function(t){this.getDataFromAPI()},deep:!0},params:{handler:function(t){this.getDataFromAPI()},deep:!0}}}),r=a,l=i("2877"),c=i("6544"),h=i.n(c),d=i("0798"),u=i("8336"),v=i("b0af"),m=i("99d9"),p=i("a523"),g=i("8fea"),f=i("169a"),b=i("ce7e"),y=i("132d"),x=i("f6c4"),C=i("2db4"),A=i("2fa4"),_=i("8654"),k=i("71d9"),w=i("3a2f"),$=Object(l["a"])(r,s,n,!1,null,null,null);e["default"]=$.exports;h()($,{VAlert:d["a"],VBtn:u["a"],VCard:v["a"],VCardActions:m["a"],VCardText:m["c"],VCardTitle:m["d"],VContainer:p["a"],VDataTable:g["a"],VDialog:f["a"],VDivider:b["a"],VIcon:y["a"],VMain:x["a"],VSnackbar:C["a"],VSpacer:A["a"],VTextField:_["a"],VToolbar:k["a"],VTooltip:w["a"]})},"368e":function(t,e,i){},"3a2f":function(t,e,i){"use strict";i("9734");var s=i("4ad4"),n=i("a9ad"),o=i("16b7"),a=i("b848"),r=i("75eb"),l=i("f573"),c=i("f2e7"),h=i("80d2"),d=i("d9bd"),u=i("58df");e["a"]=Object(u["a"])(n["a"],o["a"],a["a"],r["a"],l["a"],c["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:()=>({calculatedMinWidth:0,closeDependents:!1}),computed:{calculatedLeft(){const{activator:t,content:e}=this.dimensions,i=!this.bottom&&!this.left&&!this.top&&!this.right,s=!1!==this.attach?t.offsetLeft:t.left;let n=0;return this.top||this.bottom||i?n=s+t.width/2-e.width/2:(this.left||this.right)&&(n=s+(this.right?t.width:-e.width)+(this.right?10:-10)),this.nudgeLeft&&(n-=parseInt(this.nudgeLeft)),this.nudgeRight&&(n+=parseInt(this.nudgeRight)),this.calcXOverflow(n,this.dimensions.content.width)+"px"},calculatedTop(){const{activator:t,content:e}=this.dimensions,i=!1!==this.attach?t.offsetTop:t.top;let s=0;return this.top||this.bottom?s=i+(this.bottom?t.height:-e.height)+(this.bottom?10:-10):(this.left||this.right)&&(s=i+t.height/2-e.height/2),this.nudgeTop&&(s-=parseInt(this.nudgeTop)),this.nudgeBottom&&(s+=parseInt(this.nudgeBottom)),this.calcYOverflow(s+this.pageYOffset)+"px"},classes(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY(){return this.top||this.bottom},offsetX(){return this.left||this.right},styles(){return{left:this.calculatedLeft,maxWidth:Object(h["g"])(this.maxWidth),minWidth:Object(h["g"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount(){this.$nextTick(()=>{this.value&&this.callActivate()})},mounted(){"v-slot"===Object(h["t"])(this,"activator",!0)&&Object(d["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate(){this.runDelay("close")},genActivatorListeners(){const t=s["a"].options.methods.genActivatorListeners.call(this);return t.focus=t=>{this.getActivator(t),this.runDelay("open")},t.blur=t=>{this.getActivator(t),this.runDelay("close")},t.keydown=t=>{t.keyCode===h["x"].esc&&(this.getActivator(t),this.runDelay("close"))},t},genActivatorAttributes(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition(){const t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:{[this.contentClass]:!0,menuable__content__active:this.isActive,"v-tooltip__content--fixed":this.activatorFixed},style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render(t){return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent(()=>[this.genTransition()]),this.genActivator()])}})},9734:function(t,e,i){}}]);
//# sourceMappingURL=device.2f3e4141.js.map