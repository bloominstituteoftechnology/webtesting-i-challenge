module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  return item.enhancement < 20
  ? { ...item, enhancement: item.enhancement + 1 }
  : {...item};
}

function fail(item) {
  const {enhancement, durability} = item;
  return enhancement > 16
  ? {...item, enhancement: enhancement-1,
  durability: durability-1}: enhancement >= 15
  ? {...item, durability: durability -10}
  :{ ...item, durability: durability -5};
}

function repair(item) {
  return item.durability === 100
  ?{ ...item }: {...item, durability: 100};
}

function get(item) {
  return item.enhancement === 0 
 ? { ...item }
 :{ ...item, name: `[+${item.enhancement}] ${item.name}`};
}
