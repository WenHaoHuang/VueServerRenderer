import Vue from 'vue'
import App from './App.vue'
import {createStore} from './store'
import {createRouter} from './router'
import {sync} from 'vuex-router-sync'

import titleMixin from './util/title'

Vue.mixin(titleMixin)

import {ajax} from './api'

Vue.prototype.$ajax = ajax

import filter from './filter'

Vue.use(filter)

export function createApp(ssrContext) {
    const store = createStore()
    const router = createRouter()

    sync(store, router)

    const app = new Vue({
        router,
        store,
        ssrContext,
        render: h => h(App)
    })

    return {app, router, store}
}
