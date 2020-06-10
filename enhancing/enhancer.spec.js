const {
    succeed,
    fail,
    repair,
    get,
  } = require('./enhancer.js');
// test away!


describe("enhancer", () => {
    describe("repair", () => {
        it("should restore durability to 100", () => {
            let item = {
                name: "Buster sword",
                durability: 27,
                enhancement: 10
            }
            const repairedItem = repair(item)

            expect(repairedItem.durability).toBe(100)
        })
    })

    describe("succeed", () => {
        it("should increase enhancement by 1", () => {
            let enhancementStat = 10
            let item = {
                name: "Buster sword",
                durability: 27,
                enhancement: enhancementStat
            }
            const enhancedItem = succeed(item)
            expect(enhancedItem.enhancement).toBe(enhancementStat + 1)
        })
        it("should have enhancement stay at 20", () => {
            let item = {
                name: "Buster sword",
                durability: 27,
                enhancement: 20
            }
            const enhancedItem = succeed(item)
            expect(enhancedItem.enhancement).toBe(20)
        })
    })
    describe("fail", () => {
        it("should decrease durability by 5", () => {
            let durabilityStat = 27
            let item = {
                name: "Buster sword",
                durability: durabilityStat,
                enhancement: 14
            }
            const failedItem = fail(item)
            expect(failedItem.durability).toBe(durabilityStat - 5)
        })
        it("should decrease durability by 10 and decrease enchancement by 1", () => {
            let durabilityStat = 27
            let enchancementStat = 17
            let item = {
                name: "Buster sword",
                durability: durabilityStat,
                enhancement: enchancementStat
            }
            const failedItem = fail(item)
            expect(failedItem.durability).toBe(durabilityStat - 10)
            expect(failedItem.enhancement).toBe(enchancementStat - 1)
        })
    })
})