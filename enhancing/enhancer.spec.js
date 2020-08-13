const { repair, succeed, fail, get } = require("./enhancer.js");

describe("repair", () => {
  it("should restore durability to 100", () => {
    expect(
      repair({
        name: "Sword of Redux",
        durability: 75,
        enhancement: 5
      })
    ).toEqual({
      name: "Sword of Redux",
      durability: 100,
      enhancement: 5
    });
  });
});

describe("succeed", () => {
  it("should increment enhancement by 1 if less than 20", () => {
    expect(
      succeed({
        name: "Hammer of Diligent Testing",
        durability: 100,
        enhancement: 19
      })
    ).toEqual({
      name: "Hammer of Diligent Testing",
      durability: 100,
      enhancement: 20
    });
  });
});

describe("fail", () => {
  it("should decrement durability by 10 and decrement enhancement by 1 if enhancement greater than 16", () => {
    expect(
      fail({
        name: "Shield od Undefined",
        durability: 90,
        enhancement: 17
      })
    ).toEqual({
      name: "Shield od Undefined",
      durability: 80,
      enhancement: 16
    });
  });

  it("should decrement durability by 10 if enhancement greater than 14", () => {
    expect(
      fail({
        name: "Wings of Passing Tests",
        durability: 90,
        enhancement: 15
      })
    ).toEqual({
      name: "Wings of Passing Tests",
      durability: 80,
      enhancement: 15
    });
  });

  it("should decrement durability by 5 if enhancement less than 15", () => {
    expect(
      fail({
        name: "Greives of Failing",
        durability: 90,
        enhancement: 14
      })
    ).toEqual({
      name: "Greives of Failing",
      durability: 85,
      enhancement: 14
    });
  });
});

describe('get', () => {
    it('should modify name to prefix enhancement level if greater than 0', () => {
        expect(
            get({
              name: "Lambdas Boots of Srpint",
              durability: 90,
              enhancement: 14
            })
          ).toEqual({
            name: "[+14] Lambdas Boots of Srpint",
            durability: 90,
            enhancement: 14
          });
    })
    it('should not modify name if enhancement level is 0', () => {
        expect(
            get({
              name: "Pick of Axios",
              durability: 90,
              enhancement: 0
            })
          ).toEqual({
            name: "Pick of Axios",
            durability: 90,
            enhancement: 0
          });
    })
    
})