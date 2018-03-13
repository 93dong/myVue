import Vue from "vue"
import axios from 'axios'
import App from './App'
import router from './router/router.js'
import mock from './mock/mock'
import iView from 'iview'
import 'iview/dist/styles/iview.css';

Vue.use(iView);

new Vue({
    router,
}).$mount('#app');