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
            path:'',
            component:app,
            children:[
                {
                    path:"/page1",
                    compontent: Page1
                },
                {
                    path:"/page2",
                    compontent:Page2
                },
                {
                    path:"/page3",
                    compontent:Page3
                }
            ]
        }
    ]
})


