import { path } from '../../api/apiConfig'

export const state = () => ({
  token: null,
})

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
}

export const actions = {
  async login({ commit }, { username, password }) {
    try {
      localStorage.removeItem('accessToken')
      const { accessToken } = await this.$api.post(path.auth.login, {
        username,
        password,
      })
      localStorage.setItem('accessToken', accessToken)
      commit('setToken', accessToken)
      this.$api.axios.setToken(accessToken, 'Bearer')
      this.$router.push('/')
    } catch (error) {
      console.error(error)
    }
  },
  logout({ commit }) {
    commit('setToken', null)
    this.$api.axios.setToken('', 'Bearer')
    localStorage.removeItem('accessToken')
    location.reload()
  },
}

export const getters = {
  isLogin(state) {
    return !!state.token
  },
}
