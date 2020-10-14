const enhancer = require("./enhancer.js");
// test away!

const item = {
  name: "Mother of Dragons",
  durability: 80,
  enhancement: 15,
};

describe("enhancer.js", () => {
  //function repair test
  describe("repair()", () => {
    it("should return value of item durability", () => {
      //expectedItem for test
      expectedItem = {
        name: "Mother of Dragons",
        durability: 100,
        enhancement: 15,
      };
      expect(enhancer.repair(item)).toEqual(expectedItem);
    });
    test.todo(
      "accepts an item object and returns a new item with the durability restored to 100"
    );
  }); // close repair

  describe("success()", () => {
    //function success test
    it("should return new item object defined by enhancement success", () => {
      //expectedItem for test
      expectedItem = {
        name: "Mother of Dragons",
        durability: 80, //durability no change
        enhancement: 16,
      }
      expect(enhancer.success(item)).toEqual(expectedItem);
    })
    test.todo("the items enhancement increase by 1 not 20");
  });
});
