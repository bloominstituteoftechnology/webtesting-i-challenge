const { success, fail, repair } = require('./enhancer');

const regex = '\++[1-15]|\b(\w*PRI\w*)\b|\b(\w*DUO\w*)\b|\b(\w*TRI\w*)\b|\b(\w*TET\w*)\b|\b(\w*PEN\w*)\b';

//Arrange - Mock Items
const sword = {
    name: 'Broadsword',
    type: 'weapon',
    durability: 100,
    enhancement: 0,
};

const shield = {
    name: 'Shield',
    type: 'armor',
    durability: 100,
    enhancement: 0,
};

const swordDamaged = {
    name: 'Broadsword',
    type: 'weapon',
    durability: 50,
    enhancement: 0,
};

const shieldDamaged = {
    name: 'Shield',
    type: 'armor',
    durability: 70,
    enhancement: 0,
};

//Act
    //Success function

    //Fail function

    //Repair function -- a `repair(item)` method that accepts an `item` object and returns a new `item` with the durability restored to 100.
    const swordRepaired = repair(swordDamaged);
    const shieldRepaired = repair(shieldDamaged);
    const swordEnchanced = success(sword);
    const shieldEnhanced = success(shield);
    const swordOne = success(sword);
    const swordTwo = success(swordOne);
    const swordThree = success(swordTwo);
    //complete



//Assert
describe('success function', () => {
    test('enhancement level not 0', () => {
        expect(swordEnchanced.enhacement).not.toBe(0);
        expect(shieldEnhanced.enhacement).not.toBe(0);
    });

    test('enhancement level is a string containing + and value or display value', () => {
        expect(swordEnchanced).stringMatching(regex);
        expect(shieldEnhanced).stringMatching(regex);
    });

    test('ensure correct enhancement incrementing', () => {
        expect(swordOne.enhacement).toBe('+1');
        //complete
    });

    test('ensure PEN is max enhancement', () => {
        expect(swordMax.enhacement).toBe(swordPEN.enhacement);
    })

});

describe('fail function', () => {

});

describe('repair function', () => {
    test('durability to be 100', () => {
        expect(swordRepaired.durability).toBe(100);
        expect(shieldRepaired.durability).toBe(100);
    });

    test('does not modify other object properties', () => {
        expect(swordRepaired.name).toBe(swordDamaged.name);
        expect(shieldRepaired.name).toBe(shieldDamaged.name);
        expect(swordRepaired.type).toBe(swordDamaged.type);
        expect(shieldRepaired.type).toBe(shieldDamaged.type);
        expect(swordRepaired.enhancement).toBe(swordDamaged.enhancement);
        expect(shieldRepaired.enhancement).toBe(shieldDamaged.enhancement);

    })
})


- Enhacing an armor up to 5 cannot fail.
- Enhacing a weapon up to 7 cannot fail.
- when an item is enhanced, the `name` should be modified to include the enhancement level between square brackets before the item's `name`. Example: the new name of a "Elven Sword" enhanced to 7 would be _"[+7] Elven Sword"_, at DUO would be _"[DUO] Elven Sword"_.

- The name is updated to reflect the new enhancement level.