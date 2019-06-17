const enhancer = require("./enhancer.js");

// repair test

describe("enhancer.js", () => {
  describe("repair()", () => {
    it("restores durability to 100", () => {
      expect(enhancer.repair({ durability: 89 }).durability).toBe(100);
    });
  });

  describe("success()", () => {});

  it.todo("should have a max of 100 for durability");
});
