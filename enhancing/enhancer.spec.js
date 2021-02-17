const enhancer = require('./enhancer.js');
// test away!

//success function

describe('success function', () => {
    test('success function exists', () => {
        expect(enhancer.success).toBeDefined();
    })
});

//fail test

describe('fail function', () => {
    test('fail function exists', () => {
        expect(enhancer.fail).toBeDefined();
    })
});

//repair test

describe('repair function', () => {
    it('Test that the repair method works', () => {
        const newItem = {
            name: "Metroid Prime",
            durability: 1,
            enhancement: 15,
        };
        const expectedItem = {
            name: "Metroid Prime",
            durability: 100,
            enhancement: 15,
        };

        const item = enhancer.repair(newItem)
        expect(item.name).toBe(expectedItem.name);
        expect(item.durability).toBe(expectedItem.durability);
        expect(item.enhancement).toBe(expectedItem.enhancement);
    })
});

describe('get function', () => {
    test('get function exists', () => {
        expect(enhancer.get).toBeDefined();
    })
});

/// AAA = Arrange -> Act -> Assess