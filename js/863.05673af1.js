"use strict";(self["webpackChunkflower_shop"]=self["webpackChunkflower_shop"]||[]).push([[863],{6040:function(t,s,i){i.r(s),i.d(s,{default:function(){return v}});var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"root"},[s("action-bar",{attrs:{border:!1,title:"商品搜索"}}),s("div",{staticClass:"search"},[s("div",{staticClass:"search-content"},[s("van-icon",{staticClass:"search-icon",attrs:{name:"search",color:"#b4b4b4",size:"16px"}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchStr,expression:"searchStr"}],staticClass:"search-input",attrs:{type:"text",maxlength:"36",placeholder:"搜索你想要的商品"},domProps:{value:t.searchStr},on:{input:function(s){s.target.composing||(t.searchStr=s.target.value)}}}),s("div",[""!=t.searchStr?s("div",{staticClass:"search-del",on:{click:t.bindClearSearch}},[s("van-icon",{attrs:{name:"cross",color:"#fff",size:"2px"}})],1):t._e()])],1),s("div",{staticClass:"search-btn",on:{click:t.handleSearch}},[t._v("搜索")])]),s("div",{staticClass:"container"},[s("div",{staticClass:"content"},[t.showHistory?s("div",{staticClass:"history"},[s("div",{staticClass:"history-head"},[s("div",{staticClass:"history-head-title"},[t._v("搜索历史")]),s("img",{staticClass:"history-head-del",attrs:{src:i(3850)},on:{click:t.bindDelAllHistory}})]),t._l(t.historyList,(function(i){return s("div",{key:i,staticClass:"history-item",on:{click:function(s){return t.bindHistoryItem(i)}}},[t._v(" "+t._s(i)+" ")])}))],2):s("scroll-view",{staticClass:"scroll",attrs:{noMoreData:t.noMoreData,data:t.searchList}},t._l(t.searchList,(function(e,a){return s("goods-item",{key:e.productId},[s("van-image",{staticClass:"goods-img",attrs:{slot:"imgSlot",radius:".25rem",src:t.baseUrl+e.imageUrl},slot:"imgSlot"}),s("div",{staticClass:"title",attrs:{slot:"nameSlot"},slot:"nameSlot"},[s("div",{staticClass:"status"},[s("div",{class:"已下架"==e.state?"removed":""},[t._v(t._s(e.state)+" ")])]),s("div",[t._v(t._s(e.productName))])]),s("div",{attrs:{slot:"attributeSlot"},slot:"attributeSlot"},[s("div",{staticClass:"attribute"},[s("div",{staticClass:"attribute-content"},[t._v("售价："+t._s(e.price))]),s("div",{staticClass:"attribute-content"},[t._v("库存："+t._s(e.stock))])]),s("div",{staticClass:"attribute"},[s("div",{staticClass:"attribute-content"},[t._v("规格："+t._s(e.unit))]),s("div",{staticClass:"attribute-content"},[t._v("销量："+t._s(e.salesVolume))])])]),s("div",{staticClass:"menu",attrs:{slot:"menuSlot"},slot:"menuSlot"},[s("div",{staticClass:"small",on:{click:function(s){return t.handleUpdatePriceStock(e.productId,a)}}},[s("img",{staticClass:"small-icon",attrs:{src:i(7582)}}),t._v("价&库 ")]),s("div",{staticClass:"small",attrs:{bindtap:"handleUpdateGoods"}},[s("img",{staticClass:"small-icon",attrs:{src:i(1128)}}),t._v("编辑 ")]),"出售中"==e.state?[s("div",{staticClass:"small",on:{click:function(s){return t.handlePutOff(e.productId,"0",a)}}},[s("img",{staticClass:"small-icon",attrs:{src:i(9144)}}),t._v("下架 ")])]:[s("div",{staticClass:"small",on:{click:function(s){return t.handlePutOn(e.productId,"1",a)}}},[s("img",{staticClass:"small-icon",attrs:{src:i(6815)}}),t._v("上架 ")])],s("div",{staticClass:"small",on:{click:function(s){return t.handleDeleteGoods(e.productId)}}},[s("img",{staticClass:"small-icon",attrs:{src:i(2168)}}),t._v(" 移除 ")])],2)],1)})),1)],1)])],1)},a=[],r=(i(4889),i(5705)),o=(i(5825),i(9858)),c=(i(7658),i(541),i(5928)),n=i(1590);const l=50;var h={name:"goodsSearch",components:{[o.Z.name]:o.Z,goodsItem:n.Z,[r.Z.name]:r.Z.Component},data(){return{searchList:[],searchStr:"",isScroll:!0,noMoreData:!1,start:0,limit:10,isRequest:!1,showHistory:!0,historyList:[]}},beforeRouteEnter(t,s,i){i();const e=s.params.goodsData;e&&i((t=>{if(void 0!==e&&null!==e){const s=t.searchList;for(const t of e){const i=s[t.index];null!=i&&void 0!==i&&(i.price=t.price,i.stock=t.stock)}t.searchList=s}}));const a=s.params.headData;i((t=>{if(void 0!==a&&null!=a){const s=t.searchList;s[a.index].imageUrl=a.headUrl,t.searchList=s}}))},methods:{bindHistoryItem(t){this.searchStr=t,this.handleSearch()},bindDelAllHistory(){r.Z.confirm({title:"温馨提示",message:"确定将所有历史记录删除吗？",confirmButtonText:"确定",confirmButtonColor:"#FF0000"}).then((()=>{this.clearAllHistory()})).catch((()=>{}))},clearAllHistory(){this.historyList=[],this.saveHistory()},handlePutOn(t,s,i){this.goodsOffOnConfirm(t,s,"温馨提示","确定将商品上架吗？","#42D18A",s,i)},handlePutOff(t,s,i){this.goodsOffOnConfirm(t,s,"温馨提示","确定将商品下架吗？","#FF0000",s,i)},goodsOffOnConfirm(t,s,i,e,a,o,c){const n=this;r.Z.confirm({title:i,message:e,confirmButtonText:"确定",confirmButtonColor:a}).then((()=>{n.requestProductOperate(t,s,o,c)})).catch((()=>{}))},requestProductOperate(t,s,i=-1,e=-1){(0,c.Un)({productIds:t,onsale:s}).then((t=>{const i=this.searchList,a=i[e];a&&(a.state="1"===s?"出售中":"已下架",this.searchList=i),setTimeout((()=>{this.$toast.success("操作成功")}),150)})).catch((t=>{this.$toast(t.msg)}))},requestDelete(t,s){(0,c.Yn)({productIds:t,state:s}).then((t=>{setTimeout((()=>{this.$toast.success("移除成功")}),150),this.handleSearch()})).catch((t=>{this.$toast(t.msg)}))},handleDeleteGoods(t){const s=this;r.Z.confirm({title:"温馨提示",message:"确定要将该商品移入回收站吗？",confirmButtonText:"确定",confirmButtonColor:"#E81A2E"}).then((()=>{s.requestDelete(t,1)})).catch((()=>{}))},handleUpdatePriceStock(t,s){this.$router.push({path:"/updatePriceStock",query:{data:[{productId:t,index:s}]}})},bindClearSearch(){this.searchStr="",this.showHistory=!0},handleSearch(){const t=this.searchStr.trim();""!==t?this.isRequest||(this.putStrHistory(t),this.start=0,this.searchList=[],this.showHistory=!1,this.requestData()):this.$toast("请输入搜索内容")},putStrHistory(t){const s=this.historyList,i=s.indexOf(t);if(-1===i)s.unshift(t);else{if(0===i)return;s.splice(i,1),s.unshift(t)}s.length>l&&s.splice(s.length-1,1),this.historyList=s,this.saveHistory()},saveHistory(){this.$store.commit("setSalesGoodsSearchList",this.historyList)},requestData(){this.isRequest=!0,(0,c.WI)({name:this.searchStr,start:this.start,limit:this.limit}).then((t=>{let s=!1;t.data.result.length<10&&(s=!0);const i=this.searchList;i.push(...t.data.result),this.noMoreData=s,this.searchList=i,this.isRequest=!1,0===this.searchList.length&&this.$toast("未搜索到商品")})).catch((t=>{this.setData({isScroll:!0,isRequest:!1}),this.isRequest=!1,this.$toast(t.msg)}))},initHistory(){this.historyList=this.$store.state.salesGoodsSearchList}},mounted(){this.initHistory()}},d=h,u=i(1001),m=(0,u.Z)(d,e,a,!1,null,"2cf68b7d",null),v=m.exports},2250:function(t,s,i){function e(t){return"NavigationDuplicated"===t.name||t.message&&-1!==t.message.indexOf("redundant navigation")}function a(t,s){var i=s.to,a=s.url,r=s.replace;if(i&&t){var o=t[r?"replace":"push"](i);o&&o.catch&&o.catch((function(t){if(t&&!e(t))throw t}))}else a&&(r?location.replace(a):location.href=a)}function r(t){a(t.parent&&t.parent.$router,t.props)}i.d(s,{BC:function(){return a},fz:function(){return r},g2:function(){return o}});var o={url:String,replace:Boolean,to:[String,Object]}}}]);
//# sourceMappingURL=863.05673af1.js.map