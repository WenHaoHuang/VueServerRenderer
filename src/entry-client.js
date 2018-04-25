import Vue from 'vue'
import 'es6-promise/auto'
import {createApp} from "./main";

const {app, router, store} = createApp();

Vue.mixin({
    beforeRouteUpdate(to, from, next) {
        const {asyncDate} = this.$options;
        if (asyncDate) {
            asyncDate({
                store: this.$store,
                route: to
            }).then(next).catch(next)
        } else {
            next()
        }
    }
})


if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__)
}

router.onReady(() => {
    router.beforeResolve((to, from, next) => {
        const matched = router.getMatchedComponents(to)
        const prevMatched = router.getMatchedComponents(from)
        let diffed = false
        const activated = matched.filter((c, i) => {
            return diffed || (diffed = (prevMatched[i] != c))
        })
        const asyncDateHooks = activated.map(c => c.asyncData).filter(_ => _)
        if (!asyncDateHooks.length) {
            return next()
        }
        Promise.all(asyncDateHooks.map(hook => hook({store, route: to})))
            .then(() => {
                next()
            })
            .catch(next)
    })
    app.$mount('#app')
})

if ('https:' == location.protocol && navigator.serviceWorker) {
    navigator.serviceWorker.register('/service-worker.js')
}
