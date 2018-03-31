<template>
  <div class="white elevation-2">
    <v-toolbar flat dense class="white">
      <v-toolbar-title> Chirps </v-toolbar-title>
    </v-toolbar>
    <v-divider></v-divider>
    <!-- <transition-group name="slide" type="animation"> -->
      <chirp v-for="(chirp, index) in chirps"
        :key="chirp._id"
        class="px-4 my-2"
        :index="index"
        :chirp="chirp"
        :length="chirps.length"/>
    <!-- </transition-group> -->
  </div>
</template>

<script>
// import socketio from 'socket.io';
import ChirpService from '@/services/ChirpService'
import Chirp from './Chirp.vue'
export default {
  components: {
    Chirp
  },
  data () {
    return {
      chirps: []
    }
  },
  async created () {
    this.$store.dispatch('toggleLoading', true)
    this.updateFeed()
  },
  methods: {
    async updateFeed () {
      this.chirps = (await ChirpService.index()).data
      this.$store.dispatch('toggleLoading', false)
    }
  },
  watch: {
    '$store.state.feedNeedsUpdate': {
      immediate: true,
      async handler (shouldUpdate) {
        console.log('should upd', shouldUpdate)        
      }
    }
  }
}
</script>
