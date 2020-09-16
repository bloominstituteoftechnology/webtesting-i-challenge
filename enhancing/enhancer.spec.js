const { repair, fail, success, get } = require('./enhancer.js');

describe('Repair', function() {
  it('items durability should be restored to 100', function() {
    const item = { name: 'Dagger of sorrow', durability: 50,  enhancement: 20 }
    expect(repair(item)).toEqual(expect.objectContaining({ durability: 100 }))
  })
});

describe('Success', function() {
  it('items enhancement should increase by 1', function() {
    const item = { name: 'Axe of destiny', durability: 100, enhancement: 15 }
    expect(success(item)).toEqual(expect.objectContaining({ enhancement: 16 }))
  })

  it('items enhancement has a max of 20', function() {
    const item = { name: 'Sword of truth', durability: 100, enhancement: 20 }
    expect(success(item)).toEqual(expect.objectContaining({ enhancement: 20 }))
  })
});

describe('Fail', function() {
  it('if enhancement < 15, durability decreases by 5', function() {
    const item = { name: 'Staff of revenge', durability: 100, enhancement: 12 }
    expect(fail(item)).toEqual(expect.objectContaining({ durability: 95 }))
  })

  it('if enhancement > 15, durability decreases by 10', function() {
    const item = { name: 'Sai of raphael', durability: 100, enhancement: 15 }
    expect(fail(item)).toEqual(expect.objectContaining({ durability: 90 }))
  })

  it('if enhancement > 16, enhancement decreases by 1', function() {
    const item = { name: 'Blade of the dragon', durability: 100, enhancement: 18 }
    expect(fail(item)).toEqual(expect.objectContaining({ enhancement: 17 }))
  })
});