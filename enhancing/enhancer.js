module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  return { ...item, item };
}

function fail(item) {
  return { ...item, item };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
