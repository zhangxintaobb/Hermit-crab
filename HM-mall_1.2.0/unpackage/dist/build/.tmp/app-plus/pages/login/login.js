(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"303a":function(e,n,t){"use strict";(function(e){t("bfcd"),t("921b");o(t("66fd"));var n=o(t("8318"));function o(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},4711:function(e,n,t){"use strict";var o=t("b720"),i=t.n(o);i.a},"4dda":function(e,n,t){"use strict";(function(e,o){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(t("17a3"));function a(e){return e&&e.__esModule?e:{default:e}}var s={data:function(){return{phoneNumber:"",passwd:"",isShowOauth:!1,showProvider:{weixin:!1,qq:!1,sinaweibo:!1,xiaomi:!1}}},onShow:function(){},onLoad:function(){this.isShowOauth=!0,this.getProvider()},methods:{oauthLogin:function(n){e.showLoading(),e.login({provider:n,success:function(t){console.log(o("success: "+JSON.stringify(t)," at pages\\login\\login.vue:69")),e.getUserInfo({provider:n,success:function(n){console.log(o("用户信息："+JSON.stringify(n.userInfo)," at pages\\login\\login.vue:74")),e.setStorage({key:"UserInfo",data:{username:n.userInfo.nickName,face:n.userInfo.avatarUrl,signature:"个性签名",integral:0,balance:0,envelope:0},success:function(){e.hideLoading(),e.showToast({title:"登录成功",icon:"success"}),setTimeout(function(){e.navigateBack()},300)}})}})},fail:function(e){console.log(o("fail: "+JSON.stringify(e)," at pages\\login\\login.vue:97"))}})},getProvider:function(){var n=this;e.getProvider({service:"oauth",success:function(e){for(var t=e.provider.length,o=0;o<t;o++)n.showProvider[e.provider[o]]=!0;0==e.provider.length&&(n.isShowOauth=!1)}})},toPage:function(n){e.hideKeyboard(),e.navigateTo({url:n})},doLogin:function(){var n=this;if(e.hideKeyboard(),!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber))return e.showToast({title:"请填写正确手机号码",icon:"none"}),!1;e.showLoading({title:"提交中..."}),setTimeout(function(){var t=(0,i.default)(n.passwd);e.request({url:"http://zy.eatclub.wang:3000/login",method:"POST",data:{phone:n.phoneNumber,password:t},success:function(n){if(e.hideLoading(),"ERROR"==n.data.msg)e.showToast({title:"手机号码未注册",icon:"none"});else if("PWDERR"==n.data.msg)e.showToast({title:"账号或密码不正确",icon:"none"});else{e.showToast({title:"登录成功",icon:"success"});var t=n.data.data;e.setStorage({key:"user",data:t,success:function(){}}),e.navigateBack()}},fail:function(){},complete:function(){}})},1e3)}}};n.default=s}).call(this,t("6e42")["default"],t("0de9")["default"])},"72e9":function(e,n,t){"use strict";t.r(n);var o=t("4dda"),i=t.n(o);for(var a in o)"default"!==a&&function(e){t.d(n,e,function(){return o[e]})}(a);n["default"]=i.a},8318:function(e,n,t){"use strict";t.r(n);var o=t("ef5a"),i=t("72e9");for(var a in i)"default"!==a&&function(e){t.d(n,e,function(){return i[e]})}(a);t("4711");var s=t("2877"),u=Object(s["a"])(i["default"],o["a"],o["b"],!1,null,null,null);n["default"]=u.exports},b720:function(e,n,t){},ef5a:function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement;e._self._c},i=[];t.d(n,"a",function(){return o}),t.d(n,"b",function(){return i})}},[["303a","common/runtime","common/vendor"]]]);