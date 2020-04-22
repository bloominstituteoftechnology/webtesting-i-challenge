module.exports={
    itemBuilder,
}

let materials = ["Iron","Copper","Steel"];
let weaponType = ["Lance","Axe","Sword","GreatSword","Pyke"]

function itemBuilder(){
    return{
        name:`${materials[Math.floor(Math.random()*materials.length)]} ${weaponType[Math.floor(Math.random()*weaponType.length)]}`,
        durability:100,
        enhancement:0,
    }
}











