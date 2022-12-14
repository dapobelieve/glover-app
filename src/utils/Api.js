import axios from 'axios'


const instance = axios.create({
  baseURL: process.env.VUE_APP_API_GATEWAY
})

instance.interceptors.request.use((config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  })

instance.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) =>{
    return Promise.reject(error)
  }
)

export default instance