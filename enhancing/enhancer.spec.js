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
  describe('items enhancement number is in fact a number and between 0 and 20 oooof', () => {
    it('items enhancement value is indeed a number instead of idk a string or empty objects and arrays or even just inside an array maybe who knows.... test', () => {
      const test1 = { enhancement: 5 }
      expect(typeof test1.enhancement).toBe('number')
      const test2 = { enhancement: '5' }
      expect(typeof test2.enhancement).not.toBe('number')
    })
    it.todo('oof check to see if it is between0 and 20')
  })
})