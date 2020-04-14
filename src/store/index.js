import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		/**
		 * 是否需要强制登录
		 */
		forcedLogin: false,
		userName: "",
		hasLogin: false, // 是否登录
		openid: null,
		userInfo: null, // 用户的信息
		provider: ''
	},
	mutations: {
		login(state) {
			state.hasLogin = true;
		},
		logout(state) {
			state.hasLogin = false
			state.openid = null
			state.userInfo = null
		},
		setProvider(state, provider) {
			state.provider = provider
		},
		setOpenid(state, openid) {
			state.openid = openid
		},
		setUserInfo(state, userInfo) {
			state.userInfo = userInfo
		}
	},
	actions: {
		getProvider({
			commit,
			state
		}) {
			return new Promise((res, req) => {
				if (state.provider) {
					res(state.provider)
				} else {
					uni.getProvider({
						service: 'oauth',
						success: function(info) {
							const {errMsg , provider } = info
							if(errMsg === 'getProvider:ok') {
								commit('setProvider',provider[0])
								res(provider[0])
							}else {
								req(errMsg)
							}
						}
					})
				}
			})
		},
		userLogin({
			commit,
			state
		}) { // 登录获取openId
			const {
				provider
			} = state
			return new Promise((res, rej) => {
				if (!provider) {
					rej()
					return
				}
				uni.login({
					provider,
					success(data) {
						if (data.errMsg == 'login:ok') {
							const openid = data.code
							commit('login')
							commit('setOpenid', openid)
							res(openid)
						}
					},
					fail: (err) => {
						console.log('uni.login 接口调用失败，将无法正常使用开放接口等服务', err)
						rej(err)
					}
				})
			})
		},
		getUserInfo({ // 获取用户的信息
			state,
			commit
		}) {
			return new Promise((res, rej) => {
				const {
					provider
				} = state
				if (state.userInfo === null) {
					uni.getUserInfo({
						provider,
						success(userInfo) {
							commit('setUserInfo', userInfo)
							console.log('setUserInfo', userInfo)
							res(userInfo)
						}
					});
				} else {
					res(state.userInfo)
				}
			})

		},
	}
})

export default store
