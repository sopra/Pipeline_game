<template>
  <v-container grid-list-sm>
    <v-form lazy-validation>
      <v-text-field
        v-model="username"
        name="username"
        label="UserName"
        required
      />
      <v-text-field
        v-model="mailaddress"
        label="Email Address"
        type="email"
        required
      />
      <v-text-field
        v-model="password"
        name="password"
        label="Password"
        hint="At least 8 characters"
        min="8"
        required
        :rules="[() => ('The email and password you entered don\'t match')]"
        :type="value ? 'password' : 'text'"
      />
      <v-text-field
        v-model="verifypassword"
        name="verify_password"
        label="Verify password"
        hint="Re enter your password"
        min="8"
        required
        :rules="[() => ('The email and password you entered don\'t match')]"
        :type="value ? 'password' : 'text'"
      />
      <v-row>
        <v-col>
          <v-btn text color="success" @click="register">Sing Up</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: '/register',
  props: [
    'username',
    'mailaddress',
    'password',
    'verifypassword'
  ],
  methods: {
    async register () {
      await this.$axios.$put('/api/v2/register')
      // TODO process response
    }
  }
}
</script>

<style>

</style>
