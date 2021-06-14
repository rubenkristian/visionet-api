(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["backupleader"],{"0798":function(t,e,i){"use strict";i("0c18");var s=i("10d2"),n=i("afdd"),a=i("9d26"),r=i("f2e7"),o=i("7560"),c=i("2b0e"),l=c["default"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),d=i("58df"),h=i("d9bd");e["a"]=Object(d["a"])(s["a"],r["a"],l).extend({name:"v-alert",props:{border:{type:String,validator(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder(){if(!this.border)return null;let t={staticClass:"v-alert__border",class:{["v-alert__border--"+this.border]:!0}};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible(){if(!this.dismissible)return null;const t=this.iconColor;return this.$createElement(n["a"],{staticClass:"v-alert__dismissible",props:{color:t,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:()=>this.isActive=!1}},[this.$createElement(a["a"],{props:{color:t}},this.closeIcon)])},__cachedIcon(){return this.computedIcon?this.$createElement(a["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes(){const t={...s["a"].options.computed.classes.call(this),"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text};return this.border&&(t["v-alert--border-"+this.border]=!0),t},computedColor(){return this.color||this.type},computedIcon(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$"+this.type)},hasColoredIcon(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText(){return this.text||this.outlined},iconColor(){return this.hasColoredIcon?this.computedColor:void 0},isDark(){return!(!this.type||this.coloredBorder||this.outlined)||o["a"].options.computed.isDark.call(this)}},created(){this.$attrs.hasOwnProperty("outline")&&Object(h["a"])("outline","outlined",this)},methods:{genWrapper(){const t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert(){let t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){const e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle(){this.isActive=!this.isActive}},render(t){const e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},"0c18":function(t,e,i){},"159b":function(t,e,i){var s=i("da84"),n=i("fdbc"),a=i("17c2"),r=i("9112");for(var o in n){var c=s[o],l=c&&c.prototype;if(l&&l.forEach!==a)try{r(l,"forEach",a)}catch(d){l.forEach=a}}},"169a":function(t,e,i){"use strict";i("368e");var s=i("480e"),n=i("4ad4"),a=i("b848"),r=i("75eb"),o=i("e707"),c=i("e4d3"),l=i("21be"),d=i("f2e7"),h=i("a293"),u=i("58df"),p=i("d9bd"),f=i("80d2");const m=Object(u["a"])(n["a"],a["a"],r["a"],o["a"],c["a"],l["a"],d["a"]);e["a"]=m.extend({name:"v-dialog",directives:{ClickOutside:h["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes(){return{[("v-dialog "+this.contentClass).trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&Object(p["e"])("full-width",this)},beforeMount(){this.$nextTick(()=>{this.isBooted=this.isActive,this.isActive&&this.show()})},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick(()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout(()=>this.animate=!1,150)})},closeConditional(t){const e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):o["a"].options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick(()=>{this.$nextTick(()=>{this.previousActiveElement=document.activeElement,this.$refs.content.focus(),this.bind()})})},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(t){if(t.keyCode===f["x"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick(()=>t&&t.focus())}this.$emit("keydown",t)},onFocusin(t){if(!t||!this.retainFocus)return;const e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some(t=>t.contains(e))){const t=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),e=[...t].find(t=>!t.hasAttribute("disabled"));e&&e.focus()}},genContent(){return this.showLazyContent(()=>[this.$createElement(s["a"],{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"document",tabindex:this.isActive?0:void 0,...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])])},genTransition(){const t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent(){const t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style={...t.style,maxWidth:"none"===this.maxWidth?void 0:Object(f["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(f["g"])(this.width)}),this.$createElement("div",t,this.getContentSlot())}},render(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"17c2":function(t,e,i){"use strict";var s=i("b727").forEach,n=i("a640"),a=n("forEach");t.exports=a?[].forEach:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}},"368e":function(t,e,i){},"4de4":function(t,e,i){"use strict";var s=i("23e7"),n=i("b727").filter,a=i("1dde"),r=a("filter");s({target:"Array",proto:!0,forced:!r},{filter:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));i("b64b"),i("a4d3"),i("4de4"),i("e439"),i("159b"),i("dbb4");var s=i("ade3");function n(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function a(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(Object(i),!0).forEach((function(e){Object(s["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}},"615b":function(t,e,i){},6280:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-main",[i("v-container",{attrs:{"fill-width":""}},[i("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.dialogStatus,callback:function(e){t.dialogStatus=e},expression:"dialogStatus"}},[i("v-card",[i("v-alert",{attrs:{dismissible:"",color:"error"},model:{value:t.errorMsg,callback:function(e){t.errorMsg=e},expression:"errorMsg"}},[t._v("\n                    "+t._s(t.errorMsg)+"\n                ")]),i("v-card-title",[i("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),t.pass?i("v-card-text",[i("ChangePassInput",{ref:"changepass",attrs:{forminput:t.forminput}})],1):i("v-card-text",[i("WorkerInput",{ref:"submitpanel",attrs:{edit:t.edit,forminput:t.forminput}})],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDialog}},[t._v("Cancel")]),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v("Save")])],1)],1)],1),i("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},on:{keyup:t.searchAction},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),i("v-spacer"),i("v-fab-transition",[i("v-btn",{directives:[{name:"show",rawName:"v-show",value:!t.hidden,expression:"!hidden"}],staticClass:"mb-2",attrs:{color:"primary",fab:"",dark:"",small:"",fixed:"",bottom:"",right:""},on:{click:t.addAction}},[i("v-icon",[t._v("mdi-plus")])],1)],1),i("Dialog",{attrs:{dialog:t.alert,title:"Delete",text:"Are you sure delete this?"},on:{ok:t.OkButton,no:t.NoButton}}),i("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.table,options:t.options,"server-items-length":t.lentable,loading:t.isLoading},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"item.actions",fn:function(e){var s=e.item;return[i("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editAction(s)}}},[t._v("\n                    mdi-pencil\n                ")]),i("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.deleteAction(s)}}},[t._v("\n                    mdi-delete\n                ")]),i("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.changePass(s)}}},[t._v("\n                    mdi-key\n                ")])]}}],null,!0),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)],1)},n=[],a=i("5530"),r=(i("d3b7"),i("3ca3"),i("ddb0"),i("841c"),i("ac1f"),i("b0c0"),{components:{WorkerInput:function(){return i.e("chunk-980b748c").then(i.bind(null,"a137"))},Dialog:function(){return i.e("chunk-2d0c55d3").then(i.bind(null,"3f7a"))},ChangePassInput:function(){return i.e("chunk-766ec2ac").then(i.bind(null,"ba73"))}},data:function(){return{forminput:{id:-1,firstname:"",lastname:"",username:"",password:"",location:{id:0,name:""}},pass:!1,edit:!1,selected:[],alert:!1,idselected:-1,search:"",headers:[{text:"ID",value:"id",sortable:!1},{text:"First Name",value:"first_name",sortable:!1},{text:"Last Name",value:"last_name",sortable:!1},{text:"Username",value:"username",sortable:!1},{text:"Location",value:"locationname",sortable:!1},{text:"Actions",value:"actions",sortable:!1}],sortbylast:null,sorting:"ASC",editedIndex:-1,formInput:{id:-1,name:""},formTitle:"Device",hidden:!1,options:{},timeout:6e3,color:"",mode:""}},created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{searchAction:function(){},removeError:function(){var t=this.$store.dispatch;t("backupleader/removeError")},removeMsg:function(){var t=this.$store.dispatch;t("backupleader/removeMsg")},handleScroll:function(){this.currentY=window.top.scrollY,this.currentY>this.lastY?this.hidden=!0:this.hidden=!1,this.lastY=this.currentY},addAction:function(){this.edit=!1;var t=this.$store.dispatch;this.idselected=-1,this.formTitle="Add Leader",t("backupleader/removeError"),t("backupleader/openDialog")},editAction:function(t){this.edit=!0;var e=t.id,i=t.first_name,s=t.last_name,n=t.username,a=t.location,r=t.locationname;this.editedIndex=-1,this.idselected=this.table.indexOf(t),this.forminput={id:e,firstname:i,lastname:s,username:n,password:"",location:{id:a,name:r}},this.formTitle="Edit Leader";var o=this.$store.dispatch;o("backupleader/openDialog")},changePass:function(t){this.pass=!0;var e=t.id,i=t.first_name,s=t.last_name,n=t.username,a=t.location,r=t.locationname;this.forminput={id:e,firstname:i,lastname:s,username:n,password:"",location:{id:a,name:r}},this.formTitle="Change Password";var o=this.$store.dispatch;o("backupleader/openDialog")},deleteAction:function(t){var e=this.table.indexOf(t);this.alert=!0,this.idselected=e},closeDialog:function(){var t=this.$store.dispatch;t("backupleader/closeDialog"),this.$refs.submitpanel&&this.$refs.submitpanel.resetForm()},save:function(){-1===this.idselected?this.submitAPI():this.editAPI()},OkButton:function(){var t=this.$store.dispatch;t("backupleader/deleteList",this.table[this.idselected].id),this.alert=!1,this.idselected=-1},NoButton:function(){this.alert=!1},close:function(){this.dialog=!1},getDataFromAPI:function(){if(!this.isLoading){var t=this.$store.dispatch,e=this.options,i=e.sortBy,s=e.sortDesc,n=e.page,a=e.itemsPerPage;i.length>0&&(this.sortbylast=i),1===s.length&&(this.sorting=s[0]?"DESC":"ASC"),t("backupleader/reqList",{index:n,rows:a,search:this.search,sortby:this.sortbylast,sort:this.sorting})}},submitAPI:function(){var t=this;if(!this.isLoading){var e=this.$store.dispatch;if(this.$refs.submitpanel.isValid()){var i={name:this.forminput.name};e("backupleader/insertList",i)}e("backupleader/closeDialog"),setTimeout((function(){t.getDataFromAPI()}),1e3)}},editAPI:function(){var t=this;if(!this.isLoading){var e=this.$store.dispatch;if(this.$refs.submitpanel.isValid()){var i={id:this.forminput.id,name:this.forminput.name};e("backupleader/updateList",i)}e("backupleader/closeDialog"),this.idselected=-1,setTimeout((function(){t.getDataFromAPI()}),1e3)}}},computed:{table:function(){return this.$store.getters["backupleader/getAllItems"]},isLoading:function(){return this.$store.getters["backupleader/getLoading"]},lentable:function(){return this.$store.getters["backupleader/getLenItems"]},errorMsg:function(){return this.$store.getters["backupleader/getError"]},dialogStatus:function(){return this.$store.getters["backupleader/getDialog"]},responseMsg:function(){return this.$store.getters["backupleader/getMessage"]},params:function(){return Object(a["a"])(Object(a["a"])({},this.options),{},{query:this.search})}},watch:{dialogStatus:{handler:function(t){t||this.close()},deep:!0},options:{handler:function(t){this.getDataFromAPI()},deep:!0},params:{handler:function(t){this.getDataFromAPI()},deep:!0}}}),o=r,c=i("2877"),l=i("6544"),d=i.n(l),h=i("0798"),u=i("8336"),p=i("b0af"),f=i("99d9"),m=i("a523"),v=i("8fea"),g=i("169a"),b=i("0789"),y=i("132d"),k=i("f6c4"),w=i("2fa4"),x=i("8654"),C=Object(c["a"])(o,s,n,!1,null,null,null);e["default"]=C.exports;d()(C,{VAlert:h["a"],VBtn:u["a"],VCard:p["a"],VCardActions:f["a"],VCardText:f["c"],VCardTitle:f["d"],VContainer:m["a"],VDataTable:v["a"],VDialog:g["a"],VFabTransition:b["c"],VIcon:y["a"],VMain:k["a"],VSpacer:w["a"],VTextField:x["a"]})},"99d9":function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return o})),i.d(e,"d",(function(){return c}));var s=i("b0af"),n=i("80d2");const a=Object(n["i"])("v-card__actions"),r=Object(n["i"])("v-card__subtitle"),o=Object(n["i"])("v-card__text"),c=Object(n["i"])("v-card__title");s["a"]},b0af:function(t,e,i){"use strict";i("615b");var s=i("10d2"),n=i("297c"),a=i("1c87"),r=i("58df");e["a"]=Object(r["a"])(n["a"],a["a"],s["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...a["a"].options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...s["a"].options.computed.classes.call(this)}},styles(){const t={...s["a"].options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=n["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){const{tag:e,data:i}=this.generateRouteLink();return i.style=this.styles,this.isClickable&&(i.attrs=i.attrs||{},i.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,i),[this.genProgress(),this.$slots.default])}})},b0c0:function(t,e,i){var s=i("83ab"),n=i("9bf2").f,a=Function.prototype,r=a.toString,o=/^\s*function ([^ (]*)/,c="name";s&&!(c in a)&&n(a,c,{configurable:!0,get:function(){try{return r.call(this).match(o)[1]}catch(t){return""}}})},dbb4:function(t,e,i){var s=i("23e7"),n=i("83ab"),a=i("56ef"),r=i("fc6a"),o=i("06cf"),c=i("8418");s({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(t){var e,i,s=r(t),n=o.f,l=a(s),d={},h=0;while(l.length>h)i=n(s,e=l[h++]),void 0!==i&&c(d,e,i);return d}})},e439:function(t,e,i){var s=i("23e7"),n=i("d039"),a=i("fc6a"),r=i("06cf").f,o=i("83ab"),c=n((function(){r(1)})),l=!o||c;s({target:"Object",stat:!0,forced:l,sham:!o},{getOwnPropertyDescriptor:function(t,e){return r(a(t),e)}})}}]);
//# sourceMappingURL=backupleader.804c91cf.js.map