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

   describe('fail() method', () => {
      const original = {
         originalName: 'Excaliber',
         name: '[+5] Excaliber',
         type: 'weapon',
         durability: 80,
         level: 5,
      };

      const weapon = {
         originalName: 'Excaliber',
         name: '[+10] Excaliber',
         type: 'weapon',
         durability: 80,
         level: 10,
      };

      const expected = {
         originalName: 'Excaliber',
         name: '[+10] Excaliber',
         type: 'weapon',
         durability: 75,
         level: 10,
      };

      it('should fail an enchancement', () => {
         expect(enhancer.fail(weapon)).toEqual(expected);
         expect(() => enhancer.fail(original)).toThrow(); // When using toThrow(), expect parameter needs to be a function
      });
   });

   describe('repair() method', () => {
      const original = {
         originalName: 'Excaliber',
         name: 'PRI Excaliber',
         type: 'weapon',
         durability: 40,
         level: 16,
      };

      const expected = {
         originalName: 'Excaliber',
         name: 'PRI Excaliber',
         type: 'weapon',
         durability: 100,
         level: 16,
      };

      it('should increase the level of the item by 1', () => {
         const item = enhancer.repair(original);
         expect(item).toEqual(expected);
      });
   });
});
