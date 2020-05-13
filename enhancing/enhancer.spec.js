const enhancer = require("./enhancer.js");
// test away!

describe("enhancement functionality", () => {
  test("tests repair functionality", () => {
    const item = {
      name: "Steel Sword",
      durability: 75,
      enhancement: 15,
    };

    const itemRepair = enhancer.repair(item);
    expect(itemRepair.durability).toBe(100);
  });
});
