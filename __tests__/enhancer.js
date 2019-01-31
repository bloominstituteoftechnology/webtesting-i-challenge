const enhancer = require('../enhancer');

// Arrange
const weapon1 = {
  unenhancedName: 'Longsword',
  name: '[TRI] Longsword',
  type: 'weapon',
  durability: 100,
  enhancement: 18
}

const weaponSuccess1 = {
  unenhancedName: 'Longsword',
  name: '[TET] Longsword',
  type: 'weapon',
  durability: 100,
  enhancement: 19
}

const weapon2 = {
  unenhancedName: 'Dagger',
  name: 'Dagger',
  type: 'weapon',
  durability: 20,
  enhancement: 0
}

const weapon3 = {
  unenhancedName: 'Shortsword',
  name: 'Shortsword',
  type: 'weapon',
  durability: 50,
  enhancement: 0
}

const weaponSuccess3 = {
  unenhancedName: 'Shortsword',
  name: '[+1] Shortsword',
  type: 'weapon',
  durability: 50,
  enhancement: 1
}

const armor1 = {
  unenhancedName: 'Leather Armor',
  name: '[PEN] Leather Armor',
  type: 'armor',
  durability: 40,
  enhancement: 20
}

describe('The Enhancer Module', () => {

  describe('The Success Method', () => {

    test('Should increase the enhancement of the item by 1', () => {
      const enhancedItem = enhancer.success(weapon1);
      const enhancedItem3 = enhancer.success(weapon3);
      expect(enhancedItem).toEqual(weaponSuccess1);
      expect(enhancedItem3).toEqual(weaponSuccess3);
    })

    test('Throws error if durability is below 25 and item enhancement is less than or equal to 14', () => {
      expect(() => {
        enhancer.success(weapon2)
      }).toThrow();
    })

    test('Throws error if item enhancement is already 20', () => {
      expect(() => {
        enhancer.success(armor1)
      }).toThrow();
    })

  })

  describe('The Fail Method', () => {

    test('', () => {

    })

  })

  describe('The Repair Method', () => {

    const repairedItem = enhancer.repair(weapon1);

    test('Returns item with durability restored to 100', () => {
      expect(repairedItem.durability).toBe(100);
    })

  })

})