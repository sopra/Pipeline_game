const blue = 'dodgerblue'
const orange = 'orange'
const silver = 'silver'

const dataSet = [
  'black',
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
