module.exports = {
   success,
   fail,
   repair,
};

function success(item) {
   if (item.durability < 25 && item.level <= 14) {
      throw new Error(
         `The ${item.type}'s durability is too low to be enhanced.`
      );
   }

   if (item.durability < 10 && item.level >= 15) {
      throw new Error(
         `The ${item.type}'s durability is too low to be enhanced.`
      );
   }

   if (item.level >= 0 && item.level < 15) {
      item.level++;
      item.name = `[+${item.level}] ${item.name}`;
   } else if (item.level === 15) {
      item.level++;
      item.name = `PRI ${item.name}`;
   } else if (item.level === 16) {
      item.level++;
      item.name = `DUO ${item.name}`;
   } else if (item.level === 17) {
      item.level++;
      item.name = `TRI ${item.name}`;
   } else if (item.level === 18) {
      item.level++;
      item.name = `TET ${item.name}`;
   } else if (item.level === 19) {
      item.level++;
      item.name = `PEN ${item.name}`;
   }
   return item;
}

function fail(item) {
   if (item.type == 'weapon' && item.level <= 7) {
      throw new Error('A weapon level 7 and under cannot fail an enhancement.');
   }

   if (item.type == 'armor' && item.level <= 5) {
      throw new Error('An armor level 5 and under cannot fail an enhancement.');
   }

   if (item.level >= 0 && item.level <= 14) {
      item.durability -= 5;
   } else if (item.level >= 15 && item.level <= 16) {
      item.durability -= 10;
   } else if (item.level === 17) {
      item.level--;
      item.durability -= 10;
      item.name = `PRI ${item.name}`;
   } else if (item.level === 18) {
      item.level--;
      item.durability -= 10;
      item.name = `DUO ${item.name}`;
   } else if (item.level === 19) {
      item.level--;
      item.durability -= 10;
      item.name = `TRI ${item.name}`;
   }
   return item;
}

function repair(item) {
   item.durability = 100;
   return item;
}
