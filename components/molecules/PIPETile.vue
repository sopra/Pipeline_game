<template>
  <svg v-if="pipeDirection === 'vertical'" :width="cellSize" :height="cellSize * 2" @click="rotate">
    <g>
      <g v-for="(datum, index) in pipePattern" :key="index" :transform="'translate(0, ' + index * cellSize + ')'">
        <PIPECell :ref="'cell' + index" :pipe-data="datum" />
      </g>
    </g>
  </svg>
  <svg v-else :width="cellSize * 2" :height="cellSize" @click="rotate">
    <g>
      <g v-for="(datum, index) in pattern" :key="index" :transform="'translate(' + index * cellSize + ', 0)'">
        <PIPECell :ref="'cell' + index" :pipe-data="datum" />
      </g>
    </g>
  </svg>
</template>

<script>
import PIPECell from '~/components/atoms/PIPECell'

export default {
  name: 'PIPETile',
  components: {
    PIPECell
  },
  props: {
    cellSize: {
      type: Number,
      validator (value) {
        return Number.isInteger(value)
      },
      default: 100
    },
    direction: {
      type: String,
      default: 'vertical'
    },
    pattern: {
      type: Array,
      // vertical -> top, bottom
      // horizontal -> left, right
      default () {
        return [ [0, 0, 1, 1], [0, 3, 3, 0] ]
      }
    }
  },
  data () {
    return {
      pipePattern: this.pattern,
      pipeDirection: this.direction
    }
  },
  methods: {
    rotate () {
      if (this.pipeDirection === 'vertical') {
        this.pipeDirection = 'horizontal'
        this.pipePattern[0] = [this.pipePattern[1], this.pipePattern[1] = this.pipePattern[0]][0]
      } else {
        this.pipeDirection = 'vertical'
      }
      this.pipePattern.forEach((v) => {
        v.unshift(v.pop())
      })
      console.log(this.pipePattern)
    }
  }
}
</script>

<style>

</style>
