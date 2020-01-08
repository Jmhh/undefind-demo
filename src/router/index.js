import Vue from "vue";
import vueRouter from "vue-router";
import Layout from "@/layout";
import store from "@/store";

// const originalPush = vueRouter.prototype.push

// vueRouter.prototype.push = function push(location) {

//     return originalPush.call(this, location).catch(err => err)

// }

Vue.use(vueRouter);

export const constantRoutes = [

    {
        path: "/login",
        name: "login",
        hidden: true,
        icon: "icondaohang-shouye-copy",
        meta: {
            title: "登录页"
        },
        component: () => import("../views/login/index.vue")
    }
];

export const asyncRoutes = [{
        path: "/",
        name: "Home",
        component: Layout,
        meta: {
            title: "首页"
        },
        id: 1,
        redirect: "/index",
        icon: "icondaohang-shouye-copy",
        children: [{
            path: "index",
            name: "index",
            meta: {
                title: "个人空间"
            },
            id: 11,
            component: () => import("../views/Index/index.vue")
        }]
    }, {
        path: "/planRecord",
        name: "planRecord",
        meta: {
            title: "计划填报"
        },
        id: 2,
        icon: "iconfenxi1",
        component: Layout,
        redirect: "/planRecord/thisWeek",
        children: [{
                path: "thisWeek",
                name: "thisWeek",
                meta: {
                    title: "本周计划"
                },
                id: 21,
                component: () => import("../components/RouterView.vue"),
                redirect: "/planRecord/thisWeek/planEdit",
                children: [{
                        path: "planEdit",
                        name: "planEdit",
                        meta: {
                            title: "本周计划编辑"
                        },
                        id: 211,
                        component: () => import("../views/grade/index.vue")
                    },
                    {
                        path: "planPreview",
                        name: "planPreview",
                        meta: {
                            title: "本周历史计划查看"
                        },
                        id: 212,
                        component: () => import("../views/class/index.vue")
                    }
                ]
            },
            {
                path: "nextWeek",
                name: "nextWeek",
                meta: {
                    title: "下周计划"
                },
                id: 22,
                component: () => import("../components/RouterView.vue"),
                redirect: "/planRecord/nextWeek/planEdit",
                children: [{
                        path: "planEdit",
                        name: "planEdit",
                        meta: {
                            title: "下周计划编辑"
                        },
                        id: 221,
                        component: () => import("../views/grade/index.vue")
                    },
                    {
                        path: "planPreview",
                        name: "planPreview",
                        meta: {
                            title: "下周历史计划查看"
                        },
                        id: 222,
                        component: () => import("../views/class/index.vue")
                    }
                ]
            },
        ]
    },
    {
        path: "/exam",
        name: "exam",
        meta: {
            title: "测试"
        },
        id: 3,
        icon: "iconceshi4",
        component: Layout,
        redirect: "/exam/exam_index",
        children: [{
            path: "exam_index",
            name: "exam_index",
            meta: {
                title: "测试首页"
            },
            id: 31,
            component: () => import("../views/exam/index.vue")
        }]
    },
    {
        path: "/class",
        name: "class",
        meta: {
            title: "班级"
        },
        id: 4,
        icon: "iconceshi4",
        component: Layout,
        redirect: "/class/class_index",
        children: [{
            path: "class_index",
            name: "class_index",
            meta: {
                title: "班级首页"
            },
            id: 41,
            component: () => import("../views/class/index.vue")
        }]
    },
    {
        path: "/grade",
        name: "grade",
        meta: {
            title: "年级"
        },
        id: 5,
        icon: "iconceshi4",
        component: Layout,
        redirect: "/grade/grade_index",
        children: [{
            path: "grade_index",
            name: "grade_index",
            meta: {
                title: "年级首页"
            },
            id: 51,
            component: () => import("../views/grade/index.vue")
        }]
    }
];

const createRouter = () =>
    new vueRouter({
        scrollBehavior: () => ({
            y: 0
        }),
        base: process.env.BASE_URL,
        routes: constantRoutes
    });

const router = createRouter();

export function resetRouter() {
    const newRouter = createRouter();
    router.matcher = newRouter.matcher; // reset router
}

//导航守卫
router.beforeEach(async (to, from, next) => {
    document.title = to.meta.title;
    let token = window.localStorage.getItem("token");
    if (to.path === "/login") {
        next();
    } else {
        if (token) {
            const hasRoles = store.state.app.meuns;
            if (hasRoles) {
                console.log(to.path)
                next();
            } else {
                try {
                    const {
                        ids
                    } = await store.dispatch("getRoles");
                    const addRoutes = await store.dispatch("getAsyncRoutes", ids);
                    console.log(addRoutes);
                    router.addRoutes(addRoutes);
                    next({
                        ...to,
                        replace: true
                    });
                } catch (error) {
                    console.log(error);
                }
            }
        } else {
            next({
                path: "/login",
                query: {
                    redirect: to.fullPath
                }
            });
        }
    }
});

export default router;