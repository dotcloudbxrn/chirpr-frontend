<template>
  <v-layout class="pt-5">
    <v-flex xs6 offset-xs3>
      <panel title="Login">
        <v-text-field
          type="email"
          name="email"
          label="Email"
          v-model="email"
          :rules="[required]"
        ></v-text-field>
        <v-text-field
          type="password"
          name="password"
          v-model="password"
          label="Password"
          :rules="[required]"
        ></v-text-field>
        <div v-html="error" class="danger-alert" />
        <v-btn
          class="primary"
          dark
          @click="login">
          Log In
        </v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null,
      required: (value) => !!value || 'This field is required.'
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })

        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'home'
        })
      } catch (error) {
        // error is what is returned by axios
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
