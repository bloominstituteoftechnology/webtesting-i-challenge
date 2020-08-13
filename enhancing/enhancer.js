module.exports = {
  succeed,
  fail,
  repair,
  get,
};


function succeed(item) {
  const { enhancement } = item;
  if(enhancement < 20) {
    item.enhancement += 1;
  }
  return { ...item};
}

function fail(item) {
  const { enhancement } = item;
  if(enhancement > 16) {
    item.durability -= 10, item.enhancement -= 1;
  } else if(enhancement > 14) {
    item.durability -= 10; 
  } else {
    item.durability -= 5;
  }

  return { ...item };
}

function repair(item) {
  return { 
    ...item,
    durability: 100
  };
}

function get(item) {
  const { enhancement } = item;
  if(enhancement > 0) {
    item.name = `[+${item.enhancement}] ${item.name}`
  }
  return { ...item };
}