const {success,fail,repair} = require('./enhancer.js');
// test away!

let item = {name: "Elizabeth", durability: 5, enhancement: 10}

describe("success", () => {
    it("should return a successful test with enhancement increased by 1 if less than 20",() =>{
        let testSuccess = {name: "Elizabeth", durability: 5, enhancement: 11};
        expect(success(item)).toEqual(testSuccess)
    })
})

describe("fails", () => {
    it("should decress durability 5 less than", () => {
        let testFailOne = {name: "Elizabeth", durability: 0, enhancement: 10}
        expect(fail(item)).toEqual(testFailOne)
    })
    it("should decress durabilty by 10 if equal or greater than 15", () => {
        let itemTwo = {name: "Elizabeth", durability: 10, enhancement: 15}
        let testFailTwo = {name: "Elizabeth", durability: 0, enhancement: 15}
        expect(fail(itemTwo)).toEqual(testFailTwo)
    })
})

describe("repairs", () => {
    it("changes durability to 100" , () => {
        let testRepair = {name: "Elizabeth", durability: 100, enhancement: 10}
        expect(repair(item)).toEqual(testRepair)
    })
})