"use strict";(self["webpackChunkflower_shop"]=self["webpackChunkflower_shop"]||[]).push([[349],{1590:function(t,a,o){o.d(a,{Z:function(){return c}});var e=function(){var t=this,a=t._self._c;return a("div",[t._t("topSlot"),a("div",[a("div",{staticClass:"goods-item-main"},[a("div",{staticClass:"goods-item-img"},[t._t("imgSlot")],2),a("div",{staticClass:"goods-item-content"},[a("div",{staticClass:"goods-item-title"},[t._t("nameSlot")],2),a("div",{staticClass:"goods-item-attribute"},[t._t("attributeSlot")],2)])])]),t._t("menuSlot")],2)},s=[],i={name:"goodsItem",data(){return{}},methods:{},mounted(){}},n=i,r=o(1001),l=(0,r.Z)(n,e,s,!1,null,"1f769a80",null),c=l.exports},349:function(t,a,o){o.r(a),o.d(a,{default:function(){return g}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"root"},[a("action-bar",{attrs:{title:"商品库搜索"}}),a("div",{staticClass:"search"},[a("div",{staticClass:"search-content"},[a("van-icon",{staticClass:"search-icon",attrs:{name:"search",color:"#b4b4b4",size:"16px"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchStr,expression:"searchStr"}],staticClass:"search-input",attrs:{type:"text",maxlength:"26",placeholder:"搜索你想要的商品",bindconfirm:"handleSearch"},domProps:{value:t.searchStr},on:{input:function(a){a.target.composing||(t.searchStr=a.target.value)}}})],1),a("van-button",{staticClass:"search-btn",attrs:{color:"#42D18A"},on:{click:t.handleSearch}},[t._v("搜索")])],1),a("div",{staticClass:"container"},[a("scroll-view",{ref:"scroll",staticClass:"content",attrs:{loadmore:"",noMoreData:t.noMoreData,data:t.goodsList},on:{scrolltolower:t.onLoadMore}},[a("div",t._l(t.goodsList,(function(o,e){return a("goods-item",{key:o.skuCategoryEncode},[a("van-image",{staticClass:"goods-img",attrs:{slot:"imgSlot",radius:".25rem",src:t.baseUrl+o.imageUrl},slot:"imgSlot"}),a("div",{attrs:{slot:"nameSlot"},slot:"nameSlot"},[t._v(t._s(o.spuName))]),a("div",{attrs:{slot:"attributeSlot"},slot:"attributeSlot"},[t._v(" "+t._s(o.categoryName)+" ")]),a("div",{attrs:{slot:"menuSlot"},slot:"menuSlot"},t._l(o.items,(function(o,s){return a("div",{key:o.skuId},["1"==o.libraryState?a("div",{staticClass:"goods-released"},[t._v(" "+t._s(o.skuName)+" ")]):"0"==o.libraryState?a("div",{staticClass:"goods-not-check",on:{click:function(a){return t.bindClickGoods(e,s)}}},[t._v(" "+t._s(o.skuName)+" ")]):"2"==o.libraryState?a("div",{staticClass:"goods-checked",on:{click:function(a){return t.bindClickGoods(e,s)}}},[t._v(" "+t._s(o.skuName)+" ")]):t._e()])})),0)],1)})),1)])],1)],1)},s=[],i=(o(1958),o(3332),o(6742),o(2939),o(1452),o(4398)),n=(o(5825),o(9858)),r=(o(7658),o(1590)),l=o(5928),c={name:"searchGoods",components:{GoodsItem:r.Z,[n.Z.name]:n.Z,[i.Z.name]:i.Z},computed:{baseUrl(){return this.$store.state.baseUrl}},data(){return{searchStr:"",goodsList:[],noMoreData:!1,start:0,limit:10}},methods:{onLoadMore(){!0!==this.noMoreData&&(this.start=this.start+this.limit,this.requestData())},requestData(){(0,l.nY)({name:this.searchStr,start:this.start,limit:this.limit}).then((t=>{this.$refs.scroll.loaded();let a=!1;t.data.length<10&&(a=!0);const o=this.goodsList;o.push(...t.data),this.noMoreData=a,0===this.goodsList.length&&this.$toast("未搜索到商品")})).catch((t=>{this.$refs.scroll.loaded(),this.$toast(t.msg)}))},handleSearch(){""!==this.searchStr.trim()?(this.start=0,this.goodsList=[],this.requestData()):this.$toast("请输入搜索内容")},bindClickGoods(t,a){const o=this.goodsList,e=o[t].items[a];(0,l.Jo)({skuId:e.skuId}).then((t=>{e.libraryState?e.libraryState=0:e.libraryState=2})).catch((t=>{this.$toast(t.msg)}))}},mounted(){}},d=c,u=o(1001),h=(0,u.Z)(d,e,s,!1,null,"549eed14",null),g=h.exports},1452:function(){},4398:function(t,a,o){o(7658);var e=o(9299),s=o(3915),i=o.n(s),n=o(855),r=o(4771),l=o(1047),c=o(2250),d=o(9858),u=o(4958),h=(0,n.d)("button"),g=h[0],m=h[1];function f(t,a,o,e){var s,n=a.tag,h=a.icon,g=a.type,f=a.color,p=a.plain,v=a.disabled,S=a.loading,b=a.hairline,k=a.loadingText,C=a.iconPosition,_={};function y(t){a.loading&&t.preventDefault(),S||v||((0,r.j8)(e,"click",t),(0,c.fz)(e))}function x(t){(0,r.j8)(e,"touchstart",t)}f&&(_.color=p?f:"white",p||(_.background=f),-1!==f.indexOf("gradient")?_.border=0:_.borderColor=f);var D=[m([g,a.size,{plain:p,loading:S,disabled:v,hairline:b,block:a.block,round:a.round,square:a.square}]),(s={},s[l._K]=b,s)];function Z(){return S?o.loading?o.loading():t(u.Z,{class:m("loading"),attrs:{size:a.loadingSize,type:a.loadingType,color:"currentColor"}}):o.icon?t("div",{class:m("icon")},[o.icon()]):h?t(d.Z,{attrs:{name:h,classPrefix:a.iconPrefix},class:m("icon")}):void 0}function w(){var e,s=[];return"left"===C&&s.push(Z()),e=S?k:o.default?o.default():a.text,e&&s.push(t("span",{class:m("text")},[e])),"right"===C&&s.push(Z()),s}return t(n,i()([{style:_,class:D,attrs:{type:a.nativeType,disabled:v},on:{click:y,touchstart:x}},(0,r.ED)(e)]),[t("div",{class:m("content")},[w()])])}f.props=(0,e.Z)({},c.g2,{text:String,icon:String,color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:String,loadingText:String,loadingType:String,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"},loadingSize:{type:String,default:"20px"},iconPosition:{type:String,default:"left"}}),a["Z"]=g(f)},5825:function(t,a,o){o(1958),o(3332),o(6742)},2250:function(t,a,o){function e(t){return"NavigationDuplicated"===t.name||t.message&&-1!==t.message.indexOf("redundant navigation")}function s(t,a){var o=a.to,s=a.url,i=a.replace;if(o&&t){var n=t[i?"replace":"push"](o);n&&n.catch&&n.catch((function(t){if(t&&!e(t))throw t}))}else s&&(i?location.replace(s):location.href=s)}function i(t){s(t.parent&&t.parent.$router,t.props)}o.d(a,{BC:function(){return s},fz:function(){return i},g2:function(){return n}});var n={url:String,replace:Boolean,to:[String,Object]}}}]);
//# sourceMappingURL=349.5ca660f9.js.map