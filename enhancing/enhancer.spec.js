const enhancer = require('./enhancer.js');
// test away!

let item = {
    name: "Rusty Sword",
    enhancement: 0,
    durability: 100
  }

  //enhancer test suite
  describe('', () => {

    describe('the repair test', () => {
        let item = {
            name: "Rusty Sword",
            enhancement: 0,
            durability: 100
          }

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

    describe('the fail test', () => {

        it('returns durability decreased by 5', () => {
            item.enhancement = 5;
            item.durability = 100;
            expect(enhancer.fail(item)).toMatchObject({
                name: "Rusty Sword",
                enhancement: 5,
                durability: 95
            });
        });

        it('returns durability decreased by 10', () => {
            item.enhancement = 15;
            item.durability = 100;
            expect(enhancer.fail(item)).toMatchObject({
                name: "Rusty Sword",
                enhancement: 15,
                durability: 90
            });
        });

        it('returns enhancement level minus one if enhancement is greater than 16 and decreases durability by 10', () => {
            item.enhancement = 17;
            item.durability = 100;
            expect(enhancer.fail(item)).toMatchObject({
                name: "Rusty Sword",
                enhancement: 16,
                durability: 90
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

    