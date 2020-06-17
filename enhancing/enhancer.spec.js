const { 
     succeed,
     fail,
     repair,
     get
 } = require('./enhancer.js');
// test away!

const testerItem = {
     name: 'tester',
     enhancement: 15,
     durability: 40,
}

const fullItem = {
     name: 'full',
     enhancement: 20,
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
               enhancement: 15,
               durability: 40,
          })

     //name
          expect(testerItem.name).toBeTruthy()
          expect(testerItem.name).toEqual('tester')

     //enhancement
          expect(testerItem.enhancement).toBeTruthy()
          expect(testerItem.enhancement).toBeGreaterThanOrEqual(0)
          expect(testerItem.enhancement).toBeLessThanOrEqual(15)

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

//----------------repair() function testing------------------------//
describe('repair()', function(){
     test('should set durability to 100', function(){
          //initial durability
          expect(testerItem.durability).toBe(40)
          //after calling repair(testerItem)
          expect(repair(testerItem)).toBeTruthy()
          expect(repair(testerItem)).toEqual({
               ...testerItem,
               durability: 100
          })
     })
})

//----------------success() function testing------------------------//
describe('succeed()', function(){
     //for testerItem
     expect(testerItem.enhancement).toBe(15)
     expect(succeed(testerItem))
          .toEqual({
               ...testerItem,
               enhancement: 16,
               durability: 40,
               message: undefined
     })

     //for fullItem
     expect(fullItem.enhancement).toBe(20)
     expect(succeed(fullItem)) // should add message 'Enhancement Full'
          .toEqual({
               ...fullItem,
               message: 'Enhancement Full'
          }) 
     
})

