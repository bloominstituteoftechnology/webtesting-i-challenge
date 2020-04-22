const { repair, succeed, fail, get } = require('./enhancer.js');
// test away!
describe('enhancer', () => {
  describe('check to see if items contain name durab and enhancement values', () => {
    it('has a name value', () => {
      const test = { name: 'daggers' }
      expect(test).toHaveProperty('name')
    })
    it('has a durability value', () => {
      const test = { durability: 5 }
      expect(test).toHaveProperty('durability')
    })
    it('has a enhancement value', () => {
      const test = { enhancement: 10 }
      expect(test).toHaveProperty('enhancement')
    })
  })
    describe('items enhancement number is in fact a number', () => {
      it('items enhancement value is indeed a number instead of idk a string or empty objects and arrays or even just inside an array maybe who knows.... test', () => {
        const test1 = { enhancement: 5 }
        expect(typeof test1.enhancement).toBe('number')
        const test2 = { enhancement: '5' }
        expect(typeof test2.enhancement).not.toBe('number')
        const test3 = { enhancement: {} }
        expect(typeof test3.enhancement).not.toBe('number')
        const test4 = { enhancement: [4] }
        expect(typeof test4.enhancement).not.toBe('number')
        const test5 = { enhancement: ['i am a number'] }
        expect(typeof test5.enhancement).not.toBe('number')
      })
      describe('items durability number is in fact a number', () => {
        it('items durability value is indeed a number', () => {
          const test1 = { durability: 5 }
          expect(typeof test1.durability).toBe('number')
          const test2 = { durability: '5' }
          expect(typeof test2.durability).not.toBe('number')
          const test3 = { durability: {} }
          expect(typeof test3.durability).not.toBe('number')
          const test4 = { durability: [4] }
          expect(typeof test4.durability).not.toBe('number')
          const test5 = { durability: ['i am a number'] }
          expect(typeof test5.durability).not.toBe('number')
        })
      expect.extend({
        toBeWithinRange(received, floor, ceiling) {
          const pass = received >= floor && received <= ceiling;
          if (pass) {
            return {
              message: () =>
                `expected ${received} not to be within range ${floor} - ${ceiling}`,
              pass: true,
            };
          } else {
            return {
              message: () =>
                `expected ${received} to be within range ${floor} - ${ceiling}`,
              pass: false,
            };
          }
        },
      });
      it('oof check to see if enhancement is between0 and 20', () => {
        const test1 = { enhancement: 5 }
        expect(test1.enhancement).toBeWithinRange(0, 20)
        const test2 = { enhancement: 20 }
        expect(test2.enhancement).toBeWithinRange(0, 20)
      })
      it('oof check to see if durability is between0 and 100', () => {
        const test1 = { durability: 5 }
        expect(test1.durability).toBeWithinRange(0, 100)
        const test2 = { durability: 21 }
        expect(test2.durability).toBeWithinRange(0, 100)
      })
    })
  })
})
describe('repair() method', () => {
  const item = { durability: 0 }
  const expected = { durability: 100 }
  const test = repair(item);
  it('returns a new item', () => {
      expect(test).not.toBe(expected);
  });
  it('new item has durability 100.', () => {
      expect(test).toEqual(expected);
  });
});

describe('succeed() method', () => {
  it('increases item.enhancement by value of 1', () => {
    const item = { enhancement: 2}
    const expected = { enhancement: 3 }
    const test1 = succeed(item);
    expect(test1).toEqual(expected)
  })
  it.todo('if enhancement is lvl 20 do not change lvl')
  it.todo('does not change item.durability')
})


// test('numeric ranges', () => {
//   expect(150).toBeWithinRange(90, 110);
//   expect(101).not.toBeWithinRange(0, 100);
//   expect({apples: 6, bananas: 3}).toEqual({
//     apples: expect.toBeWithinRange(1, 10),
//     bananas: expect.not.toBeWithinRange(11, 20),
//   });
// });