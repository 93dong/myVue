import Vue from 'vue'
import Router from 'vue-router'

import Page1 from '../views/page1'
import Page2 from '../views/page2'
import Page3 from '../views/page3'

Vue.use(Router);

export default new Router({
    /* 在创建的 router 对象中，如果不配置 mode，就会使用默认的 hash 模式，该模式下会将路径格式化为 #! 开头。
     添加 mode: 'history' 之后将使用 HTML5 history 模式，该模式下没有 # 前缀，而且可以使用 pushState 和 replaceState 来管理记录。*/
    mode: 'history',
    routes:[
        {
            path: '/',
            redirect: '/page1'
        },
        {
            path:"/page1",
            compontent:Page1
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
})