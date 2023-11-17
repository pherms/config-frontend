<template>
    <h1>Header</h1>
    <ul>
        <link-button><router-link to="/login">Login</router-link></link-button>
        <link-button><router-link to="/register">Registreer</router-link></link-button>
        <link-button><router-link to="/config">Configuratie</router-link></link-button>
    </ul>
</template>
<script>
import LinkButton from '../ui/LinkButton.vue';

export default {
    setup() {
        
    },
    components: {
        LinkButton
    }
}
</script>
<style scoped>
ul {
  display: flex;
  gap: 1rem;
  justify-content: end;
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>