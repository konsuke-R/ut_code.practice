const timer = document.getElementById("timer");
const button = document.getElementById("button");
const stopbutton = document.getElementById("stopbutton");
let time = 0;
let timerId = 0;

function tick() {
    time += 1;
    timer.textContent = time;
}

function start() {
    timerId = setInterval(tick,1000);
}

function stop() {
    clearInterval(timerId);
}

stopbutton.onclick = stop;
button.onclick = start;