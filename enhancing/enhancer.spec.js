const enhancer = require("./enhancer.js");
// test away!

describe("enhancer unit test", () => {
	it("repair", () => {
		expect(enhancer.repair()).toBe();
	});

	it("success", () => {
		expect(calculator.succeed()).toBe();
	});

	it("fail", () => {
		expect(calculator.fail()).toBe();
	});

	it("get", () => {
		expect(calculator.get()).toBe();
	});
});
