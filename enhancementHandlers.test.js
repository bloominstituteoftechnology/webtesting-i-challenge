const game = require('./enhancentHandlers.js');
const { sword, MaxDagger, dagger, chestplate, brokenWeapon, vest, lvl15, lvl16, lvl17, lvl18, lvl19 } = require('./items.js');

describe('the enhance object', () => {
    describe('the success function', () => {
        it('should increase display name', () => {
            const result = game.success(sword);
            expect(result.name).toEqual('[+4] bronze longsword');
        });

        it('weapon less than 7', () => {
            const result = game.success(sword);
            expect(result.enhancement).toEqual('+4');
        });

        it('armor less than 5', () => {
            const result = game.success(chestplate);
            expect(result.enhancement).toEqual('+1');
        });

        it('Tests midlevel item', () => {
            const result = game.success(dagger);
            expect(result.enhancement).toEqual('+13')
        });
        
        it('Broken weapon lower than 20 Durability fails with enhancement under 15', () => {
            expect(() => {
                game.success(brokenWeapon)
            }).toThrow();
        });

        it('Broken weapon lower than 10 Durability fails with enhancement over 14', () => {
            expect(() => {
                game.success(highBrokenWeapon)
            }).toThrow();
        });

        it('Weapon is already max enhancement', () => {
            expect(() => {
                game.success(MaxDagger)
            }).toThrow();
        })

        it('Weapon enhance to PEN', () => {
            const result = game.success(lvl19);
            expect(result.enhancement).toEqual('PEN');
        });

        it('Weapon enhance to TET', () => {
            const result = game.success(lvl18);
            expect(result.enhancement).toEqual('TET');
        });

        it('Weapon enhance to TRI', () => {
            const result = game.success(lvl17);
            expect(result.enhancement).toEqual('TRI');
        });

        it('Weapon enhance to DUO', () => {
            const result = game.success(lvl16);
            expect(result.enhancement).toEqual('DUO');
        });

        it('Weapon enhance to PRI', () => {
            const result = game.success(lvl15);
            expect(result.enhancement).toEqual('PRI');
        });
    });

    describe('the fail function', () => {

    });

    describe('the repair function', () => {
        it('should increase durability to 100', () => {
            const result = game.repair(sword);
            expect(result.durability).toEqual(100);
        });
    });
})