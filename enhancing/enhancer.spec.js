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
}
// describe('test methods', () => {
//     describe('succeed()', () => {
//         test('items enhancement increase by 1', (sword) => {
//             expect(succeed(sword.enhancement + 1)).toBe(16)               
//         })
//     })
   
// })
)

//toEqual