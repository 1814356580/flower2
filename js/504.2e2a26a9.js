"use strict";(self["webpackChunkflower_shop"]=self["webpackChunkflower_shop"]||[]).push([[504],{1504:function(t,i,a){a.r(i),a.d(i,{default:function(){return c}});var d=function(){var t=this,i=t._self._c;return i("div",{staticClass:"detail"},[i("action-bar",{attrs:{title:"优惠券详情"}}),i("div",{staticClass:"detail-box"},[i("div",{staticClass:"detail-item"},[i("div",[t._v("已使用|已领取: ")]),i("div",[t._v(t._s(t.data.receiveInfo))])]),i("div",{staticClass:"detail-item"},[i("div",[t._v("成交转化率(已使用/已领取): ")]),i("div",[t._v(t._s(t.data.rate))])]),i("div",{staticClass:"detail-item"},[i("div",[t._v("优惠券名称: ")]),i("div",[t._v(t._s(t.data.title))])]),i("div",{staticClass:"detail-item"},[i("div",[t._v("优惠券类型: ")]),i("div",[t._v(t._s(t.getType(t.data.type)))])]),i("div",{staticClass:"detail-item"},[i("div",[t._v("券的面额: ")]),i("div",[t._v(t._s(t.data.amount))])]),i("div",{staticClass:"detail-item"},[i("div",[t._v("使用条件: ")]),i("div",[t._v(t._s(t.data.minAmount))])]),i("div",{staticClass:"detail-item"},[i("div",[t._v("发行张数: ")]),i("div",[t._v(t._s(t.data.issuedNumber))])]),i("div",{staticClass:"detail-item"},[i("div",[t._v("每人限额: ")]),i("div",[t._v(t._s(t.data.limitPerson))])]),i("div",{staticClass:"detail-item"},[i("div",[t._v("开始时间: ")]),i("div",[t._v(t._s(t.data.beginTime))])]),i("div",{staticClass:"detail-item last-bottom"},[i("div",[t._v("结束时间: ")]),i("div",[t._v(t._s(t.data.endTime))])])])],1)},s=[],e=a(5928),v={name:"",components:{},data(){return{data:{}}},computed:{id(){return this.$route.query.id}},methods:{getType(t){return"整单"===t?"店铺满减券":"品类"===t?"品类券":"商品"===t?"商品券":void 0},getDetail(){(0,e.Oe)({couponId:this.id}).then((t=>{this.data=t.data})).catch((t=>{this.$toast(t.msg)}))}},mounted(){this.getDetail()}},l=v,_=a(1001),n=(0,_.Z)(l,d,s,!1,null,"3008331c",null),c=n.exports}}]);
//# sourceMappingURL=504.2e2a26a9.js.map