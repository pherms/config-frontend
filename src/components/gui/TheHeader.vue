<template>
    <div class="header">
        <h1>Header</h1>
        <ul v-if="!isLoggedIn">
            <router-link v-if="!isLoggedIn" to="/login"><link-button v-if="!isLoggedIn" >Login</link-button></router-link>
            <router-link v-if="!isLoggedIn" to="/register"><link-button v-if="!isLoggedIn">Registreer</link-button></router-link>

            
            <!-- <router-link to="/config"><link-button>Configuratie</link-button></router-link> -->
        </ul>
        <p>{{  isLoggedIn }}</p>
        <div class="loggedinarea" v-if="isLoggedIn">
            <div class="loggedindata">
                <p class="loggedindataitem">{{ fullName }}</p>
                <p class="loggedindataitem">{{ emailAddress }}</p>
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
            fullName: '',
            emailAddress: ''
        }
    },
    components: {
        LinkButton
    },
    computed: {
        isLoggedIn() {
            // return this.$store.getters.getLoggedInStatus;
            return this.$store.getters['users/isLoggedIn'];
        }
    },
    watch: {
        isLoggedIn(value) {
            if(value) {
                const user = this.$store.getters['users/userData'];
                this.fullName = user.fullName;
                this.emailAddress = user.emailAddress;
                console.log(user);
            } else {
                this.fullName = '';
                this.emailAddress = '';
            }
        }
    },
    methods: {
        logout() {
            const loggedInState = this.isLoggedIn;
            this.$store.dispatch('users/logout', loggedInState);
            this.$router.push('/');
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