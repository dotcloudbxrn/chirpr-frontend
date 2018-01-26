// this will be used for hitting our endpoints
import axios from 'axios'

// setting up a connector - will return it
// easy - saying create an axios object, pointing
// to our backend url
export default () => {
  return axios.create({
    // points to your backend
    baseURL: `https://chirpr-server.herokuapp.com`
  })
}
