module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  const result = { ...item }

  result.enhancement !== 20 ? result.enhancement = item.enhancement + 1
                            : null 

  return result;
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
