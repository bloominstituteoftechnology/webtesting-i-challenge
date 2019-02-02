


module.exports = {
    success: (item) => {
        const levels = [0,'+1','+2','+3','+4','+5','+6','+7','+8','+9','+10','+11','+12','+13','+14','+15','PRI', 'DUO', 'TRI', 'TET', 'PEN']
        let nI = levels.indexOf(item.enhancement);
        let pI = nI + 1;
        
        if (item.name.includes('[') && pI !== 21) {item.name = item.name.replace(`${levels[nI]}`,`${levels[pI]}`); item.enhancement = levels[pI]}

        if (nI >= 20) 
        {item.enhancement = levels[20];
        item.name = `[+${levels[20]}] ${item.name}`}
    
        if (pI < 15 && !item.name.includes('[') )
        {item.name = `[${levels[pI]}] ${item.name}`;
        item.enhancement = levels[pI];
}

        if (pI >= 15 && !item.name.includes('[') && pI !== 21 )
        {
          item.enhancement = levels[pI];

          item.name = `[+${levels[pI]}] ${item.name}`}

        return item;
    },
    
    fail: (item) => {

    },

    repair: (item) => {

        item.durability = 100;
        return item;
    }
}



let enhance = (item) => {
    item.enhancement = 100;
}

let tor = {
    name: 'torch',
    type: 'weapon',
    durability: 80,
    enhancement: 10
}

enhance(tor)