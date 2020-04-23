module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  const {enhancement} = item;
  if(enhancement <20 && enhancement > -1 ){
    return {...item, enhancement: enhancement + 1 }
  } else if ( enhancement == 20){
    return {...item}
  } else {
    return "Item can't exist"
  };
}


function fail(item) {
  const {enhancement, durability} = item;
  if(enhancement < 15 && enhancement > -1 && durability < 5){
    return { ...item, durability: 0 }
  } else if ((enhancement == 15 && durability< 10)|| enhancement == 16 && durability< 10){
    return { ...item, durability: 0 }
  } else if (enhancement > 16 && enhancement < 21 && durability < 10){
    return { ...item, durability: 0, enhancement: enhancement -1 }
  } else if(enhancement < 15 && enhancement > -1){
    return { ...item, durability: durability -5 }
  } else if (enhancement == 15 || enhancement == 16){
    return { ...item, durability: durability - 10 }
  } else if (enhancement > 16 && enhancement < 21){
    return { ...item, durability: durability - 10, enhancement: enhancement -1 }
  } else {
    return "Item can't exist"
  }
  
}

function repair(item) {
  const {enhancement, durability} = item
  if (enhancement > 20|| enhancement < 0 || durability > 100 || durability < 0) {
    return "Item can't exist"
  }
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
