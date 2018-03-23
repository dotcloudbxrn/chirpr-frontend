import Api from '@/services/Api'

export default {
	getUserDetails (username) {
		return Api().get(`getuser/${username}`)
	},
	editUserDetails (username, payload) {
		return Api().post(`edituser/${username}`, payload)
	}
}