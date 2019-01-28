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

function fail() {

}

function repair(item) {
    //takes an item and return a new item with durability of a 100
    return { ...item, durability: 100};
}