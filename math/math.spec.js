

//test code
const math =require('./math.js');


test('equality', function() {
    expect({ foo: 'bar' }).toEqual({ foo: 'bar' });
});
//test suite

describe('math library', () => {
    describe('add() method', () => {
        //test
        test('adds two numbers ', () => {
            //assertions using matchers
            //.toEqual is a matcher
            expect(math.add(2, 2)).toEqual(4);
            expect(math.add(2, 1)).toEqual(3);
        });

        it('should throw and error if one of the arguments is a string', () => {
            //check error was thrown
            expect(() => {
                math.add('3', 3);
            }).toThrow();
            expect(() => {
                math.add('3','3');
            }).toThrow();
            expect(() => {
                math.add(3, '3');
            }).toThrow();
        })

        //adding strings
        //pass infinity
        //pass NaN
        //pass null or undefined
        //no arguments
        //more than two arguments

        //both arguments must be numbers

    });   

    describe('multiply() method', () => {
        //using "it" to test
        it('should multiply two numbers', () => {
            expect(math.multiply(3, 4)).toBe(12);
        });
    });
});

//test structure

test('enhancing success increases enhancing level', () => {

    //arrangement -- setup
    const item = {
        originalName: 'Lambda Shield',
        name: '[+8] Lambda Shield',
        durability: 90,
        enhancement: 8,
    };
    const expected = {
        originalName: 'Lambda Shield',
        name: '[+9] Lambda Shield',
        durability: 90,
        enhancement: 9,
    }

    //act --execute System Under Test SUT
    const actual = enhancer.succeed(item);

    //assert
    expect(actual).toEqual(expected);
    expect(actual.enhancement).toBe(9);
    expect(actual.name).toBe('[+9] Lambda Shield');
});

it('should repair durability', () => {
    
    const actual = enhancer.repair({ name: 'sword', durability: 0 })

    expect(actual.durability).toBe({ name: 'sword', durability: 100})
})


