let myAnimals = ["dog", "cat", "horse", "meerkat"]

for (i=0; i<2; i++){
  let newAnimal = prompt("Enter an animal to add to the list:")
  let newAnimalLowerCase = newAnimal.toLowerCase()
  myAnimals.push(newAnimalLowerCase)
  let myAnimalsReverse = myAnimals.reverse()
  console.log(`The last animal is a/an ${myAnimalsReverse[0]}`)
}
  