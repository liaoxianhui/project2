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
            },
            {
                path: '/classify',
                name: "Classify",
                component: () =>
                    import ('../views/layout/classify/Classify'),
            },
            {
                path: '/shoppingcart',
                name: "ShoppingCart",
                component: () =>
                    import ('../views/layout/shoppingcart/ShoppingCart'),
            },
            {
                path: '/my',
                name: "My",
                component: () =>
                    import ('../views/layout/my/My'),
            },
        ]
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router