const enhancer = require('./enhancer.js');
// test away!

describe('enhancing items', () => {
    describe('repair', () => {
        it('returns durability of 100', () => {
            const item = {
                durability: 0,
                name: 'sword',
                enhancement: 10
            }
            expect(enhancer.repair(item)).toEqual({durability: 100, name: 'sword', enhancement: 10})
        })
    })
    describe('succeess', () => {
        it('enhancement increments by 1', () => {
            const item = {
                enhancement: 0
            }
            expect(enhancer.succeed(item)).toEqual({enhancement: 1})
        })
        it('if enhancment is already at 20 it should return 20', () => {
            const item = {
                enhancement: 20
            }
            expect(enhancer.succeed(item)).toEqual({enhancement: 20})
        })
    })
})