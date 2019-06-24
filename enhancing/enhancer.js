module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  return {
    ...item,
    enhancement: item.enhancement < 20 ? item.enhancement + 1 : 20
  };
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
