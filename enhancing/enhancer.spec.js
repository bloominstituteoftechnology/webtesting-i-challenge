const enhancer = require('./enhancer.js');
// test away!



it('should run the tests', function() {
   expect(true).toBe(true)
})

describe('enhancer', () => {
   describe('.repair()', () => {
    expect(
        enhancer.repair({
          name: "Item1",
          durability: 0,
          enhancement: 18,
        })
      ).toEqual({
        name: "Item1",
        enhancement: 18,
        durability: 100,
      });
    });

    it("should accept an object, ensures the returned value is 100, and not anything else", () => {
        expect(
          enhancer.repair({
            name: "Item1",
            durability: 0,
            enhancement: 18,
          })
        ).not.toEqual({
          name: "Item1",
          enhancement: 18,
          durability: 98,
        });
      });
    


   // Succeed
   describe('.succeed()', () => {
      it.todo('should add 3 to item.enhancement property if <20')
      it.todo('should return item if item.enhancement is 20')
      it.todo('should throw an error if the arg is not an object')
      it.todo('should throw an error if item.enhancement is >8')
   })

   // FAIL 
   describe('.fail()', () => {
      it.todo('should subtract 5 from durability property if item.enhancement < 15')
      it.todo('should subtract 5 from durability property if item.enhancement = 15 or 16')
      it.todo('should subtract 1 from enhancement property if item.enhancement > 16')
      it.todo('should throw an error if the arg is not an object')
      it.todo('should throw an error if item.enhancement is > 20')
      it.todo('should throw an error if item.durability is > 100')
   })


   
})

// STRETCH

describe("Add a get() method to the enhancer object that takes an item and returns a new item", () => {
    it("if the enhancement level is greater than 0, change the name to include the enhancement level, preceded by a plus sign ( + ), between square brackets before the item's name. Example: the name of a Iron Sword enhanced to 7 would be [+7] Iron Sword ", () => {
      expect(
        enhancer.get({
          name: "item1",
          durability: 10,
          enhancement: 7,
        })
      ).toEqual({
        name: "[+7] item1",
        durability: 10,
        enhancement: 7,
      });
    });
  
    it("if the enhancement level is 0, the the name is not modified.", () => {
      expect(
        enhancer.get({
          name: "item1",
          durability: 10,
          enhancement: 0,
        })
      ).toEqual({
        name: "item1",
        durability: 10,
        enhancement: 0,
      });
    });
  });

