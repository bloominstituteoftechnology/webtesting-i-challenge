let item = {
    name: 'longsword',
    type: 'weapon',
    durability: 100,
    enhancement: 0
}

const newItem = {
    durability: 100,
    enhancement: 0
}

test('item req', () => {
    expect({ a: 1 }).toHaveProperty('a', 1)
    expect(a).toEqual('name')
    //since the value of name can be anything, I don't think it needs testing.
    expect({ b: 2 }).toHaveProperty('b', 2)
    expect(b).toEqual('type')
    expect(2).toEqual([expect.stringContaining('weapon'),
        expect.stringContaining('armor')])
    expect({ c: 3 }).toHaveProperty('c', 3)
    expect(c).toEqual('durability')
    expect(3).toBeLessThanOrEqual(100)
    expect({ d: 4 }).toHaveProperty('d', 4)
    expect(d).toEqual('enhancement')
    expect(4).toBeGreaterThanOrEqual(0)
    expect(4).toBeLessThanOrEqual(15)
    expect(4).toMatch('PRI')
    expect(4).toMatch('DUO')
    expect(4).toMatch('TRI')
    expect(4).toMatch('TET')
    expect(4).toMatch('PEN')
})

//XItems have name, type, durability and enhancement. 
//XThe item's type can be weapon or armor.
//XThe maximum durability of an item is 100.
//XThe durability of an item starts at 100.
//?The enhancement level of an item starts at 0 and can reach a maximum of PEN.
//The durability of an item cannot be less than 20 when the item's enhancement level is between +0 and +14.
//The durability of an item cannot be less than 0 when the item's enhancement level is between +15 and TET.