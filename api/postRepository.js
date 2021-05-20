// import data from '../.develop-data'
import { path } from './apiConfig'

const createRespository = (requestHandler) => {
  return {
    async getPage(page = 1, size = 5) {
      page--
      if (page < 0) throw new Error('Inavalid page number')
      if (size < 0) size = 100000
      const data = await requestHandler.get(path.posts.getPage, { page, size })
      return {
        posts: data.posts.map(postFormatter),
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
  }
}

export default createRespository

const postFormatter = (rawPost) => {
  const post = {
    ...rawPost,
    lastEditTime: timeFormatter(rawPost.lastEditTime),
    createTime: timeFormatter(rawPost.createTime),
    publishedTime: timeFormatter(rawPost.publishedTime),
    slug: String(rawPost.slug),
  }
  return post
}

const timeFormatter = (time) => {
  return new Date(time * 1000)
}
