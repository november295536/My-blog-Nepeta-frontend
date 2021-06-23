// import data from '../.develop-data'
import { path } from './apiConfig'
import { postFormatter } from '~/tool/postFormatter'

const createRespository = (requestHandler) => {
  return {
    async getPublishedPost(page = 1, size = 5) {
      page--
      if (page < 0) throw new Error('Inavalid page number')
      if (size < 0) size = 100000
      const data = await requestHandler.get(path.posts.getPublishedPost, {
        page,
        size,
      })
      return {
        posts: data.posts.map(postFormatter.javaInstantToJSDate),
        currentPage: data.currentPage + 1,
        totalPage: data.totalPage,
        totalItems: data.totalItems,
      }
    },
    async getAllPosts(page = 1, size = 5) {
      page--
      if (page < 0) throw new Error('Inavalid page number')
      if (size < 0) size = 100000
      const data = await requestHandler.get(path.admin.posts.all, {
        page,
        size,
      })
      return {
        posts: data.posts.map(postFormatter.javaInstantToJSDate),
        currentPage: data.currentPage + 1,
        totalPage: data.totalPage,
        totalItems: data.totalItems,
      }
    },
    async getBySlug(slug) {
      const url = path.posts.getBySlug.replace(':slug', slug)
      const post = await requestHandler.get(url)
      return postFormatter.javaInstantToJSDate(post)
    },
    async create(post) {
      return await requestHandler.post(
        path.admin.posts.create,
        postFormatter.ISOStringToTimestamp(post)
      )
    },
    async update(post) {
      return await requestHandler.post(path.admin.posts.update, post)
    },
    async delete(id) {
      return await requestHandler.post(path.admin.posts.delete, { id })
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
