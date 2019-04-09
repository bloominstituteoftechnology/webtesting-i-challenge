module.exports = {
  success,
  fail,
  repair,
  get
};

function fail(item) {
  if (item.enhancement < 15 && item.durability < 25) {
    return { ...item };
  }

  const durability =
    item.enhancement < 15 ? item.durability - 5 : item.durability - 10;
  const enhancement =
    item.enhancement > 16 ? item.enhancement - 1 : item.enhancement;

  return { ...item, durability, enhancement };
}

function success(item) {
  const enhancement = item.enhancement;
  if (item.enhancement > 19) {
    return { ...item, enhancement: enhancement };
  } else {
    return { ...item, enhancement: enhancement + 1 };
  }
}

function repair(item) {
  if (item.durability !== 100) {
    return { ...item, durability: 100 };
  } else {
    null;
  }
}

function get(item) {
  const name =
    item.enhancement < 1 ? item.name : item.name + [item.enhancement];
  return { ...item, name };
}
