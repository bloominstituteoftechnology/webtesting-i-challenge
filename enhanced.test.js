const enhanced = require('./enhanced.js')

const {armory} = require ('./enhanced.crashtd.js')

describe('object tests', () => {



    test('object pre-tests', () => {
        expect(armory[0].durability).toEqual(100);
        expect(armory[0].type).toEqual('weapon');
        expect(armory[1].type).toEqual('armour');
        expect(armory[1].enhancement).toEqual(0);
})

    test('repair', () => {
        const weap = enhanced.repair(armory[0]);
        const arm = enhanced.repair(armory[1])

        expect(weap.durability).toEqual(100);
    })

    test('enhancement', () => {
        const enhancer = enhanced.success(armory[0]);
        const enhancer2 = enhanced.success(armory[2]);
        expect(enhancer.name).toEqual('[+11] torch');

        expect(enhancer2.name).toEqual('[+PEN] axe');

    })

})
