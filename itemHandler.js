const numtable = {16:'PRI', 17:'DUO', 18:'TRI', 19:'TET', 20:'PEN'}


module.exports ={
    success: (item) =>{
        item.enhancement = item.enhancement+1;


        
            if(item.enhancement>15){
                item.display = `[${numtable[item.enhancement]}] ${item.name}`
            }else {
                item.display = `[${item.enhancement}] ${item.name}`
            }

        


        

        return item;
    },

    fail: (item) =>{
        if(item.enhancement>= 0 && item.enhancement <=14){
            item.durability = item.durability-5;

        }else if(item.enhancement>14 || item.enhancement === 'PRI'|| item.enhancement === 'DUO'|| item.enhancement === 'TRI'|| item.enhancement === 'TET'|| item.enhancement === 'PEN'){
            item.durability = item.durability-10;
        }

        if(item.enhancement>15){
            item.enhancement-=1;
            if(item.enhancement>15){
                item.display = `[${numtable[item.enhancement]}] ${item.name}`
            }

        }

        if(item.enhancement<16){
            item.display = `[${item.enhancement}] ${item.name}`
        }
        



        return item;

    },

    repair: (item) =>{
        item.durability = 100;

        return item;
    },


}