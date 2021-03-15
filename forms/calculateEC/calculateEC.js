function divideTwo(number1, number2){
  let answer = number1 % number2
  return answer
}
  
let number1 = parseInt(prompt("What is your first number?"))
let number2 = parseInt(prompt("What is your second number?"))
let number3 = parseInt(prompt("What is your third number?"))

let averageRemainder = false
let yesNo = ""

while (averageRemainder == false){
    yesNo = prompt("Do you want to calulate an average or a division remainder calculation? Enter: Average or Remainder?")
    if (yesNo == "Remainder"){
      let remainder = divideTwo(number1, number2)
      let division = Math.floor(number1/number2)
      console.log(`The result of dividing ${number1} by ${number2} is ${division} with a remainder of ${remainder}.`)
    } else
      doneWithList = true
}

