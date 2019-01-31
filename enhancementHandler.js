/**
 * Accepts an item object and returns a new item object modified according to the rules 👇🏼
 * enhancement += 1 ✅
 * name = updatedName ✅
 * IF enhancement > 15 THEN use enhancementLevels
 */
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

  if (
    (item.enhancement <= 14 && item.durability < 25) ||
    (item.enhancement >= 15 && item.durability < 10)
  ) {
    throw new Error("Failed to enhance due to low durability.");
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
  if (item.enhancement >= 0 && item.enhancement <= 14) {
    item.durability -= 5;
  } else if (item.enhancement > 14 && item.enhancement <= 16) {
    item.durability -= 10;
  } else if (item.enhancement === 17) {
    item.enhancement -= 1;
    item.name = `[PRI] ${item.origName}`;
  } else if (item.enhancement === 18) {
    item.enhancement -= 1;
    item.name = `[DUO] ${item.origName}`;
  } else if (item.enhancement === 19) {
    item.enhancement -= 1;
    item.name = `[TRI] ${item.origName}`;
  } else if (item.enhancement === 20) {
    item.enhancement -= 1;
    item.name = `[TET] ${item.origName}`;
  }

  if (item.type === "armor" && item.enhancement <= 5) {
    return "Armor below enhancement level 5 cannot fail.";
  }

  if (item.type === "weapon" && item.enhancement <= 7) {
    return "Weapons below enhancement level 7 cannot fail.";
  }

  return item;
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
