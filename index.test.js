'use strict';

const enhancer = require('./index');

const item = {
    name: "Thor's Hammer",
    type: "Omnipotent Blunt Weapon",
    durability: 100,
    enhancement: 0
};


test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});