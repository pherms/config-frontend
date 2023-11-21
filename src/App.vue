<template>
  <the-header></the-header>
  <!-- <main-nav></main-nav>
  <main-content></main-content>
  <register-view></register-view>
  <login-view></login-view> -->
  <router-view/>
</template>
<script>
// import MainNav from './components/nav/MainNav.vue'
import TheHeader from './components/gui/TheHeader.vue'
// import MainContent from './components/gui/MainContent.vue'
// import RegisterView from './views/RegisterView.vue'
// import LoginView from './views/LoginView.vue'

export default {
  setup() {
    
  },
  components: {
    TheHeader,
    // MainNav,
    // MainContent,
    // RegisterView,
    // LoginView
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
