// test
let numbers = [10, 20, 30, 40, 50];
function total(numbers) {
  var numbersSum = 0;
  for (var i = 0; i < numbers.length; i++) {
    numbersSum += numbers[i];
    console.log(numbersSum);
  }
}
total(numbers);

var array1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//build a function that takes in arrayand outputs each index
function reverse(array) {
  //create a loop that starts at the end of the array and decrements
  for (var i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
}
reverse(array1);
//Looping from 1 to 100 logging every number divisible by 3 and 5 as fizzbuzz, every number divisinle by 3 as fizz, and every number divisble by 5 as buzz, log any other number as the number
//put fizzBuzz into Function

function fizzBuzz(param1, param2) {
  for (var i = param1; i <= param2; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzBuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}
fizzBuzz(1, 100);
//build a for loop inside a for loop that increments line by line to 5 lines, probably need 3 maybe 4 var to build with * (I <=6) ?
var I, LOVE, CODING;
for (I = 1; I <= 6; I++) {
  for (LOVE = 1; LOVE < I; LOVE++) {
    CODING = CODING + "*";
  }
  console.log(CODING);
  CODING = "";
}
