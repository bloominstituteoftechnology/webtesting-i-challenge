module.exports = {
    success: (item) => {
        const itemName = item.unenhancedName;
        if (item.enhancement <= 14 && item.durability < 25) {
            throw new Error('Durability is below 25; item cannot be enhanced');
        }
        if (item.enhancement >= 15 && item.durability < 10) {
            throw new Error('Durability is below 10, item cannot be enhanced');
        }
        if (item.enhancement === 20) {
            throw new Error('Item enhancement is at max');
        }
        if (item.enhancement >= 0 && item.enhancement < 15) {
            item.enhancement += 1;
            item.name = `[+${item.enhancement}] ${itemName}`
        } else if (item.enhancement === 15) {
            item.enhancement += 1;
            item.name = `[PRI] ${itemName}`
        } else if (item.enhancement === 16) {
            item.enhancement += 1;
            item.name = `[DUO] ${itemName}`
        } else if (item.enhancement === 17) {
            item.enhancement += 1;
            item.name = `[TRI] ${itemName}`
        } else if (item.enhancement === 18) {
            item.enhancement += 1;
            item.name = `[TET] ${itemName}`
        } else if (item.enhancement === 19) {
            item.enhancement += 1;
            item.name = `[PEN] ${itemName}`
        }
        return item;
    },
    fail: (item) => {
        const itemName = item.unenhancedName;
        if (item.type === 'armor' && item.enhancement <= 5) {
            throw new Error('Armor enhancement is level 5 or under, cannot fail');
        }
        if (item.type === 'weapon' && item.enhancement <= 7) {
            throw new Error('Weapon enhancement is level 7 or under, cannot fail');
        }
        if (item.enhancement >= 0 && item.enhancement <= 14) {
            item.durability -= 5;
        } else if (item.enhancement > 14 && item.enhancement <= 16) {
            item.durability -= 10;
        } else if (item.enhancement === 17) {
            item.enhancement -= 1;
            item.durability -= 10;
            item.name = `[PRI] ${itemName}`
        } else if (item.enhancement === 18) {
            item.enhancement -= 1;
            item.durability -= 10;
            item.name = `[DUO] ${itemName}`
        } else if (item.enhancement === 19) {
            item.enhancement -= 1;
            item.durability -= 10;
            item.name = `[TRI] ${itemName}`
        } else if (item.enhancement === 20) {
            item.enhancement -= 1;
            item.durability -= 10;
            item.name = `[TET] ${itemName}`
        }
        return item;
    },
    repair: (item) => {
        item.durability = 100;
        return item;
    }
}