(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/coupon/coupon"],{"35fc":function(t,e,i){"use strict";var n=i("c35f"),o=i.n(n);o.a},a039:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},o=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return o})},bc2b:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{couponValidList:[{id:1,title:"自习室立减10元",termStart:"2019-12-01",termEnd:"2019-12-30",ticket:"10",criteria:"满50使用"},{id:2,title:"办公室立减100元",termStart:"2019-12-01",termEnd:"2019-12-30",ticket:"100",criteria:"满500使用"},{id:3,title:"立减10元",termStart:"2019-12-01",termEnd:"2019-12-30",ticket:"10",criteria:"无门槛"},{id:4,title:"立减50元",termStart:"2019-12-01",termEnd:"2019-12-30",ticket:"50",criteria:"满1000使用"}],couponinvalidList:[{id:1,title:"自习室立减10元",termStart:"2019-11-01",termEnd:"2019-11-30",ticket:"10",criteria:"满50使用"},{id:2,title:"办公室立减100元",termStart:"2019-11-01",termEnd:"2019-11-30",ticket:"100",criteria:"满500使用"},{id:3,title:"立减10元",termStart:"2019-11-01",termEnd:"2019-11-30",ticket:"10",criteria:"无门槛"},{id:4,title:"立减50元",termStart:"2019-11-01",termEnd:"2019-11-30",ticket:"50",criteria:"满1000使用"}],headerTop:0,typeClass:"valid",subState:"",theIndex:null,oldIndex:null,isStop:!1}},onPageScroll:function(t){},onPullDownRefresh:function(){setTimeout(function(){t.stopPullDownRefresh()},1e3)},onLoad:function(){},methods:{switchType:function(e){var i=this;this.typeClass!=e&&(t.pageScrollTo({scrollTop:0,duration:0}),this.typeClass=e,this.subState=""==this.typeClass?"":"show"+e,setTimeout(function(){i.oldIndex=null,i.theIndex=null,i.subState="valid"==i.typeClass?"":i.subState},200))},touchStart:function(t,e){e.touches.length>1?this.isStop=!0:(this.oldIndex=this.theIndex,this.theIndex=null,this.initXY=[e.touches[0].pageX,e.touches[0].pageY])},touchMove:function(t,e){var i=this;if(e.touches.length>1)this.isStop=!0;else{var n=e.touches[0].pageX-this.initXY[0],o=e.touches[0].pageY-this.initXY[1];this.isStop||Math.abs(n)<5||(Math.abs(o)>Math.abs(n)?this.isStop=!0:n<0?(this.theIndex=t,this.isStop=!0):n>0&&null!=this.theIndex&&this.oldIndex==this.theIndex&&(this.oldIndex=t,this.theIndex=null,this.isStop=!0,setTimeout(function(){i.oldIndex=null},150)))}},touchEnd:function(t,e){this.isStop=!1},deleteCoupon:function(t,e){for(var i=e.length,n=0;n<i;n++)if(t==e[n].id){e.splice(n,1);break}this.oldIndex=null,this.theIndex=null},discard:function(){}}};e.default=i}).call(this,i("6e42")["default"])},c31b:function(t,e,i){"use strict";(function(t){i("bfcd"),i("921b");n(i("66fd"));var e=n(i("d1f3"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("6e42")["createPage"])},c35f:function(t,e,i){},d1f3:function(t,e,i){"use strict";i.r(e);var n=i("a039"),o=i("dcf0");for(var s in o)"default"!==s&&function(t){i.d(e,t,function(){return o[t]})}(s);i("35fc");var r=i("2877"),u=Object(r["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=u.exports},dcf0:function(t,e,i){"use strict";i.r(e);var n=i("bc2b"),o=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=o.a}},[["c31b","common/runtime","common/vendor"]]]);