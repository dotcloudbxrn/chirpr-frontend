<template>
  <div class="white elevation-2">
    <v-toolbar flat dense class="white">
      <v-toolbar-title> Chirps </v-toolbar-title>
    </v-toolbar>
    <v-divider></v-divider>
    <chirp v-for="(chirp, index) in chirps"
          :key="chirp._id"
          class="px-4 my-2"
          :index="index"
          :chirp="chirp"
          :length="chirps.length"/>
  </div>
</template>

<script>
import {eventBus} from '@/main'
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
    this.chirps = (await ChirpService.index()).data
    eventBus.$on('newChirp', async () => {
      this.chirps = (await ChirpService.index()).data
      console.log(this.chirps)
    })
  }
}
</script>
