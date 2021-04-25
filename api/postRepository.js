import { path } from './apiConfig'

const createRespository = (requestHandler) => {
  return {
    async getAll() {
      return await requestHandler.get(path.posts.getAll)
    },
    async create(params) {
      return await requestHandler.post(path.posts.create, params)
    },
    async getBySlug(slug) {
      const url = path.posts.getBySlug.replace(':slug', slug)
      return await requestHandler.get(url)
    },
  }
}

export default createRespository
