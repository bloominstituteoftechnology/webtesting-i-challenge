module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  const enhancement = item.enhancement;
  const level = item.level;
  if(level > 5) {
    return { ...item, enhancement: enhancement + 10 };
  }
  else {
    return { ...item, enhancement: enhancement}
  }
}

function fail(item) {
  const level = item.level;
  const enhancement = item.enhancement;
  if(level < 10) {
    return { ...item, enhancement: enhancement - 1};
  }
}

function repair(item) {
  const durability = item.durability
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
