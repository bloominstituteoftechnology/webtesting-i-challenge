const index = require('./index');

describe('outcomes', () => {
    describe('success outcome', () => {
        const weapon1 = {
            unenhancedName: 'testsword',
            name: '[TRI]testsword',
            type: 'weapon',
            durability: 90,
            enhancement: 18
        }
        const weaponSuccess1 = {
            unenhancedName: 'testsword',
            name: '[TET] testsword',
            type: 'weapon',
            durability: 90,
            enhancement: 19
        }
        const weapon2 = {
            unenhancedName: 'testdagger',
            name: 'testdagger',
            type: 'weapon',
            durability: 20,
            enhancement: 0
        }
        const weapon3 = {
            unenhancedName: 'testsword',
            name: 'testsword',
            type: 'weapon',
            durability: 50,
            enhancement: 0
        }
        const weaponSuccess3 = {
            unenhancedName: 'testsword',
            name: '[+1] testsword',
            type: 'weapon',
            durability: 50,
            enhancement: 1
        }
        test('Should increase the enhancement of the item by 1', () => {
            const enhancedItem = index.success(weapon1);
            const enhancedItem3 = index.success(weapon3);
            expect(enhancedItem).toEqual(weaponSuccess1);
            expect(enhancedItem3).toEqual(weaponSuccess3);
        })
        test('error if durability is below 25 and item enhancement is less than or equal to 14', () => {
            expect(() => {
                index.success(weapon2)
            }).toThrow();
        })
        test('error if item enhancement is already 20', () => {
            expect(() => {
                index.success(armor1)
            }).toThrow();
        })
    })
    describe('fail outcome', () => {
        const item2 = {
            unenhancedName: 'testsword',
            name: '[TRI] testsword',
            type: 'weapon',
            durability: 80,
            enhancement: 18
        }
        const failedItem2 = {
            unenhancedName: 'testsword',
            name: '[DUO] testsword',
            type: 'weapon',
            durability: 70,
            enhancement: 17
        }
        test('Should fail when enhancing', () => {
            const failedEnhance1 = index.fail(item2);
            expect(failedEnhance1).toEqual(failedItem2);
        })
    })
    describe('repair outcome', () => {
        const item1 = {
            unenhancedName: 'testsword',
            name: '[TRI] testsword',
            type: 'weapon',
            durability: 80,
            enhancement: 18
        }
        const repairedItem1 = {
            unenhancedName: 'testsword',
            name: '[TRI] testsword',
            type: 'weapon',
            durability: 100,
            enhancement: 18
        }
        const repairedItem = index.repair(item1);
        test('Returns item with durability at 100', () => {
            expect(repairedItem).toEqual(repairedItem1);
        })
    })
})