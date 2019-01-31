/*ARRANGE: 
   import the items into the test case file
   name, type, durability, enhancement */
const items = require("../items");

//import index.js for the test to run against
const gameplay = require("../index");

//ACT
const enhancedItem = gameplay.success(items);

//ASSERT: add descriptions for each test case
//test item type equal to weapon or armor
//test enhancement display
describe("data and display checks", () => {
   test("takes in only weapon or armor", () => {
      expect(enhancedItem[0].type).toBe("weapon" || "armor");
   })
   test("throw error for invalid type", () => {
      expect(() => {
         enhancedItem[3].type
      }).toThrow();
   })
   test("max durability of 100", () => {
      expects(enhancedItem)
   })
   test("enhancement level 0 should not display", () => {
      expect(enhancedItem[0].enhancement).toBe("");
   })
})

describe("successful enhancement", () => {
   describe("enhancement level increase", () => {
      test("increments enhancement by one", () => {
         expect(enhancedItem[0].enhancement).toBe(1);
         expect(enhancedItem[1].enhancement).toBe('PRI');
         expect(enhancedItem[2].enhancement).toBe('PEN');
      })
   })
   describe("displays new item string '[enhancement level] item name'", () => {
      test("enhancement level increased display", () => {
         expect(enhancedItem[0].displayName).toBe(`+[${enhancedItem[0].enhancement}] ${enhancedItem[0].name}`);
      })
   })
});
