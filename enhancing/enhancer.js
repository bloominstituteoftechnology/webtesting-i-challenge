module.exports = {
	succeed,
	fail,
	repair,
	get,
};

function succeed(item) {
	const result = {};
	return { ...item };
}

function fail(item) {
	const result = {};
	return { ...item };
}

function repair(item) {
	const result = {};
	return { ...item };
}

function get(item) {
	return { ...item };
}
