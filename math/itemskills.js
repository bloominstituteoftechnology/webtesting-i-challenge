// module.exports = {
//     success,
//     fail,
//     repair
// }

exports.success = item => {
  if (typeof item === "object") {
  } else {
    return null;
  }
};

exports.fail = item => {;
if (typeof item === "object") {
} else {
  return null;
}
}

exports.repair = (item) => {
  if (typeof item === "object") {
    return {
      ...item,
      durability: 100
    };
  } else {
    return null;
  }
};
