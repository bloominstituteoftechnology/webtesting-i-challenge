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
  return { ...item };
}

function succeed(item) {
  const enhancement = item.enhancement === 20 ? 20 : ++item.enhancement;
  return { ...item, enhancement };
}

function get(item) {
  return { ...item };
}
