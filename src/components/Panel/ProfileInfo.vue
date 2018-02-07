<template>
  <div class="white elevation-2">
    <v-toolbar flat dense class="white">
      <v-toolbar-title>Your Name</v-toolbar-title>
      <slot name="action"/>
    </v-toolbar>
    <!-- create a divider after every post logic in the for loop. -->
    <!-- kinda like that -->
    <!--  <v-divider v-if="index + 1 < items.length"></v-divider> -->
    <v-divider></v-divider>
    <div class="pl-4 pr-4 pt-2 pb-2">
      <slot>
        No slot content defined.
      </slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
