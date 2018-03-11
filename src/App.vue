<template>
  <div id="app">
    <v-app>
      <page-header/>
      <main>
        <v-container
          fluid
          grid-list-xl
          class="px-0 pt-0 mt-0">
          <router-view/>
        </v-container>
      </main>
    </v-app>
  </div>
</template>


<script>
import PageHeader from '@/components/Header/Index.vue'
export default {
  name: 'app',
  components: {
    PageHeader
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
  min-width: 700px;
}
.danger-alert {
  color: red;
}

.lowercase-toolbar-button {
  text-transform: none;
  font-weight: 700;
}
</style>
