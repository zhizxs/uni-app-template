import Vue from "vue"
import App from "./App"
import Api from "./api"
import "./common/utils/filters.js"
import store from "./store"

Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.$Api = Api
App.mpType = "app"

const app = new Vue({
  store,
  ...App,
})
app.$mount()
