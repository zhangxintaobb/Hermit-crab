<template>
	<view>
		<!-- 购买商品列表 -->
		<view class="buy-list">
			<view class="row">
				<view class="goods-info">
					<view class="img">
						<image :src="order.roomData.img_url"></image>
					</view>
					<view class="info">
						<view class="title">{{order.roomData.srname||order.roomData.officename}}</view>
						<view class="spec">规格：{{order.spec.price}}/{{order.spec.time}}  数量：{{order.number}}</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 地址 -->
		<view class="addr">
			<view class="icon">
				<image src="../../static/img/addricon.png" mode=""></image>
			</view>
			<view class="right">
				<view class="tel-name">
					<view class="name">
						{{order.roomData.city}}-{{order.roomData.region}}
					</view>
				</view>
				<view class="addres">
					{{order.roomData.sraddress||order.roomData.officeaddress}}
				</view>
			</view>
		</view>
		<!-- 提示-备注 -->
		<view class="order">
			<view class="row">
				<view class="left">
					备注 :
				</view>
				<view class="right">
					<input placeholder="选填,备注内容" v-model="note" />
				</view>
			</view>
		</view>
		<!-- 明细 -->
		<view class="detail">
			<view class="row">
				<view class="nominal">
					金额
				</view>
				<view class="content">
					￥{{order.spec.price*order.number|toFixed}}
				</view>
			</view>
			<view class="row">
				<view class="nominal">
					服务费
				</view>
				<view class="content">
					￥+{{order.spec.price*order.number*0.1|toFixed}}
				</view>
			</view>
		</view>
		<view class="blck">
			
		</view>
		<view class="footer">
			<view class="settlement">
				<view class="sum">合计:<view class="money">
				￥{{order.spec.price*order.number*1.1|toFixed}}
				</view></view>
				<view class="btn" @tap="toPay">提交订单</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				order:{},//订单列表
				sumPrice:'',
				// roomPrice:0.0,	//商品合计价格
				// sumPrice:0.0,	//用户付款价格
				// server:roomPrice*0.03,	//服务费
				// note:'',		//备注
				// int:roomPrice*10,		//获得积分
			};
		},
		onShow() {
			//页面显示时，加载订单信息
			uni.getStorage({
				key:'order',
				success: (res) => {
					this.order = res.data;
					console.log(this.order);
				}
			});
		},
		onHide() {
			
		},
		onBackPress() {
			//页面后退时候，清除订单信息
			this.clearOrder();
		},
		filters: {
			toFixed:function(x) {
				return parseFloat(x).toFixed(2);
			}
		},
		methods: {
			clearOrder(){
				uni.removeStorage({
					key: 'order',
					success: (res)=>{
						this.order = [];
					}
				});
			},
			toPay(){
				//商品列表
				// let paymentOrder = [];
				// let goodsid=[];
				// let len = this.buylist.length;
				// for(let i=0;i<len;i++){
				// 	paymentOrder.push(this.buylist[i]);
				// 	goodsid.push(this.buylist[i].id);
				// }
				// if(paymentOrder.length==0){
				// 	uni.showToast({title:'订单信息有误，请重新购买',icon:'none'});
				// 	return ;
				// }
				//本地模拟订单提交UI效果
				uni.showLoading({
					title:'正在提交订单...'
				})
				uni.hideLoading();
				uni.redirectTo({
					url:"../pay/payment/payment?amount="+this.sumPrice
				})
				// setTimeout(()=>{
				// 	uni.setStorage({
				// 		key:'paymentOrder',
				// 		data:paymentOrder,
				// 		success: () => {
				// 			uni.hideLoading();
				// 			uni.redirectTo({
				// 				url:"../pay/payment/payment?amount="+this.sumPrice
				// 			})
				// 		}
				// 	})
				// },1000)
			},
		}
	}
</script>

<style lang="scss">
.addr{
	width: 86%;
	padding: 20upx 3%;
	margin: 30upx auto 20upx auto;
	box-shadow: 0upx 5upx 20upx rgba(0,0,0,0.1);
	border-radius: 20upx;
	display: flex;
	.icon{
		width: 80upx;
		height: 80upx;
		display: flex;
		align-items: center;
		image{
			width: 60upx;
			height: 60upx;
		}
	}
	.tel-name{
		width: 100%;
		display: flex;
		font-size: 32upx;
		.tel{
			margin-left: 40upx;
		}
	}
	.addres{
		width: 100%;
		font-size: 26upx;
		color: #999;
	}
}
.buy-list{
	width: 86%;
	padding: 10upx 3%;
	margin: 30upx auto 20upx auto;
	box-shadow: 0upx 5upx 20upx rgba(0,0,0,0.1);
	border-radius: 20upx;
	.row{
		margin: 30upx 0;
		.goods-info{
			width: 100%;
			display: flex;
			.img{
				width: 22vw;
				height: 22vw;
				border-radius: 10upx;
				overflow: hidden;
				flex-shrink: 0;
				margin-right: 10upx;
				image{
					width: 22vw;
					height: 22vw;
				}
			}
			.info{
				width: 100%;
				height: 22vw;
				overflow: hidden;
				display: flex;
				flex-wrap: wrap;
				position: relative;
				.title{
					width: 100%;
					font-size: 28upx;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					// text-align: justify;
					overflow: hidden;
				}
				.spec{
					font-size: 22upx;
					background-color: #f3f3f3;
					color: #a7a7a7;
					height: 40upx;
					display: flex;
					align-items: center;
					padding: 0 10upx;
					border-radius: 20upx;
					margin-bottom: 20vw;
				}
				.price-number{
					position: absolute;
					width: 100%;
					bottom: 0upx;
					display: flex;
					justify-content: space-between;
					align-items: flex-end;
					font-size: 28upx;
					height: 40upx;
					.price{
						color: #599F6F;
					}
					.number{
						display: flex;
						justify-content: center;
						align-items: center;
						
					}
				}
			}
		}
	}
}
.order{
	width: 86%;
	padding: 10upx 3%;
	margin: 30upx auto 20upx auto;
	box-shadow: 0upx 5upx 20upx rgba(0,0,0,0.1);
	border-radius: 20upx;
	.row{
		margin: 20upx 0;
		height: 40upx;
		display: flex;
		.left{
			font-size: 28upx;
		}
		.right{
			margin-left: 40upx;
			font-size: 26upx;
			color: #999;
			input{
				font-size: 26upx;
				color: #999;
			}
		}
	}
}
.blck{
	width: 100%;
	height: 100upx;
}
.footer{
		width: 92%;
		padding: 0 4%;
		background-color: #fbfbfb;
		height: 100upx;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		font-size: 28upx;
		position: fixed;
		bottom: 0upx;
		z-index: 5;
		
		.settlement{
			width: 80%;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			.sum{
				width: 50%;
				font-size: 28upx;
				margin-right: 10upx;
				display: flex;
				justify-content: flex-end;
				.money{
					font-weight: 600;
				}
			}
			.btn{
				padding: 0 30upx;
				height: 60upx;
				background-color: #599F6F;
				color: #fff;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 30upx;
				border-radius: 40upx;
			}
		}
	}
.detail{
	width: 86%;
	padding: 10upx 3%;
	margin: 30upx auto 20upx auto;
	box-shadow: 0upx 5upx 20upx rgba(0,0,0,0.1);
	border-radius: 20upx;
	.row{
		height: 60upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.nominal{
			font-size: 28upx;
		}
		.content{
			font-size: 26upx;
			color: #599F6F;
		}
	}
}
</style>
