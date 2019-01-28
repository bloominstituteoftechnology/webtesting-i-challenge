const enhancer = require('../enhancer');

describe('Testing enchanting system', () => {
   describe('succes() method', () => {
      const original = {
         originalName: 'Excaliber',
         name: 'Excaliber',
         type: 'weapon',
         durability: 100,
         level: 15,
      };

      const expected = {
         originalName: 'Excaliber',
         name: 'PRI Excaliber',
         type: 'weapon',
         durability: 100,
         level: 16,
      };

      it('should increase the level of the item by 1', () => {
         const item = enhancer.success(original);
         expect(item).toEqual(expected);
      });
   });

   //    describe('fail() method'), () => {};

   //    describe('repair() method'), () => {};
});
