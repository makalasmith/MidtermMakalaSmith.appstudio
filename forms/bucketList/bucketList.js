

let bucketList = []

let doneWithList = false
let yesNo = ""

while (doneWithList == false){
    yesNo = prompt("Do you have more that you want to add to your bucket list or do you want to see your bucket list? Add or See?")
    if (yesNo == "Add"){
      doneWithList = false
      newItem = prompt("Enter the next thing you want on your bucket list:")
      bucketList.push(newItem)
    } else
      doneWithList = true
}

let count = 0
while (bucketList.length !== count){
  let name = bucketList[count]
  console.log(`${name}`)
  count++
}