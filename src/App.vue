<template>
  <v-app>
    <page-header/>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>


<script>
import PageHeader from '@/components/Header/Index.vue'
import Feed from '@/components/Feed/Index.vue'
export default {
  name: 'app',
  components: {
    PageHeader,
    Feed
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 48px;
}
.danger-alert {
  color: red;
}

.lowercase-toolbar-button {
  text-transform: none;
  font-weight: 700;
}
</style>
