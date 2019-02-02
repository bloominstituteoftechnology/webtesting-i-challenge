const enhance = require("./enhancementHandler");
  
// Act
describe("GAME TEST SUITE", () => {
    describe("SUCCESS METHOD", () => {});
    describe("FAIL METHOD", () => {});
    describe("REPAIR METHOD", () => {});
});
  
// Assert
expect(enhancedItem.enhancement).toBe("PEN");
  
// Arrange
const items = [{}, {}, []];
  
// Act
const enhancedItems = items.map(success);
  
// Assert
expect(enhancedItems[0]).toBe();


//The enhancement level of an item starts at 0.
//The maximun enhancement possible is PEN.
//Enhacing an armor up to 5 cannot fail.
//Enhacing a weapon up to 7 cannot fail.
//Enhancement level is displayed as a string with a plus sign ( + ) before the number for levels 1 to 15.
//Enhancement level of 0 is not displayed.
//when an item is enhanced, the name should be modified to include the enhancement level between square brackets before the item's name. Example: the new name of a "Elven Sword" enhanced to 7 would be "[+7] Elven Sword", at DUO would be "[DUO] Elven Sword".
//From +0 to +15 the enhacement is displayed using Arabic Numerals.
//After +15 the display for the enhancing level follows the table below:
//16 PRI, 17 DUO, 18 TRI, 19 TET, 20 PEN,
//fail
//The durability of the item is decreased by 5 if the item's enhancement is between 0 and 14.
//The durability of the item is decreased by 10 if the item's enhancement is greater than 14.
//If the item's enhancement level is greater than 16 (DUO, TRI, TET), the enhancement level decreases by 1 (a DUO item would go back to PRI on failure).
//The name is updated to reflect the new enhancement level if it was decreased.
//If the item's enhancement is 14 or lower, the item cannot be enhanced if the durability is below 25.
//If the item's enhancement is 15 or higher, the item cannot be enhanced if the durability is below 10.
//succeeds
//The item's enhancement increases by 1.
//The name is updated to reflect the new enhancement level.