const { success } = require('./enhancer.js');
const enhancer = require('./enhancer.js');
// test away!
describe("testing",()=>{
    it ("repair item",()=>{
        item={name:"nandhini",durability:60,enhancement:60}
        expect(enhancer.repair(item)).toEqual({ name:"nandhini",durability:100,enhancement:60 })
    })
  //  a `success(item)` method that accepts an `item` object and **returns a new item** 
  //object modified according to the rules defined by the client for enhancement success.

    it("sucess item",()=>{
      item= {name:"nandhini",durability:60,enhancement:1}
        expect(enhancer.success(item)).toEqual({ name:"nandhini",durability:60,enhancement:2 })
    })
    it("sucess item fail",()=>{
        item={name:"nandhini",durability:60,enhancement:20}
        expect(()=>enhancer.success(item)).toThrow()
        //expect(() => calculator.quotient(1, 0)).toThrow()
    })
    it("fail",()=>{
        item={name:"nandhini",durability:60,enhancement:15}
        expect(enhancer.fail(item)).toEqual({ name:"nandhini",durability:50,enhancement:15 })
    })
})