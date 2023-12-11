import { reactive, toRefs } from 'vue';

const state = reactive({
    loggedInState: false,
    authKey: ''
});

const setloggedInState = (loggedIn) => {
    state.loggedInState = loggedIn;
};

const setAuthKey = (accessToken) => {
    state.authKey = accessToken;
}

export default () => {
    return {
        ...toRefs(state),
        setloggedInState,
        setAuthKey
    };
}