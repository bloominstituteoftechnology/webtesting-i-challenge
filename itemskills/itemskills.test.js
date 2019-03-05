const { success, fail, repair, levelnames } = require("./itemskills.js");

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
  });
  describe("fail()", () => {
    it("fail() should return null when argument has a type value of armor with enhancement under 6", () => {
      expect(
        fail({ type: "armor", enhancement: 5, name: "greaves" })
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
        ...failingFlail,
        durability: failingFlail.durability - 10
      });
    });
  });
  describe("repair()", () => {
    it("repair() should return null when argument is not an object with a property of name", () => {
      expect(repair("3")).toBeNull();
    });
  });
});
