const expect = require('chai').expect
const Example = require('../src/example')

describe('Example', () => {

  const example = new Example()

  it('does something', () => {
    expect(example.greeting()).to.eq('Node Example')
  })

})

