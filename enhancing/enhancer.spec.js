const enhancer = require("./enhancer.js");
// test away!

const item = {
	name: "sword",
	durability: 40,
	enhancement: 25,
};

describe("enhancer unit test", () => {
	it("repair", () => {
		const newObj = enhancer.repair(item);
		expect(newObj.durability).toBe(100);
	});

	it("success", () => {
		const newObj = enhancer.success(item);
		expect(newObj.enhancement).toBe(26);
	});

	it("fail", () => {
		const newObj = enhancer.fail(item);
		expect(newObj.enhancement).toBe(25);
		expect(newObj.durability).toBe(30);
	});

	// it("get", () => {
	// 	expect(calculator.get()).toBe();
	// });
});
