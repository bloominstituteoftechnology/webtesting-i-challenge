module.exports = {
    success:(item) => {
        if (item.enhancement <= 14 && item.durability <= 25) return item;
        if (item.enhancement > 14 && item.durability <= 10) return item;

        item.enhancement+=1;
        if (item.enhancement < 20) item.enhancement = 20;
        let prefix = {
            16: 'PRI',
            17: 'DUO',
            18: 'TRI',
            19: 'TET',
            20: 'PEN' 
        }
        if (item.enhancement < 16) {
            item.prefix = item.enhancement;
        }
        else {
            item.prefix = prefix[item.enhancement];
        }
        item.name = `[${item.prefix}] ${item.baseName}`
        return item;
    },

    fail:(item) => {
        if (item.enhancement <= 14 && item.durability > 25) {
            item.durability -= 5;
        }
        else if (item.enhancement > 14 && item.durability > 10) {
            item.durability -= 10;
        }

        if (item.enhancement < 16) {
            item.enhancement -= 1;
        }

        let prefix = {
            16: 'PRI',
            17: 'DUO',
            18: 'TRI',
            19: 'TET',
            20: 'PEN' 
        }

        if (item.enhancement < 16) {
            item.prefix = item.enhancement;
        }
        else {
            item.prefix = prefix[item.enhancement];
        }
        item.name = `[${item.prefix}] ${item.baseName}`

        return item;
    },

    repair:(item) => {
        item.durability = 100;
        return item;
    }
}
