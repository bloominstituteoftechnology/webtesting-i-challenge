const { repair, succeed, fail, get } = require('./enhancer.js');
// test away!
describe('enhancer', () => {
  describe('check to see if items contain name durab and enhancement values', () => {
    it('has a name value', () => {
      const test = { name: 'daggers' }
      expect(test).toHaveProperty('name')
    })
    it('has a durability value', () => {
      const test = { durability: 5 }
      expect(test).toHaveProperty('durability')
    })
    it('has a enhancement value', () => {
      const test = { enhancement: 10 }
      expect(test).toHaveProperty('enhancement')
    })
  })
})