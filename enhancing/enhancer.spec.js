const enhancer = require("./enhancer.js");
// test away!

const dummyItem = {
  name: 'Skelator',
  durability: 66,
  enhancement: 11,
}
const dummyItem2 = { name: "Battle Cat", durability: 100, enhancement: 6 }

it('test for sanity', function () {
  expect(true).toBe(true);
});

describe('repair', () => {
  it('the durability should be 100', () => {
    expect(() => {
      enhancer.repair(dummyItem).toBe(dummyItem.durability == 100);
    });
  });
});

describe('success', () => {
  it('enhancement is succesful', () => {

    expect(() => {
      enhancer.success(dummyItem).toEqual(dummyItem2)
    })
  })
})

describe('failure', () => {
  it('enhancement has failed', () => {
    expect(() => {
      enhancer.failure(dummyItem).toEqual(dummyItem)
    })
  })
})
