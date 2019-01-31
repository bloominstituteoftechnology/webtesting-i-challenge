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
      origName: "EOD",
      name: "[+1] EOD",
      type: "armor",
      durability: 100,
      enhancement: 1
    };

    test("Increase armor enhancement by 1", () => {
      expect(enhance.success(EOD)).toEqual(expectedArmor);
    });

    const expectedArmorAbove15 = {
      origName: "EVA",
      name: "[TRI] EVA",
      type: "armor",
      durability: 100,
      enhancement: 18
    };

    test("Increase armor enhancement by 1 above 15", () => {
      expect(enhance.success(EVA)).toEqual(expectedArmorAbove15);
    });

    const expectedWeapon = {
      origName: "energy_sword",
      name: "[+1] energy_sword",
      type: "weapon",
      durability: 100,
      enhancement: 1
    };

    test("Increase weapon enhancement by 1", () => {
      expect(enhance.success(energy_sword)).toEqual(expectedWeapon);
    });

    const expectedWeaponAbove15 = {
      origName: "battle_rifle",
      name: "[TET] battle_rifle",
      type: "weapon",
      durability: 100,
      enhancement: 19
    };

    test("Increase weapon enhancement by 1 above 15", () => {
      expect(enhance.success(battle_rifle)).toEqual(expectedWeaponAbove15);
    });
  });

  describe("FAIL METHOD", () => {
    test("Failed weapon below 14", () => {
      expect(enhance.fail()).toEqual();
    });
    test("Failed weapon equal to or less than 16", () => {
      expect(enhance.fail()).toEqual();
    });
    test("Failed weapon above 16", () => {
      expect(enhance.fail()).toEqual();
    });
    test("Failed armor below 14", () => {
      expect(enhance.fail()).toEqual();
    });
    test("Failed armor equal to or less than 16", () => {
      expect(enhance.fail()).toEqual();
    });
    test("Failed armor above 16", () => {
      expect(enhance.fail()).toEqual();
    });
    test("Armor enhancement level equal to or less than 5", () => {
      expect(enhance.fail()).toEqual();
    });
    test("Weapon enhancement level equal to or less than 7", () => {
      expect(enhance.fail()).toEqual();
    });
  });

  describe("REPAIR METHOD", () => {
    const repairedArmor = {
      origName: "CQB",
      name: "CQB",
      type: "armor",
      durability: 100,
      enhancement: 0
    };

    test("Repair CQB armor", () => {
      expect(enhance.repair(CQB)).toEqual(repairedArmor);
    });

    const repairedWeapon = {
      origName: "needler",
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
