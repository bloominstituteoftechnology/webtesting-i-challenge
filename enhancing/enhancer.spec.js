const enhancer = require('./enhancer.js');
// test away!

const { succeed, fail, repair } = require('./enhancer.js');


describe('enhancer.js', () => {
  it('run tests without errors', ()=>{
    expect(true).toBeTruthy();
  })
  describe('.succeed()', function(){
      it('return an item with the only change being its enhansement goes up one', function(){
          expect(succeed({
                name: "sword",
                enhancement: 10,
                durability: 50 
             })).toEqual({
                name: "sword",
                enhancement: 11,
                durability: 50 
              })
      })
      it('return an item staying at enhancement 20', function(){
        expect(succeed({
              name: "sword",
              enhancement: 20,
              durability: 50 
           })).toEqual({
              name: "sword",
              enhancement: 20,
              durability: 50 
            })
    })
    it('Items Cannot be over a 20 of Enhancement', function(){
        expect(succeed({
              name: "sword",
              enhancement: 21,
              durability: 50 
           })).toEqual("Item can't exist")
    })
    it('Items Cannot be under a 0 of Enhancement', function(){
        expect(succeed({
              name: "sword",
              enhancement: -1,
              durability: 50 
           })).toEqual("Item can't exist")
    })
  })
  describe('.fail()', function(){
    it('Durability should fall by 5 if the enhancement is between 0 and 14', function(){
        expect(fail({
              name: "sword",
              enhancement: 14,
              durability: 50 
           })).toEqual({
              name: "sword",
              enhancement: 14,
              durability: 45 
            })
    })
    it('Durability should fall by 0 if the enhancement is between 0 and 14 and durability is less than 5', function(){
        expect(fail({
              name: "sword",
              enhancement: 14,
              durability: 4 
           })).toEqual({
              name: "sword",
              enhancement: 14,
              durability: 0 
            })
    })
    it('if enhancement is 15 or 16 durability drops by 10', function(){
        expect(fail({
            name: 'sword',
            enhancement: 16,
            durability: 50
        })).toEqual({
            name: 'sword',
            enhancement: 16,
            durability: 40
        })
    })
    it('if enhancement is 15 or 16 and durability is less than 10 then durability drops to 0', function(){
        expect(fail({
            name: 'sword',
            enhancement: 16,
            durability: 9
        })).toEqual({
            name: 'sword',
            enhancement: 16,
            durability: 0
        })
    })
    it('if enhancement is over 16 durability drops by 10 and enhancement drops by 1', function(){
        expect(fail({
            name: 'sword',
            enhancement: 18,
            durability: 50
        })).toEqual({
            name: 'sword',
            enhancement: 17,
            durability: 40
        })
    })
    it('if enhancement is over 16 and durability is less than 10 then durability drops to 0 and enhancement drops by 1', function(){
        expect(fail({
            name: 'sword',
            enhancement: 18,
            durability: 7
        })).toEqual({
            name: 'sword',
            enhancement: 17,
            durability: 0
        })
    })
    it('if enhancement is over 20 item cant exist', function(){
        expect(fail({
            name: 'sword',
            enhancement: 21,
            durability: 50
        })).toEqual("Item can't exist")
    })
    it('if enhancement is under 0 item cant exist', function(){
        expect(fail({
            name: 'sword',
            enhancement: -1,
            durability: 50
        })).toEqual("Item can't exist")
    })
  })
  describe('.repair()', function(){
    it('Durability should be restored to 100', function(){
        expect(repair({
              name: "sword",
              enhancement: 14,
              durability: 90 
           })).toEqual({
              name: "sword",
              enhancement: 14,
              durability: 100 
            })
        })
    })
})
