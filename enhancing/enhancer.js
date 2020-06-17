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
      enhancement: item.enhancement + 1,
      message: 'ENHANCED'
    }
  } else {
    return {
      ...item,
      message: 'Enhancement Full'
    }
  }
}

function fail(item) {
  if(item.enhancement < 15 && item.durability <= 5){
    return {
      ...item,
      durability: 0,
      message: 'ITEM DESTROYED'
    }
  } 
  else if(item.enhancement >= 15 && item.durability <= 10){
    return {
      ...item,
      durability: 0,
      message: 'ITEM DESTROYED'
    }
  } 
  else if(item.enhancement > 16 && item.durability <= 10) {
    return {
      ...item,
      enhancement: item.enhancement - 1,
      durability: 0,
      message: 'ITEM DESTROYED'
    }
  } 
  else if(item.enhancement > 16) {
    return {
      ...item,
      enhancement: item.enhancement - 1,
      durability: item.durability - 10,
      message: '10 DMG, -1 Enhancement'
    }
  }
  else if(item.enhancement >= 15){
    return {
      ...item,
      durability: item.durability - 10,
      message: '10 DMG'
    }
  } 
  else {
    return { 
      ...item,
      durability: item.durability - 5,
      message: '5 DMG'
    };
  } 
}

function repair(item) {
  return { 
    ...item,
    durability: 100,
    message: 'FULLY REPAIRED'
  };
}

function get(item) {
  return { ...item };
}
