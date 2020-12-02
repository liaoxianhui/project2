import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import api from './http/api'
import axios from 'axios'
import { Lazyload } from 'vant';
import { Toast } from 'vant';
import { PullRefresh } from 'vant';
import { AddressEdit } from 'vant';
import { Area } from 'vant';
import { Dialog } from 'vant';
import { Rate } from 'vant';
import { saveHistory } from './utils/index'
import { saveHistory1 } from './utils/index'


Vue.prototype.$saveHistory = saveHistory
Vue.prototype.$saveHistory1 = saveHistory1
Vue.use(Rate);
// 全局注册
Vue.use(Dialog);
Vue.use(Area);
Vue.use(AddressEdit);
Vue.use(PullRefresh);
Vue.prototype.$toast = Toast;
Vue.use(Lazyload);
Vue.prototype.$axios = axios
    // 把api挂载在this 
Vue.prototype.$api = api
Vue.config.productionTip = false
Vue.use(Vant);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')