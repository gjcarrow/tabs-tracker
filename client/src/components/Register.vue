<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div>
          <v-text-field :rules="emailRules" type="email" name="email_reg" placeholder="Enter email" v-model="email"></v-text-field>
          <v-text-field type="password" name="password_reg" placeholder="Enter password" v-model="password"></v-text-field>
          <div class="error" v-html="error"></div>
          <v-btn class='cyan' @click="register">Register</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
  import AuthenticationService from '@/services/AuthenticationService'
  export default {
    data () {
      return {
        email: '',
        password: '',
        error: null,
        emailRules: [(v) => !!v || 'E-mail is required', (v) => /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail iddnt valid dummy']
      }
    },
    methods: {
      async register () {
        try {
          await AuthenticationService.register({
            email: this.email,
            password: this.password
          })
        } catch (error) {
          this.error = error.response.data.error
        }
      }
    }
  }
</script>

<style>
.error {
  color: red;
}
</style>
