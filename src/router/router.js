import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

import app from '../App'
import mainNav from '../components/mainNav'

import Login from '../views/login/login'
import Logout from '../views/logout/logout'
import Register from '../views/register/register'
import Home from '../views/home/home'

Vue.use(Router);
var router = new Router({
    mode: 'history',
    routes:[
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/login',
            component: Login,
        },
        {
            path:'/logout',
            component: Logout,
        },
        {
            path:"/register",
            component: Register
        },
        {
            path:"/home",
            component: Home,
            meta:{
                login:true
            }
        }
    ]
});
router.beforeEach((to, from, next)=> {
    if (to.meta.login){
        /*检测登录状态*/
        let state = store.getters.getLoginState;
        if(!state){
            next({
                path:'/login'
            })
        }else{
            next();
        }
    }else{
        next();
        console.log("next");
    }
});
export default router




