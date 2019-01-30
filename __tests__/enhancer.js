const enhancer = require('../enhancer');

// Arrange
const item1 = {
  name: '[TRI] Longsword',
  type: 'weapon',
  durability: 100,
  enhancement: 'TRI'
}

const item2 = {
  name: '[+0] Dagger',
  type: 'weapon',
  durability: 20,
  enhancement: 0
}

const item3 = {
  name: '[20] Leather Armor',
  type: 'armor',
  durability: 40,
  enhancement: 0
}

describe('The Enhancer Module', () => {

  describe('The Success Method', () => {

    test('', () => {

    })

  })

  describe('The Fail Method', () => {

    test('', () => {

    })

  })

  describe('The Repair Method', () => {

    const repairedItem = enhancer.repair(item1);

    test('Returns item with durability restored to 100', () => {
      expect(repairedItem.durability).toBe(100);
    })

  })

})