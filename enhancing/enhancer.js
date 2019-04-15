module.exports = {
  succeed,
  fail,
  repair,
  get,
};

const item = {name: '', durability: '', enhancement: ''}

function succeed(item) {
  if (item !== 20){
  item = {
    ...item,
    enhancement: item + 1,
    durability: item
  }
  return { ...item };
}else{
  item = {
    ...item,
    enhancement: item,
    durability: item
  };
  return{...item}
}
}

function fail(item) {
  item = {
    ...item,
      enhancement: item,
      durability: item
  }
  if(item.enhancement < 15){
    item.durability -= 5;
    }
  else{
    item.durability -=10;
  }
  if(item.enhancement > 16){
    item.enhancement --;
  }

  return { ...item };
}

function repair(item) {
  item = {
    ...item,
    durability: 100
  }
  return {...item};
}

function get(item) {

  return { ...item };
}
