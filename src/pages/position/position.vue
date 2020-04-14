<template>
	<view class="content">
		<view class="operate">
			<button type="default" @tap="userPosition(1)">我的</button>
			<button type="default" @tap="userPosition(2)">漫游</button>
			<button type="default" @tap="openSet">打开授权</button>
		</view>
		<view class="pos" v-if="pos">
			<view>您当前所在的位置：</view>
			<view>当前位置的经度:{{ pos.longitude }}</view>
			<view>当前位置的纬度:{{ pos.latitude }}</view>
		</view>

		<view class="pos" v-if="selPos">
			<view>您当前选择的位置：</view>
			<view>位置名称:{{ selPos.name }}</view>
			<view>详细地址:{{ selPos.address }}</view>
			<view>当前位置的经度:{{ selPos.longitude }}</view>
			<view>当前位置的纬度:{{ selPos.latitude }}</view>
		</view>
		<view class="item"></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			pos: null,
			selPos: null
		};
	},
	onLoad() {
	},
	onShow(){
		this.checkAouth()
	},
	onReady(){
		this.userPosition(1);
	},
	methods: {
		// 判断现在的权限信息
		checkAouth() {
			let _this = this
			uni.authorize({
				scope: 'scope.userLocation',
				success(res) {
					console.log('res1',res)
				},
				fail() {
					uni.showModal({
					    title: '提示',
					    content: '该应用需要获取您的位置信息',
					    success: function (res) {
					        if (res.confirm) {
					            _this.openSet()
					        }
					    }
					});
				}
			});
		},
		openSet(){
			uni.openSetting({
			  success(res) {
			    console.log("获取设置信息：",res)
			  }
			});
		},
		// 获取定位
		userPosition(type) {
			
			if (type == 1) {
				uni.getLocation({
					type: 'wgs84',
					success: res => {
						this.pos = res;
						this.getLiveList(res);
					},
					fail(err) {
						console.log('定位失败：', err);
					}
				});
			} else {
				uni.chooseLocation({
					success: res => {
						this.selPos = res;
						this.getLiveList(res);
					}
				});
			}
		},
		getLiveList(pos) {
			console.log('pos==>', pos);
		}
	}
};
</script>

<style lang="scss" scoped>
.operate {
	display: flex;
	justify-content: space-around;
}
.pos {
	margin-top: 20rpx;
	view {
		margin-top: 5rpx;
	}
}
</style>
