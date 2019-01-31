
module.exports = {
    success: (item) => {
        return {
            name: item.name,
            type: item.type,
            durability: item.durability,
            enhancement: item.enhancement
        }
    },

    fail: (item) => {

    },

    repair: (item) => {
        
    }
}