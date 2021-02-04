// 公共服务 - 关于用户
const USERS_KEY = "USERS_KEY"
const STATE_KEY = "STATE_KEY"
class userService {
  static getUsers() {
    let ret = ""
    ret = uni.getStorageSync(USERS_KEY)
    if (!ret) {
      ret = "[]"
    }
    return JSON.parse(ret)
  }
  static getUsers() {
    let users = getUsers()
    users.push({
      account: userInfo.account,
      password: userInfo.password,
    })
    uni.setStorageSync(USERS_KEY, JSON.stringify(users))
  }
}

export default { userService }

// 使用
// import { userService } from "@/common/services/userService";
// userService.getUsers()
