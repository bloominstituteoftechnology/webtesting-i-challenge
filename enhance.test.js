const enhance = require('./enhance');

 const dagger = {
    baseName: 'Stilleto',
    name: 'Stilleto',
    type: 'weapon',
    durability: '100',
    enhancement: 0,
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
        expect(dagger.name).toEqual(`[${dagger.prefix}] Stilleto`);
    })
    while(dagger.enhancement < 20) {
        enhance.success(dagger);
        console.log(dagger);
    }
})