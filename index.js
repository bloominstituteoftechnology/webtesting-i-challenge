

success = (item) => {
    testItem = {
        beforeName: item.beforeName,
        name: `[+${item.enhancement+1}] ${item.beforeName}`,
        type: item.type,
        durability: item.durability,
        enhancement: item.enhancement+1
    }
    if (item.enhancement === 15) {
        testItem.name = `[PRI] ${item.beforeName}`,
        testItem.enhancement = `PRI`
    } else if (item.enhancement === 'PRI') {
        testItem.name = `[DUO] ${item.beforeName}`,
        testItem.enhancement = 'DUO'
    } else if (item.enhancement === 'DUO') {
        testItem.name = `[TRI] ${item.beforeName}`,
        testItem.enhancement = 'TRI'
    } else if (item.enhancement === 'TRI') {
        testItem.name = `[TET] ${item.beforeName}`,
        testItem.enhancement = 'TET'
    } else if (item.enhancement === 'TET' || item.enhancement === 'PEN') {
        testItem.name = `[PEN] ${item.beforeName}`,
        testItem.enhancement = 'PEN'
    }
    return testItem;
}

fail = (item) => {

}

repair = (item) => {

}

module.exports = {
    success,
    fail,
    repair
}