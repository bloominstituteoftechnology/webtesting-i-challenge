const enhancer = require('./enhancer.js');
// test away!

describe('enhancer module', () => {

    const makeSword = (enhancement = 0, durability = 100) => ({
        name: 'Broad Sword',
        durability,
        enhancement
    });

    describe('succeed function', () => {

        it('Items enhancement should increase by an increment of 1', () => {

            const expected = makeSword(enhancement = 14);
            const item = makeSword(enhancement = 13);

            expect(succeed(item)).toBe(expected);

        });

        it('Item with an enhancement of 20 will remain the same', () => {

            const expected = makeSword(enhancement = 20);
            const item = makeSword(enhancement = 20);

            expect(succeed(item)).toBe(expected);

        });
    });

    describe('fail function', () => {

    });

    describe('repair function', () => {

    });

});
