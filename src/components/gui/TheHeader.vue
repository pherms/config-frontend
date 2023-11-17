<template>
    <h1>Header</h1>
    <ul>
        <router-link to="/login"><link-button>Login</link-button></router-link>
        <router-link to="/register"><link-button>Registreer</link-button></router-link>
        <router-link to="/config"><link-button>Configuratie</link-button></router-link>
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