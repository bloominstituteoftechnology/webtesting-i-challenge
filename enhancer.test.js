const enhancer = require('./enhancer');
const { hammer } = require('./weapons');

const repairedWeapon = {
    name: 'Hammer',
    type: 'weapon',
    durability: 100,
    enhancement: 12
}

describe('weapon repair', () => {
    test('restore durability to 100', () => {
        expect(enhancer.repair(hammer)).toEqual(repairedWeapon)
    })
})