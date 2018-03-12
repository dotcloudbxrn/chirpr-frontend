<template>
	<v-dialog persistent :value=showDialog max-width="500px">
		<v-card>
			<v-card-text>
				<v-text-field
          name="chirpText"
					v-model="chirp.textContent"
          label="Chirp away..."
          multi-line
        ></v-text-field>
			</v-card-text>
			<v-card-actions>
				<v-btn color="error" flat @click.stop="handleCancel">Close</v-btn>
				<v-spacer></v-spacer>
				<v-btn color="success" flat @click.stop="sendChirp">Chirp</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
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
		sendChirp () {
			this.$store.dispatch('stopChirping')
			alert(this.chirp.textContent)			
			this.chirp.textContent = ''
		}
	}
}
</script>
