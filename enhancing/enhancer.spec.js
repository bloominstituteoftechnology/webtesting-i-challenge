const enhancer = require('./enhancer.js');

it('works', () =>{
    expect(1).not.toBe(2)
})

describe('item class', () =>{
    let item ={}
    beforeEach(() =>{
        item = {
            name: 'Sword',
            enhancement: 21,
            durability: 50
        }
    })

    it('exists', () =>{
        expect(enhancer).toBeDefined()
    })

    it('item has a name', () =>{
        expect(item).toHaveProperty('name', 'Sword')
    })

    it('item has an enhancement', () =>{
        expect(item).toHaveProperty('enhancement', 21)
    })

    it('item has durability', () =>{
        expect(item).toHaveProperty('durability', 50)
    })

    it('repairs/set durability to 100', () =>{
        enhancer.repair(item)
        expect(item.durability).toBe(100)
    })

    it('when enhancement succeeds', () =>{
        enhancer.success(item)
        expect(item.enhancement).toBe(22)
    })

    it('when enhancement fails', () =>{
        enhancer.fail(item)
        expect(item.enhancement).toBe(20)
    })
})