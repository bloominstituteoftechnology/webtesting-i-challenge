// module.exports = {
//     add,
//     multiply
// }

// exports.add = (a, b) => {
//     if (typeof a === 'number' && typeof b === 'number') {
//         return a + b;
//     }
//     else {
//         return null
//     }
// }

// exports.multiply = (a, b) => {
//     if (typeof a === 'number' && typeof b === 'number') {
//         return a * b;
//     }
//     else {
//         return null
//     }
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