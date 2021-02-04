console.log("当前运行环境：", process.env.NODE_ENV)
const staticConfig = {}
let Host = {}

if (process.env.NODE_ENV == "development") {
  Host = {
    baseUrl: "http://192.168.0.15",
  }
} else if (process.env.NODE_ENV == "production") {
  Host = {
    baseUrl: "http://192.168.0.15",
  }
}

export default { staticConfig, Host }
