const enhancer = require('./enhancer');
const items = require('./items');

describe("enhancer object", () => {

    describe("success function", () => {

        test("item's enhancement throws error on invalid type", () => {
            let item = {
                name: 'Weapon',
                type: 'weapon',
                durability: 100,
                enhancement: 0
            }

            expect(() => {
                enhancer.success(item)
            }).toThrowError(TypeError);
        });

        test("item's enhancement increases by 1 through series", () => {
            let item = {
                name: 'Weapon',
                type: 'weapon',
                durability: 100,
                enhancement: '0'
            }

            item = enhancer.success(item);
            expect(item.enhancement).toBe('+1');
            item = enhancer.success(item);
            expect(item.enhancement).toBe('+2');
            item = enhancer.success(item);
            expect(item.enhancement).toBe('+3');
            item = enhancer.success(item);
            expect(item.enhancement).toBe('+4');
            item = enhancer.success(item);
            expect(item.enhancement).toBe('+5');
            item = enhancer.success(item);
            expect(item.enhancement).toBe('+6');
            item = enhancer.success(item);
            expect(item.enhancement).toBe('+7');
            item = enhancer.success(item);
            expect(item.enhancement).toBe('+8');
            item = enhancer.success(item);
            expect(item.enhancement).toBe('+9');
            item = enhancer.success(item);
            expect(item.enhancement).toBe('+10');
            item = enhancer.success(item);
            expect(item.enhancement).toBe('+11');
            item = enhancer.success(item);
            expect(item.enhancement).toBe('+12');
            item = enhancer.success(item);
            expect(item.enhancement).toBe('+13');
            item = enhancer.success(item);
            expect(item.enhancement).toBe('+14');
            item = enhancer.success(item);
            expect(item.enhancement).toBe('+15');
            item = enhancer.success(item);
            expect(item.enhancement).toBe('PRI');
            item = enhancer.success(item);
            expect(item.enhancement).toBe('DUO');
            item = enhancer.success(item);
            expect(item.enhancement).toBe('TRI');
            item = enhancer.success(item);
            expect(item.enhancement).toBe('TET');
            item = enhancer.success(item);
            expect(item.enhancement).toBe('PEN');
        });

        test("item's enhancement does not go over max", () => {
            let item = {
                name: '[PEN] Weapon',
                type: 'weapon',
                durability: 100,
                enhancement: 'PEN'
            }

            expect(enhancer.success(item).enhancement).toBe('PEN');
        });

        test("item's name throws error on invalid type", () => {
            let item = {
                name: 0,
                type: 'weapon',
                durability: 100,
                enhancement: '0'
            }

            expect(() => {
                enhancer.success(item)
            }).toThrowError(TypeError);
        });
        
        test("item's name changes correctly through series", () => {
            let item = {
                name: 'Weapon',
                type: 'weapon',
                durability: 100,
                enhancement: '0'
            }

            item = enhancer.success(item);
            expect(item.name).toBe('[+1] Weapon');
            item = enhancer.success(item);
            expect(item.name).toBe('[+2] Weapon');
            item = enhancer.success(item);
            expect(item.name).toBe('[+3] Weapon');
            item = enhancer.success(item);
            expect(item.name).toBe('[+4] Weapon');
            item = enhancer.success(item);
            expect(item.name).toBe('[+5] Weapon');
            item = enhancer.success(item);
            expect(item.name).toBe('[+6] Weapon');
            item = enhancer.success(item);
            expect(item.name).toBe('[+7] Weapon');
            item = enhancer.success(item);
            expect(item.name).toBe('[+8] Weapon');
            item = enhancer.success(item);
            expect(item.name).toBe('[+9] Weapon');
            item = enhancer.success(item);
            expect(item.name).toBe('[+10] Weapon');
            item = enhancer.success(item);
            expect(item.name).toBe('[+11] Weapon');
            item = enhancer.success(item);
            expect(item.name).toBe('[+12] Weapon');
            item = enhancer.success(item);
            expect(item.name).toBe('[+13] Weapon');
            item = enhancer.success(item);
            expect(item.name).toBe('[+14] Weapon');
            item = enhancer.success(item);
            expect(item.name).toBe('[+15] Weapon');
            item = enhancer.success(item);
            expect(item.name).toBe('[PRI] Weapon');
            item = enhancer.success(item);
            expect(item.name).toBe('[DUO] Weapon');
            item = enhancer.success(item);
            expect(item.name).toBe('[TRI] Weapon');
            item = enhancer.success(item);
            expect(item.name).toBe('[TET] Weapon');
            item = enhancer.success(item);
            expect(item.name).toBe('[PEN] Weapon');
        });

        test("cannot be enhanced when durability below 25 and enhancement 14 or lower", () => {
            let item = {
                name: "[+14] Weapon",
                type: 'weapon',
                durability: 24,
                enhancement: '+14'
            }

            expect(() => {
                enhancer.fail(item)
            }).toThrow();
        });

        test("cannot be enhanced when durability below 10 and enhancement 15 or higher", () => {
            let item = {
                name: "[+15] Weapon",
                type: 'weapon',
                durability: 9,
                enhancement: '+15'
            }

            expect(() => {
                enhancer.fail(item)
            }).toThrow();
        });



    });

    describe("fail function", () => {

        test("unable to fail if enhancement 5 or under for armor type", () => {
            let item = {
                name: "[+5] Armor",
                type: 'armor',
                durability: 100,
                enhancement: '+5'
            }

            expect(() => {
                enhancer.fail(item)
            }).toThrow();
        });

        test("unable to fail if enhancement 7 or under for weapon type", () => {
            let item = {
                name: "[+7] Weapon",
                type: 'weapon',
                durability: 100,
                enhancement: '+7'
            }

            expect(() => {
                enhancer.fail(item)
            }).toThrow();
        });

        test("decreases durability by 5 when enhancement under 15", () => {
            let item = {
                name: '[+14] Weapon',
                type: 'weapon',
                durability: 100,
                enhancement: '+14'
            }

            expect(enhancer.fail(item).durability).toBe(95);
        });

        test("decreases durability by 10 when enhancement over or equal to 15", () => {
            let item = {
                name: '[+15] Weapon',
                type: 'weapon',
                durability: 100,
                enhancement: '+15'
            }

            expect(enhancer.fail(item).durability).toBe(90);
        });

        test("doesn't decrease durability below 0", () => {
            let item = {
                name: '[+15] Weapon',
                type: 'weapon',
                durability: 0,
                enhancement: '+15'
            }

            expect(enhancer.fail(item).durability).toBe(0);
        });

        test("decreases enhancement by 1 for PRI, DUO, TRI, TET, PEN", () => {
            let item = {
                name: '[PEN] Weapon',
                type: 'weapon',
                durability: 100,
                enhancement: 'PEN'
            }

            item = enhancer.fail(item);
            expect(item.enhancement).toBe('TET');
            expect(item.name).toBe('[TET] Weapon');
            item = enhancer.fail(item);
            expect(item.enhancement).toBe('TRI');
            expect(item.name).toBe('[TRI] Weapon');
            item = enhancer.fail(item);
            expect(item.enhancement).toBe('DUO');
            expect(item.name).toBe('[DUO] Weapon');
            item = enhancer.fail(item);
            expect(item.enhancement).toBe('PRI');
            expect(item.name).toBe('[PRI] Weapon');
            item = enhancer.fail(item);
            expect(item.enhancement).toBe('+15');
            expect(item.name).toBe('[+15] Weapon');
        });

        test("doesn't decrease enhancement below 15", () => {
            let item = {
                name: '[+15] Weapon',
                type: 'weapon',
                durability: 100,
                enhancement: '+15'
            }

            expect(enhancer.fail(item).enhancement).toBe('+15');
            expect(enhancer.fail(item).name).toBe('[+15] Weapon');
        });

    });

    describe("repair function", () => {

        test("repairs durability to 100", () => {
            let item = {
                name: 'Weapon',
                type: 'weapon',
                durability: 0,
                enhancement: '0'
            }

            expect(enhancer.repair(item).durability).toBe(100);
        });

    });
});