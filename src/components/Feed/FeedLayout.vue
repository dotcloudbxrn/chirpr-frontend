<template>
  <div class="white elevation-2">
    <v-toolbar flat dense class="white">
      <v-toolbar-title> Chirps </v-toolbar-title>
    </v-toolbar>
    <v-divider></v-divider>
    <div v-for="(chirp, index) in chirps" :key="chirp._id" class="px-5 my-3">
      <p class="chirpAuthor"> {{chirp.creator.firstname}} {{chirp.creator.lastname}} @{{chirp.creator.username }}</p>
      <p class="chirpContent"> {{chirp.chirpContent}} </p>
      <v-divider v-if="index + 1 < chirps.length"></v-divider>
    </div>
  </div>
</template>

<script>
import ChirpService from '@/services/ChirpService'
export default {
  data () {
    return {
      chirps: []
    }
  },
  async created () {
    this.chirps = (await ChirpService.index()).data
    console.log(this.chirps)
  }
}
</script>

<style scoped>
.chirpAuthor {
  padding: 0px 150px 0px 0px;
  color: #707172;
}

.chirpContent {
  text-align: left;
  overflow-wrap: break-word;
  padding: 10px 30px;
}
</style>
