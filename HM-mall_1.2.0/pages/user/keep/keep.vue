<template>
	<view>
		<view class="tabr" :style="{top:headerTop}">
			<view :class="{on:typeClass=='goods'}" @tap="switchType('goods')">自习室({{srcollect.length}})</view>
			<view :class="{on:typeClass=='shop'}"  @tap="switchType('shop')">办公室({{officecollect.length}})</view>
			<view class="border" :class="typeClass"></view>
		</view>
		<view class="place" ></view>
		<view class="list">
			<!-- 优惠券列表 -->
			<view class="sub-list goods" :class="subState">
				<view class="tis" v-if="srcollect.length==0">没有数据~</view>
				<view class="row" v-for="(row,index) in srcollect" :key="index" >
					<!-- 删除按钮 -->
					<view class="menu" @tap.stop="deleteSr(row.srid,srcollect)">
						<view class="icon shanchu"></view>
					</view>
					<!-- content -->
					<view class="carrier" :class="[typeClass=='goods'?theIndex==index?'open':oldIndex==index?'close':'':'']" @touchstart="touchStart(index,$event)" @touchmove="touchMove(index,$event)" @touchend="touchEnd(index,$event)">
						<view class="goods-info" @tap="toStudyroom(row.srid)">
							<view class="img">
								<image :src="row.img"></image>
							</view>
							<view class="info">
								<view class="title">{{row.srname}}</view>
								<view class="price-number">
									<view class="keep-num">
										905人收藏
									</view>
									<view class="price">￥{{row.price}}/天</view>
									
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="sub-list shop" :class="subState">
				<view class="tis" v-if="officecollect.length==0">没有数据~</view>
				<view class="row" v-for="(row,index) in officecollect" :key="index" >
					<!-- 删除按钮 -->
					<view class="menu" @tap.stop="deleteCoupon(row.id,officecollect)">
						<view class="icon shanchu"></view>
					</view>
					<!-- content -->
					<view class="carrier" :class="[typeClass=='goods'?theIndex==index?'open':oldIndex==index?'close':'':'']" @touchstart="touchStart(index,$event)" @touchmove="touchMove(index,$event)" @touchend="touchEnd(index,$event)">
						<view class="goods-info" @tap="toOffice(row.officeid)">
							<view class="img">
								<image :src="row.img"></image>
							</view>
							<view class="info">
								<view class="title">{{row.officename}}</view>
								<view class="price-number">
									<view class="keep-num">
										500人收藏
									</view>
									<view class="price">￥{{row.price}}/月</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>

	export default {
		data() {
			return {
				srcollect:{},
				officecollect:{},
				user:{},
				headerTop:0,
				//控制滑动效果
				typeClass:'goods',
				subState:'',
				theIndex:null,
				oldIndex:null,
				isStop:false
			}
		},
		onPageScroll(e){
			
		},
		//下拉刷新，需要自己在page.json文件中配置开启页面下拉刷新 "enablePullDownRefresh": true
		onPullDownRefresh() {
		    setTimeout(function () {
		        uni.stopPullDownRefresh();
		    }, 1000);
		},
		onLoad() {
			var user = {};
			uni.getStorage({
			    key: 'user',
			    success: function (res) {
					user = res.data[0];
					// console.log(this.user.userid);
			    },
				fail: function() {
					uni.showToast("请登录");
				}
			});
			this.user = user;
			console.log(this.user.userid);
			uni.request({
			    url: 'http://zy.eatclub.wang:3000/list/usercollect/sr',
			    method: 'GET',  
			    data: {
					userid:this.user.userid
				},  
			    success: res => {  
					this.srcollect = res.data.data;
					// console.log(2);
					// console.log(this.srcollect);
			    },  
			    fail: () => {},  
			    complete: () => {}
			});
			uni.request({
			    url: 'http://zy.eatclub.wang:3000/list/usercollect/office',
			    method: 'GET',  
			    data: {
					userid:this.user.userid
				},  
			    success: res => {  
					this.officecollect = res.data.data;
					// console.log(3);
					// console.log(this.officecollect);
			    },  
			    fail: () => {},  
			    complete: () => {}
			});
			
			//兼容H5下排序栏位置
			// #ifdef H5
				//定时器方式循环获取高度为止，这么写的原因是onLoad中head未必已经渲染出来。
				let Timer = setInterval(()=>{
					let uniHead = document.getElementsByTagName('uni-page-head');
					if(uniHead.length>0){
						this.headerTop = uniHead[0].offsetHeight+'px';
						clearInterval(Timer);//清除定时器
					}
				},1);
			// #endif
		},
		methods: {
			switchType(type){
				if(this.typeClass==type){
					return ;
				}
				uni.pageScrollTo({
					scrollTop:0,
					duration:0
				})
				this.typeClass = type;
				this.subState = this.typeClass==''?'':'show'+type;
				setTimeout(()=>{
					this.oldIndex = null;
					this.theIndex = null;
					this.subState = this.typeClass=='goods'?'':this.subState;
				},200)
			},
			//控制左滑删除效果-begin
			touchStart(index,event){
				//多点触控不触发
				if(event.touches.length>1){
					this.isStop = true;
					return ;
				}
				this.oldIndex = this.theIndex;
				this.theIndex = null;
				//初始坐标
				this.initXY = [event.touches[0].pageX,event.touches[0].pageY];
			},
			touchMove(index,event){
				//多点触控不触发
				if(event.touches.length>1){
					this.isStop = true;
					return ;
				}
				let moveX = event.touches[0].pageX - this.initXY[0];
				let moveY = event.touches[0].pageY - this.initXY[1];
				
				if(this.isStop||Math.abs(moveX)<5){
					return ;
				}
				if (Math.abs(moveY) > Math.abs(moveX)){
					// 竖向滑动-不触发左滑效果
					this.isStop = true;
					return;
				}
				
				if(moveX<0){
					this.theIndex = index;
					this.isStop = true;
				}else if(moveX>0){
					if(this.theIndex!=null&&this.oldIndex==this.theIndex){
						this.oldIndex = index;
						this.theIndex = null;
						this.isStop = true;
						setTimeout(()=>{
							this.oldIndex = null;
						},150)
					}
				}
			},
			
			touchEnd(index,$event){
				//解除禁止触发状态
				this.isStop = false;
			},
			
			//删除商品
			deleteSr(id,List){
				let len = List.length;
				for(let i=0;i<len;i++){
					if(id==List[i].id){
						List.splice(i, 1);
						break;
					}
				}
				this.oldIndex = null;
				this.theIndex = null;
				uni.request({
				    url: 'http://zy.eatclub.wang:3000/delcollect',
				    method: 'GET',  
				    data: {
						roomid:id,
						userid:'1',
						type:'0'
					}, 
				    success: res => {  
						
				    },  
				    fail: () => {},  
				    complete: () => {}
				});
			},
			
			discard() {
				//丢弃
			},
			
			// 自习室办公室跳转
			toStudyroom(e) {
				uni.navigateTo({
					url: '../../goods/goods?srid=' + e
				});
			},
			toOffice(e) {
				uni.navigateTo({
					url: '../../goods/goods?officeid=' + e
				});
			}
			
		}
	}
</script>
<style lang="scss">
	view{
		display: flex;
		flex-wrap: wrap;
		
	}
	page{position: relative;background-color: #f5f5f5;}

	.hidden{
		display: none !important;
	}
	.place{
		width: 100%;
		height: 95upx;
	}
	.tabr{
		background-color: #fff;
		width: 94%;
		height: 95upx;
		padding: 0 3%;
		border-bottom: solid 1upx #dedede;
		position: fixed;
		top: 0;
		z-index: 10;
		view{
			width: 50%;
			height: 90upx;
			justify-content: center;
			align-items: center;
			font-size: 32upx;
			color: #999;
		}
		.on{
			color: #599F6F;
		}
		.border{
			height: 4upx;
			background-color: #599F6F;
			transition: all .3s ease-out;
			&.shop{
				transform: translate3d(100%,0,0);
			}
		}
		
	}
	.list{
		width: 100%;
		display: block;
		position: relative;
	}
	@keyframes showGoods {
		0% {transform: translateX(-100%);}100% {transform: translateX(0);}
	}
	@keyframes showShop {
		0% {transform: translateX(0);}100% {transform: translateX(-100%);}
	}
	.sub-list{
		&.shop{
			position: absolute;
			top: 0;
			left:100%;
			display: none;
		}
		&.showgoods{
			display: flex;
			animation: showGoods 0.20s linear both;
		}
		&.showshop{
			display: flex;
			animation: showShop 0.20s linear both;
		}
		width: 100%;
		padding: 20upx 0 120upx 0;
		.tis{
			width: 100%;
			height: 60upx;
			justify-content: center;
			align-items: center;
			font-size: 32upx;
		}
		// &.shop{
		// 	.row{
		// 		height: 20vw;
		// 		.left{
		// 			width: 20vw;
		// 			height: 20vw;
		// 			padding-left: 20upx;
		// 			align-items: center;
		// 			image{
		// 				width: 18vw;
		// 				height: 18vw;
		// 				border-radius: 100%;
		// 			}
		// 		}
		// 		.right{
		// 			height: 20vw;
		// 			align-items: center;
		// 			font-size: 32upx;
		// 		}
		// 	}
		// }
		.row{
			width: 100%;
			height: 30vw; 
			align-items: center;
			position: relative;
			overflow: hidden;
			border-bottom: solid 1upx #dedede;
			.menu{
				.icon{
					color: #fff;
					font-size:50upx;
				}
				position: absolute;
				width: 28%;
				height: 100%;
				right: 0;
				justify-content: center;
				align-items: center;
				background-color: red;
				color: #fff;
				z-index: 2;
			}
			
			.carrier{
				@keyframes showMenu {
					0% {transform: translateX(0);}100% {transform: translateX(-28%);}
				}
				@keyframes closeMenu {
					0% {transform: translateX(-28%);}100% {transform: translateX(0);}
				}
				&.open{
					animation: showMenu 0.25s linear both;
				}
				&.close{
					animation: closeMenu 0.15s linear both;
				}
				background-color: #fff;

				position: absolute;
				width: 100%;
				padding: 0 0;
				height: 100%;
				z-index: 3;
				flex-wrap: nowrap;
				.goods-info{
					width: calc(100% - 40upx);
					padding: 20upx;
					flex-wrap: nowrap;
					.img{
						width: calc(30vw - 40upx);
						height: calc(30vw - 40upx);
						border-radius: 10upx;
						overflow: hidden;
						flex-shrink: 0;
						margin-right: 20upx;
						image{
							width: calc(30vw - 40upx);
							height: calc(30vw - 40upx);
						}
					}
					.info{
						width: 100%;
						height: calc(30vw - 40upx);
						overflow: hidden;
						flex-wrap: wrap;
						align-content: space-between;
						position: relative;
						.title{
							width: 100%;
							font-size: 28upx;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 2;
							overflow: hidden;
						}
						
						.price-number{
							width: 100%;
							justify-content: space-between;
							align-items: baseline;
							
							.keep-num{
								font-size: 26upx;
								color: #999;
							}
							.price{
								font-size: 30upx;
								color: #599F6F;
							}
						}
					}
				}
			}

		}
	}
	
</style>
