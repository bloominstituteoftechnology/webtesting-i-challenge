const sword = {
    name: 'bronze longsword',
    type: 'weapon',
    durability: 70,
    enhancement: '+3',
}
const dagger = {
    name: 'silver dagger',
    type: 'weapon',
    durability: 100,
    enhancement: '+12'
}

const MaxDagger = {
    name: 'silver dagger',
    type: 'weapon',
    durability: 100,
    enhancement: 'PEN'
}
const chestplate = {
    name: 'Steel Chestplate',
    type: 'armor',
    durability: 25,
    enhancement: '+0'
}

const vest = {
    name: '[5] Bronze Vest',
    type: 'armor',
    durability: 85,
    enhancement: 'TRI',
}

const brokenWeapon = {
    name: 'Broken Broad Axe',
    type: 'weapon',
    durability: 0,
    enhancement: '+10',
}

const highBrokenWeapon = {
    name: 'Broken Long Sword',
    type: 'weapon',
    durability: 0,
    enhancement: 'PEN',
}

const lvl19 = {
    name: 'Broken Long Sword',
    type: 'weapon',
    durability: 100,
    enhancement: 'TET',
}

const lvl18 = {
    name: 'Broken Long Sword',
    type: 'weapon',
    durability: 100,
    enhancement: 'TRI',
}

const lvl17 = {
    name: 'Broken Long Sword',
    type: 'weapon',
    durability: 100,
    enhancement: 'DUO',
}

const lvl16 = {
    name: 'Broken Long Sword',
    type: 'weapon',
    durability: 100,
    enhancement: 'PRI',
}

const lvl15 = {
    name: 'Broken Long Sword',
    type: 'weapon',
    durability: 100,
    enhancement: '+15',
}

const displayName = (item) => {
    if (item.enhancement === 0) {
        return item.name;
    }
    else if (item.enhancement <= 15) {
        return `[${item.enhancement}] ${item.name}`;
    }
    else if (item.enhancement === 16) {
        return `[PRI] ${item.name}`;
    }

    else if (item.enhancement === 17) {
        return `[DUO] ${item.name}`;
    }

    else if (item.enhancement === 18) {
        return `[TRI] ${item.name}`;
    }

    else if (item.enhancement === 19) {
        return `[TET] ${item.name}`;
    }

    else if (item.enhancement === 20) {
        return `[PEN] ${item.name}`;
    }
}

module.exports = {
    sword, dagger, MaxDagger, chestplate, vest, brokenWeapon, highBrokenWeapon, displayName, lvl15, lvl16, lvl17, lvl19, lvl18
}