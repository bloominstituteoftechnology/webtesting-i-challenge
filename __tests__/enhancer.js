const enhancer = require('../enhancer.js');

describe('Enchanting system', () => {

    const testItem1 = {
        originalName: "Cool Shield", 
        name: '[+5] Cool Shield',
        type: "armor",
        durability: 50,
        enhancement: 5
    }

    const testItem2 = {
        originalName: "Levin Sword", 
        name: '[PRI] Cool Shield',
        type: "armor",
        durability: 20,
        enhancement: 16
    }

    const testItem3 = {
        originalName: "Sharp Dagger", 
        name: '[+8] Sharp Dagger',
        type: "weapon",
        durability: 25,
        enhancement: 8
    }

    describe('success() method', () => {
        const result1 = enhancer.success(testItem1);
        const result2 = enhancer.success(testItem2);
        const result3 = enhancer.success(testItem3);


        it('should add 1 to enhacement', () => {
            expect(result1).toEqual({
                originalName: "Cool Shield", 
                name: '[+6] Cool Shield',
                type: "armor",
                durability: 50,
                enhancement: 6
            });
        });
    });

    // describe('fail() method', () => {
    
    // });

    describe('repair() method', () => {

        const result1 = enhancer.repair(testItem1);
        const result2 = enhancer.repair(testItem2);
        const result3 = enhancer.repair(testItem3);

        it('should change durability back to 100', () => {
            expect(result1.durability).toBe(100);
            expect(result2.durability).toBe(100);
            expect(result3.durability).toBe(100);
        });

        it('should return item with ONLY durability changed', () => {
            expect(result1).toEqual({
                originalName: "Cool Shield", 
                name: '[+5] Cool Shield',
                type: "armor",
                durability: 100,
                enhancement: 5
            });

            expect(result2).toEqual({
                originalName: "Levin Sword", 
                name: '[PRI] Cool Shield',
                type: "armor",
                durability: 100,
                enhancement: 16
            });

            expect(result3).toEqual({
                originalName: "Sharp Dagger", 
                name: '[+8] Sharp Dagger',
                type: "weapon",
                durability: 100,
                enhancement: 8
            });
        });

        
    });

});
