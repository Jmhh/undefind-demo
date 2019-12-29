import Vue from 'vue'
import vueRouter from 'vue-router'
import Layout from '@/layout'
import store from '@/store'

// const originalPush = vueRouter.prototype.push

// vueRouter.prototype.push = function push(location) {

//     return originalPush.call(this, location).catch(err => err)

// }

Vue.use(vueRouter)

export const constantRoutes = [{
        path: '/',
        name: 'Home',
        component: Layout,
        meta: {
            title: '首页'
        },
        redirect: '/index',
        children: [{
            path: 'index',
            name: 'index',
            meta: {
                title: '首页'
            },
            id: 1,
            icon: 'icondaohang-shouye-copy',
            component: () => import('../views/Index/index.vue')
        }]
    },
    {
        path: '/login',
        name: 'login',
        hidden: true,
        meta: {
            title: '登录页'
        },
        component: () => import('../views/login/index.vue')
    },
    {
        path: '/',
        meta: {
            title: '首页'
        },
        hidden: true,
        redirect: '/index'
    }
]

export const asyncRoutes = [{
        path: '/analysis',
        name: 'analysis',
        meta: {
            title: '分析'
        },
        id: 2,
        icon: 'iconfenxi1',
        component: Layout,
        redirect: '/analysis/main',
        children: [{
                path: 'main',
                name: 'analysis-main',
                meta: {
                    title: '分析首页'
                },
                id: 21,
                component: () => import('../views/analysis/index.vue'),
            },
            {
                path: 'class',
                name: 'analysis-class',
                meta: {
                    title: '分析班级'
                },
                id: 22,
                component: () => import('../views/analysis/index.vue'),
            }
        ]
    },
    {
        path: '/exam',
        name: 'exam',
        meta: {
            title: '测试'
        },
        id: 3,
        icon: 'iconceshi4',
        component: Layout,
        redirect: '/exam/exam__index',
        children: [{
            path: 'exam_index',
            name: 'exam_index',
            meta: {
                title: '测试首页'
            },
            id: 31,
            component: () => import('../views/exam/index.vue'),
        }]

    },
    {
        path: '/class',
        name: 'class',
        meta: {
            title: '班级'
        },
        id: 4,
        icon: 'iconceshi4',
        component: Layout,
        redirect: '/class/class_index',
        children: [{
            path: 'class_index',
            name: 'class_index',
            meta: {
                title: '班级首页'
            },
            id: 41,
            component: () => import('../views/class/index.vue')
        }]

    }
]

const createRouter = () => new vueRouter({
    scrollBehavior: () => ({
        y: 0
    }),
    base: process.env.BASE_URL,
    routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

//导航守卫
router.beforeEach(async (to, from, next) => {
    document.title = to.meta.title
    let token = window.localStorage.getItem('token')
    if (to.path === '/login') {
        next()
    } else {
        if (token) {
            const hasRoles = store.state.app.meuns
            if (hasRoles) {
                next()
            } else {
                try {
                    const {
                        ids
                    } = await store.dispatch('getRoles')
                    const addRoutes = await store.dispatch(
                        'getAsyncRoutes',
                        ids
                    )
                    console.log(addRoutes)
                    router.addRoutes(addRoutes)
                    next({
                        ...to,
                        replace: true
                    })
                } catch (error) {
                    console.log(error)
                }
            }
        } else {
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            })
        }
    }
})

export default router