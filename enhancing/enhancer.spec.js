const { repair, success, fail } = require('./enhancer.js');




describe('test game actions', () => {
  
  test('should repair an item', () => {
    
    const damagedItem = {
      name: 'Legendary Sword',
      enhancement: 20,
      durability: 34
    }

    expect(repair(damagedItem)).toEqual({...damagedItem, durability: 100 })

  })

  test('success should add 1 to enhancement unless 20, then unchanged', () => {
    
    const lameWeapon = {
      name: 'boar killer',
      enhancement: 1,
      durability: 100
    }

    expect(success(lameWeapon)).toEqual({...lameWeapon, enhancement: 2})

    const awesomeWeapon = {
      name: 'dragon killer',
      enhancement: 20,
      durability: 100
    }

    expect(success(awesomeWeapon)).toEqual({ ...awesomeWeapon, enhancement: 20 })
  })
  
  test('fail should return durability - 5 if enhancement is < 15 ', () => {
    
    const weapon = {
      name: 'sword',
      enhancement: 10,
      durability: 45
    }

    expect(fail(weapon)).toEqual({...weapon, durability: 40})

  })

  test('fail should return durability - 10 if enhancement is 15 or 16 ', () => {
    
    const weapon = {
      name: 'knife',
      enhancement: 16,
      durability: 80
    }

    expect(fail(weapon)).toEqual({...weapon, durability: 70})

  });

  test('fail should return durability - 10 AND enhancement - 1 if enhancement is > 16 ', () => {
    
    const weapon = {
      name: 'gun',
      enhancement: 17,
      durability: 100
    }

    expect(fail(weapon)).toEqual({...weapon, enhancement: 16, durability: 90 })

  });
  
  
  
  
})
