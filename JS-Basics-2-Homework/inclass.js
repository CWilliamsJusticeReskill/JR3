/*Create an array with 10 random numbers.2.Loop through the array3.If the number at the current index is even, printout even, otherwise print odd

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i < numbers.length; i++) {
  if ([i] % 2 && === 0) {
    console.log("Even");
  } else{
      console.log("Odd")
}

var myArray = [1, 2, 3, 4, 5];
console.log(myArray);
myArray.push(1, 2, 3);
console.log(myArray);
*/
//my array of shoes
var nikeAir = ["AirMax 97", "Kyrie 4", "Kyrie 5", "Lebron 16 'InfaRed'"];
console.log(nikeAir);
//.pop
nikeAir.pop(0);
console.log(nikeAir);
//.push
nikeAir.push("Leron 95's 'Home-Team");
console.log(nikeAir);
//adding items at an index
nikeAir[3] = "Penny Hardaway's";
console.log(nikeAir);
//list every item in the Array
console.log(nikeAir);
