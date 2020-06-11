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

  describe("succeed()", () => {
    it("adds enhancement by 1 if below 20", () => {
      const item = { name: "me", durability: 75, enhancement: 18 };
      expect(succeed(item)).toEqual({
        name: "me",
        durability: 75,
        enhancement: 19
      });
    });

    it("does not change enhancement if already maxed out at 20", () => {
      const item = { name: "me", durability: 75, enhancement: 20 };
      expect(succeed(item)).toEqual({
        name: "me",
        durability: 75,
        enhancement: 20
      });
    });
  });

  describe("fail()", () => {
    it("reduces durability by 5 if enhancement less than 15", () => {
      const item = { name: "me", durability: 50, enhancement: 12 };
      expect(fail(item)).toEqual({
        name: "me",
        durability: 45,
        enhancement: 12
      });
    });

    it("reduces durability by 10 if enhancement is 15 or more", () => {
      const item = { name: "me", durability: 50, enhancement: 15 };
      expect(fail(item)).toEqual({
        name: "me",
        durability: 40,
        enhancement: 15
      });
    });

    it("reduces enhancement by 1 if enhancement is greater than 16", () => {
      const item = { name: "me", durability: 50, enhancement: 18 };
      expect(fail(item)).toEqual({
        name: "me",
        durability: 40,
        enhancement: 17
      });
    });
  });
});
