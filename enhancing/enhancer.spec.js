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

  it.todo("should have a max of 100 for durability");
});

function makeItem(name, durability) {
  return {
    name,
    durability
  };
}

// enhancer.repair should make durability 100
