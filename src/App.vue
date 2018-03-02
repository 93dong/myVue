<template>
  <div id="app">
    <mainNav :main = "options.mainOptions"></mainNav>
    <router-view></router-view>
  </div>
</template>

<script>
import mainNav from './components/mainNav'
import axios from 'axios'
import AJAX from './ajax/ajax'
export default {
  name: 'app',
  data :function(){
    /*let data = {
      config:{
        url:"getMianData",
        method:"get"
      },
      successF:function(returnData){
        console.log("successF执行成功");
      },
      failF:function(returnData){
        console.log("fialF执行成功");
      },
      errorF:function(){
        console.log("errorF执行成功");
      }
    };
    AJAX.ajax(data);*/
    /*
    * options:{
     mainOptions:{
     navName:"vue测试系统",
     mainOperation:[
     {
     title:"邮箱",
     icon:"./assets/logo.png",
     page:"Page1"
     },
     {
     title:"任务",
     icon:"./assets/logo.png"
     },
     {
     title:"信息",
     icon:"./assets/logo.png"
     },
     {
     title:"用户",
     icon:"./assets/logo.png"
     }

     ]
     }
     }*/
    return {
      options:{
        mainOptions: {}
      }
    }
  },
  created:function(){
    var _this = this;
    let data = {
      config:{
        url:"getMianData",
        method:"get"
      },
      successF:function(returnData){
        console.log(_this.options);
        console.log(returnData)
        _this.options.mainOptions = returnData.data;

      },
      failF:function(returnData){
        console.log("fialF执行成功");
      },
      errorF:function(){
        console.log("errorF执行成功");
      }
    };
    AJAX.ajax(data);
  },
  components:{mainNav}
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}
body,p,ul{
  margin:0;
  padding:0;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
