// module.exports = {
//     success,
//     fail,
//     repair
// }

exports.success = (item) => {

}

exports.fail = (item) => {
    
}

exports.repair = (item) => {
    
    return {
        ...item,
        durability: 100
    }
}