const itemHandler = require('./itemHandler.js');

let robe = {
    name: 'fantastic robe',
    type: 'armor',
    durability: 90,
    enhancement:11,
    display: '11 fantastic robe'
}

let bigsword = {
    name: 'elven sword',
    type: 'weapon',
    durability: 95,
    enhancement: 17,
    display: 'DUO elven sword'
}

let result1 = itemHandler.fail(robe)
let result2 = itemHandler.fail(bigsword)


describe('the fail function', () =>{
    test('durability', ()=>{
        expect(result1.durability).toEqual(85);
        expect(result2.durability).toEqual(85);
    })

    test('enhancement level', () =>{
        expect(result1.enhancement).toBe(11);
        expect(result2.enhancement).toBe('DUO');
    })

    test('display updated correctly', () =>{
        expect(result1.display).toBe('11 fantastic robe');
        expect(result2.display).toBe('PRI elven sword');
    })
    test('cannot be enhanced because durability too low', () =>{
        expect(result1.enhancement).toBe(11);
        expect(result2.enhancement).toBe('DUO');
    })
});

describe('the success function', () =>{
    test('durability', ()=>{
        expect(result1.durability).toEqual(85);
        expect(result2.durability).toEqual(85);
    })

    test('enhancement level increases', () =>{
        expect(result1.enhancement).toBe(12);
        expect(result2.enhancement).toBe('TRI');
    })

    test('display updated correctly', () =>{
        expect(result1.display).toBe('12 fantastic robe');
        expect(result2.display).toBe('TRI elven sword');
    })
    test('cannot be enhanced because durability too low', () =>{
        expect(result1.enhancement).toBe(11);
        expect(result2.enhancement).toBe('DUO');
    })
});


