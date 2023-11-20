import { createStore } from 'vuex';

const store = createStore({
    debug: true,
    state: {
        user: {
            name: '',
            emailAddress: '',
            accessToken: '',
            loggedInStatus: false,
        },
        modal: {
            showModal: false,
        }
    },
    getters: {
        getLoggedInStatus(state) {
            return state.user.loggedInStatus;
        },
        getShowModalStatus(state) {
            return state.modal.showModal;
        },
        getUserData(state) {
            return state.user;
        }
    },
    mutations: {
        addAccessToken: function(state, webToken){
            state.user.accessToken = webToken;
        },
        removeAccessToken: function(state) {
            state.user.accessToken = '';
        },
        storeUserData: function(state, data) {
            state.user.name = data.user.name;
            state.user.accessToken = data.accessToken;
            state.user.emailAddress = data.user.emailAddress;
        },
        removeUserData: function(state) {
            state.user.name = '';
            state.user.accessToken = '';
            state.user.emailAddress = '';
        },
        toggleLoggedInStatus: function(state) {
            state.user.loggedInStatus = !state.user.loggedInStatus
        },
        setLoggedInStatus: function(state, loggedIn) {
            state.user.loggedInStatus = loggedIn
        },
        toggleShowModalStatus: function(state) {
            state.modal.showModal = !state.modal.showModal;
        }
    },
})

export default store;