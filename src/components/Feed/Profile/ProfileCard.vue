<template>
	<div>
		<v-card v-if="$store.state.isUserLoggedIn">
			<v-card-media :src="user.coverImage" height="200px"></v-card-media>
			<v-card-title class="pa-2" justify-space-between>
				<v-avatar id="avatar-holder">
					<img
						id="avatar-image"
						style="width: 75px;height: 75px;"
						:src="user.avatar"
						@click="visitProfile">
				</v-avatar>
				<div class="pl-5">
					<h3>{{user.firstName}} {{user.lastName}}</h3>
					<span class="grey--text">@{{user.username}}</span>
				</div>
			</v-card-title>
			<v-card-actions>
				<v-layout wrap justify-space-around class="mb-1">
						<v-btn flat class="pButton">
							<div class="profile_action_button_label">Chirps</div>
							<div class="profile_action_button_count">30</div>
						</v-btn>
						<v-btn flat class="pButton">
							<div class="profile_action_button_label">Chirps</div>
							<div class="profile_action_button_count">30</div>
						</v-btn>
						<v-btn flat class="pButton">
							<div class="profile_action_button_label">Chirps</div>
							<div class="profile_action_button_count">30</div>
						</v-btn>
				</v-layout>
			</v-card-actions>
		</v-card>
		<div v-else>
			<h1 class="mt-4" style="text-align: center;"> Welcome to Chirpr </h1>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			user: {}
		}
	},
	created () {
		this.user = this.$store.getters.fetchUserData
	},
	methods: {
		visitProfile () {
			this.$router.push({
				name: 'profile',
				params: {
					id: this.$store.state.user.username
				}
			})
		}
	}
}
</script>

<style>
#avatar-holder {
	display: flex;
  align-self: flex-end;
}
#avatar-image {
	position: relative;
	bottom: 40px;
	left: 20px;
  border: 3px solid #fff;
  cursor: pointer;
}
</style>
