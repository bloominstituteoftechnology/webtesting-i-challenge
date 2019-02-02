/**
 * Accepts an item object and returns a new item object modified according to the rules 👇🏼
 * enhancement += 1
 * name = updatedName
 */
function success(item) {}

 /**
 * Accepts an item object and returns a new item object modified according to the rules 👇🏼
 * IF 0 < enhancement < 14 THEN durability -= 5
 * IF enhancement > 14 THEN durability -= 10
 * IF enhancement >= 16 THEN (enhancement -= 1 AND name = updatedName)
 * IF (enhancement <= 14 AND durability < 25) THEN fail
 * IF (enhancement >= 15 AND durability < 10) THEN fail
 */
function fail(item) {}

 /**
 * Accepts an item object and returns a new item with the durability restored to 100.
 */
function repair(item) {
  let repairedItem = {
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

function success(item) {}

function fail(item) {}

function repair(item) {}