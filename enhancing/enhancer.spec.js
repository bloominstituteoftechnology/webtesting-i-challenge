const enhancer = require('./enhancer.js');

describe("repair", () => {
    it("should restore durability to 100", () => {
      expect(
        enhancer.repair({
          name: "Sword",
          durability: 25,
          enhancement: 5
        })
      ).toEqual({
        name: "Sword",
        durability: 100,
        enhancement: 5
      });
})});

describe("success", () => {
    it("success, should increment enhancement by 1 if less than 20", () => {
        expect(
            enhancer.success({
            name: "axe",
            durability: 100,
            enhancement: 19
          })
        ).toEqual({
          name: "axe",
          durability: 100,
          enhancement: 20
        });
      });
  });

  describe("fail", () => {
    it("Durability should decrease by 5 when Enhancement < 15", () => {
      const item = {
        name: "staff",
        enhancement: 11,
        durability: 35,
      };
      const expected = 6;
      const actual = enhancer.fail(item);
      expect(actual.enhancement).toBe(expected);
    });

    it("will decrease by 1 if enhancement is greater than 16", () => {
      const item = {
        name: "staff",
        enhancement: 17,
        durability: 35,
      };
      const expected = 16;
      const actual = enhancer.fail(item);
      expect(actual.enhancement).toBe(expected);
    });

    it("will decrease by 10 if enhancement is greater than 15 and less than 16", () => {
      const item = {
        name: "staff",
        enhancement: 16,
        durability: 35,
      };
      const expected = 6;
      const actual = enhancer.fail(item);
      expect(actual.enhancement).toBe(expected);
    });

it("gets items" , ()=>{
    expect(enhancer.get({
        name: "item1",
        durability: 10,
        enhancement:5 
    })).toEqual({
        name: "item1",
        durability: 10,
        enhancement:5
    })
   
})
});