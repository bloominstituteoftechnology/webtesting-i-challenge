module.exports = {
  succeed,
  fail,
  repair,
  get,
};
//a success(item) method that accepts an item object and returns a new item object modified according to the rules defined by the client for enhancement success.
function succeed(item) {
  if(item.enhancement <20) {
    return { ...item, enhancement: item.enhancement +1};
  } else if(item.enhancement === 20) {
    return item;
  }

    
}
//a fail(item) method that accepts an item object and returns a new item object modified according to the rules defined by the client for enhancement failure.
function fail(item) {
  if(item.enhancement < 15) {
    return { ...item, durability: item.durability -5};

  } if(item.enhancement > 15){
    return {...item, durability: item.durability -10}

  } if(item.enhancement > 16) {
    return {...item, enhancement: item.enhancement -1}
  }
  
  
}
//a repair(item) method that accepts an item object and returns a new item with the durability restored to 100. This method is the simplest of the three and would be a good starting point on this project.
function repair(item) {
    return { ...item, durability: 100 };
  
  
  
}
//a get() method for use when working on the stretch problem.
function get(item) {
  return { ...item };
}
 