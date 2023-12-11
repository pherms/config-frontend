export default {
    isLoggedIn(getters) {
        const user = getters;
        return user.loggedInState;
    },

    userData(getters) {
        const user = getters;
        return user;
    }
};