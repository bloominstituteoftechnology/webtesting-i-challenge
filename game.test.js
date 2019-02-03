const game = require('./game.js');
const { cover,jacket,chain,shield, helm } = require('./armor');
const  { hammer,arrow,axe,gun,mace,dagger,spear } = require('./weapon');


describe('Checks My Success Method', () => {
   test('Increases the enhancement by 1', () => {
       //Arrange - set up the world here
        const item = cover;
       //Act -- wll execute your code here.
        const newItem = game.success(item);
       // Assert -- check your code here
       expect(newItem.enhancement).toBe(1);
      
   });
   test('This gives new name', () => {
        //Arrange - set up the world here
        const item = cover;
        //Act -- wll execute your code here.
        const newItem = game.success(item);
        // Assert -- check your code here
        expect(newItem.name).toBeTruthy();
         
    });
      test('Throw new error if enhancement is more than 20', () => {
        //Arrange - set up the world here
        const maxItem = { name: 'sicle', type: 'weapon', durability: 100, enhancement:24}
         //Act -- wll execute your code here.
         const newItem = game.success(maxItem);
        // Assert -- check your code here
         expect(newItem.message).toEqual(`Max Limit Reached`);
    });

});

describe('Checks My Failures Method', () => {
   test('Any Failures' , () => {

   });
});

describe('Checks My Enhancement Method', () => {
   test('Enhancement', () => {

   });
});