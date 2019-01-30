module.exports = {
   //The item's enhancement increases by 1.
   //The name is updated to reflect the new enhancement level.
   success: (item) => {

   },

   //The durability of the item is decreased by 5 if the item's enhancement is between 0 and 14.
   // The durability of the item is decreased by 10 if the item's enhancement is greater than 14.
   // If the item's enhancement level is greater than 16 (DUO, TRI, TET), the enhancement level decreases by 1 (a DUO item would go back to PRI on failure).
   // The name is updated to reflect the new enhancement level if it was decreased.
   // If the item's enhancement is 14 or lower, the item cannot be enhanced if the durability is below 25.
   // If the item's enhancement is 15 or higher, the item cannot be enhanced if the durability is below 10.
   fail: (item) => {

   },
   
   //durability restored to 100
   repair: (item) => {

   }
}