<template>
    <div class="config-form-fields">
        <label for="firstName" class="config-form-label w-fit">Voornaam:</label>
        <input type="text" name="firstName" id="firstName" v-model="firstName">
        <label for="lastName" class="config-form-label w-fit">Achternaam:</label>
        <input type="text" name="lastName" id="lastName" v-model="lastName">
        <label for="emailAddress" class="config-form-label w-fit">Email:</label>
        <input type="email" name="emailAddress" id="emailAddress" v-model="emailAddress">
        <label for="password" class="config-form-label w-fit">Password:</label>
        <input type="password" name="password" id="password" v-model="password">
        <label for="passwordRepeat" class="config-form-label w-fit">Herhaal password:</label>
        <input type="passwordRepeat" name="passwordRepeat" id="passwordRepeat" v-model="passwordRepeat">
    </div>
    <base-button @click="register">Registreer</base-button>
</template>
<script>
import BaseButton from '../ui/BaseButton.vue';

export default {
    setup() {
        
    },
    data() {
        return {
            firstName: '',
            lastName: '',
            emailAddress: '',
            password: '',
            passwordRepeat: '',
        }
    },
    methods: {
        register() {

        }
    },
    components: {
        BaseButton
    }
}
</script>
<style>
.input-border {
  border-color: rgb(30 41 59/0,8);
  border: solid 1px;
  border-radius: 5px;
  padding: 0.25rem;
}
.config-form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.25rem;
}

.config-form-col2 {
  grid-column-start: 2;
}

.config-form-input {
  position: relative;
  width: 20rem;
}

.config-form-fields {
  display: flex;
  justify-content: space-between;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 1rem;
}

.config-form-label {
  position: relative;
}

.w-fit {
  width: -moz-fit-content;
  width: fit-content;
}

.error {
  color: red;
}
</style>