module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if(item.enhancement < 20 && item.enhancement > 0){
    item.enhancement ++
  }
  return { ...item };
}

function fail(item) {
  if(item.enhancement < 15){
    item.durability -= 5
  }else if(item.enhancement > 16){
    item.enhancement --
    item.durability -= 10
  }else{
    item.durability -= 10
  }
  return { ...item };
}

function repair(item) {
  item.durability = 100
  return { ...item };
}

function get(item) {
  newName = `[+${item.enhancement}] ${item.name}`
  item.name = newName
  return { ...item };
}

function validateItem(item){
  //checks if the proper keys exist
  if(item.name && item.durability && item.enhancement){
    //the checks that the values are the proper datatype
    if(typeof item.name === 'string' && typeof item.durability === 'number' && typeof item.enhancement === 'number'){
      //then checks that the number values are in the proper range
      if(item.durabilty <= 100 && item.durability > 0){
        if(item.enhancement <= 20 && item.enhancement >= 0){
          return true;
        }else{
          console.log('the enhancement is out of the propper range')
          return false;
        }
      }else{
        console.log()
      }
    }
    
  }else{
    console.log('you need the correct parameters')
    return false;
  }
}
