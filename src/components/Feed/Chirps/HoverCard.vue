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
							<v-card-text>
								This is where a person's biography will be displayed
							</v-card-text>
				<v-card-actions class="">
					<v-layout wrap justify-space-around>
						<v-btn flat small>Chirrrrps</v-btn>
						<v-btn flat small>Following</v-btn>
						<v-btn flat small>Followers</v-btn>
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

<style scoped>
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
</style>
