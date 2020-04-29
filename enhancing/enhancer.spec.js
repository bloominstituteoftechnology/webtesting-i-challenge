const { repair, succeed, fail, get } = require('./enhancer.js');

describe('repair function', () => {
    describe('should return durability equal to 100', () => {
        it('returns durability 100', () => {
            expect(repair({durability:12 , enhancement:11})).toEqual({durability: 100, enhancement:11});
        });
    });
});

describe('success function', () => {
    describe('should increase by one', () => {
        it('increases enhancement by one' , () => {
            expect(succeed({enhancement:20})).toEqual({enhancement:20});
        });
    });
});

describe('fail function', () => {
    describe('should decrease durability by 5', () => {
        it('decreases durability by 5 ', () => {
            expect(fail({durability:10, enhancement: 14 })).toEqual({durability: 5, enhancement: 14})
        })
    });
    describe('should decrease durability by 10', () => {
        it('decreases durability by 10', () => {
            expect(fail({durability:90, enhancement:15 })).toEqual({ durability:80, enhancement:15})
        })
    });
    describe('should decrease enhancement by 1', () => {
        it('decreases enhancement by 1', () => {
            expect(fail({ enhancement:19, durability:20 })).toEqual({  enhancement: 18,  durability: 10})
        })
    });

    describe('enhancement and durability should be numbers', () => {
        it('should return error if enhancement  and durability is not the type of number', () => {
            expect(() => fail({enhancement:"should be number", durability:"durability too"})).toThrow()
        })
    });
    describe('enhancement and durability should be natural numbers', () => {
        it.todo('should return error if enhancement and durability are not natural numbers')
    });

    // describe('', () => {
    //     it('', () => {
    //         expect(fail({ })).toEqual({ })
    //     })
    // });
})