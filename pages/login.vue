<template>
  <v-container grid-list-sm>
    <v-form>
      <v-text-field
        name="id"
        label="label"
        :value="id"
        placeholder="id"
        single-line
      />
      <v-text-field
        name="name"
        label="Enter your password"
        hint="At least 8 characters"
        min="8"
        :value="password"
        type='password'
        placeholder="password"
      />
      <v-btn color="success" @click="login()">
        Sign in
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: 'LOGIN',
  components: {},
  mixins: [],
  data () {
    return {
      id: '',
      password: ''
    }
  },
  methods: {
    login () {
    }
  }
}
</script>

<style>

</style>
