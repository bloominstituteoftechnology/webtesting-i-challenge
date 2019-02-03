const game = require('./game.js');
const { cover,jacket,chain,shield, helm } = require('./armor');
const  { hammer,arrow,axe,gun,mace,dagger,spear } = require('./weapon');


describe('Checks My Success Method', () => {

   test('It should increase the enhancement by 1', () => {
       //Arrange - set up the world here
        const item = cover;
       //Act -- wll execute your code here.
        const newItem = game.success(item);
       // Assert -- check your code here
       expect(newItem.enhancement).toBe(1);
    });

    test('It Should return a new increased enhancement if it is less than 16', () => {
        //Arrange - set up the world here
        const item = dagger;
        //Act -- wll execute your code here.
        const newItem = game.success(item);
        // Assert -- check your code here
        expect(newItem.enhancement).toBeLessThan(16);
    });

    test('The name should include the prefix "PRI" if enhancement is 16', () => {
        //Arrange - set up the world here
        const item = hammer;
        //Act -- wll execute your code here.
        const newItem = game.success(item);
        // Assert -- check your code here
        expect(newItem.name).toContain("PRI");
      });
    
      test('The name should include the prefix "DUO" if enhancement is 17', () => {
        //Arrange - set up the world here
        const item = arrow;
        //Act -- wll execute your code here.
        const newItem = game.success(item);
        // Assert -- check your code here
        expect(newItem.name).toContain("DUO");
      });

      test('The name should include the prefix "TRI" if enhancement is 18', () => {
        //Arrange - set up the world here
        const item = gun;
        //Act -- wll execute your code here.
        const newItem = game.success(item);
        // Assert -- check your code here
        expect(newItem.name).toContain("TRI");
      });
    
      test('The name should include the prefix "TET" if enhancement is 19', () => {
        //Arrange - set up the world here
        const item = axe;
        //Act -- wll execute your code here.
        const newItem = game.success(item);
        // Assert -- check your code here
        expect(newItem.name).toContain("TET");
      });
      test('It should give new name for each enhancement', () => {
            //Arrange - set up the world here
            const item = spear;
            //Act -- wll execute your code here.
            const newItem = game.success(item);
            // Assert -- check your code here
            expect(newItem.name).toBeTruthy();
            
        });
       test('It Should throw new error if enhancement is more than 20', () => {
            //Arrange - set up the world here
            const maxItem = { name: 'sicle', type: 'weapon', durability: 100, enhancement:24}
            //Act -- wll execute your code here.
            const newItem = game.success(maxItem);
            // Assert -- check your code here
            expect(newItem.message).toEqual(`Max Limit Reached`);
        });

});

describe('Checks My Failures Method', () => {

   test('The durability of the item should decreased by 5 if the items enhancement is between 0 and 14.' , () => {
           //Arrange - set up the world here
           const item = helm;
           //Act -- wll execute your code here.
           const newItem = game.fail(maxItem);
           // Assert -- check your code here
           expect(newItem.enhancement).toBeLessThan(15);
           expect(newItem.durability).toEqual(95);
           
   });

   test('The durability of the item should decreased by 10 if the items enhancement is greater than 14.' , () => {
           //Arrange - set up the world here
           const item = chain;
           //Act -- wll execute your code here.
           const newItem = game.fail(maxItem);
           // Assert -- check your code here
           expect(newItem.enhancement).toBeLessThan(16);
           expect(newItem.durability).toEqual(90);

  });

  test('If the items enhancement level is greater than 16, the enhancement level should decreases by 1' , () => {
            //Arrange - set up the world here
            const item = chain;
            //Act -- wll execute your code here.
            const newItem = game.fail(maxItem);
            // Assert -- check your code here
            expect(newItem.enhancement).toBeLessThan(16);
            expect(newItem.durability).toEqual(90);

  });
 
});

describe('Checks My Enhancement Method', () => {
   test('Enhancement', () => {

   });
});