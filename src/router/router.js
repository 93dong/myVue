import Vue from 'vue'
import Router from 'vue-router'

import app from '../App'
import mainNav from '../components/mainNav'
import Page1 from '../views/page1'
import Page2 from '../views/page2'
import Page3 from '../views/page3'

Vue.use(Router);
export default new Router({
    mode: 'history',
    routes:[
        {
            path:'/',
            redirect:'/page1'
        },
        {
            path:"/page1",
            component: Page1
        },
        {
            path:"/page2",
            component:Page2
        },
        {
            path:"/page3",
            component:Page3
        }
    ]
})


