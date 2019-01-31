const enhance = require('./enhance');

const dagger = {
    baseName: 'Stilleto',
    name: 'Stilleto',
    type: 'weapon',
    durability: '100',
    enhancement: 0,
    prefix: '',
}

const sword = {
    baseName: 'Falchion',
    name: 'Falchion',
    type: 'weapon',
    durability: '100',
    enhancement: 17,
    prefix: '',
}

describe('Testing for enhancement success', () => {
    test('Testing that enhance.success returns a dagger object.', () => {
        expect(enhance.success(dagger)).toEqual(dagger);
    });
    test('Testing that enhance.success increments the enhancement key.', () => {
        expect(dagger.enhancement).toBeGreaterThan(0);
    });
    test('Testing that enhance.success alters the name with the enhancement.', () => {
        expect(dagger.name).toEqual(`[${dagger.prefix}] ${dagger.baseName}`);
    })
    
});

describe('Testing for enhancement failure', () => {
    test('Testing that enhance.fail returns a sword object.', () => {
        expect(enhance.fail(sword)).toEqual(sword);
    });
    test('Testing that enhance.fail decrements the durability.', () => {
        expect(sword.durability).toBeLessThan(100);
    });
    test('Testing that enhance.fail removes an enhancement level if its enhancement is greater than 16.', () => {
        expect(sword.enhancement).toBeLessThan(20);
    });
    test('Testing that enhance.fail alters the name with the enhancement.', () => {
        expect(sword.name).toEqual(`[${sword.prefix}] ${sword.baseName}`);
    })
});

describe('Testing enhance.repair', () => {
    test('Testing that enhance.repair returns an item object', () => {
        expect(enhance.repair(sword)).toEqual(sword);
    });
    test('Testing that enhance.repair sets the durabilty to 100.', () => {
        expect(sword.durability).toEqual(100);
    });
});

