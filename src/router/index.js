import Vue from 'vue'
import Router from 'vue-router'

const routes = [{
    path: '/',
    name: 'index',
    component: resolve => require(['../views/index.vue'], resolve),
    meta: {
        title: '首页'
    }
}, {
    path: '/detail/:id',
    name: 'detail',
    component: resolve => require(['../views/detail.vue'], resolve),
    meta: {
        title: '详情'
    }
}, {
    path: '*',
    name: 'notFound',
    component: resolve => require(['../views/Error404.vue'], resolve),
    meta: {
        title: '404'
    }
}]

Vue.use(Router)

export function createRouter() {
    return new Router({
        mode: 'history',
        fallback: false,
        scrollBehavior: () => ({y: 0}),
        routes: routes
    })
}
