const enhancement = require('./enhancement');

const item = {
    name: 'Sword',
    type: 'Weapon',
    durability: 100,
    enhancement: 'PEN'
}

describe('Success helper method', () => {
    test('Item attributes exist', () => {
        expect(typeof enhancement.success(item).name).toBe('string');
    });
});

