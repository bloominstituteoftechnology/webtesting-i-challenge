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
  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
