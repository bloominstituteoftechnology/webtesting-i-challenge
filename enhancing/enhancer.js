module.exports = {
  success,
  fail,
  repair,
  get,

};

function success(item) {
  if (item.enhancement != 20) {
    return item.enhancement += 1
  } else {
    return {...item}
  }
  // return item.enhancement;
}

function fail(item) {
  if (item.enhancement < 15) {
    item.durability - 5

    if (item.enhancement >= 15) {
      item.durability - 10
    }

    if (item.enhancement > 16) {
      item.enhancement - 1
    }
  } else {
    return { ...item };
  }
  
}

function repair(item) {
  return { ...item };
}

function get(item) {
  return { ...item };
}
