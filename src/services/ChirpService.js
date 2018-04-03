import Api from '@/services/Api'

export default {
  index () {
    // fetch all chirps
    return Api().get('chirps')
  },
  createChirp (payload) {
    // don't allow empty or unauthorized chirps
    if (!payload.text || !payload.token) {
      return
    }
    let req = Api()
    // Add the authorization to the POST request (preflighted)
    req.defaults.headers.common['Authorization'] = `Bearer ${payload.token}`
    return req.post('/chirp/create', {
      text: payload.text
    })
  }
}
