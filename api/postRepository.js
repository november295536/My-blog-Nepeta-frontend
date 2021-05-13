import data from '../.develop-data'
import { path } from './apiConfig'

const createRespository = (requestHandler) => {
  return {
    // async getAll() {
    getAll() {
      return data.map(postFormatter)
      // return await requestHandler.get(path.posts.getAll)
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

const postFormatter = (rawPost) => {
  const post = {
    ...rawPost,
    lastEditTime: timeFormatter(rawPost.lastEditTime),
    createTime: timeFormatter(rawPost.createTime),
    slug: String(rawPost.slug),
  }
  return post
}

const timeFormatter = (time) => {
  return new Date(time)
}
