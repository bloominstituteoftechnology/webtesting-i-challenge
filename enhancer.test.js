const enhancer = require('./enhancer');
const { Elven, Ghostwalker, BloodWeeper, CrissCross, Lacerator } = require('./items')

describe('the enhancer module', () => {

    describe('the success function', () => {

        test('increase enhancement level', () => {
            expect(enhancer.success(Elven).enhancement).toEqual('+1');
        });

        test('change name to display enhancement', () => {
            expect(enhancer.success(Ghostwalker).name).toEqual('[+5]Ghostwalker');
        });

        test('enhancement at 16', () => {
            expect(enhancer.success(BloodWeeper).enhancement).toEqual('PRI');
        });

        test('enhancement at 17', () => {
            expect(enhancer.success(Lacerator).enhancement).toEqual('DUO');
        });

        test('exhencement stops at 20', () => {
            expect(() => {
                enhancer.success(CrissCross)
            }).toThrow();
        })

    });

    describe('the fail function', () => {

        test('durability of the item is decreased by 5 if the item`s enhancement is between 0 and 14', () => {
            expect(enhancer.fail(Ghostwalker).durability).toEqual(95);
        })

        test('durability of the item is decreased by 10 if the item`s enhancement is greater than 14', () => {
            expect(enhancer.fail(Lacerator).durability).toEqual(90);
        })
    });

    describe('the repair function', () => {
        test('restore the item`s durability', () => {
            expect(enhancer.repair(Elven).durability).toEqual(100);
        })
    })
});