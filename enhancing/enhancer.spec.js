const enhancer = require('./enhancer.js');
// test away!
describe("testing",()=>{
    it ("repair item",()=>{
        item={name:"nandhini",durability:60,enhancement:60}
        expect(enhancer.repair(item)).toEqual({ name:"nandhini",durability:100,enhancement:60 })
    })
})