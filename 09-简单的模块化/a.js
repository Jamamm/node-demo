console.log("a start")

var foo = 'aaa'
var fbb = 'aaaaaaa'

require('./b.js')

console.log('a end')
// node中没有全局作用域，只有模块作用域

console.log('foo 的值是' + foo)