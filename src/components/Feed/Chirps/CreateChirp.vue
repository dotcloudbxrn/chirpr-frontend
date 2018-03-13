<template>
	<v-dialog :value=showDialog max-width="500px" @input="handleCancel">
		<v-card>
			<v-card-text>
				<v-card-title class="pa-0">
					<span class="chirp-title">Compose new Chirp</span>
					<span><v-icon @click.stop="handleCancel" id="close-button">close</v-icon></span>
				</v-card-title>
				<v-text-field
          name="chirpText"
					v-model="chirp.textContent"
          label="A little bird told me..."
          multi-line
        ></v-text-field>
			</v-card-text>
			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn color="primary" flat @click.stop="sendChirp">Chirp</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
import ChirpService from '@/services/ChirpService'
import ChirpsFeedVue from './ChirpsFeed.vue';
import {eventBus} from '@/main'

export default {
	props: ['showDialog'],
	data () {
		return {
			chirp: {
				textContent: ''
			}
		}
	},
	methods: {
		handleCancel () {
			this.$store.dispatch('stopChirping')
		},
		async sendChirp () {
			let payload = {
				text: this.chirp.textContent,
				token: this.$store.state.token
			}
			ChirpService.createChirp(payload)
			this.$store.dispatch('stopChirping')
			this.chirp.textContent = ''
			this.$store.dispatch('triggerFUpdate')
			eventBus.$emit('newChirp')
			// this.$router.push('profile')
		}
	}
}
</script>

<style>
.chirp-title {
	display: inline-block;
	font-size: 1.3rem;
	font-weight: 600;
	margin: 0 auto;
}

#close-button {
	color: #230006;
	cursor: pointer;
}
</style>
