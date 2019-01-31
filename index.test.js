const index = require('./index');

describe('test outcomes', () => {
    describe('success outcome', () => {
        const item = {
            beforeName: 'test weapon',
            name: 'test weapon',
            type: 'weapon',
            durability: 100,
            enhancement: 'PEN'
        };
        const expected = {
            beforeName: 'test weapon',
            name: '[PEN] test weapon',
            type: 'weapon',
            durability: 100,
            enhancement: 'PEN'
        };
        it('should give back same item', () => {
            const actual = success(item);
            expect(actual).toEqual(expected)
        });
        it('type is weapon or armor', () => {
            expect(item.type).toBe('weapon' || 'armor')
        });
    });

});