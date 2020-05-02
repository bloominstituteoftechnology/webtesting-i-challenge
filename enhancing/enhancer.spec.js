const enhancer = require("./enhancer.js");
// test away!

describe("a repair(item) method that accepts an item object and returns a new item with the durability restored to 100", () => {
  let ItemObj = {
    name: "Item1",
    durability: 10,
    enhancement: 18,
  };

  it("should accept an object and return 100 durability", () => {
    let prevItem = { ...ItemObj };
    let myItem = enhancer.repair(ItemObj);
    expect(myItem.durability).toBe(100);
    expect(myItem).not.toBe(ItemObj);
    expect(prevItem).toEqual(ItemObj);
  });
});

describe("a success(item) method that accepts an item object and returns a new item object modified according to the rules defined by the client for enhancement success", () => {
  const successObj = {
    name: "Item2",
    durability: 0,
    enhancement: 3,
  };
  let mySuccessItem = enhancer.succeed(successObj);

  it("should return item's enhancement increases by 1.", () => {
    expect(mySuccessItem.enhancement).toBe(successObj.enhancement + 1);
    expect(mySuccessItem).not.toBe(successObj);
  });

  it("should return ehancement level 20 if passed in 20", () => {
    let newSuccessObj = {
      name: "Item2",
      durability: 0,
      enhancement: 20,
    };

    let newSuccessItem = enhancer.succeed(newSuccessObj);
    expect(newSuccessItem.enhancement).toBe(20);
    expect(newSuccessItem).not.toBe(newSuccessObj);
  });
});

describe("a fail(item) method that accepts an item object and returns a new item object modified according to the rules defined by the client for enhancement failure.", () => {
  it("should decrease durability by 5 if enhancement is less than 15", () => {
    let failObj = {
      name: "item3",
      durability: 15,
      enhancement: 10,
    };

    let failItem = enhancer.fail(failObj);
    expect(failItem.durability).toBe(failObj.durability - 5);
    expect(failItem).not.toBe(failObj);
  });

  it("should decrease durability to be 0 if durability is less than 0", () => {
    let failObj = {
      name: "item3",
      durability: 2,
      enhancement: 10,
    };

    let failItem = enhancer.fail(failObj);
    expect(failItem.durability).toBe(0);
    expect(failItem).not.toBe(failObj);
  });

  it("should decrease durability by 10 if enhancement is 15 or more", () => {
    let failObj = {
      name: "item3",
      durability: 50,
      enhancement: 16,
    };

    let failItem = enhancer.fail(failObj);
    expect(failItem.durability).toBe(failObj.durability - 10);
    expect(failItem).not.toBe(failObj);
  });

  it("should decrease durability by 10 and decrease enhancement by 1 if enhancement is greater than 16 or more", () => {
    let failObj = {
      name: "item3",
      durability: 20,
      enhancement: 17,
    };

    let failItem = enhancer.fail(failObj);
    expect(failItem.durability).toBe(failObj.durability - 10);
    expect(failItem.enhancement).toBe(failObj.enhancement - 1);
    expect(failItem).not.toBe(failObj);
  });
});

describe("Add a get() method to the enhancer object that takes an item and returns a new item with the name property modified according to the following rules:", () => {
  it("if the enhancement level is greater than 0, change the name to include the enhancement level, preceded by a plus sign ( + ), between square brackets before the item's name. Example: the name of a Iron Sword enhanced to 7 would be [+7] Iron Sword ", () => {
    expect(
      enhancer.get({
        name: "item1",
        durability: 10,
        enhancement: 7,
      })
    ).toEqual({
      name: "[+7] item1",
      durability: 10,
      enhancement: 7,
    });
  });

  it("if the enhancement level is 0, the the name is not modified.", () => {
    expect(
      enhancer.get({
        name: "item1",
        durability: 10,
        enhancement: 0,
      })
    ).toEqual({
      name: "item1",
      durability: 10,
      enhancement: 0,
    });
  });
});
