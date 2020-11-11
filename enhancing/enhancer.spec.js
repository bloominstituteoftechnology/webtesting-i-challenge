const {success, fail, repair, get} = require('./enhancer.js');
// test away!

describe('learning about tests, assertions and matchers', () => {
    it('sanity check', () => { // the test
      expect(2 + 3).toBe(5) // an assertion
      expect(2 + 2).toBe(4) // another assertion
    })
})

describe('success function', () => {
  it('exists', () => {
    expect(success).toBeDefined()
  })
})

describe('fail function', () => {
    it('exists', () => {
      expect(fail).toBeDefined()
    })
  })

  describe('repair function', () => {
    it('exists', () => {
      expect(repair).toBeDefined()
    })
  })

  describe('get function', () => {
    it('exists', () => {
      expect(get).toBeDefined()
    })
  })