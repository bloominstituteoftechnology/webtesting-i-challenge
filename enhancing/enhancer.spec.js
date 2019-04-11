const enhancer = require('./enhancer.js');
// test away!

// test suite
describe('the enhancer module', () => {

    // test suite
    describe('the succeed function', () => {

        // test
        it('items enhancement should increase by an increment of 1', () => {

            const item = {
                name: "broad sword",
                durability: 100,
                enhancement: 13
            };
        });

        // test
        it('item with an enhancement of 20 will remain the same', () => {

            const item = {
                name: "broad sword",
                durability: 100,
                enhancement: 20
            };
        });
    });

    // test suite
    describe('the fail function', () => {

        // test
        it('will return item with -5 durability', () => {

            const item = {
                name: "broad sword",
                durability: 100,
                enhancement: 11
            };

            const expected = {
                name: "broad sword",
                durability: 95,
                enhancement: 11
            };

            expect(item).toBe(expected);
        });

        // test
        it('will return item with -10 durability', () => {

            const item = {
                name: "broad sword",
                durability: 100,
                enhancement: 15
            };
        });

        // test
        it('will return item with -10 durability and -1 enhancement', () => {

            const item = {
                name: "broad sword",
                durability: 100,
                enhancement: 18
            };
        });
    });

    // test suite
    describe('the repair function', () => {

        // test
        it('items durability should return to 100 after it is repaired', () => {

            const item = {
                name: "broad sword",
                durability: 30,
                enhancement: 20
            };
        });
    });
});
