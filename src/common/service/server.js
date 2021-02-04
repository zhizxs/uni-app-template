// 请求的封装
import Host from "@/config"
/**
 * 这是一个请求方法
 * @param  {string}  method 请求方式
 * @param  {string}  url    请求连接
 * @param  {object}  params 请求参数
 * @return {Promise}        返回 Promise
 */
const reqMethod = (method, url, data) => {
  url = Host.baseUrl + url
  let headers = {}
  if (typeof data === "string") {
    headers = {
      "Content-Type": "application/json;charset=UTF-8",
    }
  } else {
    headers = {
      "Content-Type": "application/x-www-form-urlencoded",
    }
  }
  return new Promise((resolve, reject) => {
    uni.request({
      url,
      method,
      data,
      header: headers || {},
      success(res) {
        resolve(res.data)
      },
      fail(err) {
        reject(err)
      },
      complete() {
        console.log("调用了")
      },
    })
  })
}
// 配合 uni.chooseImage 使用
const uploadFile = (url, option) => {
  let { file, filePath } = option
  file && delete option.file
  filePath && delete option.filePath
  let options = {
    filePath: filePath,
    file: file,
    formData: {
      ...defaultParam,
      ...option,
    },
  }
  return new Promise((resolve, reject) => {
    uni.uploadFile({
      ...options,
      name: "file",
      success: (res) => {
        resolve(res.data)
      },
      fail: (err) => {
        reject(err)
      },
    })
  })
}

export default { uploadFile, reqMethod }
