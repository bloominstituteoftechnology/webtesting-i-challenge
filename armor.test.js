const object = require('./armor.js')

const successObject = {
  name:'Sharpie',
  type:'sword',
  durability: 85,
  enhancement: 18
}

test('checks values in failure', () => {
expect(object.success(successObject.name)).toBeDefined()
})
