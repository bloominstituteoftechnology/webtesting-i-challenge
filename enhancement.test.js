//file for writing tests for enhancement functions

const enhancements = require('./enhancements');
const {sword, upgraded_sword, nunchucks, gloves, goggles, shin_guards} = require('./items');

describe('enhancement success function ', ()=>{
    test('increase in enhancement by 1 and name updated', () =>{
        expect(enhancements.success(sword)).toEqual(upgraded_sword)
    });
  
    test('tests that max enhancement stops at PEN', () =>{
        expect(enhancements.success(nunchucks.enhancement)).toEqual('PEN')
    });
  
});

describe('enhancement failure function', () =>{
    test('')
});

describe('repair function tests', () =>{
    test('durability restored to 100' ,()=>{
        expect(enhancements.repair(gloves.durability)).toEqual(100)
    });
    test('throws error if durability is not from 0-100', () =>{
        expect(() =>{
            enhancements.repair(goggles.durability).toThrow();
        })
    })
})



test('checks durability level of items with enhancement levels 0-14', () =>{
    expect(enhancements.success(gloves.durabilitty)).toEqual(20)
});
test('Weapon enhancement below level 7 cannot fail', () =>{
    expect(enhancements.success(sword)).toEqual(upgraded_sword)
})
