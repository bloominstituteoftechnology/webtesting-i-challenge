const enhancer = require("./enhancer.js");
// test away!

describe("enhancer", () => {
  describe("repair", () => {
    it("should return a new item with durability restored to 100", () => {
      let item = {
        name: "Hammer",
        durability: 50,
        enhancement: 20,
      };
      expect(enhancer.repair(item)).toBe(100);
    });
  });

  describe("succeed", () => {
    it("enhancement should increase by 1, Durability stays the same", () => {
      let item = {
        name: "Hammer",
        durability: 50,
        enhancement: 16,
      };
      expect(enhancer.succeed(item)).toBe(17);
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
});
