const foo = {name: 'foo'}
const foo2 = {name: 'foo'}
const foo3 = {name: 'foo'}

const foos = [foo, foo2]

console.log(foos.includes(foo))
console.log(foos.includes(foo2))
console.log(foos.includes(foo3))
