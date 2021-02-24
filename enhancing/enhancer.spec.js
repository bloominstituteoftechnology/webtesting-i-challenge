const enhancer = require('./enhancer.js');

it('works', () =>{
    expect(1).not.toBe(2)
})

describe('item class', () =>{
    let item ={}
    beforeEach(() =>{
        item = {
            name: 'Sword',
            enchantment: 5,
            durability: 50
        }
    })

    it('exists', () =>{
        expect(enhancer).toBeDefined()
    })

    it('item has a name', () =>{
        expect(item).toHaveProperty('name', 'Sword')
    })

    it('item has an enchantment', () =>{
        expect(item).toHaveProperty('enchantment', 5)
    })

    it('item has durability', () =>{
        expect(item).toHaveProperty('durability', 50)
    })
})