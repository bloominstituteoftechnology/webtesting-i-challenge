module.exports = {
    success,
    fail,
    repair
}



function success(item) {
    return item;
}

function fail() {

}

function repair(item) {
    //takes an item and return a new item with durability of a 100
    return { ...item, durability: 100};
}