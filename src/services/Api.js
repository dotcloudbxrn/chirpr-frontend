// this will be used for hitting our endpoints
import axios from 'axios'
import config from '@/config.js'
let env = process.env.NODE_ENV || 'development'

// setting up a connector - will return it
// easy - saying create an axios object, pointing
// to our backend url
export default () => {
  return axios.create({
    // points to your backend
    baseURL: config[env].baseURL
  })
}
