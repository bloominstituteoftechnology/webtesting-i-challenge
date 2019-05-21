const enhancer = require('./enhancer.js');
// test away!

// created object for test
const myItem = {
	name: 'hammer',
	durability: 85,
	enhancement: 10
};

const myItemAtEnhancement20 = {
	name: 'hammer',
	durability: 85,
	enhancement: 20
};

describe('enhancer.js', () => {
	describe('repair() method', () => {
		it('should return a durability of 100', () => {
			// passing in myItem into the repair method and storing it in newItemObject.
			const newItemObject = enhancer.repair(myItem);

			expect(newItemObject.durability).toBe(100);
			// below you can call a method/property immediately from a function
			// expect(enhancer.repair(myItem).durability).toBe(100);
		});
		it('should return a enhancement of +1 with succeed', () => {
			// expected result with succeed is enhancement + 1
			let expected = myItem.enhancement + 1;
			// if enhancement is more than 20 set it to 20
			if (expected > 20) {
				expected = 20;
			}
			expect(enhancer.succeed(myItem).enhancement).toBe(expected);
			expect(enhancer.succeed(myItemAtEnhancement20).enhancement).toBe(20);
		});
		it('should return a durability decreased by 5 when enhancement is < 15', () => {
			expect(enhancer.fail(myItem).durability).toBe(80);
		});
		it('should return a durability decreased by 10 when enhancement is >= 15', () => {
			expect(enhancer.fail(myItemAtEnhancement20).durability).toBe(75);
		});
		it('should return a enhancement decreased by 1 when enhancement is > 16', () => {
			expect(enhancer.fail(myItemAtEnhancement20).enhancement).toBe(19);
		});
	});
});
