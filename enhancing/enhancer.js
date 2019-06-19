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
  const result = { ...item }

  if(result.enhancement < 15) {
    result.durability = item.durability - 5
  } else if(result.enhancement < 17) {
    result.durability = item.durability - 10
  } else {
    result.durability = item.durability - 1
  }

  return result;
}

function repair(item) {
  const result = { ...item }

  result.durability = 100;

  return result;
}

function get(item) {
  return { ...item };
}
