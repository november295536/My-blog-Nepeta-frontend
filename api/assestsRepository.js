import { path } from './apiConfig'

const createRespository = (requestHandler) => {
  return {
    async uploadAssest(file) {
      const formData = new FormData()
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
      formData.append('file', file)
      return await requestHandler.post(path.admin.assets, formData, config)
    },
  }
}

export default createRespository
