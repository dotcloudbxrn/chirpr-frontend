<template>
	<v-flex>
		<hover-card :creator="chirp.creator">
			<div class="exp" slot="profileLink">
				<div style="text-align: left;">
					<v-avatar size="46px" 
						@mouseover="underlineProfile"
						@mouseout="underlineProfile"
						@click="navigateToProfile"
						:data-username="chirp.creator.username">
						<!-- change based on profile -->
						<!-- completely against DRY principles, but facing time issues -->
						<img class="profilePic"
							:src="chirp.creator.avatar"
							:data-username="chirp.creator.username">
					</v-avatar>
					<span
						class="chirpAuthor"
						@mouseover="underlineProfile"
						@mouseout="underlineProfile"
						@click="navigateToProfile"
						:data-username="chirp.creator.username">
						<strong
						:data-username="chirp.creator.username">{{chirp.creator.firstName}} {{chirp.creator.lastName}}</strong> 
						@{{chirp.creator.username }}
					</span>
				</div>
			</div>
		</hover-card>
		<p class="chirpContent"> {{chirp.chirpContent}} </p>
		<v-layout wrap justify-space-around pb-2>
				<v-btn flat icon color="indigo lighten-2" dark>
					<v-icon dark>autorenew</v-icon>
				</v-btn>

				<v-btn flat icon color="indigo lighten-2" dark>
					<v-icon dark>favorite_border</v-icon>
				</v-btn>

				<v-btn flat icon color="blue lighten-2">
					<v-icon>thumb_up</v-icon>
				</v-btn>

				<v-btn flat icon color="red lighten-2">
					<v-icon>thumb_down</v-icon>
				</v-btn>
  	</v-layout>
		<v-divider v-if="index + 1 < length"></v-divider>
	</v-flex>
</template>


<script>
import HoverCard from './HoverCard.vue'
export default {
	components: {
		HoverCard
	},
	props: ['index', 'chirp', 'length'],
	methods: {
		underlineProfile (el) {
			if (el.target.className === 'chirpAuthor') return
			el.target.parentElement.parentElement.lastChild.classList.toggle('underlined')
		},
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

<style scoped>
.exp {
	display: flex;
	align-content: flex-start;
	justify-content: flex-start;
}

.exp span {
	align-self: center;
	margin-left: 5px;
}


.chirpAuthor {
  color: #707172;
}

.chirpContent {
  text-align: left;
  overflow-wrap: break-word;
  padding: 10px 30px;
}

.underlined {
	text-decoration: underline;
}
</style>
