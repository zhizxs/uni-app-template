# uni-app 小程序

## 开始

### 启动 - 下载依赖
>```
>npm install
>```

### 运行

- 命令行运行

>```
>npm run serve
>```

- HbuilderX 运行

>将项目拖入[HbuilderX](http://www.dcloud.io/hbuilderx.html),直接运行即可

### 打包发布

- 命令行

```
npm run build
```
>**参照 package.json 文件修改参数，适应不同的平台**

- HbuilderX 工具

>发行 - 选择平台 


## 文件说明


## 注意事项
* 页面初始化完毕后马上跳转页面可能会失败，可以尝试延迟执行
* pages.json不支持scss， 原生导航栏和tabbar的动态修改只能使用js api
* App.vue 不编译页面，只做全局配置。仅支持 应用生命周期。不能写模板
* globalData 全局变量机制 全端通用 
	+ js中操作globalData的方式如下： getApp().globalData.text = 'test'
	+ 在应用onLaunch时，getApp对象还未获取，暂时可以使用this.$scope.globalData获取globalData。
	+ 如果需要把globalData的数据绑定到页面上，可在页面的onShow页面生命周期里进行变量重赋值。
* 微信小程序只支持单文件上传，传多个文件需要反复调用本API
* 小程序平台运行时，网络相关的 API 在使用前需要配置域名白名单


## 问题

1.头部颜色以及文字动态修改？
2.回弹区域添加内容？
3.使用webpack文件，配置所有的scss文件 注入指定的 a.scss文件？
4.拦截器配置？路由？接口？
