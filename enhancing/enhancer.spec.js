const enhancer = require('./enhancer.js');
// test away!

describe("repair", () => {
    it("should restore durability to 100", () => {
      expect(
        enhancer.repair({
          name: "Cindy",
          durability: 75,
          enhancement: 5
        })
      ).toEqual({
        name: "Cindy",
        durability: 100,
        enhancement: 5
      });
    });

    it("SUCCESS, should increment enhancement by 1 if less than 20", () => {
        expect(
            enhancer.success({
            name: "1 upTop Akh",
            durability: 100,
            enhancement: 19
          })
        ).toEqual({
          name: "1 upTop Akh",
          durability: 100,
          enhancement: 20
        });
      });
  });

  describe("fail", () => {
    it("will decrease by 5 if enhancement is less than 15", () => {
      const item = {
        name: "Item 1",
        enhancement: 10,
        durability: 35,
      };
      const expected = 5;
      const actual = enhancer.fail(item);
      expect(actual.enhancement).toBe(expected);
    });

    it("will decrease by 1 if enhancement is greater than 16", () => {
      const item = {
        name: "Item 1",
        enhancement: 17,
        durability: 35,
      };
      const expected = 16;
      const actual = enhancer.fail(item);
      expect(actual.enhancement).toBe(expected);
    });

    it("will decrease by 10 if enhancement is greater than 15 and less than 16", () => {
      const item = {
        name: "Item 1",
        enhancement: 16,
        durability: 35,
      };
      const expected = 6;
      const actual = enhancer.fail(item);
      expect(actual.enhancement).toBe(expected);
    });

it("gets() items" , ()=>{
    expect(enhancer.get({
        name: "John",
        durability: 10,
        enhancement:5 
    })).toEqual({
        name: "John",
        durability: 10,
        enhancement:5
    })
   
   
})
});