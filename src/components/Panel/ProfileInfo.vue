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
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
