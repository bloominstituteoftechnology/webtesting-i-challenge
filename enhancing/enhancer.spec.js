const enhancer = require('./enhancer.js');
// test away!
describe("runs enhancement tests", () => {
    it("repairs", () => {
        expect(enhancer.repair({
            name: "Sword",
            durability: 2,
            enhancement: 10,
        })).toEqual({
            name: "Sword",
            durability: 100,
            enhancement: 10,
        })
    })

    it("adds enhancement level on success", () => {
        expect(enhancer.success({
            name: "Sword",
            durability: 50,
            enhancement: 5,
        })).toEqual({
            name: "Sword",
            durability: 50,
            enhancement: 6,
        })
    })
    it("subtracts durability on failure at less than 15", () => {
        expect(enhancer.fail({
            name: "Sword",
            durability: 75,
            enhancement: 10,
        })).toEqual({
            name: "Sword",
            durability: 70,
            enhancement: 10,
        })
    })
    it("Subtracts durability on failure at +16", () => {
        expect(enhancer.fail({
            name: "Sword",
            durability: 75,
            enhancement: 16,
        })).toEqual({
            name: "Sword",
            durability: 65,
            enhancement: 16,
        })
    })
    it("Subtracts enhancement level  and durability on failure", () => {
        expect(enhancer.fail({
            name: "Sword",
            durability: 75,
            enhancement: 17,
        })).toEqual({
            name: "Sword",
            durability: 65,
            enhancement: 16,
        })
    })
    it("enhancement name not effected at +0", () => {
        expect(enhancer.get({
            name: "Sword",
            durability: 75,
            enhancement: 0,
        })).toEqual({
            name: "Sword",
            durability: 75,
            enhancement: 0
        })
    })
    it("Enhancement name changes at +7", () => {
        expect(enhancer.get({
            name: "Sword",
            durability: 75,
            enhancement: 17,
        })).toEqual({
            name:"[+17] Sword",
            durability: 75,
            enhancement: 17,
        })
    })
}) 
