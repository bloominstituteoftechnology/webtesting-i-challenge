module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  item.enhancement !== 20 ? item.enhancement++ : item.enhancement;
  return { ...item };
}

function fail(item) {
  if (item.enhancement < 15) {
    item.enhancement -= 5;
  } else if (item.enhancement > 15 && item.enhancement <= 16) {
    item.enhancement -= 10;
  } else if (item.enhancement > 16) {
    item.enhancement--;
  }

  return { ...item };
}

function repair(item) {
  item.durability = 100;
  return { ...item };
}

function get(item) {
  if (item.enhancement > 0) {
    item.name = `[+${item.enhancement}] ${item.name}`;
  }

  return { ...item };
}