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
    {
        path: '/layin',
        name: 'Layin',
        component: () =>
            import ('../views/layin/Layin.vue')
    },
    {
        path: '/collection',
        name: 'Collection',
        component: () =>
            import ('../views/collection/Collection.vue')
    },
    {
        path: '/browser',
        name: 'Browser',
        component: () =>
            import ('../views/browse/Browse.vue')
    },
    {
        path: '/order',
        name: 'Order',
        component: () =>
            import ('../views/order/Order')
    },
    {
        path: '/address',
        name: 'Address',
        component: () =>
            import ('../views/address/Address')
    },
    {
        path: '/addressincrease',
        name: 'AddressIncrease',
        component: () =>
            import ('../views/address/AddressIncrease.vue')
    },
    {
        path: '/addressadd',
        name: 'Addressadd',
        component: () =>
            import ('../views/address/Addressadd.vue')
    },
    {
        path: '/details',
        name: 'Details',
        component: () =>
            import ('../views/details/Details')
    },
    {
        path: '/position',
        name: 'Position',
        component: () =>
            import ('../views/position/Position')
    },
    {
        path: '/personal',
        name: 'Personal',
        component: () =>
            import ('../views/personal/Personal')
    },
    {
        path: '/settlement',
        name: 'Settlement',
        component: () =>
            import ('../views/settlement/Settlement')
    },
    {
        path: '/settlementnow',
        name: 'Settlementnow',
        component: () =>
            import ('../views/settlement/Settlementnow.vue')
    },
    {
        path: '/evaluate',
        name: 'Evaluate',
        component: () =>
            import ('../views/evaluate/Evaluate')
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router