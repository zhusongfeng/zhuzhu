(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-createOrder"],{"04f9":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 优惠券面板 */.mask[data-v-db74dfa6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end;position:fixed;left:0;top:var(--window-top);bottom:0;width:100%;background:transparent;z-index:9995;-webkit-transition:.3s;transition:.3s}.mask .mask-content[data-v-db74dfa6]{width:100%;max-height:60vh;background:#f3f3f3;-webkit-transform:translateY(100%);transform:translateY(100%);-webkit-transition:.3s;transition:.3s;overflow-y:scroll}.mask.none[data-v-db74dfa6]{display:none}.mask.show[data-v-db74dfa6]{background:rgba(0,0,0,.4)}.mask.show .mask-content[data-v-db74dfa6]{-webkit-transform:translateY(0);transform:translateY(0)}\n/* 优惠券列表 */.coupon-item[data-v-db74dfa6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin:%?20?% %?24?%;background:#fff}.coupon-item .con[data-v-db74dfa6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;height:%?120?%;padding:0 %?30?%}.coupon-item .con[data-v-db74dfa6]:after{position:absolute;left:0;bottom:0;content:"";width:100%;height:0;border-bottom:1px dashed #f3f3f3;-webkit-transform:scaleY(50%);transform:scaleY(50%)}.coupon-item .left[data-v-db74dfa6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden;height:%?100?%}.coupon-item .title[data-v-db74dfa6]{font-size:%?32?%;color:#303133;margin-bottom:%?10?%}.coupon-item .time[data-v-db74dfa6]{font-size:%?24?%;color:#909399}.coupon-item .right[data-v-db74dfa6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?26?%;color:#606266;height:%?100?%}.coupon-item .price[data-v-db74dfa6]{font-size:%?44?%;color:#fa436a}.coupon-item .price[data-v-db74dfa6]:before{content:"\\FFE5";font-size:%?34?%}.coupon-item .circle[data-v-db74dfa6]{position:absolute;left:%?-6?%;bottom:%?-10?%;z-index:10;width:%?20?%;height:%?20?%;background:#f3f3f3;border-radius:100px}.coupon-item .circle.r[data-v-db74dfa6]{left:auto;right:%?-6?%}.coupon-item .op[data-v-db74dfa6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;font-size:%?26?%;padding:%?10?% %?20?%}.coupon-item .op .tips[data-v-db74dfa6]{font-size:%?24?%;color:#909399;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.coupon-item .op .op-btn[data-v-db74dfa6]{border:%?2?% solid #fa436a;border-radius:%?10?%;padding:%?4?% %?20?%;background:#fa436a;color:#fff}',""])},2544:function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"mask",class:0===t.couponVisible?"none":1===t.couponVisible?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggleMask.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"mask-content"},t._l(t.list,function(e,a){return i("v-uni-view",{key:a,staticClass:"coupon-item"},[i("v-uni-view",{staticClass:"con"},[i("v-uni-view",{staticClass:"left"},[i("v-uni-text",{staticClass:"title"},[t._v(t._s(e.coupon&&e.coupon.name)+" x "+t._s(e.usable_count))]),i("v-uni-text",{staticClass:"time"},[t._v("有效期至"+t._s(e.coupon&&e.coupon.use_end_time_text))])],1),i("v-uni-view",{staticClass:"right"},[i("v-uni-text",{staticClass:"price"},[t._v(t._s(e.coupon&&e.coupon.money))]),i("v-uni-text",[t._v("满"+t._s(e.coupon&&e.coupon.order_min_amount)+"可用")])],1),i("v-uni-view",{staticClass:"circle l"}),i("v-uni-view",{staticClass:"circle r"})],1),i("v-uni-view",{staticClass:"op"},[i("v-uni-text",{staticClass:"tips"},[t._v(t._s(e.coupon&&e.coupon.note))]),i("v-uni-text",{staticClass:"op-btn",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.useCoupon(e,a)}}},[t._v("使用")])],1)],1)}),1)],1)},o=[];i.d(e,"b",function(){return n}),i.d(e,"c",function(){return o}),i.d(e,"a",function(){return a})},"258f":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-35b1cbc6]{background:#f8f8f8;padding-bottom:%?100?%}.address-section[data-v-35b1cbc6]{padding:%?30?% 0;background:#fff;position:relative}.address-section .order-content[data-v-35b1cbc6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.address-section .icon-address[data-v-35b1cbc6]{-webkit-flex-shrink:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?90?%;color:#888;font-size:%?44?%}.address-section .cen[data-v-35b1cbc6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?28?%;color:#303133}.address-section .name[data-v-35b1cbc6]{font-size:%?34?%;margin-right:%?24?%}.address-section .address[data-v-35b1cbc6]{margin-top:%?16?%;margin-right:%?20?%;color:#909399}.address-section .iconyou1[data-v-35b1cbc6]{font-size:%?32?%;color:#909399;margin-right:%?30?%}.address-section .a-bg[data-v-35b1cbc6]{position:absolute;left:0;bottom:0;display:block;width:100%;height:%?5?%}.address-section .none-address[data-v-35b1cbc6]{padding:%?33?%;font-size:%?33?%;color:#a9a9a9;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.goods-section[data-v-35b1cbc6]{margin-top:%?16?%;background:#fff;padding-bottom:1px}.goods-section .g-header[data-v-35b1cbc6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?84?%;padding:0 %?30?%;position:relative}.goods-section .logo[data-v-35b1cbc6]{display:block;width:%?50?%;height:%?50?%;border-radius:100px}.goods-section .name[data-v-35b1cbc6]{font-size:%?30?%;color:#606266;margin-left:%?24?%}.goods-section .g-item[data-v-35b1cbc6]{display:-webkit-box;display:-webkit-flex;display:flex;margin:%?20?% %?30?%}.goods-section .g-item uni-image[data-v-35b1cbc6]{-webkit-flex-shrink:0;flex-shrink:0;display:block;width:%?140?%;height:%?140?%;border-radius:%?4?%}.goods-section .g-item .right[data-v-35b1cbc6]{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding-left:%?24?%;overflow:hidden}.goods-section .g-item .title[data-v-35b1cbc6]{font-size:%?30?%;color:#303133}.goods-section .g-item .spec[data-v-35b1cbc6]{font-size:%?26?%;color:#909399}.goods-section .g-item .price-box[data-v-35b1cbc6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?32?%;color:#303133;padding-top:%?10?%}.goods-section .g-item .price-box .price[data-v-35b1cbc6]{margin-bottom:%?4?%}.goods-section .g-item .price-box .number[data-v-35b1cbc6]{font-size:%?26?%;color:#606266;margin-left:%?20?%}.goods-section .g-item .step-box[data-v-35b1cbc6]{position:relative}.yt-list[data-v-35b1cbc6]{margin-top:%?16?%;background:#fff}.yt-list-cell[data-v-35b1cbc6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?10?% %?30?% %?10?% %?40?%;line-height:%?70?%;position:relative}.yt-list-cell.cell-hover[data-v-35b1cbc6]{background:#fafafa}.yt-list-cell.b-b[data-v-35b1cbc6]:after{left:%?30?%}.yt-list-cell .cell-icon[data-v-35b1cbc6]{height:%?32?%;width:%?32?%;font-size:%?22?%;color:#fff;text-align:center;line-height:%?32?%;background:#f85e52;border-radius:%?4?%;margin-right:%?12?%}.yt-list-cell .cell-icon.hb[data-v-35b1cbc6]{background:#ffaa0e}.yt-list-cell .cell-icon.lpk[data-v-35b1cbc6]{background:#3ab54a}.yt-list-cell .cell-more[data-v-35b1cbc6]{-webkit-align-self:center;align-self:center;font-size:%?24?%;color:#909399;margin-left:%?8?%;margin-right:%?-10?%}.yt-list-cell .cell-tit[data-v-35b1cbc6]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?26?%;color:#909399;margin-right:%?10?%}.yt-list-cell .cell-tip[data-v-35b1cbc6]{font-size:%?26?%;color:#303133}.yt-list-cell .cell-tip.disabled[data-v-35b1cbc6]{color:#909399}.yt-list-cell .cell-tip.active[data-v-35b1cbc6]{color:#fa436a}.yt-list-cell .cell-tip.red[data-v-35b1cbc6]{color:#fa436a}.yt-list-cell.desc-cell .cell-tit[data-v-35b1cbc6]{max-width:%?90?%}.yt-list-cell .desc[data-v-35b1cbc6]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?28?%;color:#303133}\n/* 支付列表 */.pay-list[data-v-35b1cbc6]{padding-left:%?40?%;margin-top:%?16?%;background:#fff}.pay-list .pay-item[data-v-35b1cbc6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-right:%?20?%;line-height:1;height:%?110?%;position:relative}.pay-list .icon-weixinzhifu[data-v-35b1cbc6]{width:%?80?%;font-size:%?40?%;color:#6bcc03}.pay-list .icon-alipay[data-v-35b1cbc6]{width:%?80?%;font-size:%?40?%;color:#06b4fd}.pay-list .icon-xuanzhong2[data-v-35b1cbc6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?60?%;height:%?60?%;font-size:%?40?%;color:#fa436a}.pay-list .tit[data-v-35b1cbc6]{font-size:%?32?%;color:#303133;-webkit-box-flex:1;-webkit-flex:1;flex:1}.footer[data-v-35b1cbc6]{position:fixed;left:0;bottom:0;z-index:995;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;height:%?90?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;font-size:%?30?%;background-color:#fff;z-index:998;color:#606266;box-shadow:0 -1px 5px rgba(0,0,0,.1)}.footer .price-content[data-v-35b1cbc6]{padding-left:%?30?%}.footer .price-tip[data-v-35b1cbc6]{color:#fa436a;margin-left:%?8?%}.footer .price[data-v-35b1cbc6]{font-size:%?36?%;color:#fa436a}.footer .submit[data-v-35b1cbc6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?280?%;height:100%;color:#fff;font-size:%?32?%;background-color:#fa436a}.footer .disabled[data-v-35b1cbc6]{background:#ddd}\n/* 优惠券面板 */.mask[data-v-35b1cbc6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end;position:fixed;left:0;top:var(--window-top);bottom:0;width:100%;background:transparent;z-index:9995;-webkit-transition:.3s;transition:.3s}.mask .mask-content[data-v-35b1cbc6]{width:100%;max-height:70vh;background:#f3f3f3;-webkit-transform:translateY(100%);transform:translateY(100%);-webkit-transition:.3s;transition:.3s;overflow-y:scroll;height:auto}.mask.none[data-v-35b1cbc6]{display:none}.mask.show[data-v-35b1cbc6]{background:rgba(0,0,0,.4)}.mask.show .mask-content[data-v-35b1cbc6]{-webkit-transform:translateY(0);transform:translateY(0)}\n/* 优惠券列表 */.coupon-item[data-v-35b1cbc6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin:%?20?% %?24?%;background:#fff}.coupon-item .con[data-v-35b1cbc6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;height:%?120?%;padding:0 %?30?%}.coupon-item .con[data-v-35b1cbc6]:after{position:absolute;left:0;bottom:0;content:"";width:100%;height:0;border-bottom:1px dashed #f3f3f3;-webkit-transform:scaleY(50%);transform:scaleY(50%)}.coupon-item .left[data-v-35b1cbc6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden;height:%?100?%}.coupon-item .title[data-v-35b1cbc6]{font-size:%?32?%;color:#303133;margin-bottom:%?10?%}.coupon-item .time[data-v-35b1cbc6]{font-size:%?24?%;color:#909399}.coupon-item .right[data-v-35b1cbc6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?26?%;color:#606266;height:%?100?%}.coupon-item .price[data-v-35b1cbc6]{font-size:%?44?%;color:#fa436a}.coupon-item .price[data-v-35b1cbc6]:before{content:"\\FFE5";font-size:%?34?%}.coupon-item .tips[data-v-35b1cbc6]{font-size:%?24?%;color:#909399;line-height:%?60?%;padding-left:%?30?%}.coupon-item .circle[data-v-35b1cbc6]{position:absolute;left:%?-6?%;bottom:%?-10?%;z-index:10;width:%?20?%;height:%?20?%;background:#f3f3f3;border-radius:100px}.coupon-item .circle.r[data-v-35b1cbc6]{left:auto;right:%?-6?%}body.?%PAGE?%[data-v-35b1cbc6]{background:#f8f8f8}',""])},"268c":function(t,e,i){"use strict";var a=i("e8bf"),n=i.n(a);n.a},"5c7a":function(t,e,i){"use strict";i.r(e);var a=i("870d"),n=i("da32");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("b186");var c,s=i("f0c5"),l=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"35b1cbc6",null,!1,a["a"],c);e["default"]=l.exports},"61e7":function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("5176"));i("ac6a");var o=a(i("cebc")),c=i("2f62"),s=a(i("e113")),l={components:{coupon:s.default},data:function(){return{desc:"",payType:1,couponList:[],addressData:{},currentAddress:{},form:{},totalPrice:{},address_id:0,stopSale:!1,couponVisible:0,currentCoupon:{}}},onLoad:function(t){var e=this;t.sku_id&&(this.form=t),this.getCartProducts(this.form),this.address_id=t.address_id||0,this.getUserAddress().then(function(t){e.currentAddress=e.getDefaultAddress(),e.address_id=e.currentAddress.id,e.getTotalPrice()}),this.$tools.has_addon("xshopcoupon")&&this.getUsableCoupons()},computed:(0,o.default)({},(0,c.mapState)({cProducts:function(t){return t.cart.products},tempProducts:function(t){return t.cart.tempProducts},isTemp:function(t){return t.cart.isTempProduct},address:function(t){return t.user.address}}),{products:function(){var t=[],e=this.isTemp?this.tempProducts:this.cProducts;return e.forEach(function(e){e.is_selected&&t.push(e)}),t},productsTotal:function(){var t=this.products,e=0;return t.forEach(function(t,i){e+=t.quantity*t.sku.price}),e.toFixed(2)},addressUrl:function(){var t=(0,n.default)({},this.form);return t.source=1,"/pages/address/address?"+this.$tools.queryStringify(t)}}),methods:(0,o.default)({},(0,c.mapActions)(["getCartProducts","getUserAddress"]),{numberChange:function(t){this.number=t.number},changePayType:function(t){this.payType=t},getTotalPrice:function(){var t=this,e=(0,n.default)({address_id:this.address_id,desc:this.desc},this.form);this.$http.post("order.getPrice",e).then(function(e){t.stopSale=!1,t.totalPrice=e.data}).catch(function(e){t.stopSale=!0})},submit:function(){var t=this;if(!this.stopSale){var e={address_id:this.currentAddress.id};this.currentCoupon&&(e.coupon_id=this.currentCoupon.id),e=(0,n.default)(e,this.form),this.$http.post("order.create",e).then(function(e){t.getCartProducts(),uni.redirectTo({url:"/pages/money/pay?order_sn="+e.data})}).catch(function(t){})}},getDefaultAddress:function(){var t=this;if(0==this.address.length)return{};var e=0;return this.address_id?this.address.forEach(function(i,a){i.id==t.address_id&&(e=a)}):this.address.forEach(function(t,i){1==t.is_default&&(e=i)}),this.address[e]},stopPrevent:function(){},getUsableCoupons:function(){var t=this;this.$http.post("usableCoupon",this.form).then(function(e){t.couponList=e.data})},couponChange:function(t,e){this.currentCoupon=t,this.form.coupon_id=t.id,this.couponVisible=0,this.getTotalPrice()}})};e.default=l},"870d":function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-navigator",{staticClass:"address-section",attrs:{url:t.addressUrl}},[t.currentAddress?i("v-uni-view",{staticClass:"order-content"},[i("v-uni-text",{staticClass:"iconfont icondizhi3 icon-address"}),i("v-uni-view",{staticClass:"cen"},[i("v-uni-view",{staticClass:"top"},[i("v-uni-text",{staticClass:"name"},[t._v(t._s(t.currentAddress.contactor_name||""))]),i("v-uni-text",{staticClass:"mobile"},[t._v(t._s(t.currentAddress.phone||""))])],1),i("v-uni-text",{staticClass:"address"},[t._v(t._s(t.currentAddress.address||"")+" "+t._s(t.currentAddress.street||""))])],1),i("v-uni-text",{staticClass:"iconfont iconyou1"})],1):i("v-uni-view",{staticClass:"none-address"},[t._v("点击添加地址")]),i("v-uni-image",{staticClass:"a-bg",attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAAFCAYAAAAaAWmiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Rjk3RjkzMjM2NzMxMTFFOUI4RkU4OEZGMDcxQzgzOEYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Rjk3RjkzMjQ2NzMxMTFFOUI4RkU4OEZGMDcxQzgzOEYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGOTdGOTMyMTY3MzExMUU5QjhGRTg4RkYwNzFDODM4RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGOTdGOTMyMjY3MzExMUU5QjhGRTg4RkYwNzFDODM4RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrEOZlQAAAiuSURBVHjazJp7bFvV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"}})],1),i("v-uni-view",{staticClass:"goods-section"},t._l(t.products,function(e,a){return i("v-uni-view",{key:a,staticClass:"g-item"},[i("v-uni-image",{attrs:{src:e.product.image[0]}}),i("v-uni-view",{staticClass:"right"},[i("v-uni-text",{staticClass:"title clamp"},[t._v(t._s(e.product.title))]),i("v-uni-text",{staticClass:"spec"},[t._v(t._s(e.sku.value))]),i("v-uni-view",{staticClass:"price-box"},[i("v-uni-text",{staticClass:"price"},[t._v("￥"+t._s(e.sku.price))]),i("v-uni-text",{staticClass:"number"},[t._v("x "+t._s(e.quantity))])],1)],1)],1)}),1),i("v-uni-view",{staticClass:"yt-list"},[t.couponList.length?i("v-uni-view",{staticClass:"yt-list-cell b-b",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.couponVisible=1}}},[i("v-uni-view",{staticClass:"cell-icon"},[t._v("券")]),i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("优惠券")]),i("v-uni-text",{staticClass:"cell-tip active"},[t._v(t._s(t.currentCoupon.name||"选择优惠券"))]),i("v-uni-text",{staticClass:"cell-more wanjia wanjia-gengduo-d"})],1):t._e()],1),i("v-uni-view",{staticClass:"yt-list"},[i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("商品金额")]),i("v-uni-text",{staticClass:"cell-tip"},[t._v("￥ "+t._s(t.totalPrice.products_price||0))])],1),i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("优惠金额")]),i("v-uni-text",{staticClass:"cell-tip red"},[t._v("- ￥ "+t._s(t.totalPrice.discount_price||0))])],1),i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("运费")]),i("v-uni-text",{staticClass:"cell-tip"},[t._v("￥ "+t._s(t.totalPrice.delivery_price||"免运费"))])],1),i("v-uni-view",{staticClass:"yt-list-cell desc-cell"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("备注")]),i("v-uni-input",{staticClass:"desc",attrs:{type:"text",placeholder:"请填写备注信息","placeholder-class":"placeholder"},model:{value:t.form.remark,callback:function(e){t.$set(t.form,"remark",e)},expression:"form.remark"}})],1)],1),i("v-uni-view",{staticClass:"footer"},[i("v-uni-view",{staticClass:"price-content"},[i("v-uni-text",[t._v("实付款")]),i("v-uni-text",{staticClass:"price-tip"},[t._v("￥")]),i("v-uni-text",{staticClass:"price"},[t._v(t._s(t.stopSale?"-":t.totalPrice.order_price))])],1),i("v-uni-text",{staticClass:"submit",class:{disabled:t.stopSale},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("提交订单")])],1),i("coupon",{attrs:{list:t.couponList},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.couponChange.apply(void 0,arguments)}},model:{value:t.couponVisible,callback:function(e){t.couponVisible=e},expression:"couponVisible"}})],1)},o=[];i.d(e,"b",function(){return n}),i.d(e,"c",function(){return o}),i.d(e,"a",function(){return a})},a56e:function(t,e,i){var a=i("258f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("89f217cc",a,!0,{sourceMap:!1,shadowMode:!1})},b186:function(t,e,i){"use strict";var a=i("a56e"),n=i.n(a);n.a},d67f:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("c5f6");var a={data:function(){return{couponVisible:0}},props:{value:{type:String|Number,default:0},list:{type:Array}},watch:{value:function(t){this.couponVisible=t},couponVisible:function(t){this.$emit("input",t)}},mounted:function(){this.couponVisible=this.value},methods:{toggleMask:function(t){var e=this,i="show"===t?10:300,a="show"===t?1:0;this.couponVisible=2,setTimeout(function(){e.couponVisible=a},i)},useCoupon:function(t,e){this.$emit("change",t.coupon,e)}}};e.default=a},da32:function(t,e,i){"use strict";i.r(e);var a=i("61e7"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},e113:function(t,e,i){"use strict";i.r(e);var a=i("2544"),n=i("f924");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("268c");var c,s=i("f0c5"),l=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"db74dfa6",null,!1,a["a"],c);e["default"]=l.exports},e8bf:function(t,e,i){var a=i("04f9");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("6a52146f",a,!0,{sourceMap:!1,shadowMode:!1})},f924:function(t,e,i){"use strict";i.r(e);var a=i("d67f"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a}}]);