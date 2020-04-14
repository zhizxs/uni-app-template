<template>
	<view class="content">
		<!-- 直播列表 -->
		<view class="cont">
			<view class="title">热播中</view>
			<view class='item-content'>
				<view class="item"  v-for="(item,index) in curList" :key="index" @tap='jumpUrl(item)'>
					<img :src="item.img" alt="">
					<view class="info">
						<text>{{item.des+"-"+item.name}}</text>
						<text>999</text>
					</view>
				</view>
			</view>
		</view>
		
		<view  class="cont">
			<view class="title">精彩回放</view>
			<view class='item-content'>
				<view class="item"  v-for="(item,index) in lastList" :key="index" @tap='jumpUrl(item)'>
					<img :src="item.img" alt="">
					<view class="info">
						<text>{{item.des + " - " + item.name}}</text>
						<text>999</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'

	export default {
		computed: mapState(['forcedLogin', 'hasLogin', 'userName']),
		data(){
			return {
				curList:[{
					img:require('@img/pos.jpg'),
					icon:require('@img/icon.png'),
					des:'这是一个直播',
					id:'1',
					name:'狂徒张三',
					url:'rtmp://live.dejiplaza.com/live/test1?txSecret=459aca2d67a41ae4ad6b811139603df1&txTime=5EBBA5F6'
				},{
					img:require('@img/pos.jpg'),
					icon:require('@img/icon.png'),
					des:'这是一个直播',
					id:'2',
					name:'狂徒张三',
					url:'rtmp://live.dejiplaza.com/live/test1?txSecret=459aca2d67a41ae4ad6b811139603df1&txTime=5EBBA5F6'
				},{
					img:require('@img/pos.jpg'),
					icon:require('@img/icon.png'),
					des:'这是一个直播',
					id:'3',
					name:'狂徒张三',
					url:'rtmp://live.dejiplaza.com/live/test1?txSecret=459aca2d67a41ae4ad6b811139603df1&txTime=5EBBA5F6'
				},{
					img:require('@img/pos.jpg'),
					icon:require('@img/icon.png'),
					des:'这是一个直播',
					id:'4',
					name:'狂徒张三',
					url:'rtmp://live.dejiplaza.com/live/test1?txSecret=459aca2d67a41ae4ad6b811139603df1&txTime=5EBBA5F6'
				},{
					img:require('@img/pos.jpg'),
					icon:require('@img/icon.png'),
					des:'这是一个直播',
					id:'5',
					name:'狂徒张三',
					url:'rtmp://live.dejiplaza.com/live/test1?txSecret=459aca2d67a41ae4ad6b811139603df1&txTime=5EBBA5F6'
				},{
					img:require('@img/pos.jpg'),
					icon:require('@img/icon.png'),
					des:'这是一个直播',
					id:'6',
					name:'狂徒张三',
					url:'rtmp://live.dejiplaza.com/live/test1?txSecret=459aca2d67a41ae4ad6b811139603df1&txTime=5EBBA5F6'
				},{
					img:require('@img/pos.jpg'),
					icon:require('@img/icon.png'),
					des:'这是一个直播',
					id:'7',
					name:'狂徒张三',
					url:'rtmp://live.dejiplaza.com/live/test1?txSecret=459aca2d67a41ae4ad6b811139603df1&txTime=5EBBA5F6'
				},{
					img:require('@img/pos.jpg'),
					icon:require('@img/icon.png'),
					des:'这是一个直播',
					id:'8',
					name:'狂徒张三',
					url:'rtmp://live.dejiplaza.com/live/test1?txSecret=459aca2d67a41ae4ad6b811139603df1&txTime=5EBBA5F6'
				},{
					img:require('@img/pos.jpg'),
					icon:require('@img/icon.png'),
					des:'这是一个直播',
					id:'9',
					name:'狂徒张三',
					url:'rtmp://live.dejiplaza.com/live/test1?txSecret=459aca2d67a41ae4ad6b811139603df1&txTime=5EBBA5F6'
				}],
				lastList:[{
					img:require('@img/pos.jpg'),
					icon:require('@img/icon.png'),
					des:'这是一个直播',
					id:'1',
					name:'狂徒张三',
					url:'rtmp://live.dejiplaza.com/live/test1?txSecret=459aca2d67a41ae4ad6b811139603df1&txTime=5EBBA5F6'
				},{
					img:require('@img/pos.jpg'),
					icon:require('@img/icon.png'),
					des:'这是一个直播',
					id:'2',
					name:'狂徒张三',
					url:'rtmp://live.dejiplaza.com/live/test1?txSecret=459aca2d67a41ae4ad6b811139603df1&txTime=5EBBA5F6'
				},{
					img:require('@img/pos.jpg'),
					icon:require('@img/icon.png'),
					des:'这是一个直播',
					id:'3',
					name:'狂徒张三',
					url:'rtmp://live.dejiplaza.com/live/test1?txSecret=459aca2d67a41ae4ad6b811139603df1&txTime=5EBBA5F6'
				},{
					img:require('@img/pos.jpg'),
					icon:require('@img/icon.png'),
					des:'这是一个直播',
					id:'4',
					name:'狂徒张三',
					url:'rtmp://live.dejiplaza.com/live/test1?txSecret=459aca2d67a41ae4ad6b811139603df1&txTime=5EBBA5F6'
				},{
					img:require('@img/pos.jpg'),
					icon:require('@img/icon.png'),
					des:'这是一个直播',
					id:'5',
					name:'狂徒张三',
					url:'rtmp://live.dejiplaza.com/live/test1?txSecret=459aca2d67a41ae4ad6b811139603df1&txTime=5EBBA5F6'
				},{
					img:require('@img/pos.jpg'),
					icon:require('@img/icon.png'),
					des:'这是一个直播',
					id:'6',
					name:'狂徒张三',
					url:'rtmp://live.dejiplaza.com/live/test1?txSecret=459aca2d67a41ae4ad6b811139603df1&txTime=5EBBA5F6'
				},{
					img:require('@img/pos.jpg'),
					icon:require('@img/icon.png'),
					des:'这是一个直播',
					id:'7',
					name:'狂徒张三',
					url:'rtmp://live.dejiplaza.com/live/test1?txSecret=459aca2d67a41ae4ad6b811139603df1&txTime=5EBBA5F6'
				},{
					img:require('@img/pos.jpg'),
					icon:require('@img/icon.png'),
					des:'这是一个直播',
					id:'8',
					name:'狂徒张三',
					url:'rtmp://live.dejiplaza.com/live/test1?txSecret=459aca2d67a41ae4ad6b811139603df1&txTime=5EBBA5F6'
				},{
					img:require('@img/pos.jpg'),
					icon:require('@img/icon.png'),
					des:'这是一个直播',
					id:'9',
					name:'狂徒张三',
					url:'rtmp://live.dejiplaza.com/live/test1?txSecret=459aca2d67a41ae4ad6b811139603df1&txTime=5EBBA5F6'
				}]
			}
		},
		onLoad() {
			this.getHistory()
			if (!this.hasLogin) {
				uni.showModal({
					title: '未登录',
					content: '您未登录，需要登录后才能继续',
					/**
					 * 如果需要强制登录，不显示取消按钮
					 */
					showCancel: !this.forcedLogin,
					success: (res) => {
						if (res.confirm) {
							/**
							 * 如果需要强制登录，使用reLaunch方式
							 */
							if (this.forcedLogin) {
								uni.reLaunch({
									url: '../login/login'
								});
							} else {
								uni.navigateTo({
									url: '../login/login'
								});
							}
						}
					}
				});
			}
		},
		methods:{
			jumpUrl(item) {
				uni.navigateTo({
					url: '../show/show?id='+item.id+"&url="+item.url,
				});
			},
			getShowList(){
				
			},
			async getHistory(){
				let param = {
					pageNum:1,
					pageSize:20
				}
				let info = await this.$Api.getLiveHistory(param)	
				console.log('info',info)
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.item-content{
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: space-around;
		&:after {
		  content: "";
		  width: 45%;
		}
	}
	.cont{
		margin-top: 20rpx;
	}
	.item{
		width: 45%;
		flex-grow: 0;
		display: inline-block;
		position: relative;
		margin-top: 35rpx;
		img{
			width: 320rpx;
			height: 220rpx;
			border-radius: 10rpx;
		}
	}
	.info{
		position: absolute;
		z-index: 9;
		bottom: 10rpx;
		color: #fff;
		font-size: 20rpx;
	}

</style>
