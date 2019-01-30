module.exports = {
    //returns new item object modified according to enhancement success rules
    success: (item) => {

    },

    //returns new item object according to enhancement failure rules
    fail: (item) => {

    },

    //returns new item object with durability restored to 100
    repair: (item) => {
        let obj = {
            name: item.name,
            type: item.type,
            durability: 100,
            enhancement: item.enhancement
        };
        return obj;
    }
}






