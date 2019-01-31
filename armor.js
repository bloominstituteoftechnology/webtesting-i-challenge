module.exports = {
  success: (item) => {
    const levels = {
      16: "PRI",
      17: "DUO",
      18: "TRI",
      19: "TET",
      20: "PEN"
    }
    // if enhancemnet is < 6 automatic success
    // enhancing a weapon < 8 is automatic success
    // enhancement of zero is not displayed
    // 16 - 20 has an named level that needs displayed 0-15 is Arabic Numerals
    // name should be modified with ehnancement levsls "Eleven Sword" would be [+7]Eleven Sword
    // when succeeds enhancement is +1
  },
  fail: (item) => {
  // if enhancement is >=0 && < 14 then durability is decreased by 5
  // if enhancement > 14 then durability is decreased by 10 
  // if ehnhancement > 16, enhancement -1 , 
  // updated name reflects new level
  //If the item's enhancement is 14 or lower, the item cannot be enhanced if the durability is below 25.
  // If the item's enhancement is 15 or higher, the item cannot be enhanced if the durability is below 10.
  },
  repair: (item) => {
    // method that accepts an item object and returns a new item with the durability restored to 100.
  },

}

// const item = {
// name :
// type : weapon or armor
// durability : max of 100 
// enhancement : starts @ 0 

//success scenarios: 
// 
