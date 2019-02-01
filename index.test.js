const index = require('./index.js');
const items = require('./items.js');

describe('enhancement protcols', () => {
    describe('the items exist', () => {
        test('whole item exists', () => {
            expect(items).toBeTruthy();
        })
    });
    describe('the success action', () => {
        test('success', () => {
            expect(index.success).toBeTruthy();
            // expect(index.success(item.enhancement)).toBeTruthy();
        });
    });
    describe('the failure action', () => {
        test('failure', () => {
            expect(index.failure).toBeTruthy();
        });
    });
    describe('the repair function', () => {
        test('repair', () => {
            expect(index.repair).toBeTruthy();
        });
    });
});