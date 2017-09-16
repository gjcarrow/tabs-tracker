<template>
<v-layout column>
  <v-flex xs6 offset-xs3>
    <Panel title="Login">
      <v-text-field type="email" name="email" label="Email" v-model="email"></v-text-field>
      <v-text-field type="password" name="password" label="Password" v-model="password"></v-text-field>
      <div class="error" v-html="error"></div>
      <v-btn class='blue-grey' @click="login" dark>Login</v-btn>
    </Panel>
  </v-flex>
</v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        var serverResponse = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', serverResponse.data.token)
        this.$store.dispatch('setUser', serverResponse.data.user)
        this.$router.push({
          name: 'home'
        })
      } catch (error) {
        this.error = error.serverResponse.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
#login {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}  
</style>
