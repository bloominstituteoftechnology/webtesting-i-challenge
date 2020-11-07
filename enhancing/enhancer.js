module.exports = {
  success,
  fail,
  repair,
  get,
};
/*
- Items have `name`, `durability` and `enhancement`.
- The item's `enhancement` it's a number from 0 to 20.
- The item's `durability` it's a number from 0 to 100.*/

function success(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}
// a `repair(item)` method that accepts an `item` object and **returns a new item** with the durability restored to 100. 
//This method is the simplest of the three and would be a **good starting point** on this project.
function repair(item) {
  item.durability=100;
console.log(item.durability)

  return { ...item};
}

function get(item) {
  return { ...item };
}
