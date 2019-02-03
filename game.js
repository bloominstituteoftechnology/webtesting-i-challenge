module.exports = {
   
   success : (item) => {
    let value = item.enhancement; 
    let newName = item.name;
    item.message = '';
    switch (true) {
      case (value>=0 && value<=15):
        value += 1,
        newName = `[+${value}] ${newName}`
        break;
      case (value === 16):
        value += 1,
        newName = `[PRI] ${newName}`
        break;
      case (value === 17):
        value += 1,
        newName = `[DUO] ${newName}`
        break;  
      case (value === 18):
        value += 1,
        newName = `[TRI] ${newName}`
        break;
      case (value === 19):
        value += 1,
        newName = `[TET] ${newName}`
        break;
      case (value === 20):
        value += 1,
        newName = `[PEN] ${newName}`
        break;
      case (value > 20):
        item.message = `Max Limit Reached`;
        break;
    }
    const newItem = {...item, name: newName, enhancement: value };
    return newItem;
   },

   fail: (item) => {
      let newItem;
      let value = item.enhancement; 
      let newName = item.name;
      let durability = item.durability;
      item.message = '';

    if(value <= 14 && durability < 25)  item.message = `This item cannot be enhanced`;
    if(value >= 15 && durability < 10)  item.message = `This item cannot be enhanced`;

    switch (true) {
        case (value>=0 && value<=14):
          durability -= 5
          break;
        case (value >=15 && value <= 16):
         durability -= 10
          break;
        case (value === 17):
          value -= 1;
          newName = `[PRI] ${newName}`;
          break;  
        case (value === 18):
          value -= 1;
          newName = `[DUO] ${newName}`;
          break;
        case (value === 19):
          value -= 1;
          newName = `[TRI] ${newName}`;
          break;
        case (value === 20):
          value -= 1;
          newName = `[TET] ${newName}`;
          break;
        case (value === 21):
          value -= 1;
          newName = `[PEN] ${newName}`;
          break;  
        case (value > 21):
          value -= 1;
          break;  
       
    }
      
      if(item.message) {
        newItem = {...item, name: newName, enhancement: value, message: item.message, durability: durability };
      } else {
        newItem = {...item, name: newName, enhancement: value ,durability:durability};
      }
      return newItem;
   },
   repair: (item) => {

   }
}