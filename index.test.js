'use strict';

const Enhancer = require('./index');

const item = {
    name: "Thor's Hammer",
    type: "Omnipotent Blunt Weapon",
    durability: 100,
    enhancement: {val: 0}
};


test('enhancement should be no greater than 20 or PEN', () => {
    let enhancer = new Enhancer(item);

    expect(enhancer.enhance(5).enhancement.val).toBeLessThan(21);
});

/*
test('enhancing armor up to 5 cannot fail', () => {
    let enhancer = new Enhancer(item);

    enhancer.enhance(item).enhancement.val.toBeLessThan(21);
});*/
