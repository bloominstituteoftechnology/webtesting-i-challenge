const enhacer = require('./enhancer');

//Arrange - Mock Items
const sword = {
    name: 'Broadsword',
    type: 'weapon', // weapon || armor
    durability: 100, //starts at 100, cannot be < 20 if enhancement is 0-14, cannot be < 0 if enhancement is 15-TET
    enhancement: 0 //starts at 0, range 0-PEN
};

const shield = {
    name: 'Shield',
    type: 'armor',
    durability: 100,
    enhancement: 0
};

//Act

//Assert
test('success function testing', () => {

});

test('fail function testing', () => {

});

test('repair function testing', () => {
    
})