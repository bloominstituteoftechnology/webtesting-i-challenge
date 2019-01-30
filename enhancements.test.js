const enhancements = require('./enhancements');
const { Sword } = require('./items');
const { repairedSword } = require('./items')


describe('the repair function', () => {

    test('returns durability to 100', () => {
        //TEST THAT THE ITEMS DURABILITY RETURNS TO 100
        expect(enhancements.repair(Sword)).toEqual(repairedSword)
    });

});

test('enhancement starts at 0', () => {
    //TEST THAT THE ITEMS ENHACEMENT STARTS AT 0
        expect(enhancements.success(Sword)).toBe(true)
    })