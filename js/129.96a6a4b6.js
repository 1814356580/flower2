"use strict";(self["webpackChunkflower_shop"]=self["webpackChunkflower_shop"]||[]).push([[129],{1590:function(t,s,i){i.d(s,{Z:function(){return d}});var a=function(){var t=this,s=t._self._c;return s("div",[t._t("topSlot"),s("div",[s("div",{staticClass:"goods-item-main"},[s("div",{staticClass:"goods-item-img"},[t._t("imgSlot")],2),s("div",{staticClass:"goods-item-content"},[s("div",{staticClass:"goods-item-title"},[t._t("nameSlot")],2),s("div",{staticClass:"goods-item-attribute"},[t._t("attributeSlot")],2)])])]),t._t("menuSlot")],2)},o=[],e={name:"goodsItem",data(){return{}},methods:{},mounted(){}},l=e,n=i(1001),r=(0,n.Z)(l,a,o,!1,null,"1f769a80",null),d=r.exports},129:function(t,s,i){i.r(s),i.d(s,{default:function(){return u}});var a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"commoidy"},[s("action-bar",{attrs:{title:"添加商品"}}),s("div",{staticClass:"content"},[s("scroll-view",{staticClass:"scroll",attrs:{data:t.goodsList}},t._l(t.goodsList,(function(i){return s("goodsItem",{key:i.id},[s("van-image",{staticClass:"goods-img",attrs:{slot:"imgSlot",src:t.baseUrl+i.imageUrl},slot:"imgSlot"}),s("div",{attrs:{slot:"nameSlot"},slot:"nameSlot"},[s("div",[t._v(t._s(i.skuName))])]),s("div",{attrs:{slot:"attributeSlot"},slot:"attributeSlot"},[s("div",{staticClass:"attribute"},[s("div",{staticClass:"attribute-content"},[t._v("分类："+t._s(i.categoryName))]),s("div",{staticClass:"attribute-content"},[t._v("颜色："+t._s(i.color))])]),s("div",{staticClass:"attribute"},[s("div",{staticClass:"attribute-content"},[t._v("等级："+t._s(i.level))]),s("div",{staticClass:"attribute-content"},[t._v("规格："+t._s(i.unit))])])])],1)})),1)],1)],1)},o=[],e=i(1590),l=i(5928),n={name:"alreadyAddCommoidy",components:{goodsItem:e.Z},computed:{baseUrl(){return this.$store.state.baseUrl}},data(){return{goodsList:[]}},methods:{getList(){(0,l.el)().then((t=>{this.goodsList=t.data})).catch((t=>{this.$toast(t.msg)}))}},mounted(){this.getList()}},r=n,d=i(1001),c=(0,d.Z)(r,a,o,!1,null,"97c37cd6",null),u=c.exports}}]);
//# sourceMappingURL=129.96a6a4b6.js.map