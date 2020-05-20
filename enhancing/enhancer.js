module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  return { ...item,
    
    
    
  };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  //console.log(item.durability)
if(item.durability < 100){
  return { ...item,
    durability: 100
   };
  }else{
    return item;
  }
}

function get(item) {
  return { ...item };
}
