<template>
    <div class="login">
        <Row type="flex" justify="end" align="middle" class="login-window">
            <Col span="12" class="login-div">
                <Row type="flex" justify="start" align="middle" class="login-100">
                    <Col span="14" class="login-form">
                        <div class="login-title">登录</div>
                        <div class="login">
                            <Tabs class="login-tap" value="loginAccount">
                                <TabPane label="账户登录" name="loginAccount">
                                    <Form ref="formCustom" :label-width="50">
                                        <FormItem label="帐户名">
                                            <Input type="text"></Input>
                                        </FormItem>
                                        <FormItem label="密码">
                                            <Input type="password"></Input>
                                        </FormItem>
                                        <FormItem>
                                            <Button type="info"  @click="submit('formCustom')">登录</Button>
                                        </FormItem>
                                    </Form>
                                </TabPane>
                                <TabPane label="第三方登录" name="loginThird">标签二的内容</TabPane>
                            </Tabs>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    </div>
</template>
<script>
    import CommonJs from '../../CommonJs/commonJS'
    import store from '../../store'
    export default {
        name:"Login",
        data:() => {
            console.log(this);
            return {};
        },
        methods:{
            submit:()=>{
                let _this = this;
                console.log(_this);
                console.log(_this.$router);
                console.log(_this.$stroe);
                let data = {
                    config:{
                        url:"login"
                    },
                    successF:function(returnData){

                        store.commit("login",store.state,"钮磊","Love950120");
                    },
                    failF:function(returnData){
                        console.log("fialF执行成功");
                    },
                    errorF:function(){
                        console.log("errorF执行成功");
                    }
                };
                CommonJs.ajax(data);
            }
        }
    }
</script>
<style lang="less">
    .login-window{
        background: url("../../assets/img/login/loginImg.jpg") no-repeat;
        background-size: cover;
        position: absolute;
        top:0;
        right:0;
        bottom:0;
        left:0;
    }
    .login-div{
        height:80%;
    }
    .login-100{
        height:100%;
    }
    .login-form{
        height:90%;
        border-radius: 2%;
        background: rgba(221,221,221,0.3);
    }
    .login-title{
        padding:2% 0;
        font-size: 3em;
        color: #fff;
        font-weight: bold;
        text-align: center;
    }
    .login{
        background: rgba(255,255,255,0.5);
        margin: 0 10%;
        height:70%;
        border-radius: 2%;
    }
    .login-tap{
        margin:5%;
    }
</style>