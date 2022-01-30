import Vue from 'vue'
import Vuex from 'vuex'
import { AXIOS } from '../axios-common';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      status: '',
      token: localStorage.getItem('token') || '',
      user: localStorage.getItem('user') || ''
  },
  mutations: {
    auth_request(state){
      state.status = 'loading'
    },
    auth_success(state, payload){
      state.status = 'success'
      state.token = payload.token
      state.user = payload.user
    },
    auth_error(state){
      state.status = 'error'
    },
    logout(state){
      state.status = ''
      state.token = ''
    }
   },
  actions: {
    login({commit}, payload){
      return new Promise((resolve, reject) => {
        commit('auth_request')
        let User = null
        let path = null
        if (payload.reg) {
          User = {'username': payload.form.name,'email': payload.form.email, 'password': payload.form.password }
          path = '/register'
        }
        else {
          User = new FormData();
          User.append('username',payload.form.name)
          User.append('password',payload.form.password)
          path = '/token'
        }
        //console.log(User,path,payload.reg)
        AXIOS.post(path, User)
        .then(resp => {
          const token = resp.data
          const pl = { token: token, user: payload.form.name }
          localStorage.setItem('token', token)
          localStorage.setItem('user', payload.form.name)
          AXIOS.defaults.headers.common['Authorization'] = `${token.token_type} ${token.access_token}`
          commit('auth_success', pl)
          resolve(resp)
        })
        .catch(err => {
          alert(err.response.data.detail)
          commit('auth_error')
          localStorage.removeItem('token')
          localStorage.removeItem('user')
          reject(err)
        })
      })
    },
    logout({commit}){
      commit('logout')
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      delete AXIOS.defaults.headers.common['Authorization']
      //delete this.$axios.defaults.headers.common['Authorization']
    }
  },
  getters : {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
  },
  modules: {
  }
})
