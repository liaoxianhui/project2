import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import api from './http/api'
import axios from 'axios'
import { Lazyload } from 'vant';
import { Notify } from 'vant';

Notify('通知内容');


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