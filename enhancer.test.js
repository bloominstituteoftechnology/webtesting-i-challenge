const enhancer = require('./enhancer');
const { battleAxe, spear, failSpear, caltrops, succesCaltrops, flail, failFlail, dagger, mace, falchion, saber, successDagger, successMace, warHammer, longbow, successLongbow, shuriken} = require('./weapons');
const {chainMail, successChainMail, helm, gorget, gauntlet, greave} = require('./armor');

//problem solve multi-word names (War Hammer only returns War)

describe('the repair function', () => {

    test('returns durability 100', () => {
        const testObj = enhancer.repair(battleAxe);
        expect(testObj.durability).toBe(100);
    });
        //test if durability is already 100
        //test if durability is 0
        //test missing durability?
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

    //what if durability is more than 100?
    //what if durability is below 20 (if 0 =< EL > 15)
    //what if durability below 0 if ( 14 < EL === 20)

})

describe('the fail function', () => {

    test('should run success method if armor EL is <6', () => {
        const testObj = enhancer.fail(chainMail);
        expect(testObj).toEqual(successChainMail)
    })

    test('should run success method if weapon EL is <8', () => {
        const testObj = enhancer.fail(caltrops);
        expect(testObj).toEqual(succesCaltrops)
    })

    test('should return fail with EL 15, durability 10', () => {
        const testObj = enhancer.fail(shuriken);
        expect(testObj.durability).toBe(0);
        expect(testObj.enhancement).toBe('+15');
        expect(testObj.name).toBe('[+15] Shuriken');
    })

    test('should return fail with lowered EL', () => {
        const testObj = enhancer.fail(flail);
        expect(testObj).toEqual(failFlail)
    })

    test('should return EL level 0 with updated name', () => {
        const testObj = enhancer.fail(spear);
        expect(testObj).toEqual(failSpear)
    })

    test('throws error when EL 9 & durability 23', () => {
        expect(() => {
            enhancer.fail(helm)
        }).toThrow()
    })

    test('throws error when EL 14 & durability 29', () => {
        expect(() => {
            enhancer.fail(gorget)
        }).toThrow()
    })

    test('throws error when EL PEN & durability 0', () => {
        expect(() => {
            enhancer.fail(gauntlet)
        }).toThrow()
    })

    test('throws error when EL 9 & durability 23', () => {
        expect(() => {
            enhancer.fail(greave)
        }).toThrow()
    })
})
