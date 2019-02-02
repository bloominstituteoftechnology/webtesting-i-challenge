//file for writing tests for enhancement functions

const enhancements = require('./enhancements');
const {sword, nunchucks, gloves, goggles, shin_guards} = require('./items');



describe('enhancement success function ', ()=>{
    
    
    test('increase in enhancement by 1 and name updated', () =>{
        expect(enhancements.success(sword)).toBe(sword);
    });
  
    test('tests that max enhancement stops at PEN', () =>{
        expect(enhancements.success(nunchucks.enhancement)).toEqual(20)
    });
    test('Weapon enhancement below level 7 cannot fail', () =>{
        expect(enhancements.success(sword.newName)).toEqual('+[7] sword')
    })
    
  
});

const new_shin_guards = {
    name: 'shin_guards',
    newName: '',
    type : 'armor',
    durability: 21,
    enhancement: 10
}

describe('enhancement failure function', () =>{
    test('check to see if item durability decreases by 5 if enhancement is 0 -14', () =>{
        expect(enhancements.fail(shin_guards)).toEqual(new_shin_guards)
    });

});


const newGloves = {
    name: 'gloves',
    newName: '',
    type: 'armor',
    durability: 100,
    enhancement: 10
}


describe('repair function tests', () =>{
    test('durability restored to 100' ,()=>{
        expect(enhancements.repair(gloves)).toEqual(newGloves)
    });
    test('throws error if durability is not from 0-100', () =>{
        expect(() =>{
            enhancements.repair(goggles.durability).toThrow();
        })
    })
})





//The item's type can be weapon or armor.