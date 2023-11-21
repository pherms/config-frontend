<template>
    <div class="header">
    <h1>Header</h1>
    <ul v-if="!isLoggedIn">
        <router-link v-if="!isLoggedIn" to="/login"><link-button v-if="!isLoggedIn" >Login</link-button></router-link>
        <router-link v-if="!isLoggedIn" to="/register"><link-button v-if="!isLoggedIn">Registreer</link-button></router-link>

        
        <!-- <router-link to="/config"><link-button>Configuratie</link-button></router-link> -->
    </ul>
    <div class="loggedinarea">
        <div class="loggedindata">
            <p class="loggedindataitem">Pascal Herms</p>
            <p class="loggedindataitem">pherms@planet.be</p>
            <div class="loggedinbutton"><link-button @click="logout">Logout</link-button></div>
        </div>
    </div>
</div>
</template>
<script>
import LinkButton from '../ui/LinkButton.vue';

export default {
    setup() {
        
    },
    data() {
        return {
            name: '',
            emailAddress: ''
        }
    },
    components: {
        LinkButton
    },
    computed: {
        isLoggedIn() {
            return this.$store.getters.getLoggedInStatus;
        }
    },
    watch: {
        isLoggedIn(value) {
            if (value) {
                const userData = this.$store.getters.getUserData;
                this.name = userData.name;
                this.emailAddress = userData.emailAddress;
            }
        }
    },
    methods: {
        logout() {
            const loggedInState = false;
            this.$store.commit('removeUserData');
            this.$store.commit('setLoggedInStatus', loggedInState);
        }
    }
}
</script>
<style scoped>
.header {
    display: flex;
    justify-content: space-between;
}
ul {
  display: flex;
  gap: 1rem;
  justify-content: end;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.loggedinarea {
    display: flex;
    justify-content: end;
}
.loggedindata {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0.75rem;
    justify-content: right;
}

.loggedindataitem {
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    text-align: left;
}
</style>