<template>
  <v-toolbar app dense fixed dark class="white">
    <v-spacer/>
    <v-toolbar-items style="width:400px;">
      <v-btn flat light color="primary" @click="redirectHome">
        <v-icon left>
          account_balance
        </v-icon>Home
      </v-btn>
    </v-toolbar-items>
    <v-spacer/>
    <span id="logo">
      <v-icon color="primary"
        large
        @click="redirectHome"
        >bubble_chart
      </v-icon>
    </span>
    <v-spacer/>
    <items-right/>
    <v-spacer/>
  </v-toolbar>
</template>

<script>
import ItemsRight from './ItemsRight.vue'
export default {
  data: () => {
    return {

    }
  },
  components: {
    ItemsRight
  },
  methods: {
    redirectHome () {
      this.$router.push({
        name: 'home'
      })
    }
  }
}
</script>

<style>
#logo {
  cursor: pointer;
}
</style>
