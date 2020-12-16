const enhancer = require('./enhancer.js');
// test away!
describe('enhancer module', () => {
    describe('enhancer functions', () => {
        const testObject = { name: 'lance', durability: 58, enhancement: 17 };
        it('repair function returns durability to 100', () => {
            const expectedOutput = { ...testObject, durability: 100 };
            const actualOutput = enhancer.repair(testObject);
            expect(actualOutput).toStrictEqual(expectedOutput);
        });
        it('success function enhances item by 1 if under 20', () => {
            const expectedOutput = { ...testObject, 
                enhancement: testObject.enhancement < 20 ? testObject.enhancement + 1 : testObject.enhancement  
            };
            const actualOutput = enhancer.success(testObject);
            expect(actualOutput).toStrictEqual(expectedOutput);
        });
        it('fail function decreases durability and enhancement', () =>{
            const expectedOutput = { ...testObject, 
                durability: testObject.enhancement >= 15 ? testObject.durability - 10 : testObject.durability - 5,
                enhancement: testObject.enhancement > 16 ? testObject.enhancement - 1 : testObject.enhancement
             }
            const actualOutput = enhancer.fail(testObject);
            expect(actualOutput).toStrictEqual(expectedOutput);
        });
    });
});