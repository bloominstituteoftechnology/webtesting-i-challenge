const enhance = require("./enhance.js");

describe("success function", () => {
    test("Numerical enhancement (0 - 15)", () => {
        expect(enhance.success({
            name: "Elven Sword",
            type: "weapon",
            durability: 95,
            enhancement: 0
        })).toEqual({
            name: "[+1] Elven Sword",
            type: "weapon",
            durability: 95,
            enhancement: 1
        });

        expect(enhance.success({
            name: "[+4] Dwarvish Helmet",
            type: "armor",
            durability: 70,
            enhancement: 4
        })).toEqual({
            name: "[+5] Dwarvish Helmet",
            type: "armor",
            durability: 70,
            enhancement: 5
        });

        expect(enhance.success({
            name: "[+14] Ethereal Blades",
            type: "weapon",
            durability: 100,
            enhancement: 14
        })).toEqual({
            name: "[+15] Ethereal Blades",
            type: "weapon",
            durability: 100,
            enhancement: 15
        });
    });

    test("String enhancement (16 - 20)", () => {
        expect(enhance.success({
            name: "[+15] Elven Sword",
            type: "weapon",
            durability: 95,
            enhancement: 15
        })).toEqual({
            name: "[PRI] Elven Sword",
            type: "weapon",
            durability: 95,
            enhancement: 16
        });

        expect(enhance.success({
            name: "[DUO] Dwarvish Helmet",
            type: "armor",
            durability: 70,
            enhancement: 17
        })).toEqual({
            name: "[TRI] Dwarvish Helmet",
            type: "armor",
            durability: 70,
            enhancement: 18
        });

        expect(enhance.success({
            name: "[TET] Ethereal Blades",
            type: "weapon",
            durability: 100,
            enhancement: 19
        })).toEqual({
            name: "[PEN] Ethereal Blades",
            type: "weapon",
            durability: 100,
            enhancement: 20
        });
    });

    test("Can't enhance above level 20", () => {
        expect(enhance.success({
            name: "[PEN] Ethereal Blades",
            type: "weapon",
            durability: 100,
            enhancement: 20
        })).toReturnWith({error: "Cannot enhance an item above level 20 (PEN)"});
    });

    test("Errors on malformed item", () => {
        expect(enhance.success({
            name: "[TET] Ethereal Blades",
            type: "not a real type",
            durability: 100,
            enhancement: 19
        })).toReturnWith({error: "Malformed item data"});
        
        expect(enhance.success({
            name: "[TET] Ethereal Blades",
            type: "weapon",
            durability: "one hundred",
            enhancement: 19
        })).toReturnWith({error: "Malformed item data"});

        expect(enhance.success({
            name: "[TET] Ethereal Blades",
            type: "weapon",
            durability: 100,
            enhancement: "TET"
        })).toReturnWith({error: "Malformed item data"});
    });
});

describe("fail function", () => {
    test("Decrease durability by 5 if level 0 - 14", () => {

    });
    
    test("Decrease durability by 10 if level 14 - 19", () => {

    });

    test("Decrease enhancement level if above level 16", () => {

    });

    test("Errors on malformed item", () => {

    });
});

describe("repair function", () => {
    test("Restores durability to 100", () => {
        
    });

    test("Does nothing for fully-repaired items", () => {
        
    });

    test("Errors on malformed item", () => {
        
    });
});