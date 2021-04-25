import createAxiosInstance from '../api/apiConfig'
import createPostRepository from '../api/postRepository'

export default (context, inject) => {
  const requestHandler = createAxiosInstance(context.$axios)

  const repository = {
    posts: createPostRepository(requestHandler),
  }

  inject('repository', repository)
}
