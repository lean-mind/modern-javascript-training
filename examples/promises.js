function delay() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      return resolve(42)
    } else {
      return reject(new Error('💥 Boom!!'))
    }
  })
}

delay()
  .then((result) => {
    console.log(`Received ${result}.`)
  })
  .catch((err) => {
    console.error(`Error ${err.toString()} received.`)
  })
  .finally(() => {
    console.log('I am executed even if promise is resolved or rejected')
  })
