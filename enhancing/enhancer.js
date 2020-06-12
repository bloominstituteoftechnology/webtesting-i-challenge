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
  if (item.enhancement < 15) {
    const failItem = {
      name: item.name,
      enhancement: item.enhancement,
      durability: item.durability - 5
    }
    
    return failItem
  } else if (item.enhancement > 15) {
    const failItem = {
      name: item.name,
      enhancement: item.enhancement,
      durability: - 10
    }

    return failItem
  } else if (item.enhancement > 16) {
    const failItem = {
      name: item.name,
      enhancement: item.enhancement - 1,
      durability: item.durability
    }
  }
}

function repair(item) {
  if (item.durability === 0 || item.durability < 101) {
    const newItem = {
      name: item.name,
      enhancement: item.enhancement,
      durability: item.durability = 100
    }
    return newItem;
  }
}

function get(item) {
  return { ...item };
}
