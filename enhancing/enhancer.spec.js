const enhancer = require("./enhancer.js");

// repair test

describe("enhancer.js", () => {
  describe("repair()", () => {
    it("restores durability to 100", () => {
      expect(enhancer.repair({ durability: 89 }).durability).toBe(100);
      expect(enhancer.repair({ durability: -100 }).durability).toBe(100);
      expect(enhancer.repair({ durability: "a" }).durability).toBe(100);
    });
  });

  describe("success()", () => {});

  it.todo("should have a max of 100 for durability");
});

// success test

describe("enhancer.js", () => {
  describe("succeed()", () => {
    it("increases items enhancement by 1", () => {
      expect(enhancer.succeed({ enhancement: 19 }).enhancement).toBe(20);
      expect(enhancer.succeed({ enhancement: 18 }).enhancement).toBe(19);
    });
  });
  it.todo("should have a max of 20 for enhancement");
});
