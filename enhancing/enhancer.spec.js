const enhancer = require('./enhancer');
const { repair } = require('./enhancer');

describe('enhancer', () => {
  describe('fail()', () => {
    it('durability decreases by 5 if enhancement is between 0 and 14', () => {
      const item = {
        enhancement: 14,
        durability: 55
      };
      const actual = enhancer.fail(item);
      expect(actual.durability).toBe(50);
    });

    it('durability decreases by 10 if enhancement is greater than 14', () => {
      const item = {
        enhancement: 15,
        durability: 55
      };

      const actual = enhancer.fail(item);

      expect(actual.durability).toBe(45);
    });

    it('If enhancement is 14 or lower, the item cannot be enhanced if the durability is below 25', () => {
      const item = {
        enhancement: 14,
        durability: 24
      };

      expect(enhancer.fail(item)).toEqual(item);
    });

    it('should decrease enhancement if item is enhanced greater than 16', () => {
      const item = {
        enhancement: 18
      };

      const actual = enhancer.fail(item);

      expect(actual.enhancement).toBe(17);
    });
  });

  describe('success()', () => {
    it('Adds enhancement by +1', () => {
      const item = {
        enhancement: 16
      };

      const actual = enhancer.success(item);

      expect(actual.enhancement).toBe(17);
    });
  });
  describe('repair()', () => {
    it('returns durabilty to 100', () => {
      const item = {
        name: 'Bo jangles',
        type: 'dwarf',
        durability: 98
      };

      expect(repair(item).durability).toEqual(100);
    });
  });
});
