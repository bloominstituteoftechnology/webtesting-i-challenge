module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enhancement < 20) {
    return { ...item, enhancement: item.enhancement + 1 };
  } else {
    return item
  }
}

function fail(item) {
  if (item.enhancement < 15) {
    return { ...item, durability: item.durability - 5 }
  } else if (item.enhancement === 15 || 16) {
    return { ...item, durability: item.durability - 10 }
  } else if (item.enhancement > 16) {
    return { ...item, durability: item.enhancement - 1 }
  }
}

function repair(item) {
  return { ...item, durability: 100 };
}


function get(item) {
  let newName = item.name;
  if (item.enhancement > 0 && item.enhancement <= 20) {
    newName = `[+${item.enhancement}] ${item.name}`;
    console.log("new name: ", newName);
    return { ...item, name: newName };
  } else if (item.enhancement === 0) {
    return { ...item };
  } else {
    return "please pass item with correct parameters";
}
}