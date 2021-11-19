String.prototype.sayHi = function() {
  console.log(`Hi! My value is ${this.valueOf()}`)
}

String.prototype.sayHi2 = () => {
  console.log(`Hi! My value is ${this.valueOf()}`)
}

'antonio'.sayHi()
'antonio'.sayHi2()
