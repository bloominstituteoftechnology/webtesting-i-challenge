module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  // if (itemType)

  if (item.enhancement >= 0 && item.enhancement <= 20) {
    let newEnhancement = item.enhancement === 20 ? item.enhancement : ++item.enhancement
    return {
      ...item,
      enhancement: newEnhancement
    }
  } else {
    throw new Error(`enhancement value '${item.enhancement}' is outside of the 0-20 range`)
  }
}

// console.log(success({
//   name: "test",
//   enhancement: 15,
//   durability: 15
// }))

function fail(item) {
  let newDurability;
  let newEnhancement;

  if (item.enhancement < 15) {
    newDurability = item.durability < 5 ? 0 : item.durability -= 5;
  } else if (item.enhancement >= 15) {
    newDurability = item.durability > 10 ? item.durability -= 10 : 0;
    if (item.enhancement > 16) {
      newEnhancement = item.enhancement -= 1;
    }
  }

  return {
    ...item,
    enhancement: newEnhancement || item.enhancement,
    durability: newDurability
  };
}

function repair(item) {
  // const itemType = Array.isArray(item) ? "array" : typeof item;
  // if (itemType === "object")
  if (checkItem(item)) {
    return {
      ...item,
      durability: 100,
    };
  } else {
    throw new Error(`input was of type ${itemType}, expected type of object`);
  }
}


function get(item) {
  return {
    ...item
  };
}

const checkItem = (item) => {
  const itemType = Array.isArray(item) ? "array" : typeof item;
  if (itemType !== "object") {
    throw new Error("item must be an object")
  } else if (Object.keys(item) !== ["name", "durability", "enhancement"]) {
    throw new Error("item must contain 'name', 'durability', and 'enhancement' properties")
  } else if (item.enhancement < 0 || item.enhancement > 20) {
    throw new Error("enhancement must be between 0 and 20")
  } else if (item.durability < 0 || item.durability > 100) {
    throw new Error("durability must be between 0 and 100")
  } else {
    return true;
  }
}