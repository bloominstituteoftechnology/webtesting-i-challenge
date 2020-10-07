const { expect, it } = require('@jest/globals');
const { repair, success, fail, get } = require('./enhancer.js');
const {
	itemOne,
	itemTwo,
	itemThree,
	itemFour,
	itemFive,
	itemSix,
} = require('./items');

describe('repair(item)', () => {
	it('returns an item with durability raised to 100', () => {
		const repairedItemOne = repair(itemOne);
		expect(repairedItemOne.durability).toBe(100);
	});

	it("doesn't raise durability beyond on item with 100 durability", () => {
		const repairedItemThree = repair(itemThree);
		expect(repairedItemThree.durability).toBeLessThan(101);
	});
});

describe('success(item)', () => {
	it('raises enhancement by 1 on items with enhancement value <= 20', () => {
		const enhancedItemOne = success(itemOne);
		expect(enhancedItemOne.enhancement).toBe(13);
	});

	it("doesn't raise enhancement for items with an enhancement value of 20", () => {
		const enhancedItemTwo = success(itemTwo);
		expect(enhancedItemTwo.enhancement).not.toBe(21);
	});

	it("doesn't affect durability of items", () => {
		const enhancedItemOne = success(itemOne);
		const enhancedItemTwo = success(itemTwo);
		expect(enhancedItemOne.durability).toBe(75);
		expect(enhancedItemTwo.durability).toBe(60);
	});
});

describe('fail(item)', () => {
	it('decreases durability by 5 when items enhancement value is < 15', () => {
		const failedItemOne = fail(itemOne);
		expect(failedItemOne.durability).toBe(70);
	});

	it('decreases durability by 10 when items enhancement value is >= 15', () => {
		const failedItemFour = fail(itemFour);
		expect(failedItemFour.durability).toBe(75);
	});

	it('decreases enhancement by 1 if items enhancement value >= 16', () => {
		const failedItemTwo = fail(itemTwo);
		const failedItemFive = fail(itemFive);
		expect(failedItemTwo.enhancement).toBe(19);
		expect(failedItemFive.enhancement).toBe(16);
	});

	it('doesnt decrease enhancement on items with value less than 17', () => {
		const failedItemThree = fail(itemThree);
		const failedItemFour = fail(itemFour);
		expect(failedItemThree.enhancement).toBe(4);
		expect(failedItemFour.enhancement).toBe(16);
	});
});

describe('get()', () => {
	it('returns item with new name showing enhancement', () => {
		const enhancedItemThree = get(itemThree);
		const enhancedItemFive = get(itemFive);

		expect(enhancedItemThree.name).toEqual('[+4] Iron Mail');
		expect(enhancedItemFive.name).toEqual('[+17] Long Bow');
	});

	it('returns original item name if item not enhanced', () => {
		const unchangedItem = get(itemSix);
		expect(unchangedItem.name).toBe('Boring Sword');
	});
});
