const { displayName } = require('./items.js');


module.exports = {

    // - a `success(item)` method that accepts an `item` object and returns a new `item` object modified according to the rules defined by the client 
    // for enhancement success.
    success: (item) => {
        const newItem = {};
        newItem.name = item.name;
        newItem.type = item.type;
        newItem.durability = item.durability;
        newItem.enhancement = item.enhancement;

        // Enchancement Levels: 1 - 15, PRI, DUO, TRI, TET, PEN
        if(item.enhancement < 15) {
            const score = Number(item.enhancement.slice(1));
            newItem.enhancement = '+' + (score + 1);
            newItem.name = displayName(newItem);
            
            // If the item's enhancement is 14 or lower, the item cannot be enhanced if the durability is below 25.
            if(item.durability < 20) {
                throw new Error('Item durability is too low.  Please repair item and then try again. ');
            };
            
            // Weapon level < 7 = 100% success
            if (item.type === 'weapon' && item.enhancement < '+7') {
                return newItem;
            };

            //Armor level < 5 = 100% success
            if (item.type === 'armor' && item.enhancement < '+5' ) {
                return newItem;
            };

            return newItem;
        }

        // If the item's enhancement is 15 or higher, the item cannot be enhanced if the durability is below 10.
        if(item.enhancement === '+15' || item.enhancement === 'PEN' || item.enhancement === 'TET' || 
            item.enhancement === 'TRI' || item.enhancement === 'DUO' || item.enhancement === 'PRI') {
            if(item.durability < 10){
                throw new Error('Item durability is too low.  Please repair item and then try again. ');
            };


            if(item.enhancement === 'PEN') {
                throw new Error('Item is already fully upgraded.');
            };

            if(item.enhancement === 'TET') {
                newItem.enhancement = 'PEN';
                newItem.name = displayName(newItem);
                return newItem;
            }

            if(item.enhancement === 'TRI') {
                newItem.enhancement = 'TET';
                newItem.name = displayName(newItem);
                return newItem;
            }

            if(item.enhancement === 'DUO') {
                newItem.enhancement = 'TRI';
                newItem.name = displayName(newItem);
                return newItem;
            }

            if(item.enhancement === 'PRI') {
                newItem.enhancement = 'DUO';
                newItem.name = displayName(newItem);
                return newItem;
            }

            if(item.enhancement === '+15') {
                newItem.enhancement = 'PRI';
                newItem.name = displayName(newItem);
                return newItem;
            }
        }
    },

    // - a `fail(item)` method that accepts an `item` object and returns a new `item` object modified according to the rules defined by the client 
    // for enhancement failure.

    // fail: (item) => {

    // },

    fail: (item) => {
        const newItem = {};
        newItem.name = item.name;
        newItem.type = item.type;
        newItem.durability = item.durability;
        newItem.enhancement = item.enhancement;

        if(item.enhancement < 15) {
            newItem.durability = newItem.durability - 5;
            return newItem;
        };

        if(item.enhancement === '+15' || item.enhancement === 'PEN' || item.enhancement === 'TET' || 
            item.enhancement === 'TRI' || item.enhancement === 'DUO' || item.enhancement === 'PRI') {
                newItem.durability = newItem.durability - 10;
                
                        if(item.enhancement === 'TET') {
                            newItem.enhancement = 'TRI';
                            newItem.name = displayName(newItem);
                            return newItem;
                        }
                
                        if(item.enhancement === 'TRI') {
                            newItem.enhancement = 'DUO';
                            newItem.name = displayName(newItem);
                            return newItem;
                        }
                
                        if(item.enhancement === 'DUO') {
                            newItem.enhancement = 'PRI';
                            newItem.name = displayName(newItem);
                            return newItem;
                        }
                return newItem;
        };
      },

// - The durability of the item is decreased by 5 if the item's `enhancement` is between 0 and 14.
// - The durability of the item is decreased by 10 if the item's `enhancement` is greater than 14.
// - If the item's enhancement level is greater than 16 (DUO, TRI, TET), the enhancement level decreases by 1 (a DUO item would go back to PRI on failure).
// - The name is updated to reflect the new enhancement level if it was decreased.

    // - a `repair(item)` method that accepts an `item` object and returns a new `item` with the durability restored to 100.

    repair: (item) => {
        const newItem = {};
        newItem.name = item.name;
        newItem.type = item.type;
        newItem.enhancement = item.enhancement;
        newItem.durability = 100;
        return newItem;
    },
}