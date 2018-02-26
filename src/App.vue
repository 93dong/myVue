<template>
  <div id="app">
    <mainNav :main = "options.mainOptions"></mainNav>
    <router-link to="page1">测试</router-link>
    <router-view></router-view>
    <router-view></router-view>
    <router-view></router-view>

  </div>
</template>

<script>
import mainNav from './components/mainNav'
export default {
  name: 'app',
  data :function(){
    return {
      options:{
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
            }
    }
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
