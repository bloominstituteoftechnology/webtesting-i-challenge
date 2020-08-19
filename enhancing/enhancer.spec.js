const enhancer = require('./enhancer.js');
const { fail } = require('./enhancer.js');
// test away!
const item1 = {name: 'fidget spinner', durability: 90, enhancement: 0}
const item2 = {name: 'Gameboy', durability: 50, enhancement: 15}

describe('item module', () => {
    describe('repair function', () => {
        it('can repair the durability of item to 100', () => {
            const expectedOutput = 100
            const repairItem = enhancer.repair(item1)
            const actualOutput = repairItem.durability

            expect(actualOutput).toBe(expectedOutput)
            // This is the most relevant test for this function
            expect(item1.durability).toBeLessThanOrEqual(actualOutput)
        })
    })
    describe('fail function', () => {
        it('can modify an item according to the rules defined by client when it fails', () => {
            const failItem = enhancer.fail(item2)

            const actualDurabilityOutput = failItem.durability
            const expectedDurability = failItem.durability = 40
            expect(actualDurabilityOutput).toBe(expectedDurability)
            expect(failItem).toBeDefined()
            // This is the most relevant test for this function
            expect(failItem.durability).toBeLessThan(item2.durability)
        })
    })
    describe('success function', () => {
        it('will modify item correctly if it passes', () => {
            const successItem = enhancer.success(item2)

            const expectedEnhancement = successItem.enhancement = 16
            const actualEnhancementOutput = successItem.enhancement
            expect(expectedEnhancement).toBe(actualEnhancementOutput)
            expect(successItem).toBeDefined()
            // This is the most relevant test for this function
            expect(successItem.enhancement).toBeGreaterThan(item2.enhancement)
        })
    })
    describe('get function', () => {
        const enhancedName = enhancer.get(item2)
        console.log(enhancedName.name)
        expect(enhancedName).toBeDefined()
        expect(enhancedName).toBeDefined()

        // This is the most relevant test for this function
        expect(enhancedName.name).toContain(item2.enhancement)
  
    })
})