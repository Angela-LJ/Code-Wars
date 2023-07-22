//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

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
