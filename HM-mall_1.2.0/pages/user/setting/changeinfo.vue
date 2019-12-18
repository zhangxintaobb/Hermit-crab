<template>
	<view>
		<view class="content">
			<view class="row">
				<view class="nominal">
					用户名
				</view>
				<view class="input">
					<input placeholder="请输入用户名" type="text" v-model="username" />
				</view>
			</view>
			<view class="row">
				<view class="nominal">
					电子邮箱
				</view>
				<view class="input">
					<input placeholder="请输入电子邮箱" type="text" v-model="email" />
				</view>
			</view>
			<view class="row">
				<view class="nominal">
					地址
				</view>
				<view class="input" @tap="chooseCity">
					{{region.label}}
				</view>
			</view>
			<view class="row">
				<view class="nominal">
					详细地址
				</view>
				<view class="input">
					<textarea v-model="detail_address" auto-height="true" placeholder="输入详细地址"></textarea>
				</view>
			</view>
		</view>
		<view class="save" @tap="save">
			<view class="btn">
				确认修改
			</view>
		</view>
		<mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker" :pickerValueDefault="cityPickerValue" @onCancel="onCancel" @onConfirm="onConfirm"></mpvue-city-picker>
	</view>
</template>

<script>
	import mpvueCityPicker from '@/components/mpvue-citypicker/mpvueCityPicker.vue'
	export default {
		components: {
			mpvueCityPicker
		},
		data() {
			return {
				user:{},
				editType:'edit',
				username:'',
				email:'',
				address:'',
				detail_address:'',
				isDefault:false,
				cityPickerValue: [0, 0, 1],
				themeColor: '#007AFF',
				region:{label:"请点击选择地址",value:[],cityCode:""}
			};
		},
		methods: {
			onCancel(e) {
				console.log(e)
			},
			chooseCity() {
				this.$refs.mpvueCityPicker.show()
			},
			onConfirm(e) {
				this.region = e;
				this.cityPickerValue = e.value;
			},
			isDefaultChange(e){
				this.isDefault = e.detail.value;
			},
			
			save(){
				// let data={"username":this.username,"head":this.username.substr(0,1),"tel":this.tel,"address":{"region":this.region,"detailed":this.detailed},"isDefault":this.isDefault}
				// if(this.editType=='edit'){
				// 	data.id = this.id
				// }
				// if(!data.username){
				// 	uni.showToast({title:'请输入用户名',icon:'none'});
				// 	return ;
				// }
				// if(!data.tel){
				// 	uni.showToast({title:'请输入邮箱',icon:'none'});
				// 	return ;
				// }
				// if(!data.address.detailed){
				// 	uni.showToast({title:'请输入收件人详细地址',icon:'none'});
				// 	return ;
				// }
				// if(data.address.region.value.length==0){
				// 	uni.showToast({title:'请选择收件地址',icon:'none'});
				// 	return ;
				// }
				uni.showLoading({
					title:'正在提交'
				})
				//实际应用中请提交ajax,模板定时器模拟提交效果
				setTimeout(()=>{
					// uni.setStorage({
					// 	key:'saveAddress',
					// 	data:data,
					// 	success() {
					// 		uni.hideLoading();
					// 		uni.navigateBack();
					// 	}
					// })
					uni.request({
					    url: 'http://zy.eatclub.wang:3000/changeinfo?userid=' + this.user.userid,
					    method: 'GET',  
					    data: {
							username:this.username,
							email:this.email,
							address:this.region.label +"-"+ this.detail_address,
						},  
					    success: res => {
							uni.hideLoading();
							uni.navigateBack();
						},  
					    fail: () => {},  
					    complete: () => {}
					});
				},300)
				
				
			}
		},
		onLoad(e) {
			var user = {};
			uni.getStorage({
			    key: 'user',
			    success: function (res) {
					user = res.data[0];
			    }
			});
			this.user = user;
			
			//获取传递过来的参数
			this.editType = e.type;
			if(e.type=='edit'){
				uni.getStorage({
					key:'address',
					success: (e) => {
						this.id = e.data.id;
						this.name = e.data.name;
						this.tel = e.data.tel;
						this.detailed = e.data.address.detailed;
						this.isDefault = e.data.isDefault;
						this.cityPickerValue = e.data.address.region.value;
						this.region = e.data.address.region;
					}
				})
			}
			
		},
		onBackPress() {
			if (this.$refs.mpvueCityPicker.showPicker) {
				this.$refs.mpvueCityPicker.pickerCancel();
				return true;
			}
		},
		onUnload() {
			if (this.$refs.mpvueCityPicker.showPicker) {
				this.$refs.mpvueCityPicker.pickerCancel()
			}
		}
	};
</script>
<style lang="scss">

.save{
		view{
			display: flex;
		}
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 120upx;
		display: flex;
		justify-content: center;
		align-items: center;
		.btn{
			box-shadow: 0upx 5upx 10upx rgba(0,0,0,0.4);
			width: 70%;
			height: 80upx;
			border-radius: 80upx;
			background-color: #599F6F;
			color: #fff;
			justify-content: center;
			align-items: center;
			.icon{
				height: 80upx;
				color: #fff;
				font-size: 30upx;
				justify-content: center;
				align-items: center;
			}
			font-size: 30upx;
		}
	}
	.content{
		display: flex;
		flex-wrap: wrap;
		view{
			display: flex;
		}
		.row{
			width: 94%;
			
			margin: 0 3%;
			border-top: solid 1upx #eee;
			.nominal{
				width: 30%;
				height: 120upx;
				font-weight: 200;
				font-size: 30upx;
				align-items: center;
			}
			.input{
				width: 70%;
				padding: 20upx 0;
				align-items: center;
				font-size: 30upx;
				&.switch{
					justify-content: flex-end;
				}
				.textarea{
					margin: 20upx 0;
					min-height: 120upx;
				}
			}
			.del{
				width: 100%;
				height: 100upx;
				justify-content: center;
				align-items: center;
				font-size: 36upx;
				color: #599F6F;
				background-color: rgba(255,0,0,0.05);
				border-bottom: solid 1upx #eee;
			}
		}
	}
	
</style>
