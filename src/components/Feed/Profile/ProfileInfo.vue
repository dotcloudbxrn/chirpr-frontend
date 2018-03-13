<template>
  <v-flex offset-md3 offset-lg5>
    <v-toolbar flat class="grey lighten-5">
      <div>
        <h3 class="headline">{{user.firstName}} {{user.lastName}}</h3>
        <div class="grey--text">
          <div>@{{user.username}}</div>
          <div>Bio</div>
        </div>
      </div>
    </v-toolbar>
  </v-flex>
</template>

<script>
export default {
  props: ['user']
}
</script>
