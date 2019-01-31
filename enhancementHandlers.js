module.exports = {

    success: (item) => {
        // a method that accepts an item object
     
        if (item.type === 'weapon' && item.enhancement < 20){
            item.enhancement += 1
        }
        return item
        // returns a new item object modified according to rules for enhancement success
    },

    // success: (item2) => {
    //     if (item2.enhancement > 0 && item2.enhancement <=5 ){
    //         return 'success'
    //     }
    // },

    fail: (item) => {
        // a method that accepts an item object
        // returns a new item object modified according to rules for enhancement failure
    },

    repair: (item) => {
        // a method that accepts an item object
        // returns a new item with durability restored to 100
    },
}