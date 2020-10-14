const { success, fail, repair, get } = require("./enhancer.js");
// test away!
let item = { name: "Spear", enhancement: 0, durability: 20 };

describe("enhancer.js", () => {
  describe("repair", () => {
    it("should return an item with the durability restored to 100", () => {
      let repaired = { name: "Spear", enhancement: 0, durability: 100 };
      expect(repair(item)).toEqual(repaired);
    });
  });

  describe("success", () => {
    it("should return an item with its enhancement increased by 1, up to 20", () => {
      let en = { name: "Spear", enhancement: 1, durability: 100 };
      expect(success(item)).toEqual(en);
    });
  });

  describe("fail", () => {
    let item1 = { name: "Spear", enhancement: 16, durability: 20 };
    let item2 = { name: "Spear", enhancement: 17, durability: 20 };

    let failEn1 = { name: "Spear", enhancement: 1, durability: 95 };
    let failEn2 = { name: "Spear", enhancement: 16, durability: 10 };
    let failEn3 = { name: "Spear", enhancement: 16, durability: 10 };
    it("should return an item with its durability decreased by 5 if enhancement is less than 15", () => {
      expect(fail(item)).toEqual(failEn1);
    });
    it("should return an item with its durability decreased by 10 if enhancement is 15 or more", () => {
      expect(fail(item1)).toEqual(failEn2);
    });
    it("should return an item with its durability decreased by 1 if greater than 16", () => {
      expect(fail(item2)).toEqual(failEn3);
    });
  });
});
