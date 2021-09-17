const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

console.log(first, second)

writeFileSync('./content/third.txt', 'Hello this is the third text file\n', {flag: 'a'})
const third = readFileSync('./content/third.txt', 'utf-8')
console.log(third)