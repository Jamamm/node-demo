console.log("b.js start")

var foo = 'bbbb'

console.log(fbb)  //会报错，作用域不同

require('./c.js')

console.log("b.js end")