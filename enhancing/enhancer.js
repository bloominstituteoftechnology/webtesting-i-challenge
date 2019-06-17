module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  item.enhancement += 1;
  return { ...item };
}

function fail(item) {
  if (item.enhancement < 15) {
    item.durability -= 5;
    return { ...item };
  } else {
    item.durability -= 10;
    if (item.enhancement > 16) {
      item.enhancement -= 1;
      console.log(item.enhancement);
      return { ...item };
    }
    return { ...item };
  }
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
