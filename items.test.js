const items = require("./items");
const cl = console.log;

const sword = {
  name: "",
  blandName: "Excalibur",
  type: "weapon",
  durability: 60, // max of 100
  enhancement: 20 // avail [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,PRI,DUO,TRI,TET,PEN]
};

const helmet = {
  name: "",
  blandName: "Perseus' Helm",
  type: "armor",
  durability: 90,
  enhancement: -1
};

const possEnh = [
  "+0",
  "+1",
  "+2",
  "+3",
  "+4",
  "+5",
  "+6",
  "+7",
  "+8",
  "+9",
  "+10",
  "+11",
  "+12",
  "+13",
  "+14",
  "+15",
  "PRI",
  "DUO",
  "TRI",
  "TET",
  "PEN"
];

describe("success method", () => {
  // the name is displayed correctly with correct level
  test('enhanced name of items', () => {
    expect(items.success(sword).name).toBe('[PEN] Excalibur')
  })
  // the name is displayed correctly when level is +0
  test('enhanced name of items at level 0', () => {
    expect(items.success(helmet).name).toBe("Perseus' Helm")
  })
});

describe("failure method", () => {

  // the name is displayed correctly with proper level
  // the name is displayed correctly when level is +0 and no fail allowed
  // the enhancement level goes down by exactly 1 only if level is over 16
  // weapon of level 7 or below cannot be changed
  // the durability is decreased by 5 if level is under 15
  // the durability is decreased by 10 if level is 15 or greater
  // durability decreased by 10, but level stays the same at level 15 or 16
  // QUESTION on "cannot be enhanced section of instruction"
  // the durability cannot be less than 20 if the level drops below 15
  // the durability cannot be less than 0 if the level drops below PEN
});

describe("repair method", () => {
  // durability should be between 0 and 100, on level of 15 to TET
  // durability should be between 20 and 100, on level of 14 or less
  // durability should be 100 or less, on level of PEN
});
