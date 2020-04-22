module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function repair(item) {
  return { ...item, durability: 100 };
}

function fail(item) {
  const enhancement = item.enhancement >= 16
      ? item.enhancement - 1
      : item.enhancement;
  const durability = item.enhancement >= 15
      ? item.durability - 10
      : item.durability - 5;
  return { ...item, enhancement, durability };
}
function succeed(item) {
  const enhancement = item.enhancement === 20 ? item.enhancement = 20 : ++item.enhancement;
  return { ...item, enhancement };
}

function get(item) {
  const enhancement = item.enhancement === 0
    ? item.name = item.name
    : (item.name = `[${item.enhancement}] + ${item.name}`)
  return { ...item, enhancement };
}
