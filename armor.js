// levels lookup object
var levels = { 0: null, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, 11: 11, 12: 12, 13: 13, 14: 14, 15: 15, 16: "PRI", 17: "DUO", 18: "TRI", 19: "TET", 20: "PEN" }

const success = (item) => {
  let modObject = item;
  let enhancementValues = Object.values(levels);
  let newEnhancement = enhancementValues[modObject.enhancement + 1]
  let modObject = {
    name: `${modObject.name} +${newEnhancement}`,
    type: modObject.type,
    durability: modObject.durability,
    enhancement: newEnhancement
  }
  return modObject
  // enhancement of zero is not displayed
  // 16 - 20 has an named level that needs displayed 0-15 is Arabic Numerals
  // name should be modified with ehnancement levsls "Eleven Sword" would be [+7]Eleven Sword
  // when succeeds enhancement is +1
}
const newDurability = (item) => {
  let newValue = null;
  let oldValue = item.durability;
  if (item.enhancement <= 14) {
    newValue = oldValue - 5
  } else {
    newValue = oldValue - 10;
  }
  return newValue
}
const fail = (item) => {
  const newObj = item;
  const durability = newDurability(newObj.durability);
  let enhancementValues = Object.values(levels);
  let newEnhancement = enhancementValues[newObj.enhancement -1];
  let modObject = {
    name: `${modObject.name} +${newEnhancement}`,
    type: modObject.style,
    durability: durability,
    enhancement: newEnhancement
  }

  // if enhancement is >=0 && < 14 then durability is decreased by 5
  // if enhancement > 14 then durability is decreased by 10 
  // if ehnhancement > 16, enhancement -1 , 
  // updated name reflects new level
  //If the item's enhancement is 14 or lower, the item cannot be enhanced if the durability is below 25.
  // If the item's enhancement is 15 or higher, the item cannot be enhanced if the durability is below 10.
},
const repair = (item) => {
  newObj = item;
  let newObj = {
    name: newObj.name,
    type: newObj.type,
    durability: 100,
    ehnancement: newObj.enhancement
  }
  return newObj;
}

module.exports = {fail, success,repair}
