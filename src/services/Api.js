import axios from 'axios'
import config from '@/config.js'
let env = process.env.NODE_ENV || 'development'

export default () => {
  return axios.create({
    baseURL: config[env].baseURL
  })
}
