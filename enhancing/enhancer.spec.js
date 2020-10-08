const enhancer = require('./enhancer.js');
// test away!

describe("repair", () => {
    const item = {
      name: "Item 1",
      enhancement: 10,
      durability: 35,
    };
  
    it("can repair an items durability to 100", () => {
      const expectedOutput = 100;
      const actualOutput = enhancer.repair(item);
      expect(actualOutput.durability).toBe(expectedOutput);
    });
});

describe("success", () => {
    const item = {
      name: "Item 1",
      enhancement: 10,
      durability: 35,
    };
  
    it("can enhance an item by 1", () => {
      const expectedOutput = 11;
      const actualOutput = enhancer.success(item);
      expect(actualOutput.enhancement).toBe(expectedOutput);
      expect(actualOutput.durability).toBe(35);
    });
  
    it("will not enhance an item already at the max enhancement", () => {
      const maxEnhancement = {
        name: "Item 1",
        enhancement: 20,
        durability: 35,
      };
  
      const expectedOutput = 20;
      const actualOutput = enhancer.success(maxEnhancement);
      expect(actualOutput.enhancement).toBe(expectedOutput);
    });
});

describe("fail", () => {
    it("will decrease by 5 if enhancement is less than 15", () => {
      const item = {
        name: "Item 1",
        enhancement: 10,
        durability: 35,
      };
      const expected = 5;
      const actual = enhancer.fail(item);
      expect(actual.enhancement).toBe(expected);
    });
  
    it("will decrease by 1 if enhancement is greater than 16", () => {
      const item = {
        name: "Item 1",
        enhancement: 17,
        durability: 35,
      };
      const expected = 16;
      const actual = enhancer.fail(item);
      expect(actual.enhancement).toBe(expected);
    });
  
    it("will decrease by 10 if enhancement is greater than 15 and less than 16", () => {
      const item = {
        name: "Item 1",
        enhancement: 16,
        durability: 35,
      };
      const expected = 6;
      const actual = enhancer.fail(item);
      expect(actual.enhancement).toBe(expected);
    });
});

describe("get", () => {
    it("does not mofify the name if enhancement is 0", () => {
      const item = {
        name: "Item 1",
        enhancement: 0,
        durability: 35,
      };
      const expected = "Item 1";
      const actual = enhancer.get(item);
      expect(actual.name).toBe(expected);
    });
  
    it("modifies the name to include enhancement level if it is greater than 0", () => {
      const item = {
        name: "Item 1",
        enhancement: 5,
        durability: 35,
      };
      const expected = "[+5] Item 1";
      const actual = enhancer.get(item);
      expect(actual.name).toBe(expected);
    });
});