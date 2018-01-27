import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import router from './router';
import fastclick from 'fastclick';
import VueLazyload from 'vue-lazyload';
import filter from './filter';
import notify from 'components/notice/index';

Vue.use(notify);

fastclick.attach(document.body);

Vue.config.productionTip = false;

Vue.use(VueRouter);

Vue.use(VueLazyload, {
    // loading:require('/static/img/icon/loading.png')
});

Vue.use(filter);

import VueAwesomeSwiper from 'vue-awesome-swiper';

Vue.use(VueAwesomeSwiper);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
})
