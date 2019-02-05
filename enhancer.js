module.exports = {
    success: (item) => {

        item.enhancementCounter++;

        if (item.enhancementCounter < 16) {
            item.enhancement = `+${item.enhancementCounter}`;
            item.name = `[+${item.enhancementCounter}]${item.name}`;
        } else if (item.enhancementCounter < 21 && item.enhancementCounter > 15) {
            if (item.enhancementCounter === 16) {
                item.enhancement = 'PRI'
            } else if (item.enhancementCounter === 17) {
                item.enhancement = 'DUO'
            } else if (item.enhancementCounter === 18) {
                item.enhancement = 'TRI'
            } else if (item.enhancementCounter === 19) {
                item.enhancement = 'TET'
            } else if (item.enhancementCounter === 20) {
                item.enhancement = 'PEN'
            }
            item.name = `[${item.enhancement}]${item.name}`;
        } else if (item.enhancementCounter > 20) {
            throw new Error('exceeded max enhancement');
        }

        return item;
    },

    fail: (item) => {
        if (item.enhancementCounter < 15) {
            item.durability = item.durability - 5;
        } else if (item.enhancementCounter >= 15) {
            item.durability = item.durability - 10;
        }
        return item;
    },

    repair: (item) => {
        item.durability = 100;
        return item;
    }
}