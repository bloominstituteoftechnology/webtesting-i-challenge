const enhancer = require('../enhancer');

describe('enhancer library', () => {

    describe('success() method', () => {
        const item = {
            originalName: "BF Sword",
            name: "BF Sword",
            type: 'weapon',
            durability: 100,
            enhancement: 'PEN'
        };

        const expected = {
            originalName: "BF Sword",
            name: "[PEN] BF Sword",
            type: 'weapon',
            durability: 100,
            enhancement: 'PEN'
        }

        it('should give me back the same item', () => {
            const actual = enhancer.success(item);

            expect(actual).toEqual(expected)
        })

        it('type should only be armor or weapon', () => {
            expect(item.type).toBe('weapon' || 'armor')
        })

    })


})