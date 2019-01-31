const enhancer = require('./enhancer.js');

const item1 = {
    name: 'Longsword',
    type: 'weapon',
    durability: 100,
    enhancement: 0
}

const item2 = {
    name: '[TET] Longsword',
    type: 'weapon',
    durability: 70,
    enhancement: 19
}

const item3 = {
    name: '[PEN] Longsword',
    type: 'weapon',
    durability: 80,
    enhancement: 20
}

const enhancedItem1 = sucess(item1);
const failedItem1   =   failure(item1);
const enhancedItem2 = sucess(item2);
const failedItem2   =   failure(item2);
const repairedItem2 = repair(item2);
const repairedItem3 = repair(item3)

test('Enhance succeeds',    ()  =>  {
        expect(enhancedItem1.enhancement).toBe(1);
        expect(enhancedItem1.name).toBe('[+1] Longsword');
        expect(enhancedItem2.name).toBe('[PEN] Longsword');
})
