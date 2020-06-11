module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enhancement < 20) {
    const succeedsItem = {
      name: item.name, 
      enhancement: item.enhancement + 1,
      durability: item.durability
    }
    return succeedsItem;
  } else {
    const noSucceed = {
      name: item.name, 
      enhancement: item.enhancement, 
      durability: item.durability
    }
    return noSucceed;
  }
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  if (item.durability === 0 || item.durability < 101) {
    const newItem = {
      name: item.name,
      enhancement: item.enhancement,
      durability: 100
    }
    return newItem;
  }
}

function get(item) {
  return { ...item };
}
