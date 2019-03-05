// module.exports = {
//     success,
//     fail,
//     repair
// }



exports.success = item => {
  if (typeof item === "object" && item.name) {
    let { name, type, durability, enhancement } = { ...item };
    if (
      (enhancement < 15 && durability < 25) ||
      (enhancement > 14 && durability < 10) ||
      (enhancement === 20)
    ) {
      return null; // returns null value for items that cannot be enhanced
    }
    return {
      ...item,
      name: `${levelnames[enhancement + 1]} ${name}`,
      enhancement: enhancement + 1,
    }
  } else {
    return null; // returns null value if item is not an object with the property name
  }
};

exports.fail = item => {
  if (typeof item === "object" && item.name) {
    let { name, type, durability, enhancement } = { ...item };
    if (
      (enhancement < 6 && type === "armor") ||
      (enhancement < 8 && type === "weapon") ||
      (enhancement < 15 && durability < 25) ||
      (enhancement > 14 && durability < 10) ||
      (enhancement === 20)
    ) {
      return null; // returns null value for items that cannot be enhanced/fail
    }
    switch (true) {
      case enhancement > 16:
        return {
          ...item,
          name: `${levelnames[enhancement - 1]} ${name}`,
          enhancement: enhancement - 1,
          durability: durability - 10
        };
      case enhancement === 15:
        return {
          ...item,
          durability: durability - 10
        };
      case enhancement < 15:
        return {
          ...item,
          durability: durability - 5
        };
    }
  } else {
    return null; // returns null value if item is not an object with the property name
  }
};

exports.repair = item => {
  if (typeof item === "object" && item.name) {
    return {
      ...item,
      durability: 100
    };
  } else {
    return null; // returns null value if item is not an object with the property name
  }
};

const levelnames = {
  1: "[+1]",
  2: "[+2]",
  3: "[+3]",
  4: "[+4]",
  5: "[+5]",
  6: "[+6]",
  7: "[+7]",
  8: "[+8]",
  9: "[+9]",
  10: "[+10]",
  11: "[+11]",
  12: "[+12]",
  13: "[+13]",
  14: "[+14]",
  15: "[+15]",
  16: "[PRI]",
  17: "[DUO]",
  18: "[TRI]",
  19: "[TET]",
  20: "[PEN]"
};