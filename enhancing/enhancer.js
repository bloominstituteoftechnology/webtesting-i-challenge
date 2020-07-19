module.exports = {
	repair,
  success,
  fail
};

// const item = {
// 	name: "sword",
// 	durability: 40,
// 	enhancement: 5,
// };

function repair(item) {
	return {
		...item,
		durability: 100,
	};
}

function success(item) {
	if (item.enhancement === 20) {
		return { ...item };
	} else {
		return { ...item, enhancement: item.enhancement + 1 };
	}
}

function fail(item) {
if (item.enhancement < 15) {
  return {...item, durability: item.durability - 5}
} else if (item.enhancement >= 15) {
  return {...item, durability: item.durability - 10}
} else if(item.enhancement > 16) {
  return {...item, enhancement: item.enhancement - 1}
}
}

// function get(item) {
// 	return { ...item };
// }
