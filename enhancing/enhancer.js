module.exports = {
  succeed,
  fail,
  repair,
  get,
};
//a success(item) method that accepts an item object and returns a new item object modified according to the rules defined by the client for enhancement success.
function succeed(item) {
  return { ...item };
}
//a fail(item) method that accepts an item object and returns a new item object modified according to the rules defined by the client for enhancement failure.
function fail(item) {
  return { ...item };
}
//a repair(item) method that accepts an item object and returns a new item with the durability restored to 100. This method is the simplest of the three and would be a good starting point on this project.
function repair(item) {
  return { ...item };
}
//a get() method for use when working on the stretch problem.
function get(item) {
  return { ...item };
}
