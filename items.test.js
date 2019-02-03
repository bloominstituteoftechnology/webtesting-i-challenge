const items = require("./items");
const cl = console.log;

// weapons
const sword = {
  name: "",
  blandName: "Excalibur",
  type: "weapon",
  durability: 5,
  enhancement: 20
};

const bow = {
  name: "",
  blandName: "Shirker",
  type: "weapon",
  durability: 29,
  enhancement: 8
};

// armor
const helmet = {
  name: "",
  blandName: "Perseus' Helm",
  type: "armor",
  durability: 90,
  enhancement: 0
};

const sheild = {
  name: "",
  blandName: "Fate Stopper",
  type: "armor",
  durability: 70,
  enhancement: 16
};

const chainMail = {
  name: "",
  blandName: "Links of Life",
  type: "armor",
  durability: 70,
  enhancement: 5
};

describe("success method", () => {
  // the name is displayed correctly with correct level
  test("enhanced name of items after success", () => {
    expect(items.success(sword).name).toBe("[PEN] Excalibur");
  });

  // the name is displayed correctly when level is +0
  test("enhanced name of items at level 0", () => {
    expect(items.setName(helmet)).toBe("Perseus' Helm");
  });
});

describe("failure method", () => {
  // the name is displayed correctly with proper level
  test("enhanced name of items after fail should not change if incoming durability < 10", () => {
    expect(items.fail(sword).name).toBe("[PEN] Excalibur");
    expect(items.fail(sword).durability).toBe(5);
    expect(items.fail(items.repair(sword)).name).toBe("[TET] Excalibur");
  });

  // no fail allowed for weapons under lvl 8
  test("enhanced name of items at level 0 and no fail allowed", () => {
    expect(items.fail(bow).name).toBe("[+8] Shirker");
    expect(items.fail(bow).enhancement).toBe(8);
  });

  // armor of level 5 or below cannot be changed
  test("enhancement failure not possible for armor lvl under 6", () => {
    expect(items.fail(chainMail).enhancement).toBe(5);
    expect(items.fail(chainMail).durability).toBe(70);
  });

  // the enhancement level goes down by exactly 1 only if level is over 16 and durability is decreased by 10 if level is 15 or greater
  test("enhancement doesn't go down under lvl 17, durability goes down over lvl 14 ", () => {
    expect(items.fail(sheild).enhancement).toBe(16);
    expect(items.fail(sheild).durability).toBe(60);
  });

  // the durability is decreased by 5 if level is under 15, but only if incoming durability is 25 or over
  test("level 8 item should not go down level, but durability -= 5", () => {
    expect(items.fail(bow).enhancement).toBe(8);
    expect(items.fail(bow).durability).toBe(24);
    expect(items.fail(items.fail(bow)).durability).toBe(24);
  });
});

describe("repair method", () => {
  // durability should be 100 after repaired
  test("repair of item gives durability of 100", () => {
    expect(items.repair(bow).durability).toBe(100);
  });
});
