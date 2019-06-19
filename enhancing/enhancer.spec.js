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

    describe("Succeed()", () => {
        //Succeed should increase enhancement by 1, cap enhancement at 20, and return a new item
        it('should accept an object and return a new object', () => {
            const testItem = enhancer.succeed(items[0]);

            expect(testItem).not.toBe(items[0]);
        });

        it('should increase enhancement by 1', () => {
            const testItem1 = enhancer.succeed(items[0]);
            const testItem2 = enhancer.succeed(items[1]);
            const testItem3 = enhancer.succeed(items[2]);

            expect(testItem1.enhancement).toBe(17);
            expect(testItem2.enhancement).toBe(17);
            expect(testItem3.enhancement).toBe(1);
        });

        it('should not increase enhancement if enhancement = 20', () => {
            const testItem = enhancer.succeed(items[3]);

            expect(testItem.enhancement).toBe(20);
        });

        it('should not alter values other than enhancement', () => {
            const testItem1 = enhancer.succeed(items[1]);
            const testItem2 = enhancer.succeed(items[2]);
            const testItem3 = enhancer.succeed(items[3]);

            expect(testItem1.name).toBe('Buster Sword II');
            expect(testItem1.durability).toBe(0);

            expect(testItem2.name).toBe('Buster Sword III');
            expect(testItem2.durability).toBe(97);

            expect(testItem3.name).toBe('Buster Sword IV');
            expect(testItem3.durability).toBe(97);
        });
    });

    describe("Fail()", () => {
        //Fail should decrease durability by 5 if enhancement is less than 15, and by 10 if greater than 15
        //Fail should decrease durability by 1 if enhancement is greater than 16
        it('should accept an object and return a new object', () => {
            const testItem = enhancer.fail(items[0]);

            expect(testItem).not.toBe(items[0]);
        });

        it('should decrease durability by 5 if enhancement is less than 15', () => {
            const testItem = enhancer.fail(items[2]);

            expect(testItem.durability).toBe(92);
        });

        it('should decrease durability by 10 if enhancement is greater than 15 and less than 17', () => {
            const testItem1 = enhancer.fail(items[0]);
            const testItem2 = enhancer.fail(items[5]);

            expect(testItem1.durability).toBe(87);
            expect(testItem2.durability).toBe(87);
        });

        it('should decrease durability by 1 if enhancement is greater than 16', () => {
            const testItem = enhancer.fail(items[3]);

            expect(testItem.durability).toBe(96);
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

    describe("Get()", () => {
        //Get should not modify the name property if enhancement = 0
        //Get should modify the name property to be " [+{enhancement value}] Name Of Item "
        it('should accept an object and return a new object', () => {
            const testItem = enhancer.fail(items[0]);

            expect(testItem).not.toBe(items[0]);
        });

        it('should modify the name property if enhancement > 0', () => {
            const testItem1 = enhancer.get(items[0]);
            const testItem2 = enhancer.get(items[3]);
            const testItem3 = enhancer.get(items[4]);

            expect(testItem1.name).toBe("[+16] Buster Sword I");
            expect(testItem2.name).toBe("[+20] Buster Sword IV");
            expect(testItem3.name).toBe("[+6] Buster Sword V");
        });

        it('shoud not modify the name if enhancement = 0', () => {
            const testItem = enhancer.get(items[2]);

            expect(testItem.name).toBe("Buster Sword III");
        });

        it('should not alter values other than name', () => {
            const testItem1 = enhancer.get(items[1]);
            const testItem2 = enhancer.get(items[2]);
            const testItem3 = enhancer.get(items[3]);

            expect(testItem1.enhancement).toBe(16);
            expect(testItem1.durability).toBe(0);

            expect(testItem2.enhancement).toBe(0);
            expect(testItem2.durability).toBe(97);

            expect(testItem3.enhancement).toBe(20);
            expect(testItem3.durability).toBe(97);
        });
    });
});
