<template>
  <div>
    <v-flex xs12 class="pt-0">
      <v-card>
        <v-card-media src="https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpapercave.com%2Fwp%2F6rh80gM.jpg&f=1" height="400px">
        </v-card-media>
      </v-card>
      <v-toolbar class="elevation-2">
        <v-spacer></v-spacer>
        <v-avatar :size="imageHeight" id="main-profile-picture">
          <img src="https://randomuser.me/api/portraits/men/1.jpg">
        </v-avatar>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn flat>
            <span class="profile_action_button">Chirps</span>
          </v-btn>
          <v-btn flat>
            <span class="profile_action_button">Following</span>            
          </v-btn>
          <v-btn flat>
            <span class="profile_action_button">Followers</span>
          </v-btn>
          <v-btn flat>
            <span class="profile_action_button">Likes</span>            
          </v-btn>
        </v-toolbar-items>
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
    <feed></feed>
  </div>
</template>

<script>
import Feed from '@/components/Feed/MainLayout.vue'
export default {
  computed: {
    imageHeight () {
      console.log(this.$vuetify.breakpoint.name)
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return `120px`
        case 'sm': return `150px`
        case 'md': return `200px`
        default: return `200px`
      }
    }
  },
  components: {
    feed: Feed
  }
}
</script>

<style>

.profile_action_button {
  vertical-align: super;
}

#main-profile-picture {
  transition: all 100ms ease;
  display: flex;
  align-self: flex-end;
}

#main-profile-picture img {
  border: 5px solid white;
}
</style>
