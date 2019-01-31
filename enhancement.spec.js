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
    const failedWeaponBelow14 = {
      origName: "sniper_rifle",
      name: "sniper_rifle",
      type: "weapon",
      durability: 95,
      enhancement: 11
    };

    test("Failed weapon below 14", () => {
      expect(enhance.fail(sniper_rifle)).toEqual(failedWeaponBelow14);
    });

    const failedWeaponBelow16 = {
      origName: "plasma_pistol",
      name: "plasma_pistol",
      type: "weapon",
      durability: 90,
      enhancement: 15
    };

    test("Failed weapon equal to or less than 16", () => {
      expect(enhance.fail(plasma_pistol)).toEqual(failedWeaponBelow16);
    });

    const failedWeaponAbove16 = {
      origName: "sticky_grendade",
      name: "[TRI] sticky_grendade",
      type: "weapon",
      durability: 100,
      enhancement: 18
    };

    test("Failed weapon above 16", () => {
      expect(enhance.fail(sticky_grendade)).toEqual(failedWeaponAbove16);
    });

    const failedArmorBelow14 = {
      origName: "Hayabusa",
      name: "Hayabusa",
      type: "armor",
      durability: 95,
      enhancement: 8
    };

    test("Failed armor below 14", () => {
      expect(enhance.fail(Hayabusa)).toEqual(failedArmorBelow14);
    });

    const failedArmorBelow16 = {
      origName: "Bungie",
      name: "Bungie",
      type: "armor",
      durability: 90,
      enhancement: 15
    };

    test("Failed armor equal to or less than 16", () => {
      expect(enhance.fail(Bungie)).toEqual(failedArmorBelow16);
    });

    const failedArmorAbove16 = {
      origName: "Commando",
      name: "[PRI] Commando",
      type: "armor",
      durability: 100,
      enhancement: 16
    };

    test("Failed armor above 16", () => {
      expect(enhance.fail(Commando)).toEqual(failedArmorAbove16);
    });

    const lowArmorEnhancement = {
      origName: "Ascetic",
      name: "Ascetic",
      type: "armor",
      durability: 100,
      enhancement: 3
    };

    test("Armor enhancement level equal to or less than 5", () => {
      expect(enhance.fail(Ascetic)).toBe(
        "Armor below enhancement level 5 cannot fail."
      );
    });

    const lowWeaponEnhancement = {
      origName: "halo_ce_pistol",
      name: "halo_ce_pistol",
      type: "weapon",
      durability: 100,
      enhancement: 19
    };

    test("Weapon enhancement level equal to or less than 7", () => {
      expect(enhance.fail(halo_ce_pistol)).toEqual(
        "Weapons below enhancement level 7 cannot fail."
      );
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
