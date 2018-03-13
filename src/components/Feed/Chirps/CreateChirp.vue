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
