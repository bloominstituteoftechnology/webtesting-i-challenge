const enhancer = require("./enhancer.js");
// test away!

const mockFuncs = {
  succeed: jest.fn(enhancer.succeed),
  fail: jest.fn(enhancer.fail),
  repair: jest.fn(enhancer.repair),
  get: jest.fn(enhancer.get)
};

describe("Item Enhancement Tests", () => {
  describe("Repair Item Tests", () => {
    it("Should take in an item object, and return a new item with durability of 100", () => {
      const item = {
        name: "The Bear",
        durability: 40,
        enhancement: 20
      };
      const expected = {
        name: "The Bear",
        enhancement: 20,
        durability: 100
      };

      const newItem = mockFuncs.repair(item);

      expect(mockFuncs.repair).toHaveBeenCalledTimes(1);
      expect(mockFuncs.repair).toBeCalledWith(item);
      expect(newItem).toEqual(expected);
    });
  });

  describe("Enhancement Success Tests", () => {
    it("Should return an item with enhancement one higher than before", () => {
      const item = {
        name: "The Cow",
        durability: 80,
        enhancement: 10
      };
      const expected = {
        name: "The Cow",
        durability: 80,
        enhancement: 11
      };

      const newItem = mockFuncs.succeed(item);

      expect(mockFuncs.succeed).toHaveBeenCalledTimes(1);
      expect(mockFuncs.succeed).toBeCalledWith(item);
      expect(newItem).toEqual(expected);
    });

    it("Should return an item with 20 enhancement when passed an item with 20 enhancement", () => {
      const item = {
        name: "The Cow",
        durability: 80,
        enhancement: 20
      };
      const expected = {
        name: "The Cow",
        durability: 80,
        enhancement: 20
      };

      const newItem = mockFuncs.succeed(item);

      expect(mockFuncs.succeed).toBeCalled();
      expect(mockFuncs.succeed).toBeCalledWith(item);
      expect(newItem).toEqual(expected);
    });
  });

  describe("Enhancement Failure Tests", () => {
    it("Should return durability -5", () => {
      const item = {
        name: "The Cow",
        durability: 80,
        enhancement: 14
      };
      const expected = {
        name: "The Cow",
        durability: 75,
        enhancement: 14
      };

      const newItem = mockFuncs.fail(item);

      expect(mockFuncs.fail).toBeCalledTimes(1);
      expect(mockFuncs.fail).toBeCalledWith(item);
      expect(newItem).toEqual(expected);
    });

    it("Should return durability -10", () => {
      const item = {
        name: "The Cow",
        durability: 80,
        enhancement: 15
      };
      const expected = {
        name: "The Cow",
        durability: 70,
        enhancement: 15
      };

      const newItem = mockFuncs.fail(item);

      expect(mockFuncs.fail).toBeCalled();
      expect(mockFuncs.fail).toBeCalledWith(item);
      expect(newItem).toEqual(expected);
    });

    it("Should return durability -10 and enhancement -1", () => {
      const item = {
        name: "The Cow",
        durability: 80,
        enhancement: 17
      };
      const expected = {
        name: "The Cow",
        durability: 70,
        enhancement: 16
      };

      const newItem = mockFuncs.fail(item);

      expect(mockFuncs.fail).toBeCalled();
      expect(mockFuncs.fail).toBeCalledWith(item);
      expect(newItem).toEqual(expected);
    });

    it("Should return durability 0 instead of negative", () => {
      const item = {
        name: "The Cow",
        durability: 5,
        enhancement: 15
      };
      const expected = {
        name: "The Cow",
        durability: 0,
        enhancement: 15
      };

      const newItem = mockFuncs.fail(item);

      expect(mockFuncs.fail).toBeCalled();
      expect(mockFuncs.fail).toBeCalledWith(item);
      expect(newItem).toEqual(expected);
    });
  });
});
