const object = require('./armor.js')

const successObject = {
  name: 'Sharpie',
  type: 'weapon',
  durability: 85,
  enhancement: 18
}

const armor = {
  name: 'Shield',
  type: 'armor',
  durability: 50,
  enhancemnent: 17
}

test('checks values in success', () => {
  expect(object.success([successObject.name, successObject.durability, successObject.enhancement, successObject.type])).toBeDefined()
})

describe('fail cases', () => {
  test('tests in failures for weapon', () => {
    
  });

  test('test in failures for armor', () => {
    
  });
})
