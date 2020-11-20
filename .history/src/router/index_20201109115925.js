import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout/Layout.vue'

Vue.use(VueRouter)

const routes = [{
        path: '',
        name: 'Layout',
        component: Layout,
        children: [{
            path: '/',
            name: "index",
            component: () =>
                import ('../views/layout/index/Index'),
        }]
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router