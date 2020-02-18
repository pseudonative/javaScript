/*
function randomNumber(upper) {
    return Math.floor(Math.random() * upper ) +1;
}
var counter = 0;
while(counter < 100) {
    var ranNum = randomNumber(6);
    document.write(ranNum + ' ');
    counter += 1;
}
*/



/*
var upper = 10000;
var randomNumber = getRandomNumber(upper);
var guess;
var attempts = 0;

function getRandomNumber(upper) {
    return Math.floor(Math.random() * upper ) +1;
}
while (guess !== randomNumber) {
    guess = getRandomNumber(upper);
    attempts +=1;
}
document.write("<p>The random number was: " + randomNumber + "</p>");
document.write("<p>It took the computer " + attempts + " attempts to get it right. </p>")
*/






/*
var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false;

function getRandomNumber( upper ) {
  var num = Math.floor(Math.random() * upper) + 1; 
  return num;
}
do {
    guess = prompt('I am thinking of a number between 1 and 10. what is it? ');
    guessCount += 1;
    if (parseInt(guess)=== randomNumber) {
        correctGuess = true;
    }
} while (! correctGuess) 
    document.write('<h1>You guessed the number!</h1>');
    document.write('It took you ' + guessCount + ' tries to guess the number ' + randomNumber);
*/





/*
var num = 3;
for (var i = 4; i <= 156; i +=1) {
  num+=1;
  console.log(num);
}
*/




/*
var html = '';
var rgbColor;

function randomRGB() {
    return Math.floor(Math.random() * 256);
}
function randomColor() {
    var color = 'rgb('
    color += randomRGB() + ',';
    color += randomRGB() + ',';
    color += randomRGB() + ')';
    return color;
}
function print(message){
    document.write(message);
}
for (var i = 1; i <=100; i +=1){
    rgbColor = randomColor;
    html += '<div style="background-color:' + rgbColor + '"></div>';
}

print(html);
*/



/*
var num = 0;
undefined
for(var i = 2; i <=24; i+=2){
num +=2;
console.log(num);
}
*/



// var shoppingList = [
//     'carrots',
//     'milk',
//     'eggs'
// ];
// // console.log(shoppingList[0]);
// // console.log(shoppingList[1]);
// // console.log(shoppingList[2]);
// // console.log(shoppingList[3]);





var playList = [];
playList.push('I did it my way');
playList.push('Fuck Faces');
playList.push('Oochie Wally');
playList.push('Real Love');
playList.unshift('All Eyes On Me');
printList(playList);


















































