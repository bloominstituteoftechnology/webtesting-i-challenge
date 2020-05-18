module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(name, enhancement, durability) {
  let newItem = { name, enhancement, durability };
  if (enhancement < 20) {
    return { ...newItem, enhancement: enhancement + 1 };
  } else if (enhancement === 20) {
    return newItem;
  }

  if (enhancement > 20) {
    console.log("enhancement can't be greater than 20");
  }
  return newItem;
}

function get(item) {
  return { ...item };
}

function repair(item) {
  const newItem = { ...item, durability: 100 };
  return newItem;
}

function fail({ name, enhancement, durability }) {
  let newItem = { name, enhancement, durability };

  if (enhancement < 15) {
    return { durability: durability - 5 };
  } else if (enhancement > 16) {
    return { durability: durability - 1 };
  } else if (enhancement >= 15) {
    return { durability: durability - 10 };
  }

  return newItem;
}

