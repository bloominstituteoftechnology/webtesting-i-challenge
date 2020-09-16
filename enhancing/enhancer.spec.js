const { repair, fail, success, get } = require('./enhancer.js');

describe('Repair', function() {
  it('should restore durability to 100', function() {
    const item = { name: 'pontiac', durability: 50,  enhancement: 20 }
    expect(repair(item)).toEqual(expect.objectContaining({ durability: 100 }))
  })
});