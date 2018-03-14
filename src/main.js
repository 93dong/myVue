import Vue from "vue"
import Vuex from "vuex"
import axios from 'axios'
import App from './App'
import router from './router/router.js'
import store from './store'
import mock from './mock/mock'
import iView from 'iview'
import 'iview/dist/styles/iview.css';

Vue.use(iView);
Vue.use(Vuex);

new Vue({
    router,
    store,
}).$mount('#app');

