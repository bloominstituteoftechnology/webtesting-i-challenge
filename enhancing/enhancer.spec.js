const enhancer = require('./enhancer.js');
// test away!

const genesisCart = {
    name: 'Genesis Game',
    durability: 55,
    enhancement: 14
};

const snesCart = {
    name: 'SNES Game',
    durability: 100,
    enhancement: 9
};

describe('sample test', () => {
    it('sample test', () => {
        expect(true).toBe(true);
    });
});

describe('Repair Test', () => {
    it('Durability should be 100', () => {
        expect(() => {
            enhancer.repair(genesisCart).toBe(genesisCart.durability === 100);
        });
    });
});

describe('Success Test', () => {
    it('Enhancement successful', () => {
        expect(() => {
            enhancer.success(genesisCart).toBeEqual(snesCart);
        });
    });
});

describe('Failure Test', () => {
    it('Enhancement failed', () => {
        expect(() => {
            enhancer.failure(genesisCart).toEqual(genesisCart);
        });
    });
});