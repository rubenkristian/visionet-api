(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3aa366c8"],{"2bfd":function(t,e,s){},"4bd4":function(t,e,s){"use strict";var i=s("58df"),a=s("7e2b"),n=s("3206");e["a"]=Object(i["a"])(a["a"],Object(n["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0}),s={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?s.shouldValidate=t.$watch("shouldValidate",i=>{i&&(this.errorBag.hasOwnProperty(t._uid)||(s.valid=e(t)))}):s.valid=e(t),s},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const s=this.watchers.find(t=>t._uid===e._uid);s&&(s.valid(),s.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},c63f:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-form",{ref:"form"},[t.edit?s("v-text-field",{staticClass:"mx-3",attrs:{label:"ID Work Order",disabled:""},model:{value:t.forminputWO.wo_id,callback:function(e){t.$set(t.forminputWO,"wo_id",e)},expression:"forminputWO.wo_id"}}):t._e(),s("v-text-field",{staticClass:"mx-3",attrs:{label:"ID Asset",disabled:""},model:{value:t.forminputWO.asset_id,callback:function(e){t.$set(t.forminputWO,"asset_id",e)},expression:"forminputWO.asset_id"}}),s("v-text-field",{staticClass:"mx-3",attrs:{label:"Device name",disabled:""},model:{value:t.forminputWO.device_name,callback:function(e){t.$set(t.forminputWO,"device_name",e)},expression:"forminputWO.device_name"}}),s("v-text-field",{staticClass:"mx-3",attrs:{label:"Brand name",disabled:""},model:{value:t.forminputWO.brand_name,callback:function(e){t.$set(t.forminputWO,"brand_name",e)},expression:"forminputWO.brand_name"}}),s("v-text-field",{staticClass:"mx-3",attrs:{label:"Model",disabled:""},model:{value:t.forminputWO.model,callback:function(e){t.$set(t.forminputWO,"model",e)},expression:"forminputWO.model"}}),s("v-text-field",{staticClass:"mx-3",attrs:{label:"Serial Number",disabled:""},model:{value:t.forminputWO.serial_number,callback:function(e){t.$set(t.forminputWO,"serial_number",e)},expression:"forminputWO.serial_number"}}),s("v-autocomplete",{staticClass:"mx-3",attrs:{loading:t.loadingCustomer,items:t.listCustomer,"search-input":t.search_customer,"item-text":"name","item-value":"id","cache-items":"","hide-no-data":"","return-object":"",label:"Customer"},on:{"update:searchInput":function(e){t.search_customer=e},"update:search-input":function(e){t.search_customer=e}},model:{value:t.forminputWO.customer,callback:function(e){t.$set(t.forminputWO,"customer",e)},expression:"forminputWO.customer"}}),s("v-autocomplete",{staticClass:"mx-3",attrs:{loading:t.loadingLocation,items:t.listLocation,"search-input":t.search_location,"item-text":"name","item-value":"id","cache-items":"","hide-no-data":"","return-object":"",label:"Location"},on:{"update:searchInput":function(e){t.search_location=e},"update:search-input":function(e){t.search_location=e}},model:{value:t.forminputWO.location,callback:function(e){t.$set(t.forminputWO,"location",e)},expression:"forminputWO.location"}})],1)},a=[],n=(s("b0c0"),s("498a"),{props:{forminputWO:Object,edit:Boolean},data:function(){return{search_customer:"",search_location:""}},methods:{resetForm:function(){this.$refs.form.reset()}},mounted:function(){this.search_customer=this.forminputWO.customer.name,this.search_location=this.forminputWO.location.name},computed:{listLocation:function(){return this.$store.getters["workorder/getListLightLocation"]},listCustomer:function(){return this.$store.getters["workorder/getListLightCustomer"]},loadingLocation:function(){return this.$store.getters["workorder/getLoadingLocation"]},loadingCustomer:function(){return this.$store.getters["workorder/getLoadingCustomer"]}},watch:{search_customer:function(t){if((null===t||void 0===t?void 0:t.trim().length)>=3){var e=this.$store.dispatch;e("workorder/searchCustomer",t)}},search_location:function(t){if((null===t||void 0===t?void 0:t.trim().length)>=3){var e=this.$store.dispatch;e("workorder/searchLocation",t)}}}}),r=n,l=s("2877"),o=s("6544"),h=s.n(o),c=s("c6a6"),u=s("4bd4"),d=s("8654"),m=Object(l["a"])(r,i,a,!1,null,null,null);e["default"]=m.exports;h()(m,{VAutocomplete:c["a"],VForm:u["a"],VTextField:d["a"]})},c6a6:function(t,e,s){"use strict";s("2bfd");var i=s("b974"),a=s("8654"),n=s("d9f7"),r=s("80d2");const l={...i["b"],offsetY:!0,offsetOverflow:!0,transition:!1};e["a"]=i["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(t,e,s)=>s.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:i["a"].options.props.menuProps.type,default:()=>l},noFilter:Boolean,searchInput:{type:String}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...i["a"].options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map(t=>this.getValue(t))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some(t=>!this.hasItem(t)):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter(t=>{const e=Object(r["r"])(t,this.itemText),s=null!=e?String(e):"";return this.filter(t,String(this.internalSearch),s)})},internalSearch:{get(){return this.lazySearch},set(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const t=i["a"].options.computed.$_menuProps.call(this);return t.contentClass=("v-autocomplete__content "+(t.contentClass||"")).trim(),{...l,...t}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find(t=>this.valueComparator(this.getValue(t),this.getValue(this.internalValue)))},listData(){const t=i["a"].options.computed.listData.call(this);return t.props={...t.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.blur(),this.updateSelf())},isMenuActive(t){!t&&this.hasSlot&&(this.lazySearch=null)},items(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(t,e){t!==e&&(this.setMenuIndex(-1),this.$nextTick(()=>{this.internalSearch&&(1===t.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.setMenuIndex(0))}))},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(t){this.searchIsDirty||(this.multiple&&t===r["x"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===r["x"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==r["x"].backspace&&t!==r["x"].delete||this.deleteCurrentItem())},deleteCurrentItem(){const t=this.selectedIndex,e=this.selectedItems[t];if(!this.isInteractive||this.getDisabled(e))return;const s=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==s)return void(this.selectedIndex=s);const i=this.selectedItems.length,a=t!==i-1?t:t-1,n=this.selectedItems[a];n?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=a},clearableCallback(){this.internalSearch=null,i["a"].options.methods.clearableCallback.call(this)},genInput(){const t=a["a"].options.methods.genInput.call(this);return t.data=Object(n["a"])(t.data,{attrs:{"aria-activedescendant":Object(r["p"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(r["p"])(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot(){const t=i["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections(){return this.hasSlot||this.multiple?i["a"].options.methods.genSelections.call(this):[]},onClick(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput(t){if(this.selectedIndex>-1||!t.target)return;const e=t.target,s=e.value;e.value&&this.activateMenu(),this.internalSearch=s,this.badInput=e.validity&&e.validity.badInput},onKeyDown(t){const e=t.keyCode;!t.ctrlKey&&[r["x"].home,r["x"].end].includes(e)||i["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown(t){},onTabDown(t){i["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown(t){t.preventDefault(),this.activateMenu()},selectItem(t){i["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems(){i["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick(()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))})},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy(t){var e,s;if(-1===this.selectedIndex)return;const i=this.selectedItems[this.selectedIndex],a=this.getText(i);null==(e=t.clipboardData)||e.setData("text/plain",a),null==(s=t.clipboardData)||s.setData("text/vnd.vuetify.autocomplete.item+plain",a),t.preventDefault()}}})}}]);
//# sourceMappingURL=chunk-3aa366c8.fc9fbf5c.js.map