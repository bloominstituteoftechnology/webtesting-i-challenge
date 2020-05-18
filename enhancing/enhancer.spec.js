const { succeed, fail, repair } = require("./enhancer.js");
// test away!
describe("enhancer.js tests", () => {
  test("should run without errors", () => {
    expect(true).toBeTruthy();
  });

  test("testing repair method", () => {
    expect(repair({ name: "Kevin", enhancement: 10 })).toStrictEqual({
      name: "Kevin",
      enhancement: 10,
      durability: 100,
    });
  });

  test("testing succeed method", () => {
    expect(succeed("Jim", 17, 50)).toEqual({
      name: "Jim",
      enhancement: 18,
      durability: 50,
    });
  });

  test("testing fail method ", () => {
    expect(
      fail({ name: "Bob", enhancement: 15, durability: 19 })
    ).toMatchObject({
      durability: 9,
    });
  });
});