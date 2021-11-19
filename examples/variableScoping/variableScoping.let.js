// console.log(x) // ReferenceError

let x = 1;

if (x === 1) {
  let x = 2;
  console.log(x);
}
x = 3

console.log(x);
