module.exports = {
  succeed,
  fail,
  repair,
  get,
};

let item = {
  name: "Rusty Sword",
  enhancement: 0,
  durability: 10
}

function succeed(item) {
  if(item.enhancement === 20) {
    item.enhancement = 20;
  } else {
    item.enhancement += 1;
  }
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  item.durability = 100;
  return { ...item };
}

function get(item) {
  return { ...item };
}