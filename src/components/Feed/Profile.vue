<template>
  <v-layout>
    <v-flex xs12>
      <v-card>
        <v-card-media src="https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpapercave.com%2Fwp%2F6rh80gM.jpg&f=1" height="400px">
        </v-card-media>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-avatar>
              <img id="woah" src="https://randomuser.me/api/portraits/men/1.jpg">
            </v-avatar>
            <v-spacer></v-spacer>
              <v-btn flat>One <br> 19</v-btn>
              <v-btn flat>Two <br> 5</v-btn>
              <v-btn flat>Three <br> 12</v-btn>
              <v-btn flat>Four <br> 0</v-btn>
            <v-spacer></v-spacer>
            <v-btn
              round
              color="primary"
              dark
              outline
              class="lowercase-toolbar-button"
              >Edit Profile
            </v-btn>
            <v-spacer></v-spacer>
        </v-card-actions>          
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {

}
</script>

<style>
#woah {
  position: absolute;
  width: 200px;
  height: 200px;
  border: 5px solid #fff;
  cursor: pointer;
}
</style>
