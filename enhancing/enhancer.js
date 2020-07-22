module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function repair(item) {
  const repairedItem = item;
  repairedItem.durability = 100;
  return { ...repairedItem };
}

function fail(item) {
  const failedItem = item;
  if (failedItem.enhancement < 15) {
    failedItem.durability = failedItem.durability - 5;
  } else if (failedItem.enhancement >= 15) {
    if (failedItem.enhancement === 15) {
      failedItem.durability = failedItem.durability - 10;
    } else {
      failedItem.durability = failedItem.durability - 10;
      failedItem.enhancement = failedItem.enhancement - 1;
    }
  }
  return { ...failedItem };
}

function succeed(item) {
  const successItem = item;
  if (successItem.enhancement === 20) {
    return { ...successItem };
  } else {
    successItem.enhancement = successItem.enhancement + 1;
    return { ...successItem };
  }
}

function get(item) {
  const newItem = item;
  if (newItem.enhancement === 0) {
    return { ...newItem };
  } else if (newItem.enhancement > 0) {
    newItem.name = `[+${newItem.enhancement}] ${newItem.name}`;
  }
  return { ...newItem };
}
