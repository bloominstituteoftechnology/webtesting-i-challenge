const items = require("./items");
const cl = console.log;

const sword = {
  name: "[+14] Excalibur",
  type: "weapon",
  durability: 60, // max of 100
  enhancement: "+14" // avail [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,PRI,DUO,TRI,TET,PEN]
};

const helmet = {
  name: `[PRI] Perseus Helm`,
  type: "armor",
  durability: 90,
  enhancement: "PRI"
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
  // the enhancement is included in the list of possible enhancement levels
  test("enhancement of items", () => {
    expect(possEnh.includes(items.success(sword).enhancement)).toBe(true);
  });

  // the name is displayed correctly
  // the name is displayed correctly when level is +0
  // the enchancement level goes up by exactly 1
});

describe("failure method", () => {
  // the enhancement is included in the list of possible enhancement levels
  // the name is displayed correctly
  // the name is displayed correctly when level is +0
  // the enhancement level goes down by exactly 1
  // armor of level 5 or below cannot be changed
  // weapon of level 7 or below cannot be changed
  // the durability is decreased by 5 if level is under 15
  // the durability is decreased by 10 if level is 15 or greater
  // QUESTION on "cannot be enhanced section of instruction"
  // the durability cannot be less than 20 if the level drops below 15
  // the durability cannot be less than 0 if the level drops below PEN
});

describe("repair method", () => {
  // durability should be between 0 and 100, on level of 15 to TET
  // durability should be between 20 and 100, on level of 14 or less
  // durability should be 100 or less, on level of PEN
});
