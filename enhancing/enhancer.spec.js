const enhancer = require('./enhancer.js');
// test away!

describe('test module', () =>{

  
  describe('repair test', () =>{

    it('returns durabilty to 100', () => {
      //arrange
      const item = {
        name: 'longbow',
        type: 7,
        durability: 54
      };
      // act
       expect(enhancer.repair(item).durability).toEqual(100);
    });
  });
  
  describe('succeed test', () =>{

    it('The items enhancement increases by 1.', () =>{ 

      const item = {
        enhancement: 16
      };
      expect(enhancer.succeed(item).enhancement).toBe(17);
    });
    it('If the item enhancement level is 20, the enhancement level is not changed.', () =>{ 
      const item = {
        enhancement: 20
      };
      expect(enhancer.succeed(item).enhancement).toBe(20);
    });
  });

 
  });



