incrementNumber = (num) => {
    let newNumber = 0;
    if (num < 21) {
        newNumber = num + 1;
    } else {
        newNumber = num;
    }
    return newNumber;
}

decrementNumber = (num) => {
    let newNumber = 0;
    if (num > 0) {
        newNumber = num - 1;
    } else {
        newNumber = num;
    }
    return newNumber;
}

enhanceLevel = (num) => {
    let eLevel = '';
    if (num <16) {
        eLevel = `+${num}`;
    } else if (num == 16) {
        eLevel = 'PRI';
    } else if (num == 17) {
        eLevel = 'DUO';
    } else if (num == 18) {
        eLevel = 'TRI';
    } else if (num == 19) {
        eLevel = 'TET';
    } else {
        eLevel = 'PEN';
    }
    return eLevel;
}

decDur = (dur, enh) => {
    let newDur = 0;
    if (enh < 15) {
        newDur = dur - 5;
    } else {
        newDur = dur - 10;
    }
    return newDur;
}



module.exports = {
    //returns new item object modified according to enhancement success rules
    success: (item) => {
        let enhancementNumber = incrementNumber(item.enhancementNumber);
        let enhance = enhanceLevel(enhancementNumber);
        let splitName = item.name.split(' ');
        let base = splitName.pop();
        let newName = `[${enhance}] ${base}`;
        
        let obj = {
           name: newName,
           type: item.type,
           durability: item.durability,
           enhancementNumber: enhancementNumber,
           enhancement: enhance,
       };
       
       return obj;
    },

    //returns new item object according to enhancement failure rules
    fail: (item) => {
        let enhancementNumber = decrementNumber(item.enhancementNumber);
        let enhance = enhanceLevel(enhancementNumber);
        let splitName = item.name.split(' ');
        let base = splitName.pop();
        let newName = `[${enhance}] ${base}`;
        let durNum = decDur(item.durability, item.enhancementNumber);

        
        let obj = {
           name: newName,
           type: item.type,
           durability: durNum,
           enhancementNumber: enhancementNumber,
           enhancement: enhance,
       };
       
       return obj;

    },

    //returns new item object with durability restored to 100
    repair: (item) => {
        let obj = {
            name: item.name,
            type: item.type,
            durability: 100,
            enhancementNumber: item.enhancementNumber,
            enhancement: item.enhancement,
        };
        return obj;
    }
}






