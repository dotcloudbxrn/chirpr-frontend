<template>
  <v-toolbar-items style="max-width:400px;">
    <v-layout row align-center>
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
    <div class="d-flex align-center" style="margin-left: auto">
      <v-menu offset-y left>
        <v-btn slot="activator" icon>
          <v-avatar id="profile" size="38px">
            <img src="https://randomuser.me/api/portraits/men/1.jpg">
          </v-avatar>
        </v-btn>
        <v-list>
          <v-list-tile
          v-for="item in items"
          :key="item.title"
          router
          :to="item.link">
            <v-list-tile-title>
              {{ item.title }}
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-btn
        class="lowercase-toolbar-button"
        round
        color="primary"
        dark
        >Chirp
      </v-btn>
    </div>
  </v-toolbar-items>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: 'YourUsername',
        link: '/profile'
      },
      {
        title: 'Profile',
        link: '/profile'
      },
      {
        title: 'Log out',
        link: '/'
      },
      {
        title: 'Night mode',
        link: '/'
      }
    ]
  })
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
