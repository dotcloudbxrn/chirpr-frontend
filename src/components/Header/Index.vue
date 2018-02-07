<template>
  <v-toolbar app dense fixed dark class="white">
    <v-spacer></v-spacer>
    <!-- HOME BUTTON -->
    <v-toolbar-items style="width:400px;">
    <!-- <v-layout> -->
      <v-btn flat light color="primary" @click="redirectHome">
        <v-icon left>account_balance</v-icon>
        Home
      </v-btn>
    <!-- </v-layout> -->
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <!-- SITE LOGO -->
    <span id="icon" class="mx-auto">
      <v-icon color="primary" large @click="cool">bubble_chart</v-icon>
      <!-- <v-progress-circular v-else indeterminate color="primary"></v-progress-circular> -->
    </span>
    <v-spacer></v-spacer>
    <!-- RIGHT-SIDE PANEL ITEMS -->
    <items-right/>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script>
import ItemsRight from './ItemsRight.vue'
import Cool from '@/services/Cool'
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
      // this.$store.dispatch('greet', )
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
