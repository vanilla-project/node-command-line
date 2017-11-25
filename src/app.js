const Example = require('./example')
const example = new Example()

module.exports = class App {

  constructor(output) {
    this.output = output
  }

  run() {
    this.output.log(example.greeting())
  }

}
