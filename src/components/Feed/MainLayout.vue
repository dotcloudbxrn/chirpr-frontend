<template>
  <v-layout justify-center class="pt-2">
    <create-chirp :showDialog="isChirping"/>
    <v-flex xs3 v-if="this.$route.name === 'home'">
      <profile-card :user="userData"></profile-card>
    </v-flex>
    <v-flex xs3 v-if="this.$route.name === 'profile'">
      <profile-info :user="userData"></profile-info>
    </v-flex>
    <v-flex xs5>
      <chirps-feed></chirps-feed>
    </v-flex>
    <v-flex xs3>
      <panel title="Who to Follow"></panel>
    </v-flex>
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
      userData: []
    }
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
  },
  created () {
    this.userData = this.$store.getters.fetchUserData
  }
}
</script>
