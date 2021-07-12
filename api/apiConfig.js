const path = {
  auth: {
    login: '/api/auth/login',
  },
  admin: {
    posts: '/api/admin/posts',
    config: {
      getCategories: '/api/admin/categories',
      getTags: '/api/admin/tags',
    },
  },
  posts: {
    getPublishedPost: '/api/posts',
    getBySlug: '/api/posts/:slug',
  },
}
const createAxiosInstance = (axios, store) => {
  const axiosInstance = axios.create()
  const token = store.state.user.auth.token
  if (token) axiosInstance.setToken(token, 'Bearer')

  return {
    axios: axiosInstance,
    async get(url, params) {
      if (params) url = `${url}${urlParams(params)}`
      return await axiosInstance.$get(url)
    },
    async post(url, params) {
      return await axiosInstance.$post(url, params)
    },
    async put(url, params) {
      return await axiosInstance.$put(url, params)
    },
    async delete(url, params) {
      if (params) url = `${url}${urlParams(params)}`
      return await axiosInstance.$delete(url)
    },
  }
}

export default createAxiosInstance

export { path }

const urlParams = (params) => {
  const result = []
  for (const prop in params) {
    if (
      typeof params[prop] === 'undefined' ||
      params[prop] === '' ||
      params[prop] === null ||
      params[prop].length === 0
    )
      continue
    result.push(
      encodeURIComponent(prop) + '=' + encodeURIComponent(params[prop])
    )
  }
  if (!result.length) return ''
  return `?${result.join('&')}`
}
