import { createStore } from 'vuex'

const defaultLoginResult = {
  token: null,
  user_id: null,
  user_name: null
}
export default createStore({
  state: {
    isLogin: false,
    loginResult: defaultLoginResult
  },
  mutations: {
    init (state) {
      const loginResult = JSON.parse(localStorage.getItem('loginResult'))
      console.log(localStorage.getItem('loginResult'))
      if (loginResult != null) {
        state.loginResult = loginResult
      }
    },
    login (state, loginResult) {
      state.loginResult = loginResult
    },
    logout (state) {
      localStorage.removeItem('loginResult')
      state.loginResult = defaultLoginResult
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    isLogin: state => state.loginResult.user_id !== null,
    userID: state => state.loginResult.user_id,
    username: state => state.loginResult.user_name,
    accessToken: state => state.loginResult.token
  }
})
