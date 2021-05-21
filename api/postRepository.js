// import data from '../.develop-data'
import { path } from './apiConfig'
import { postFormatter } from '~/tool/postFormatter'

const createRespository = (requestHandler) => {
  return {
    async getPage(page = 1, size = 5) {
      page--
      if (page < 0) throw new Error('Inavalid page number')
      if (size < 0) size = 100000
      const data = await requestHandler.get(path.posts.getPage, { page, size })
      return {
        posts: data.posts.map(postFormatter.javaInstantToJSDate),
        currentPage: data.currentPage + 1,
        totalPage: data.totalPage,
        totalItems: data.totalItems,
      }
    },
    async getBySlug(slug) {
      const url = path.posts.getBySlug.replace(':slug', slug)
      return await requestHandler.get(url)
    },
    async create(post) {
      return await requestHandler.post(path.admin.post.create, post)
    },
    async update(post) {
      return await requestHandler.post(path.admin.post.update, post)
    },
    async delete(id) {
      return await requestHandler.post(path.admin.post.delete, { id })
    },
    async getCategories() {
      return await requestHandler.get(path.admin.config.getCategories)
    },
    async getTags() {
      return await requestHandler.get(path.admin.config.getTags)
    },
  }
}

export default createRespository
