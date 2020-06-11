const { succeed, fail, repair } = require("./enhancer.js");
// test away!

describe("enhancer functionality", () => {
  describe("repair()", () => {
    it("returns a new item with durability restored to 100", () => {
      expect(repair({ name: "yen", durability: 50, enhancement: 10 })).toEqual({
        name: "yen",
        durability: 100,
        enhancement: 10
      });
    });
  });
});
