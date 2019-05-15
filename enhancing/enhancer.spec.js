const { succeed, repair, fail, get } = require("./enhancer.js");
// test away!

//accepts an item object and returns a new item with the durability restored to 100
//Repair
it("accepts an item object and returns a new item with the durability restored to 100", () => {
  expect(repair(20).durability).toBe(100);
  expect(repair(99).durability).toBe(100);
  expect(repair(0).durability).toBe(100);
});

//Succeed
it("Adheres to MVP test conditions of Success", () => {
  //Enhancement increases by one?
  expect(succeed(1).enhancement).toBe(2);
  //if enhancement is 20, level is not changed
  expect(succeed(20).enhancement).toBe(20);
  //Durability isn't changed
  expect(succeed(40).durability).toBe(40);
});

//Fails
it("Adheres to MVP test conditions of Failure", () => {
  //If enhancement if less than 15 return durability - 5
  expect(fail(14).enhancement).toBe(14) && fail(14).durability.toBe(9);

  //If enhancement if more than 15 return durability - 10
  expect(fail(14).enhancement).toBe(14) && fail(14).durability.toBe(4);

  //If the item's enhancement level is greater than 16, the enhancement
  //level decreases by 1 (17 goes down to 16, 18 goes down to 17).
  expect(fail(17).enhancement).toBe(16);
});
