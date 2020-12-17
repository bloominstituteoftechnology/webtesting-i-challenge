module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  let newItem = {
    name: item.name,
    enhancement: item.enhancement,
    durability: 100
  }
  return newItem ;
}

function get(item) {
  return { ...item };
}
