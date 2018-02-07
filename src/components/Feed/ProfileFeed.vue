<template>
  <v-layout justify-center class="pt-2">
    <v-flex xs2>
      <profile-info></profile-info>
    </v-flex>
    <v-flex xs5>
      <panel title="Chirps"></panel>
    </v-flex>
    <v-flex xs2>
      <panel title="Who to Follow"></panel>
    </v-flex>
  </v-layout>
</template>

<script>
import ProfileInfo from '@/components/Panel/ProfileInfo.vue'
export default {
  components: {
    ProfileInfo
  }
}
</script>

<style>

</style>
