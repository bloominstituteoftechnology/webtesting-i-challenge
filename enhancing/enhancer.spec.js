const enhancer = require('./enhancer.js');
// test away!

const testItem1= {
    name: 'iron sword of testing',
    durability: 75,
    enhancement: 3
}
const testItem2= {
    name: 'steel sword of testing',
    durability: 50,
    enhancement: 15
}
const testItem3= {
    name: 'diamond sword of testing',
    durability: 60,
    enhancement: 18
}


describe('repair', ()=>{
    it('should return item with durability of 100',
    ()=>{
        expect(()=>{
            enhancer.repair(testItem1).toBe(testItem1.durability==100)
        })
    })
})

describe('enhancer',()=>{
    describe('success', ()=>{ 
        it('successful enhancement',
        ()=>{
            expect(()=>{
                originalValue = testItem1.enhancement
                enhancer.succeed(testItem1).toBe(testItem1.enhancement == (originalValue + 1))
            })

        })
    })
    describe('failure cases',()=>{
        it('failure case 1', ()=>{
            expect(()=>{
                originalValue = testItem1.durability
                enhancer.fail(testItem1).toBe(testItem1.durability == (originalValue - 5))
            })
        })
        it('failure case 2', ()=>{
            expect(()=>{
                originalValue = testItem2.durability
                enhancer.fail(testItem2).toBe(testItem2.durability == (originalValue - 10))
            })
        })
        it('failure case 3', ()=>{
            expect(()=>{
                originalValue1 = testItem3.durability
                originalValue2 = testItem3.enhancement
                enhancer.fail(testItem3).toBe(testItem3.durability == (originalValue - 10) && testItem3.enhancement == (originalValue2 - 1))

            })
        })
    })
    
})