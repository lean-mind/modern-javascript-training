console.log(x) // undefined

var x = 1;

if (x === 1) {
  var x = 2;
  console.log(x); // 2
}

// var x = 3

console.log(x); // 2
