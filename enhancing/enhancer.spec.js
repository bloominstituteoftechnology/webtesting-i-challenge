const { 
     succeed,
     fail,
     repair,
     get
 } = require('./enhancer.js');
// test away!

const testerItem = {
     durability: 40,
}


describe('enhancer methods', function() {
     it("should run tests using it()", function () {
          //initial dummy tests
          expect(true).toBe(true);
          expect(true).toBeTruthy();
          expect(true).not.toBeUndefined();
      });

      //----------------repair() function testing------------------------//
      describe('repair()', function(){
           test('should set durability to 100', function(){
                expect(repair(testerItem)).toBeTruthy()
                expect(repair(testerItem)).toEqual({
                     ...testerItem,
                     durability: 100
                })
           })
      })
})
