module.exports = {
  success,
  fail,
  repair,
  get,
};

const isRequired = () => { throw new Error('An item is required'); };

function success(item = isRequired) {
  return { ...item, enhancement: (item.enhancement === 20? item.enhancement++ : item.enhancement)};
}

function fail(item) {
  const newItem = {...item}
  if (item.enhancement < 15) {
    newItem.durability -= 5
  }if (item.enhancement >= 15) {
    newItem.durability -= 10
  }if (item.enhancement > 16) {
    newItem.enhancement--
  }
  return newItem;
}

function repair(item) {
  return { ...item };
}

function get(item) {
  return { ...item };
}

// const prefectItem = {
//   name: 'Sword of the Devil King',
//   enhancement: 20,
//   durability: 85
// };
// const prefectItemMaxEnhance = {...prefectItem, enhancement: 20}
// console.log(success(prefectItem));
// console.log(success(prefectItemMaxEnhance));