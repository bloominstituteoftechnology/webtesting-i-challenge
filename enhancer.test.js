const enhancer = require('./enhancer');
const { battleAxe, dagger, mace, falchion, saber, successDagger, repairedBattleAxe, successMace, warHammer, longbow, successLongbow} = require('./weapons');

//what if durability is more than 100?

describe('the repair function', () => {

    test('returns durability to 100', () => {
        //test that the item's durability goes to 100
        expect(enhancer.repair(battleAxe)).toEqual(repairedBattleAxe)
        //test durability 100
        //test durability 0
        //test missing durability?
    })
})


describe('the success function', () => {

    test('returns enhancement increased by 1 and name updated', () => {
        expect(enhancer.success(dagger)).toEqual(successDagger);
    });

    test('increases 15 to PRI', () => {
        expect(enhancer.success(mace)).toEqual(successMace);
    })

    test('TET enhances to PEN', () => {
        expect(enhancer.success(longbow)).toEqual(successLongbow)
    })

    test('does not enhance when EL <=14 and durability <25', () => {
        expect(()=>{
            enhancer.success(falchion)
        }).toThrow();
    })

    test('does not enhance when EL >=15 and durability <10', () => {
        expect(() => {
            enhancer.success(saber)
        }).toThrow()
    })

    test('does not enhance when EL === PEN', () => {
        expect(() => {
            enhancer.success(warHammer)
        }).toThrow()
    })

})
