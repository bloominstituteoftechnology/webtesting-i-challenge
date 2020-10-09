const enhancer = require('./enhancer.js');
// test away!

it('repair', () => {
    expect(enhancer.repair({
        name: 'Bart',
        durability: 85,
        enhancement: 20
    })).toEqual({
        name: 'Bart',
        durability: 100,
        enhancement: 20
    });
})

it('success', () => {
    expect(enhancer.success({
        name: 'Bart',
        durability: 100,
        enhancement: 10
    })).toEqual({
        name: 'Bart',
        durability: 100,
        enhancement: 11
    });
})

it('fail', () => {
    expect(enhancer.fail({
        name: "Bart",
        durability: 15,
        enhancement: 17
    })).toEqual({
        name: "Bart",
        durability: 15,
        enhancement: 16
    });
})


describe('enhancer.js', () => {
    describe('.repair()', () => {
        it('increase durability to 100', function(){
            expect(enhancer.repair({
                name: "Bart",
                durability: 85,
                enhancement: 20
            })).toEqual({
                name: "Bart",
                durability: 100,
                enhancement: 20
            });
        })
    })
})