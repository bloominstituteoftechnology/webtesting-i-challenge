const enhancer = require('./enhancementHandlers');

const item = {
    name: "axe",
    type: "weapon",
    durability: 100,
    enhancement: 1,    // start 0, max 'PEN'
}

const item2 = {
    name: "mithril",
    type: "armor",
    durability: 100,
    enhancement: 3,
}

//describe enhancement success
describe('the success function', () => {
    test('enhancement level increase by 1', () => {
        // Arrange: setup the world
        
        // Act: execute the tested code
    
        // Assert: check the results are correct
        const updatedItem = enhancer.success(item);
        expect(updatedItem.enhancement).toBe(2);
    });
    test('enhancement level should not update beyond 20', () => {
        // Arrange: setup the world
        
        // Act: execute the tested code
    
        // Assert: check the results are correct
        item.enhancement = 20;
        const updatedItem = enhancer.success(item);
        expect(updatedItem.enhancement).toBe(20);
    });
   
})



//describe enhancement failure

describe('the failure function', () => {
    test('should do someting', () => {
        // Arrange: setup the world
    
        // Act: execute the tested code
    
        // Assert: check the results are correct
    })
})

//describe enhancement repair

describe('the repair function', () => {
    test('should do someting', () => {
        // Arrange: setup the world
    
        // Act: execute the tested code
    
        // Assert: check the results are correct
    })
})