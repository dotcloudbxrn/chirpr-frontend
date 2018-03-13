<template>
	<div>
		<v-card v-if="$store.state.isUserLoggedIn">
			<v-card-media src="https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpapercave.com%2Fwp%2F6rh80gM.jpg&f=1" height="200px"></v-card-media>
			<v-card-title class="pa-2" justify-space-between>
				<v-avatar id="avatar-holder">
					<img id="avatar-image" src="https://randomuser.me/api/portraits/men/1.jpg">
				</v-avatar>
				<div class="pl-5">
					<h3>{{user.firstName}} {{user.lastName}}</h3>
					<span class="grey--text">@{{user.username}}</span>
				</div>
			</v-card-title>
			<v-card-actions>
				<v-btn flat>Chirrrrps</v-btn>
				<v-btn flat>Following</v-btn>
				<v-btn flat>Followers</v-btn>
			</v-card-actions>
		</v-card>
		<div v-else>
			<h1 class="mt-4"> Welcome to Chirpr </h1>
		</div>
	</div>
</template>

<script>
export default {
	props: ['user']
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
