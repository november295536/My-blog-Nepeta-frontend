import createAxiosInstance from '../api/apiConfig'
import createPostRepository from '../api/postRepository'
import createAssetsRepository from '../api/assestsRepository'

export default (context, inject) => {
  const { $axios, store } = context

  if (process.client) setToken(store)

  const requestHandler = createAxiosInstance($axios, store)
  const repository = {
    posts: createPostRepository(requestHandler),
    assets: createAssetsRepository(requestHandler),
  }

  inject('api', requestHandler)
  inject('repository', repository)
}

const setToken = (store) => {
  const token = localStorage.getItem('accessToken')
  if (!token) return
  store.commit('user/auth/setToken', token)
}
