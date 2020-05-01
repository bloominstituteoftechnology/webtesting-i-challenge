const { repair, succeed, fail, get } = require('./enhancer.js');

const item = {
    name: 'John',
    durability: 25,
    enhancement: 15
}


describe('REPAIR function', () => {
    describe('should return durability equal to 100', () => {
        it('returns durability 100', () => {
            expect(repair({...item})).toEqual({...item, durability: 100});
        });
    });
    describe('enhancement and durability should be numbers', () => {
        it('should return error if enhancement  and durability are not the type of number', () => {
            expect(() => fail({ ...item, enhancement:"should be number", durability:"durability too"})).toThrow()
        })
    });
});

describe('SUCCESS function', () => {
    describe('should increase  enhancement by 1', () => {
        it('increases enhancement by one' , () => {
            expect(succeed({...item, enhancement:19})).toEqual({...item, enhancement:20});
        });
    });
    describe('enhancement should be number type', () => {
        it('should return error if enhancement is not the type of number', () => {
            expect(() => succeed({...item, enhancement:"should be number"})).toThrow()
        })
    });
});

describe('FAIL function', () => {
    describe('should decrease durability by 5', () => {
        it('decreases durability by 5 ', () => {
            expect(fail({ ...item, durability:50, enhancement: 14 })).toEqual({...item,durability:45, enhancement: 14})
        })
    });
    describe('should decrease durability by 10', () => {
        it('decreases durability by 10', () => {
            expect(fail({ ...item, durability:90, enhancement:15 })).toEqual({ ...item, durability:80, enhancement:15})
        })
    });
    describe('should decrease enhancement by 1', () => {
        it('decreases enhancement by 1', () => {
            expect(fail({ ...item, name: "John", enhancement:19, durability:20 })).toEqual({...item, name: "John", enhancement: 18,  durability: 10})
        })
    });

    describe('enhancement and durability should be numbers', () => {
        it('should return error if enhancement  and durability are not the type of number', () => {
            expect(() => fail({...item, enhancement:"should be number", durability:"durability too"})).toThrow()
        })
    });
    describe('enhancement and durability should be natural numbers', () => {
        it.todo('should return error if enhancement and durability are not natural numbers')
    });
});

describe('GET function', () => {
    describe('name has the enhancement', () => {
        it('should return the name and enhancement', () => {
            expect(get({ ...item, enhancement:10, name:'Iron Sword' })).toEqual({...item, enhancement:10, name:'[+10] Iron Sword' })
        })
    });
    
    describe('Should throw error if name is not type string ', () => {
        it('Name should be string ', () => {
            expect(() => get({...item, name:21 })).toThrow()
        })
    });
    describe('Should throw error if enhancement type number', () => {
        it('Enhancement should be number', () => {
            expect(() => get({ ...item, enhancement:"NOT NUMBER"})).toThrow()
        })
    });
}); 

