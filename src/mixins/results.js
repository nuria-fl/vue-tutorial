export default {
  data() {
    return {
      resultHidden: true
    }
  },
  methods: {
    showResult() {
      this.resultHidden = false
    },
    hideResult() {
      this.resultHidden = true
    }
  }
}
