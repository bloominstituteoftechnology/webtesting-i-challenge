module.exports = {
	repair,
	success,
	fail,
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

function repair(item) {
	if (item.type === 'armor' || item.type === 'weapon') {
		if (item.durability < 100) {
			item = { ...item, durability: 100 };
		} else {
			return item;
		}

		return item;
	} else {
		return null;
	}
}

function success(item) {
	const { name, type, durability, enhancement, displayName } = { ...item };
	if (enhancement <= 19) {
		let x = enhancement + 1;
		let updatedName = `${enhanceLevels[x]} ${name}`;
		console.log({ name, type, durability, enhancement: x, displayName: updatedName });
		return { name, type, durability, enhancement: x, displayName: updatedName };
	}
}

function fail(item) {}
