const { succeed, fail, repair, get } = require("./enhancer.js");
// test away!

describe("enhancer functions", () => {
  describe("repair()", () => {
    let testItem = {
      name: "Mike",
      enhancement: 20,
      durability: 60,
    };
    let result;
    let expected = 100;
    it("/ durability to 100 ", () => {
      result = repair(testItem);
      // console.log(result.durability)
      expect(result.durability).toBe(expected);
    });
  });
  describe("succeed()", () => {
    let testItem = {
      name: "Mike",
      enhancement: 16,
      durability: 61,
    };
    let result;
    let expected = testItem.enhancement + 1;
    it("/ if enhancement > 15 enhancement will be +1 ", () => {
      result = succeed(testItem);

      //  console.log("succed", result)
      expect(result.enhancement).toBe(expected);
    });
    it("/ if enhancement = 20 enhancement will be same ", () => {
      let testItem = {
        name: "Mike",
        enhancement: 20,
        durability: 61,
      };
      let result;
      let expected = testItem.enhancement;
      result = succeed(testItem);

      //console.log("succed", result)
      expect(result.enhancement).toBe(expected);
    });

    it("/ if durability > 80 durability will be same ", () => {
      let testItem = {
        name: "Mike",
        enhancement: 20,
        durability: 81,
      };
      let result;
      let expected = testItem.durability;
      result = succeed(testItem);

      // console.log("succed", result)
      expect(result.durability).toBe(expected);
    });
  });

  describe("fail()", () => {
    it(" If the items enhancement is less than 15, the durability of the item is decreased by 5.", () => {
      let testItem = {
        name: "Mike",
        enhancement: 9,
        durability: 20,
      };
      let result;
      let expected = testItem.durability - 5;
      result = fail(testItem);

      expect(result.durability).toBe(expected);
    });

    it(" If the item's enhancement is 15 or more, the durability of the item is decreased by 10.", () => {
      let testItem = {
        name: "Mike",
        enhancement: 15,
        durability: 20,
      };
      let result;
      let expected = testItem.durability - 10;
      result = fail(testItem);

      expect(result.durability).toBe(expected);
    });

    it("If the item's enhancement level is greater than 16, the enhancement level decreases by 1", () => {
      let testItem = {
        name: "Mike",
        enhancement: 17,
        durability: 20,
      };
      let result;
      let expected = testItem.enhancement - 1;
      result = fail(testItem);
      //console.log(result)
      expect(result.enhancement).toBe(expected);
    });
  });

  describe("get()", () => {
    it(" if the enhancement level is 0, the the name is not modified.", () => {
      let testItem = {
        name: "Mike",
        enhancement: 0,
        durability: 20,
      };
      let result;
      let expected = testItem.name;
      result = get(testItem);

      expect(result.name).toBe(expected);
    });

    it(" if the enhancement level is greater than 0, change the name to include the enhancement level, preceded by a plus sign", () => {
      let testItem = {
        name: "Mike",
        enhancement: 7,
        durability: 20,
      };
      let result;
      let expected = `[+` + testItem.enhancement + `] ` + testItem.name;
      result = get(testItem);
      console.log("he", result);
      expect(result.name).toBe(expected);
    });
  });
});
