// These variables will be used to keep track of the time in the format "minutes:seconds.tens."
let seconds = 00;
let tens = 00;
let mins = 00;
// These elements are where the current time components will display.
let getSeconds = document.querySelector('.seconds');
let getTens = document.querySelector('.tens');
let getMins = document.querySelector('.mins');
// These buttons will be used to start, stop, and reset the timer.
let btnStart = document.querySelector('.btn-start');
let btnStop = document.querySelector('.btn-stop');
let btnReset = document.querySelector('.btn-reset');
// This line declares a variable interval that will be used to store the reference to the timer interval. This reference is essential for starting and stopping the timer.
let interval;
// This code adds a click event listener to the 'Start' button (btnStart).
btnStart.addEventListener('click', () => {
    clearInterval(interval);
    inverval = setInterval(startTimer, 10);
});
// This code adds a click event listener to the 'Stop' button (btnStop)
btnStop.addEventListener('click', () => {
    clearInterval(inverval);
});
// This code adds a click event listener to the 'Reset' button (btnReset). When the button is clicked, it first clears the timer interval. Then, it resets the tens, seconds, and mins variables to '00'
btnReset.addEventListener('click', () => {
    clearInterval(inverval);
    tens = '00';
    seconds = '00';
    mins = '00';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    getMins.innerHTML = mins;
});

// The startTimer function is the core of timer logic. It increments the tens variable, updates the corresponding HTML element to display the tens of seconds, and handles rollover to seconds and minutes when necessary.
function startTimer(){
    tens++;
    if(tens <= 9){
        getTens.innerHTML = '0' + tens;
    }
    if(tens > 9){
        getTens.innerHTML = tens;
    }
    if(tens > 99){
        seconds++;
        getSeconds.innerHTML = '0' + seconds;
        tens = 0;
        getTens.innerHTML = '0' + 0;
    }
    if(seconds > 9){
        getSeconds.innerHTML = seconds;
    }
    if(seconds > 59){
        mins++;
        getMins.innerHTML = '0' + mins;
        seconds = 0;
        getSeconds.innerHTML = '0' + 0;
    }
    if(mins > 9){
        getSeconds.innerHTML = mins;
    }
}
function toggleMenu() {
    var menu = document.getElementById("clockMenu");
    if (getComputedStyle(menu).display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}
