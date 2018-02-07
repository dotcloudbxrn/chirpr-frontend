<template>
  <div class="white elevation-2">
    <v-toolbar flat dense class="white">
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <slot name="action" />
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
  props: [
    // will be passed from any component that is using
    // this one
    'title'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
