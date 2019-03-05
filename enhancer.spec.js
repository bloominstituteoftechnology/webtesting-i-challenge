const { success, fail, repair } = require('./enhancer.js');

// SUT: System Under Test
// suite > test cases > assertions > matchers
const Item = {
    name: 'Soft Leg-bone',
    type: 'weapon',
    enhancement: 9,
    durability: 60,
    displayName: '[+9] Soft Leg-bone'
}


describe('enhancer.js', () => {
  describe('repair()', () => {
    
    test('returns item with 100 durability', () => {
      expect(repair(Item)).toHaveProperty('durability',100)
      
    });

});
describe('success()', () => {
    
    test('returns item with enhancement', () => {
        expect(success(Item)).toHaveProperty('enhancement',10);
        expect(success(Item)).toHaveProperty('displayName','[+10] Soft Leg-bone');
      
    });

});
describe('fail()', () => {
    
    test('returns item failed enhancement', () => {
        expect(fail(Item)).toHaveProperty('durability',55)
      
    });

});

});
