const enhancer = require('./enhancer.js');


describe("sanity", () => {
    it('works', () => {
        expect(2 + 2).toBe(4)
    })
})
describe("enhancer", () => {
    let sword
    beforeEach(() => {
        sword = new enhancer.theItem('giant sword', 50, 16)
    })
    it('is there', () => {
        expect(sword).toBeDefined()
    })
    it("has repair method", () => {
        expect(sword.repair).toBeDefined(),
            expect(sword.repair).toBeInstanceOf(Function)
    })
    it("repair works ", () => {
        expect(sword.repair(sword)).toStrictEqual({ ...sword, durability: 100 })
    })
    it("has sucess method", () => {
        expect(sword.success).toBeDefined(),
            expect(sword.success).toBeInstanceOf(Function)
    })
    it('success works', () => {
        expect(sword.success(sword)).toStrictEqual({ ...sword, enchantment: 17 })
    })
    it("has fail method", () => {
        expect(sword.fail).toBeDefined()
        expect(sword.fail).toBeInstanceOf(Function)
    })
    it("fail works", () => {

        expect(sword.fail(sword)).toStrictEqual({ ...sword, durability: 40, enchantment: 15 })
    })
})

