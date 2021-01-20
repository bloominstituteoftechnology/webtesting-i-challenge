module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  
  // return { ...item, enhancement: item.enhancement < 20 ? item.enhancement + 1 : 20};

  const newItem = {}
  if (item.enhancement < 20) {
    newItem.enhancement = item.enhancement + 1
  } else {
    newItem.enhancement = item.enhancement
  } 

  return newItem
}

function fail(item) {
  if (item.enhancement < 15) {
    return {...item, durability: item.durability - 5}
  } 
  if (item.enhancement===15) {
    return {...item, durability: item.durability - 10}
  } else if (item.enhancement > 16) {
    return {...item, enhancement: item.enhancement - 1, durability: item.durability - 10}
  } else {return {...item}}
}

function repair(item) {
    return { ...item, durability: 100};
}

function get(item) {
  return { ...item };
}
