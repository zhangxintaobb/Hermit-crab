(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/home/home"],{"3d4e":function(t,e,i){"use strict";i.r(e);var o=i("56da"),n=i.n(o);for(var a in o)"default"!==a&&function(t){i.d(e,t,function(){return o[t]})}(a);e["default"]=n.a},"495c":function(t,e,i){"use strict";var o=i("675e"),n=i.n(o);n.a},"4b1f":function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},n=[];i.d(e,"a",function(){return o}),i.d(e,"b",function(){return n})},"56da":function(t,e,i){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("b080"));function a(t){return t&&t.__esModule?t:{default:t}}var c={data:function(){return{showHeader:!0,afterHeaderOpacity:1,headerPosition:"fixed",headerTop:null,statusTop:null,nVueTitle:null,city:"石家庄",currentSwiper:0,swiperList:[{id:1,src:"url1",img:"/static/img/c1.jpg"},{id:2,src:"url2",img:"/static/img/c2.jpg"},{id:3,src:"url3",img:"/static/img/c3.jpg"}],categoryList:[{id:1,name:"北京",img:"/static/img/category/city.png"},{id:2,name:"上海",img:"/static/img/category/city.png"},{id:3,name:"广州",img:"/static/img/category/city.png"},{id:4,name:"深圳",img:"/static/img/category/city.png"},{id:5,name:"成都",img:"/static/img/category/city.png"},{id:6,name:"重庆",img:"/static/img/category/city.png"},{id:7,name:"武汉",img:"/static/img/category/city.png"},{id:8,name:"杭州",img:"/static/img/category/city.png"}],Promotion:[],likeList:{},likeListOffice:{},loadingText:"正在加载..."}},onPageScroll:function(t){this.headerPosition=t.scrollTop>=0?"fixed":"absolute",this.headerTop=t.scrollTop>=0?null:0,this.statusTop=t.scrollTop>=0?null:-this.statusHeight+"px"},onPullDownRefresh:function(){setTimeout(function(){t.stopPullDownRefresh()},1e3)},onReachBottom:function(){},onLoad:function(){var e=this;t.request({url:"http://zy.eatclub.wang:3000/list/sr",method:"GET",data:{},success:function(t){e.likeList=t.data.data},fail:function(){},complete:function(){}}),t.request({url:"http://zy.eatclub.wang:3000/list/office",method:"GET",data:{},success:function(t){e.likeListOffice=t.data.data},fail:function(){},complete:function(){}}),this.nVueTitle=t.getSubNVueById("homeTitleNvue"),this.nVueTitle.onMessage(function(t){var i=t.data.type;"focus"==i&&e.toSearch()}),this.showHeader=!1,this.statusHeight=plus.navigator.getStatusbarHeight(),this.amapPlugin=new n.default.AMapWX({key:"3ef137506182cf7ca6cd3e2cee9daf31"}),this.amapPlugin.getRegeo({success:function(t){e.city=t[0].regeocodeData.addressComponent.city.replace(/市/g,""),console.log(o(e.city," at pages\\tabBar\\home\\home.vue:200")),e.nVueTitle.postMessage({type:"location",city:e.city})}})},methods:{toMsg:function(){t.navigateTo({url:"../../msg/msg"})},toSearch:function(){},toSwiper:function(e){t.showToast({title:e.src,icon:"none"})},toCategory:function(e){t.setStorageSync("catName",e.name),t.navigateTo({url:"../../goods/goods-list/goods-list?cid="+e.id+"&name="+e.name})},toPromotion:function(e){t.showToast({title:e.title,icon:"none"})},toStudyroom:function(e){t.navigateTo({url:"../../goods/goods?srid="+e})},toOffice:function(e){t.navigateTo({url:"../../goods/goods?officeid="+e})},swiperChange:function(t){this.currentSwiper=t.detail.current},selectCity:function(e){this.city=e,t.setStorage({key:"city",data:e,success:function(){console.log(o("success"," at pages\\tabBar\\home\\home.vue:258"))}})}}};e.default=c}).call(this,i("6e42")["default"],i("0de9")["default"])},"675e":function(t,e,i){},"6a3b":function(t,e,i){"use strict";(function(t){i("bfcd"),i("921b");o(i("66fd"));var e=o(i("d4c5"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("6e42")["createPage"])},d4c5:function(t,e,i){"use strict";i.r(e);var o=i("4b1f"),n=i("3d4e");for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);i("495c");var c=i("2877"),s=Object(c["a"])(n["default"],o["a"],o["b"],!1,null,null,null);e["default"]=s.exports}},[["6a3b","common/runtime","common/vendor"]]]);