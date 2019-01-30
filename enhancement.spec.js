const enhance = require("./enhancementHandler");

const {
  needler,
  sniper_rifle,
  plasma_pistol,
  sticky_grendade,
  energy_sword,
  battle_rifle,
  halo_ce_pistol
} = require("./weapon");

const {
  Mark_VI,
  CQB,
  EVA,
  EOD,
  Hayabusa,
  Katana,
  Bungie,
  Security,
  Recon,
  Scout,
  ODST,
  Mark,
  Rogue,
  Combat,
  Assault,
  Flight,
  Ascetic,
  Commando
} = require("./armor");

describe("GAME TEST SUITE", () => {
  describe("SUCCESS METHOD", () => {
    const expectedArmor = {
      name: "EOD",
      type: "armor",
      durability: 100,
      enhancement: 1
    };

    test("Increase armor enhancement by 1", () => {
      expect(enhance.success(EOD)).toEqual(expectedArmor);
    });

    const expectedWeapon = {
      name: "energy_sword",
      type: "weapon",
      durability: 100,
      enhancement: 1
    };

    test("Increase weapon enhancement by 1", () => {
      expect(enhance.success(energy_sword)).toEqual(expectedWeapon);
    });
  });

  describe("FAIL METHOD", () => {});

  describe("REPAIR METHOD", () => {
    const repairedArmor = {
      name: "CQB",
      type: "armor",
      durability: 100,
      enhancement: 0
    };

    test("Repair CQB armor", () => {
      expect(enhance.repair(CQB)).toEqual(repairedArmor);
    });

    const repairedWeapon = {
      name: "needler",
      type: "weapon",
      durability: 100,
      enhancement: 0
    };

    test("Repair needler weapon", () => {
      expect(enhance.repair(needler)).toEqual(repairedWeapon);
    });
  });
});

// // Arrange
// const item = {
//     name: "longsword",
//     type: "weapon",
//     durability: "PEN",
//     enhancement: 1
//   };

//   // Act
//   const enhancedItem = success(item);

//   // Assert
//   expect(enhancedItem.enhancement).toBe("PEN");

//   // Arrange
//   const items = [{}, {}, []];

//   // Act
//   const enhancedItems = items.map(success);

//   // Assert
//   expect(enhancedItems[0]).toBe();
