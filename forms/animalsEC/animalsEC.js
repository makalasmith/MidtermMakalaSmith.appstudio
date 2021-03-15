let myAnimals = ["dog", "cat", "horse", "meerkat"]

let newAnimal = prompt("Enter an animal to add to the list:")

let newAnimalLowerCase = newAnimal.toLowerCase()

let myAnimalsReverse = myAnimals.reverse()

for (i=0, i<1, i++){
myAnimals.push(newAnimalLowerCase)
console.log(`The last animal is a/an ${myAnimalsReverse[0]}`)
}
  