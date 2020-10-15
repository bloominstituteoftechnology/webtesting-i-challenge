const { success, fail, repair, get } = require('./enhancer.js');
// test away!

const item = { name: "Arthur", durability: 100, enhancement: 5 };

describe("testing enhancer.js", () => {
    describe("repair function: item can repair itself", () => {
        it("should return an item with the durability repaired to 100", () => {
            const damagedItem = { name: "Arthur", durability: 20, enhancement: 5 };
            expect(repair(damagedItem)).toEqual(item);
        })
    })
})
