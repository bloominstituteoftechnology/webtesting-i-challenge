const {
    success,
    fail,
    repair,
    get
} = require("./enhancer");

let item = { name: "Ballista", enhancement: 0, durability: 20 };

describe("enhancer.js", () => {
  describe("repair", () => {
    it("returns item with durability set to 100", () => {
        let fixed = { name: "Ballista", enhancement: 0, durability: 100 };
        expect(repair(item)).toEqual(fixed);
    });
  });

  describe("success", () => {
    it("returns item with enhancement increased by 1-20", () => {
      let increase = { name: "Ballista", enhancement: 1, durability: 100 };
      expect(success(item)).toEqual(increase);
    });
  });

    describe("fail", () => {
      
    let firstItem = { name: "Ballista", enhancement: 16, durability: 20 };
    let secondItem = { name: "Ballista", enhancement: 17, durability: 20 };

    let fail1 = { name: "Ballista", enhancement: 1, durability: 95 };
    let fail2 = { name: "Ballista", enhancement: 16, durability: 10 };
      let fail3 = { name: "Ballista", enhancement: 16, durability: 10 };
      
    it("decreases value by 5 if enhancement is less than 15", () => {
      expect(fail(item)).toEqual(fail1);
    });
    it("decreases value by 10 if enhancement is 15 or more", () => {
      expect(fail(firstItem)).toEqual(fail2);
    });
    it("decreases value by 1 if greater than 16", () => {
      expect(fail(secondItem)).toEqual(fail3);
    });
  });
});