import Api from '@/services/Api'

export default {
  index () {
    return Api().get('chirps')
  },
  createChirp (payload) {
    let req = Api()
    req.defaults.headers.common['Authorization'] = `Bearer ${payload.token}`
    req.post('/chirp/create', {
      text: payload.text
    })
  }
}
