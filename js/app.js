'use strict';

var name = prompt("Enter your name");
var gender = prompt("Enter your gender");

var age = prompt("Enter your age")

if (age > 0) {
    age = age
}
else {
    alert("you have entered a zero or less as an age!")
};

var conf = confirm("Do you want to skip the welcoming message?");
if (conf == true) {
} else {
    if (gender == "male") {
        alert("Welcome Mr " + name)
    } else if (gender == "female") {
        alert("Welcome Ms " + name)
    } else {
        alert("Welcome " + name)
    }
};


function showQuestion(question) {
    var answer = prompt(question);
    if (answer == "") {
        answer = "invalid";
    }
    return answer;
}

var qOne = showQuestion("Do you like pizza?");
var qTwo = showQuestion("Do you like football?");
var qThree = showQuestion("Do like gaming?");

var answers = [qOne, qTwo, qThree];

for (var i = 0; i < answers.length; i++) {
    console.log(answers[i])
}
