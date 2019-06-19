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
  const result = { ...item }

  result.durability = 100;

  return result;
}

function get(item) {
  return { ...item };
}
