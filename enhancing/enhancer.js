module.exports = {
	succeed,
	fail,
	repair,
	get
};

function succeed(item) {
	const enhancement = item.enhancement;
	if (enhancement < 20) {
		return { ...item, enhancement: enhancement + 1 };
	} else {
		return { ...item };
	}
}

function fail(item) {
	// grab the property wanted to change
	let durability = item.durability;
	let enhancement = item.enhancement;

	// created an if/else statement without returns to capture all the changes
	if (enhancement < 15) {
		durability -= 5;
	} else {
		durability -= 10;
	}
	if (enhancement > 16) {
		enhancement -= 1;
	}
	// returning the new object with changes to both enhancement and durability
	return { ...item, enhancement: enhancement, durability: durability };
}

function repair(item) {
	const durability = item.durability;
	if (durability < 100) {
		return { ...item, durability: 100 };
	} else {
		return { ...item };
	}
}

function get(item) {
	return { ...item };
}
