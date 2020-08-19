module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  if(item.enhancement <= 20){
    const newEnhancement = item.enhancement + 1
    return { ...item, enhancement: newEnhancement}
  } else {
    return { ...item }
  }
}

function fail(item) {
  if(item.enhancement < 15){
    const newDurability = item.durability - 5
    return {...item, durability: newDurability}
  }else if(item.enhancement > 16){
    const newEnhancement = item.enhancement - 1
    const newDurability = item.durability - 10
    return {
      ...item, 
      durability: newDurability,
      enhancement: newEnhancement
    }
  } else {
    const newDurability = item.durability - 10
    return {...item, durability: newDurability}

  }

}


function repair(item) {
  if(item.durability !== 100){

    
    return {...item, durability: 100}
  } else {
    return {...item}
  }

}

function get(item) {
  if(item.enhancement > 0){
    const enhanced = `[+${item.enhancement}] ${item.name}`

    return { ...item, name: enhanced }
  }else{
    return { ...item };
  }
  
}
