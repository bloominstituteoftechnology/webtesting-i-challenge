const enhancer = require('./enhancer.js');
const { repair, fail, succeed } = require('./enhancer.js');

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

            expect(succeed(item)).toEqual(expected);
        });

        it('Item with an enhancement of 20 will remain the same', () => {

            const expected = makeSword(enhancement = 20);
            const item = makeSword(enhancement = 20);

            expect(succeed(item)).toEqual(expected);
        });
    });

    describe('fail function', () => {

        it('Will return item with -5 durability', () => {

            const expected = makeSword(enhancement = 11, durability = 95);
            const item = makeSword(enhancement = 11, durability = 100);

            expect(fail(item)).toEqual(expected);
        });

        it('Will return item with -10 durability', () => {

            const expected = makeSword(enhancement = 15, durability = 90);
            const item = makeSword(enhancement = 15, durability = 100);

            expect(fail(item)).toEqual(expected);
        });

        it('Will return item with -10 durability and -1 enhancement', () => {

            const expected = makeSword(enhancement = 17, durability = 90);
            const item = makeSword(enhancement = 18, durability = 100);

            expect(fail(item)).toEqual(expected);
        });

    });

    describe('repair function', () => {

    });

});
