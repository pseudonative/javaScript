/* var randomNumber = Math.floor(Math.random() * 6) + 1;
var guess = prompt('I am thinking of a number between 1 and 6. What is it? ');
if (parseInt(guess) === randomNumber) {
  document.write('<p>You guessed the number!</p>');
} else {
  document.write('<p>Sorry. the number was ' + randomNumber + '</p>')
} */

// var correctGuess = false;
// var randomNumber = Math.floor(Math.random() * 6) + 1;
// var guess = prompt('I am thinking of a number between 1 and 6. What is it ? ');
// if (parseInt(guess) === randomNumber){
//     correctGuess = true;
// }
// if (correctGuess===true) {
//     document.write('<p>You guessed the number</p>');
// } else {
//     document.write('<p>Sorry. The number was ' + randomNumber + '. </p>')
// }

/*
var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 6 ) + 1;
var guess = prompt('I am thinking of a number between 1 and 6. What is it?');
if (parseInt(guess) === randomNumber ) {
  correctGuess = true;
} else if (parseInt(guess) < randomNumber ) {
  var guessMore = prompt('Try again. The number I am thinking of is more than ' + guess );

  if ( parseInt(guessMore) === randomNumber ) {
    correctGuess = true;
}
} else if (parseInt(guess) > randomNumber ) {
    var guessLess = prompt('Try again. The number I am thinking of is less than ' + guess);
    if (parseInt(guessLess)===randomNumber) {
        correctGuess = true;
    }
if (correctGuess) {
    document.write('<p>You guessed the number !</p>')
}
} else {
    document.write('<p>Sorry. The number was ' + randomNumber + '.</p>');
}

*/



// // assume the player didn't guess correctly
// var correctGuess = false;

// // generate random number from 1 to 6
// var randomNumber= Math.floor(Math.random() * 6 ) +1;
// var guess = prompt('I am thinking of a number between 1 and 6. What is it?');
// if (parseInt(guess)===randomNumber) {
//     correctGuess=true;
// } else if (parseInt(guess)<randomNumber) {
//     var guessMore=prompt('Try again. The number I am thinking of is more than ' + guess);
//     if(parseInt(guessMore)===randomNumber) {
//         correctGuess = true;
//     }
// } else if (parseInt(guess)>randomNumber){
//     var guessLess=prompt('Try again. The number I am thinking of is less than' + guess);
//     if (parseInt(guessLess)===randomNumber) {
//         correctGuess=true;
//     }
// }
// if (correctGuess) {
//     document.write('<p>You guessed the number!</p>')
// } else {
//     document.write('<p>Sorry. The number was ' + randomNumber +'.</p>')
// }



// // quiz begins, no answers correct
// var correct = 0;

// // ask questions
// var answer1 = prompt("Name a programming language that's also a gem");
// if (answer1.toUpperCase()==='RUBY') {
//   correct += 1;
// }
// var answer2 = prompt("Name a programming language that's also a snake");
// if (answer2.toUpperCase()==='PYTHON') {
//   correct += 1;
// }
// var answer3 = prompt("What language do you use to style web pages?");
// if (answer3.toUpperCase()==='CSS') {
//   correct += 1;
// }
// var answer4 = prompt("What language do you use to build the structure of web pages?");
// if (answer4.toUpperCase()==='HTML') {
//   correct += 1;
// }
// var answer5 = prompt("What language do you use to add interctifity to a web page?");
// if (answer5.toUpperCase()==='JAVASCRIPT') {
//   correct += 1;
// }

// // output results
// document.write("<p>You got "+ correct +" out of 5 questions correct.</p>");

// // output rank
// if (correct===5) {
//   document.write("<p><strong>you earned a gold crown!</strong></p>");
// } else if (correct >= 3) {
//   document.write("<p><strong>you earned a silver crown!</strong></p>");
// } else if (correct >= 1) {
//   document.write("<p><strong>you earned a bronze crown!</strong></p>");
// } else {
//   document.write("<p><strong>no crown for you. You need to study</strong></p>");
// }

/*
var money = 9;
var today = 'Friday'

if ( money >= 100 || today === 'Friday' ) {
  alert("Time to go to the theater");
} else if ( money >= 50 || today === 'Friday' ) {
  alert("Time for a movie and dinner");
} else if ( money > 10 || today === 'Friday' ) {
  alert("Time for a movie");
} else if ( today !== 'Friday' ) {
  alert("It's Friday, but I don't have enough money to go out");
} else {
  alert("This isn't Friday. I need to stay home.");
}

*/


/*
function alertRandom() {
  var randomNumber = Math.floor(Math.random() * 6) +1;
  alert(randomNumber);
}

// var randomNumber = Math.floor(Math.random() * 6) +1;
alertRandom();
alertRandom();
alertRandom();
alertRandom();
*/


// var alertRandom = function () {
//   var randomNumber = Math.floor(Math.random() * 6) + 1;
//   alert(randomNumber);
// };

// alertRandom();



// function getRandomNumber() {
//   var randomNumber = Math.floor(Math.random() * 6) +1;
//   return randomNumber;
// }
// alert(getRandomNumber());
// console.log(getRandomNumber());



// function isEmailEmpty() {
//   var field = document.getElementById('email');
// if (field.value === '') {
//   return true;

// }else{
//   return false;
// }
// }
// var fieldTest = isEmailEmpty();
// if (fieldTest === true) {
//   alert('Please provide your email address.');
// }
// isEmailEmpty();


// function getYear () {
//   var year = new Date().getFullYear();
//   return year;
// }
// var getToday = getYear();

/*
function getRandomNumber(upper) {
  var randomNumber = Math.floor( Math.random() * upper ) + 1;
  return randomNumber;
}

console.log(getRandomNumber(6));
console.log(getRandomNumber(100));
console.log(getRandomNumber(1000));
console.log(getRandomNumber(10000));
console.log(getRandomNumber(2));

function getArea(width,length,unit) {
  var area = width * length;
  return area + " " + unit;
}
console.log(getArea(10,20,'sq ft'));
*/

// function max(num1,num2) {
//   return num1 && num2;
// }
// alert(max(4,5));



// function greeting() {
//   var person = 'Lilah';
//   alert(person);
// }
// var person = 'George';
// greeting();
// alert(person);
// greeting();


/*
function randomNumber (cheese,whiz) {
  if (isNaN(cheese) || isNaN(whiz)) {
    throw new Error('Nigga you don fucked up')
  }
  return Math.floor(Math.random() * (cheese - whiz + 1)) + whiz;
  
}


alert(randomNumber('nine',6));
alert(randomNumber(1,6));
alert(randomNumber(2,7));
alert(randomNumber(90,1000));
alert(randomNumber(90,'five hundred'));
alert(randomNumber(500000,1000000));
*/

// // 1. Attach this file -- practice.js -- to the index.html file using a <script> tag
// /* <script src="practice.js"></script> */

// // 2. In this JavaScript file, add a prompt dialog to capture input from the user and store it in a variable
// var firstName = prompt('What is your first name: ');

// // 3. Add a second a prompt dialog to capture input from the user and store it in a second variable
// var lastName = prompt('What is your last name: ');

// // 4. Create a third variable and which combines an uppercase version values in the two other variables separated by a space. For example, if the first two variables contain "sally" and "forth", this third variable should contain the string value "SALLY FORTH"
// var completeName = firstName.toUpperCase() +' ' + lastName.toUpperCase();

// // 5. Create a fourth variable to store a number. The number should be the total number of characters in the third variable. 
// var characterCount = completeName.length;

// // 6. Add an alert dialog box that says "The string '[insert value of third variable here]' is X number of characters long." For example, if the third variable contained the string "SALLY FORTH" then the alert dialog should says "The string 'SALLY FORTH' is 11 characters long."
// alert("The string\"" + completeName + "\" is " + characterCount + " charcters long.");






// 1. Attach this file -- practice.js -- to the index.html file using a <script> tag
/* <script src="practice.js"></script> */

// 2. In this JavaScript file, add a prompt dialog to capture input from the user and store it in a variable


// 3. Add a second a prompt dialog to capture input from the user and store it in a second variable


// 4. Create a third variable and which combines an uppercase version values in the two other variables separated by a space. For example, if the first two variables contain "sally" and "forth", this third variable should contain the string value "SALLY FORTH"


// 5. Create a fourth variable to store a number. The number should be the total number of characters in the third variable. 


// 6. Add an alert dialog box that says "The string '[insert value of third variable here]' is X number of characters long." For example, if the third variable contained the string "SALLY FORTH" then the alert dialog should says "The string 'SALLY FORTH' is 11 characters long."





// // <script src="practice.js"></script>
// var firstName = prompt('What is your first name: ');
// var lastName = prompt('What is your last name: ');
// var completeName = firstName.toUpperCase() + ' ' + lastName.toUpperCase();
// var characterCount = completeName.length;
// alert("The string\"" + completeName + "\" is " + characterCount + " characters long.");








// 1. Attach this file -- practice.js -- to the index.html file using a <script> tag


// 2. In this JavaScript file, add a prompt dialog to capture input from the user and store it in a variable


// 3. Add a second a prompt dialog to capture input from the user and store it in a second variable


// 4. Create a third variable and which combines an uppercase version values in the two other variables separated by a space. For example, if the first two variables contain "sally" and "forth", this third variable should contain the string value "SALLY FORTH"


// 5. Create a fourth variable to store a number. The number should be the total number of characters in the third variable. 


// 6. Add an alert dialog box that says "The string '[insert value of third variable here]' is X number of characters long." For example, if the third variable contained the string "SALLY FORTH" then the alert dialog should says "The string 'SALLY FORTH' is 11 characters long."





// Need to add to  SuperMemo
// 1. Attach this file -- math.js -- to the index.html file using a <script> tag

// 2. Add an alert to announce the program with a message like "Let's do some math!"

// 3. Create a variable and use the prompt() method to collect a number from a visitor

// 4. Convert that value from a string to a floating point number

// 5. Repeat steps 3 and 4 to create a second variable and collect a second number

// 6. Create a new variable -- message -- which you'll use to build
//    a complete message to print to the document
//    Start by creating a string that includes <h1> tags as well
//    and the two input numbers. The string should look something like this:
//    "<h1>Math  with the numbers 3 and 4</h1>" where the two numbers are
//    the values input from the user. Use string concatenation to create this
//    and make sure you actually perform the math on the values by 
//    using the + symbol to add their values together

// 7. Add another string to the message variable. 
//    The string should look something like this after concatenation:
//    "3 + 4 = 7"

// 8. Add a linebreak tag -- <br> -- to the message variable

// 9. Continue to add to the message variable to include strings
//    demonstrating multiplication, division and subtraction
//    For example:
//    "3 * 4 = 12"
//    "3 / 4 = 0.75"
//    "3 - 4 = -1"

// 10. Use the document.write() method to print the message variable 
//     to the web page. Open the finished.png file in this workspace
//     to see what the completed output should look like


alert('Lets do some math!');
var num1 = prompt('Please type a number');
num1 = parseFloat(num1);
var num2 = prompt('Please type another number');
num2 = parseFloat(num2);
var message = "<h1>Math with the numbers " + num1 + " and " + num2 + " </h1>";
message += num1 + " + " + num2 + " = " + (num1 + num2);
message += "<br>";
message += num1 + " / " + num2 + " = " + (num1 / num2);
message += "<br>";
message += num1 + " - " + num2 + " = " + (num1 - num2);
document.write(message);





https://teamtreehouse.com/library/the-solution-8

// Edit the math.js file to accomplish these 4 goals: 

// 1. Move all of your variable declarations to the top of the script.

// 2. Add an if statement to test that the 2nd input is not zero. You can't divide by 0,
//    so notify the user with an alert, that they need to reload and try again. 
//    Here's one possible alert message:
//    ""The second number is 0. You can't divide by zero. Reload and try again."
   
// 3. Check to see if the first OR second input are numbers.
//    Use JavaScript's isNaN() method to check. See the
//    Teacher's Notes for information on this method. If one is NOT a number
//    then send an alert message. For example:
//    "At least one of the values you typed is not a number. Reload and try again."
   
// 4. Don't build the message variable, or write the message to the doc, if
//    either case 2 or 3 above fails. 

/*

// declare program variables

// announce the program
alert("Let's do some math!");

// collect numeric input
var num1 = prompt("Please type a number");
num1 = parseFloat(num1);
var num2 = prompt("Please type another number");
num2 = parseFloat(num2);

// build an HTML message
var message = "<h1>Math with the numbers " + num1 + " and " + num2 + "</h1>";
message += num1 + " + " + num2 + " = " + (num1 + num2);
message += "<br>";
message += num1 + " * " + num2 + " = " + (num1 * num2);
message += "<br>";
message += num1 + " / " + num2 + " = " + (num1 / num2);
message += "<br>";
message += num1 + " - " + num2 + " = " + (num1 - num2);
  
// write message to web page
document.write(message);
*/



// declare program variables
var num1;
var num2;
var message;

// announce the program
alert("Let's do some math!");

// collect numeric input
num1 = prompt("Please type a number");
num1 = parseFloat(num1);
num2 = prompt("Please type another number");
num2 = parseFloat(num2);

if (num2 == 0) {
    alert("The second number is 0. You can't divide by zero. Reload and try again.");
} else if (isNaN(num1) || isNaN(num2) ){
    alert("At least one of the values you typed is not a number. Reload and try again.");

} else {

    // build an HTML message
    message = "<h1>Math with the numbers " + num1 + " and " + num2 + "</h1>";
    message += num1 + " + " + num2 + " = " + (num1 + num2);
    message += "<br>";
    message += num1 + " * " + num2 + " = " + (num1 * num2);
    message += "<br>";
    message += num1 + " / " + num2 + " = " + (num1 / num2);
    message += "<br>";
    message += num1 + " - " + num2 + " = " + (num1 - num2);
    
    // write message to web page
    document.write(message);

}




















