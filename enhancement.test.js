const enhancement = require('./enhancement');
const mockData = require('./mock');



describe('Success helper method', () => {
    test('Item attributes exist', () => {
        expect(typeof enhancement.success(mockData.item1).name).toBe('string');
        expect(typeof enhancement.success(mockData.item1).type).toBe('string');
        expect(typeof enhancement.success(mockData.item1).durability).toBe('number');
        expect(typeof enhancement.success(mockData.item1).enhancement).toBe('string');
        expect(typeof enhancement.success(mockData.item2).enhancement).toBe('number');
    });

    test('Check if item parameters are correct', () => {
        expect(enhancement.success(mockData.item1).durability).toBeLessThanOrEqual(100);
        expect(enhancement.success(mockData.item1).durability).toBeGreaterThan(0);
        expect(enhancement.success(mockData.item1).enhancement).toBe('PEN');
    });
});

