const enhancer = require('./enhancer.js');
// test away!
describe('Success function', () => {
    const f = enhancer.success;
    const prefectItem = {
        name: 'Sword of the Devil King',
        enhancement: 15,
        durability: 85
    };
    const prefectItemMaxEnhance = {...prefectItem, enhancement: 20}
    it('Should receive an object', () => {
        expect(typeof f).toBe('function');
    })
    it('Does enhance go up?', () => {
        expect(f(prefectItem)).toMatchObject({...prefectItem, enhancement: prefectItem.enhancement++});
    })
    it('Should Not go over 20', () => {
        console.log(f(prefectItemMaxEnhance));
        expect(f(prefectItemMaxEnhance)).toMatchObject(prefectItemMaxEnhance);
    })
    it('Should NOT affect durability', () => {
        expect(f(prefectItem).durability).toEqual(prefectItem.durability)
    })
})

describe('Fail function', () => {
    const f = enhancer.fail;
    const prefectItem = {
        name: 'Sword of the Devil King',
        enhancement: 5,
        durability: 85
    };
    const perfectItemHighEnhance = {...prefectItem, enhancement: 20}
    const prefectItem15Enhancement = {...prefectItem, enhancement: 15}
    it('Should receive an object', () => {
        expect(typeof f).toBe('function');
    })
    it('Enhancement > 5, should decrease durability by 5', () => {
        expect(f(prefectItem).durability).toEqual(prefectItem.durability - 5);
    })
    it('Enhancement >= 15, should decrease durability by 10', () => {
        expect(f(perfectItemHighEnhance).durability).toEqual(perfectItemHighEnhance.durability - 10);
    })
    it('Edge case: Enhance:15 and durability -10 and no ehance decrease', () => {
        expect(f(prefectItem15Enhancement).durability).toEqual(prefectItem15Enhancement.durability -10);
        expect(f(prefectItem15Enhancement).enhancement).toEqual(prefectItem15Enhancement.enhancement);

    })
})