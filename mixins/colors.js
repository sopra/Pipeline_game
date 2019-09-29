const blue = 'dodgerblue'
const orange = 'orange'
const silver = 'silver'

const dataSet = [
  orange,
  silver,
  blue,
  orange,
  silver,
  blue
]

export default {
  data () {
    return {
      colorSchema: [].concat(dataSet)
    }
  }
}
