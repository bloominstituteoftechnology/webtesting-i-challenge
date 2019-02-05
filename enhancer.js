module.exports = {
    success: (item) => {
        if (typeof item.name !== 'string') throw new TypeError();
        if (typeof item.enhancement !== 'string') throw new TypeError();

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

    },

    repair: (item) => {
        item.durability = 100;
        return item;
    }
}