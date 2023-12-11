import { createStore } from 'vuex';

import userModule from './modules/user/index.js';
import requestModule from './modules/requests/index.js'

const store = createStore({
    modules: {
        users: userModule,
        requests: requestModule
    },
    // debug: true,
    // state() {
    //     return {
    //         user: {
    //             name: '',
    //             emailAddress: '',
    //             accessToken: '',
    //             loggedInStatus: false,
    //             showModal: false,
    //         }
    //     }
    // },
    // getters: {
    //     getLoggedInStatus(state) {
    //         return state.user.loggedInStatus;
    //     },
    //     getShowModalStatus(state) {
    //         return state.user.showModal;
    //     },
    //     getUserData(state) {
    //         return state.user;
    //     },
    //     getUserAuthKey(state) {
    //         return state.user.accessToken;
    //     }
    // },
    // mutations: {
    //     addAccessToken: function(state, webToken){
    //         state.user.accessToken = webToken;
    //     },
    //     removeAccessToken: function(state) {
    //         state.user.accessToken = '';
    //     },
    //     storeUserData: function(state, data) {
    //         state.user.name = data.user.name;
    //         state.user.accessToken = data.accessToken;
    //         state.user.emailAddress = data.user.emailAddress;
    //     },
    //     removeUserData: function(state) {
    //         state.user.name = '';
    //         state.user.accessToken = '';
    //         state.user.emailAddress = '';
    //     },
    //     setLoggedInStatus: function(state, loggedIn) {
    //         state.user.loggedInStatus = loggedIn
    //     },
    //     toggleShowModalStatus: function(state, status) {
    //         state.user.showModal = status;
    //     },
    // }
});

export default store;