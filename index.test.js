'use strict';

const Enhancer = require('./index');

describe('Enhancement Suite', function () {
    it('enhancement should be no greater than 20 or PEN', () => {
        const itemMock = {
            name: "Omnipotent Blunt Weapon",
            type: "Weapon",
            durability: 100,
            enhancement: {val: 0}
        };

        let enhancer = new Enhancer(itemMock);

        expect(enhancer.enhance(99999).enhancement.val).toBeLessThan(21);
    });

    it('enhancing an item with durability less than 20 when enhancement level is between 0 and 14 should fail', () => {
        const itemMock = {
            name: "Omnipotent Blunt Weapon",
            type: "Weapon",
            durability: 19,
            enhancement: {val: 1}
        };

        let enhancer = new Enhancer(itemMock);

        expect(enhancer.enhance(8).fail).toBe(true);
    });

    it('enhancing an item with durability less than 0 when enhancement level is between 15 and 20 (TET) should fail', () => {
        const itemMock = {
            name: "Omnipotent Blunt Weapon",
            type: "Weapon",
            durability: -1,
            enhancement: {val: 10}
        };

        let enhancer = new Enhancer(itemMock);

        expect(enhancer.enhance(8).fail).toBe(true);
    });


    it('enhancing armor up to 5 cannot fail', () => {
        const itemMock = {
            name: "Omnipotent Blunt Weapon",
            type: "Weapon",
            durability: 10,
            enhancement: {val: 0}
        };

        let enhancer = new Enhancer(itemMock);

        expect(enhancer.enhance(5).fail).not.toBe(true);
    });

});

