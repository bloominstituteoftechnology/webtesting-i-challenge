const cl = console.log;

const success = item => {
  return item;
};

const fail = item => {
  return item;
};

const repair = item => {
  return item;
};

const sword = {
  name: "Excalibur",
  type: "weapon",
  durability: 60, // max of 100
  enhancement: "14" // avail [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,PRI,DUO,TRI,TET,PEN]
};

const helmet = {
  name: "Perseus' Helm",
  type: "armor",
  durability: 90,
  enhancement: "PRI"
};

module.exports = {
  success,
  fail,
  repair
};
