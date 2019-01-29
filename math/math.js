//production code
module.exports = {
    add, 
    multiply
}

function add(a, b) {
    if(typeof a === 'string' || typeof b === 'string') {
        throw new Error('Input Numbers only please')
    }
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

//test Structure

test('some test', () => {
    //arrange- setup
    const item = {
        name: 'Lambda Shield',
        durability: 90,
        enhancement: 8,
        
    }
})