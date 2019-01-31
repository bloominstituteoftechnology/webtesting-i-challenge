//items must have a name, type, durability and enhancement

//type can be weapon or armor

//max durability is 100. items start at 100 durability

//enhancement level starts at 0 and reaches a maximum of 'PEN'

//durability cannot be less than 20 if it's enhancement level is between +0 - +14

//durability cannot be less than 0 if its' enhancement level is between +15 and 'TET'

//max possible is 'PEN'
//enhancing armor up to 5 cannot fail; weapon up to 7 cannot fail

const success = (item) => {
    let splitName = [item.name];
    
        if(item.enhancement !== 0){
          let split = item.name.split(' ');
          let eLSplit = split[0].split('').splice(1,3).join('')
          splitName = [eLSplit, split[1]]
        }
  
      let enhanceLevels = [0, '+1', '+2', '+3', '+4', '+5', '+6', '+7', '+8', '+9', '+10', '+11', '+12', '+13', '+14', '+15', 'PRI', 'DUO', 'TRI', 'TET', 'PEN']
  
      if((item.enhancement <= 14 && item.durability < 25) || (item.enhancement >= 15 && item.durability <10) || (item.enhancement === 'PEN') ){
          throw new Error('Cannot enhance this item')
      }
  
      let newEL = '';
  
      for(i=0; i<enhanceLevels.length; i++){
          if(item.enhancement === enhanceLevels[i]){
          newEL = i+1;
          }
      }
  
      item.enhancement = `${enhanceLevels[newEL]}`;
  
      if(newEL === 1){
          item.name = '[' + `${enhanceLevels[newEL]}` + '] ' + `${splitName}` 
      } else {
        item.name = '[' + `${enhanceLevels[newEL]}` + '] ' + `${splitName[1]}`
      }
  
    return item;
  }


//accepts an item and returns a new item that is modified according to the client rules for failure
//durability is decreased by 5 if enhancement level is between 0-14

//decreased by 10 if EL is 14 || 15

//if >16, decreases by 1
//update name after failure


const fail = (item) => {
    let splitName = [item.name];
    
        if(item.enhancement !== 0){
          let split = item.name.split(' ');
          let eLSplit = split[0].split('').splice(1,3).join('')
          splitName = [eLSplit, split[1]]
        }
  
      let enhanceLevels = [0, '+1', '+2', '+3', '+4', '+5', '+6', '+7', '+8', '+9', '+10', '+11', '+12', '+13', '+14', '+15', 'PRI', 'DUO', 'TRI', 'TET', 'PEN']
  
      let eL = '';
  
      for(i=0; i<enhanceLevels.length; i++){
          if(item.enhancement === enhanceLevels[i]){
          eL = i;
          }
      }

      if ((item.type === 'weapon' && eL < 8) || (item.type === 'armor' && eL <6 )){
        el = (eL++);
      } 
      
      else if( ((eL < 14) && (item.durability - 5) > 19)){
          item.durability = (item.durability - 5)
      } else if( eL === 14 && (item.durability -10) > 19){
          item.durability = (item.durability - 10)
      } else if( eL === 15 && (item.durability -10) >= 0){
          item.durability = (item.durability - 10)
      } else if( eL > 15 && (item.durability -10) >= 0) {
          item.durability = (item.durability -10);
          eL = eL-1;
      } else {
          throw new Error('This item even fails at failing.')
      }
  
      item.enhancement = `${enhanceLevels[eL]}`;
  
      if(eL === 1){
          item.name = '[' + `${enhanceLevels[eL]}` + '] ' + `${splitName}` 
      } else {
        item.name = '[' + `${enhanceLevels[eL]}` + '] ' + `${splitName[1]}`
      }
  
    return item;
  }


const repair = (item) => {

    let newItem = {
        name: item.name,
        type: item.type,
        durability: 100,
        enhancement: item.enhancement
    }

    return newItem
}


module.exports = {
    success, fail, repair,
}