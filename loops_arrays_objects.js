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





// var playList = [];
// playList.push('I did it my way');
// playList.push('Fuck Faces');
// playList.push('Oochie Wally');
// playList.push('Real Love');
// playList.unshift('All Eyes On Me');
// printList(playList);





// var inStock = [ 'apples', 'eggs', 'milk', 'cookies', 'cheese', 'bread', 'lettuce', 'carrot', 'broccoli', 'pizza', 'potato', 'crackers', 'onion', 'tofu', 'frozen dinner', 'cucumber'];
// var search;

// function print(message) {
//   document.write( '<p>' + message + '</p>');
// }

// while (true) {
//     search = prompt("Search for a product in our store. Type 'list' to show all the produce and 'quit' to exit");
//     search=search.toLowerCase();
//     if(search==='quit'){
//         break;
//     } else if (search==='list'){
//         print(inStock.join(', '));
//     } else {
//         if (inStock.indexOf(search) > -1 ) {
//             print('yess, we have ' + search + ' in the store.');
//         } else {
//             print(search + ' is not in stock.');
//         }
//     }
// }



/*
var playList = [ 
    ['All Eyez on Me','Tupac Shakur'],
    ['Fuck Faces','Scarface'],
    ['Area Codes','Ludacris'],
    ['Yesterday','Beatles'],
    ['Real Love','Bob Seiger'],
    ['str8 Ballin','Tupac Shakur']
];
  
  function print(message) {
    document.write(message);
  }
  
  function printSongs( songs ) {
    var listHTML = '<ol>';
    for ( var i = 0; i < songs.length; i += 1) {
      listHTML += '<li>' + songs[i][0] + ' by ' + songs[i][1] +'</li>';
    }
    listHTML += '</ol>';
    print(listHTML);
  }
  
  printSongs(playList);
  */




/*
var questions = [
    ['How many states are in the United States?', 50],
    ['How many continents are there?', 7],
    ['How many legs does an insect have?', 6]    
];
var correctAnswers = 0;
var question;
var answer;
var response;
var html;
var correct = [];
var wrong = [];

function print(message) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
}
function buildList(arr) {
    var listHTML = '<ol>';
    for (var i = 0; i < arr.length; i++) {
        listHTML += '<li>' + arr[i] + '</li>';
        
    }

    listHTML += '</ol>';
    return listHTML;
}
for (var i = 0; i < questions.length;i += 1) {
    question = questions[i][0];
    answer = questions[i][1];
    response = parseInt(prompt(question));
    if (response === answer) {
        correctAnswers += 1;
        correct.push(question);
    } else {
        wrong.push(question);
    }
}
html = "You got " + correctAnswers + " question(s) right.";
html += '<h2>You got these questions correct:</h2>';
html += buildList(correct);
html += '<h2>You got these questions wrong:</h2>';
html += buildList(wrong);
print(html);
*/




/*
var person = {
    name: 'Sarah',
    country: 'US',
    age : 35,
    treehouseStudent: true,
    skills : ['JavaScript','HTML','CSS']
};
function print(message) {
    var div = document.getElementById('output');
    div.innerHTML = message;
}
var message = '<p>Hello. My name is ' + person.name + '</p>';
message += '<p>I live in the ' + person.country + '</p>';
person.name = 'Rainbow Dash';
message += '<p>But, I wish my name was  ' + person.name + '</p>';
person.age += 1;
message += '<p>My age is now  ' + person.age + '</p>';
message += 'I have ' + person.skills.length + ' skills: ';
print(message);
*/





/*
var person = {
    name: 'Sarah',
    country: 'US',
    age : 35,
    treehouseStudent: true,
    skills : ['JavaScript','HTML','CSS']
};
for (prop in person) {
    console.log(prop,': ', person[prop]);
    
}
*/








/*
var questions = [
    {
        question: 'How many states are in the United States?', 
        answer: 50
    },
    {
        question: 'How many continents are there?', 
        answer: 7
    },
    {
        question: 'How many legs does an insect have?', 
        answer: 6
    }    
];
var correctAnswers = 0;
var question;
var answer;
var response;
var html;
var correct = [];
var wrong = [];

function print(message) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
}
function buildList(arr) {
    var listHTML = '<ol>';
    for (var i = 0; i < arr.length; i++) {
        listHTML += '<li>' + arr[i] + '</li>';
        
    }

    listHTML += '</ol>';
    return listHTML;
}
for (var i = 0; i < questions.length;i += 1) {
    question = questions[i].question;
    answer = questions[i].answer;
    response = parseInt(prompt(question));
    if (response === answer) {
        correctAnswers += 1;
        
    }
}
html = "You got " + correctAnswers + " question(s) right.";

print(html);
*/




/* ***
// students.js
var students = [
    {
        name: 'Dave',
        track: 'Front End Development',
        achievements: 158,
        points: 14730
    },
    {
        name: 'Jody',
        track: 'iOS Development with Swift',
        achievements: '175',
        points: '16375'
    },
    {
        name: 'Jordan',
        track: 'PHP Development',
        achievements: '55',
        points: '2025'
    },
    {
        name: 'John',
        track: 'Learn WordPress',
        achievements: '40',
        points: '1950'
    },
    {
        name: 'Trish',
        track: 'Rails Development',
        achievements: '5',
        points: '350'
    }
];

// student_report.js

var message = '';
var student;
var search;

function print(message) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
}
function getStudentReport(student) {
    var report = '<h2>Student: ' + student.name + '</h2>';
    report += '<p>Track: ' + student.track + '</p>';
    report += '<p>Points: ' + student.points + '</p>';
    report += '<p>Achievements: ' + student.achievements + '</p>';
    return report;
}
while (true) {
    search = prompt('Search student records: type a name [Jody] (or type "quit" to end)');
    if (search===null||search.toLowerCase()==='quit'){
        break;
    }
    for (var i = 0; i < students.length; i++) {
        student = students[i];
        if (student.name === search) {
            message = getStudentReport(student);
            print(message);
        }
        
    }

}
// print(message);
*** */
















































































