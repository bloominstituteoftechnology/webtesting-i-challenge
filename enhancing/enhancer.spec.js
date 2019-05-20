const {repair, succeed, fail, get} = require("./enhancer.js");
// test away!



describe("enhancer.js", () => {
  describe("repair()", () => {
    it("takes in an item and changes durability to 100", () => {
      const item = {
        name: "Sarah",
        durability: 10,
        enhancement: 15
      }
      //arrange
      const expected = {
        name: "Sarah",
        durability: 100,
        enhancement: 15
      };

      //act
      const repairedItem = repair(item);

      //assert
      expect(repairedItem).toEqual(expected);
    });
  });

  describe('succeed()', () => {
    it("should raise enhancement by 1", () => {
     
      const item = {
        name: "Sarah",
        durability: 10,
        enhancement: 15
      }
      const expected = {
        name: "Sarah",
        durability: 100,
        enhancement: 16
      }

      const enhancedItem = succeed(item);
      expect(enhancedItem).toEqual(expected);
    })
  })

  // describe('fail()', () => {
  //   it("decrease enhancement if fails", () => {
  //     const expected = {
  //       name: "Sarah",
  //       durability: 95,
  //       enhancement: 
  //     }
  //   })
  // })
});
