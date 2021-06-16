/*for (var i = 0; i < 100; i++) {
  console.log(i);
}*/
//Create a loop that starts at 7 terminates at 44 and increments by 5
for (var i = 7; i < 44; i = i + 5) {
  console.log(i);
}
//create a for loop that starts at 1000 decrements by 100 and must be greater than -1000
for (var i = 1000; i > -1000; i = i - 100) {
  console.log(i);
}
//Create a string with the text 'KATAKANA' Iterate over with for loop and for every A print "Found an A!"
var string1 = "KATAKANA";
for (var i = 0; i < string1.length; i++) {
  if (string1.charAt(i)) {
    console.log("Found an A!");
  }
}
