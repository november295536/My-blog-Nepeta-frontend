const path = {
  auth: {
    login: '/api/auth/login',
  },
  admin: {
    post: {
      create: '/api/admin/post/create',
      update: '/api/admin/post/update',
      delete: '/api/admin/post/delete',
    },
    config: {
      getCategories: '/api/admin/config/categories',
      getTags: '/api/admin/config/tags',
    },
  },
  posts: {
    getPage: '/api/posts',
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
