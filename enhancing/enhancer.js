module.exports = {
	success,
	fail,
	repair,
	get,
};

function success(item) {
	const enhancement =
		item.enhancement < 20 ? item.enhancement + 1 : item.enhancement;
	return {
		...item,
		enhancement,
	};
}

function fail(item) {
	const enhancement =
		item.enhancement <= 16 ? item.enhancement : item.enhancement - 1;
	const durability =
		item.enhancement >= 15 ? item.durability - 10 : item.durability - 5;
	return { ...item, enhancement, durability };
}

function repair(item) {
	return { ...item, durability: 100 };
}

function get(item) {
	const name =
		item.enhancement === 0 ? item.name : `[+${item.enhancement}] ${item.name}`;
	return { ...item, name };
}
