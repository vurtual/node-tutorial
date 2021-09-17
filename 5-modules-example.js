
const names = require('./3-modules-names')
const greet = require('./4-modules-utils')
console.log(names)
console.log(greet)
greet("susan")
greet(names.john)
