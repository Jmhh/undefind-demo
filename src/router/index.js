import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
        path: '/index',
        name: 'index',
        component: () => import( /* webpackChunkName: "about" */ '../views/Index/index.vue')
    },
    {
        path: '/analysis',
        name: 'analysis',
        component: () => import( /* webpackChunkName: "about" */ '../views/analysis/index.vue')
    },
    {
        path: '/exam',
        name: 'exam',
        component: () => import( /* webpackChunkName: "about" */ '../views/exam/index.vue')
    },
    {
        path: '/class',
        name: 'class',
        component: () => import( /* webpackChunkName: "about" */ '../views/class/index.vue')
    },
    {
        path: '/',
        redirect: '/index'
    }
]

const router = new VueRouter({
    //mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router