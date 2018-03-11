<template>
  <div>
    <v-layout>
      <v-flex xs12 class="pt-0">
        <v-card>
          <v-card-media src="https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpapercave.com%2Fwp%2F6rh80gM.jpg&f=1" height="400px">
          </v-card-media>
        </v-card>
        <v-toolbar class="elevation-2">
          <v-spacer></v-spacer>
          <v-avatar>
            <img id="woah" src="https://randomuser.me/api/portraits/men/1.jpg">
          </v-avatar>
          <v-spacer></v-spacer>
          <v-btn flat>Chirps</v-btn>
          <v-btn flat>Following</v-btn>
          <v-btn flat>Followers</v-btn>
          <v-btn flat>Likes</v-btn>
          <v-spacer></v-spacer>
          <v-btn
            round
            color="primary"
            dark
            outline
            class="lowercase-toolbar-button"
            >Edit Profile
          </v-btn>
          <v-spacer></v-spacer>
        </v-toolbar>
      </v-flex>
    </v-layout>
    <feed></feed>
  </div>
</template>

<script>
import Feed from '@/components/Feed/ProfileFeed.vue'
export default {
  components: {
    feed: Feed
  }
}
</script>

<style scoped>
#woah {
  position: absolute;
  width: 200px;
  height: 200px;
  border: 5px solid #fff;
  cursor: pointer;
}
</style>
