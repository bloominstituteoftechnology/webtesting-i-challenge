const { succeed, fail, repair, get } = require("./enhancer");

const item = {
  name: "",
  durability: 0,
  enhancement: 0,
};
const maxItem = {
  name: "",
  durability: 100,
  enhancement: 20,
};
const fourteenEnhanceditem = {
  name: "",
  durability: 50,
  enhancement: 14,
};

const sixteenEnhanceditem = {
  name: "",
  durability: 50,
  enhancement: 16,
};

// test away!

it("run test", function () {
  expect(true).toBe(true);
});

describe("enhancer.js", function () {
  describe("repair()", function () {
    it("should accept an item object and return a new item with the durability restored to 100", function () {
      repair(item);
      expect(item.durability).toBe(100);
    });
  });

  describe("succeed()", function () {
    it("should take an object, increment it's enhancement by one", function () {
      succeed(item);
      expect(item.enhancement).toBe(1);
    });
    it("should not increment the object's enhancement level further if it is at 20 or more", function () {
      succeed(maxItem);
      expect(maxItem.enhancement).toBe(20);
    });
  });

  describe("fail()", function () {
    it("should subtract 10 from the durability and 1 from the enhancements if the enhancement level is more than 17", function () {
      fail(maxItem);
      expect(maxItem.enhancement).toBe(19);
      expect(maxItem.durability).toBe(90);
    });
    it("should subtract 5 from the durability if the enhancement level is less than 15", function () {
      fail(fourteenEnhanceditem);
      expect(fourteenEnhanceditem.durability).toBe(45);
    });
    it("should subtract 10 from the durability if the enhancement level is more than 15 and less than 17, the enhancement should remain unchanged", function () {
      fail(sixteenEnhanceditem);
      expect(sixteenEnhanceditem.durability).toBe(40);
      expect(sixteenEnhanceditem.enhancement).toBe(16);
    });
  });
});
