module.exports = {
  success,
  fail,
  repair,
  get,
};


function success(item) {
  let newEnhancer = item.enhancement;
  if(
    item.enhancement < 20 && item.enhancement >= 0) 
    {++newEnhancer}
  return { ...item, enhancement: newEnhancer };
}

function fail(item) {
  let newEnhancer = item.enhancement;
  let newDurability = item.durability;

  if(item.enhancement < 15) {
    newDurability = item.durability - 5 >=0 ? newDurability - 5 : 0
  } else {
    newDurability -= 10
  } if(item.enhancement > 16) {
    --newEnhancer
  }
  return { ...item, enhancement: newEnhancer, durability:newDurability };
}

function repair(item) {

  return  {...item, durability:100}

}

//- a `repair(item)` method that accepts an `item` object and **returns a new item** with the durability restored to 100. This method is the simplest of the three and would be a **good starting point** on this project.

// ### Items

// - Items have `name`, `durability` and `enhancement`.
// - The item's `enhancement` it's a number from 0 to 20.
// - The item's `durability` it's a number from 0 to 100.

function get(item) {
  return { ...item };
}
