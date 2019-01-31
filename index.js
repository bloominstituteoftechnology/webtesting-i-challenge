'use strict';

class enhancer {
    constructor(item) {
        this.item = item
    }

    enhance(amt) {
        this.item.enhancement.val += amt;
        return this.item;
    }

    success() {
        return item;
    };

    fail() {

    };

    repair() {

    }
}

module.exports = enhancer;
