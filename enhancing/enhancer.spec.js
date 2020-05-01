const {succeed, fail, repair, get}= require('./enhancer.js');
// test away!
const sword = {
    name: 'rapier',
    durability: 70,
    enhancement: 15
}
const shield = {
    name: 'smarg',
    durability: 50,
    enhancement: 5
}
const cloak =  {
    name: 'cloaken',
    durability: 89,
    enhancement: 20
}

describe('repair()', () => {
    test('durability restored to 100', () => {
        expect(repair(cloak).durability).toBe(100);
    })
})

describe('succeed()', () => {
    test('enhancement level up by 1', () => {
        expect(succeed(sword).enhancement).toBe(16)
    })
})
describe('fail()', () => {
    test('decrease durability if enhancement is < 15', () => {
        expect(fail(shield).durability).toBe(45);
       })
      
})
describe('fail()', () => {
    test('decrease durability if enhancement is > 15', () => {
        expect(fail(cloak).durability).toEqual(79)
    })
})
describe('fail()', () => {
    test('enhancement level decrease by 1 if enhancement level is > 16', () => {
        expect(fail(shield).enhancement).toBe(5)
    })
})
//toEqual