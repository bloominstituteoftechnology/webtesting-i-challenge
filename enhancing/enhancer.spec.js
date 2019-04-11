const enhancer = require('./enhancer.js');
// test away!

let item = {
    name: "Rusty Sword",
    enhancement: 0,
    durability: 10
  }

  //enhancer test suite
  describe('', () => {

    describe('the repair test', () => {

        it('returns durability of item to 100', () => {
            expect(enhancer.repair(item)).toMatchObject({
                name: "Rusty Sword",
                enhancement: 0,
                durability: 100
            });
        });
    });

    describe('the success test', () => {

        it('returns enhancement increased by 1', () => {
            expect(enhancer.succeed(item)).toMatchObject({
                name: "Rusty Sword",
                enhancement: 1,
                durability: 100
            });
        });

        it('caps at 20', () => {
            item.enhancement = 20;
            expect(enhancer.succeed(item)).toMatchObject({
                name: "Rusty Sword",
                enhancement: 20,
                durability: 100
            });
        });
    });
  })




// test('', () => {

// });


// test('', () => {

// });

// //get test
// test('', () => {

// });


//success test
//a success(item) method that accepts an item object and returns a new item object modified according to the rules defined by the client for enhancement success.

//fail test
//a fail(item) method that accepts an item object and returns a new item object modified according to the rules defined by the client for enhancement failure.
//repair test

    //a repair(item) method that accepts an item object and returns a new item with the durability restored to 100. This method is the simplest of the three and would be a good starting point on this project.

    