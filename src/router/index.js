import Vue from 'vue'
import vueRouter from 'vue-router'
import Layout from '@/layout'

// const originalPush = vueRouter.prototype.push

// vueRouter.prototype.push = function push(location) {

//     return originalPush.call(this, location).catch(err => err)

// }


Vue.use(vueRouter)

const routes = [{
        path: '/',
        component: Layout,
        hidden: true,
        children: [{
                path: 'index',
                name: 'index',
                component: () => import('../views/Index/index.vue')
            },
            {
                path: '/analysis',
                name: 'analysis',
                component: () => import('../views/analysis/index.vue')
            },
            {
                path: '/exam',
                name: 'exam',
                component: () => import('../views/exam/index.vue')
            },
            {
                path: '/class',
                name: 'class',
                component: () => import('../views/class/index.vue')
            }
        ]

    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login/index.vue')
    },
    {
        path: '/',
        redirect: '/index'
    }
]

const router = new vueRouter({
    //mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router