const enhancer = require('./enhancer.js');

describe("all", () => {
    it("should throw with an incorrect object shape", () => {
        const a = {name: 2, enhancement: 0, durability: 10};
        const b = {name: "test", enhancement: "0", durability: 10};
        const c = {name: "test", enhancement: 0, durability: "10"};
        const d = {name: "test", enhancement: 0, durability: 10};
        for (func of Object.values(enhancer)) {
            expect(() => func(a)).toThrow();
            expect(() => func(b)).toThrow();
            expect(() => func(c)).toThrow();
            expect(() => func(d)).not.toThrow()
        }
    })
})

describe("repairing", () => {
    it("should change only durability to 100", () => {
        const a = {name: "test", enhancement: 0, durability: 10};
        const b = {name: "test", enhancement: 0, durability: 100};
        expect(enhancer.repair(a)).toEqual(b);
    })
})

describe("succeeding", () => {
    it("should increase enhancement by 1 if < 20", () => {
        const a = {name: "test", enhancement: 9, durability: 10};
        const b = {name: "test", enhancement: 10, durability: 10};
        expect(enhancer.success(a)).toEqual(b);
    })

    it("should limit enhancement at 20", () => {
        const a = {name: "test", enhancement: 20, durability: 10};
        const b = {name: "test", enhancement: 50, durability: 10};
        const c = {name: "test", enhancement: 20, durability: 10};
        expect(enhancer.success(a)).toEqual(c);
        expect(enhancer.success(b)).toEqual(c);
    })
})

describe("failure", () => {
    it("should decrease durability by 5 if enhancement < 15", () => {
        const a = {name: "test", enhancement: 10, durability: 10};
        const b = {name: "test", enhancement: 10, durability: 5};
        expect(enhancer.fail(a)).toEqual(b);
    })

    it("should decrease durability by 10 if enhancement >= 15", () => {
        const a = {name: "test", enhancement: 15, durability: 42};
        const b = {name: "test", enhancement: 15, durability: 32};
        let res_1 = enhancer.fail(a);

        const c = {name: "test", enhancement: 20, durability: 42};
        const d = {name: "test", enhancement: 20, durability: 32};
        let res_2 = enhancer.fail(c);

        expect(res_1.durability).toEqual(b.durability);
        expect(res_2.durability).toEqual(d.durability);
    })

    it("should decrease enhancement by 1 if >= 16", () => {
        const a = {name: "test", enhancement: 16, durability: 42};
        const b = {name: "test", enhancement: 15, durability: 32};
        let res_1 = enhancer.fail(a);

        const c = {name: "test", enhancement: 15, durability: 42};
        const d = {name: "test", enhancement: 15, durability: 32};
        let res_2 = enhancer.fail(c);

        expect(res_1.enhancement).toEqual(b.enhancement);
        expect(res_2.enhancement).toEqual(d.enhancement);
    })

    it("should never decrease durability to below 0", () => {
        const a = {name: "test", enhancement: 16, durability: 3};
        const b = {name: "test", enhancement: 15, durability: 0};
        let res_1 = enhancer.fail(a);

        expect(res_1.durability).toEqual(b.durability);
    })
})

describe("getting display name", () => {
    it("should prepend the enhancement level if > 0", () => {
        const a = {name: "test", enhancement: 16, durability: 3};
        const b = {name: "test", enhancement: 16, durability: 3, display_name: "+[16] test"};
        let res_1 = enhancer.get(a);

        expect(res_1.display_name).toEqual(b.display_name)
    })

    it("should not prepend the enhancement level if == 0", () => {
        const a = {name: "test", enhancement: 0, durability: 3};
        const b = {name: "test", enhancement: 0, durability: 3, display_name: "test"};
        let res_1 = enhancer.get(a);

        expect(res_1.display_name).toEqual(b.display_name)
    })
})