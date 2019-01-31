const enhancer = require('../enhancer');

// Arrange
const item1 = {
  unenhancedName: 'Longsword',
  name: '[TRI] Longsword',
  type: 'weapon',
  durability: 100,
  enhancement: 18
}

const itemSuccess1 = {
  unenhancedName: 'Longsword',
  name: '[TET] Longsword',
  type: 'weapon',
  durability: 100,
  enhancement: 19
}

const item2 = {
  unenhancedName: 'Dagger',
  name: 'Dagger',
  type: 'weapon',
  durability: 20,
  enhancement: 0
}

const itemSuccess2 = {
  unenhancedName: 'Dagger',
  name: '+1 Dagger',
  type: 'weapon',
  durability: 20,
  enhancement: 1
}

const item3 = {
  unenhancedName: 'Leather Armor',
  name: '[PEN] Leather Armor',
  type: 'armor',
  durability: 40,
  enhancement: 20
}

describe('The Enhancer Module', () => {

  describe('The Success Method', () => {

    test('Should increase the enhancement of the item by 1', () => {
      const enhancedItem = enhancer.success(item1);
      expect(enhancedItem).toEqual(itemSuccess1);
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