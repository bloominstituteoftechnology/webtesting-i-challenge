const enhancement = require('./enhancement');
const mockData = require('./mock');



describe('Create Item helper method', () => {
    test('Item attributes exist', () => {
        expect(typeof enhancement.item(mockData.item1).name).toBe('string');
        expect(typeof enhancement.item(mockData.item1).type).toBe('string');
        expect(typeof enhancement.item(mockData.item1).durability).toBe('number');
        expect(typeof enhancement.item(mockData.item1).enhancement).toBe('string');
        expect(typeof enhancement.item(mockData.item2).enhancement).toBe('number');
    });

    test('Check if item parameters are correct', () => {
        expect(enhancement.item(mockData.item1).durability).toBeLessThanOrEqual(100);
        expect(enhancement.item(mockData.item1).durability).toBeGreaterThan(0);
        expect(enhancement.item(mockData.item2).enhancement).toBeGreaterThanOrEqual(0);
        expect(enhancement.item(mockData.item2).enhancement).toBeLessThanOrEqual(15);
        expect(enhancement.item(mockData.item3).enhancement).toBe('PRI');
        expect(enhancement.item(mockData.item4).enhancement).toBe('DUO');
        expect(enhancement.item(mockData.item5).enhancement).toBe('TRI');
        expect(enhancement.item(mockData.item6).enhancement).toBe('TET');
        expect(enhancement.item(mockData.item1).enhancement).toBe('PEN');
    });
});

