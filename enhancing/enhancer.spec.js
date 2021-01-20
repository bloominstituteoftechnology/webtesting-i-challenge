const enhancer = require('./enhancer.js');

describe('enhancing system for a game', ()=>{
    it('tests for item enhancement success', ()=>{
    const data = {enhancement: 1 }
    const res = enhancer.success(data)
    expect(res).toEqual({ enhancement: 2})
    expect(data).toEqual({ enhancement: 1})
    })

    it('tests for item enhancement failure', ()=>{
        let item1= {name: "item1", enhancement: 14, durability: 100}
        let item2= {name: "item2", enhancement: 15, durability: 100}
        let item3= {name: "item3", enhancement: 18, durability: 100}
        let lessThan = {name: "item1", enhancement: 14, durability: 95 };
        let lessThanOrEqual = {name: "item2", enhancement: 15, durability: 90 };
        let moreThan = {name: "item3", enhancement: 17, durability: 90 };
        // const res = enhancer.fail(data)
        expect(enhancer.fail(item1)).toEqual(lessThan)
        expect(enhancer.fail(item2)).toEqual(lessThanOrEqual)
        expect(enhancer.fail(item3)).toEqual(moreThan)

    })

    it('tests for item repair', ()=>{
            let item= {name: "item", enhancement: 14, durability: 90 }
            let repaired= {name: "item", enhancement: 14, durability: 100 }
            expect(enhancer.repair(item)).toEqual(repaired)
    })
})