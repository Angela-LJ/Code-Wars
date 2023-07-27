//Multiply a given number by eight if it is an even number and by nine otherwise.

function simpleMulti(number) {
    let sum = number%2
    if(sum === 0){
      return number * 8
    }return number * 9
}


//Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

function repeatStr (n, s) {
  let storedString = ''
  for (let i = 0; i < n; i++){
    storedString = storedString+s
  }return storedString
}

console.log("Hello World!")

//Write a program that asks the user for his first name and his last name. The program then displays them in one sentence.

let firstName=prompt("What is your first name?")
let lastName= prompt("What is your last name?")
alert (`Hello ${firstName} ${lastName}!`)

//Write a program that asks the user for a raw price. After that, it calculates the corresponding final price using a VAT rate of 20.6%.
//acount for if the user inputs a negative number or anything that is not a positive number
//make sure the alert only shows a price that is two decimal places.

let rawPrice
do {
  rawPrice=Number(prompt("What is the price?"))
} while (rawPrice <= 0 || isNaN(rawPrice))

function calcPrice(){
  let newPrice= rawPrice + (rawPrice*0.206)
  let roundedPrice =newPrice.toFixed(2)
  return roundedPrice
  }
let finalPrice=calcPrice();
alert(`The final price of the item is ${finalPrice}`)

//Write a program that asks for a temperature in Celsius degrees, then displays it in Fahrenheit degrees.[°F] = [°C] x 9/5 + 32.

let cel

do {
  cel=Number(prompt("What degrees is it in Celsius?"))
} while (isNaN(cel))

function calcFah(){
  let fahTotal =(cel *(9/5))+32
  let roundedFah = fahTotal.toFixed(1)
  return roundedFah
}
calcFah()
let finalFah= calcFah()
alert(`${cel} Celsius converted into Fahrenheit is ${finalFah}`)


//Add the necessary code to swap the values of variables number1 and number2.
let number1 = 5;
let number2 = 3;

// TODO: type your code here (and nowhere else!)
let temp = number1;
number1 = number2;
number2 = temp;

console.log(number1); // Should show 3
console.log(number2); // Should show 5


//basic math operations

function basicOp(operation, value1, value2)
{
  if (operation==='+'){
    return value1 += value2
  }
  else if (operation==='-'){
    return value1 -= value2
  }
  else if (operation==='*'){
    return value1 * value2
  }
  else
    return value1/value2
}
