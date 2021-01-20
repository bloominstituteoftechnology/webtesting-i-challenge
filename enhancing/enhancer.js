module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  let enhancement = item.enhancement;
  if (enhancement < 20) {
    enhancement += 1;
  }
  return { ...item, enhancement };
}

function fail(item) {
  let enhancement = item.enhancement;
  let durability = item.durability;
  if (enhancement < 15) {
    return durability - 5;
  } else if (enhancement >= 15) {
    return durability - 10;
  } else if (enhancement > 16) {
    return enhancement - 1;
  }
  return { ...item, enhancement, durability };
}

function repair(item) {
  let durability = item.durability;
  if (durability < 100) {
    return durability === 100;
  }
  return { ...item, durability};
}

function get(item) {
  return { ...item };
}
