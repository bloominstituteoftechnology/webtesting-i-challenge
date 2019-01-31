'use strict';

const Enhancer = require('./index');

describe('Enhancement Suite', function () {
    it('enhancement should be no greater than 20 or PEN', () => {
        const itemMock = {
            name: "Omnipotent Blunt Weapon",
            type: "Weapon",
            durability: 10,
            enhancement: {val: 0}
        };

        let enhancer = new Enhancer(itemMock);

        expect(enhancer.enhance(5).enhancement.val).toBeLessThan(21);
    });


    it('enhancing armor up to 5 cannot fail', () => {
        const itemMock = {
            name: "Omnipotent Blunt Weapon",
            type: "Weapon",
            durability: 10,
            enhancement: {val: 0}
        };

        let enhancer = new Enhancer(itemMock);

        expect(enhancer.enhance(10).fail).not.toBe(true);
    });
});

