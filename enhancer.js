module.exports = {
    success: (item) => {
        if (typeof item.name !== 'string') throw new TypeError();
        if (typeof item.enhancement !== 'string') throw new TypeError();

        if (['+15', 'PRI', 'DUO', 'TRI', 'TET', 'PEN'].indexOf(item.enhancement) !== -1) {
            if (item.durability < 10) throw new Error('Durability too low for enhancement level');
        } else {
            if (item.durability < 25) throw new Error('Durability too low for enhancement level');
        }

        item.name = item.name.trim();
        let index = item.name.indexOf(']');
        if (index !== -1) item.name = item.name.slice(index+1).trim();

        if (item.enhancement === 'PRI') {
            item.enhancement = 'DUO';
            item.name = `[${item.enhancement}] ${item.name}`;
        } else if (item.enhancement === 'DUO') {
            item.enhancement = 'TRI';
            item.name = `[${item.enhancement}] ${item.name}`;
        } else if (item.enhancement === 'TRI') {
            item.enhancement = 'TET';
            item.name = `[${item.enhancement}] ${item.name}`;
        } else if (item.enhancement === 'TET') {
            item.enhancement = 'PEN';
            item.name = `[${item.enhancement}] ${item.name}`;
        } else if (Number(item.enhancement) < 15) {
            item.enhancement = '+' + (Number(item.enhancement) + 1);
            item.name = `[${item.enhancement}] ${item.name}`;
        } else if (Number(item.enhancement) === 15) {
            item.enhancement = 'PRI';
            item.name = `[${item.enhancement}] ${item.name}`;
        }
        return item;
    },

    fail: (item) => {
        let n = Number(item.enhancement);
        if (item.type === 'armor' && n !== NaN && n <= 5) {
            throw new Error('Cannot fail for armor type and enhancement 5 or lower');
        } else if (item.type === 'weapon' && n !== NaN && n <= 7) {
            throw new Error('Cannot fail for weapon type and enhancement 7 or lower');
        }

        if (n !== NaN && n < 15) {
            item.durability -= 5;
        } else {
            item.durability -= 10;
        }

        if (item.durability < 0) item.durability = 0;

        let name = item.name.trim();
        let index = name.indexOf(']');
        if (index !== -1) name = name.slice(index+1).trim();

        if (item.enhancement === 'PEN') {
            item.enhancement = 'TET';
            item.name = `[${item.enhancement}] ${name}`;
        } else if (item.enhancement === 'TET') {
            item.enhancement = 'TRI';
            item.name = `[${item.enhancement}] ${name}`;
        } else if (item.enhancement === 'TRI') {
            item.enhancement = 'DUO';
            item.name = `[${item.enhancement}] ${name}`;
        } else if (item.enhancement === 'DUO') {
            item.enhancement = 'PRI';
            item.name = `[${item.enhancement}] ${name}`;
        } else if (item.enhancement === 'PRI') {
            item.enhancement = '+15';
            item.name = `[${item.enhancement}] ${name}`;
        }

        return item;
    },

    repair: (item) => {
        item.durability = 100;
        return item;
    }
}