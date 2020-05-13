module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  // return { ...item };
  const { enhancement } = item;

  if (item.enhancement >= 0 && item.enhancement < 20) {
    const newEnhancement = enhancement + 1;
    return { ...item, enhancement: newEnhancement };
  } else if (item.enhancement === 20) {
    return { ...item, enhancement: item.enhancement };
  } else {
    return "enhancement level passed should be less than 20";
  }

} 

  function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item };
}

function get(item) {
  return { ...item };
}
