const enhancer = require('../enhancer/enhancer.js');

let item = {
    name: '',
    type: '',
    durability: 100,
    enhancement: 14
};

const enhanceLevels = {
    1: "[+1]",
    2: "[+2]",
    3: "[+3]",
    4: "[+4]",
    5: "[+5]",
    6: "[+6]",
    7: "[+7]",
    8: "[+8]",
    9: "[+9]",
    10: "[+10]",
    11: "[+11]",
    12: "[+12]",
    13: "[+13]",
    14: "[+14]",
    15: "[+15]",
    16: "[PRI]",
    17: "[DUO]",
    18: "[TRI]",
    19: "[TET]",
    20: "[PEN]"
  };

test('repair item', () => {
    const expected = 100;
    const actual = enhancer.repair(item);
    expect(actual).toBe(expected);
});

test('enhance item failure', () => {
    const expected = item.durability - 5;
    const actual = enhancer.failure(item);
    expect(actual).toBe(expected);
});

test('enhance item success', () => {
    const expectedEnhancement = item.enhancement + 1;
    let actualEnhancement = enhancer.success(item).enhancement;

    const expectedName = enhanceLevels[item.enhancement+1];
    let actualName = enhancer.success(item).name

    expect(actualEnhancement).toBe(expectedEnhancement);
    expect(actualName).toBe(expectedName);
});



