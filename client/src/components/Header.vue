<template>
  <v-toolbar fixed dark>
    <v-toolbar-title class="mr-4">
      <router-link v-bind:to="'/'"><v-btn flat dark>Tab Tracker</v-btn></router-link>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn @click="navigateTo({name: 'songs'})" flat dark>Browse</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <router-link v-bind:to="'/register'">
        <v-btn flat dark v-if="!$store.state.isUserLoggedIn">
          Register
        </v-btn>
      </router-link>
      <router-link v-bind:to="'/login'">
        <v-btn flat dark v-if="!$store.state.isUserLoggedIn">
          Login
        </v-btn>
      </router-link>
        <v-btn flat dark @click="logout" v-if="$store.state.isUserLoggedIn">
          Log Out
        </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
  export default {
    methods: {
      navigateTo (route) {
        this.$router.push(route)
      },
      logout () {
        this.$store.dispatch('setToken', null)
        this.$store.dispatch('setUser', null)
        this.$router.push({
          name: 'home'
        })
      }

    }
  }
</script>
<style scoped>
  .toolbar a:hover {
    text-decoration: none;
  }
  [class^='toolbar__'] [class^='toolbar__']>a,
  [class^='toolbar__'] [class^='toolbar__']>a>.btn {
    display: block;
    height: 100%;
    width: 100%;
    margin: 0;
  }
</style>