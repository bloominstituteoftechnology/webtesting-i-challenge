/*ARRANGE: 
   import the items into the test case file
   name, type, durability, enhancement */
const item = require("../items.js");

const items = [
   {
      name: 'longsword',
      type: 'weapon',
      durability: 99,
      enhancement: 0,
      displayName: ""
   },
   {
      name: "sword",
      type: "weapon",
      durability: 100,
      enhancement: "PEN",
   },
   {
      name: "enchanted armor",
      type: "armor",
      durability: 10,
      enhancement: "15",
   },
   {
      name: "goddess cloak",
      type: "bloop",
      durability: -5,
      enhancement: "PRI"
   },
   {
      name: "spear",
      type: "weapon",
      durability: 50,
      enhancement: "TET"
   },
   {
      name: "lance",
      type: "weapon",
      durability: 20,
      enhancement: 14,
   },
]
//import index.js for the test to run against
const gameplay = require("../index");

//ACT
const enhancedItem = gameplay.success(items[0]);
const enhancedItem2 = gameplay.success(items[1]);
const enhancedItem3 = gameplay.success(items[2]);
const enhancedItem4 = gameplay.success(items[3]);

const repairItem = gameplay.repair(items[3]);

//ASSERT: add descriptions for each test case
describe("repair test case", () => {
   test("durability restored to 100", () => {
      expect(repairItem.durability).toEqual(100);
   })
})
//test item type equal to weapon or armor
//test enhancement display
// describe("item tests", () => {
//    test("takes in only weapon or armor", () => {
//       expect(enhancedItem.type).toBe("weapon");
//    })
//    test("throw error for invalid type", () => {
//       expect(() => {
//          enhancedItem2
//       }).toThrow();
//    })
//    test("max durability of 100", () => {
//       expect(enhancedItem.durability).toBeLessThanOrEqual(100);
//    })
//    test("enhancement level 0 should not display", () => {
//       expect(enhancedItem.enhancement).toBe("");
//    })
// })

// describe("successful enhancement", () => {
//    describe("enhancement level increase", () => {
//       test("increments enhancement by one", () => {
//          expect(enhancedItem.enhancement).toBe(1);
//          expect(enhancedItem2.enhancement).toBe('PRI');
//          expect(enhancedItem3.enhancement).toBe('PEN');
//       })
//    })
//    describe("displays new name string '[enhancement level] item name'", () => {
//       test("enhancement level increased display", () => {
//          expect(enhancedItem.name).toBe(`+[${enhancedItem.enhancement}] ${enhancedItem.name}`);
//       })
//    })
// });
