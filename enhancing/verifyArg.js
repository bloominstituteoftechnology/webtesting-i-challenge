// const verifyArg = (item) => {
//   const itemType = Array.isArray(item) ? "array" : typeof item;
//   const requiredProps =
//     Object.keys(item) === ["name", "durability", "enhancement"] ?
//     true :
//     ("missing required properties name, durability, enhancement");
//   const validEnhancement =
//     typeof item.enhancement === "integer" &&
//     item.enhancement >= 0 &&
//     item.enhancement <= 20 ?
//     true :
//     "enhancement must be an integer, within the range of 0-20";
//   const validDurability =
//     typeof item.durability === "integer" &&
//     item.durability >= 0 &&
//     item.durability <= 100 ?
//     true :
//     "durability must be an integer, within the range of 0-100";

//   if (
//     itemType === "object" &&
//     requiredProps &&
//     validEnhancement &&
//     validDurability
//   ) {
//     true;
//   } else {
//     return false;
//   }
// };



const checkItemType = (item) => {
  const itemType = Array.isArray(item) ? "array" : typeof item;
  if (itemType !== "object") {
    throw new Error(`input was of type ${itemType}, expected type of object`)
  } else {
    return true;
  }
}

// something is wrong with this
const checkItemKeys = (item) => {
  if (Object.keys(item) !== Array["name", "enhancement", "durability"]) {
    throw new Error("item must contain 'name', 'durability', and 'enhancement' properties")
  } else {
    return true;
  }
}

const checkEnhancementVal = (item) => {
  if (item.enhancement < 0 || item.enhancement > 20) {
    throw new Error("Enhancement value expected to be in range 0-20")
  } else {
    return true;
  }
}

const checkDurabilityVal = (item) => {
  if (item.durability < 0 || item.durability > 100) {
    throw new Error("durability must be between 0 and 100");
  } else {
    return true;
  };
};

const validateItem = (item) => {
  checkItemType(item);
  checkEnhancementVal(item);
  checkDurabilityVal(item);
}

module.exports = {
  checkItemType,
  checkItemKeys,
  checkEnhancementVal,
  checkDurabilityVal
}