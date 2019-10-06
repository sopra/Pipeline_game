<template>
  <v-container grid-list-md>
    <v-row>
      <v-col>
        <v-slider v-model="size" step="0"></v-slider>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col v-for="(item, index) in this.$store.state.pipes.pipes" :key=index>
        <PIPETile :cell-size="size" :pattern="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PIPETile from '~/components/molecules/PIPETile'

export default {
  name: 'debug',
  components: {
    PIPETile
  },
  mixins: [],
  props: {},
  data () {
    return {
      size: 100
    }
  },
  mounted () {
  },
  methods: {}
}
</script>

<style>

</style>
