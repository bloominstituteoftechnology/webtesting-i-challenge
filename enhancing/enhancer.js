module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  const enhancement = item.enhancement;
  if (item.enhancement > 19) {
    return { ...item, enhancement: enhancement };
  } else {
    return { ...item, enhancement: enhancement + 1 };
  }
}	

function fail(item) {
  if(item.enhancement>= 0 && item.enhancement <=14){
    item.durability = item.durability-5;
  }else if(item.enhancement>14) {
    item.durability = item.durability-10;
  }else if(item.enhancement>15){
  item.enhancement-=1;
  }else if(item.enhancement<16){
    return(item.enhancement)
  };


   return item;
}	



function repair(item) {
  if (item.durability !== 100) {
    return { ...item, durability: 100 };
  } else {
    null;
  }
}	


function get(item) {
  return { ...item };
}
