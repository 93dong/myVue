/*
 * ajax
 * */
import axios from "axios"

const service = axios.create({
   baseUrl:"",
   method:"POST",
   timeout:3000,
   responseType:'json',
   headers:{
      'Content-Type':"application/json"
   }
});
//添加请求拦截器
service.interceptors.request.use(config => {
   // 在发送请求之前做些什么
   console.log("发送请求之前");
   return config
}, error => {
   // 对请求错误做些什么
   console.log("请求错误");
   return Promise.reject(error)
});

//添加响应拦截器
service.interceptors.response.use(response => {
   // 对响应数据做点什么
   console.log("响应成功");
   const rs = response.data;
   return response.data;
}, error => {
   // 对响应错误做点什么
   console.log("响应失败:"+ error);
   return Promise.reject(error)
});


export default {
   ajax:function(data){
      let config = data.config;
      service(config)
          .then(function(returnData){
               if(returnData.respCode == "0000"){
                  data.successF && data.successF(returnData);
                  console.log("success");
               }else{
                  data.failF && data.failF(returnData);
                  console.log("fail");
               }
      })
          .catch(function(err){
             data.errorF && data.errorF(err);
             console.log("error");
      });
   }
}