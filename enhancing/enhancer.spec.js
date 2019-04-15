const { succeed, repair, fail, get } = require('./enhancer.js');
// test away!

//accepts an item object and returns a new item with the durability restored to 100
//Repair
it('accepts an item object and returns a new item with the durability restored to 100', () =>{
    expect (repair(20).durability).toBe(100);
    expect (repair(99).durability).toBe(100);
    expect (repair(0).durability).toBe(100);
})

//Succeed
it('Adheres to MVP test conditions of Success', () =>{
    //Enhancement increases by one?
    expect(succeed(1).enhancement).toBe(2);
    //if enhancement is 20, level is not changed
    expect(succeed(20).enhancement).toBe(20);
    //Durability isn't changed
    expect(succeed(40).durability).toBe(40);
    

})
