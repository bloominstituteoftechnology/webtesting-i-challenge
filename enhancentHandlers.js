module.exports = {

    success: (item) => {

    },

    fail: (item) => {

    },
}

const items = [
    {},
    {},
    {},
    {}
];

const enhancedItems = items.map(success);

expect(enhancedItems[0]).toBe();