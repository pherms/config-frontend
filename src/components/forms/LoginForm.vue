<template>
    <div class="config-form-fields" v-if="!isLoggedIn">
        <label for="emailAddress" class="config-form-label w-fit">Email:</label>
        <input type="email" name="emailAddress" id="emailAddress" v-model="emailAddress">
        <label for="password">Password:</label>
        <input type="password" name="password" id="password" v-model="password">
    </div>
    <div v-if="isLoggedIn">
      <p>Email: {{ emailAddress }} Naam: {{ fullName }}</p>
    </div>
    <base-button @click="authenticate">{{ loginButtonText }}</base-button>

    <div v-if="accessToken">
      <h5 id="accessToken">{{ accessToken }}</h5>
    </div>
    <div v-if="error" class="error">
      <h5 id="error">{{ error }}</h5>
    </div>
</template>
<script>
import BaseButton from '../ui/BaseButton.vue';
import axios from "axios";

export default {
    setup() {

    },
    data() {
      return {
        emailAddress: "",
        fullName: "",
        password: "",
        error: "",
        accessToken: null,
        isLoggedIn: false,
        loginButtonText: 'Login',
      };
    },
    computed: {
      didLogin() {
        return this.$store.getters.getLoggedInStatus;
      }
    },
    watch: {
      didLogin(value) {
        if (value) {
          const userData = this.$store.getters.getUserData;
          console.log(userData)
          this.isLoggedIn = userData.loggedInStatus;
          this.emailAddress = userData.emailAddress;
          this.fullName = userData.name;
          this.accessToken = userData.accessToken;
          this.loginButtonText = 'Logout';
        } else {
          this.isLoggedIn = false;
          this.loginButtonText = 'Login';
        }
      }
    },
    components: {
      BaseButton,
    },
    methods: {
        authenticate() {
          const loggedInState = this.$store.getters.getLoggedInStatus;

          if (loggedInState) {
            this.logout();
          } else {
            this.login();
          }
        },
        async login() {
          try {
            const response = await axios.post('http://127.0.0.1:8081/api/v1/auth', {
              emailAddress: this.emailAddress,
              password: this.password,
            });

            const data = response.data;
            const loggedIn = true;

            console.log(data);

            this.$store.commit('storeUserData', data);
            this.$store.commit('setLoggedInStatus', loggedIn);
            
          } catch(err) {
            this.error = err.message;
          }
        },
        logout() {
          const loggedIn = false;
          this.accessToken = '';
          this.$store.commit('removeUserData');
          this.$store.commit('setLoggedInStatus', loggedIn);
          this.$router.push('/');
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