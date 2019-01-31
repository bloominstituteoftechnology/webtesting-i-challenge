const enhance = require("./enhance.js");

describe("success function", () => {
    test("Numerical enhancement (0 - 15)", () => {

    });

    test("String enhancement (16 - 20)", () => {

    });

    test("Can't enhance above level 20", () => {

    });

    test("Errors on malformed item", () => {
        
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