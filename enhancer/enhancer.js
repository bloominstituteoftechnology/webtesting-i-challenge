const enhanceLevels = {
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

  repair = (item) => {
      return item.durability = 100;
  };

  failure = (item) => {
      if (item.enhancement >= 0 && item.enhancement <= 14) {
          item.durability -= 5;
      }
      return item.durability;
  };

  success = (item) => {
      item.enhancement += 1;
      item.name = enhanceLevels[item.enhancement]
      return item;
  };


  module.exports = {
      enhanceLevels,
      repair,
      success,
      failure
  };