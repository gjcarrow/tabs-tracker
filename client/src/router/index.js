import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Songs from '@/components/Songs'
import SingleSong from '@/components/SingleSong'
import Register from '@/components/Register'
import CreateSong from '@/components/CreateSong'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/songs',
      name: 'songs',
      component: Songs
    },
    {
      path: '/song/:id',
      name: 'song',
      props: true,
      component: SingleSong
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/songs/create',
      name: 'songs-create',
      component: CreateSong
    }
  ]
})
