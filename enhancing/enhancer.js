module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  const enhancement = item.enhancement;
  if (item.enhancement > 19) {
    return { ...item, enhancement: enhancement };
  } else {
    return { ...item, enhancement: enhancement + 1 };
  }
};

function fail(item) {
  return { ...item };
}

function repair(item) {
  if (item.durability !== 100) {
    return { ...item, durability: 100 };
  } else {
    null;
  }
}

function get(item) {
  return { ...item };
}
