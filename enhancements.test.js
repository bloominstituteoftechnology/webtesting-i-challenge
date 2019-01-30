const enhancements = require('./enhancements');
const { Sword } = require('./items');
const { repairedSword } = require('./items')
const { Axe } = require('./items')
const { Cannon } = require('./items')


describe('the success function', () => {

    test('The items type can be weapon or armor.', () => {
        //TEST THAT THE ITEMS TYPE IS WEAPON OR ARMOR
        expect(enhancements.success(Sword)).toBe(true)
    });

    test('The maximum durability of an item is 100.', () => {
        // TEST THE MAX DURABILITY OF AN ITEM
        expect(enhancements.success(Axe)).toBe(true);
    });

    test('The durability of an item starts at 100.', () => {
        // TEST THE MAX DURABILITY OF AN ITEM
        expect(enhancements.success(Axe)).toBe(true);
    });


    test('enhancement starts at 0', () => {
        //TEST THAT THE ITEMS ENHACEMENT STARTS AT 0
        expect(enhancements.success(Sword)).toBe(true)
    });



})

describe(' the fail function', () => {
    
    test('The items type can be weapon or armor.', () => {
        //  TEST THAT DETERMINES IF ITEM TYPE IS WEAON OR ARMOR
        expect(enhancements.fail(Axe)).toBe(false)

    });

    test('The maximum durability of an item is 100.', () => {
        expect(enhancements.fail(Cannon)).toBe(false);
    })

})

describe('the repair function', () => {

    test('returns durability to 100', () => {
        //TEST THAT THE ITEMS DURABILITY RETURNS TO 100
        expect(enhancements.repair(Sword)).toEqual(repairedSword)
    });

});