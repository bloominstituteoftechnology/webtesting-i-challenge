module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  {enhancement = 0}
  if (enhancement < 20) {
    enhancement = enhancement + 1
  } else if (enhancement > 19) {
    return { ...item, enhancement }
  }
  return { ...item, enhancement };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100, name: 'sword', enhancement: 10};
}

function get(item) {
  return { ...item };
}

