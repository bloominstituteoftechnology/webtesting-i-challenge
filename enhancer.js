const success = (item) => {

    let enhanceLevels = [
        0, '+1', '+2', '+3', '+4', '+5', '+6', '+7', '+8', '+9', '+10', 
        '+11', '+12', '+13', '+14', '+15', 'PRI', 'DUO', 'TRI', 'TET', 'PEN']

    let updateName = [item.name];

    if(item.enhancement !== 0){
        let split = item.name.split(' ');
        let enhanceSplit = split[0].split('').splice(1,3).join('')
        splitName = [enhanceSplit, split[1]]
      }

    if((item.enhancement <= 14 && item.durability < 25) || (item.enhancement >= 15 && item.durability <10) || (item.enhancement === 'PEN') ){
        throw new Error('Unable to enhance item')
    }

    let updateEnhancement = '';

    for(i=0; i < enhanceLevels.length; i++){
        if(item.enhancement === enhanceLevels[i]){
        updateEnhancement = i + 1;
        }
    }

    item.enhancement = `${enhanceLevels[updateEnhancement]}`;

    if(updateEnhancement === 1){
        item.name = '[' + `${enhanceLevels[updateEnhancement]}` + '] ' + `${updateName}` 
    } else {
      item.name = '[' + `${enhanceLevels[updateEnhancement]}` + '] ' + `${updateName[1]}`
    }
  return item;
}

const fail = (item) => {

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