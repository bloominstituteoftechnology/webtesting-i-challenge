const enhancer = require("./enhancer.js");
// test away!

describe("enhancer", () => {
  describe("repair", () => {
    it("should return a new item with durability restored to 100", () => {
      let testItem = {
        name: "Hammer",
        durability: 50,
        enhancement: 20,
      };
      expect(enhancer.repair(testItem)).toMatchObject({
        durability: 100,
      });
      //   toMatchBoject()
      // toEqual()
    });
  });

  describe("succeed", () => {
    it("enhancement should increase by 1, Durability stays the same", () => {
      let testItem = {
        name: "Sword",
        durability: 50,
        enhancement: 16,
      };

      expect(enhancer.succeed(testItem)).toBe(17);
    });

    it("Enhancement doesnt change if its at 20", () => {
      let item = {
        name: "Shield",
        durability: 50,
        enhancement: 20,
      };
      expect(enhancer.succeed(item)).toBe(20);
    });
  });

  describe("fail", () => {
    it("Durability should decrease by 5 if Enhancement is less than 15", () => {
      let item = {
        name: "Guns",
        durability: 40,
        enhancement: 9,
      };
      expect(enhancer.fail(item)).toBe(35);
    });

    it("Two things should be decreased by 5", () => {
      const one = {
        name: "sword",
        durability: 50,
        enhancement: 15,
      };
      let item = {
        name: "shield",
        durability: 40,
        enhancement: 15,
      };
      expect(enhancer.fail(one)).toStrictEqual(item);
    });
  });
});
