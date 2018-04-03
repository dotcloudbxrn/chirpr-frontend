import Api from '@/services/Api'

export default {
	getUserDetails (username) {
		return Api().get(`getuser/${username}`)
	},
	editUserDetails (username, payload) {
		return Api().post(`edituser/${username}`, payload)
	},
	toggleFollow (payload) {
		return Api().post(`togglefollow/${payload.id}`, payload)
	},
	checkFollowingStatus(payload) {
		return Api().post(`checkfollowing/${payload.id}`, payload)
	}
}