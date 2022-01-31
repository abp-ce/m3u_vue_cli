<template>
  <b-container>
    <b-navbar>
      <!--b-button v-b-toggle.sample class="float-left">Sample</b-button-->
      <!--b-nav><b-nav-item v-b-toggle.sample class="float-left" v-b-tooltip.hover title="Sample List">
        <b-icon-file></b-icon-file>
      </b-nav-item></b-nav-->
      <b-navbar-brand to="/">M3U editor</b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item v-b-toggle.sample v-b-tooltip.hover title="Sample List">
          <b-icon-file></b-icon-file>
        </b-nav-item>
        <b-nav-item v-b-toggle.personal class="float-left" v-b-tooltip.hover title="Personal List">
          <b-icon-file-person></b-icon-file-person>
        </b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item v-if = "this.$store.getters.isLoggedIn" id="nav-user">
          <b-icon-person-check></b-icon-person-check>
        </b-nav-item>
        <b-tooltip v-if = "this.$store.getters.isLoggedIn" target="nav-user">{{this.$store.state.user}}</b-tooltip>
        <b-nav-item v-if = "this.$store.getters.isLoggedIn" v-b-tooltip.hover title="Logout" @click="logout">
          <b-icon-person-dash></b-icon-person-dash>
        </b-nav-item>
        <b-nav-item v-if = "!this.$store.getters.isLoggedIn" to="/login/reg" v-b-tooltip.hover title="Register">
          <b-icon-person-plus></b-icon-person-plus>
        </b-nav-item>
        <b-nav-item v-if = "!this.$store.getters.isLoggedIn" to="/login/log" v-b-tooltip.hover title="Login">
          <b-icon-person></b-icon-person>
        </b-nav-item>
      </b-navbar-nav>
      <!--b-nav><b-nav-item v-b-toggle.personal class="float-left" v-b-tooltip.hover title="Personal List">
        <b-icon-file-person></b-icon-file-person>
      </b-nav-item></b-nav-->
      <!--b-button v-b-toggle.personal class="float-right">Personal</b-button-->
    </b-navbar>
    <router-view/>
  </b-container>
</template>

<script>
export default {
  name: 'App',
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'M3U Editor',
    // all titles will be injected into this template
    // titleTemplate: '%s | M3U Editor'
    meta: [
      { name: 'description', content: 'IPTV M3U playlist editor.' }
    ]
  },
  methods: {
    logout: function() {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<!--style>
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
</style-->
