<template>
  <v-layout justify-center class="pt-2">
    <v-flex xs3 v-if="this.$route.name === 'home'">
      <profile-card></profile-card>
    </v-flex>
    <v-flex xs3 v-if="this.$route.name === 'profile'">
      <profile-info></profile-info>
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

export default {
  components: {
    ProfileInfo,
    ChirpsFeed,
    ProfileCard
  }
}
</script>
