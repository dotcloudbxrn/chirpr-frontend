<template>
	<div class="hoverCard">
		<v-menu
			open-on-hover
			max-width=550
			min-width=500
			:close-on-content-click="false"
			v-model="menu">
			<!-- this is where you pass down a named slot from the chirp -->
			<slot name="profileLink" slot="activator" class="ma-2"></slot>
			<v-card style="z-index:5">
				<v-card-media :src="creator.coverImage" height="100px"/>
				<v-card-title class="pt-2" justify-space-between>
					<v-avatar id="avatar-holder">
						<img 
							id="avatar-image"
							:src="creator.avatar"
							@click="navigateToProfile"
							:data-username="creator.username">
					</v-avatar>
					<div class="pl-4">
						<h3>{{creator.firstName}} {{creator.lastName}}</h3>
						<span class="grey--text">@{{creator.username}}</span>
					</div>
					<v-layout wrap justify-end>
						<!-- show follow button only if logged in and not the current user -->
						<v-btn v-if="this.$store.state.user && this.$store.state.user.username != creator.username"
							round flat outline color="primary"
							class="lowercase-toolbar-button"
							@click="toggleFollow(creator._id)">
							{{followStatus}}
						</v-btn>
					</v-layout>
				</v-card-title>
				<v-card-text class="py-1" style="max-width: 300px;word-break; break-word">
					{{creator.bio}}
				</v-card-text>
				<v-card-actions class="py-3">
					<v-layout wrap justify-space-around>
						<v-btn flat :ripple="false" class="pButton">
							<div class="profile_action_button_label">Chirps</div>
							<div class="profile_action_button_count">30</div>
						</v-btn>
						<v-btn flat :ripple="false" class="pButton">
							<div class="profile_action_button_label">Following</div>
							<div class="profile_action_button_count">10</div>
						</v-btn>
						<v-btn flat :ripple="false" class="pButton">
							<div class="profile_action_button_label">Followers</div>
							<div class="profile_action_button_count">49k</div>
						</v-btn>
					</v-layout>
				</v-card-actions>
			</v-card>
		</v-menu>
	</div>
</template>

<script>
import UserService from '@/services/UserService'

export default {
	props: ['creator'],
	data () {
		return {
			menu: false,
			followStatus: null
		}
	},
	async created () {
		let payload = {
			id: this.creator._id,
			following: this.$store.state.user.username
		}
		let response = await (UserService.checkFollowingStatus(payload))
		this.followStatus = response.data.following ? 'Unfollow' : 'Follow'
	},
	methods: {
		navigateToProfile (el) {
			let username = el.target.dataset.username
			this.$router.push({
				name: 'profile',
				params: {
					id: username
				}
			})
		},
		async toggleFollow (id) {
			let payload = {
				id,
				following: this.$store.state.user.username
			}
			let response =  await UserService.toggleFollow(payload)
			this.followStatus = response.data.following ? 'Unfollow' : 'Follow'
			
		}
	}
}
</script>

<style>
.lowercase-toolbar-button {
  text-transform: none;
  font-weight: 700;
}

#avatar-holder {
	display: flex;
  align-self: flex-end;
}
#avatar-image {
	position: relative;
	bottom: 40px;
	left: 10px;
  width: 80px;
  height: 80px;
  border: 3px solid #fff;
  cursor: pointer;
}

.pButton:hover .btn__content:before {
  background-color: #fafafa;
}

.pButton > * {
  display: flex;
  flex-direction: column;
}

.profile_action_button_label {
  font-size: .7rem;
}

.profile_action_button_count {
  color: #1976D2;
  font-size: 1.4rem;
}

.hoverCard > *{
	max-width: 500px;
}

</style>
