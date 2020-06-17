const { 
     succeed,
     fail,
     repair,
     get
 } = require('./enhancer.js');
// test away!

const testerItem = {
     name: 'tester',
     enhancement: 17,
     durability: 40,
}

const fullItem = {
     name: 'full',
     enhancement: 20,
     durability: 100
}

const veryWeakItem = {
     name: 'very weak',
     enhancement: 5,
     durability: 5
}

const lowEnhancementItem = {
     name: 'low enhancement',
     enhancement: 10,
     durability: 100
}


describe('enhancer methods', function() {
     it("should run tests using it()", function () {
          //initial dummy tests
          expect(true).toBe(true);
          expect(true).toBeTruthy();
          expect(true).not.toBeUndefined();
      });
})

//------------------globals------------------------//
describe('testerItem', function(){
     test('should match the testerItem', function() {
     //item should be the item
          expect(testerItem).toEqual({
               name: 'tester',
               enhancement: 17,
               durability: 40,
          })

     //name
          expect(testerItem.name).toBeTruthy()
          expect(testerItem.name).toEqual('tester')

     //enhancement
          expect(testerItem.enhancement).toBeTruthy()
          expect(testerItem.enhancement).toBeGreaterThanOrEqual(0)
          expect(testerItem.enhancement).toBeLessThanOrEqual(17)

     //durability
          expect(testerItem.durability).toBeTruthy()
          expect(testerItem.durability).toBeGreaterThanOrEqual(0)
          expect(testerItem.durability).toBeLessThanOrEqual(100)
     })
})

describe('fullItem', function(){
     test('should match the fullItem', function() {
     //item should be the item
          expect(fullItem).toEqual({
               name: 'full',
               enhancement: 20,
               durability: 100
          })

     //name
          expect(fullItem.name).toBeTruthy()
          expect(fullItem.name).toEqual('full')

     //enhancement
          expect(fullItem.enhancement).toBeTruthy()
          expect(fullItem.enhancement).toBe(20)

     //durability
          expect(fullItem.enhancement).toBeTruthy()
          expect(fullItem.durability).toBe(100)
     })
})

describe('veryWeakItem', function(){
     test('should match the veryWeak item', function() {
     //item should be the item
          expect(veryWeakItem).toEqual({
               name: 'very weak',
               enhancement: 5,
               durability: 5,
          })

     //name
          expect(veryWeakItem.name).toBeTruthy()
          expect(veryWeakItem.name).toEqual('very weak')

     //enhancement
          expect(veryWeakItem.enhancement).toBeTruthy()
          expect(veryWeakItem.enhancement).toBeGreaterThanOrEqual(0)
          expect(veryWeakItem.enhancement).toBeLessThanOrEqual(15)

     //durability
          expect(veryWeakItem.durability).toBeTruthy()
          expect(veryWeakItem.durability).toBeGreaterThanOrEqual(0)
          expect(veryWeakItem.durability).toBeLessThanOrEqual(100)
     })
})

describe('lowEnhancementItem', function(){
     test('should match the lowEnhancementItem', function() {
     //item should be the item
          expect(lowEnhancementItem).toEqual({
               name: 'low enhancement',
               enhancement: 10,
               durability: 100,
          })

     //name
          expect(lowEnhancementItem.name).toBeTruthy()
          expect(lowEnhancementItem.name).toEqual('low enhancement')

     //enhancement
          expect(lowEnhancementItem.enhancement).toBeTruthy()
          expect(lowEnhancementItem.enhancement).toBeGreaterThanOrEqual(0)
          expect(lowEnhancementItem.enhancement).toBeLessThanOrEqual(15)

     //durability
          expect(lowEnhancementItem.durability).toBeTruthy()
          expect(lowEnhancementItem.durability).toBeGreaterThanOrEqual(0)
          expect(lowEnhancementItem.durability).toBeLessThanOrEqual(100)
     })
})


//----------------repair() function testing------------------------//
describe('repair()', function(){
     test('should set durability to 100', function(){
          //initial durability
          expect(testerItem.durability).toBe(40)
          //after calling repair(testerItem)
          expect(repair(testerItem)).toBeTruthy()
          expect(repair(testerItem)).toEqual({
               ...testerItem,
               durability: 100,
               message: 'FULLY REPAIRED'
          })
     })
})

//----------------success() function testing------------------------//
describe('succeed()', function(){
     //for testerItem
     expect(testerItem.enhancement).toBe(17)
     expect(succeed(testerItem))
          .toEqual({
               ...testerItem,
               enhancement: 18,
               durability: 40,
               message: 'ENHANCED'
     })

     //for fullItem
     expect(fullItem.enhancement).toBe(20)
     expect(succeed(fullItem)) // should add message 'Enhancement Full'
          .toEqual({
               ...fullItem,
               message: 'Enhancement Full'
          }) 
     
})

//----------------fail() function testing------------------------//
describe('fail()', function(){
     //for testerItem
     expect(fail(testerItem)).toEqual({
          ...testerItem,
          enhancement: 16,
          durability: 30,
          message: '10 DMG, -1 Enhancement'
     })

     //for fullItem
     expect(fail(fullItem)).toEqual({
          ...fullItem,
          enhancement: 19,
          durability: 90,
          message: '10 DMG, -1 Enhancement'
     })

     //for veryWeakItem
     expect(fail(veryWeakItem)).toEqual({
          ...veryWeakItem,
          durability: 0,
          message: 'ITEM DESTROYED'
     })

     expect(fail(lowEnhancementItem)).toEqual({
          ...lowEnhancementItem,
          durability: 95,
          message: '5 DMG'
     })
})
