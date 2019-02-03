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
   repair: (item) => {

   }
}