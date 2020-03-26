const enhancer = require('./enhancer.js');

describe('enhancer.js', () => {
  describe('.succeed()', () => {
    it('returns an object', () => {
      expect(typeof enhancer.succeed({name: 'test', enhancement: 5, durability: 10})).toBe('object');
    });

    it('sets enhancement + 1', () => {
      expect(enhancer.succeed({name: 'test', enhancement: 5, durability: 10}).enhancement).toBe(6);
      expect(enhancer.succeed({name: 'test', enhancement: 0, durability: 10}).enhancement).toBe(1);
      expect(enhancer.succeed({name: 'test', enhancement: 19, durability: 10}).enhancement).toBe(20);
    });

    it('has enhancement cap', () => {
      expect(enhancer.succeed({name: 'test', enhancement: 20, durability: 10}).enhancement).toBe(20);
    });

    it('doesn\'t change other values', () => {
      expect(enhancer.succeed({name: 'test', enhancement: 5, durability: 10}).name).toBe('test');
      expect(enhancer.succeed({name: 'test', enhancement: 20, durability: 10}).name).toBe('test');
      expect(enhancer.succeed({name: 'test', enhancement: 5, durability: 10}).durability).toBe(10);
      expect(enhancer.succeed({name: 'test', enhancement: 20, durability: 10}).durability).toBe(10);
    });
  });

  describe('.fail()', () => {
    it('returns an object', () => {
      expect(typeof enhancer.fail({name: 'test', enhancement: 5, durability: 10})).toBe('object');
    });

    it('lowers durability by 5 if enhancement < 15', () => {
      expect(enhancer.fail({name: 'test', enhancement: 5, durability: 10}).durability).toBe(5);
    });

    it('minimum durability of 0', () => {
      expect(enhancer.fail({name: 'test', enhancement: 5, durability: 2}).durability).toBe(0);
    });

    it('lowers durability by 10 if enhancements >= 15', () => {
      expect(enhancer.fail({name: 'test', enhancement: 15, durability: 10}).durability).toBe(0);
    });

    it('lowers enhancement by 1 if enhancement > 16', () => {
      expect(enhancer.fail({name: 'test', enhancement: 17, durability: 10}).enhancement).toBe(16);
    });

    it('doesn\'t lower enhancement if enhancement <= 16', () => {
      expect(enhancer.fail({name: 'test', enhancement: 16, durability: 10}).enhancement).toBe(16);
    });
  });

  describe('.repair()', () => {
    it('sets durability to full', () => {
      expect(enhancer.repair({name: 'test', enhancement: 5, durability: 10}).durability).toBe(100);
    })
  });

  describe('.get()', () => {
    it('doesn\'t change name if enhancement is 0', () => {
      expect(enhancer.get({name: 'test', enhancement: 0, durability: 10}).name).toBe('test');
    });

    it('changes name correctly', () => {
      expect(enhancer.get({name: 'test', enhancement: 5, durability: 10}).name).toBe('[+5] test');
    });
  });
});
