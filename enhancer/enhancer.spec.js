const { repair, success, fail } = require('./enhancer');

const armor = {
	name: 'Lambda Shield',
	type: 'armor',
	durability: 98,
	enhancement: 0,
	displayName: '[+3] Lambda Shield',
};
const weapon = {
	name: 'Lambda Sword',
	type: 'weapon',
	durability: 98,
	enhancement: 3,
	displayName: '[+3] Lambda Sword',
};

const enhanceLevels = {
	1: '[+1]',
	2: '[+2]',
	3: '[+3]',
	4: '[+4]',
	5: '[+5]',
	6: '[+6]',
	7: '[+7]',
	8: '[+8]',
	9: '[+9]',
	10: '[+10]',
	11: '[+11]',
	12: '[+12]',
	13: '[+13]',
	14: '[+14]',
	15: '[+15]',
	16: '[PRI]',
	17: '[DUO]',
	18: '[TRI]',
	19: '[TET]',
	20: '[PEN]',
};

describe('Repair Item', () => {
	describe('Armor Durability', () => {
		it('should restore durability to 100', () => {
			expect(repair(armor)).toMatchObject({ ...armor, durability: 100 });
		});
		it('should restore durability to 100', () => {
			expect(repair(weapon)).toMatchObject({ ...weapon, durability: 100 });
		});
		it('should return the object', () => {
			expect(repair({ ...weapon, durability: 100 })).toMatchObject({
				...weapon,
				durability: 100,
			});
		});
	});
	describe('Type incorrect', () => {
		it('should return null', () => {
			expect(repair({ ...weapon, type: 'dog' })).toBeNull();
			expect(repair({ ...weapon, type: '' })).toBeNull();
			expect(repair({ ...weapon, type: [] })).toBeNull();
			expect(repair({ ...armor, type: 'dog' })).toBeNull();
			expect(repair({ ...armor, type: '' })).toBeNull();
			expect(repair({ ...armor, type: [] })).toBeNull();
		});
	});
});
describe('Success', () => {
	describe('Increment armor enhancement', () => {
		expect(success(armor)).toMatchObject({
			...armor,
			enhancement: armor.enhancement + 1,
			displayName: `${enhanceLevels[armor.enhancement + 1]} ${armor.name}`,
		});
	});
	describe('Increment weapon enhancement', () => {
		expect(success(weapon)).toMatchObject({
			...weapon,
			enhancement: weapon.enhancement + 1,
			displayName: `${enhanceLevels[weapon.enhancement + 1]} ${weapon.name}`,
		});
	});
});
describe('Fail', () => {
	describe('the durability decreased by 5 if the item’s enhancement is between 0 and 14.', () => {
		it('durability decreases by 5 if enhancement is between 0 and 14', () => {
			// Arrange (setup)
			const item = {
				enhancement: 14,
				durability: 85,
			};

			// Act - execute the SUT
			const actual = fail(item);

			// Assert
			expect(actual.durability).toBe(80);
		});
	});
	describe('the durability decreased by 5 if the item’s enhancement is between 0 and 14.', () => {
		it('durability decreases by 10 if enhancement is greater than 14', () => {
			// Assert
			expect(
				fail({
					enhancement: 15,
					durability: 85,
				}).durability
			).toBe(75);
		});
	});
	describe('the durability decreased by 5 if the item’s enhancement is between 0 and 14.', () => {
		it('should not affect item if enhancement is less than 15 and the durability is below 25', () => {
			const item = {
				enhancement: 14,
				durability: 24,
			};

			expect(fail(item)).toEqual(item);
		});
	});

	describe('enhancement greater than 16 > enhancement decreases by 1', () => {
		it('should decrease enhancement if item is enhanced greater than 16', () => {
			const item = { enhancement: 18 };

			const actual = fail(item);

			expect(actual.enhancement).toBe(17);
		});
	});
});
