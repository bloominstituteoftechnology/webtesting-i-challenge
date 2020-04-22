const { repair, succeed, fail, get } = require('./enhancer.js');
// test away!
describe('enhancer', () => {
  describe('check to see if items contain name durab and enhancement values', () => {
    it('has a name value', () => {
      const test = { name: 'daggers' }
      expect(test).toHaveProperty('name')
    })
  })
})