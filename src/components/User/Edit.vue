<template>
  <v-layout class="pt-5" row wrap>
		<v-flex xs12 class="mx-5">
			<h2>Cover Image:</h2>
			<v-card>
				<v-card-media :src="edittedInfo.coverImage" height="400px"/>
			</v-card>
		</v-flex>
		<v-flex xs3 class="mx-5 text-xs-center">
			<h2>Profile Picture:</h2>
			<v-card style="max-width:200px;margin: 0px auto;border-radius:50%;">
				<v-card-media :src="edittedInfo.avatar" round height="200px" style="max-width: 200px;">
				</v-card-media>
			</v-card>
		</v-flex>
    <v-flex xs6>
			<h1>{{edittedInfo.error}}</h1>
      <panel title="Edit Your Profile">
				<br>
        <form autocomplete="off">
					<h3>Feel like your username doesn't fit you?</h3>
					<v-divider></v-divider>
          <v-text-field
            type="text"
            name="username"
            label="Change it here"
						v-model.trim="edittedInfo.username"
          ></v-text-field>
					<br>
          <h3>Maybe you'd like to have a different name instead?</h3>
					<v-divider></v-divider>
					<v-text-field
            type="text"
            label="First name:"
            name="firstname"
						v-model.trim="edittedInfo.firstName"
          ></v-text-field>
          <v-text-field
            type="text"
            name="lastname"
            label="Last name:"
						v-model.trim="edittedInfo.lastName"
          ></v-text-field>
					<br>
					<h3>Change your profile picutre and cover below:</h3>
					<v-divider></v-divider>
					<v-text-field
            type="text"
            name="cover"
						v-model="edittedInfo.coverImage"
            label="URL to Cover Image"
          ></v-text-field>
					<v-text-field
            type="text"
            name="avatar"
						v-model="edittedInfo.avatar"
            label="URL to Avatar Image"
          ></v-text-field>
          <br>
					<h3>Tell us a bit about yourself:</h3>
					<v-divider></v-divider>					
					<v-text-field
						multi-line
						name="bio"
						v-model.trim="edittedInfo.bio"
						label="Biography">
					</v-text-field>
						<v-btn
							class="error"
							@click="goBack">
							Cancel
						</v-btn>
						<v-btn
							class="primary"
							@click="submitChange">
							Edit Profile
						</v-btn>
        </form>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import UserService from '@/services/UserService'

export default {
	methods: {
		goBack () {
			this.$router.go(-1)
		},
		async submitChange () {
			let username = this.$store.state.user.username
			try {
				let updatedUser = await UserService.editUserDetails(username, this.edittedInfo)
				this.$store.dispatch('setUser', updatedUser.data)
				this.$router.push({
					name: 'profile',
					params: {
						id: this.$store.state.user.username
					}
				})
			} catch (err) {
				console.log(err)
			}
		}
	},
	data () {
		return {
			edittedInfo : {
				avatar: '',
				coverImage: '',
				username: '',
				firstName: '',
				lastName: '',
				bio: ''
			}
		}
	}
}
</script>

<style>

</style>
