<template>
	<v-dialog :value=showDialog max-width="500px" @input="handleCancel">
		<v-card>
			<v-card-title style="font-size: 2rem">
				Chirp!
			</v-card-title>
			<v-card-text>
				<v-select
					:items="select"
					label="A Select List"
					item-value="text"
				></v-select>
			</v-card-text>
			<v-card-actions>
				<v-btn color="primary" flat @click.stop="handleCancel">Close</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
export default {
	props: ['showDialog'],
	data () {
		return {
			select: [
        { text: 'Example 1' },
        { text: 'Example 2' }
      ]
		}
	},
	methods: {
		handleCancel () {
			this.$store.dispatch('stopChirping')
		}
	}
}
</script>
