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
			<v-card>
				<v-card-media src="https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpapercave.com%2Fwp%2F6rh80gM.jpg&f=1" height="100px"></v-card-media>
				<v-card-title class="pa-2" justify-space-between>
					<v-avatar id="avatar-holder">
						<img id="avatar-image" src="https://randomuser.me/api/portraits/men/1.jpg">
					</v-avatar>
					<div class="pl-5">
						<h3>Person personsons</h3>
						<span class="grey--text">@crash</span>
					</div>
				</v-card-title>
				<v-card-text style="max-width: 300px;word-break; break-word">
					THIS IS AN EXAMPLE
					OF A VERY 
					BIG BIOGRAPHY
					STYLED IN A WRONG
					WAYTHIS IS AN EXAMPLE
					OF A VERY 
					BIG BIOGRAPHY
					STYLED IN A WRONG
					WAYTHIS IS AN EXAMPLE
					OF A VERY 
					BIG BIOGRAPHY
					STYLED IN A WRONG
					WAYTHIS IS AN EXAMPLE
					OF A VERY 
					BIG BIOGRAPHY
					STYLED IN A WRONG
					WAY
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
	data () {
		return {
			menu: false
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
