<template>
  <v-layout justify-center class="pt-2">
    <v-flex xs3>
      <v-card>
        <v-card-media src="https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpapercave.com%2Fwp%2F6rh80gM.jpg&f=1" height="200px"></v-card-media>
        <v-card-title>
          <v-avatar>
            <img id="hah" src="https://randomuser.me/api/portraits/men/1.jpg">
          </v-avatar>
          <div class="pl-4">
            <h3 class="headline">Real Name</h3>
            <span class="grey--text">@userName</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat>Tweets</v-btn>
          <v-btn flat>Following</v-btn>
          <v-btn flat>Followers</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex xs5>
      <panel title="Chirps"></panel>
    </v-flex>
    <v-flex xs3>
      <panel title="Who to Follow"></panel>
    </v-flex>
  </v-layout>
</template>

<script>
export default {

}
</script>

<style>
#hah {
  position: absolute;
  left: 10px;
  bottom: 100px;
  width: 80px;
  height: 80px;
  border: 3px solid #fff;
  cursor: pointer;
}
</style>
