const enhancer = require('./enhancer.js');
const { timeStamp } = require('console');
const { exportAllDeclaration } = require('@babel/types');
// test away!
const item = {
    name: 'test',
    durability: 10,
    enhancement: 15
}
test("repair function", () => {
    expect(enhancer.repair(item)).toStrictEqual({...item,durability:100})
})

test("success funtion", () => {
    expect(enhancer.success(item)).toStrictEqual({
        ...item,
        enhancement:item.enhancement == 20 ? 20 : item.enhancement + 1
    })
})

test("fail function", () => {
    expect(enhancer.fail(item)).toStrictEqual({
        ...item, 
        durability: item.enhancement < 15 ? item.durability-5 : item.durability-10,
        enhancement: item.enhancement > 16 ? item.enhancement-1 : item.enhancement  
    })
})