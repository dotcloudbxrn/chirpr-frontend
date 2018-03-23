<template>
	<div>
		<v-menu
			open-on-hover
			offset-x
			:close-on-content-click="false"
			:nudge-width="200"
			v-model="menu">
			<!-- this is where you pass down a named slot from the chirp -->
			<slot name="profileLink" slot="activator" class="ma-2"></slot>
			<v-card style="z-index:5">
				<v-card-media :src="creator.coverImage" height="100px"></v-card-media>
				<v-card-title class="pa-2" justify-space-between>
					<v-avatar id="avatar-holder">
						<img 
							id="avatar-image"
							:src="creator.avatar"
							@click="navigateToProfile"
							:data-username="creator.username">
					</v-avatar>
					<div class="pl-5">
						<h3>{{creator.firstName}} {{creator.lastName}}</h3>
						<span class="grey--text">@{{creator.username}}</span>
					</div>
				</v-card-title>
				<v-card-text style="max-width: 300px;word-break; break-word">
					{{creator.bio}}
				</v-card-text>
				<v-card-actions class="mt-2 mb-3">
					<v-layout wrap justify-space-around>
						<v-btn flat :ripple="false" class="pButton">
							<div class="profile_action_button_label">Chirps</div>
							<div class="profile_action_button_count">30</div>
						</v-btn>
						<v-btn flat :ripple="false" class="pButton">
							<div class="profile_action_button_label">Chirps</div>
							<div class="profile_action_button_count">30</div>
						</v-btn>
						<v-btn flat :ripple="false" class="pButton">
							<div class="profile_action_button_label">Chirps</div>
							<div class="profile_action_button_count">30</div>
						</v-btn>
					</v-layout>
				</v-card-actions>
			</v-card>
		</v-menu>
	</div>
</template>

<script>
export default {
	props: ['creator'],
	data () {
		return {
			menu: false
		}
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

</style>
