<template>
	<view class="content">
		<view v-if="userInfo" class="user-info">
			<image :src="userInfo.userInfo.avatarUrl" mode=""></image>
			<view class="info">
				<view class="name">
					<image :src="userInfo.userInfo.gender == 1?img.boy:img.girl"></image>
					<text>{{ userInfo.userInfo.nickName }}</text>
				</view>
				<view class="des">
					<image :src="img.pos" alt=""></image>
					<text>{{ userInfo.userInfo.country+"-"+ userInfo.userInfo.province+"-" + userInfo.userInfo.city }}</text>
				</view>
			</view>
		</view>
		
		<view class="btn-row">
			<button v-if="!hasLogin" type="primary" class="primary" @tap="bindLogin">登录</button>
			<button v-if="hasLogin" type="default" @tap="bindLogout">退出登录</button>
		</view>
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
	computed: {
		...mapState(['userInfo', 'hasLogin', 'forcedLogin'])
	},
	data(){
		return{
			img:{
				pos:require('@img/pos.png'),
				boy:require('@img/boy.png'),
				girl:require('@img/girl.png'),
			}
		}
	},
	methods: {
		...mapMutations(['logout']),
		bindLogin() {
			uni.navigateTo({
				url: '../login/login'
			});
		},
		bindLogout() {
			this.logout();
			/**
			 * 如果需要强制登录跳转回登录页面
			 */
			if (this.forcedLogin) {
				uni.reLaunch({
					url: '../login/login'
				});
			}
		}
	}
};
</script>

<style lang="scss" scoped>
	.user-info{
		display: flex;
		image{
			width: 180rpx;
			height: 180rpx;
			border-radius: 10rpx;
		}
		.info{
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			margin-left: 20rpx;
			image{
				width: 40rpx;
				height: 40rpx;
				margin-right: 5rpx;
			}
		}
		.name{
			display: flex;
			padding: 10rpx;
		}
		.des{
			padding: 10rpx;
			display: flex;
		}
	}
	
	
</style>
