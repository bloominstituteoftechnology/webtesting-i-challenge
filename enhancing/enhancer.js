module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  const {enhancement} = item;

  if((typeof(enhancement)!== 'number') || Number.isNaN(enhancement)){
    throw new Error('Invalid argument types')

  } else if(enhancement == 20 ){
    return { ...item }

  }else if(enhancement < 20 && enhancement > -1){
      return{ ...item, enhancement: enhancement +1 };

  }else {
    return "Item does not exist"
  }
}

function fail(item) {
  const {enhancement, durability} = item;

  if((typeof(enhancement, durability)!== 'number') || Number.isNaN(enhancement, durability)){
    throw new Error('Invalid argument types')

  } else if(enhancement < 15 && enhancement > -1 && durability > 5 && durability <101 ){
    return { ... item, durability:durability -5}

  }else if(enhancement == 15 || enhancement == 16 && durability > 10 && durability <101){
    return { ... item, durability: durability -10}

  }else if (enhancement > 16 && enhancement < 21 && durability > 10 && durability <101){
    return { ...item, enhancement: enhancement -1, durability: durability -10 }

  }else {
    return "Item does not exist"
  }
}

function repair(item) {
 const { enhancement, durability } = item;

 if((typeof(enhancement, durability)!== 'number') || Number.isNaN(enhancement, durability)){
  throw new Error('Invalid argument types')

} else if (enhancement > 20|| enhancement < -1 || durability > 101 || durability < -1) {
    return "Item does not exist"

  }else{
    return { ...item, durability: 100 };
  }
}

function get(item) {
  const { name, enhancement} = item;

  if((typeof(enhancement) !== 'number') || Number.isNaN(enhancement)){
    throw new Error('Invalid argument types')
  }else if(enhancement == 0 ){
    return {...item}
  }else if(enhancement > 0 && enhancement < 21 ){
    return {...item, enhancement:enhancement, name: '[+' +`${enhancement}` +']' + ' '+ name }
  }else{
    return "Item does not exist"
  }
}
