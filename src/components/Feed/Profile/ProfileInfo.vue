<template>
  <v-flex offset-md3 offset-lg5>
    <v-toolbar flat class="grey lighten-5">
      <div>
        <h3 class="headline">{{user.firstName}} {{user.lastName}}</h3>
        <div class="grey--text">
          <div>@{{user.username}}</div>
          <div>{{user.bio}}</div>
        </div>
      </div>
    </v-toolbar>
  </v-flex>
</template>

<script>
// component should receive information about a user
// based on the url - search by username
import UserService from '@/services/UserService'
export default {
  data () {
    return {
      user: {}
    }
  },
  async created () {
    this.user = (await UserService.getUserDetails(this.$route.params.id)).data
  }
}
</script>
