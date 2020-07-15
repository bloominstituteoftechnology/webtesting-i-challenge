const enhancer = require("./enhancer.js");
const player = require("./players");

// test away!

//Restore Health ✅
describe("restore health", function () {
  it("Should restore player1 durability to 100", function () {
    expect(enhancer.repair(player.health)).toEqual(player.player1);
  });
});

//Enhancement Levels UP 1
describe("Enhancement + 1", function () {
  it("Should level up enhancement by 1 point", function () {
    expect(enhancer.succeed(player.player2)).toEqual(player.enhanced);
  });
});

// Enhance Fail
describe("when enhancement fails", function () {
  it("should decrease or increate enhancement depending on ehancement value", function () {
    expect(enhancer.fail(player.player3)).toEqual({
      name: 1688,
      enhancement: 4,
      durability: 59,
    });
  });
});
