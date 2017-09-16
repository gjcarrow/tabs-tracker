import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  },
  login (credentials) {
    return Api().post('login', credentials)
  }
}

// Then it could be called from register view like this:
//
// AuthenticationService.register({
//   email: 'testing@gmail.com',
//   password: '123456'
// })

