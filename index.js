'use strict';

class Enhancer {
    constructor(item) {
        this.item = item;
    }

    enhance(amt) {
        this.item.enhancement.val += amt;

        if (this.item.enhancement.val > 20) {
            this.item.enhancement.val -= this.item.enhancement.val - 20;
        }

        if (this.item.durability < 20 && this.item.enhancement.val >= 0 && this.item.enhancement.val <= 14) {
            return this.fail(amt);
        }

        if (this.item.durability < 0 && this.item.enhancement.val >= 15 && this.item.enhancement.val <= 20) {
            return this.fail(amt);
        }

        return this.success();
    }

    success() {
        return this.item;
    };

    fail(amt) {
        if (this.item.type === 'Armor') {
            if (amt > 5) {
                this.item.fail = true;
            }
        }
        if (this.item.type === 'Weapon') {
            if (amt > 7) {
                this.item.fail = true;
            }
        }

        return this.item;
    };

    repair() {

    }
}

module.exports = Enhancer;
