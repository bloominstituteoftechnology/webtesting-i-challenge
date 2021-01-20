const enhancer = require('./enhancer.js');
// test away!
test ("success", () => {
    const data = {enhancement: 1}
    const res = enhancer.success(data)
    expect(res).toEqual({enhancement: 2})
    expect(data).toEqual({enhancement: 1})
})

test ("repair", () => {
    const data = {durability: 100}
    const res = enhancer.repair(data)
    expect(res).toEqual({durability: 100})
    expect(data).toEqual(data)
})

test ("fail", () => {
    const opt1 = {durability: -5}
    const opt2 = {durability: -10}
    const opt3 = {enhancement: -1}
    const res = {opt1, opt2, opt3}
    expect(res).toEqual(res)

})