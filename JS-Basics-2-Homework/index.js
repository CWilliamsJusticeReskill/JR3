//create a variable that stores students grade
/*var student = 94;
//create a function that takes in students grade and returns letter grade
function gradingScale(student) {
  if (student >= 90 && student <= 100) {
    return "A for Awesome Job!";
  } else if (student >= 80 && MediaStreamAudioDestinationNode < 90) {
    return "B for better try harder!";
  } else if (student >= 70 && student < 80) {
    return "C for continue in your studies!";
  } else if (student >= 60 && student < 70) {
    return "D for don't give up!";
  } else student >= 50 && student < 60;
  return "F for find your closest study hall!";
}
console.log(gradingScale(student));*/
//checking function
/*function gradingScale(total) {
  if (total >= 90 && total <= 100) {
    return "A for Awesome Job!";
  } else if (total >= 80 && total < 90) {
    return "B for better try harder!";
  } else if (total >= 70 && total < 80) {
    return "C for continue in your studies!";
  } else if (total >= 60 && total < 70) {
    return "D for don't give up!";
  } else total >= 50 && total < 60;
  return "F for find your closest study hall!";
}
console.log(gradingScale(60));*/
//create a function that takes in students grade and outputs letter grades +-
var student = 94;
function gradingScale(student) {
  if (student >= 95 && student <= 100) {
    return "A+ for Awesome Job!";
  } else if (student >= 90 && student < 95) {
    return "A- for Always try harder!";
  } else if (student >= 85 && student < 90) {
    return "B+ better continue in your studies!";
  } else if (student >= 80 && student < 85) {
    return "B- by studying grades increase!";
  } else if (student >= 75 && student < 80) {
    return "C+ for find your closest study hall!";
  } else if (student >= 70 && student < 75) {
    return "C- for coming so close to C+!";
  } else if (student >= 65 && student < 70) {
    return "D+ Don't give up!";
  } else if (student >= 60 && student < 65) {
    return "D- for Don't let your Studies Go!";
  } else if (student >= 55 && student < 60) {
    return "F+ for You can Do better than this!";
  } else student < 55;
  return "F- for Please reach out for Help!";
}
console.log(gradingScale(student));
//Return Value Test?
