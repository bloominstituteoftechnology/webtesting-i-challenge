const { success, fail, repair, get } = require('./enhancer.js');
// test away!

const defaultItem = { name: "Arthur", durability: 100, enhancement: 5 };

describe("testing enhancer.js", () => {
    describe("repair function: item can repair itself", () => {
        it("should return an item with the durability repaired to 100", () => {
            const damagedItem = { name: "Arthur", durability: 20, enhancement: 5 };
            expect(repair(damagedItem)).toEqual(defaultItem);
        })
    })
    describe("enhancement has risen", () => {
        it("enhancement is successful", () => {
            const enhancedItem = { name: "Arthur", durability: 100, enhancement: 6 };
            expect(success(defaultItem)).toEqual(enhancedItem)
        })
    })
    describe("enhancement has failed to rise", () => {
        const failedItem = { name: "Arthur", durability: 0, enhancement: 0 }
        it("durability decresed by 5", () => {
            expect(fail(failedItem)).toEqual({"durability": -5, "enhancement": 0, "name": "Arthur"})
        })
        it("durability decresed by 10", () => {
            expect(fail(failedItem)).toEqual({"durability": -10, "enhancement": 0, "name": "Arthur"})
        }) 
        it("enhacement decresed by 1", () => {
            expect(fail(failedItem)).toEqual({"durability": -15, "enhancement": 0, "name": "Arthur"})
        })
    })
})
