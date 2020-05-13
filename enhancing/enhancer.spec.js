const enhancer = require("./enhancer.js");
// test away!

describe("enhancement functionality", () => {
  test("repair functionality", () => {
    const item = {
      name: "Steel Sword",
      durability: 75,
      enhancement: 15,
    };

    const itemRepair = enhancer.repair(item);
    expect(itemRepair.durability).toBe(100);
  });

  test("success functionality", () => {
    const item = {
      name: "Elvish Bow",
      durability: 100,
      enhancement: 19,
    };

    const itemSucceed = enhancer.succeed(item);
    expect(itemSucceed.enhancement).toBeLessThanOrEqual(20);
  });
});
