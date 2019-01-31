const { success, fail, repair } = require('./enhancer');

const regex = /\++[1-15]|\b(\w*PRI\w*)\b|\b(\w*DUO\w*)\b|\b(\w*TRI\w*)\b|\b(\w*TET\w*)\b|\b(\w*PEN\w*)\b/;

//Arrange - Mock Items
const sword = {
    name: 'Broadsword',
    type: 'weapon',
    durability: 100,
    enhancement: '+0',
    enhancementNumber: 0
};

const shield = {
    name: 'Shield',
    type: 'armor',
    durability: 100,
    enhancement: '+0',
    enhancementNumber: 0
};

const swordDamaged = {
    name: 'Broadsword',
    type: 'weapon',
    durability: 50,
    enhancement: '+0',
    enhancementNumber: 0
};

const shieldDamaged = {
    name: 'Shield',
    type: 'armor',
    durability: 70,
    enhancement: '+0',
    enhancementNumber: 0
};

//Act
    //Success function
    const swordEnhanced = success(sword);
    const shieldEnhanced = success(shield);
    const swordOne = success(sword);
    const swordTwo = success(swordOne);
    const swordThree = success(swordTwo);
    const swordFour = success(swordThree);
    const swordFive = success(swordFour);
    const swordSix = success(swordFive);
    const swordSeven = success(swordSix);
    const swordEight = success(swordSeven);
    const swordNine = success(swordEight);
    const swordTen = success(swordNine);
    const swordEleven = success(swordTen);
    const swordTwelve = success(swordEleven);
    const swordThirteen = success(swordTwelve);
    const swordFourteen = success(swordThirteen);
    const swordFifteen = success(swordFourteen);
    const swordPRI = success(swordFifteen);
    const swordDUO = success(swordPRI);
    const swordTRI = success(swordDUO);
    const swordTET = success(swordTRI);
    const swordPEN = success(swordTET);
    const swordMAX = success(swordPEN);

    //Fail function

    //Repair function -- a `repair(item)` method that accepts an `item` object and returns a new `item` with the durability restored to 100.
    const swordRepaired = repair(swordDamaged);
    const shieldRepaired = repair(shieldDamaged);

 



//Assert
describe('success function', () => {
    test('enhancement level not 0', () => {
        expect(swordEnhanced.enhacement).not.toBe(0);
        expect(shieldEnhanced.enhacement).not.toBe(0);
    });

    test('enhancement level is a string containing + and value or display value', () => {
        expect(swordEnhanced.enhancement).toMatch(regex);
        expect(shieldEnhanced.enhancement).toMatch(regex);
    });

    test('ensure correct enhancement incrementing', () => {
        expect(swordOne.enhancement).toBe('+1');
        expect(swordTwo.enhancement).toBe('+2');
        expect(swordThree.enhancement).toBe('+3');
        expect(swordFour.enhancement).toBe('+4');
        expect(swordFive.enhancement).toBe('+5');
        expect(swordSix.enhancement).toBe('+6');
        expect(swordSeven.enhancement).toBe('+7');
        expect(swordEight.enhancement).toBe('+8');
        expect(swordNine.enhancement).toBe('+9');
        expect(swordTen.enhancement).toBe('+10');
        expect(swordEleven.enhancement).toBe('+11');
        expect(swordTwelve.enhancement).toBe('+12');
        expect(swordThirteen.enhancement).toBe('+13');
        expect(swordFourteen.enhancement).toBe('+14');
        expect(swordFifteen.enhancement).toBe('+15');
        expect(swordPRI.enhancement).toBe('PRI');
        expect(swordDUO.enhancement).toBe('DUO');
        expect(swordTRI.enhancement).toBe('TRI');
        expect(swordTET.enhancement).toBe('TET');
        expect(swordPEN.enhancement).toBe('PEN');
    });

    test('ensure PEN is max enhancement', () => {
        expect(swordMAX.enhacement).toBe(swordPEN.enhacement);
    });

    test('name to increment correctly', () => {
        expect(swordOne.name).toBe('[+1] Broadsword');
        expect(swordPRI.name).toBe('[PRI] Broadsword');
        expect(swordMAX.name).toBe('[PEN] Broadsword');
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
        expect(swordRepaired.enhancementNumber).toBe(swordDamaged.enhancementNumber);
        expect(shieldRepaired.enhancementNumber).toBe(shieldDamaged.enhancementNumber);

    })
})


//- Enhacing an armor up to 5 cannot fail.
//- Enhacing a weapon up to 7 cannot fail.
// - when an item is enhanced, the `name` should be modified to include the enhancement level between square brackets before the item's `name`. Example: the new name of a "Elven Sword" enhanced to 7 would be _"[+7] Elven Sword"_, at DUO would be _"[DUO] Elven Sword"_.

// - The name is updated to reflect the new enhancement level.