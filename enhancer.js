//items must have a name, type, durability and enhancement

//type can be weapon or armor

//max durability is 100. items start at 100 durability

//enhancement level starts at 0 and reaches a maximum of 'PEN'

//durability cannot be less than 20 if it's enhancement level is between +0 - +14

//durability cannot be less than 0 if its' enhancement level is between +15 and 'TET'

//enhancement level starts at 0
//max possible is 'PEN'
//enhancing armor up to 5 cannot fail; weapon up to 7 cannot fail

//enhancement level is displayed as a string with a plus sign before the number for 1-15: '+1' or '+14'

//enhancement level 0 isn't displayed

//when item is enhanced, the name is modified to include the enhancement level between [] before the name. '[+7] Elven Sword' or '[DUO] Dward Sword'

//levels 16-20 are three letter strings: 'PRI', 'DUO', 'TRI', 'TET', 'PEN'



//accepts an item and returns a new item that is modified according to the client rules for success

//enhancement increases by 1
//name is updated to reflect new EL

//item cannot be enhanced if (EL is <14 && durability <25) || (EL >15 && durability <10)



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

}


//accepts an item and returns a new item with the durability restored to 100
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