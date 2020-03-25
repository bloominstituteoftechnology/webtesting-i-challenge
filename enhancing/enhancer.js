module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed({name, enhancement, durability}) {
  return {
    name,
    enhancement: Math.min(enhancement, 20),
    durability
  };
}

function fail({name, enhancement, durability}) {
  return {
    name,
    enhancement: enhancement > 16 ? enhancement-1 : enhancement,
    durability: Math.max(durability - (enhancement < 15 ? 5 : 10), 0)
  };
}

function repair({name, enhancement, durability}) {
  return {
    name,
    enhancement,
    durability: 100
  };
}

function get({name, enhancement, durability}) {
  return {
    name: enhancement === 0 ? name : `[+${enhancement}] ${name}`,
    enhancement,
    durability
  };
}
