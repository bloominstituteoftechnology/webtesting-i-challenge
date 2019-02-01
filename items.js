//file containing items used in enhancement functions


    const sword = {
        name: 'sword',
        type: 'weapon',
        durability: 100,
        enhancement: '+6'
    }
    const upgraded_sword = {
        name: 'upgraded_sword',
        type: 'weapon',
        durability: 100,
        enhancement: '+7'
    }
  
    
    const nunchucks = {
        name: 'nunchucks',
        type: 'weapon',
        durability: 50,
        enhancement: 'PEN'
    }


    
    const gloves = {
        name: 'gloves',
        type: 'armor',
        durability: 15,
        enhancement: '+10'
    }

    const goggles = {
        name: 'goggles',
        type : 'armor',
        durability: -1,
        enhancement: 'TRI'
    }

    const shin_guards = {
        name: 'shin_guards',
        type : 'armor',
        durability: 21,
        enhancement: 10
    }

    module.exports = {
        sword, upgraded_sword, nunchucks, gloves, goggles, shin_guards
    }