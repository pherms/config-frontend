export default {
    setLoginData(state, payload) {
        console.log('Payload:');
        console.log(payload);
        console.log('End Payload');

        state.authKey = payload.authKey;
        state.fullName = payload.fullName;
        state.emailAddress = payload.emailAddress;
        state.loggedInState = payload.loggedInStatus;
    },
    setloggedInState(state,payload) {
        state.loggedInState = payload.value;
    },
    removeUserData(state) {
        state.authKey = '';
        state.fullName = '';
        state.emailAddress = '';
    }
};