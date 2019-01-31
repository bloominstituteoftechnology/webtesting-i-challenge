module.exports =   {
        success:    (item)  =>  {
            let bracketIndex;
            if(item.name.includes(']')) {
                bracketIndex = item.name.indexOf(']');
            }
            item.enhancement++
            switch(item.enhancement)    {
                case 16:
                    item.name = '[PRI] ' + item.name.slice(bracketIndex + 2);
                    break;
                case 17:
                    item.name = '[DUO] ' + item.name.slice(bracketIndex + 2);
                    break;
                case 18:
                    item.name = '[TRI] ' + item.name.slice(bracketIndex + 2);
                    break;
                case 19:
                    item.name = '[TET] ' + item.name.slice(bracketIndex + 2);
                    break;
                case 20:
                    item.name = '[PEN] ' + item.name.slice(bracketIndex + 2);
                    break;
                default:
                    item.name = `[+${item.enhancement}] ` + item.name.slice(bracketIndex + 1)
            }
            return item;
        },

        failure: (item) =>  {
            return item;
        },

        repair: (item)  =>  {
            return item;
        },
}
