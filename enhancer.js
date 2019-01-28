module.exports = {
    success,
    fail,
    repair
}

function success(item) {
    const newItem = {
        originalName: item.originalName,
        name: `[+${item.enhancement+1}] ${item.originalName}`,
        type: item.type,
        durability: item.durability,
        enhancement: item.enhancement+1
    }

    if (item.enhancement === 15) {
        newItem.name = `[PRI] ${item.originalName}`
        newItem.enhancement = 'PRI'
    } else if (item.enhancement === 'PRI') {
        newItem.name = `[DUO] ${item.originalName}`
        newItem.enhancement = 'DUO'
    } else if (item.enhancement === 'DUO') {
        newItem.name = `[TRI] ${item.originalName}`
        newItem.enhancement = 'TRI'
    } else if (item.enhancement === 'TRI') {
        newItem.name = `[TET] ${item.originalName}`
        newItem.enhancement = 'TET'
    } else if (item.enhancement === 'TET' || item.enhancement === 'PEN') {
        newItem.name = `[PEN] ${item.originalName}`
        newItem.enhancement = 'PEN'
    }

    

    return newItem;
}

function fail(item) {

}

function repair(item) {

}