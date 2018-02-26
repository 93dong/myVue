import Vue from 'vue'
import Router from 'vue-router'

import mainNav from '../components/mainNav'
import Page1 from '../views/page1'
import Page2 from '../views/page2'
import Page3 from '../views/page3'

Vue.use(Router)
export default new Router({
    mode: 'history',
    routes:[
        {
            path: '/',
            redirect: '/page1'
        },
        {
            path:"/page1",
            compontent:mainNav
        },
        {
            path:"/page2",
            compontent:{template:'<div>123</div>'}
        },
        {
            path:"/page3",
            compontent:Page3
        }
    ]
})


