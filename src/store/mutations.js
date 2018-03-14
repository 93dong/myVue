export default {
    editLoginName: state =>{
        state.loginName = "editName";
    },
    login:(state,account,passwd) =>{
        state.loginName = account;
        state.loginName = passwd;
        state.loginState = true;
    }

}