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
  
  });



