<template>
  <form @submit.prevent="submitForm">
    <label for="emailAddress">Login:</label>
    <input type="email" name="emailAddress" id="emailAddress" v-model="emailAddress.val">
    <label for="password">Password</label>
    <input type="password" name="password" id="password" v-model="password.val">
    <base-button>Login</base-button>
  </form>
</template>
<script>
import BaseButton from '../ui/BaseButton.vue';

export default {
  components: {
    BaseButton
  },
  emits: ['login-user'],
  data() {
    return {
      emailAddress: {
        val: '',
        isValid: true
      },
      password: {
        val: '',
        isValid: true
      }
    };
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.emailAddress.val === '') {
        this.emailAddress.isValid = false;
        this.formIsValid = false;
      }
      if (this.password.val === '') {
        this.password.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      const formData = {
        emailAddress: this.emailAddress.val,
        password: this.password.val
      };

      this.$emit('login-user', formData);
    }
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


.config-form-col2 {
  grid-column-start: 2;
}

.config-form-input {
  position: relative;
  width: 20rem;
}

.login-form-fields {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 1rem;
  width: 30rem;
}

.login-form-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 3rem;
}

.login-form-label {
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
</style>

<!-- Hoe api calls uit te voeren in vue3: https://github.com/adam-cowley/twitch-project/tree/master -->