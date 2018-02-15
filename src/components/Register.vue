<template>
  <v-layout class="pt-5">
    <v-flex xs6 offset-xs3>
      <panel title="Register">
        <form autocomplete="off">
          <v-text-field
            type="text"
            name="username"
            label="Your username:"
            v-model="username"
            :rules="[required]"
          ></v-text-field>
          <v-text-field
            type="text"
            label="First name:"
            name="firstname"
            v-model="firstname"
            :rules="[required]"
          ></v-text-field>
          <v-text-field
            type="text"
            name="lastname"
            label="Last name:"
            v-model="lastname"
            :rules="[required]"
          ></v-text-field>
          <br>
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
          <div v-html="error" class="danger-alert"/>
          <v-btn
            class="primary"
            dark
            @click="register">
            Register
          </v-btn>
        </form>
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
      username: '',
      firstname: '',
      lastname: '',
      error: null,
      required: (value) => !!value || 'This field is required.'
    }
  },
  methods: {
    async register () {
      try {
        // this is a reference to the component.
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password,
          firstname: this.firstname,
          lastname: this.lastname,
          username: this.username
        })

        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'home'
        })
      } catch (error) {
        // error is what is returned by axios
        // the same one you're exporting as default
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
