module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  if(item.enhancement < 20 ){
    const newItem = {
      name: item.name,
      durability: 100,
      enhancement: item.enhancement + 1
    }
    return newItem;
  }else {
    return item;
  }

}

function fail(item) {
  if(item.enhancement < 15){
    const newItem = {
      name: item.name,
      durability: item.durability - 5,
      enhancement: item.enhancement
    }
    return newItem;
  }else {
    return item;
  }
}

function repair(item) {
 
    const newItem = {
      name: item.name,
      durability: 100,
      enhancement: item.enhancement
    };
    return newItem;
}

function get(item) {
  return { ...item };
}
