module.exports = {
    success: (item) => {

    },

    fail: (item) => {

    },

    repair: (item) => {
        item.durability = 100;
        return item;
    }
}