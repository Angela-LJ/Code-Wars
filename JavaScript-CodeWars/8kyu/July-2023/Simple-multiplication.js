//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
    let sum = number%2
    if(sum === 0){
      return number * 8
    }return number * 9
}
