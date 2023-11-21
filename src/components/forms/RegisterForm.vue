<template>
  <alert-modal v-if="showModal" @close="closeModal">
    <p class="error" v-if="error">{{ error }}</p>
    <p class="success" v-if="success">{{ success }}</p>
  </alert-modal>
  <form class="register-form-fields" @submit.prevent="register">
      <label for="firstName" class="register-form-label w-fit">Voornaam:</label>
      <input type="text" name="firstName" id="firstName" v-model.trim="firstName.val" @blur="clearValidity('firstName')">
      <p class="error" v-if="!firstName.isValid">Voornaam mag niet leeg zijn</p>

      <label for="lastName" class="register-form-label w-fit">Achternaam:</label>
      <input type="text" name="lastName" id="lastName" v-model.trim="lastName.val" @blur="clearValidity('lastName')">
      <p class="error" v-if="!lastName.isValid">Achternaam mag niet leeg zijn</p>

      <label for="emailAddress" class="register-form-label w-fit">Email:</label>
      <input type="email" name="emailAddress" id="emailAddress" v-model.trim="emailAddress.val" @blur="clearValidity('emailAddress')">
      <p class="error" v-if="!emailAddress.isValid">Geen email adres ingevuld of email adres is leeg</p>

      <label for="password" class="register-form-label w-fit">Password:</label>
      <input type="password" name="password" id="password" v-model.trim="password.val" @blur="clearValidity('password')">
      <p class="error" v-if="!password.isValid">Wachtwoord is niet ingevuld</p>
      <p class="error" v-if="!passwordsDoMatch.isValid">Wachtwoord zijn niet gelijk</p>

      <label for="passwordRepeat" class="register-form-label w-fit">Herhaal password:</label>
      <input type="password" name="passwordRepeat" id="passwordRepeat" v-model.trim="passwordRepeat.val" @blur="clearValidity('passwordRepeat')">
      <p class="error" v-if="!password.isValid">Herhaal wachtwoord is niet ingevuld</p>

      <div class="register-form-buttons">
        <base-button @click="register">Registreer</base-button>
        <router-link to="/"><link-button>Terug</link-button></router-link>
      </div>
    </form>
    <p>Temp overzicht waarden</p>
    <p>First Name: {{ firstName }}</p>
    <p>Last Name: {{ lastName }}</p>
    <p>Email adres: {{ emailAddress }}</p>
    <p>error: {{ error }}</p>
    <p>Succes: {{ success }}</p>
    <p>Passwords match: {{ passwordsDoMatch }}</p>
    <p>Show Modal: {{ showModal }}</p>
</template>
<script>
import BaseButton from '../ui/BaseButton.vue';
import LinkButton from '../ui/LinkButton.vue';
import AlertModal from '../gui/AlertModal.vue';

import axios from 'axios';

export default {
    setup() {
        
    },
    data() {
        return {
            firstName: {
              val: '',
              isValid: true
            },
            lastName: {
              val: '',
              isValid: true
            },
            emailAddress: {
              val: '',
              isValid: true
            },
            password: {
              val: '',
              isValid: true
            },
            passwordRepeat: {
              val: '',
              isValid: true
            },
            error: '',
            success: '',
            passwordsDoMatch: false,
            showModal: false,
        }
    },
    methods: {
      clearValidity(input) {
        this[input].isValid = true;
      },
      validateForm() {
        this.formIsValid = true;
        if (this.firstName.val === '') {
          this.firstName.isValid = false;
          this.formIsValid = false;
        }
        if (this.lastName.val === '') {
          this.lastName.isValid = false;
          this.formIsValid = false;  
        }
        if (this.emailAddress.val === '') {
          this.emailAddress.isValid = false;
          this.formIsValid = false;
        }
        if (this.password.val === '' ) {
          this.password.isValid =  false;
          this.formIsValid = false;
        }
        if (this.passwordRepeat.val === '') {
          this.passwordRepeat.isValid = false;
          this.formIsValid = false;
        }
        if (this.password === '' && this.passwordRepeat === '') {
          this.passwwordsDoMatch = true;
          this.formIsValid = false;
        }
        if (this.password === this.passwordRepeat) {
          this.passwordsDoMatch = true;
          this.formIsValid = false;
        }
      },
      async register() {
        this.validateForm();

        if (!this.formIsValid) {
          return;
        }

        const formData = {
          firstName: this.firstName.val,
          lastName: this.lastName.val,
          emailAddress: this.emailAddress.val,
          password: this.password.val,
        };

        try {
          const response = await axios.post('http://127.0.0.1:8081/api/v1/users', formData);
          console.log(response);
          if (response.status === 201) {
            this.success = 'Gebruikers account is aangemaakt'
          }
        } catch (error) {
          this.error = error.message;
        }

        this.showModal = true;

      },
      closeModal() {
        this.showModal = false;
      }
    },
    components: {
        BaseButton,
        LinkButton,
        AlertModal
    }
}
</script>
<style scoped>
.input-border {
  border-color: rgb(30 41 59/0,8);
  border: solid 1px;
  border-radius: 5px;
  padding: 0.25rem;
}

.register-form-input {
  position: relative;
  width: 20rem;
}

.register-form-fields {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 1rem;
  width: 30rem;
}

.register-form-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 3rem;
}

.register-form-label {
  position: relative;
  margin-bottom: .25rem;
  margin-top: 1rem;
}

.w-fit {
  width: -moz-fit-content;
  width: fit-content;
}

.error {
  color: red;
}
.success {
  color: green;
  font-size: medium;
}
</style>