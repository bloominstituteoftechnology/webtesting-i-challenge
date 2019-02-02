const itemHandler = require('./itemHandler.js');



const robe = {
    name: 'fantastic robe',
    type: 'armor',
    durability: 90,
    enhancement:11,
    display: '11 fantastic robe'
}

const robe2 = {
    name: 'fantastic robe',
    type: 'armor',
    durability: 90,
    enhancement:11,
    display: '11 fantastic robe'
}

const robe3 = {
    name: 'fantastic robe',
    type: 'armor',
    durability: 90,
    enhancement:11,
    display: '11 fantastic robe'
}

const sword = {
    name: 'elven sword',
    type: 'weapon',
    durability: 95,
    enhancement: 17,
    display: 'DUO elven sword'
}

const sword2 = {
    name: 'elven sword',
    type: 'weapon',
    durability: 95,
    enhancement: 17,
    display: 'DUO elven sword'
}

const sword3 = {
    name: 'elven sword',
    type: 'weapon',
    durability: 95,
    enhancement: 17,
    display: 'DUO elven sword'
}

let result1 = itemHandler.fail(robe)
let result2 = itemHandler.fail(sword)
let result3 = itemHandler.success(robe2)
let result4 = itemHandler.success(sword2)
let result5 = itemHandler.repair(robe3)
let result6 = itemHandler.repair(sword3)

describe('the fail function', () =>{
    test('durability', ()=>{
        expect(result1.durability).toEqual(85);
        expect(result2.durability).toEqual(85);
    })

    test('enhancement level', () =>{
        expect(result1.enhancement).toBe(11);
        expect(result2.enhancement).toEqual(16);
    })

    test('display updated correctly', () =>{
        expect(result1.display).toBe('[11] fantastic robe');
        expect(result2.display).toBe('[PRI] elven sword');
    })

});



describe('the success function', () =>{
    test('durability', ()=>{
        expect(result3.durability).toBeLessThanOrEqual(100)
        expect(result4.durability).toBeLessThanOrEqual(100);
    })

    test('enhancement level increases', () =>{
        expect(result3.enhancement).toBe(12);
        expect(result4.enhancement).toBe(18);
    })

    test('display updated correctly', () =>{
        expect(result3.display).toBe('[12] fantastic robe');
        expect(result4.display).toBe('[TRI] elven sword');
    })

});




describe('the repair function', () =>{
    test('durability', ()=>{
        expect(result5.durability).toEqual(100);
        expect(result6.durability).toEqual(100);
    })
});

