module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  if (item.enhancement < 20) {
    return {...item, enhancement: item.enhancement + 1}
    
  } else {
    return {...item, enhancement: item.enhancement}
  }
}

function fail(item) {
  if(item.enhancement < 15) {
    return {...item, durability:item.durability - 5}
  }
  if(item.enhancement >= 15 || item.enhancement >= 16 ) {
    return {...item, durability: item.durability - 10}
  }
  if(item.enhancement >= 16) {
    return {...item, enhancement: item.enhancement - 1}
  } else {
    return {...item, durability: item.durability, enhancement: item.enhancement}
  }
}

function repair(item) {
item.durability = 100
return {...item}
}

function get(item) {
  return { ...item };
}
