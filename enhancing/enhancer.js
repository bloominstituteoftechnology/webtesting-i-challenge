module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  item = { ...item, durability: 100 };
  return item;
}

function get(item) {
  return { ...item };
}

//red, green refactor, commit
