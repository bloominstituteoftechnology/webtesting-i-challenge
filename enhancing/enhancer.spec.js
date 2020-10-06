const enhancer = require("./enhancer.js");
const items = require("./items");
// test away!

test("item enchantment success", () => {
  expect(
    enhancer.success({
      name: "mace",
      enchantment: 2,
      durability: 12,
    })
  ).toEqual({ name: "mace", enchantment: 3, durability: 12 });

  expect(
    enhancer.success({
      name: "sword",
      enchantment: 20,
      durability: 12,
    })
  ).toEqual({
    name: "sword",
    enchantment: 20,
    durability: 12,
  });
});

test("item enchantment failure", () => {
  expect(
    enhancer.fail({
      name: "axe",
      enchantment: 14,
      durability: 100,
    })
  ).toEqual({
    name: "axe",
    enchantment: 14,
    durability: 95,
  });

  expect(
    enhancer.fail({
      name: "shield",
      enchantment: 15,
      durability: 100,
    })
  ).toEqual({
    name: "shield",
    enchantment: 15,
    durability: 90,
  });

  expect(
    enhancer.fail({
      name: "shield",
      enchantment: 16,
      durability: 100,
    })
  ).toEqual({
    name: "shield",
    enchantment: 15,
    durability: 90,
  });
});

test("item repairing", () => {
  expect(
    enhancer.repair({
      name: "sling-shot",
      enchantment: 20,
      durability: 5,
    })
  ).toEqual({
    name: "sling-shot",
    enchantment: 20,
    durability: 100,
  });

  expect(
    enhancer.repair({
      name: "pea shooter",
      enchantment: 20,
      durability: 100,
    })
  ).toEqual({
    name: "pea shooter",
    enchantment: 20,
    durability: 100,
  });
});
