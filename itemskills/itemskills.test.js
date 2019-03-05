const { success, fail, repair } = require("./itemskills.js");
const levelnames = {
  1: "[+1]",
  2: "[+2]",
  3: "[+3]",
  4: "[+4]",
  5: "[+5]",
  6: "[+6]",
  7: "[+7]",
  8: "[+8]",
  9: "[+9]",
  10: "[+10]",
  11: "[+11]",
  12: "[+12]",
  13: "[+13]",
  14: "[+14]",
  15: "[+15]",
  16: "[PRI]",
  17: "[DUO]",
  18: "[TRI]",
  19: "[TET]",
  20: "[PEN]"
};

// describe("math.js,", () => {
//   describe("add", () => {
//     // 1 test case
//     test("adds two numbers", () => {
//       // Arrange (setup)
//       const expected = 4;

//       // Act (run System-Under-Test)
//       const actual = math.add(2, 2);

//       // assert
//       expect(actual).toBe(expected); // 1 assertion using .toBe() matcher
//     });

//     it("should throw an error when passed strings", () => {
//       expect(add(3, "4")).toBeNull();
//     });
//   });

//   describe("multiply", () => {
//     it("multiplies two numbers", () => {
//       expect(multiply(3, 4)).toBe(12);
//     });
//   });
// });
describe("Enhancer", () => {
  describe("success()", () => {
    it("success() should return null when argument is an object with an enhancement value of 20", () => {
      expect(success({ enhancement: 20, name: "sword" })).toBeNull();
    });
    it("success() should return null when argument is an object with a enhancement value over 14 and a durability less than 10", () => {
        expect(success({ enhancement: 16, name: "sword", durability: 9 })).toBeNull();
      });
    it("success should return an object with a name property that contains the new enhancement level in its string", () => {
        expect(success({ name: "rake", enhancement: 16 })).toMatchObject({enhancement: 17})
    })
    it("success should return an object with a name property that contains the old name in its string", () => {
        expect(success({ name: "rake", enhancement: 16 })).toEqual(expect.objectContaining({
            name: expect.stringMatching(/rake/)
        }))
    })
  });
  describe("fail()", () => {
    it("fail() should return null when argument has a type value of armor with enhancement under 6", () => {
      expect(
        fail({ type: "armor", enhancement: 5, name: "greaves" })
      ).toBeNull();
    });
    it("fail() should return null when argument is an object with enhancement value under 15 and durability value under 25", () => {
      expect(
        fail({ name: "null sword", enhancement: 12, durability: 24 })
      ).toBeNull();
    });
    it("fail() should return an object of enhancement value 15 with a like object with a durability value 10 less", () => {
      const failingFlail = {
        name: "[+15] Flail",
        type: "weapon",
        durability: 65,
        enhancement: 15
      };
      expect(fail(failingFlail)).toMatchObject({
        durability: failingFlail.durability - 10
      });
    });
    it("fail() should return an object that has the name property indexed value from levelnames reference that matches its new value for the enhancement property", () => {
      const depreciatingRake = {
        name: "Rake",
        type: "weapon",
        durability: 65,
        enhancement: 17
      };
      expect(fail(depreciatingRake)).toMatchObject({
        name: `${levelnames[depreciatingRake.enhancement - 1]} ${
          depreciatingRake.name
        }`
      });
    });
  });
  describe("repair()", () => {
    it("repair() should return null when argument is not an object with a property of name", () => {
      expect(repair("3")).toBeNull();
    });
    it("repair should increase the durability value of an object to 100", () => {
        expect(repair({name: "Broken Hammer", durability: 1})).toMatchObject({durability: 100})
    })
  });
});
