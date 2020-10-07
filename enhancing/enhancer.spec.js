const {  success,fail,repair,get,} = require('./enhancer.js');
// test away!
const swordGreat = {
    name:'sword',
    dur:99,
    enh: 19
}
const swordMid = {
    name:'sword',
    dur:50,
    enh: 10
}
const swordPoor = {
    name:'sword',
    dur: 20,
    enh: 2
}


describe('repair function tester', () => {
    it('should return an item with 100 dur', () => {
        expect(repair(swordGreat)).toStrictEqual({name:'sword',dur:100,enh: 19})
        expect(repair(swordMid)).toStrictEqual({name:'sword',dur:100,enh: 10})
        expect(repair(swordPoor)).toStrictEqual({name:'sword',dur:100,enh: 2})
    })
})

describe('fail function tester', () => {
    it('should return an item', () => {
        expect(fail(swordGreat)).toStrictEqual({name: "sword", dur: 89, enh: 18})
        expect(fail(swordMid)).toStrictEqual({name: "sword", dur: 45, enh: 10})
        expect(fail(swordPoor)).toStrictEqual({name: "sword", dur: 15, enh: 2})
    })
})

describe('success function tester', () => {
    it('should return an item', () => {
        expect(success(swordGreat)).toStrictEqual({name: "sword", dur: 99, enh: 20})
        expect(success(swordMid)).toStrictEqual({name: "sword", dur: 50, enh: 11})
        expect(success(swordPoor)).toStrictEqual({name: "sword", dur: 20, enh: 3})
    })
})

// describe('get function tester', () => {
//     it('should return an item', () => {
//         expect({name: "sword", dur: 14, enh: 4}).toStrictEqual({name: "sword", dur: 14, enh: 4})
//     })

// })