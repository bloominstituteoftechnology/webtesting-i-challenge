module.exports ={
    success: (item) =>{

    },

    fail: (item) =>{
        if(item.enhancement>= 0 && item.enhancement <=14){
            item.durability = item.durability-5;

        }else if(item.enhancement>14 || item.enhancement === 'PRI'|| item.enhancement === 'DUO'|| item.enhancement === 'TRI'|| item.enhancement === 'TET'|| item.enhancement === 'PEN'){
            item.durability = item.durability-10;
        }

        return item;

    },

    repair: (item) =>{

    },


}