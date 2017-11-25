const {Console} = require('console')
const fs = require('fs')

const expect = require('chai').expect

const App = require('../src/app')
const Example = require('../src/example')

describe('App', () => {

  const example = new Example()
  const filePath = 'stdout.log'

  after(() => {
    fs.unlinkSync(filePath)
  })

  it('prints the example output', () => {
    const output = fs.createWriteStream(filePath)
    const console  = new Console(output)
    const app = new App(console)

    app.run()

    fs.readFileSync(filePath, 'utf-8', (err, fileContents) => {
      expect(fileContents.trim()).to.eq(example.greeting())
    })
  })

})
