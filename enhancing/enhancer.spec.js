const enhancer = require('./enhancer.js');
describe('enhancer unit test', () => {

	it("test the succeed function ", () => {
		expect(enhancer.succeed({ name: 'object1', durability: 60,  enhancement: 19 })).toEqual({ name: 'object1', durability: 60, enhancement: 20})	
	})
		it(" tests the fail function", () => {
			expect(enhancer.fail({ name: 'object2', durability: 70, enhancement: 15 })).toEqual({ name: 'object2', durability: 60, enhancement: 15 })
		})	
    
	it('tests the repair function', () => {
		expect(enhancer.repair({
			name:'object3',
			durability: 60,
			enhancement: 10,
		})).toEqual({
			name:'object3',
			durability: 100,
			enhancement: 10,
		})	
		})
    // 	it(" tests the get function", () => {
	// 	expect(enhancer.get(param)).toBe(0)	
	// })
    })

// test away!


