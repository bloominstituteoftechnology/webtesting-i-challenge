const enhancer = require('./enhancer.js');
// test away!

describe('test module', () =>{

  describe('fail test', () =>{

    it(' If the item enhancement is less than 15, the durability of the item is decreased by 5', () =>{ 
      const item = {
        enhancement: 14,
        durability:70
      };
      expect(enhancer.fail(item).durability).toBe(65);
    });

    it('If the items enhancement is 15 or more, the durability of the item is decreased by 10', () =>{ 
      const item = {
        enhancement: 25,
        durability: 90
      };
      expect(enhancer.fail(item).durability).toBe(80);
    });
    
    it(' If the items enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17', () => {
      const item = {
        enhancement: 17
      };

       const actual = enhancer.fail(item);

       expect(actual.enhancement).toBe(16);
    });

  });


  describe('repair test', () =>{

    it('returns durabilty to 100', () => {
      //arrange
      const item = {
        name: 'longbow',
        type: 7,
        durability: 54
      };
      // act
       expect(enhancer.repair(item).durability).toBe(100);
    });
  });
  
  describe('success test', () =>{

    it('The items enhancement increases by 1.', () =>{ 

      const item = {
        enhancement: 16
      };
      expect(enhancer.success(item).enhancement).toBe(17);
    });
    it('If the item enhancement level is 20, the enhancement level is not changed.', () =>{ 
      const item = {
        enhancement: 20
      };
      expect(enhancer.success(item).enhancement).toBe(20);
    });
  });


  });



