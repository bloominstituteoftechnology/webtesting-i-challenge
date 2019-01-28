module.exports = {
   success,
   fail,
   repair,
};

// The enhancement level of an item starts at 0.
// The maximun enhancement possible is PEN.
// Enhacing an armor up to 5 cannot fail.
// Enhacing a weapon up to 7 cannot fail.
// Enhancement level is display as a string with a plus sign ( + ) before the number for levels 1 to 15.
// Enhancement level of 0 is not displayed.
// when an item is enhanced, the name should be modified to include the enhancement level between square brackets before the item's name. Example: the new name of a "Elven Sword" enhanced to 7 would be "[+7] Elven Sword", at DUO would be "[DUO] Elven Sword".
// From +0 to +15 the enhacement is displayed using Arabic Numerals.
// After +15 the display for the enhancing level follows the table below:
// Level	Display
// 16	PRI
// 17	DUO
// 18	TRI
// 19	TET
// 20	PEN

function success(item) {
   if (item.level >= 0 && item.level < 15) {
      item.level++;
      item.name = `[+${item.level}] ${item.name}`;
   } else if (item.level === 15) {
      item.level++;
      item.name = `PRI ${item.name}`;
   } else if (item.level === 16) {
      item.level++;
      item.name = `DUO ${item.name}`;
   } else if (item.level === 17) {
      item.level++;
      item.name = `TRI ${item.name}`;
   } else if (item.level === 18) {
      item.level++;
      item.name = `TET ${item.name}`;
   } else if (item.level === 19) {
      item.level++;
      item.name = `PEN ${item.name}`;
   }
   return item;
}

function fail(item) {}

function repair(item) {}
