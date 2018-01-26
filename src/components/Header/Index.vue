<template>
  <v-layout >
    <v-toolbar app dense fixed dark class="grey lighten-4 px-4">
      <!-- HOME BUTTON -->
      <v-toolbar-items style="width:400px;">
      <v-layout>
        <v-btn flat light color="primary" @click="redirectHome">
         <v-icon left>home</v-icon>
          Home
        </v-btn>
      </v-layout>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <!-- SITE LOGO -->
      <span id="icon" class="mx-auto">
        <v-icon color="primary" large @click="cool">bubble_chart</v-icon>  
      </span>
      <v-spacer></v-spacer>
      <!-- RIGHT-SIDE PANEL ITEMS -->
      <items-right/>
    </v-toolbar>
  </v-layout>
</template>

<script>
import Cool from '@/services/Cool'
import ItemsRight from './ItemsRight.vue'
export default {
  data: () => {
    return {

    }
  },
  components: {
    ItemsRight
  },
  methods: {
    redirectHome () {
      this.$router.push({
        name: 'home'
      })
    },
    async cool () {
      console.log("okay?")
      this.cool = (await Cool.index()).data
      alert(this.cool.hi)
    }
  }
}
</script>

<style>

#lowercase-toolbar-button {
  text-transform: none;
  font-weight: 700;
}

#profile {
  cursor: pointer;
}

#icon {
  cursor: pointer;
  user-select: none;
}
</style>
