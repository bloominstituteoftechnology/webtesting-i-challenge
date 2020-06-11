module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  if (item.enhancement < 20) {
    item.enhancement += 1;
  }

  return { ...item, enhancement: item.enhancement };
}

function fail(item) {
  if (item.enhancement < 15) {
    item.durability -= 5;
  } else {
    item.durability -= 10;
  }

  if (item.enhancement > 16) {
    item.enhancement -= 1;
  }

  return {
    ...item,
    durability: item.durability,
    enhancement: item.enhancement
  };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
