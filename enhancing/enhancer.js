module.exports = {
  succeed,
  fail,
  repair,
  get,
  toTxt
};

function succeed(item) {
  if(item.enhancement<20){
    item.enhancement=item.enhancement+1;
  }
  return { ...item };
}


function fail(item){
  if(item.enhancement<15){
    item.durability-=5
  }else{
    item.durability-=10
    if(item.enhancement>16){
      item.enhancement--;
    }
  }

  return { ...item };
}

function repair(item) {

  return { ...item, ...name, durability, enhancement };
}

function get(item) {
  return { ...item };
}

function toTxt(item){
  if(item.enhancement>0){
    item.name = `[+${item.enhancement}] ${item.name}`;  
  }
  
  return { ...item };
}
