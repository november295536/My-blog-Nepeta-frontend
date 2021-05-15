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
      const { accessToken } = await this.$api.post(path.auth.login, {
        username,
        password,
      })
      // console.log(data)
      localStorage.setItem('accessToken', accessToken)
      location.href = '/'
    } catch (error) {
      console.error(error)
    }
  },
  logout({ commit }) {
    commit('setToken', null)
    localStorage.removeItem('accessToken')
    location.reload()
  },
}

export const getters = {
  isLogin(state) {
    return !!state.token
  },
}
