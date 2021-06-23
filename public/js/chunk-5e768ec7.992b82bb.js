(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e768ec7"],{1681:function(e,t,s){},"2bfd":function(e,t,s){},"4bd4":function(e,t,s){"use strict";var i=s("58df"),a=s("7e2b"),n=s("3206");t["a"]=Object(i["a"])(a["a"],Object(n["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(e){const t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput(e){const t=e=>e.$watch("hasError",t=>{this.$set(this.errorBag,e._uid,t)},{immediate:!0}),s={_uid:e._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?s.shouldValidate=e.$watch("shouldValidate",i=>{i&&(this.errorBag.hasOwnProperty(e._uid)||(s.valid=t(e)))}):s.valid=t(e),s},validate(){return 0===this.inputs.filter(e=>!e.validate(!0)).length},reset(){this.inputs.forEach(e=>e.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(e=>e.resetValidation()),this.resetErrorBag()},register(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister(e){const t=this.inputs.find(t=>t._uid===e._uid);if(!t)return;const s=this.watchers.find(e=>e._uid===t._uid);s&&(s.valid(),s.shouldValidate()),this.watchers=this.watchers.filter(e=>e._uid!==t._uid),this.inputs=this.inputs.filter(e=>e._uid!==t._uid),this.$delete(this.errorBag,t._uid)}},render(e){return e("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:e=>this.$emit("submit",e)}},this.$slots.default)}})},"87e9":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[s("v-autocomplete",{staticClass:"mx-3",attrs:{loading:e.loadingdevice,items:e.listDeviceName,"search-input":e.search_device,rules:e.autocompleteRules,"item-text":"name","item-value":"id","cache-items":"","hide-no-data":"","hide-details":"","return-object":"",label:"Device Name",hint:"Type more than 3 character",required:""},on:{"update:searchInput":function(t){e.search_device=t},"update:search-input":function(t){e.search_device=t}},model:{value:e.forminput.device_name,callback:function(t){e.$set(e.forminput,"device_name",t)},expression:"forminput.device_name"}}),s("v-autocomplete",{staticClass:"mx-3",attrs:{loading:e.loadingbrand,items:e.listDeviceBrand,"search-input":e.search_brand,rules:e.autocompleteRules,"item-text":"name","item-value":"id","cache-items":"","hide-no-data":"","return-object":"","hide-details":"",label:"Device Brand",hint:"Type more than 3 character",required:""},on:{"update:searchInput":function(t){e.search_brand=t},"update:search-input":function(t){e.search_brand=t}},model:{value:e.forminput.device_brand,callback:function(t){e.$set(e.forminput,"device_brand",t)},expression:"forminput.device_brand"}}),s("v-text-field",{staticClass:"mx-3",attrs:{counter:50,rules:e.inputRules,label:"Model",required:""},model:{value:e.forminput.model,callback:function(t){e.$set(e.forminput,"model",t)},expression:"forminput.model"}}),s("v-text-field",{staticClass:"mx-3",attrs:{counter:50,rules:e.inputRules,label:"Serial Number",required:""},model:{value:e.forminput.serial_number,callback:function(t){e.$set(e.forminput,"serial_number",t)},expression:"forminput.serial_number"}}),s("v-textarea",{staticClass:"mx-3",attrs:{counter:300,rules:e.inputRules,label:"Description",required:""},model:{value:e.forminput.description,callback:function(t){e.$set(e.forminput,"description",t)},expression:"forminput.description"}})],1)},a=[],n=(s("b0c0"),s("498a"),{props:{forminput:Object},data:function(){return{selectRules:[function(e){return!!e||"You must select an item"}],autocompleteRules:[function(e){return!!e||"You must select an item"}],valid:!1,inputRules:[function(e){return!!e||"Tidak boleh kosong"},function(e){return e&&e.length>=1||"Input harus diisi"}],search_device:"",search_brand:""}},mounted:function(){var e=this.$store.dispatch;e("asset/searchCondition"),this.forminput.device_name&&(this.search_device=this.forminput.device_name.name),this.forminput.device_brand&&(this.search_brand=this.forminput.device_brand.name)},methods:{resetForm:function(){this.$refs.form.reset()},isValid:function(){return this.$refs.form.validate()}},computed:{listDeviceName:function(){var e=[];this.forminput.device_name&&e.push(this.forminput.device_name);var t=this.$store.getters["asset/getListLightDevice"];return 0===t.length?e:t},listDeviceBrand:function(){var e=[];this.forminput.device_brand&&e.push(this.forminput.device_brand);var t=this.$store.getters["asset/getListLightBrand"];return 0===t.length?e:t},loadingbrand:function(){return this.$store.getters["asset/getLoadingBrand"]},loadingdevice:function(){return this.$store.getters["asset/getLoadingDevice"]},loadingwarehouse:function(){return this.$store.getters["asset/getLoadingWarehouse"]}},watch:{search_device:function(e){if((null===e||void 0===e?void 0:e.trim().length)>=2){var t=this.$store.dispatch;t("asset/searchDevice",e)}},search_brand:function(e){if((null===e||void 0===e?void 0:e.trim().length)>=2){var t=this.$store.dispatch;t("asset/searchBrand",e)}}}}),r=n,l=s("2877"),o=s("6544"),h=s.n(o),c=s("c6a6"),u=s("4bd4"),d=s("8654"),m=s("a844"),p=Object(l["a"])(r,i,a,!1,null,null,null);t["default"]=p.exports;h()(p,{VAutocomplete:c["a"],VForm:u["a"],VTextField:d["a"],VTextarea:m["a"]})},a844:function(e,t,s){"use strict";s("1681");var i=s("8654"),a=s("58df");const n=Object(a["a"])(i["a"]);t["a"]=n.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:e=>!isNaN(parseFloat(e))},rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseInt(e,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...i["a"].options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout(()=>{this.autoGrow&&this.calculateInputHeight()},0)},methods:{calculateInputHeight(){const e=this.$refs.input;if(!e)return;e.style.height="0";const t=e.scrollHeight,s=parseInt(this.rows,10)*parseFloat(this.rowHeight);e.style.height=Math.max(s,t)+"px"},genInput(){const e=i["a"].options.methods.genInput.call(this);return e.tag="textarea",delete e.data.attrs.type,e.data.attrs.rows=this.rows,e},onInput(e){i["a"].options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}})},c6a6:function(e,t,s){"use strict";s("2bfd");var i=s("b974"),a=s("8654"),n=s("d9f7"),r=s("80d2");const l={...i["b"],offsetY:!0,offsetOverflow:!0,transition:!1};t["a"]=i["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(e,t,s)=>s.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:i["a"].options.props.menuProps.type,default:()=>l},noFilter:Boolean,searchInput:{type:String}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...i["a"].options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map(e=>this.getValue(e))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some(e=>!this.hasItem(e)):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter(e=>{const t=Object(r["r"])(e,this.itemText),s=null!=t?String(t):"";return this.filter(e,String(this.internalSearch),s)})},internalSearch:{get(){return this.lazySearch},set(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const e=i["a"].options.computed.$_menuProps.call(this);return e.contentClass=("v-autocomplete__content "+(e.contentClass||"")).trim(),{...l,...e}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find(e=>this.valueComparator(this.getValue(e),this.getValue(this.internalValue)))},listData(){const e=i["a"].options.computed.listData.call(this);return e.props={...e.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},e}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.blur(),this.updateSelf())},isMenuActive(e){!e&&this.hasSlot&&(this.lazySearch=null)},items(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(e,t){e!==t&&(this.setMenuIndex(-1),this.$nextTick(()=>{this.internalSearch&&(1===e.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.setMenuIndex(0))}))},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(e){this.searchIsDirty||(this.multiple&&e===r["x"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===r["x"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==r["x"].backspace&&e!==r["x"].delete||this.deleteCurrentItem())},deleteCurrentItem(){const e=this.selectedIndex,t=this.selectedItems[e];if(!this.isInteractive||this.getDisabled(t))return;const s=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==s)return void(this.selectedIndex=s);const i=this.selectedItems.length,a=e!==i-1?e:e-1,n=this.selectedItems[a];n?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=a},clearableCallback(){this.internalSearch=null,i["a"].options.methods.clearableCallback.call(this)},genInput(){const e=a["a"].options.methods.genInput.call(this);return e.data=Object(n["a"])(e.data,{attrs:{"aria-activedescendant":Object(r["p"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(r["p"])(e.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),e},genInputSlot(){const e=i["a"].options.methods.genInputSlot.call(this);return e.data.attrs.role="combobox",e},genSelections(){return this.hasSlot||this.multiple?i["a"].options.methods.genSelections.call(this):[]},onClick(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput(e){if(this.selectedIndex>-1||!e.target)return;const t=e.target,s=t.value;t.value&&this.activateMenu(),this.internalSearch=s,this.badInput=t.validity&&t.validity.badInput},onKeyDown(e){const t=e.keyCode;!e.ctrlKey&&[r["x"].home,r["x"].end].includes(t)||i["a"].options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown(e){},onTabDown(e){i["a"].options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown(e){e.preventDefault(),this.activateMenu()},selectItem(e){i["a"].options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems(){i["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick(()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))})},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy(e){var t,s;if(-1===this.selectedIndex)return;const i=this.selectedItems[this.selectedIndex],a=this.getText(i);null==(t=e.clipboardData)||t.setData("text/plain",a),null==(s=e.clipboardData)||s.setData("text/vnd.vuetify.autocomplete.item+plain",a),e.preventDefault()}}})}}]);
//# sourceMappingURL=chunk-5e768ec7.992b82bb.js.map