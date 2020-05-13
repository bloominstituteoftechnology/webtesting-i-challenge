module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100 };
  // return { name: "Steel Sword", durability: 75, enhancement: 15, durability: 100}
}

function get(item) {
  // const { name, durability, enhancement } = item;
  // if (enhancement > 10) {
  //   durability -= 1
  // }
  // return { name, durability, enhancement };
}
