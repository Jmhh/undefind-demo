import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Element from "element-ui";
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/style/reset.scss'
import '@/assets/style/element-ui.scss'
import './mock/mock'
import http from './utils/request'

Vue.use(Element);
Vue.config.productionTip = false;
Vue.prototype.$http = http

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");