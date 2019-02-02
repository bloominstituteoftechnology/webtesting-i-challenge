//file containing enhancement/modification functions


 
  const success = (item) =>{
 
      if(item.enhancement >= 0 && item.enhancement <= 14){
          item.enhancement += 1;
          item.newName = `+[${item.enhancement}] ${item.name}`;
          if(item.durability < 20){
              item.durability += 1;
          }
      }else if(item.enhancement === 15){
          item.enhancement += 1;
          item.newName = `[PRI] ${item.name}`;
          if(item.durability < 0){
            item.durability += 1;
        }
      }else if(item.enhancement === 16){
        item.enhancement += 1;
        item.newName = `[DUO] ${item.name}`;
        if(item.durability < 0){
            item.durability += 1;
        }
      }else if(item.enhancement === 17){
        item.enhancement += 1;
        item.newName = `[TRI] ${item.name}`;
        if(item.durability < 0){
            item.durability += 1;
        }
      }else if(item.enhancement === 18){
        item.enhancement += 1;
        item.newName = `[TET] ${item.name}`;
        if(item.durability < 0){
            item.durability += 1;
        }
      }else if(item.enhancement === 19){
        item.enhancement += 1;
        item.newName = `[PEN] ${item.name}`;
        if(item.durability < 0){
            item.durability += 1;
        }
      }else if(item.enhancement === 20){
        item.enhancement = 20;
        alert('Cannot further upgrade. At max level')
      }
      
    return item;
  }
    



//If the item's enhancement is 14 or lower, the item cannot be enhanced if the durability is below 25.
//If the item's enhancement is 15 or higher, the item cannot be enhanced if the durability is below 10.


 const fail = (item) =>{
   
        if(item.enhancement >= 0 && item.enhancement <= 14){
            item.durability =  item.durability - 5;
        }else if(item.enhancement > 14){
            item.durability -= 10;
            if(item.enhancement === 17){
                item.enhancement -= 1;
                item.newName === `[PRI] ${item.name}`
        }else  if(item.enhancement === 18){
                item.enhancement -= 1;
                item.newName === `[DUO] ${item.name}`
        }else  if(item.enhancement === 19){
                item.enhancement -= 1;
                item.newName === `[TRI] ${item.name}`
        }else  if(item.enhancement === 20){
                item.enhancement -= 1;
                item.newName === `[TET] ${item.name}`
            }
        }
     return item;
 }
  
const repair = (item) =>{
    newItem = {
        name: item.name,
        newName: item.newName,
        type: item.type,
        durability: 100,
        enhancement: item.enhancement
    }
   return newItem;
}
  
       
    module.exports = {
        success, fail, repair
    }

