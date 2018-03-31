<template>
  <v-flex>
    <!-- <transition-group name="slide" type="animation"> -->
      <v-flex xs12 class="pt-0" :key="profile.username">
        <v-card>
          <v-card-media :src="profile.coverImage" height="400px"/>
        </v-card>
        <!-- should receive the profile's counts as well -->
        <!-- generate a quick layout for the numbers - followers/following/likes -->
        <actions-toolbar :avatar="profile.avatar"/>
      </v-flex>
      <!-- feed this with the profile's feed -->
      <feed :key="profile.username"></feed>
    <!-- </transition-group> -->
  </v-flex>
</template>

<script>
import ActionsToolbar from './Profile/ActionsToolbar.vue'
import UserService from '@/services/UserService'
import Feed from '@/components/Feed/MainLayout.vue'

export default {
  async created () {
    let username = this.$route.params.id
    console.log('username', username)
    this.profile = (await UserService.getUserDetails(username)).data
    console.log('username2 ',this.profile)
  },
  data () {
    return {
      profile: {}
    }
  },
  components: {
    feed: Feed,
    ActionsToolbar
  },
  watch: {
    // '$route' (to, from) {
        // to is just a route, from as well 
        // this.loadedId = to.params.id
    // }
    '$route.params.id': {
      immediate: true,
      async handler (value) {
        console.log('value', value)
        this.profile = (await UserService.getUserDetails(value)).data
      }
    }
  }
}
</script>

<style>

</style>
