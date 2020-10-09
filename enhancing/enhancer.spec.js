const {
  success,
  fail,
  repair
} = require("./enhancer.js");
// test away!

describe("enhancer.js", () => {

  describe("repair()", () => {
    it("should restore durability to 100", () => {
      // const actual = repair({
      //   name: "test",
      //   enhancement: 5,
      //   durability: 20
      // });
      const actual = {
        name: "test",
        enhancement: 5,
        durability: 20
      };
      const expected = {
        name: "test",
        enhancement: 5,
        durability: 100
      };

      expect(repair(actual).durability).toBe(expected.durability);
    });
    it("should throw an exception if argument is not of type object", () => {

      expect(() => {
          repair(["hello"]);
        })
        .toThrow();

    });
  });


  describe("success()", () => {
    it("should increment enhancement by 1 if less than 20 or remain unchanged if equal to 20", () => {
      const actual = {
        name: "test",
        enhancement: 5,
        durability: 15
      };
      const expected = 6;
      expect(success(actual).enhancement).toBe(expected);
      expect(success({
        ...actual,
        enhancement: 20
      }).enhancement).toBe(20);
    })
    it("should not affect durability trait", () => {
      const actual = {
        name: "test",
        enhancement: 5,
        durability: 15
      }
      expect(success(actual).durability).toBe(actual.durability);
    })
    it("should throw an exception if enhancement is greater than 20 or less than 0", () => {
      const actual = {
        name: "test",
        enhancement: 21,
        durability: 15
      };
      expect(() => {
        success(actual).toThrow();
      })
      expect(() => {
        success({
            ...actual,
            enhancement: -1
          })
          .toThrow();
      })
    })
  })


  describe("fail()", () => {
    const actual = {
      name: "test",
      enhancement: 14,
      durability: 15
    }

    it("should decrease durability by 5 if enhancement is less than 15 or reduce it to 0 if durability is less than 5", () => {
      // const actual = {
      //   name: "test",
      //   enhancement: 14,
      //   durability: 15
      // }
      expect(fail(actual).durability).toBe(10)
      expect(fail({
        ...actual,
        durability: 4
      }).durability).toBe(0)
    });
    it("should decrease durability by 10 if enhancement is 15 or more or reduce it to 0 if durability is less than 10", () => {
      const actual = {
        name: "test",
        enhancement: 15,
        durability: 15
      }
      // expect(fail({
      //   ...actual,
      //   enhancement: 15
      // }).durability).toBe(5);
      expect(fail(actual).durability).toBe(5)

      expect(fail({
        ...actual,
        durability: 9
      }).durability).toBe(0)
    })
    it("should decrease enhancement by 1 if greater than 16 and durability by 10", () => {
      const actual = {
        name: "test",
        enhancement: 17,
        durability: 15
      }
      expect(fail(actual).durability).toBe(5);
      expect(fail(actual).enhancement).toBe(16);
    })
  })
});