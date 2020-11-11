module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  if(item.enhancement < 20 && item.enhancement > 0){
    item.enhancement ++
  } else {
  return { ...item }
  }
}

function fail(item) {
  if(item.enhancement < 15){
    item.durability -= 5
  }
  else if(item.enhancement > 16){
    item.enhancement --
    item.durability -= 10
  }else{
    item.durability -= 10
  }
  return { ...item }
}

function repair(item) {
  item.durabilty = 100
  return { ...item };
}

function get(item) {
  return { ...item };
}
