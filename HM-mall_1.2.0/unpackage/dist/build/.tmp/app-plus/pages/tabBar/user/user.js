(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/user/user"],{3108:function(t,e,n){"use strict";n.r(e);var i=n("7ed8"),u=n("59b9");for(var o in u)"default"!==o&&function(t){n.d(e,t,function(){return u[t]})}(o);n("641f");var s=n("2877"),r=Object(s["a"])(u["default"],i["a"],i["b"],!1,null,null,null);e["default"]=r.exports},3551:function(t,e,n){"use strict";(function(t){n("bfcd"),n("921b");i(n("66fd"));var e=i(n("3108"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"59b9":function(t,e,n){"use strict";n.r(e);var i=n("961f"),u=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=u.a},"641f":function(t,e,n){"use strict";var i=n("bb68"),u=n.n(i);u.a},"7ed8":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return u})},"961f":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{isfirst:!0,headerPosition:"fixed",headerTop:null,statusTop:null,showHeader:!0,user:{username:"点击登录"},mytoolbarList:[{url:"../../user/keep/keep",text:"我的收藏",img:"/static/img/user/point.png"},{url:"../../user/coupon/coupon",text:"优惠券",img:"/static/img/user/quan.png"},{url:"",text:"我的评价",img:"/static/img/user/renw.png"},{url:"",text:"成为房东",img:"/static/img/user/mingxi.png"},{url:"../../user/address/address",text:"我的地址",img:"/static/img/user/addr.png"},{url:"",text:"账户安全",img:"/static/img/user/security.png"},{url:"",text:"客服",img:"/static/img/user/kefu.png"},{url:"exit",text:"退出登录",img:"/static/img/user/choujiang.png"}]}},onPullDownRefresh:function(){setTimeout(function(){t.stopPullDownRefresh()},1e3)},onPageScroll:function(t){this.headerPosition=t.scrollTop>=0?"fixed":"absolute",this.headerTop=t.scrollTop>=0?null:0,this.statusTop=t.scrollTop>=0?null:-this.statusHeight+"px"},onLoad:function(){this.statusHeight=0,this.showHeader=!1,this.statusHeight=plus.navigator.getStatusbarHeight()},onReady:function(){},onShow:function(){var e={};t.getStorage({key:"user",success:function(t){e=t.data[0]},fail:function(){e={username:"点击登录"}}}),this.user=e},methods:{toMsg:function(){t.navigateTo({url:"../../msg/msg"})},toOrderList:function(e){t.setStorageSync("tbIndex",e),t.navigateTo({url:"../../user/order_list/order_list?tbIndex="+e})},toSetting:function(){t.navigateTo({url:"../../user/setting/setting"})},toLogin:function(){t.showToast({title:"请登录",icon:"none"}),t.navigateTo({url:"../../login/login"}),this.isfirst=!1},isLogin:function(){},toDeposit:function(){t.navigateTo({url:"../../user/deposit/deposit"})},toPage:function(e){e?"exit"==e?t.removeStorage({key:"user",success:function(t){}}):t.navigateTo({url:e}):t.showToast({title:"功能暂未开放",icon:"none"})}}};e.default=n}).call(this,n("6e42")["default"])},bb68:function(t,e,n){}},[["3551","common/runtime","common/vendor"]]]);