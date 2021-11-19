const antonio = {
  name: 'Antonio',
  introduceYourself: () => {
    console.log(`Hi! My name is ${this.name}`)
  }
}

const anselmo = {
  name: 'Anselmo',
  introduceYourself: function () {
    console.log(`Hi! My name is ${this.name}`)
  }
}

antonio.introduceYourself()
anselmo.introduceYourself()

