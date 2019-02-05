const newItem = {
    name: 'playerOne',
    type: 'weapon',
    durability: 100,
    enhancement: 0
}

const enhancer = require('./enhancer');

describe('the enhancer module', () => {

    describe('the success function', () => {

    });

    describe('the fail function', () => {

    });

    describe('the repair function', () => {
        test('restore the item`s durability', () => {
            expect(enhancer.repair(newItem).durability).toEqual(100);
        })
    })
});