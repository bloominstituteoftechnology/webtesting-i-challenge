const cl = console.log;

const enhTree = {
  0: "",
  1: "[+1] ",
  2: "[+2] ",
  3: "[+3] ",
  4: "[+4] ",
  5: "[+5] ",
  6: "[+6] ",
  7: "[+7] ",
  8: "[+8] ",
  9: "[+9] ",
  10: "[+10] ",
  11: "[+11] ",
  12: "[+12] ",
  13: "[+13] ",
  14: "[+14] ",
  15: "[+15] ",
  16: "[PRI] ",
  17: "[DUO] ",
  18: "[TRI] ",
  19: "[TET] ",
  20: "[PEN] "
};

const success = item => {
  const modItem = Object.assign({}, item);
  if (modItem.enhancement < 20) {
    modItem.enhancement += 1;
  }
  setName(modItem);
  return modItem;
};

const fail = item => {
  const modItem = Object.assign({}, item);
  const lowLimit = modItem.type === "armor" ? 5 : 7;
  const enhancement = modItem.enhancement;
  if (enhancement <= lowLimit) {
    setName(modItem);
    return modItem;
  }
  if (enhancement < 15) {
    if (modItem.durability < 25) {
      setName(modItem);
      return modItem;
    }
    modItem.durability -= 5;
    setName(modItem);
    return modItem;
  } 
  modItem.durability -= 10;
  modItem.enhancement =
    enhancement > 16 ? modItem.enhancement - 1 : modItem.enhancement;
  setName(modItem);
  cl(modItem)
  return modItem;
};

const repair = item => {
  const modItem = Object.assign({}, item);
  return modItem;
};

const setName = item => {
  item.name = `${enhTree[item.enhancement]}${item.blandName}`;
};

// const sword = {
//   name: "",
//   blandName: "Excalibur",
//   type: "weapon",
//   durability: 60, // max of 100
//   enhancement: 14 // avail [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,PRI,DUO,TRI,TET,PEN]
// };

// const helmet = {
//   name: "",
//   blandName: "Perseus' Helm",
//   type: "armor",
//   durability: 90,
//   enhancement: 16
// };

module.exports = {
  success,
  fail,
  repair
};
