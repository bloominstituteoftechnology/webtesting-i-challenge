const enhancer = require("./enhancer.js");
// test away!

describe("a repair(item) method that accepts an item object and returns a new item with the durability restored to 100", () => {
  it("should accept an object and return 100 durability", () => {
    expect(
      enhancer.repair({
        name: "Item1",
        durability: 0,
        enhancement: 18,
      })
    ).toEqual({
      name: "Item1",
      enhancement: 18,
      durability: 100,
    });
  });

  it("should accept an object, ensures the returned value is 100, and not anythign else", () => {
    expect(
      enhancer.repair({
        name: "Item1",
        durability: 0,
        enhancement: 18,
      })
    ).not.toEqual({
      name: "Item1",
      enhancement: 18,
      durability: 98,
    });
  });
});

describe("a success(item) method that accepts an item object and returns a new item object modified according to the rules defined by the client for enhancement success", () => {
    it("should return item's enhancement increases by 1.", () => {
      expect(
        enhancer.succeed({
          name: "Item2",
          durability: 0,
          enhancement: 1,
        })
      ).toEqual({
        name: "Item2",
        durability: 0,
        enhancement: 2,
      });
    });
  
    it("should return ehancement level 20 if passed in 20", () => {
      expect(
        enhancer.succeed({
          name: "Item2",
          durability: 0,
          enhancement: 20,
        })
      ).toEqual({
        name: "Item2",
        durability: 0,
        enhancement: 20,
      });
  
      expect(
        enhancer.succeed({
          name: "Item2",
          durability: 0,
          enhancement: 20,
        })
      ).not.toEqual({
        name: "Item2",
        durability: 0,
        enhancement: 21,
      });
    });
  });
