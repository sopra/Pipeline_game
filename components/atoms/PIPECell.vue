<template>
  <svg :width="cellSize" :height="cellSize">
    <g :stroke="strokeColor">
      <rect x="0" y="0" :width="cellSize" :height="cellSize" fill="white" />
      <g v-if="pipeData[0] === pipeData[1]" :stroke="pipeStrokeColor">
        <circle :cx="cellSize" cy="0" :r="cellSize * 0.65" :fill="colorSchema[pipeData[0]]" />
        <circle :cx="cellSize" cy="0" :r="cellSize * 0.35" fill="white" />
        <circle cx="0" :cy="cellSize" :r="cellSize * 0.65" :fill="colorSchema[pipeData[2]]" />
        <circle cx="0" :cy="cellSize" :r="cellSize * 0.35" fill="white" />
      </g>
      <g v-else-if="pipeData[0] === pipeData[2]" :stroke="pipeStrokeColor">

        <rect :x="cellSize * 0.35" y="0" :width="(cellSize * 0.30)" :height="cellSize" :fill="colorSchema[pipeData[0]]" />
        <rect x="0" :y="cellSize * 0.35" :width="cellSize" :height="(cellSize * 0.30)" :fill="colorSchema[pipeData[1]]" />
      </g>
      <g v-else :stroke="pipeStrokeColor">
        <circle cx="0" cy="0" :r="cellSize * 0.65" :fill="colorSchema[pipeData[3]]" />
        <circle cx="0" cy="0" :r="cellSize * 0.35" fill="white" />
        <circle :cx="cellSize" :cy="cellSize" :r="cellSize * 0.65" :fill="colorSchema[pipeData[1]]" />
        <circle :cx="cellSize" :cy="cellSize" :r="cellSize * 0.35" fill="white" />
      </g>
    </g>
  </svg>
</template>

<script>
import colors from '~/mixins/colors'

export default {
  name: 'PIPECell',
  mixins: [ colors ],
  props: {
    cellSize: {
      type: Number,
      validator (value) {
        return Number.isInteger(value)
      },
      default: 100
    },
    strokeColor: {
      type: String,
      validator (value) {
        return typeof (value) === 'string' || value instanceof String
      },
      default: 'whitesmoke'
    },
    pipeStrokeColor: {
      type: String,
      validator (value) {
        return typeof (value) === 'string' || value instanceof String
      },
      default: 'black'
    },
    //
    // pipe data struct
    //
    // [ 1, 1, 2, 2 ]
    // [0] => top, [1] => right, [2] => down, [4] => left
    // 0 -> null
    // 1 -> orange1
    // 2 -> silver1
    // 3 -> blue1
    // 4 -> orange2
    // 5 -> silver2
    // 6 -> blue2
    // 7 -> machine
    //
    pipeData: {
      type: Array,
      required: true,
      validator (value) {
        return value.map((v) => {
          return Number.isInteger(v)
        }).filter((v) => {
          return v === true
        }).length === 4
      }
    }
  },
  methods: {
  }
}
</script>

<style>

</style>
