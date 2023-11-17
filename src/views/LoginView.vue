<template>
    <div class="login-form">
        <h2>Login</h2>
        <login-form></login-form>
    </div>
</template>
<script>
import LoginForm from '../components/forms/LoginForm.vue';

export default {
    setup() {
        
    },
    components: {
        LoginForm,
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