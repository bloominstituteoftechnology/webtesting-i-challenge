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

  //console.log(item.enhancement)
  if (item.enhancement < 20) {
    item.enhancement = item.enhancement + 1;
  }
  else {
    throw new Error("Enhancement value greater than 20")
  }

  return { ...item };
}

/*
- If the item's enhancement is less than 15, the durability of the item is decreased by 5.
- If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
- If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).*/
function fail(item) {
  if (item.enhancement < 15) {
    item.durability = item.durability - 5;
  }
  else if (item.enhancement > 16) {

    item.enhancement = item.enhancement - 1
  }
  else if (item.enhancement = 15) {
    item.durability = item.durability - 10
    console.log(item.durability, "hi")
  }
  return { ...item };
}
// a `repair(item)` method that accepts an `item` object and **returns a new item** with the durability restored to 100. 
//This method is the simplest of the three and would be a **good starting point** on this project.
function repair(item) {
  item.durability = 100;
//  console.log(item.durability)
  return { ...item };
}

function get(item) {
  return { ...item };
}
