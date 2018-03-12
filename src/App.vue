<template>
  <div id="app">
    <v-app id="styleMe">
      <page-header/>
      <main>
        <v-container
          fluid
          grid-list-xl
          class="px-0 pt-0 mt-0">
          <transition appear name="slide" type="animation">
            <router-view/>
          </transition>
        </v-container>
      </main>
    </v-app>
  </div>
</template>


<script>
import PageHeader from '@/components/Globals/Header/Index.vue'
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


.slide-enter {
  opacity: 0;
}

.slide-enter-active {
  /* you add forwards so that the element stays in the position and doesn't snap back */
  animation: 300ms ease forwards;
  transition: all 300ms;
}

.slide-leave {
  display: none;
}

.slide-leave-active {
  animation: 300ms ease forwards;
  transition: all 300ms;
  opacity: 0;
  position: absolute;
}

</style>
