module.exports = {
    success,
    fail,
    repair
}



function success(item) {
    const newEnhacement = item.enhancement + 1;
    const newName = item.originalName;
    return { 
        ...item, 
        enhancement: newEnhacement,
        name: `[+${newEnhacement}] ${newName}`
    
    };
}

function fail(item) {
    const itemEnhancement = item.enhancement;
    const itemDurability = item.durability;
    let newDurability = itemDurability;
    let newEnhacement = itemEnhancement;
    const newName = item.originalName;

    if(itemEnhancement > -1 && itemEnhancement < 15 ) {
        newDurability = itemDurability - 5;
    } else if(itemEnhancement > 14) {
        newDurability = itemDurability - 10;
    } else if(itemEnhancement > 16) {
        newEnhacement = itemEnhancement - 1;
    }

    if(newEnhacement <= 14 && newDurability < 25)
        return 'Failed to enhance';

    if(newEnhacement >=15 && newDurability < 10)
        return 'Failed to enhance';

    return {
        ...item, 
        name: `[+${newEnhacement}] ${newName}`,
        durability: newDurability,
        enhancement: newEnhacement,
    }
}

function repair(item) {
    //takes an item and return a new item with durability of a 100
    return { ...item, durability: 100};
}