/**
 * Accepts an item object and returns a new item object modified according to the rules 👇🏼
 * enhancement += 1 ✅
 * name = updatedName ✅
 * IF enhancement > 15 THEN use enhancementLevels
 */
const enhancementLevels = ["PRI", "DUO", "TRI", "TET", "PEN"];

function success(item) {
  if (item.enhancement >= 0 && item.enhancement <= 15) {
    item.enhancement += 1;
    item.name = `[+${item.enhancement}] ${item.origName}`;
  } else if (item.enhancement === 15) {
    item.enhancement += 1;
    item.name = `[PRI] ${item.origName}`;
  } else if (item.enhancement === 16) {
    item.enhancement += 1;
    item.name = `[DUO] ${item.origName}`;
  } else if (item.enhancement === 17) {
    item.enhancement += 1;
    item.name = `[TRI] ${item.origName}`;
  } else if (item.enhancement === 18) {
    item.enhancement += 1;
    item.name = `[TET] ${item.origName}`;
  } else if (item.enhancement === 19) {
    item.enhancement += 1;
    item.name = `[PEN] ${item.origName}`;
  }

  return item;
}

/**
 * Accepts an item object and returns a new item object modified according to the rules 👇🏼
 * IF 0 < enhancement < 14 THEN durability -= 5 ✅
 * IF enhancement > 14 THEN durability -= 10 ✅
 * IF enhancement >= 16 THEN (enhancement -= 1 AND name = updatedName) ✅
 * IF (enhancement <= 14 AND durability < 25) THEN fail ✅
 * IF (enhancement >= 15 AND durability < 10) THEN fail ✅
 */
function fail(item) {
  const origEnhancement = item.enhancement;
  const origDurability = item.durability;
  const enhancedName = item.origName;
  let enhanced = origEnhancement;
  let durabled = origDurability;

  if (origEnhancement > -1 && origEnhancement < 15) {
    durabled = origDurability - 5;
  } else if (origEnhancement > 14) {
    durabled = origDurability - 10;
  } else if (origEnhancement > 15) {
    enhanced = origEnhancement - 1;
  }

  if ((enhanced <= 14 && durabled < 25) || (enhanced >= 15 && durabled < 10)) {
    return "Failed to enhance.";
  }

  return {
    ...item,
    name: `[+${enhanced}] ${enhancedName}`,
    durability: durabled,
    enhancement: enhanced
  };
}

/**
 * Accepts an item object and returns a new item with the durability restored to 100.
 */
function repair(item) {
  let repairedItem = {
    origName: item.origName,
    name: item.name,
    type: item.type,
    durability: 100,
    enhancement: item.enhancement
  };

  return repairedItem;
}

module.exports = {
  success,
  fail,
  repair
};
