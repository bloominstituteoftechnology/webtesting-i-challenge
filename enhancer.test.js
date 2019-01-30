const { success, fail, repair } = require('./enhancer');

//Arrange - Mock Items
const sword = {
    name: 'Broadsword',
    type: 'weapon',
    durability: 100,
    enhancement: 0
};

const shield = {
    name: 'Shield',
    type: 'armor',
    durability: 100,
    enhancement: 0
};

const swordDamaged = {
    name: 'Broadsword',
    type: 'weapon',
    durability: 50,
    enhancement: 0
};

const shieldDamaged = {
    name: 'Shield',
    type: 'armor',
    durability: 70,
    enhancement: 0
};

//Act
    //Success function

    //Fail function

    //Repair function -- a `repair(item)` method that accepts an `item` object and returns a new `item` with the durability restored to 100.
    const swordRepaired = repair(swordDamaged);
    const shieldRepaired = repair(shieldDamaged);


//Assert
describe('success function', () => {

});

describe('fail function', () => {

});

describe('repair function', () => {
    test('durability to be 100', () => {
        expect(swordRepaired.durability).toBe(100);
        expect(shieldRepaired.durability).toBe(100);
    });
})
