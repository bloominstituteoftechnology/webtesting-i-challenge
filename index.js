module.exports = {

    success: (item) => {
        console.log('enhancement success!');
        return item.enhancement = item.enhancement + 1;
    },

    failure: (item) => {
        console.log('enhancement failed!');
        if(item.enhancement >= 0 && item.enhancement <= 14){
            return item.durability = item.durability - 5;
        }
        if(item.enhancement > 14) {
            return item.durability = item.durability - 10;
        }
        if(item.enhancement > 16){
            return item.enhancement = item.enhancement - 1;
        }
        if(item.enhancement <= 14 && item.durability < 25){
            throw new Error('Unable to enhance. Raise durability above 25 and try again.');
        }
        if(item.enhancement >=15 && item.durability < 10){
            throw new Error('Unable to enhance. Raise durability above 10 and try again.');
        }
    },

    repair: (item) => {
        console.log('repair action inacted');
        if(item.durability !== 100){
            console.log('repair complete!');
            return item.durability = 100;
        } else {
            console.log('unessessary repair blocked');
            throw new Error(`${item.name} doesnt currently need repair!`);
        }
    },

};