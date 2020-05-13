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
