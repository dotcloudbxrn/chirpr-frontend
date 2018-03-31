import Api from '@/services/Api'

export default {
  index () {
    return Api().get('chirps')
  },
  createChirp (payload) {
    if (!payload.text || !payload.token) {
      alert('Please... Do not')
      return
    }
    let req = Api()
    req.defaults.headers.common['Authorization'] = `Bearer ${payload.token}`
    // req.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
    console.log(req.defaults.headers)
    return req.post('/chirp/create', {
      text: payload.text
    })
  }
}
