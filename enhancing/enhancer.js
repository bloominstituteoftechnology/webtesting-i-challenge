module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  if(item.enhancement === 20) {
    return { ...item };
  } else {
    item.enhancement++
    return { ...item }
  }
}

function fail(item) {
  if(item.enhancement < 15) {
    const durability = item.durability - 5;
    return { ...item, durability: durability}
  }
  if(item.enhancement === 15) {
    const durability = item.durability - 10;
    return { ...item, durability: durability};
  }
  if(item.enhancement > 16) {
    const enhancement = item.enhancement - 1;
    const durability = item.durability - 10;
    return { ...item, enhancement: enhancement, durability: durability};
  }
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
