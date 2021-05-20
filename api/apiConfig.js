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
  },
  posts: {
    getPage: '/api/posts',
    getBySlug: '/api/posts/get/:slug',
  },
}
const createAxiosInstance = (axios, store) => {
  const axiosInstance = axios.create({
    headers: {
      Authorization: `Bearer ${store.state.user.auth.token || ''}`,
    },
  })

  return {
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
