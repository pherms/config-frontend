<template>
    <div class="login-form">
        <h2>Login</h2>
        <login-form @login-user="loginUser"></login-form>
    </div>
</template>
<script>
import LoginForm from '../components/forms/LoginForm.vue';

export default {
    components: {
        LoginForm,
    },
    methods: {
        loginUser(data) {
            this.$store.dispatch('users/login', data);
            this.$router.replace('/config');
        }
    }
}
</script>
<style scoped>
.login-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 6rem auto;
}
</style>