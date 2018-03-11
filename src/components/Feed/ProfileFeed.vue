<template>
  <v-layout justify-center class="pt-2">
    <v-flex xs2>
      <profile-info></profile-info>
    </v-flex>
    <v-flex xs5>
      <feed-layout></feed-layout>
    </v-flex>
    <v-flex xs2>
      <panel title="Who to Follow"></panel>
    </v-flex>
  </v-layout>
</template>

<script>
import ProfileInfo from '@/components/Panel/ProfileInfo.vue'
import FeedLayout from './FeedLayout.vue'

export default {
  components: {
    ProfileInfo,
    FeedLayout
  }
}
</script>

<style>

</style>
