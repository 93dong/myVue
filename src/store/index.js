import vue from 'vue';
import Vuex from 'vuex';
import state from './state.js';
import getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';
import login from './modules/login';

vue.use(Vuex);

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {
        login
    }
});