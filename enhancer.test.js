const enhancer = require('./enhancer');
const { battleAxe } = require('./weapons');

const repairedBattleAxe = {
    name: '[12] Battle Axe',
    type: 'weapon',
    durability: 100,
    enhancement: 12
}

describe('the repair function', () => {

    test('returns durability to 100', () => {
        //test that the item's durability goes to 100
        expect(enhancer.repair(battleAxe)).toEqual(repairedBattleAxe)
    })
})

