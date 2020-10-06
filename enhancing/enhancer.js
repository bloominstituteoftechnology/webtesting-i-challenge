module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  if (item.enchantment < 20) {
    item = {
      ...item,
      enchantment: item.enchantment + 1,
    };
  }

  return item;
}

function fail(item) {
  if (item.enchantment < 15) {
    item = {
      ...item,
      durability: item.durability - 5,
    };
  }
  if (item.enchantment >= 15) {
    item = {
      ...item,
      durability: item.durability - 10,
    };
  }
  if (item.enchantment >= 16) {
    item = {
      ...item,
      enchantment: item.enchantment - 1,
    };
  }
  return item;
}

function repair(item) {
  item = {
    ...item,
    durability: 100,
  };
  return item;
}

function get(item) {
  return { ...item };
}
