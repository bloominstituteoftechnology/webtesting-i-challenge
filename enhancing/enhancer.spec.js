const enhancer = require('./enhancer.js');
const randomItem = require("./randomItem");
// test away!


describe("Testing enhancer", () => {
    let testStack = []

    for(var x = 0 ;x<10;x++){
        testStack.push(randomItem.itemBuilder());
    }

    it("succeeds", function(){
        expect(enhancer.succeed(testStack[1]))
        .toEqual({...testStack[1],enhancement:1});

        expect(enhancer.succeed({...testStack[4],enhancement:20}))
        .toEqual({...testStack[4],enhancement:20});

        expect(enhancer.succeed({...testStack[8],enhancement:19}))
        .toEqual({...testStack[8],enhancement:20});

        expect(enhancer.succeed({...testStack[0],enhancement:13}))
        .toEqual({...testStack[0],enhancement:14});

        expect(enhancer.succeed({...testStack[5],enhancement:15}))
        .toEqual({...testStack[5],enhancement:16});
    })

    it("fails", function(){
        expect(enhancer.fail(testStack[1]))
        .toEqual({...testStack[1],durability:95});

        expect(enhancer.fail({...testStack[0],enhancement:20}))
        .toEqual({...testStack[0],durability:90,enhancement:19});

        expect(enhancer.fail({...testStack[7],durability:20,enhancement:10}))
        .toEqual({...testStack[7],durability:15,enhancement:10});

        expect(enhancer.fail({...testStack[5],durability:10,enhancement:17}))
        .toEqual({...testStack[5],durability:0,enhancement:16});
    })


})
