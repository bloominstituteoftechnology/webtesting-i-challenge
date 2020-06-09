module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enhancement > 15 && item.enhancement !== 20) {
    return { ...item, enhancement: item.enhancement + 1 };
  } else if (item.durability > 80) {
    return { ...item };
  } else {
    return { ...item };
  }
}

function fail(item) {
  if (item.enhancement < 15 && item.durability > 4) {
    return { ...item, durability: item.durability - 5 };
  } else if (item.enhancement > 16 && item.enhancement > 0) {
    return { ...item, enhancement: item.enhancement - 1 };
  } else if (item.enhancement > 14 && item.durability > 11) {
    return { ...item, durability: item.durability - 10 };
  } else {
    return { ...item };
  }
}

function repair(item) {
  return {
    ...item,
    durability: 100,
  };
}

function get(item) {
  if (item.enhancement > 0) {
    return { ...item, name: `[+` + item.enhancement + `] ` + item.name };
  } else {
    return { ...item };
  }
}
