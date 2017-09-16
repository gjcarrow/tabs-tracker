<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <Panel title='Register'>
        <form name="tt-register-form" autocomplete="off">
          <v-text-field :rules="emailRules" type="email" name="email_reg" label="Email" v-model="email"></v-text-field>
          <v-text-field type="password" name="password_reg" label="Password" v-model="password" autocomplete="new-password"></v-text-field>
          <div class="error" v-html="error"></div>
          <v-btn class='teal' @click="register" dark>Register</v-btn>
        </form>
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
    },
    components: {
      Panel
    }
  }
</script>

<style>
.error {
  color: red;
}
</style>
