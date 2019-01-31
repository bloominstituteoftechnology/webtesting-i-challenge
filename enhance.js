const success = item => {
    if (typeof item.name !== "string"
        || typeof item.durability !== "number"
        || typeof item.enhancement !== "number"
        || item.enhancement > 20
        || item.enhancement < 0
        || item.durability > 100
        || item.durability < 0
        || (item.type !== "weapon" && item.type !== "armor")) {
        return {error: "Malformed item data"}
    } else if (item.enhancement === 20) {
        return {error: "Cannot enhance an item above level 20 (PEN)"}
    }

    let newItem = item;

    newItem.enhancement++;

    //get name without enhancement number prefix
    let baseName = "";
    if (item.name.charAt(0) === "[") {
        nameArr = item.name.split(" ");
        for (let i = 1; i < nameArr.length; i++) {
            baseName += nameArr[i];
            if (i !== nameArr.length - 1) {
                baseName += " ";
            }
        }
    } else {
        baseName = item.name;
    }

    if (newItem.enhancement <= 15) {
        newItem.name = `[+${newItem.enhancement}] ` + baseName;
    } else {
        let titleArr = ["PRI", "DUO", "TRI", "TET", "PEN"];
        newItem.name = `[${titleArr[newItem.enhancement-16]}] ` + baseName;
    }

    return newItem;
};

const fail = item => {

};

const repair = item => {

};

module.exports = {
    success, fail, repair
}