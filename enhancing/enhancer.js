module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if(item.enhancement < 20){
    return { 
      ...item,
      enhancement: item.enhancement + 1 
    }
  } else {
    return {
      ...item,
      message: 'Enhancement Full'
    }
  }
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { 
    ...item,
    durability: 100
  };
}

function get(item) {
  return { ...item };
}
