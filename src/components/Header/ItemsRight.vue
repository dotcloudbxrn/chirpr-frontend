<template>
  <v-toolbar-items style="max-width:400px; height: 80%;">
    <v-layout row align-center>
      <!-- items that show when logged in -->
      <v-text-field
        id="header-search"
        single-line
        light
        hide-details
        prepend-icon="search"
        name="header_search"
        label="Search Chirper"
      ></v-text-field>
    </v-layout>
    <v-menu v-if="$store.state.isUserLoggedIn" offset-y left>
      <v-btn slot="activator" icon class="mx-2">
        <v-avatar id="profile" size="38px">
          <img src="https://randomuser.me/api/portraits/men/1.jpg">
        </v-avatar>
      </v-btn>
      <v-list>
        <v-list-tile
        v-for="item in items"
        :key="item.title"
        @click="item.action">
          <v-list-tile-title>
            {{ item.title }}
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-btn
      class="lowercase-toolbar-button"
      round
      v-if="$store.state.isUserLoggedIn"
      color="primary"
      dark
      >Chirp
    </v-btn>
    <!-- items that show when not logged in -->
    <v-btn
      round
      outline
      flat
      color="primary"
      class="lowercase-toolbar-button primary mx-2"
      v-if="!$store.state.isUserLoggedIn"
      :to="{
        name: 'login'
      }">Login
    </v-btn>
    <v-btn
      name="register"
      round
      outline
      flat
      color="primary"
      class="lowercase-toolbar-button primary mx-2"
      :to="{
        name: 'register'
      }"
      v-if="!$store.state.isUserLoggedIn"
      >Sign Up
    </v-btn>
  </v-toolbar-items>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          title: 'Profile',
          action: this.visitProfile
        },
        {
          title: 'Night mode',
          // TO-DO IMPLEMENT THEME SWAP!
          action: this.visitProfile
        },
        {
          title: 'Log out',
          action: this.logout
        }
      ]
    }
  },
  methods: {
    visitProfile () {
      this.$router.push({
        name: 'profile'
      })
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'home'
      })
    }
  }
}
</script>

<style scoped>
/* li:first-child {
  /* padding: 5px 0px; */
  /* border-bottom: 1px solid rgb(114, 114, 114);
  border-top: 1px solid rgb(114, 114, 114);   */
/* */

#profile {
  cursor: pointer;
}

</style>
