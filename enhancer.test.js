const enhancer = require('./enhancer');
const { sword } = require('./weapon');

const repairedSword = {
    name: 'Sword',
    type: 'weapon',
    durability: 100,
    enhancement: 13
}

describe('repair function', () => {
    test('sets the durability at 100', () => {
        expect(enhancer.repair(sword)).toEqual(repairedSword)
    })
})