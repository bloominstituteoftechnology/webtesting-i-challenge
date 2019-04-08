const enhancer = require('./enhancer');

describe('enhancer', () => {
  describe('fail()', () => {
    it('durability decreases by 5 if enhancement is between 0 and 14', () => {
      //arrange
      const item = {
        enhancement: 14,
        durability: 85
      };

      //act
      const actual = enhancer.fail(item);

      //assert
      expect(actual.durability).toBe(80);
    });

    it('durability decreases by 10 if enhancement is greater than 14', () => {
      //arrange
      const item = {
        enhancement: 15,
        durability: 85
      };

      //act
      const actual = enhancer.fail(item);

      //assert
      expect(actual.durability).toBe(75);
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
    it('should increase enhancement by 1', () => {
      const item = {
        enhancement: 18
      };

      const actual = enhancer.success(item);

      expect(actual.enhancement).toBe(19);
    });
  });
});
