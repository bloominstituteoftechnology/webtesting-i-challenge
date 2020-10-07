module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  const { enhancement } = item;
  if(enhancement < 20) {
    item.enhancement += 1;
  }
  return { ...item};
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
  return { ...item , durability: 100 };
}

function get(item) {
  return { ...item };
}
