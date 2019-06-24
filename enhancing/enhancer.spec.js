const enhancer = require("./enhancer.js");
// test away!

describe("enhancer.js", function() {
  describe("repair()", () => {
    it("restores durability to 100", () => {
      const item = {
        durability: 130,
        enahncement: 3
      };

      expect(enhancer.repair({ durability: 89 }).durability).toBe(100);
      expect(enhancer.repair({ durability: -89 }).durability).toBe(100);
      expect(enhancer.repair({ durability: 100 }).durability).toBe(100);
      expect(enhancer.repair({ durability: 0 }).durability).toBe(100);
      expect(enhancer.repair({ durability: 0 })).toEqual({ durability: 100 });
    });
  });

  describe("succeed()", () => {
    it("should increase the enhancement by one if less than 20", () => {
      // arrange
      const item = {
        durability: 100,
        enahncement: 3
      };
      // act

      expect(enhancer.succeed({ enhancement: 15 }).enhancement).toBe(16);
    });

    it("should not change the enhancement level if it is 20", () => {
      const item = { enhancement: 20, durability: 80 };
      const expected = {
        enhancement: 20,
        durability: 80
      };

      const actual = enhancer.succeed(item);

      expect(actual).toEqual(expected);
    });
  });

  describe("fail()", () => {});
});

// function makeItem(name, durability) {
//   return {
//     name,
//     durability
//   };
// }

// enhancer.repair should make durability 100
