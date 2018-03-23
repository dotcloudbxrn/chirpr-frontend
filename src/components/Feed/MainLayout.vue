<template>
  <v-layout justify-center class="pt-2">
    <create-chirp :showDialog="isChirping"/>
      <template v-if="this.$vuetify.breakpoint.mdAndUp">
        <v-flex xs3 v-if="this.$route.name === 'home'" class="profileCard">
          <profile-card :user="userData"></profile-card>
        </v-flex>
        <v-flex xs3 v-if="this.$route.name === 'profile'" class="profileCard">
          <profile-info :user="userData"></profile-info>
        </v-flex>
        <!-- it's here that I need to fix things if this is to become mobile one day -->
        <v-flex xs5>
          <chirps-feed></chirps-feed>
        </v-flex>
        <v-flex xs3>
          <panel title="Who to Follow"></panel>
        </v-flex>
      </template>
      <template v-else>
        <v-flex xs12>
          <chirps-feed></chirps-feed>          
        </v-flex>
      </template>
  </v-layout>
</template>

<script>
import ChirpsFeed from './Chirps/ChirpsFeed.vue'
import ProfileInfo from './Profile/ProfileInfo.vue'
import ProfileCard from './Profile/ProfileCard.vue'
import CreateChirp from './Chirps/CreateChirp.vue'
import {mapGetters} from 'vuex'

export default {
  data () {
    return {
      userData: {}
    }
  },
  created () {
    this.userData = this.$store.getters.fetchUserData
  },
  components: {
    ProfileInfo,
    ChirpsFeed,
    ProfileCard,
    CreateChirp
  },
  methods: {
		stopChirping () {
			this.$store.dispatch('stopChirping')
    }
  },
  computed: {
    isChirping () {
      return this.$store.state.isChirping
    }
  }
}
</script>

<style scoped>
.profileCard {
  min-width: 150px;
}
</style>
