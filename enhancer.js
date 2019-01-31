module.exports = {
    success: {

    },

    failure: {

    },

    repair: (item) => {

        let updateItem = {
            name: item.name,
            type: item.type,
            durability: 100,
            enhancement: item.enhancement
        }

        return updateItem;
    }
}