const enhancer = require('./enhancer');
const items = require('../items');

describe("Enhancer Test Suite", () => {
    //Repair Method Returns a New Item with Durability = 100
    describe("Repair()", () => {

        it('should accept an object and return a new object', () => {
            const testItem = enhancer.repair(items[0]);

            expect(testItem).not.toBe(items[0]);
        });

        it('should return a new object with durability at 100', () => {
            const testItem1 = enhancer.repair(items[0]);
            const testItem2 = enhancer.repair(items[1]);

            expect(testItem1.durability).toBe(100);
            expect(testItem2.durability).toBe(100);
        });

        it('shoud not alter values other than durability', () => {
            const testItem1 = enhancer.repair(items[0]);
            const testItem2 = enhancer.repair(items[2]);

            expect(testItem1.name).toBe("Buster Sword I");
            expect(testItem1.enhancement).toBe(16);

            expect(testItem2.name).toBe("Buster Sword III");
            expect(testItem2.enhancement).toBe(0);
        });

    });
});
