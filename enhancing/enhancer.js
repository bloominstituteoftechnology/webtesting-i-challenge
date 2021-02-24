

const success = (item) => {
    if (item.enhancement < 20) {
        return { ...item, enhancement: item.enhancement + 1 };
    } else {
        return { ...item };
    }
};

const fail = (item) => {
    if (item.enhancement <= 15) {
        return { ...item, durability: item.durability - 5 };
    } else {
        return { ...item, 
                durability: item.durability - 10,
                enhancement: item.enhancement - 1 };
    }
};

const repair = (item) => {
    return { ...item, durability: 100 };
};
module.exports = {
  success,
  fail,
  repair,
};
