var count = 5;
var timerEl = document.getElementById('clock');
var incrementEl = document.querySelector("#add-time");
var decrementEl = document.querySelector("#lose-time");
var countEl = document.querySelector("#seconds");
var scoreEl = document.querySelector("#score");
var userNameSpan = document.querySelector("#user-name");
var userScoreSpan = document.querySelector("#user-score");
var question = document.querySelector("#question");
var answer = document.querySelector("#answer");
var choices = document.querySelector("#choices");



function clock() {
    var timeLeft = 60;

    var timeInterval = setInterval(function (){
        if (timeLeft > 1 ){
            timerEl.textContent = timeLeft;
            timeLeft--;
        } else { 
            timerEl.textContent = '';
            clearInterval(timeInterval);
            displayMessage();
        }
    }, 1000);

    incrementEl.addEventListener("correct", function() {
        count++;
        clock();
    })

    decrementEl.addEventListener("wrong", function() {
        if (count > 0){
            count--;
            clock();
        }
    })
}

function grade() {
    var baseLine = 0;

    var scoreInterval = setInterval(function (){
        if (baseLine > 1){
            scoreInterval = baseLine;
            baseLine--; 
        } else {
            scoreEl.textContent = '';
            clearInterval(scoreInterval);
            displayMessage()
        }
    })

    incrementEl.addEventListener("correct", function() {
        count++;
        grade();
    })

    decrementEl.addEventListener("wrong", function () {
        if (grade > 0){
            count--;
            grade();
        }
    })
}

const question = "What does <p> stand for in html?";
const choices = ["Parentheses","Paragraph","Heading","Body"];

const answer = prompt(question + "/n/n" + choices.join("/n"));

if (answer.toLowerCase() === "paragraph") {
    prompt("Correct");
} else {
    prompt("Wrong, the correct answer is paragraph");
}

const question = "How do you use a hyperlink in html?";
const choices = ["a href", "p", "h1", "div"];

const answer = prompt(question + "/n/n" + choices.join("/n")); 

if (answer.toLowerCase() === "a href") {
    prompt("Correct");
} else {
    prompt("Wrong, the correct answer is a href");
}

const question = "What program do we use in class to code?";
const choices = ["git bash", "command console", "google", "vscode"];

const answer = prompt(question + "/n/n" + choices.join("/n")); 

if (answer.toLowerCase() === "vscode") {
    prompt("Correct");
} else {
    prompt("Wrong, the correct answer is vscode");
}