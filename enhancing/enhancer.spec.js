const enhancer = require('./enhancer.js');
// test away!
it('works', () => {
    expect(1).toBe(1)
})

it('exists', () => {
    expect(enhancer).toBeDefined()
})

describe('enhancer success', () => {
    let item
    beforeEach(() => {
      item = { name: "sword", enhancement: 0, durability: 0 }
    })

    test('item', () => {
        expect(item.durability).toBe(0)
    })

    test('enhancer has a success function', () => {
        expect(enhancer.success).toBeDefined()
    })
    test('success function returns items enhancement', () => {
        const expected = 1
        const actual = enhancer.success(item)
        expect(actual).toBe(expected)
    })
    test('success function adds 1 enhancement to item', () => {
        expect(item.enhancement).toBe(0)
        enhancer.success(item)
        expect(item.enhancement).toBe(1)
        enhancer.success(item)
        expect(item.enhancement).toBe(2)
    })
})

describe('enhancer fail', () => {
    let item
    beforeEach(() => {
      item = { name: "sword", enhancement: 0, durability: 100 }
    })

    it('fails exists', () => {
        expect(enhancer.fail).toBeDefined()
    })
    it('subtracts 5 from durability when enhancement less than 15', () => {
        expect(item.enhancement).toBe(0)
        enhancer.fail(item)
        expect(item.durability).toBe(85)
    })
})
