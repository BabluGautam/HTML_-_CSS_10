let timerDisplay = document.querySelector('.timerDisplay');
let stopBtn = document.getElementById('stopBtn');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');

// first of all catch the id 

let msec = 0;
let secs = 0;
let mins = 0;

// by default all are set by zero

let timerId = null;

// assume a null means empty timerId

startBtn.addEventListener('click', function(){
    if(timerId !== null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 100   );
});

stopBtn.addEventListener('click', function(){
    clearInterval(timerId);
});

resetBtn.addEventListener('click', function(){
    clearInterval(timerId);
    timerDisplay.innerHTML = `00 : 00 : 00`;
    msec = secs = mins = 0;
});

// first of this code logic are performe(1)

function startTimer(){
    msec++; // yaha msec chlna sart kr diya 
    if(msec == 100){
        msec = 0;
        secs++;
        if(secs == 60){
            secs = 0;
mins++;
        }
    }

    // convert string into numbers 
    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;
    

    timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;

}