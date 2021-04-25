const path = {
  posts: {
    create: '/api/posts/creaate',
    getAll: '/api/posts/getAll',
    getBySlug: '/api/posts/get/:slug',
  },
}
const createAxiosInstance = (axios) => {
  return {
    async get(url, params) {
      if (params) url = `${url}${urlParams(params)}`
      return await axios.$get(url)
    },
    async post(url, params) {
      return await axios.$post(url, params)
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
