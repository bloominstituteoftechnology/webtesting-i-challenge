module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  return {
    ...item,
    enhancement: item.enhancement < 20 ? item.enhancement + 1 : 20
  };
}

function fail(item) {
  let itemCopy = { ...item };
  if (item.enhancement < 15) {
    itemCopy.durability -= 5;
  }
  if (item.enhancement > 15) {
    itemCopy.durability -= 10;
  }
  if (item.enhancement > 16) {
    itemCopy.enhancement -= 1;
  }
  return itemCopy;
}

function repair(item) {
  item = { ...item, durability: 100 };
  return item;
}

function get(item) {
  const itemCopy = { ...item };
  if (item.enhancement === 0) {
    return itemCopy;
  }
  if (item.enhancement > 0) {
    itemCopy.name = `[+${item.enhancement}] ${item.name}`;
  }
  return itemCopy;
}

//red, green refactor, commit
