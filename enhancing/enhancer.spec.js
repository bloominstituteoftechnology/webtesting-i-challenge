const enhancer = require('./enhancer.js');
// test away!

const item = {
    name: "name",
    durability: 20,
    enhancement: 17
}

test("Repair Item Durability", () => {
    expect(enhancer.repair(item)).toStrictEqual({ ...item, durability: 100 })
})

test("Successful Enhancement", () => {
    if (item.enhancement >= 20) {
        expect(enhancer.success(item)).toStrictEqual(item)
    } else {
        expect(enhancer.success(item)).toStrictEqual({ ...item, enhancement: 18})
    }
})

test("Failed Enhancement", () => {
    if (item.enhancement < 15) {
        expect(enhancer.fail(item)).toStrictEqual({ ...item, durability: 15 })
    } else if (item.enhancement >= 15 ) {
        expect(enhancer.fail(item)).toStrictEqual({ ...item, durability: 10 })
    } else if (item.enhancement > 16) {
        expect(enhancer.fail(item)).toStrictEqual({ ...item, durability: 10, enhancement: 16 })       
    }
})