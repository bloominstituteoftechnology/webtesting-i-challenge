const {fail, get, repair, succeed} = require('./enhancer.js');
// test away!
describe( "enhancer.js", ()=>{
    describe("fail()", () => {
        it("returns a new item with durability decreased by 5", ()=> {
            expect(fail({ name: "failure", enhancement: 14, durability: 100})).toEqual({
                name: "failure", enhancement:14, durability:95
            });
        });
    it("returns a new item with durability decreased by 10", ()=>{
        expect(fail({name: "fail1", enhancement: 15, durability: 100})).toEqual({
            name: "fail1",
            enhancement: 15,
            durability:90
        });
    });
    it ("returns a new item with enhancement decreased by 1 and durability decreased by 1", ()=>{
        expect (
            fail({ name: "failure2", enhancement: 17, durability: 100})
        ).toEqual({ name: "failure2", enhancement:16, durability: 99});
    });
});

describe("get()", ()=>{
    it("returns a new item with no modification if enhancement is 0", ()=>{
        expect(get({ name: "checkmark", enhancement: 0, durability:10})).toEqual({
            name: "checkmark",
            enhancement: 0,
            durability: 10
        });
    });
});
describe("succeed()", ()=>{
    it("returns new item with same enhancement value", ()=>{
        expect({ name: "Success", enhancement: 20, durability:100}).toEqual({
            name: "Success",
            enhancement:20,
            durability: 100
        });
    });
    it("returns new item with enhancement value + 1", ()=>{
        expect(succeed({ name: "supersuccess", enhancement: 15, durability: 100})).toEqual({
            name: "supersuccess",
            enhancement: 16,
            durability: 100
        });
    });
});
});
