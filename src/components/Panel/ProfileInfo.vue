<template>
  <div>
    <v-toolbar flat class="grey lighten-5 mt-5">
      <div>
        <h3 class="headline">Your Name</h3>
        <div class="grey--text">
          <div>@userName</div>
          <div>Your city</div>
        </div>
      </div>
      <slot name="action"/>
    </v-toolbar>
    <!-- create a divider after every post logic in the for loop. -->
    <!-- kinda like that -->
    <!--  <v-divider v-if="index + 1 < items.length"></v-divider> -->
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
