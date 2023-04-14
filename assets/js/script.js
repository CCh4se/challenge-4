var count = 5;
var timerEl = document.getElementById('clock');
var incrementEl = document.querySelector("#add-time");
var decrementEl = document.querySelector("#lose-time");
var countEl = document.querySelector("#seconds");
var scoreEl = document.querySelector("#score");
var userNameSpan = document.querySelector("#user-name");
var userScoreSpan = document.querySelector("#user-score");

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


function leaderBoard() {

}

function renderLastRegistered() {
    var name = localStorage.getItem("name");
    var scoring = localStorage.getItem("display-score");

    if (!name || !scoring) {
        return;
    }

    userNameSpan.textContent = name;
    userScoreSpan.textContent = scoring;
}