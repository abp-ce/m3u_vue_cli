<template>
  <b-container>
    <b-navbar>
      <!--b-button v-b-toggle.sample class="float-left">Sample</b-button-->
      <b-nav><b-nav-item v-b-toggle.sample class="float-left">Sample List</b-nav-item></b-nav>
      <b-navbar-brand to="/">M3U editor</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-nav-item v-if = "this.$store.getters.isLoggedIn">{{this.$store.state.user}}</b-nav-item>
        <b-nav-item v-if = "this.$store.getters.isLoggedIn" @click="logout">Logout</b-nav-item>
        <b-nav-item v-if = "!this.$store.getters.isLoggedIn" to="/login/reg">Register</b-nav-item>
        <b-nav-item v-if = "!this.$store.getters.isLoggedIn" to="/login/log">Login</b-nav-item>
      </b-navbar-nav>
      <b-nav><b-nav-item v-b-toggle.personal class="float-left">Personal List</b-nav-item></b-nav>
      <!--b-button v-b-toggle.personal class="float-right">Personal</b-button-->
    </b-navbar>
    <router-view/>
  </b-container>
</template>

<script>
export default {
  methods: {
    logout: function() {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
