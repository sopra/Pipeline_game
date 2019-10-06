<template>
  <v-app>
    <div>
      <v-app-bar dense color="deep-purple accent-4" dark >
        <v-app-bar-nav-icon />
        <v-toolbar-title>PIPELINE</v-toolbar-title>
      </v-app-bar>
    </div>
    <v-content>
      <nuxt />
    </v-content>
    <v-footer>
      <v-card flat tile light width="100%" class="text-center">
        <v-card-text light>
          PIPELINE (C) CapStone Games<br />Designed by Ryan Courtney
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
}
</script>

<style>
</style>
