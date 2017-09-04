<template>
  <div id="register">
    <h1>Register</h1>
    <input type="email" name="email_reg" placeholder="Enter email" v-model="email">
    <input type="password" name="password_reg" placeholder="Enter password" v-model="password">
    <button @click="register">Register</button>
  </div>
</template>

<script>
  import AuthenticationService from '@/services/AuthenticationService'
  export default {
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      async register () {
        var response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        console.log(response.data)
      }
    }
  }
</script>

<style>
#register h1{
  font-weight: 100;
  
}  
</style>
