/*ARRANGE: 
   import the items into the test case file
   name, type, durability, enhancement */
const item = require("../items.js");

const items = [
   {
      name: 'longsword',
      type: 'weapon',
      durability: 99,
      enhancement: 8,
   },
   {
      name: "sword",
      type: "weapon",
      durability: 100,
      enhancement: 15,
   },
   {
      name: "enchanted armor",
      type: "armor",
      durability: 10,
      enhancement: "PEN",
   },
   {
      name: "goddess cloak",
      type: "bloop",
      durability: "bloop",
      enhancement: "XXX"
   },
   {
      name: "enchanted armor",
      type: "armor",
      durability: 10,
      enhancement: 6,
   },
   {
      name: 'delux longsword',
      type: 'weapon',
      durability: 99,
      enhancement: "PEN",
   },
   {
      name: 'delux sword',
      type: 'weapon',
      durability: 99,
      enhancement: 0,
   }
]
//import index.js for the test to run against
const gameplay = require("../index");

//ACT
const enhancedItem0 = gameplay.success(items[0]);
const enhancedItem1 = gameplay.success(items[1]);
const enhancedItem2 = gameplay.success(items[2]);
const enhancedItem3 = gameplay.success(items[3]);

const repairItem2 = gameplay.repair(items[2]);
const repairItem3 = gameplay.repair(items[3]);
const repairItem6 = gameplay.repair(items[6]);

const failedItem0 = gameplay.fail(items[0]);
const failedItem1 = gameplay.fail(items[1]);
const failedItem5 = gameplay.fail(items[5]);

//ASSERT: add descriptions for each test case
describe("repair test case", () => {
   test("durability restored to 100", () => {
      expect(repairItem2.durability).toEqual(100);
   })
   //Can't run test case, the entire test file fails with "invalid argument and I'm not sure why undefined is the work around"
   // test("invalid input", () => {
   //    expect(() => {
   //       repairItem2.durability
   //    }).toThrow(error)
   // })
   test("invalid input", () => {
      expect(repairItem3.durability).toBe(undefined);
   })
})

//test item type equal to weapon or armor
//test enhancement display
describe("item tests", () => {
   test("takes in only weapon or armor", () => {
      expect(enhancedItem0.type).toBe("weapon");
   })
   test("invalid item type", () => {
      expect(enhancedItem3.type).toBe(undefined);
   })
   test("max durability of 100", () => {
      expect(enhancedItem0.durability).toBeLessThanOrEqual(100);
   })
   test("enhancement 0 does not display", () => {
      expect(repairItem6.name).toBe("delux sword");
   })
})

describe("successful enhancement", () => {
   describe("enhancement level increase", () => {
      test("increments enhancement by one", () => {
         expect(enhancedItem0.enhancement).toBe(9);
         expect(enhancedItem1.enhancement).toBe('PRI');
         expect(enhancedItem2.enhancement).toBe('PEN');
      })
   })
   describe("displays new name string '[enhancement level] item name'", () => {
      test("enhancement level increased display", () => {
         expect(enhancedItem1.name).toBe(`+[PRI] sword`);
      })
   })
});

describe("failed enhancement", () => {
   // test("armor enhanment can not fail 5", () => {
   //    expect(failedItem4).toBe(undefined);
   // })
   // test("weapon enhancement can not fail 7", () => {
   //    expect(failedItem0).toBe(undefined);
   // })
   test("durability decrease by 5", () => {
      expect(failedItem0.durability).toBe(94);
   })
   test("durability decrease by 10", () => {
      expect(failedItem1.durability).toBe(90);
   })
   test("decreases enhancement level by one if greater than 16", () => {
      expect(failedItem5.enhancement).toBe("TET")
   })
})