const enhancer = require('./enhancer.js');
describe('enhancer unit test', () => {
        it("succeeds", () => {
		expect(enhancer.succeed(param)).toBe(0)	
    })
    	it("fails", () => {
		expect(enhancer.fail(param)).toBe(0)	
    })
    	it("repairs", () => {
		expect(enhancer.repair(param)).toBe(0)	
    })
    	it("gets", () => {
		expect(enhancer.get(param)).toBe(0)	
	})
    })

// test away!


