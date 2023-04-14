var timerEl = document.getElementById('clock');
var incrementEl = document.querySelector("#add-time");
var decrementEl = document.querySelector("#lose-time");

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


}

