
module.exports = {
    item
}

const sword = [

    {
        name: "Silver Fang",
        type: "weapon",
        durability: 100,
        enhancement: 0,
        status: "normal"
    },
    {
        name: "Golden Wrath",
        type: "weapon",
        durability: 100,
        enhancement: 0,
        status: "legendary"
    }
]

const shield = [

    {
        name: "Vampire's Shield",
        type: "armor",
        durability: 100,
        enhancement: 0,
        status: "normal"
    },

    {
        name: "Dracula's Leech",
        type: "armor",
        durability: 100,
        enhancement: 0,
        status: "legendary"
    }
]


const enhancer = {

    //Armors enhancement to 5 must succeed
    //Weapons enhancement to 7 must succeed
    //durability 0 - 100
    //durability > 20 when enhancement 0 - 14
    //enhancement 0 - 20


    //enhancement + 1
    //when enhancement 1 - 15 "normal"
    //when enhancement 16 - PRI
    //etc...
    success: function (item) {
        let newItem = {...item}
    },

    
    //Armors enhancement to 5 must succeed
    //Weapons enhancement to 7 must succeed
    //durability 0 - 100
    //durability > 20 when enhancement 0 - 14
    //enhancement 0 - 20

    //durability - 5 if enhancement 0 - 14
    //durability - 10 if enhancement > 14
    //if enhancement > 16, enhancement - 1
    //item.name 
    failure: function (item) {
        let newItem = {...item}
    },

    //Armors enhancement to 5 must succeed
    //Weapons enhancement to 7 must succeed
    //durability 0 - 100
    //durability > 20 when enhancement 0 - 14
    //enhancement 0 - 20


    //item.durability = 100
    repair: function(item) {
        let newItem = {...item}
    }
}

const typeChecker = (item) => {
    if(item.type = armor){

    }
}

const durabilityChecker = (item) => {
    if(0 <= item.durability <= 100){
        if(20 <= item.durability <= 100)
        return true
    }
}



//Enhancement Checker
//enhancement 0 - 20
//enhancement 0 not displayed
//enhancement 1 - 15 ('normalItem'), each enhancement is added to name
//enhancement 16 - PRI
//enhancement 17 - DUO
//enhancement 18 - TRI
//enhancement 19 - TET
//enhancement 20 - PEN

const enhancementChecker = (item) => {
    if (0 < item.enhancement <= 15){

    }
}



console.log(enhancer.success());