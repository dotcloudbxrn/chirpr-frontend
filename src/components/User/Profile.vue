<template>
  <v-flex>
    <v-flex xs12 class="pt-0">
      <v-card>
        <v-card-media :src="profile.coverImage" height="400px">
        </v-card-media>
      </v-card>
      <v-toolbar class="elevation-2 profile-action-buttons">
        <v-spacer></v-spacer>
        <v-avatar :size="imageHeight" id="main-profile-picture">
          <img :src="profile.avatar">
        </v-avatar>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn flat class="pButton">
            <div class="profile_action_button_label">Chirps</div>
            <div class="profile_action_button_count">23</div>
          </v-btn>
          <v-btn flat class="pButton">
            <div class="profile_action_button_label">Following</div>
            <div class="profile_action_button_count">10</div>                 
          </v-btn>
          <v-btn flat class="pButton">
            <div class="profile_action_button_label">Followers</div>
            <div class="profile_action_button_count">299</div>            
          </v-btn>
          <v-btn flat class="pButton">
            <div class="profile_action_button_label">Likes</div>
            <div class="profile_action_button_count">27</div>            
          </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-btn
          round
          color="primary"
          dark
          outline
          class="lowercase-toolbar-button"
          @click="editProfile"
          >Edit Profile
        </v-btn>
        <v-spacer></v-spacer>
      </v-toolbar>
    </v-flex>
    <feed></feed>
  </v-flex>
</template>

<script>
import UserService from '@/services/UserService'
import Feed from '@/components/Feed/MainLayout.vue'
export default {
  data () {
    return {
      profile: {}
    }
  },
  async created () {
    let username = this.$route.params.id
    this.profile = (await UserService.getUserDetails(username)).data
    console.log(this.$route)
  },
  // our previous profile - https://randomuser.me/api/portraits/men/1.jpg
  computed: {
    imageHeight () {
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
  },
  methods: {
    // show button only if it's me who's logged in
    editProfile () {
      this.$router.push({
        name: 'edit',
        params: {
          id: this.$store.state.user.username
        }
      })
    }
  },
  watch: {
    // '$route' (to, from) {
        // to is just a route, from as well 
        // this.loadedId = to.params.id
    // }
    '$route.params.id': {
      immediate: true,
      async handler (value) {
        this.profile = (await UserService.getUserDetails(value)).data
      }
    }
  }
}
</script>

<style>

.lowercase-toolbar-button {
  font-weight: 700;
  text-transform: none;
}
.pButton:hover .btn__content:before {
  background-color: #fafafa;
}

.pButton > * {
  display: flex;
  flex-direction: column;
}

.profile_action_button_label {
  font-size: .7rem;
}

.profile_action_button_count {
  color: #1976D2;
  font-size: 1.4rem;
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
