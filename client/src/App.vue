<template>
  <div id="app">
    <img src="./assets/octopus.png">
    <nav>
      <router-link v-bind:to="'/'">Home</router-link>
      <router-link v-bind:to="'/about'">About</router-link>
      <router-link v-bind:to="'/register'">Register</router-link>
    </nav>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  color: #8BBDB8;
  margin-top: 30px;
}
#app > img {
  width: 125px;
  height: 125px;
}
nav {
  font-family: merriweather, georgia;
}
 nav a {
  color: #8BBDB8;
  text-decoration: none;
 }
 nav a:hover {
  text-decoration: underline;
 }
</style>
