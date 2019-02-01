module.exports = {
    success:(item) => {
        item.enhancement+=1;
        let prefix = {
            16: 'PRI',
            17: 'DUO',
            18: 'TRI',
            19: 'TET',
            20: 'PEN' 
        }
        if (item.enhancement < 16) {
            item.prefix = item.enhancement;
        }
        else {
            item.prefix = prefix[item.enhancement];
        }
        item.name = `[${item.prefix}] ${item.baseName}`
        return item;
    },

     fail:(item) => {

     },

     repair:(item) => {

     }
}