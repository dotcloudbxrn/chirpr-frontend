<template>
		<v-toolbar class="elevation-2 profile-action-buttons">
		<v-spacer></v-spacer>
		<v-avatar :size="imageHeight" id="main-profile-picture">
			<img :src="avatar">
		</v-avatar>
		<v-spacer></v-spacer>
		<v-toolbar-items>
			<v-btn flat class="pButton">
				<div class="profile_action_button_label">Chirps</div>
				<div class="profile_action_button_count">23</div>
			</v-btn>
			<v-btn flat class="pButton">
				<div class="profile_action_button_label">Following</div>
				<div class="profile_action_button_count">10</div>                 
			</v-btn>
			<v-btn flat class="pButton">
				<div class="profile_action_button_label">Followers</div>
				<div class="profile_action_button_count">299</div>            
			</v-btn>
			<v-btn flat class="pButton">
				<div class="profile_action_button_label">Likes</div>
				<div class="profile_action_button_count">27</div>            
			</v-btn>
		</v-toolbar-items>
		<v-spacer></v-spacer>
		<v-btn
			v-if="allowEdit"
			round
			color="primary"
			dark
			outline
			class="lowercase-toolbar-button"
			@click="editProfile"
			>Edit Profile
		</v-btn>
		<v-spacer></v-spacer>
	</v-toolbar>
</template>

<script>
export default {
	computed: {
		imageHeight () {
			switch (this.$vuetify.breakpoint.name) {
				case 'xs': return `120px`
				case 'sm': return `150px`
				case 'md': return `200px`
				default: return `200px`
			}
		},
		allowEdit () {
			let canEdit = false
			if (this.$store.state.user) {
				canEdit = this.$store.state.user.username === this.$route.params.id
			}
			return canEdit
		}
	},
	props: ['avatar'],
	methods: {
    editProfile () {
      this.$router.push({
        name: 'edit',
        params: {
          id: this.$store.state.user.username
        }
      })
    }
  },
}
</script>

<style>
.lowercase-toolbar-button {
  font-weight: 700;
  text-transform: none;
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

#main-profile-picture {
  transition: all 100ms ease;
  display: flex;
  align-self: flex-end;
}

#main-profile-picture img {
  border: 5px solid white;
}
</style>
