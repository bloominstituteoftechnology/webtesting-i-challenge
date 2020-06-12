const { succeed, fail, repair, get } = require('./enhancer.js');
// test away!

describe('item functions', () => {
  describe('succeed test', () => {
    it('should enhance item by 1', () => {

      const item = {
        name: "succeed",
        enhancement: 18,
        durability: 100
      };

      const expected = {
        name: "succeed",
        enhancement: 19,
        durability: 100
      };

      const succeedItem = succeed(item);

      expect(succeedItem).toStrictEqual(expected);

    });
  });

  describe('fail test', () => {
    it('should decrease durability by 5', () => {

      const lessThan = {
        name: "fail",
        enhancement: 10,
        durability: 80
      };

      const expectedFail = {
        name: "fail",
        enhancement: 10,
        durability: 75
      };

      const failItem = fail(lessThan);

      expect(failItem).toStrictEqual(expectedFail);
    })

    it("should decrease dura by 10", () => {

      const lessThan = {
        name: "fail",
        enhancement: 20,
        durability: 80
      };

      const expectedFail = {
        name: "fail",
        enhancement: 20,
        durability: 70
      };

      const failItem = fail(lessThan);

      expect(failItem).toStrictEqual(expectedFail);
    });

    it("should decrease enhance by 1", () => {

      const lessThan = {
        name: "fail",
        enhancement: 20,
        durability: 80
      };

      const expectedFail = {
        name: "fail",
        enhancement: 19,
        durability: 70
      };

      const failItem = fail(lessThan);

      expect(failItem).toStrictEqual(expectedFail);
    });
  });

  describe('repair item', () => {
    it('should repair dura to 100', () => {

      const repairItem = {
        name: 'repair',
        enhancement: 19,
        durability: 80
      };

      const expectedRepair = {
        name: 'repair',
        enhancement: 19,
        durability: 100
      };

      const duraRepair = repair(repairItem);

      expect(duraRepair).toStrictEqual(expectedRepair);
    })
  })

});
