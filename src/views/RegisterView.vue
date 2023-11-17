<template>
    <div class="register-form">
        <h2>Registreer nieuwe gebruiker</h2>
        <register-form></register-form>
    </div>
</template>
<script>
import RegisterForm from '../components/forms/RegisterForm.vue';

export default {
    setup() {
        
    },
    components: {
        RegisterForm,
    }
}
</script>
<style scoped>
.register-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 6rem auto;
}
</style>